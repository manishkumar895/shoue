import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  Package, 
  Menu, 
  X,
  Zap,
  Globe,
  Flame
} from 'lucide-react';
import { CURRENCIES, CATEGORIES } from '../data/products';

export default function Header({ onOpenCustomizer }) {
  const {
    cartItemCount,
    setIsCartOpen,
    wishlist,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    currency,
    setCurrency,
    setIsOrderTrackerOpen,
    setIsSizeGuideOpen
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setMobileMenuOpen(false);
    // Smooth scroll down to catalog if in hero
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-neutral-950/85 border-b border-white/10 transition-colors">
      {/* Top Flash Announcement Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 text-white text-xs font-semibold py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 overflow-hidden text-center sm:text-left">
            <span className="flex items-center gap-1 bg-black/20 px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-bold">
              <Zap className="w-3 h-3 text-yellow-300 animate-pulse fill-yellow-300" /> DROP ALERT
            </span>
            <span className="truncate">
              Limited Jordan Retro & Nike ZoomX drops just landed. Use code <span className="underline font-black tracking-wide">SNEAKER20</span> for 20% off!
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-neutral-100 text-xs">
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="hover:text-white transition-colors underline decoration-white/40 cursor-pointer"
            >
              Size Guide
            </button>
            <span>•</span>
            <button
              onClick={() => setIsOrderTrackerOpen(true)}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <Package className="w-3.5 h-3.5" /> Track Order
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-400 p-0.5 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                  <Flame className="w-6 h-6 text-orange-500 fill-orange-500/30 group-hover:text-orange-400 transition-colors" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1 font-['Space_Grotesk']">
                  SOLE<span className="text-orange-500">VAULT</span>
                </span>
                <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-semibold -mt-1">
                  Kicks & Streetwear
                </span>
              </div>
            </a>

            {/* Desktop Category Navigation */}
            <nav className="hidden lg:flex items-center gap-1 ml-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-neutral-800 text-orange-400 font-semibold shadow-inner'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {cat === 'All' ? 'All Kicks' : cat}
                </button>
              ))}
            </nav>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-2 relative">
            <div className={`flex items-center w-full bg-neutral-900 border ${searchFocused ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-neutral-800'} rounded-xl px-3.5 py-2 transition-all`}>
              <Search className="w-4 h-4 text-neutral-400 mr-2.5 shrink-0" />
              <input
                type="text"
                placeholder="Search Nike, Jordan, Travis Scott, Samba..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 hover:text-white text-neutral-400"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Sneaker Customizer Lab CTA */}
            <button
              onClick={onOpenCustomizer}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/40 text-orange-400 hover:text-white hover:border-orange-400 hover:from-orange-500 hover:to-amber-500 transition-all shadow-sm hover:shadow-orange-500/25 group cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400 group-hover:text-white transition-colors" />
              <span>3D Customizer</span>
            </button>

            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
                title="Change Currency"
              >
                <Globe className="w-3.5 h-3.5 text-neutral-400" />
                <span>{currency}</span>
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl py-1.5 z-50 animate-in fade-in zoom-in-95">
                  {Object.keys(CURRENCIES).map((cur) => (
                    <button
                      key={cur}
                      onClick={() => {
                        setCurrency(cur);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-neutral-800 transition-colors ${
                        currency === cur ? 'text-orange-400 font-bold bg-neutral-800/50' : 'text-neutral-300'
                      }`}
                    >
                      <span>{CURRENCIES[cur].label}</span>
                      <span>{CURRENCIES[cur].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => {
                const catalogEl = document.getElementById('catalog-section');
                if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
              title="Saved Kicks"
            >
              <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag / Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-600/30 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="w-5 h-5 rounded-full bg-neutral-950/70 text-orange-400 text-xs font-black flex items-center justify-center ml-0.5">
                {cartItemCount}
              </span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          {/* Mobile Search */}
          <div className="flex items-center w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 mb-4">
            <Search className="w-4 h-4 text-neutral-400 mr-2.5" />
            <input
              type="text"
              placeholder="Search shoes, sneakers, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 px-3 py-1">
              Categories
            </div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === cat ? 'bg-orange-600/20 text-orange-400 font-bold' : 'text-neutral-300 hover:bg-neutral-900'
                }`}
              >
                {cat === 'All' ? 'All Shoes' : cat}
              </button>
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenCustomizer();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Open 3D Sneaker Studio
            </button>

            <button
              onClick={() => {
                setIsOrderTrackerOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white text-sm flex items-center justify-center gap-2"
            >
              <Package className="w-4 h-4" /> Track an Order
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
