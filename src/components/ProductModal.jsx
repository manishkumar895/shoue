import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  Star, 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Ruler, 
  Check, 
  Share2, 
  Zap,
  MessageSquare
} from 'lucide-react';

export default function ProductModal() {
  const {
    selectedProduct,
    setSelectedProduct,
    addToCart,
    formatPrice,
    toggleWishlist,
    isInWishlist,
    setIsCheckoutOpen,
    setIsSizeGuideOpen,
    showToast
  } = useShop();

  if (!selectedProduct) return null;

  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'desc' | 'reviews' | 'shipping'

  // New review form state
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [reviewsList, setReviewsList] = useState(selectedProduct.reviews || []);

  const isLiked = isInWishlist(selectedProduct.id);

  const handleAdd = () => {
    if (!selectedSize) {
      showToast('Please select your shoe size before adding to cart', 'error');
      return;
    }
    addToCart(selectedProduct, selectedSize, selectedColor, quantity);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      showToast('Please select your shoe size first', 'error');
      return;
    }
    const added = addToCart(selectedProduct, selectedSize, selectedColor, quantity);
    if (added) {
      setSelectedProduct(null);
      setIsCheckoutOpen(true);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link copied to clipboard!', 'info');
    }
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) {
      showToast('Please provide your name and review', 'error');
      return;
    }
    const newRev = {
      user: newReviewAuthor.trim(),
      rating: newReviewRating,
      date: 'Just now',
      verified: true,
      title: 'Verified Customer Experience',
      comment: newReviewComment.trim()
    };
    setReviewsList([newRev, ...reviewsList]);
    setNewReviewAuthor('');
    setNewReviewComment('');
    showToast('Thank you! Your review has been published.', 'success');
  };

  const selectedStockObj = selectedSize
    ? selectedProduct.sizes.find((s) => s.size === selectedSize)
    : null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-neutral-900/90 text-neutral-400 hover:text-white border border-neutral-700/80 transition-all hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-neutral-900/30">
            {/* Main Image Stage */}
            <div className="relative h-72 sm:h-96 w-full flex items-center justify-center p-4">
              <img
                src={selectedProduct.images[activeImgIdx] || selectedProduct.images[0]}
                alt={selectedProduct.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.7)] transition-all duration-300"
              />

              {/* Badge */}
              {selectedProduct.badge && (
                <div className="absolute top-2 left-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-orange-600 text-white shadow-md">
                    {selectedProduct.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Selector */}
            <div className="flex items-center gap-3 justify-center pt-4 overflow-x-auto">
              {selectedProduct.images.map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImgIdx(i)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-neutral-900 border-2 p-1.5 transition-all shrink-0 ${
                    activeImgIdx === i ? 'border-orange-500 scale-105 shadow-md shadow-orange-500/20' : 'border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

            {/* Verification Guarantee */}
            <div className="mt-6 p-3.5 rounded-2xl bg-neutral-900/70 border border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Verified Authentic Guarantee</span>
              </div>
              <button onClick={handleShare} className="flex items-center gap-1 text-orange-400 hover:text-orange-300 font-semibold cursor-pointer">
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
            </div>
          </div>

          {/* Right Column: Shoe Details, Sizing & Actions */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Brand, Rating, Wishlist */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-orange-500">
                  {selectedProduct.brand} • {selectedProduct.category}
                </span>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{selectedProduct.rating}</span>
                    <span className="text-neutral-500 text-xs font-normal">({reviewsList.length} reviews)</span>
                  </div>

                  <button
                    onClick={() => toggleWishlist(selectedProduct.id)}
                    className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'text-rose-500 fill-rose-500' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Title & Price */}
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 font-['Space_Grotesk'] leading-tight">
                {selectedProduct.name}
              </h2>

              <p className="text-sm text-neutral-400 mt-1">
                {selectedProduct.tagline}
              </p>

              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-3xl font-black text-white font-mono">
                  {formatPrice(selectedProduct.price)}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-sm text-neutral-500 line-through">
                    {formatPrice(selectedProduct.originalPrice)}
                  </span>
                )}
                {selectedProduct.originalPrice && (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    Save {Math.round(((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              {/* Colorway Selection */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="text-neutral-300">Colorway:</span>
                  <span className="text-orange-400">{selectedColor.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                        selectedColor.name === color.name
                          ? 'border-orange-500 bg-orange-500/10 text-white'
                          : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: color.hex }} />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector with Size Guide Trigger */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <span>Select Size (US):</span>
                    {selectedSize && (
                      <span className="text-orange-400 font-black">US {selectedSize}</span>
                    )}
                  </div>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="flex items-center gap-1 text-orange-400 hover:underline text-xs cursor-pointer"
                  >
                    <Ruler className="w-3.5 h-3.5" /> Size Chart
                  </button>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {selectedProduct.sizes.map((s) => (
                    <button
                      key={s.size}
                      disabled={s.stock === 0}
                      onClick={() => setSelectedSize(s.size)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all relative ${
                        selectedSize === s.size
                          ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                          : s.stock > 0
                          ? 'bg-neutral-900 text-neutral-200 hover:bg-neutral-800 border border-neutral-800'
                          : 'bg-neutral-900/30 text-neutral-600 border border-neutral-900 cursor-not-allowed line-through'
                      }`}
                    >
                      {s.size}
                    </button>
                  ))}
                </div>

                {/* Stock Urgency indicator */}
                {selectedStockObj && (
                  <div className="mt-2 text-xs">
                    {selectedStockObj.stock <= 3 ? (
                      <span className="text-amber-400 font-semibold flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5" /> High demand: Only {selectedStockObj.stock} pairs left in US {selectedSize}!
                      </span>
                    ) : (
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> In Stock & Ready to Ship within 24h
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Quantity selector & Add buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 w-full sm:w-32">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-neutral-400 hover:text-white text-lg font-bold px-2"
                  >
                    -
                  </button>
                  <span className="text-white font-bold text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-neutral-400 hover:text-white text-lg font-bold px-2"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Bag</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="py-3.5 px-6 rounded-xl bg-neutral-100 hover:bg-white text-neutral-950 font-black text-sm active:scale-98 transition-all cursor-pointer"
                >
                  Instant Checkout
                </button>
              </div>

              {/* Tab Navigation: Specs, Heritage, Reviews */}
              <div className="mt-8 border-t border-neutral-800 pt-5">
                <div className="flex border-b border-neutral-800 gap-4 text-xs font-bold uppercase tracking-wider mb-4">
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2 transition-colors ${activeTab === 'specs' ? 'border-b-2 border-orange-500 text-orange-400' : 'text-neutral-500 hover:text-neutral-300'}`}
                  >
                    Specs
                  </button>
                  <button
                    onClick={() => setActiveTab('desc')}
                    className={`pb-2 transition-colors ${activeTab === 'desc' ? 'border-b-2 border-orange-500 text-orange-400' : 'text-neutral-500 hover:text-neutral-300'}`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`pb-2 transition-colors ${activeTab === 'reviews' ? 'border-b-2 border-orange-500 text-orange-400' : 'text-neutral-500 hover:text-neutral-300'}`}
                  >
                    Reviews ({reviewsList.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('shipping')}
                    className={`pb-2 transition-colors ${activeTab === 'shipping' ? 'border-b-2 border-orange-500 text-orange-400' : 'text-neutral-500 hover:text-neutral-300'}`}
                  >
                    Shipping
                  </button>
                </div>

                {/* Tab 1: Specs */}
                {activeTab === 'specs' && (
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(selectedProduct.specs).map(([key, val]) => (
                      <div key={key} className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                        <span className="block text-neutral-500 uppercase tracking-wider text-[10px] font-semibold">{key}</span>
                        <span className="font-bold text-neutral-200 mt-0.5 block">{val}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 2: Description */}
                {activeTab === 'desc' && (
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                )}

                {/* Tab 3: Reviews */}
                {activeTab === 'reviews' && (
                  <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
                    {/* Add Review Form */}
                    <form onSubmit={handleAddReview} className="p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white">Write a Review</span>
                        <div className="flex gap-1 text-amber-400">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <button
                              type="button"
                              key={s}
                              onClick={() => setNewReviewRating(s)}
                              className="focus:outline-none"
                            >
                              <Star className={`w-3.5 h-3.5 ${s <= newReviewRating ? 'fill-amber-400' : 'text-neutral-600'}`} />
                            </button>
                          ))}
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="Your Name (e.g. Alex M.)"
                        value={newReviewAuthor}
                        onChange={(e) => setNewReviewAuthor(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                      />
                      <textarea
                        placeholder="How does it feel? Mention fit, responsiveness, or cushioning..."
                        rows={2}
                        value={newReviewComment}
                        onChange={(e) => setNewReviewComment(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                      />
                      <button
                        type="submit"
                        className="w-full py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs"
                      >
                        Submit Review
                      </button>
                    </form>

                    {/* Reviews List */}
                    {reviewsList.map((rev, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/60 text-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-white flex items-center gap-1.5">
                            {rev.user}
                            {rev.verified && (
                              <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5">
                                <Check className="w-3 h-3" /> Verified Buyer
                              </span>
                            )}
                          </span>
                          <span className="text-neutral-500 text-[10px]">{rev.date}</span>
                        </div>
                        <div className="flex text-amber-400 mb-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400" />
                          ))}
                        </div>
                        <p className="text-neutral-300">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 4: Shipping & Guarantees */}
                {activeTab === 'shipping' && (
                  <div className="space-y-3 text-xs text-neutral-300">
                    <div className="flex items-start gap-2.5">
                      <Truck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Express Courier Delivery</strong>
                        Orders placed before 2 PM EST ship the same day via FedEx Air with end-to-end telemetry tracking.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <RotateCcw className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">30-Day Wear & Run Guarantee</strong>
                        Test them on the track or the street. If the sizing or arch support isn't perfect, enjoy complimentary exchanges.
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
