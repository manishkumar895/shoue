import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  Tag, 
  Check, 
  Truck, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    discountAmount,
    standardShipping,
    estimatedTax,
    cartTotal,
    formatPrice,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    setIsCheckoutOpen
  } = useShop();

  const [promoInput, setPromoInput] = useState('');

  if (!isCartOpen) return null;

  const freeShippingThreshold = 150;
  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));
  const diffToFree = freeShippingThreshold - cartSubtotal;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoInput.trim()) {
      applyPromoCode(promoInput.trim());
      setPromoInput('');
    }
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide Drawer Panel */}
      <div className="relative w-full max-w-md bg-neutral-950 border-l border-neutral-800 h-full flex flex-col z-10 shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-orange-500" />
            <h2 className="text-base font-black text-white uppercase tracking-wider font-['Space_Grotesk']">
              Your Bag ({cart.length})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-neutral-900/60 border-b border-neutral-800/80">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-medium text-neutral-300 flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-orange-400" />
              {diffToFree <= 0 ? (
                <span className="text-emerald-400 font-bold">You unlocked FREE Express Shipping!</span>
              ) : (
                <span>Add <strong className="text-orange-400">{formatPrice(diffToFree)}</strong> more for FREE Shipping</span>
              )}
            </span>
            <span className="text-[11px] font-bold text-neutral-400">{progressPercent}%</span>
          </div>
          <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${diffToFree <= 0 ? 'bg-emerald-500' : 'bg-gradient-to-r from-orange-500 to-amber-400'}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 mb-4 border border-neutral-800">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Your bag is empty</h3>
              <p className="text-xs text-neutral-400 max-w-xs mb-6">
                Explore the latest super shoes, archival sneakers, and bespoke custom silhouettes.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 transition-all cursor-pointer"
              >
                Browse Shoe Vault
              </button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div
                key={`${item.id}-${item.size}-${item.color}-${idx}`}
                className="flex gap-4 p-3.5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/80 transition-all"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-xl bg-neutral-950 p-2 flex items-center justify-center shrink-0 border border-neutral-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs font-bold text-white line-clamp-1 pr-2">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(idx)}
                        className="text-neutral-500 hover:text-rose-400 transition-colors p-0.5"
                        title="Remove Item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-neutral-400 mt-0.5">
                      <span className="font-semibold text-neutral-200">Size: US {item.size}</span>
                      <span>•</span>
                      <span className="truncate">{item.color}</span>
                    </div>

                    {item.customDetails && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-orange-400 font-semibold bg-orange-500/10 px-1.5 py-0.5 rounded mt-1">
                        <Sparkles className="w-2.5 h-2.5" /> Custom Crafted: "{item.customDetails.engraving || 'Custom'}"
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 mt-1 border-t border-neutral-800/50">
                    <span className="text-sm font-black text-white font-mono">
                      {formatPrice(item.price * item.quantity)}
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 rounded-lg px-2 py-0.5">
                      <button
                        onClick={() => updateCartQuantity(idx, -1)}
                        className="text-neutral-400 hover:text-white font-bold text-xs"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-white w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(idx, 1)}
                        className="text-neutral-400 hover:text-white font-bold text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-neutral-800 bg-neutral-950/90 space-y-4">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Promo Code (e.g. SNEAKER20)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 uppercase font-mono"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Apply
              </button>
            </form>

            {/* Applied Promo Pill */}
            {appliedPromo && (
              <div className="flex items-center justify-between p-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-xs">
                <span className="text-orange-400 font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> Promo "{appliedPromo.code}" Active
                </span>
                <button
                  onClick={removePromoCode}
                  className="text-neutral-400 hover:text-rose-400"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs text-neutral-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white font-mono">{formatPrice(cartSubtotal)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400 font-medium">
                  <span>Discount</span>
                  <span className="font-mono">-{formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="text-white font-mono">
                  {standardShipping === 0 ? (
                    <span className="text-emerald-400 font-bold">FREE</span>
                  ) : (
                    formatPrice(standardShipping)
                  )}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Estimated Sales Tax</span>
                <span className="text-white font-mono">{formatPrice(estimatedTax)}</span>
              </div>

              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-neutral-800">
                <span className="font-['Space_Grotesk'] uppercase">Total</span>
                <span className="text-base font-black text-orange-400 font-mono">
                  {formatPrice(cartTotal)}
                </span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={handleProceedCheckout}
              className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 256-Bit SSL Encrypted
              </span>
              <span>•</span>
              <span>FedEx Tracked</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
