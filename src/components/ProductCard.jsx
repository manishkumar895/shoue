import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, Star, ShoppingBag, Eye, Zap, Check } from 'lucide-react';

export default function ProductCard({ product }) {
  const {
    formatPrice,
    toggleWishlist,
    isInWishlist,
    setSelectedProduct,
    addToCart
  } = useShop();

  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [sizePickerOpen, setSizePickerOpen] = useState(false);

  const isLiked = isInWishlist(product.id);
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  // Use primary image or secondary image on hover
  const displayImage = hovered && product.images[1] ? product.images[1] : product.images[0];

  const handleQuickAdd = (sizeObj) => {
    addToCart(product, sizeObj.size, product.colors[selectedColorIdx], 1);
    setSizePickerOpen(false);
  };

  return (
    <div
      className="group relative flex flex-col rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setSizePickerOpen(false);
      }}
    >
      {/* Top Badges & Wishlist Action */}
      <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex flex-col gap-1 items-start">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-neutral-950/90 text-orange-400 border border-orange-500/30 backdrop-blur-md shadow-md">
              {product.badge}
            </span>
          )}
          {discountPercent && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-rose-500 text-white shadow-md">
              -{discountPercent}%
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="pointer-events-auto p-2 rounded-full bg-neutral-950/80 border border-white/10 text-neutral-300 hover:text-white hover:scale-110 active:scale-95 transition-all shadow-md backdrop-blur-md"
          title={isLiked ? "Remove from Wishlist" : "Save to Wishlist"}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'text-rose-500 fill-rose-500' : ''}`} />
        </button>
      </div>

      {/* Sneaker Image Container */}
      <div
        onClick={() => setSelectedProduct(product)}
        className="relative h-64 sm:h-72 w-full p-6 flex items-center justify-center bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 cursor-pointer overflow-hidden"
      >
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500"
          loading="lazy"
        />

        {/* Quick View Pill on Hover */}
        <div className="absolute bottom-3 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-950/90 border border-white/20 text-xs font-semibold text-white shadow-xl backdrop-blur-md">
            <Eye className="w-3.5 h-3.5 text-orange-400" /> Quick View
          </span>
        </div>
      </div>

      {/* Card Info Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
            <span className="font-bold text-neutral-500 uppercase tracking-wider">{product.brand}</span>
            <div className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{product.rating}</span>
              <span className="text-neutral-500 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Shoe Name */}
          <h3
            onClick={() => setSelectedProduct(product)}
            className="text-base font-bold text-white hover:text-orange-400 transition-colors line-clamp-1 cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>

          <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5 mb-3 font-normal">
            {product.tagline}
          </p>
        </div>

        <div>
          {/* Color Swatches */}
          <div className="flex items-center justify-between py-2 border-t border-neutral-800/80 mb-3">
            <span className="text-[11px] text-neutral-400">
              {product.colors.length} Colorways
            </span>
            <div className="flex items-center gap-1.5">
              {product.colors.map((color, idx) => (
                <button
                  key={color.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColorIdx(idx);
                  }}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    selectedColorIdx === idx ? 'border-orange-500 scale-125' : 'border-neutral-700'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Pricing & Add to Cart button */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex flex-col">
              <span className="text-lg font-black text-white font-['Space_Grotesk']">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-neutral-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSizePickerOpen(!sizePickerOpen);
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-all shadow-md shadow-orange-600/20 active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>

              {/* Instant Size Selector Flyout */}
              {sizePickerOpen && (
                <div
                  className="absolute bottom-11 right-0 w-64 bg-neutral-950 border border-neutral-700 p-3 rounded-2xl shadow-2xl z-40 animate-in fade-in zoom-in-95"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-300">
                      Select US Size:
                    </span>
                    <span className="text-[10px] text-orange-400">In Stock</span>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5 max-h-36 overflow-y-auto pr-1">
                    {product.sizes.map((s) => (
                      <button
                        key={s.size}
                        disabled={s.stock === 0}
                        onClick={() => handleQuickAdd(s)}
                        className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                          s.stock > 0
                            ? 'bg-neutral-900 text-white hover:bg-orange-600 hover:text-white border border-neutral-800'
                            : 'bg-neutral-900/40 text-neutral-600 border border-neutral-800/40 cursor-not-allowed line-through'
                        }`}
                        title={s.stock > 0 ? `${s.stock} pairs left` : 'Out of stock'}
                      >
                        {s.size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
