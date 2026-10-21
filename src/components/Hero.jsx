import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Flame, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Sparkles, 
  Star,
  CheckCircle,
  Eye
} from 'lucide-react';

export default function Hero({ onOpenCustomizer }) {
  const { setSelectedProduct, formatPrice } = useShop();

  // Limited Drop Countdown Timer Simulation (e.g., 14 hours, 28 minutes, 42 seconds)
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 36,
    seconds: 52
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Featured sneaker colorway preview in hero
  const heroColorways = [
    { name: 'Crimson Volt', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80', colorHex: '#ef4444' },
    { name: 'Royal Cyber', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80', colorHex: '#3b82f6' },
    { name: 'Pure Stealth', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80', colorHex: '#e4e4e7' }
  ];
  const [activeHeroColor, setActiveHeroColor] = useState(0);

  const scrollToCatalog = () => {
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-800">
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 right-1/3 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Typography & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Drop Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-semibold text-white">DROP OF THE WEEK</span>
              <span className="text-neutral-500">•</span>
              <span className="text-orange-400 font-medium">Limited To 500 Pairs Worldwide</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] font-['Space_Grotesk']">
              SPEED UNBOUND.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-rose-500">
                STREET REVERED.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Engineered for marathon podiums and high-street culture. Experience carbon-powered energy return, archival grails, and handcrafted custom silhouettes.
            </p>

            {/* Drop Countdown Box */}
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800/80 backdrop-blur-md max-w-md mx-auto lg:mx-0">
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-medium">
                <span className="flex items-center gap-1.5 text-neutral-200">
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-500" /> Flash Drop Ends In:
                </span>
                <span className="text-emerald-400 font-semibold">Tier 1 Allocation Active</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-neutral-950/70 py-2 rounded-xl border border-neutral-800">
                  <span className="block text-2xl font-black text-white font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Hours</span>
                </div>
                <div className="bg-neutral-950/70 py-2 rounded-xl border border-neutral-800">
                  <span className="block text-2xl font-black text-white font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Mins</span>
                </div>
                <div className="bg-neutral-950/70 py-2 rounded-xl border border-neutral-800">
                  <span className="block text-2xl font-black text-orange-400 font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Secs</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={scrollToCatalog}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-base transition-all shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Shop Vault Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCustomizer}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 text-white font-bold text-base transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-orange-400 group-hover:rotate-12 transition-transform" />
                <span>Customize In 3D Studio</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-xs text-neutral-400">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-950" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="avatar" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-950" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="avatar" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-950" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80" alt="avatar" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-neutral-200 font-bold ml-1.5">4.9/5</span>
                </div>
                <span>Loved by 45,000+ Sneakerheads & Runners</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Sneaker Spotlight Showcase */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Spotlight Card */}
            <div className="w-full relative rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 p-6 lg:p-8 shadow-2xl overflow-hidden group">
              
              {/* Radial backdrop */}
              <div className="absolute inset-0 bg-radial from-orange-500/20 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Tag & Model */}
              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  FEATURED SUPER-SHOE
                </span>
                <span className="text-xl font-black text-white">
                  {formatPrice(259.99)}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white relative z-10">
                Nike ZoomX Vaporfly NEXT% 3
              </h3>
              <p className="text-xs text-neutral-400 mb-4 relative z-10">
                Color: {heroColorways[activeHeroColor].name}
              </p>

              {/* Main Shoe Image with Hover Tilt Effect */}
              <div className="relative py-4 my-2 flex items-center justify-center">
                <img
                  src={heroColorways[activeHeroColor].image}
                  alt="Nike ZoomX Vaporfly NEXT% 3"
                  className="w-full h-64 sm:h-72 object-contain filter drop-shadow-[0_20px_30px_rgba(249,115,22,0.25)] group-hover:scale-105 group-hover:-rotate-3 transition-all duration-500"
                />

                {/* Floating Spec Badges */}
                <div className="absolute top-2 left-0 bg-neutral-950/90 border border-white/10 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md">
                  <div className="text-[10px] text-neutral-400 font-medium uppercase">Weight</div>
                  <div className="text-xs font-bold text-white">198g Ultralight</div>
                </div>

                <div className="absolute bottom-2 right-0 bg-neutral-950/90 border border-white/10 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md">
                  <div className="text-[10px] text-neutral-400 font-medium uppercase">Plate</div>
                  <div className="text-xs font-bold text-orange-400">Carbon Flyplate</div>
                </div>
              </div>

              {/* Colorway Switcher Selector */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 relative z-10">
                <span className="text-xs text-neutral-400 font-medium">Switch Colorway:</span>
                <div className="flex items-center gap-2">
                  {heroColorways.map((cw, idx) => (
                    <button
                      key={cw.name}
                      onClick={() => setActiveHeroColor(idx)}
                      className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 ${
                        activeHeroColor === idx ? 'border-orange-500 scale-110 shadow-lg shadow-orange-500/40' : 'border-neutral-700 hover:border-neutral-500'
                      }`}
                      title={cw.name}
                    >
                      <span className="block w-full h-full rounded-full" style={{ backgroundColor: cw.colorHex }} />
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Trust Ribbons */}
        <div className="mt-16 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-orange-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">100% Authentic</div>
              <div className="text-xs text-neutral-400">Multi-point sneaker verification</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-orange-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Fast Worldwide Shipping</div>
              <div className="text-xs text-neutral-400">Free delivery on orders $150+</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-orange-400 shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">30-Day Fit Guarantee</div>
              <div className="text-xs text-neutral-400">Hassle-free size exchanges</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-orange-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">SoleCraft 3D Studio</div>
              <div className="text-xs text-neutral-400">Customize bespoke colorways</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
