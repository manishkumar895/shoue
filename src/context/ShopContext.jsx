import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS, CURRENCIES, PROMO_CODES } from '../data/products';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('solevault_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('solevault_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Orders state persisted to localStorage
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('solevault_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [priceRange, setPriceRange] = useState([50, 450]);
  const [sortBy, setSortBy] = useState('featured');

  // Currency
  const [currency, setCurrency] = useState('USD');

  // Modals & Active Views
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isOrderTrackerOpen, setIsOrderTrackerOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeOrder, setActiveOrder] = useState(null);

  // Promo code
  const [appliedPromo, setAppliedPromo] = useState(null);

  // Toasts
  const [toasts, setToasts] = useState([]);

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('solevault_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Save wishlist to local storage
  useEffect(() => {
    try {
      localStorage.setItem('solevault_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Save orders to local storage
  useEffect(() => {
    try {
      localStorage.setItem('solevault_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  // Toast notification helper
  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Currency formatter
  const formatPrice = (usdAmount) => {
    if (usdAmount == null || isNaN(usdAmount)) return '';
    const info = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = usdAmount * info.rate;
    if (currency === 'INR') {
      return `${info.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
    }
    return `${info.symbol}${converted.toFixed(2)}`;
  };

  // Cart operations
  const addToCart = (product, size, color, quantity = 1, customDetails = null) => {
    if (!size) {
      showToast('Please select a shoe size first', 'error');
      return false;
    }

    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.id === product.id &&
          item.size === size &&
          item.color === (color?.name || color) &&
          !item.customDetails &&
          !customDetails
      );

      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += quantity;
        return copy;
      } else {
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.images ? product.images[0] : (product.image || ''),
            size,
            color: color?.name || color || 'Standard',
            colorHex: color?.hex,
            quantity,
            customDetails
          }
        ];
      }
    });

    showToast(`Added ${product.name} (US ${size}) to cart!`, 'success');
    return true;
  };

  const updateCartQuantity = (index, delta) => {
    setCart((prev) => {
      const copy = [...prev];
      const newQty = copy[index].quantity + delta;
      if (newQty <= 0) {
        return copy.filter((_, i) => i !== index);
      }
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const removeFromCart = (index) => {
    const item = cart[index];
    setCart((prev) => prev.filter((_, i) => i !== index));
    if (item) {
      showToast(`Removed ${item.name} from cart`, 'info');
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist toggle
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const product = PRODUCTS.find((p) => p.id === productId);
      const name = product ? product.name : 'Sneaker';

      if (exists) {
        showToast(`Removed ${name} from wishlist`, 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast(`Saved ${name} to your wishlist ❤️`, 'success');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Promo code validation
  const applyPromoCode = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (PROMO_CODES[cleanCode]) {
      setAppliedPromo({ code: cleanCode, ...PROMO_CODES[cleanCode] });
      showToast(`Promo "${cleanCode}" applied: ${PROMO_CODES[cleanCode].description}`, 'success');
      return true;
    } else {
      showToast('Invalid promo code. Try "SNEAKER20" for 20% off!', 'error');
      return false;
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    showToast('Promo code removed', 'info');
  };

  // Cart calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = appliedPromo?.discountPercent
    ? (cartSubtotal * appliedPromo.discountPercent) / 100
    : 0;
  
  const standardShipping = cartSubtotal > 150 || appliedPromo?.freeShipping || cart.length === 0 ? 0 : 15;
  const estimatedTax = cartSubtotal > 0 ? (cartSubtotal - discountAmount) * 0.08 : 0;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + standardShipping + estimatedTax);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Order placement
  const placeOrder = (orderData) => {
    const newOrder = {
      orderId: 'SV-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      items: [...cart],
      subtotal: cartSubtotal,
      discount: discountAmount,
      shipping: standardShipping,
      tax: estimatedTax,
      total: cartTotal,
      currency,
      customer: orderData,
      status: 'Confirmed',
      trackingStep: 1, // 1: Confirmed, 2: Authenticated, 3: Packaged, 4: Shipped, 5: Out for Delivery
      carrier: 'FedEx Sneaker Priority',
      trackingCode: 'FDX-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      })
    };

    setOrders((prev) => [newOrder, ...prev]);
    setActiveOrder(newOrder);
    clearCart();
    setAppliedPromo(null);
    setIsCheckoutOpen(false);
    showToast('Order confirmed successfully! 🎉', 'success');
    return newOrder;
  };

  // Filter products logic
  const filteredProducts = PRODUCTS.filter((product) => {
    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchBrand = product.brand.toLowerCase().includes(q);
      const matchCategory = product.category.toLowerCase().includes(q);
      const matchTag = product.tagline?.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchCategory && !matchTag) return false;
    }

    // Category
    if (selectedCategory !== 'All' && product.category !== selectedCategory) {
      return false;
    }

    // Brand
    if (selectedBrand !== 'All' && product.brand !== selectedBrand) {
      return false;
    }

    // Gender
    if (selectedGender !== 'All' && product.gender !== selectedGender && product.gender !== 'Unisex') {
      return false;
    }

    // Size
    if (selectedSize !== 'All') {
      const hasSize = product.sizes.some((s) => s.size === selectedSize && s.stock > 0);
      if (!hasSize) return false;
    }

    // Price
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <ShopContext.Provider
      value={{
        // Catalog & Filters
        products: PRODUCTS,
        filteredProducts,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedBrand,
        setSelectedBrand,
        selectedGender,
        setSelectedGender,
        selectedSize,
        setSelectedSize,
        priceRange,
        setPriceRange,
        sortBy,
        setSortBy,

        // Cart
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        cartItemCount,
        cartSubtotal,
        discountAmount,
        standardShipping,
        estimatedTax,
        cartTotal,

        // Wishlist
        wishlist,
        toggleWishlist,
        isInWishlist,

        // Promo
        appliedPromo,
        applyPromoCode,
        removePromoCode,

        // Orders
        orders,
        activeOrder,
        setActiveOrder,
        placeOrder,

        // Currency
        currency,
        setCurrency,
        formatPrice,

        // Modals & Navigation
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        isOrderTrackerOpen,
        setIsOrderTrackerOpen,
        isCustomizerOpen,
        setIsCustomizerOpen,
        selectedProduct,
        setSelectedProduct,

        // Toast
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);
