import React from 'react';
import { useShop } from '../context/ShopContext';
import { BRANDS, CATEGORIES } from '../data/products';
import { SlidersHorizontal, RotateCcw, X, Check } from 'lucide-react';

export default function FilterSidebar({ isMobileOpen, onCloseMobile }) {
  const {
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
    filteredProducts,
    formatPrice
  } = useShop();

  const allSizes = ["6.0", "6.5", "7.0", "7.5", "8.0", "8.5", "9.0", "9.5", "10.0", "10.5", "11.0", "11.5", "12.0", "13.0"];

  const handleReset = () => {
    setSelectedCategory('All');
    setSelectedBrand('All');
    setSelectedGender('All');
    setSelectedSize('All');
    setPriceRange([50, 450]);
  };

  const isFiltered =
    selectedCategory !== 'All' ||
    selectedBrand !== 'All' ||
    selectedGender !== 'All' ||
    selectedSize !== 'All' ||
    priceRange[0] !== 50 ||
    priceRange[1] !== 450;

  const content = (
    <div className="space-y-6 text-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
        <div className="flex items-center gap-2 font-bold text-white uppercase tracking-wider text-xs">
          <SlidersHorizontal className="w-4 h-4 text-orange-400" />
          <span>Filters</span>
          <span className="text-neutral-500 font-normal">({filteredProducts.length} kicks)</span>
        </div>
        {isFiltered && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-medium transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
          Category
        </label>
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
          Brand
        </label>
        <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
          <button
            onClick={() => setSelectedBrand('All')}
            className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedBrand === 'All' ? 'bg-orange-500/10 text-orange-400 font-bold' : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
            }`}
          >
            <span>All Brands</span>
            {selectedBrand === 'All' && <Check className="w-3.5 h-3.5 text-orange-400" />}
          </button>
          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedBrand === brand ? 'bg-orange-500/10 text-orange-400 font-bold' : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
              }`}
            >
              <span>{brand}</span>
              {selectedBrand === brand && <Check className="w-3.5 h-3.5 text-orange-400" />}
            </button>
          ))}
        </div>
      </div>

      {/* Gender */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
          Gender
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {['All', 'Men', 'Women'].map((gender) => (
            <button
              key={gender}
              onClick={() => setSelectedGender(gender)}
              className={`py-1.5 rounded-lg text-xs font-semibold text-center transition-all ${
                selectedGender === gender
                  ? 'bg-neutral-800 text-orange-400 border border-orange-500/40 shadow-sm'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selector */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            Shoe Size (US)
          </label>
          {selectedSize !== 'All' && (
            <button
              onClick={() => setSelectedSize('All')}
              className="text-[11px] text-neutral-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {allSizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(selectedSize === size ? 'All' : size)}
              className={`py-2 rounded-lg text-xs font-bold transition-all ${
                selectedSize === size
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            Max Price:
          </label>
          <span className="text-xs font-black text-orange-400 font-mono">
            {formatPrice(priceRange[1])}
          </span>
        </div>
        <input
          type="range"
          min="50"
          max="450"
          step="10"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="w-full accent-orange-500 cursor-pointer bg-neutral-800 h-1.5 rounded-lg"
        />
        <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
          <span>{formatPrice(50)}</span>
          <span>{formatPrice(450)}</span>
        </div>
      </div>

    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-sm self-start sticky top-28">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onCloseMobile} />
          <div className="relative ml-auto w-full max-w-xs bg-neutral-950 p-6 overflow-y-auto h-full border-l border-neutral-800 z-10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-base font-black text-white font-['Space_Grotesk']">FILTER SHOES</span>
                <button onClick={onCloseMobile} className="p-1 rounded-lg text-neutral-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {content}
            </div>

            <button
              onClick={onCloseMobile}
              className="mt-6 w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      )}
    </>
  );
}
