import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Flame, 
  Send, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Heart, 
  Check, 
  Globe,
  Share2,
  Sparkles
} from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function Footer({ onOpenCustomizer }) {
  const { setSelectedCategory, showToast, setIsOrderTrackerOpen, setIsSizeGuideOpen } = useShop();

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed! Promo code SNEAKER20 unlocked for 20% off.', 'success');
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs">
      {/* Newsletter VIP Club Banner */}
      <div className="border-b border-neutral-800/80 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-wider mb-2 border border-orange-500/20">
              <Sparkles className="w-3 h-3" /> SOLEVAULT VIP DROPS
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk']">
              Get 20% Off Your First Grail
            </h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              Be the first to unlock shock drops, marathon super-shoe releases, and custom studio colorways.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 font-bold">
                <Check className="w-4 h-4" />
                <span>You're in! Use coupon <strong className="underline text-white font-mono">SNEAKER20</strong> at checkout.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md w-full">
                <input
                  type="email"
                  placeholder="Enter your email for drop access..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 w-full sm:w-80"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 flex items-center gap-1.5 shrink-0 transition-all cursor-pointer"
                >
                  <span>Join</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-400 p-0.5">
                <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-orange-500" />
                </div>
              </div>
              <span className="text-xl font-black text-white font-['Space_Grotesk'] tracking-tight">
                SOLE<span className="text-orange-500">VAULT</span>
              </span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              The premier destination for authentic high-performance footwear, archival streetwear, and 1-of-1 bespoke sneakers. Every pair rigorously authenticated before dispatch.
            </p>

            <div className="flex items-center gap-3 pt-2 text-neutral-400">
              {/* Instagram SVG */}
              <a href="#" className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 hover:text-white transition-colors" title="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter / X SVG */}
              <a href="#" className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 hover:text-white transition-colors" title="X / Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube SVG */}
              <a href="#" className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 hover:text-white transition-colors" title="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a href="#" className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 hover:text-white transition-colors" title="Global Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
              Silhouettes
            </h4>
            <ul className="space-y-2">
              {CATEGORIES.slice(1).map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      setSelectedCategory(cat);
                      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {cat} Shoes
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenCustomizer}
                  className="text-orange-400 font-semibold hover:underline flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" /> Bespoke Customizer
                </button>
              </li>
            </ul>
          </div>

          {/* Client Concierge */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
              Concierge & Care
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setIsOrderTrackerOpen(true)} className="hover:text-white transition-colors">
                  Track Delivery
                </button>
              </li>
              <li>
                <button onClick={() => setIsSizeGuideOpen(true)} className="hover:text-white transition-colors">
                  International Size Guide
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Authentication Standard
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  30-Day Fit Guarantee
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Contact Support 24/7
                </span>
              </li>
            </ul>
          </div>

          {/* Guarantee Badges */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
              SoleVault Trust
            </h4>
            <div className="space-y-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Verified Authentic</span>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-2">
                <Truck className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Free Express Shipping $150+</span>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Hassle-Free 30-Day Returns</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="pt-8 mt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} SOLEVAULT Inc. All rights reserved. Designed for elite runners & sneaker aficionados.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-neutral-400 cursor-pointer">Cookie Preferences</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
