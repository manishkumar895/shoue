import React, { useState } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterSidebar from './components/FilterSidebar';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import CustomizerStudio from './components/CustomizerStudio';
import OrderTrackerModal from './components/OrderTrackerModal';
import SizeGuideModal from './components/SizeGuideModal';
import Toast from './components/Toast';
import Footer from './components/Footer';
import { 
  SlidersHorizontal, 
  Sparkles, 
  ArrowUpDown, 
  Flame, 
  RotateCcw,
  Search,
  Grid3X3
} from 'lucide-react';

function ShopContent() {
  const {
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    isCustomizerOpen,
    setIsCustomizerOpen,
    priceRange,
    setPriceRange,
    selectedBrand,
    setSelectedBrand,
    selectedGender,
    setSelectedGender,
    selectedSize,
    setSelectedSize
  } = useShop();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const isFiltered =
    selectedCategory !== 'All' ||
    selectedBrand !== 'All' ||
    selectedGender !== 'All' ||
    selectedSize !== 'All' ||
    priceRange[0] !== 50 ||
    priceRange[1] !== 450 ||
    searchQuery.trim() !== '';

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedBrand('All');
    setSelectedGender('All');
    setSelectedSize('All');
    setPriceRange([50, 450]);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-neutral-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <Header onOpenCustomizer={() => setIsCustomizerOpen(true)} />

      {/* Hero Drop Showcase */}
      <Hero onOpenCustomizer={() => setIsCustomizerOpen(true)} />

      {/* Main Catalog Section */}
      <main id="catalog-section" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Catalog Control Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-400 mb-1">
              <Flame className="w-4 h-4 fill-orange-400" />
              <span>Vault Catalog</span>
              {selectedCategory !== 'All' && <span>• {selectedCategory}</span>}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk']">
              {selectedCategory === 'All' ? 'All Footwear & Grails' : `${selectedCategory} Collection`}
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Showing {filteredProducts.length} authenticated models curated for performance & aesthetics.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white"
            >
              <SlidersHorizontal className="w-4 h-4 text-orange-400" />
              <span>Filters ({filteredProducts.length})</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-3 py-2 rounded-xl text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
              <span className="text-neutral-400 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="featured" className="bg-neutral-900">Featured Drops</option>
                <option value="newest" className="bg-neutral-900">Newest First</option>
                <option value="price-asc" className="bg-neutral-900">Price: Low to High</option>
                <option value="price-desc" className="bg-neutral-900">Price: High to Low</option>
                <option value="rating" className="bg-neutral-900">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {isFiltered && (
          <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
            <span className="text-neutral-400 text-[11px] font-semibold">Active filters:</span>
            {searchQuery && (
              <span className="px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center gap-1.5 font-medium">
                Search: "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="hover:text-white font-bold ml-1">×</button>
              </span>
            )}
            {selectedCategory !== 'All' && (
              <span className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-white flex items-center gap-1.5 font-medium">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('All')} className="text-neutral-400 hover:text-white ml-1">×</button>
              </span>
            )}
            {selectedBrand !== 'All' && (
              <span className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-white flex items-center gap-1.5 font-medium">
                Brand: {selectedBrand}
                <button onClick={() => setSelectedBrand('All')} className="text-neutral-400 hover:text-white ml-1">×</button>
              </span>
            )}
            {selectedGender !== 'All' && (
              <span className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-white flex items-center gap-1.5 font-medium">
                Gender: {selectedGender}
                <button onClick={() => setSelectedGender('All')} className="text-neutral-400 hover:text-white ml-1">×</button>
              </span>
            )}
            {selectedSize !== 'All' && (
              <span className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-white flex items-center gap-1.5 font-medium">
                Size: US {selectedSize}
                <button onClick={() => setSelectedSize('All')} className="text-neutral-400 hover:text-white ml-1">×</button>
              </span>
            )}
            <button
              onClick={handleResetFilters}
              className="text-orange-400 hover:underline text-[11px] font-medium ml-2 flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Clear All
            </button>
          </div>
        )}

        {/* Content Layout: Sidebar + Grid */}
        <div className="flex gap-8 items-start">
          
          {/* Filter Sidebar (Desktop & Mobile Drawer) */}
          <FilterSidebar
            isMobileOpen={mobileFilterOpen}
            onCloseMobile={() => setMobileFilterOpen(false)}
          />

          {/* Product Grid Area */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              /* Empty Results State */
              <div className="p-12 text-center rounded-3xl bg-neutral-900/30 border border-neutral-800 my-8">
                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-500 mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">No matching shoes found</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto mb-6">
                  We couldn't find any sneakers matching your current filter criteria. Try adjusting your filters or search term.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-600/30 transition-all cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* Responsive Product Card Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Customizer Studio Banner Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-3 text-center md:text-left relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
              <Sparkles className="w-3.5 h-3.5" /> SoleCraft Bespoke Studio
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white font-['Space_Grotesk'] leading-tight">
              Can't Find Your Dream Colorway? Build It Yourself.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Choose your silhouette, custom tint the uppers, soles, swooshes, and speed laces, then engrave your signature heel ID. Handcrafted in our atelier and delivered to your doorstep.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-orange-600/30 flex items-center gap-2 group transition-all cursor-pointer"
            >
              <span>Launch 3D Studio</span>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer onOpenCustomizer={() => setIsCustomizerOpen(true)} />

      {/* Modals & Overlays */}
      <ProductModal />
      <CartDrawer />
      <CheckoutModal />
      <CustomizerStudio
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
      />
      <OrderTrackerModal />
      <SizeGuideModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <ShopContent />
    </ShopProvider>
  );
}
