export const PRODUCTS = [
  {
    id: "nike-vaporfly-3",
    name: "Nike ZoomX Vaporfly NEXT% 3",
    brand: "Nike",
    category: "Running",
    gender: "Unisex",
    price: 259.99,
    originalPrice: 289.99,
    rating: 4.9,
    reviewsCount: 328,
    badge: "MARATHON ELITE",
    isNew: true,
    featured: true,
    tagline: "Catch-them-if-you-can speed for road racing.",
    description: "Built for speed-chasers, racers and elevated pacers who can't turn down the thrill of the pursuit. The pack leader of super shoes is back with a lighter, more responsive ZoomX foam setup and an upgraded full-length carbon fiber Flyplate that delivers a propulsive, energetic snap with every stride.",
    specs: {
      weight: "198g (Men's US 9)",
      drop: "8mm",
      cushioning: "Max ZoomX Energy Return",
      plate: "Full-Length Carbon Fiber Flyplate",
      upper: "Flyknit Engineered Breathable Mesh",
      surface: "Road, Marathon Racing"
    },
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Electric Crimson / Volt", hex: "#ef4444", bgClass: "bg-red-500" },
      { name: "Cyber Volt / Racer Blue", hex: "#84cc16", bgClass: "bg-lime-500" },
      { name: "Triple Obsidian Stealth", hex: "#18181b", bgClass: "bg-zinc-900" }
    ],
    sizes: [
      { size: "7.0", stock: 4 },
      { size: "7.5", stock: 6 },
      { size: "8.0", stock: 8 },
      { size: "8.5", stock: 12 },
      { size: "9.0", stock: 3 },
      { size: "9.5", stock: 9 },
      { size: "10.0", stock: 15 },
      { size: "10.5", stock: 7 },
      { size: "11.0", stock: 5 },
      { size: "11.5", stock: 2 },
      { size: "12.0", stock: 4 },
      { size: "13.0", stock: 1 }
    ],
    reviews: [
      { user: "Marcus Vance", rating: 5, date: "2 days ago", verified: true, title: "Set a new 10K Personal Record!", comment: "The carbon flyplate and ZoomX combination is unreal. The rocker geometry rolls your foot effortlessly into toe-off. Worth every penny." },
      { user: "Elena Rostova", rating: 5, date: "1 week ago", verified: true, title: "Featherlight and insanely responsive", comment: "Ran my first half-marathon in these right out of the box with zero blisters. The upper breathes extraordinarily well even at 85°F." },
      { user: "David K.", rating: 4, date: "3 weeks ago", verified: true, title: "Fast, but snug in forefoot", comment: "Pure performance shoe. If you have wide feet, order half size up. Once dialed in, the energy bounce is unmatched." }
    ]
  },
  {
    id: "jordan-1-retro-chicago",
    name: "Air Jordan 1 Retro High OG 'Lost & Found'",
    brand: "Jordan",
    category: "Streetwear",
    gender: "Unisex",
    price: 220.00,
    originalPrice: 250.00,
    rating: 5.0,
    reviewsCount: 542,
    badge: "ICONIC GRAIL",
    isNew: false,
    featured: true,
    tagline: "The silhouette that changed sneaker history forever.",
    description: "The 1985 classic returns with vintage aged aesthetics reminiscent of a treasure unearthed from a mom-and-pop shoe shop backroom. Featuring cracked black leather collars, pre-yellowed midsoles, and archival Nike Air branding on the padded nylon tongue.",
    specs: {
      weight: "440g",
      drop: "10mm",
      cushioning: "Encapsulated Air-Sole Unit",
      plate: "Classic Rubber Cupsole",
      upper: "Premium Full-Grain Cracked Leather",
      surface: "Lifestyle, Hardwood Heritage"
    },
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Varsity Red / Black / Sail", hex: "#b91c1c", bgClass: "bg-red-700" },
      { name: "Royal Blue / Black", hex: "#1d4ed8", bgClass: "bg-blue-700" },
      { name: "Shadow Grey / Black", hex: "#4b5563", bgClass: "bg-gray-600" }
    ],
    sizes: [
      { size: "8.0", stock: 2 },
      { size: "8.5", stock: 5 },
      { size: "9.0", stock: 3 },
      { size: "9.5", stock: 1 },
      { size: "10.0", stock: 4 },
      { size: "10.5", stock: 6 },
      { size: "11.0", stock: 2 },
      { size: "12.0", stock: 1 }
    ],
    reviews: [
      { user: "Leo Takahashi", rating: 5, date: "3 days ago", verified: true, title: "The grail of all grails", comment: "Leather quality is superb. The vintage box and authentic receipt receipt packaging adds so much nostalgic flavor." },
      { user: "Sarah Jenkins", rating: 5, date: "2 weeks ago", verified: true, title: "Must-have staple", comment: "Goes with denim, sweatpants, cargos, everything. Fits true to size and turns heads constantly." }
    ]
  },
  {
    id: "new-balance-9060-rain",
    name: "New Balance 9060 'Rain Cloud'",
    brand: "New Balance",
    category: "Streetwear",
    gender: "Unisex",
    price: 154.99,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 194,
    badge: "BESTSELLER",
    isNew: true,
    featured: true,
    tagline: "Futuristic sculpted comfort meets Y2K heritage.",
    description: "The 9060 is a new expression of the refined style and innovation-led design that have made the 99X series home to some of the most iconic models in New Balance history. Sway bars taken from the 990 are expanded and utilized throughout the entire upper for a sense of visible motion.",
    specs: {
      weight: "410g",
      drop: "11mm",
      cushioning: "ABZORB & SBS Dual-Density Foam",
      plate: "Diamond Outsole Pattern",
      upper: "Mesh with Pigskin Suede Overlays",
      surface: "All-Day Streetwear"
    },
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Rain Cloud / Sea Salt", hex: "#9ca3af", bgClass: "bg-gray-400" },
      { name: "Triple Castlerock Dark", hex: "#374151", bgClass: "bg-gray-700" },
      { name: "Mushroom Olive Sand", hex: "#78716c", bgClass: "bg-stone-500" }
    ],
    sizes: [
      { size: "7.0", stock: 3 },
      { size: "8.0", stock: 9 },
      { size: "8.5", stock: 14 },
      { size: "9.0", stock: 11 },
      { size: "9.5", stock: 8 },
      { size: "10.0", stock: 13 },
      { size: "10.5", stock: 7 },
      { size: "11.0", stock: 4 },
      { size: "12.0", stock: 3 }
    ],
    reviews: [
      { user: "Chloe M.", rating: 5, date: "5 days ago", verified: true, title: "Most comfortable shoes I have ever worn", comment: "Walked 25,000 steps in Tokyo on day one and zero foot fatigue. The ABZORB pods feel like walking on supportive clouds." },
      { user: "Jordan P.", rating: 4, date: "3 weeks ago", verified: true, title: "Chunky yet balanced aesthetic", comment: "The exaggerated sole looks phenomenal in person with wide-leg trousers." }
    ]
  },
  {
    id: "adidas-samba-og",
    name: "Adidas Originals Samba OG Classic",
    brand: "Adidas",
    category: "Lifestyle",
    gender: "Unisex",
    price: 100.00,
    originalPrice: 115.00,
    rating: 4.7,
    reviewsCount: 789,
    badge: "TIMELESS ICON",
    isNew: false,
    featured: false,
    tagline: "From indoor soccer roots to world-stage streetwear.",
    description: "Born on the pitch, the Samba is a timeless icon of street style. This version stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum rubber sole.",
    specs: {
      weight: "340g",
      drop: "7mm",
      cushioning: "Die-Cut EVA Insole",
      plate: "Low-Profile Pivot Point Sole",
      upper: "Full-Grain Leather with Suede T-Toe",
      surface: "Lifestyle & Streetwear"
    },
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Cloud White / Core Black / Gum", hex: "#f5f5f5", bgClass: "bg-neutral-100" },
      { name: "Core Black / Cloud White / Gum", hex: "#171717", bgClass: "bg-neutral-900" },
      { name: "Collegiate Green / Chalk White", hex: "#15803d", bgClass: "bg-green-700" }
    ],
    sizes: [
      { size: "6.0", stock: 3 },
      { size: "7.0", stock: 6 },
      { size: "8.0", stock: 12 },
      { size: "8.5", stock: 18 },
      { size: "9.0", stock: 22 },
      { size: "9.5", stock: 15 },
      { size: "10.0", stock: 10 },
      { size: "10.5", stock: 6 },
      { size: "11.0", stock: 4 }
    ],
    reviews: [
      { user: "Hannah W.", rating: 5, date: "1 week ago", verified: true, title: "Essential closet shoe", comment: "You simply cannot go wrong with Sambas. Minimalist, durable, and gets better with age." }
    ]
  },
  {
    id: "on-cloudmonster-2",
    name: "On Cloudmonster 2 Max Cushion",
    brand: "On Cloud",
    category: "Running",
    gender: "Men",
    price: 179.95,
    originalPrice: 199.95,
    rating: 4.8,
    reviewsCount: 215,
    badge: "MAX BOUNCE",
    isNew: true,
    featured: true,
    tagline: "Insane energy return with maximum CloudTec cushioning.",
    description: "Monster CloudTec meets an updated dual-density Helion superfoam midsole for explosive propulsion and pillow-soft landings. The re-engineered nylon-blend Speedboard shoots you forward with every toe flick.",
    specs: {
      weight: "295g",
      drop: "6mm",
      cushioning: "Helion Dual-Density Superfoam + CloudTec",
      plate: "Nylon-Blend Speedboard",
      upper: "100% Recycled Polyester Mesh",
      surface: "Road Long Distance & Daily Trainer"
    },
    images: [
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Frost White / Mineral", hex: "#e2e8f0", bgClass: "bg-slate-200" },
      { name: "Cobalt Blue / Flame Orange", hex: "#2563eb", bgClass: "bg-blue-600" },
      { name: "All Black Magnet", hex: "#0f172a", bgClass: "bg-slate-900" }
    ],
    sizes: [
      { size: "8.0", stock: 5 },
      { size: "8.5", stock: 8 },
      { size: "9.0", stock: 12 },
      { size: "9.5", stock: 14 },
      { size: "10.0", stock: 16 },
      { size: "10.5", stock: 10 },
      { size: "11.0", stock: 6 },
      { size: "12.0", stock: 3 }
    ],
    reviews: [
      { user: "Kevin Ross", rating: 5, date: "4 days ago", verified: true, title: "Saved my knees on 20-mile Sunday runs", comment: "The dampening of impact is astonishing. Smooth transitions and a roomy toe box." }
    ]
  },
  {
    id: "salomon-xt6-gtx",
    name: "Salomon XT-6 GORE-TEX Phantom",
    brand: "Salomon",
    category: "Trail",
    gender: "Unisex",
    price: 219.99,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 310,
    badge: "WEATHERPROOF",
    isNew: true,
    featured: false,
    tagline: "Ultra-distance trail legacy shielded by waterproof membrane.",
    description: "First launched in 2013, the XT-6 is the preferred footwear of world-class athletes for ultra-distance races under harsh conditions. Now upgraded with a PFC-free GORE-TEX membrane to repel mud, rain, and snow without sacrificing agile speed.",
    specs: {
      weight: "355g",
      drop: "10mm",
      cushioning: "EnergyCell Dual-Density EVA",
      plate: "Agile Chassis System (ACS)",
      upper: "Anti-Debris Mesh with GORE-TEX Membrane",
      surface: "Technical Alpine Trail & Wet City"
    },
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Phantom / Black / Monument", hex: "#1f2937", bgClass: "bg-gray-800" },
      { name: "Safari / Desert Khaki", hex: "#a8a29e", bgClass: "bg-stone-400" },
      { name: "Vanilla / Sulphur Neon", hex: "#fef08a", bgClass: "bg-yellow-200" }
    ],
    sizes: [
      { size: "7.5", stock: 4 },
      { size: "8.0", stock: 7 },
      { size: "8.5", stock: 10 },
      { size: "9.0", stock: 6 },
      { size: "9.5", stock: 8 },
      { size: "10.0", stock: 5 },
      { size: "10.5", stock: 9 },
      { size: "11.0", stock: 3 },
      { size: "12.0", stock: 2 }
    ],
    reviews: [
      { user: "Toby S.", rating: 5, date: "1 month ago", verified: true, title: "Indestructible trail shoe", comment: "Quicklace system is genius. Kept my feet bone dry through Scottish highlands rain." }
    ]
  },
  {
    id: "kobe-8-protro-halo",
    name: "Nike Kobe 8 Protro 'Halo' Mamba",
    brand: "Nike",
    category: "Basketball",
    gender: "Men",
    price: 189.99,
    originalPrice: 220.00,
    rating: 5.0,
    reviewsCount: 467,
    badge: "MAMBA EDITION",
    isNew: false,
    featured: true,
    tagline: "Low-cut precision engineered for lethal court cuts.",
    description: "Honoring Kobe Bryant's relentless pursuit of perfection, the Kobe 8 Protro 'Halo' features an all-white pristine engineered mesh upper paired with drop-in full-length Nike React foam for court responsiveness and explosive first-step velocity.",
    specs: {
      weight: "330g",
      drop: "4mm",
      cushioning: "Full-Length Drop-in React Foam",
      plate: "Midfoot Carbon Fiber Shank",
      upper: "Engineered Mesh with Embroidered Swoosh",
      surface: "Indoor Hardwood Court"
    },
    images: [
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Halo Triple White", hex: "#ffffff", bgClass: "bg-white" },
      { name: "Court Purple / University Gold", hex: "#7e22ce", bgClass: "bg-purple-700" },
      { name: "Venice Beach Multi", hex: "#06b6d4", bgClass: "bg-cyan-500" }
    ],
    sizes: [
      { size: "8.5", stock: 2 },
      { size: "9.0", stock: 4 },
      { size: "9.5", stock: 3 },
      { size: "10.0", stock: 6 },
      { size: "10.5", stock: 5 },
      { size: "11.0", stock: 2 },
      { size: "11.5", stock: 1 },
      { size: "12.0", stock: 3 }
    ],
    reviews: [
      { user: "Devon Clark", rating: 5, date: "6 days ago", verified: true, title: "Traction bites hard on any court", comment: "The herringbone pattern squeaks on hardwood like nothing else. Zero court lag." }
    ]
  },
  {
    id: "asics-gel-kayano-31",
    name: "ASICS GEL-Kayano 31 Platinum",
    brand: "ASICS",
    category: "Running",
    gender: "Women",
    price: 164.95,
    originalPrice: 180.00,
    rating: 4.9,
    reviewsCount: 183,
    badge: "STABILITY KING",
    isNew: true,
    featured: false,
    tagline: "Adaptive 4D guidance system for plush marathon stability.",
    description: "Engineered to deliver advanced stability and softer cushioning properties for distance training. The revolutionary 4D GUIDANCE SYSTEM provides adaptive stability to help you experience a more supportive and balanced stride across long training miles.",
    specs: {
      weight: "265g",
      drop: "10mm",
      cushioning: "PureGEL Technology + FF BLAST PLUS ECO",
      plate: "4D Guidance Adaptive Truss",
      upper: "Engineered Stretch Knit Upper",
      surface: "Pavement & Road Stability"
    },
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "French Blue / Glow Lime", hex: "#1e3a8a", bgClass: "bg-blue-900" },
      { name: "White / Pure Silver", hex: "#e0e7ff", bgClass: "bg-indigo-100" },
      { name: "Illusion Pink / Coral", hex: "#f43f5e", bgClass: "bg-rose-500" }
    ],
    sizes: [
      { size: "6.0", stock: 4 },
      { size: "6.5", stock: 8 },
      { size: "7.0", stock: 12 },
      { size: "7.5", stock: 15 },
      { size: "8.0", stock: 10 },
      { size: "8.5", stock: 7 },
      { size: "9.0", stock: 5 }
    ],
    reviews: [
      { user: "Rachel Miller", rating: 5, date: "2 weeks ago", verified: true, title: "Cured my overpronation pains", comment: "No more knee ache on long runs! PureGEL softens heel strikes tremendously." }
    ]
  },
  {
    id: "puma-mb03-spark",
    name: "Puma MB.03 'LaMelo Rare Spark'",
    brand: "Puma",
    category: "Basketball",
    gender: "Men",
    price: 129.99,
    originalPrice: 145.00,
    rating: 4.7,
    reviewsCount: 156,
    badge: "RARE EDITION",
    isNew: true,
    featured: false,
    tagline: "Out-of-this-world slime aesthetics with Nitro foam pop.",
    description: "LaMelo Ball's signature shoe is not from here. Featuring claw marks, slime-inspired detailing, and NITRO Infused foam midsole that delivers high responsiveness and cushion in a lightweight package.",
    specs: {
      weight: "395g",
      drop: "8mm",
      cushioning: "NITRO Infused Gas-Injected Foam",
      plate: "High-Abrasion Engineered Rubber Compound",
      upper: "Multi-Zone Monomesh with TPU Wings",
      surface: "Basketball Court"
    },
    images: [
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Toxic Slime Volt / Purple", hex: "#a3e635", bgClass: "bg-lime-400" },
      { name: "Solar Orange / Black", hex: "#ea580c", bgClass: "bg-orange-600" },
      { name: "Triple Stealth Smoke", hex: "#27272a", bgClass: "bg-zinc-800" }
    ],
    sizes: [
      { size: "8.0", stock: 3 },
      { size: "8.5", stock: 6 },
      { size: "9.0", stock: 9 },
      { size: "9.5", stock: 12 },
      { size: "10.0", stock: 8 },
      { size: "10.5", stock: 4 },
      { size: "11.0", stock: 3 }
    ],
    reviews: [
      { user: "Jaylen Brooks", rating: 5, date: "1 week ago", verified: true, title: "Loud design, crazy bounce", comment: "Everyone asks where I bought these. Lateral stability when crossing over is tight." }
    ]
  },
  {
    id: "travis-scott-jordan-1-low",
    name: "Air Jordan 1 Low OG 'Reverse Mocha' x Travis Scott",
    brand: "Jordan",
    category: "Streetwear",
    gender: "Unisex",
    price: 380.00,
    originalPrice: 420.00,
    rating: 5.0,
    reviewsCount: 890,
    badge: "LIMITED COLLAB",
    isNew: false,
    featured: true,
    tagline: "The backward Swoosh icon redefined by Cactus Jack.",
    description: "Dressed in rich nubuck and tumbled leather, the Reverse Mocha combines Sail overlays with earth-toned dark mocha underlays. Highlighted by Travis Scott's signature reversed oversized Swoosh on the lateral side and Cactus Jack embroidery at the heel.",
    specs: {
      weight: "415g",
      drop: "10mm",
      cushioning: "Encapsulated Air Heel Unit",
      plate: "Aged Sail Heritage Outsole",
      upper: "Premium Suede Nubuck & Tumbled Leather",
      surface: "Streetwear & Collection Vault"
    },
    images: [
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Sail / Dark Mocha / University Red", hex: "#78350f", bgClass: "bg-amber-900" },
      { name: "Black Phantom / White Stitch", hex: "#18181b", bgClass: "bg-zinc-900" },
      { name: "Olive / Black / Sail", hex: "#3f6212", bgClass: "bg-lime-800" }
    ],
    sizes: [
      { size: "8.5", stock: 1 },
      { size: "9.0", stock: 2 },
      { size: "9.5", stock: 2 },
      { size: "10.0", stock: 3 },
      { size: "10.5", stock: 1 },
      { size: "11.0", stock: 2 }
    ],
    reviews: [
      { user: "Dominic Thorne", rating: 5, date: "1 month ago", verified: true, title: "The Holy Grail of Lows", comment: "Buttery soft nubuck. The reversed swoosh in cream gives it incredible dimension." }
    ]
  },
  {
    id: "hoka-speedgoat-5-gtx",
    name: "Hoka Speedgoat 5 GORE-TEX All-Weather",
    brand: "Hoka",
    category: "Trail",
    gender: "Men",
    price: 169.95,
    originalPrice: 185.00,
    rating: 4.8,
    reviewsCount: 240,
    badge: "ALL-TERRAIN",
    isNew: false,
    featured: false,
    tagline: "Vibram Megagrip claw lugs built for rugged alpine ridges.",
    description: "A workhorse designed for technical trails in wet conditions, the Speedgoat 5 GTX returns with less weight and more traction than ever before. Sealed with a GORE-TEX waterproof barrier and Vibram Megagrip with Traction Lug for commanding grip on loose soil.",
    specs: {
      weight: "327g",
      drop: "4mm",
      cushioning: "Compression Molded EVA Foam",
      plate: "Vibram Megagrip 5mm Lugs",
      upper: "Recycled Double Jacquard Mesh + GORE-TEX",
      surface: "Mud, Scree, Mountain Ridges"
    },
    images: [
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Spice / Cherry Mahogany", hex: "#c2410c", bgClass: "bg-orange-700" },
      { name: "Black / Castlerock", hex: "#262626", bgClass: "bg-neutral-800" },
      { name: "Cyan Ice / Mountain Green", hex: "#0891b2", bgClass: "bg-cyan-600" }
    ],
    sizes: [
      { size: "8.0", stock: 6 },
      { size: "8.5", stock: 8 },
      { size: "9.0", stock: 12 },
      { size: "9.5", stock: 10 },
      { size: "10.0", stock: 9 },
      { size: "10.5", stock: 7 },
      { size: "11.0", stock: 5 },
      { size: "12.0", stock: 3 }
    ],
    reviews: [
      { user: "Graham Bell", rating: 5, date: "3 weeks ago", verified: true, title: "Unbeatable traction on wet roots and rocks", comment: "Ran a 50k ultra in the pouring rain. Zero slips and dry socks at the finish line." }
    ]
  },
  {
    id: "nike-lebron-xxi-pearl",
    name: "Nike LeBron XXI 'Dragon Pearl'",
    brand: "Nike",
    category: "Basketball",
    gender: "Men",
    price: 199.99,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 172,
    badge: "KING EDITION",
    isNew: true,
    featured: false,
    tagline: "Low-profile containment with Zoom Air turbo armor.",
    description: "Designed for the heavy payload of King James. The LeBron XXI features an oyster-shell cabling containment system that locks the foot into place, paired with top-loaded Zoom Turbo in the forefoot and bottom-loaded 13mm Zoom Air in the heel.",
    specs: {
      weight: "420g",
      drop: "8mm",
      cushioning: "Zoom Turbo Forefoot + 13mm Heel Zoom Air",
      plate: "Carbon Fiber Midfoot Wing",
      upper: "Dimensionally Ribbed Pearlescent Fabric",
      surface: "Indoor Tournament Court"
    },
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Dragon Pearl / Melon Tint", hex: "#fb923c", bgClass: "bg-orange-400" },
      { name: "Tahitian Pearl Black", hex: "#1c1917", bgClass: "bg-stone-900" },
      { name: "Queen Conch Pink", hex: "#fb7185", bgClass: "bg-rose-400" }
    ],
    sizes: [
      { size: "8.5", stock: 3 },
      { size: "9.0", stock: 6 },
      { size: "9.5", stock: 8 },
      { size: "10.0", stock: 11 },
      { size: "10.5", stock: 5 },
      { size: "11.0", stock: 4 },
      { size: "12.0", stock: 2 }
    ],
    reviews: [
      { user: "Darius King", rating: 5, date: "2 weeks ago", verified: true, title: "Lockdown is impenetrable", comment: "The 360-degree cabling keeps your foot glued down on hard plant and drives." }
    ]
  }
];

export const CATEGORIES = [
  "All",
  "Running",
  "Streetwear",
  "Basketball",
  "Trail",
  "Lifestyle"
];

export const BRANDS = [
  "Nike",
  "Jordan",
  "New Balance",
  "Adidas",
  "On Cloud",
  "Salomon",
  "ASICS",
  "Puma",
  "Hoka"
];

export const CURRENCIES = {
  USD: { symbol: "$", rate: 1, label: "USD ($)" },
  EUR: { symbol: "€", rate: 0.92, label: "EUR (€)" },
  GBP: { symbol: "£", rate: 0.79, label: "GBP (£)" },
  INR: { symbol: "₹", rate: 86.5, label: "INR (₹)" }
};

export const PROMO_CODES = {
  "SNEAKER20": { discountPercent: 20, description: "20% Off Your Entire Order" },
  "SOLE10": { discountPercent: 10, description: "10% Off First Pair" },
  "FREESHIP": { freeShipping: true, description: "Free Express Overnight Shipping" }
};
