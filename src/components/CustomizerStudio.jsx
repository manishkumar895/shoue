import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  Sparkles, 
  RotateCcw, 
  ShoppingBag, 
  Palette, 
  Type, 
  Layers, 
  Check, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const PRESETS = [
  {
    name: 'Cyberpunk Neon',
    colors: { upper: '#18181b', overlay: '#06b6d4', sole: '#ccff00', laces: '#f43f5e', accent: '#a855f7' }
  },
  {
    name: 'Chicago Legend',
    colors: { upper: '#ffffff', overlay: '#dc2626', sole: '#171717', laces: '#000000', accent: '#b91c1c' }
  },
  {
    name: 'Triple Stealth',
    colors: { upper: '#18181b', overlay: '#27272a', sole: '#09090b', laces: '#27272a', accent: '#3f3f46' }
  },
  {
    name: 'Desert Mirage',
    colors: { upper: '#d6d3d1', overlay: '#a8a29e', sole: '#78716c', laces: '#44403c', accent: '#ea580c' }
  },
  {
    name: 'Arctic Frost',
    colors: { upper: '#f8fafc', overlay: '#93c5fd', sole: '#e2e8f0', laces: '#3b82f6', accent: '#2563eb' }
  }
];

const PALETTE_SWATCHES = [
  '#ffffff', '#09090b', '#27272a', '#dc2626', '#f97316', 
  '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', 
  '#ec4899', '#ccff00', '#78350f', '#94a3b8'
];

export default function CustomizerStudio({ isOpen, onClose }) {
  const { addToCart, formatPrice, showToast } = useShop();

  const [activePart, setActivePart] = useState('upper'); // 'upper', 'overlay', 'sole', 'laces', 'accent'
  const [colors, setColors] = useState({
    upper: '#18181b',
    overlay: '#ea580c',
    sole: '#ffffff',
    laces: '#f97316',
    accent: '#facc15'
  });
  const [engraving, setEngraving] = useState('VAULT');
  const [selectedSize, setSelectedSize] = useState('10.0');
  const [shoeSilhouette, setShoeSilhouette] = useState('Low Speedster');

  if (!isOpen) return null;

  const basePrice = 240.00;

  const handleColorChange = (hex) => {
    setColors((prev) => ({
      ...prev,
      [activePart]: hex
    }));
  };

  const handleApplyPreset = (preset) => {
    setColors(preset.colors);
    showToast(`Loaded preset "${preset.name}"`, 'info');
  };

  const handleAddCustomKickToBag = () => {
    const customProduct = {
      id: `custom-solecraft-${Date.now()}`,
      name: `SoleCraft Bespoke "${engraving || 'Custom'}"`,
      brand: 'SoleVault Lab',
      category: 'Streetwear',
      price: basePrice,
      images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80'],
      badge: '1-OF-1 BESPOKE'
    };

    addToCart(
      customProduct,
      selectedSize,
      { name: `Bespoke (${shoeSilhouette})`, hex: colors.upper },
      1,
      {
        silhouette: shoeSilhouette,
        colors,
        engraving
      }
    );

    onClose();
  };

  const partsList = [
    { id: 'upper', name: 'Upper Body', desc: 'Main vamp & side panel mesh/leather' },
    { id: 'overlay', name: 'Overlay & Guard', desc: 'Toe mudguard & eyelet reinforcement' },
    { id: 'accent', name: 'Lateral Swoosh / Stripe', desc: 'Dynamic signature velocity mark' },
    { id: 'sole', name: 'Midsole & Cushion', desc: 'Energy return foam & rubber traction' },
    { id: 'laces', name: 'Speed Laces', desc: 'Padded performance woven laces' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-6xl bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-white font-['Space_Grotesk'] tracking-wide">
                  SOLECRAFT 3D CUSTOMIZER LAB
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase bg-orange-600 text-white">
                  1-OF-1 Studio
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Design your bespoke shoe silhouette. Handcrafted and verified in our artisan atelier.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          
          {/* Left/Middle: Live Vector Sneaker Canvas */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between items-center bg-gradient-to-b from-neutral-900/40 via-neutral-950 to-neutral-900/30 relative">
            
            {/* Silhouette Selector Tabs */}
            <div className="flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 p-1 rounded-xl text-xs font-semibold">
              {['Low Speedster', 'Aero Runner', 'Retro High'].map((s) => (
                <button
                  key={s}
                  onClick={() => setShoeSilhouette(s)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    shoeSilhouette === s ? 'bg-orange-600 text-white shadow-md' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* SVG Sneaker Vector Rendering Engine */}
            <div className="w-full my-6 flex items-center justify-center relative min-h-[300px]">
              
              {/* Backlight Glow based on accent color */}
              <div 
                className="absolute w-72 h-44 rounded-full blur-3xl opacity-30 transition-all duration-500 pointer-events-none"
                style={{ backgroundColor: colors.accent }}
              />

              {/* Vector Shoe Illustration */}
              <svg
                viewBox="0 0 600 350"
                className="w-full max-w-lg h-auto filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.8)] transition-all duration-300"
              >
                <defs>
                  {/* Subtle 3D Gradients */}
                  <linearGradient id="soleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={colors.sole} />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="upperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={colors.upper} />
                    <stop offset="100%" stopColor="#111111" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Ground Shadow */}
                <ellipse cx="300" cy="310" rx="220" ry="20" fill="rgba(0,0,0,0.4)" filter="blur(8px)" />

                {/* Midsole / Outsole */}
                <path
                  d="M100 240 C140 235 220 245 320 240 C420 235 480 250 510 270 C515 285 490 295 440 295 C350 295 240 298 140 295 C90 292 75 270 100 240 Z"
                  fill={colors.sole}
                  stroke="#18181b"
                  strokeWidth="3"
                  className="cursor-pointer transition-colors duration-300 hover:opacity-90"
                  onClick={() => setActivePart('sole')}
                />
                
                {/* Outsole Grip Treads */}
                <path
                  d="M120 290 Q 280 295 460 290"
                  stroke="#27272a"
                  strokeWidth="6"
                  strokeDasharray="14 10"
                />

                {/* Air Cushion Bubble Window in Heel */}
                <rect
                  x="130"
                  y="255"
                  width="70"
                  height="22"
                  rx="10"
                  fill="none"
                  stroke={colors.accent}
                  strokeWidth="3.5"
                  opacity="0.9"
                />
                <circle cx="150" cy="266" r="5" fill={colors.accent} opacity="0.8" />
                <circle cx="170" cy="266" r="5" fill={colors.accent} opacity="0.8" />

                {/* Upper Body (Main Silhouette) */}
                <path
                  d="M120 245 C110 180 140 120 200 125 C230 130 260 170 320 185 C390 200 460 220 500 255 C470 260 200 255 120 245 Z"
                  fill="url(#upperGrad)"
                  stroke="#18181b"
                  strokeWidth="3"
                  className="cursor-pointer transition-colors duration-300"
                  onClick={() => setActivePart('upper')}
                />

                {/* Overlay Mudguard & Quarter Wing */}
                <path
                  d="M380 210 C420 215 470 230 495 258 C440 262 360 258 330 240 C340 225 360 215 380 210 Z"
                  fill={colors.overlay}
                  stroke="#18181b"
                  strokeWidth="2.5"
                  className="cursor-pointer transition-colors duration-300"
                  onClick={() => setActivePart('overlay')}
                />

                {/* Heel Collar & Counter Overlay */}
                <path
                  d="M115 240 C110 190 130 135 170 130 C185 145 185 200 195 248 C160 246 130 244 115 240 Z"
                  fill={colors.overlay}
                  stroke="#18181b"
                  strokeWidth="2"
                  className="cursor-pointer transition-colors duration-300"
                  onClick={() => setActivePart('overlay')}
                />

                {/* Collar Padding */}
                <path
                  d="M165 130 C190 120 220 128 235 150 C215 158 190 152 165 130 Z"
                  fill="#27272a"
                />

                {/* Tongue and Lace loops */}
                <path
                  d="M230 145 C250 130 280 140 310 180 C290 185 260 175 230 145 Z"
                  fill="#18181b"
                />

                {/* Speed Laces Pattern */}
                <g stroke={colors.laces} strokeWidth="4.5" strokeLinecap="round" className="cursor-pointer" onClick={() => setActivePart('laces')}>
                  <line x1="240" y1="165" x2="275" y2="155" />
                  <line x1="260" y1="180" x2="295" y2="170" />
                  <line x1="280" y1="195" x2="320" y2="185" />
                  <line x1="305" y1="210" x2="350" y2="198" />
                </g>

                {/* Signature Dynamic Swoosh / Velocity Mark Accent */}
                <path
                  d="M200 215 C260 225 360 210 440 185 C390 215 320 235 240 232 C210 230 195 220 200 215 Z"
                  fill={colors.accent}
                  stroke="#000"
                  strokeWidth="1.5"
                  className="cursor-pointer transition-colors duration-300"
                  onClick={() => setActivePart('accent')}
                />

                {/* Heel Engraving Text */}
                <text
                  x="145"
                  y="215"
                  fill="#ffffff"
                  fontSize="12"
                  fontWeight="900"
                  fontFamily="'Space Grotesk', sans-serif"
                  letterSpacing="1"
                  transform="rotate(-25 145 215)"
                  textAnchor="middle"
                  className="pointer-events-none select-none drop-shadow"
                >
                  {engraving.toUpperCase()}
                </text>
              </svg>

            </div>

            {/* Presets Bar */}
            <div className="w-full pt-4 border-t border-neutral-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Designer Quick Presets:
              </span>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => handleApplyPreset(preset)}
                    className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-xs font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: preset.colors.overlay }} />
                    <span>{preset.name}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Part Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2.5">
                  1. Choose Part to Color:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {partsList.map((part) => (
                    <button
                      key={part.id}
                      onClick={() => setActivePart(part.id)}
                      className={`text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                        activePart === part.id
                          ? 'border-orange-500 bg-orange-500/10 text-white'
                          : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{part.name}</div>
                        <div className="text-[10px] text-neutral-500 line-clamp-1">{part.desc}</div>
                      </div>
                      <span
                        className="w-4 h-4 rounded-full border border-neutral-700 shrink-0 ml-2"
                        style={{ backgroundColor: colors[part.id] }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Swatches & Picker */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    2. Select Color for <span className="text-orange-400">{partsList.find(p => p.id === activePart)?.name}</span>:
                  </label>
                  <span className="text-xs font-mono font-bold text-white">{colors[activePart]}</span>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-3">
                  {PALETTE_SWATCHES.map((hex) => (
                    <button
                      key={hex}
                      onClick={() => handleColorChange(hex)}
                      className={`h-8 rounded-lg border-2 transition-transform ${
                        colors[activePart] === hex ? 'border-orange-500 scale-110 shadow-lg' : 'border-neutral-800 hover:scale-105'
                      }`}
                      style={{ backgroundColor: hex }}
                    />
                  ))}
                </div>

                {/* Custom Color Input */}
                <div className="flex items-center gap-3 p-2 bg-neutral-900 border border-neutral-800 rounded-xl">
                  <input
                    type="color"
                    value={colors[activePart]}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <div className="flex-1">
                    <span className="text-xs text-neutral-400 block">Custom Hex:</span>
                    <input
                      type="text"
                      value={colors[activePart]}
                      onChange={(e) => handleColorChange(e.target.value)}
                      className="bg-transparent text-xs text-white font-mono font-bold uppercase focus:outline-none w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Custom Heel Engraving */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                  3. Heel Engraving Text (Max 8 Chars):
                </label>
                <div className="relative">
                  <Type className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    maxLength={8}
                    value={engraving}
                    onChange={(e) => setEngraving(e.target.value.toUpperCase())}
                    placeholder="e.g. YOURNAME"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-9 pr-3 py-2 text-sm text-white font-mono font-bold tracking-widest uppercase focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Sizing */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                  4. Your US Size:
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                  {['8.0', '8.5', '9.0', '9.5', '10.0', '10.5', '11.0', '11.5', '12.0', '13.0'].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                        selectedSize === sz
                          ? 'bg-orange-600 text-white shadow-md'
                          : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Add to Bag */}
            <div className="pt-6 border-t border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 block">Bespoke Artisan Price</span>
                  <span className="text-2xl font-black text-white font-mono">
                    {formatPrice(basePrice)}
                  </span>
                </div>
                <div className="text-right text-xs text-neutral-400">
                  <span className="text-emerald-400 font-semibold flex items-center justify-end gap-1">
                    <Check className="w-3.5 h-3.5" /> Handcrafted In 7 Days
                  </span>
                  <span>Includes custom wooden shoe tree</span>
                </div>
              </div>

              <button
                onClick={handleAddCustomKickToBag}
                className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Craft & Add To Bag</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
