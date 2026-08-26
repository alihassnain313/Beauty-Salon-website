import { BusinessInfo, FAQItem, GalleryItem, ServiceCategory, ServiceItem, SpaPackage, Testimonial } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Imperial - Beauty Salon and Spa',
  tagline: 'Karachi’s Sanctuary of Refined Beauty & Tranquility',
  category: 'Beauty Salon & Spa',
  address: 'B-11, Behind Home Plus Store, Adnan Khalil Street, Allama Shabbir Ahmed Usmani Rd, Block 4, Gulshan-e-Iqbal, Karachi, Pakistan',
  landmark: 'Behind Home Plus Store, Block 4, Gulshan-e-Iqbal',
  city: 'Karachi',
  country: 'Pakistan',
  phone: '0333-8748899',
  phoneRaw: '03338748899',
  whatsappUrl: 'https://wa.me/923338748899?text=Hello%20Imperial%20Salon%20%26%20Spa%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.',
  googleMapsUrl: 'https://maps.app.goo.gl/E7jhqGFrGScpc3C67',
  openingHours: [
    { days: 'Monday – Saturday', hours: '10:30 AM – 08:30 PM', status: 'Regular Hours' },
    { days: 'Sunday', hours: '11:00 AM – 08:00 PM', status: 'Weekend Appointments' },
    { days: 'Bridal & Private Bookings', hours: 'Early Morning / Extended Hours by Prior Reservation', status: 'VIP Service' },
  ],
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: 'all', name: 'All Services', shortDesc: 'Complete head-to-toe beauty rituals', icon: 'Sparkles' },
  { id: 'hair', name: 'Hair Styling & Care', shortDesc: 'Cuts, custom colors, keratin & restorative therapies', icon: 'Scissors' },
  { id: 'skincare', name: 'Skincare & Facials', shortDesc: 'Hydra-glow, deep cleansing & anti-aging rituals', icon: 'Flower2' },
  { id: 'makeup', name: 'Bridal & Makeup', shortDesc: 'Signature bridal couture, barat, valima & party glam', icon: 'Palette' },
  { id: 'nails', name: 'Nail Care & Art', shortDesc: 'Luxury manicures, paraffin pedicures & gel nail extensions', icon: 'HandMetal' },
  { id: 'spa', name: 'Spa & Relaxation', shortDesc: 'Aromatherapy body massages, scrubs & stress relief', icon: 'HeartPulse' },
  { id: 'waxing', name: 'Waxing & Grooming', shortDesc: 'Gentle Rica organic waxing, threading & lash lifts', icon: 'Flame' },
];

export const SERVICES: ServiceItem[] = [
  // Hair Styling & Care
  {
    id: 'hair-1',
    name: 'Couture Haircut & Signature Blowout',
    category: 'hair',
    description: 'Precision layered cutting or texturizing tailored to your face shape, followed by deep conditioning wash and a voluminous runway blowout.',
    duration: '45 - 60 mins',
    priceStartingFrom: 'PKR 2,500',
    popular: true,
    highlight: 'Client Favorite',
    includes: ['Consultation & Hair Diagnosis', 'Kerastase Scalp Cleansing Wash', 'Custom Designer Cut', 'Volumizing Blowdry & Serum finish']
  },
  {
    id: 'hair-2',
    name: 'Balayage, Ombré & Dimensional Highlights',
    category: 'hair',
    description: 'Seamless freehand hand-painted balayage or micro-foil highlights utilizing premium L\'Oréal & Wella formulas with bond protectors.',
    duration: '120 - 180 mins',
    priceStartingFrom: 'PKR 12,000',
    popular: true,
    highlight: 'Bespoke Color',
    includes: ['Colorist Consultation', 'Bond-building protection (Olaplex)', 'Custom toner/gloss', 'Post-color hydration treatment']
  },
  {
    id: 'hair-3',
    name: 'Brazilian Keratin & Protein Smoothing Treatment',
    category: 'hair',
    description: 'Intense frizz elimination, mirror-like shine, and long-lasting smoothness that transforms unruly or heat-damaged tresses.',
    duration: '150 - 210 mins',
    priceStartingFrom: 'PKR 15,000',
    popular: true,
    highlight: 'Up to 5 Months Smoothness',
    includes: ['Clarifying deep cleanse', 'Formaldehyde-free protein infusion', 'Thermal sealing & cuticle lock', 'Aftercare home regimen guidance']
  },
  {
    id: 'hair-4',
    name: 'Olaplex Rebonding & Hair Spa Therapy',
    category: 'hair',
    description: 'Revolutionary bond multiplier treatment designed to revive chemically treated, bleached, or brittle hair back to healthy elasticity.',
    duration: '60 mins',
    priceStartingFrom: 'PKR 4,500',
    includes: ['Olaplex No.1 & No.2 Intensive Cure', 'Aromatherapeutic Scalp Massage', 'Steam infusion hydration', 'Silk protein leave-in seal']
  },

  // Skincare & Facials
  {
    id: 'skin-1',
    name: 'Imperial Hydra-Glow Deep Infusion Facial',
    category: 'skincare',
    description: 'Medical-grade multi-step hydra-dermabrasion extracting impurities while simultaneously bathing skin in hyaluronic acid, peptides, and antioxidants.',
    duration: '75 mins',
    priceStartingFrom: 'PKR 6,500',
    popular: true,
    highlight: 'Red Carpet Radiance',
    includes: ['Hydro-vacuum pore extraction', 'Enzyme exfoliation peel', 'Ultrasonic serum infusion', 'Cryo-cooling firming wand & LED light therapy']
  },
  {
    id: 'skin-2',
    name: '24K Luxury Gold & Collagen Anti-Aging Facial',
    category: 'skincare',
    description: 'An opulent cellular renewal treatment with pure 24K gold foil sheets and marine collagen to lift fine lines, restore bounce, and brighten.',
    duration: '90 mins',
    priceStartingFrom: 'PKR 8,500',
    popular: true,
    highlight: 'Bridal Must-Have',
    includes: ['Gold leaf micro-massage', 'Botanical firming peel', 'Collagen elastin mask', 'Lymphatic drainage décolleté massage']
  },
  {
    id: 'skin-3',
    name: 'Deep Cleansing Herbal Detox & Blackhead Clarifier',
    category: 'skincare',
    description: 'Targeted clarifying facial tailored for Karachi’s climate, decongesting clogged pores, clearing blemishes, and balancing sebum production.',
    duration: '60 mins',
    priceStartingFrom: 'PKR 3,800',
    includes: ['Ozone steam & manual extraction', 'Antiseptic tea-tree high frequency', 'Calming botanical clay mask', 'Oil-free soothing hydration']
  },
  {
    id: 'skin-4',
    name: 'Brightening Whitening Vitamin C Glow Therapy',
    category: 'skincare',
    description: 'Potent stable Vitamin C and AHA infusion reducing sunspots, hyperpigmentation, and dullness for a crystal-clear complexion.',
    duration: '70 mins',
    priceStartingFrom: 'PKR 5,500',
    includes: ['Double gentle AHA cleansing', 'Bio-active Vitamin C booster', 'Sheet mask infusion', 'Broad-spectrum UV shield application']
  },

  // Nail Care & Art
  {
    id: 'nail-1',
    name: 'Imperial Royal Spa Manicure & Pedicure',
    category: 'nails',
    description: 'Luxurious therapeutic soak with rose petals, organic sea salt scrub, cuticle therapy, hot towel wrap, and nourishing massage.',
    duration: '75 mins',
    priceStartingFrom: 'PKR 3,500',
    popular: true,
    highlight: 'Complete Pamper',
    includes: ['Floral herbal soak', 'Dead skin exfoliation & heel buffing', 'Deep moisturizing mask with heated mitts', 'High-shine buff or OPI polish']
  },
  {
    id: 'nail-2',
    name: 'Warm Paraffin Wax Pedicure & Callus Smoothing',
    category: 'nails',
    description: 'Warm scented paraffin wax immersion deeply moisturizes cracked heels, relieves joint tension, and leaves feet baby-soft.',
    duration: '60 mins',
    priceStartingFrom: 'PKR 3,000',
    includes: ['Callus peel treatment', 'Warm botanical paraffin dip', 'Pressure-point foot reflexology', 'Breathable polish finish']
  },
  {
    id: 'nail-3',
    name: 'Gel Extensions & Custom Bridal Nail Art',
    category: 'nails',
    description: 'Flawlessly sculpted hard gel or acrylic extensions with chip-resistant Gelish polish, chrome powder, or intricate bespoke bridal art.',
    duration: '90 - 120 mins',
    priceStartingFrom: 'PKR 5,500',
    popular: true,
    highlight: 'Lasts 3-4 Weeks',
    includes: ['Nail bed prep & tip extension', 'Builder gel sculpting & UV curing', 'Custom hand-painted designs / crystals', 'Nourishing cuticle oil']
  },

  // Makeup & Bridal Services
  {
    id: 'makeup-1',
    name: 'Signature Barat / Valima Royal Bridal Makeup',
    category: 'makeup',
    description: 'Complete high-definition or airbrush bridal makeover customized to your outfit, jewelry, and personal aesthetic. Flawless all-night hold.',
    duration: '180 mins',
    priceStartingFrom: 'PKR 25,000',
    popular: true,
    highlight: 'Karachi’s Top Bridal Lounge',
    includes: ['Pre-bridal skin prep & hydra primer', 'Luxury foundation & contouring (Huda, Dior, MAC)', '3D Mink lashes & eye artistry', 'Dupatta setting & jewelry styling']
  },
  {
    id: 'makeup-2',
    name: 'Mehndi / Mayun Glowing Festive Glam',
    category: 'makeup',
    description: 'Radiant, dewy skin with vibrant eyes, customized floral or modern braids, and traditional dupatta draping for your colorful festivities.',
    duration: '120 mins',
    priceStartingFrom: 'PKR 16,000',
    includes: ['Luminous base formulation', 'Vibrant shimmer / smokey eyes', 'Festive hair styling with baby’s breath/accessories', 'Long-wear setting mist']
  },
  {
    id: 'makeup-3',
    name: 'High-Fashion Party Makeup & Hairstyling',
    category: 'makeup',
    description: 'Glamorous yet effortless look for weddings, dinner parties, engagements, or red carpet events with precision contour and sleek waves.',
    duration: '75 mins',
    priceStartingFrom: 'PKR 8,500',
    popular: true,
    highlight: 'Event Ready',
    includes: ['HD photographic base', 'Custom eye makeup with volume lashes', 'Glam Hollywood waves or textured updo', 'Lip liner & gloss blend']
  },

  // Spa & Body Relaxation
  {
    id: 'spa-1',
    name: 'Swedish Aromatherapy Full Body Massage',
    category: 'spa',
    description: 'Soothing rhythmic strokes using warm organic essential oils (lavender, eucalyptus, or ylang-ylang) to melt away stress and muscle tension.',
    duration: '60 / 90 mins',
    priceStartingFrom: 'PKR 6,000',
    popular: true,
    highlight: 'Ultimate Stress Relief',
    includes: ['Custom essential oil selection', 'Full body rhythmic tension release', 'Hot towel compressions', 'Complimentary herbal green tea']
  },
  {
    id: 'spa-2',
    name: 'Hot Basalt Stone Therapeutic Massage',
    category: 'spa',
    description: 'Smooth volcanic basalt stones heated to ideal therapeutic warmth are placed on key chakra points to penetrate deep muscular tension.',
    duration: '75 mins',
    priceStartingFrom: 'PKR 7,500',
    includes: ['Pre-warmed stone gliding', 'Targeted knot release for shoulders & back', 'Aromatherapeutic head & scalp pressure points', 'Relaxing tea service']
  },
  {
    id: 'spa-3',
    name: 'Full Body Luxury Polishing & Dead Sea Scrub',
    category: 'spa',
    description: 'Exfoliates dull skin across the entire body with mineral-rich Dead Sea salts and botanical emollients, revealing velvety smooth, glowing skin.',
    duration: '90 mins',
    priceStartingFrom: 'PKR 8,000',
    includes: ['Whole body gentle buffing scrub', 'Steam therapy rinse', 'Deep hydrating body butter infusion', 'Glowing skin sealant']
  },

  // Waxing & Grooming
  {
    id: 'waxing-1',
    name: 'Full Body Rica Organic Fruit Waxing',
    category: 'waxing',
    description: 'Gentle, colophony-free Italian Rica wax infused with avocado and almond oils, perfect for sensitive skin with minimal redness.',
    duration: '60 - 90 mins',
    priceStartingFrom: 'PKR 5,500',
    popular: true,
    highlight: 'Sensitive-Skin Approved',
    includes: ['Pre-wax soothing gel', 'Full arms, legs, underarms & back waxing', 'Post-wax ingrown hair preventive oil', 'Cooling aloe vera lotion']
  },
  {
    id: 'waxing-2',
    name: 'Keratin Lash Lift & Eyebrow Lamination',
    category: 'waxing',
    description: 'Enhances your natural lashes with an upward curl and thickens eyebrows with semi-permanent tinting and feathery lamination.',
    duration: '60 mins',
    priceStartingFrom: 'PKR 4,500',
    includes: ['Gentle lash curl setting', 'Deep black/brown tint infusion', 'Brow shaping & keratin lamination', 'Nourishing castor elixir']
  }
];

export const PACKAGES: SpaPackage[] = [
  {
    id: 'pkg-royal-bride',
    title: 'The Imperial Royal Bridal Sanctuary',
    subtitle: 'The comprehensive multi-day luxury transformation for the discerning Karachi bride.',
    tag: 'Most Prestigious Package',
    duration: 'Full Bridal Suite + 3 Pre-Sessions',
    price: 'PKR 45,000',
    originalPrice: 'PKR 58,000',
    recommendedFor: 'Barat or Valima Brides seeking royalty-level perfection',
    isPopular: true,
    features: [
      'Pre-Bridal 24K Gold & Hydra-Glow Facial (3 days before)',
      'Imperial Royal Spa Manicure & Paraffin Pedicure',
      'Full Body Rica Organic Waxing & Polishing Ritual',
      'Olaplex Hair Spa & Conditioning Treatment',
      'Full Signature HD/Airbrush Bridal Makeup on Event Day',
      'Intricate Bridal Hair Updo & Real/Artificial Floral Setting',
      'Professional Dupatta Draping, Jewelry Setting & Lash Artistry',
      'Complimentary Private VIP Bridal Suite Access & Refreshments'
    ]
  },
  {
    id: 'pkg-goddess-glow',
    title: 'Glowing Goddess Pre-Event Pamper',
    subtitle: 'The ultimate rejuvenation day before weddings, Eid, or high-profile galas.',
    tag: 'Best Value Pamper',
    duration: '3.5 Hours Session',
    price: 'PKR 14,500',
    originalPrice: 'PKR 19,000',
    recommendedFor: 'Engagement, Family Weddings, Anniversaries & Special Occasions',
    isPopular: true,
    features: [
      'Imperial Hydra-Glow Instant Radiance Facial',
      'Signature Haircut with Volume Blowdry Styling',
      'Deluxe Rose Petal Spa Manicure & Pedicure',
      'Upper Body Neck & Shoulder Stress-Relief Massage (30 mins)',
      'Eyebrow Threading & Upper Lip Grooming',
      'Complimentary Scalp Steam & Moroccan Argan Serum'
    ]
  },
  {
    id: 'pkg-weekend-detox',
    title: 'Weekend Reset & Holistic Scalp Spa',
    subtitle: 'De-stress from the bustling city with deep muscle relaxation and head-to-toe pampering.',
    tag: 'Self-Care Ritual',
    duration: '2.5 Hours Session',
    price: 'PKR 9,500',
    originalPrice: 'PKR 12,500',
    recommendedFor: 'Working professionals, mothers, and self-care weekends',
    isPopular: false,
    features: [
      'Swedish Aromatherapy Full Body Massage (60 mins)',
      'Deep Cleansing Herbal Facial & Blackhead Extraction',
      'Traditional Ayurvedic Scalp Massage & Steam Oil Therapy',
      'Express Foot Scrub & Heel Hydration',
      'Herbal Infusion Calming Tea'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Ayesha Farooq',
    role: 'Barat Bride',
    area: 'Gulshan-e-Iqbal, Block 4',
    comment: 'Imperial made my wedding day truly unforgettable! The bridal suite is so serene, hygienic, and private. My makeup stayed intact from 6 PM until late at night, and the hair stylist secured my heavy dupatta effortlessly. Truly the best salon in Gulshan!',
    rating: 5,
    service: 'Imperial Royal Bridal Package',
    date: 'February 2026'
  },
  {
    id: 't-2',
    name: 'Dr. Mahnoor Siddiqui',
    role: 'Dermatologist & Client',
    area: 'Gulistan-e-Jauhar',
    comment: 'As someone in the medical field, hygiene and sterilization are non-negotiable for me. Imperial uses sealed, sterilized tools for mani-pedis and top-notch skincare products like Dermalogica. Their Hydra-Glow facial gave me an undeniable glow without any irritation.',
    rating: 5,
    service: 'Hydra-Glow Facial & Spa Pedicure',
    date: 'January 2026'
  },
  {
    id: 't-3',
    name: 'Zainab Qureshi',
    role: 'Corporate Executive',
    area: 'Clifton / Gulshan',
    comment: 'I got my Balayage and Brazilian Keratin done here. The senior colorist was extremely patient during consultation and preserved the health of my hair using Olaplex. The team is warm, courteous, and very professional.',
    rating: 5,
    service: 'Balayage & Keratin Treatment',
    date: 'January 2026'
  },
  {
    id: 't-4',
    name: 'Sana Tariq',
    role: 'Regular Client',
    area: 'Block 7, Gulshan-e-Iqbal',
    comment: 'Finding a serene, truly luxurious spa near Allama Shabbir Ahmed Usmani Road was such a blessing! The Swedish massage was incredibly soothing, and booking over WhatsApp was seamless.',
    rating: 5,
    service: 'Swedish Aromatherapy Massage',
    date: 'December 2025'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Royal Barat Bridal Glam',
    category: 'bridal',
    imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature Bridal'
  },
  {
    id: 'g-2',
    title: 'Honey Blonde Dimensional Balayage',
    category: 'hair',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    tag: 'Hair Color'
  },
  {
    id: 'g-3',
    title: 'Medical Grade Hydra-Glow Infusion',
    category: 'skincare',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    tag: 'Glowing Skin'
  },
  {
    id: 'g-4',
    title: 'Rose Gold Chrome & Acrylic Gel Art',
    category: 'nails',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    tag: 'Luxury Nails'
  },
  {
    id: 'g-5',
    title: 'Tranquil Aromatherapy Spa Suite',
    category: 'spa',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    tag: 'Spa Sanctuary'
  },
  {
    id: 'g-6',
    title: 'Dewy Mehndi Glam & Braided Hair',
    category: 'bridal',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    tag: 'Bridal Artistry'
  },
  {
    id: 'g-7',
    title: 'Voluminous Silk Press & Cut',
    category: 'hair',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    tag: 'Precision Cut'
  },
  {
    id: 'g-8',
    title: 'Rose Petal Foot Spa Ritual',
    category: 'spa',
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    tag: 'Foot Therapy'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I book an appointment at Imperial Salon and Spa?',
    answer: 'You can easily book by clicking the "Book an Appointment" button on our website, sending a message directly on WhatsApp to 0333-8748899, or calling our reception. We will confirm your preferred date, time slot, and specialist immediately.',
    category: 'Appointments'
  },
  {
    question: 'Where exactly is Imperial Salon located in Gulshan-e-Iqbal?',
    answer: 'We are situated at B-11, Behind Home Plus Store, Adnan Khalil Street, Allama Shabbir Ahmed Usmani Rd, Block 4, Gulshan-e-Iqbal, Karachi. Convenient parking is available right in front of the salon with easy access from Disco Bakery and Usmani Road.',
    category: 'Location'
  },
  {
    question: 'What professional brands and products do you use for treatments?',
    answer: 'We prioritize skin and hair integrity by exclusively using authentic international brands including L\'Oréal Professionnel, Kerastase, Olaplex, Dermalogica, Janssen Cosmetics, Rica Italian Wax, Huda Beauty, MAC, and Dior.',
    category: 'Products & Safety'
  },
  {
    question: 'Do you offer private consultations and trials for Bridal Makeup?',
    answer: 'Yes! We encourage brides-to-be to visit our bridal lounge for an in-depth consultation regarding their wedding events (Mehndi, Barat, Valima), outfit color palettes, skin preparation timeline, and hair accessories.',
    category: 'Bridal'
  },
  {
    question: 'What hygiene and sterilization protocols are maintained?',
    answer: 'Hygiene is our highest hallmark. All metallic manicure, pedicure, and facial tools undergo hospital-grade UV & autoclave sterilization. Single-use disposables are used for waxing, facial sponges, and cape liners.',
    category: 'Hygiene'
  },
  {
    question: 'Can I customize a personalized spa or pamper package?',
    answer: 'Absolutely! Our reception team can curate custom gift vouchers or customized multi-service pampering packages tailored to your schedule and budget.',
    category: 'Packages'
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Crown',
    title: 'Expert & Certified Stylists',
    description: 'Our senior colorists, aesthetic skincare specialists, and makeup artists bring certified expertise, regular masterclass training, and artistic precision to every client.'
  },
  {
    icon: 'ShieldCheck',
    title: '100% Authentic Premium Products',
    description: 'We never compromise on safety. We only utilize genuine dermatological brands including L\'Oréal, Olaplex, Dermalogica, Janssen, and Rica Wax.'
  },
  {
    icon: 'Sparkles',
    title: 'Hygienic & Tranquil Sanctuary',
    description: 'Experience hospital-grade autoclaved sterilization, private treatment rooms, ambient soothing music, and a peaceful escape from Karachi\'s urban rush.'
  },
  {
    icon: 'MapPin',
    title: 'Prime Gulshan-e-Iqbal Location',
    description: 'Conveniently located at Block 4, Allama Shabbir Ahmed Usmani Road behind Home Plus Store with dedicated parking and easy accessibility.'
  }
];
