# SOLEVAULT | Premium Footwear & Sneaker E-Commerce Platform

A production-grade, highly responsive, modern sneaker and shoe selling e-commerce web application built with **React 19**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## ⚡ Key Highlights & Features

### 1. Curated Vault Catalog & Rich Product Data
- **Multi-Category Footwear**: Running / Marathon Super-Shoes, Archival Streetwear, Basketball Performance, All-Terrain Trail & Lifestyle.
- **Top Brands**: Nike, Jordan, New Balance, Adidas, On Cloud, Salomon, ASICS, Puma, Hoka.
- **High-Resolution Photography**: Multi-angle product imagery (Hero side-profile, overhead, outsole traction, on-foot).
- **Technical Specs**: Drop (mm), Weight (g), Cushioning foam technology, Outsole plate type, and Surface recommendations.
- **Verified Customer Reviews**: Star rating breakdown, verified buyer reviews, and interactive "Write a Review" form.

### 2. Live Interactive Sneaker Customizer (SoleCraft 3D Studio)
- Interactive vector shoe rendering engine where shoppers can customize:
  - Upper Body (Mesh & Leather panels)
  - Mudguard Overlays & Collar
  - Lateral Signature Accent Mark
  - Midsole, Outsole & Air Cushion Pod
  - Speed Laces
  - Custom Heel Engraving (e.g. monogram or initials)
- Curated presets (*Cyberpunk Neon, Chicago Legend, Triple Stealth, Desert Mirage, Arctic Frost*) or custom HEX color picker.
- Instant 1-of-1 bespoke pricing and direct addition to shopping bag.

### 3. Shopping Bag & Checkout Flow
- **Slide-Over Bag Drawer**:
  - Item quantity controls, selected size, and colorway info.
  - Interactive **Free Shipping Progress Meter** ($150 threshold).
  - Promo code discounts (e.g. `SNEAKER20` for 20% off, `SOLE10` for 10% off, `FREESHIP`).
  - Dynamic currency conversion (**USD $, EUR €, GBP £, INR ₹**).
- **Checkout Experience**:
  - Step-by-step shipping destination form.
  - Interactive simulated Card Payment with real-time card preview, Apple Pay / Instant Pay, and Cash on Delivery.
  - Instant Confetti celebration upon order completion.
  - Generated Order Confirmation ID and downloadable/printable receipt.

### 4. Live Telemetry Order Tracker
- Search past and active orders by Order ID (e.g. `SV-2026-9812`) or Courier Tracking code.
- Visual milestone timeline: *Order Confirmed ➔ Authenticity Inspected ➔ Package Dispatched ➔ In Transit ➔ Out for Delivery*.

### 5. International Size Conversion Guide
- Comprehensive conversion chart across **US Men's, US Women's, UK, EU**, and Foot Length (**CM**).
- Step-by-step home foot measurement instructions.
- Pro athlete fit advisory for super-shoes vs. lifestyle sneakers.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Quick Launch
```bash
# Navigate to the project directory
cd C:\Users\ACER\.gemini\antigravity\scratch\sole-vault

# Install dependencies (already installed)
npm install

# Start the development server
npm run dev
```

The app will be accessible at `http://127.0.0.1:5173/`.

### Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Architecture
```
sole-vault/
├── index.html                   # HTML entry point with Plus Jakarta Sans & Space Grotesk
├── vite.config.js               # Vite config with @tailwindcss/vite plugin
├── package.json                 # React 19, Lucide, Tailwind, Canvas-Confetti
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application layout & section composition
    ├── index.css                # Tailwind CSS imports & theme styling
    ├── context/
    │   └── ShopContext.jsx      # Global state (Cart, Wishlist, Orders, Currencies, Toasts)
    ├── data/
    │   └── products.js          # Comprehensive shoe database & specs
    └── components/
        ├── Header.jsx           # Top announcement bar, logo, search, currency, cart badge
        ├── Hero.jsx             # Featured super-shoe, countdown timer, color switcher
        ├── FilterSidebar.jsx    # Categories, brands, sizes, price slider, gender
        ├── ProductCard.jsx      # Sneaker card, hover zoom, quick-add size flyout
        ├── ProductModal.jsx     # Multi-angle gallery, technical specs, review submission
        ├── CartDrawer.jsx       # Slide-out bag, shipping meter, promo code engine
        ├── CheckoutModal.jsx    # Shipping form, card simulation, confetti, order receipt
        ├── CustomizerStudio.jsx # 3D vector bespoke sneaker studio
        ├── OrderTrackerModal.jsx# Live delivery progress milestones
        ├── SizeGuideModal.jsx   # International sizing chart & measurement instructions
        ├── Toast.jsx            # Sleek notification toasts
        └── Footer.jsx           # VIP drop newsletter, guarantees, navigation
```
