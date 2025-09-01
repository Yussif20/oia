// Sample products data with 5+ items per category for comprehensive testing
export const sampleProducts = [
  // SUNGLASSES CATEGORY (5 products)
  {
    id: "sg1",
    name: " Aviator Sunglasses",
    nameAr: "نظارة طيار كلاسيكية",
    price: 299,
    originalPrice: 399,
    category: "sunglasses",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500",
    ],
    description:
      "Premium aviator sunglasses with UV protection and polarized lenses.",
    descriptionAr:
      "نظارات طيار فاخرة مع حماية من الأشعة فوق البنفسجية وعدسات مستقطبة.",
    inStock: true,
    rating: 4.5,
    reviews: 128,
    features: ["UV Protection", "Polarized", "Lightweight", "Durable"],
    specifications: {
      "Frame Material": "Metal",
      "Lens Material": "Polycarbonate",
      "UV Protection": "100%",
      Weight: "28g",
    },
  },

  {
    id: "sg2",
    name: "Designer Cat-Eye Sunglasses",
    nameAr: "نظارة عين القطة المصممة",
    price: 459,
    originalPrice: 599,
    category: "sunglasses",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500",
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    ],
    description:
      "Elegant cat-eye sunglasses with gradient lenses and crystal accents.",
    descriptionAr: "نظارات عين القطة الأنيقة مع عدسات متدرجة ولمسات كريستالية.",
    inStock: true,
    rating: 4.7,
    reviews: 89,
    features: [
      "Gradient Lenses",
      "Crystal Accents",
      "UV Protection",
      "Fashion Forward",
    ],
    specifications: {
      "Frame Material": "Acetate",
      "Lens Material": "CR-39",
      "UV Protection": "100%",
      Weight: "32g",
    },
  },
  {
    id: "sg3",
    name: "Sport Performance Sunglasses",
    nameAr: "نظارة رياضية عالية الأداء",
    price: 399,
    originalPrice: 499,
    category: "sunglasses",
    image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=500",
    images: [
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=500",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    ],
    description:
      "High-performance sports sunglasses with wraparound design and anti-slip grip.",
    descriptionAr:
      "نظارات رياضية عالية الأداء بتصميم ملتف وقبضة مانعة للانزلاق.",
    inStock: true,
    rating: 4.6,
    reviews: 156,
    features: [
      "Wraparound Design",
      "Anti-Slip Grip",
      "Impact Resistant",
      "Lightweight",
    ],
    specifications: {
      "Frame Material": "TR90",
      "Lens Material": "Polycarbonate",
      "UV Protection": "100%",
      Weight: "25g",
    },
  },
  {
    id: "sg4",
    name: "Vintage Round Sunglasses",
    nameAr: "نظارة دائرية عتيقة",
    price: 329,
    originalPrice: 429,
    category: "sunglasses",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
    ],
    description:
      "Retro-inspired round sunglasses with metal frame and tinted lenses.",
    descriptionAr: "نظارات دائرية بإلهام عتيق مع إطار معدني وعدسات ملونة.",
    inStock: true,
    rating: 4.3,
    reviews: 74,
    features: ["Retro Design", "Metal Frame", "Tinted Lenses", "Classic Style"],
    specifications: {
      "Frame Material": "Stainless Steel",
      "Lens Material": "Glass",
      "UV Protection": "100%",
      Weight: "35g",
    },
  },
  {
    id: "sg5",
    name: "Polarized Driving Sunglasses",
    nameAr: "نظارة قيادة مستقطبة",
    price: 519,
    originalPrice: 699,
    category: "sunglasses",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500",
    images: [
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500",
    ],
    description:
      "Premium polarized sunglasses designed specifically for driving comfort.",
    descriptionAr: "نظارات مستقطبة فاخرة مصممة خصيصاً لراحة القيادة.",
    inStock: true,
    rating: 4.8,
    reviews: 201,
    features: [
      "Polarized",
      "Driving Optimized",
      "Glare Reduction",
      "Premium Build",
    ],
    specifications: {
      "Frame Material": "Titanium",
      "Lens Material": "Polycarbonate",
      "UV Protection": "100%",
      Weight: "29g",
    },
  },

  // FRAGRANCE CATEGORY (5 products)
  {
    id: "2",
    name: "Luxury Rose Perfume",
    nameAr: "عطر الورد الفاخر",
    price: 599,
    originalPrice: 799,
    category: "fragrance",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500",
    ],
    description:
      "Elegant rose fragrance with long-lasting scent and luxurious packaging.",
    descriptionAr: "عطر ورد أنيق برائحة تدوم طويلاً وتغليف فاخر.",
    inStock: true,
    rating: 4.8,
    reviews: 256,
    features: [
      "Long-lasting",
      "Premium Ingredients",
      "Gift Box Included",
      "Luxury Packaging",
    ],
    specifications: {
      Volume: "100ml",
      Concentration: "Eau de Parfum",
      "Top Notes": "Rose, Bergamot",
      "Base Notes": "Musk, Amber",
    },
  },
  {
    id: "fr2",
    name: "Ocean Breeze Cologne",
    nameAr: "كولونيا نسيم المحيط",
    price: 399,
    originalPrice: 549,
    category: "fragrance",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500",
    ],
    description: "Fresh aquatic cologne with marine notes and citrus accents.",
    descriptionAr: "كولونيا مائية منعشة بنوتات بحرية ولمسات حمضية.",
    inStock: true,
    rating: 4.5,
    reviews: 142,
    features: [
      "Fresh Scent",
      "Marine Notes",
      "Summer Perfect",
      "Everyday Wear",
    ],
    specifications: {
      Volume: "75ml",
      Concentration: "Eau de Toilette",
      "Top Notes": "Sea Salt, Lemon",
      "Base Notes": "Driftwood, Musk",
    },
  },
  {
    id: "fr3",
    name: "Vanilla Orchid Perfume",
    nameAr: "عطر الفانيليا والأوركيد",
    price: 729,
    originalPrice: 899,
    category: "fragrance",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500",
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
    ],
    description:
      "Exotic vanilla and orchid blend with warm, sensual undertones.",
    descriptionAr: "مزيج غريب من الفانيليا والأوركيد مع نغمات دافئة وحسية.",
    inStock: true,
    rating: 4.7,
    reviews: 189,
    features: ["Exotic Blend", "Warm Scent", "Evening Wear", "Sensual"],
    specifications: {
      Volume: "50ml",
      Concentration: "Parfum",
      "Top Notes": "Vanilla, Orchid",
      "Base Notes": "Sandalwood, Patchouli",
    },
  },
  {
    id: "fr4",
    name: "Citrus Burst Eau de Toilette",
    nameAr: "أو دو تواليت انفجار الحمضيات",
    price: 299,
    originalPrice: 399,
    category: "fragrance",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=500",
    images: [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=500",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500",
    ],
    description:
      "Energizing citrus fragrance perfect for daytime and active lifestyles.",
    descriptionAr: "عطر حمضيات منشط مثالي للنهار وأنماط الحياة النشطة.",
    inStock: true,
    rating: 4.4,
    reviews: 98,
    features: [
      "Energizing",
      "Citrus Fresh",
      "Daytime Perfect",
      "Active Lifestyle",
    ],
    specifications: {
      Volume: "100ml",
      Concentration: "Eau de Toilette",
      "Top Notes": "Orange, Grapefruit, Lime",
      "Base Notes": "Cedar, White Musk",
    },
  },
  {
    id: "fr5",
    name: "Midnight Oud Intense",
    nameAr: "عود منتصف الليل المكثف",
    price: 899,
    originalPrice: 1199,
    category: "fragrance",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500",
    images: [
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500",
    ],
    description: "Rich and intense oud fragrance with dark, mysterious notes.",
    descriptionAr: "عطر عود غني ومكثف بنوتات داكنة وغامضة.",
    inStock: true,
    rating: 4.9,
    reviews: 312,
    features: [
      "Intense Oud",
      "Luxury Scent",
      "Evening Exclusive",
      "Premium Quality",
    ],
    specifications: {
      Volume: "30ml",
      Concentration: "Parfum",
      "Top Notes": "Oud, Rose",
      "Base Notes": "Amber, Saffron",
    },
  },

  // GIFT CARDS CATEGORY (5 products)
  {
    id: "3",
    name: "Digital Gift Card",
    nameAr: "بطاقة هدية رقمية",
    price: 500,
    category: "gift_cards",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500",
    images: ["https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500"],
    description:
      "Perfect gift for any occasion, redeemable across all product categories.",
    descriptionAr:
      "هدية مثالية لأي مناسبة، قابلة للاستبدال في جميع فئات المنتجات.",
    inStock: true,
    rating: 5.0,
    reviews: 89,
    features: [
      "Digital Delivery",
      "No Expiry",
      "Flexible Value",
      "Instant Email",
    ],
    specifications: {
      "Value Range": "100 ر.س - 5000 ر.س",
      Delivery: "Instant Email",
      Expiry: "No expiry date",
      Customization: "Any amount",
    },
  },
  {
    id: "gc2",
    name: "Premium Gift Card",
    nameAr: "بطاقة هدية فاخرة",
    price: 1000,
    category: "gift_cards",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    ],
    description: "Premium gift card with exclusive benefits and VIP treatment.",
    descriptionAr: "بطاقة هدية فاخرة مع مزايا حصرية ومعاملة كبار الشخصيات.",
    inStock: true,
    rating: 5.0,
    reviews: 145,
    features: [
      "VIP Benefits",
      "Priority Support",
      "Exclusive Access",
      "Premium Packaging",
    ],
    specifications: {
      "Value Range": "500 ر.س - 10000 ر.س",
      Delivery: "Physical + Digital",
      Expiry: "2 years",
      Benefits: "VIP privileges",
    },
  },
  {
    id: "gc3",
    name: "Special Occasion Gift Card",
    nameAr: "بطاقة هدية للمناسبات الخاصة",
    price: 750,
    category: "gift_cards",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500",
    images: [
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500",
    ],
    description:
      "Beautifully designed gift card perfect for birthdays, anniversaries, and celebrations.",
    descriptionAr:
      "بطاقة هدية مصممة بجمال مثالية لأعياد الميلاد والذكرى السنوية والاحتفالات.",
    inStock: true,
    rating: 4.9,
    reviews: 203,
    features: [
      "Beautiful Design",
      "Special Occasions",
      "Personalized Message",
      "Gift Wrapping",
    ],
    specifications: {
      "Value Range": "200 ر.س - 2000 ر.س",
      Delivery: "Physical Card",
      Expiry: "1 year",
      Customization: "Personal message",
    },
  },
  {
    id: "gc4",
    name: "Corporate Gift Card",
    nameAr: "بطاقة هدية مؤسسية",
    price: 2000,
    category: "gift_cards",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500"],
    description:
      "Professional gift cards for corporate gifting and employee rewards.",
    descriptionAr: "بطاقات هدايا احترافية للهدايا المؤسسية ومكافآت الموظفين.",
    inStock: true,
    rating: 4.8,
    reviews: 87,
    features: [
      "Bulk Orders",
      "Corporate Branding",
      "Volume Discounts",
      "Professional Service",
    ],
    specifications: {
      "Value Range": "1000 ر.س - 50000 ر.س",
      Delivery: "Digital + Invoice",
      Expiry: "2 years",
      Minimum: "10 cards",
    },
  },
  {
    id: "gc5",
    name: "Student Discount Gift Card",
    nameAr: "بطاقة هدية خصم الطلاب",
    price: 300,
    category: "gift_cards",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500",
    images: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500",
    ],
    description:
      "Special gift card with student discounts and educational benefits.",
    descriptionAr: "بطاقة هدية خاصة مع خصومات الطلاب والفوائد التعليمية.",
    inStock: true,
    rating: 4.6,
    reviews: 156,
    features: [
      "Student Discount",
      "Educational Benefits",
      "Flexible Terms",
      "ID Verification",
    ],
    specifications: {
      "Value Range": "100 ر.س - 1500 ر.س",
      Delivery: "Digital Only",
      Expiry: "1 year",
      Requirement: "Student ID",
    },
  },

  // ELECTRONICS CATEGORY (5 products)
  {
    id: "4",
    name: "Wireless Bluetooth Headphones",
    nameAr: "سماعات بلوتوث لاسلكية",
    price: 899,
    originalPrice: 1199,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    ],
    description:
      "Premium wireless headphones with noise cancellation and superior sound quality.",
    descriptionAr: "سماعات لاسلكية فاخرة مع إلغاء الضوضاء وجودة صوت فائقة.",
    inStock: true,
    rating: 4.6,
    reviews: 324,
    features: [
      "Noise Cancellation",
      "30h Battery",
      "Quick Charge",
      "Premium Sound",
    ],
    specifications: {
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
    },
  },
  {
    id: "el2",
    name: "Smart Fitness Watch",
    nameAr: "ساعة ذكية للياقة البدنية",
    price: 1299,
    originalPrice: 1599,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500",
    ],
    description:
      "Advanced fitness tracking with heart rate monitoring and GPS navigation.",
    descriptionAr:
      "تتبع متقدم للياقة البدنية مع مراقبة معدل ضربات القلب والملاحة GPS.",
    inStock: true,
    rating: 4.7,
    reviews: 189,
    features: [
      "Heart Rate Monitor",
      "GPS Tracking",
      "Water Resistant",
      "Long Battery",
    ],
    specifications: {
      "Battery Life": "7 days",
      "Water Rating": "50m",
      Display: "1.4″ AMOLED",
      Sensors: "GPS, Heart Rate, Accelerometer",
    },
  },
  {
    id: "el3",
    name: "Portable Power Bank",
    nameAr: "بطارية محمولة",
    price: 299,
    originalPrice: 399,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1609592806107-2e90e32b3a92?w=500",
    images: [
      "https://images.unsplash.com/photo-1609592806107-2e90e32b3a92?w=500",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
      "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=500",
    ],
    description:
      "High-capacity power bank with fast charging and multiple device support.",
    descriptionAr: "بطارية محمولة عالية السعة مع شحن سريع ودعم أجهزة متعددة.",
    inStock: true,
    rating: 4.5,
    reviews: 267,
    features: [
      "Fast Charging",
      "20000mAh",
      "Multiple Ports",
      "Digital Display",
    ],
    specifications: {
      Capacity: "20000mAh",
      "Input Power": "18W",
      "Output Power": "22.5W",
      Ports: "USB-A, USB-C",
    },
  },
  {
    id: "el4",
    name: "Wireless Charging Pad",
    nameAr: "قاعدة شحن لاسلكية",
    price: 199,
    originalPrice: 299,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
      "https://images.unsplash.com/photo-1609592806107-2e90e32b3a92?w=500",
    ],
    description:
      "Sleek wireless charging pad compatible with all Qi-enabled devices.",
    descriptionAr:
      "قاعدة شحن لاسلكية أنيقة متوافقة مع جميع الأجهزة المدعومة بـ Qi.",
    inStock: true,
    rating: 4.3,
    reviews: 145,
    features: [
      "Qi Compatible",
      "Fast Wireless Charging",
      "LED Indicator",
      "Slim Design",
    ],
    specifications: {
      "Charging Power": "15W",
      Compatibility: "Qi-enabled devices",
      "LED Indicator": "Yes",
      Dimensions: "10cm diameter",
    },
  },
  {
    id: "el5",
    name: "Bluetooth Speaker Pro",
    nameAr: "مكبر صوت بلوتوث برو",
    price: 699,
    originalPrice: 899,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    ],
    description:
      "Professional-grade Bluetooth speaker with 360° sound and waterproof design.",
    descriptionAr: "مكبر صوت بلوتوث احترافي مع صوت 360° وتصميم مقاوم للماء.",
    inStock: true,
    rating: 4.8,
    reviews: 298,
    features: ["360° Sound", "Waterproof", "20h Battery", "Voice Assistant"],
    specifications: {
      "Battery Life": "20 hours",
      "Water Rating": "IPX7",
      "Sound Output": "50W",
      Connectivity: "Bluetooth 5.2",
    },
  },

  // FASHION CATEGORY (5 products)
  {
    id: "5",
    name: "Designer Silk Scarf",
    nameAr: "وشاح حرير مصمم",
    price: 399,
    originalPrice: 599,
    category: "fashion",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500",
    images: [
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500",
      "https://images.unsplash.com/photo-1583334618232-91ecc5f8a7e9?w=500",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500",
    ],
    description:
      "Luxurious silk scarf with intricate patterns and premium finishing.",
    descriptionAr: "وشاح حرير فاخر بأنماط معقدة ولمسة نهائية فاخرة.",
    inStock: true,
    rating: 4.7,
    reviews: 156,
    features: [
      "100% Silk",
      "Hand-finished",
      "Designer Pattern",
      "Versatile Styling",
    ],
    specifications: {
      Material: "100% Mulberry Silk",
      Dimensions: "90cm x 90cm",
      Care: "Dry clean only",
      Origin: "Italy",
    },
  },
  {
    id: "fa2",
    name: "Leather Crossbody Bag",
    nameAr: "حقيبة جلدية متقاطعة",
    price: 799,
    originalPrice: 999,
    category: "fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
    ],
    description:
      "Premium leather crossbody bag with adjustable strap and multiple compartments.",
    descriptionAr:
      "حقيبة جلدية فاخرة متقاطعة مع حزام قابل للتعديل وجيوب متعددة.",
    inStock: true,
    rating: 4.6,
    reviews: 203,
    features: [
      "Genuine Leather",
      "Adjustable Strap",
      "Multiple Compartments",
      "Premium Hardware",
    ],
    specifications: {
      Material: "Genuine Leather",
      Dimensions: "25cm x 18cm x 8cm",
      "Strap Length": "120cm adjustable",
      Hardware: "Gold-plated",
    },
  },
  {
    id: "fa3",
    name: "Cashmere Blend Sweater",
    nameAr: "سترة مزيج الكشمير",
    price: 1199,
    originalPrice: 1599,
    category: "fashion",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
    ],
    description:
      "Ultra-soft cashmere blend sweater with elegant design and perfect fit.",
    descriptionAr: "سترة مزيج الكشمير فائقة النعومة بتصميم أنيق ومقاس مثالي.",
    inStock: true,
    rating: 4.8,
    reviews: 124,
    features: ["Cashmere Blend", "Ultra Soft", "Perfect Fit", "Elegant Design"],
    specifications: {
      Material: "70% Cashmere, 30% Wool",
      Sizes: "XS-XL",
      Care: "Hand wash or dry clean",
      Origin: "Scotland",
    },
  },
  {
    id: "fa4",
    name: "Classic Trench Coat",
    nameAr: "معطف ترنش كلاسيكي",
    price: 1899,
    originalPrice: 2399,
    category: "fashion",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500",
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500",
      "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    ],
    description:
      "Timeless trench coat with water-resistant fabric and classic detailing.",
    descriptionAr: "معطف ترنش خالد مع نسيج مقاوم للماء وتفاصيل كلاسيكية.",
    inStock: true,
    rating: 4.9,
    reviews: 178,
    features: [
      "Water Resistant",
      "Classic Design",
      "Belt Included",
      "Premium Quality",
    ],
    specifications: {
      Material: "Cotton Gabardine",
      "Water Resistance": "DWR Coating",
      Lining: "Quilted",
      Sizes: "XS-XXL",
    },
  },
  {
    id: "fa5",
    name: "Designer Ankle Boots",
    nameAr: "أحذية الكاحل المصممة",
    price: 1599,
    originalPrice: 1999,
    category: "fashion",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500",
    ],
    description:
      "Handcrafted leather ankle boots with comfortable heel and premium finish.",
    descriptionAr:
      "أحذية كاحل جلدية مصنوعة يدوياً مع كعب مريح ولمسة نهائية فاخرة.",
    inStock: true,
    rating: 4.7,
    reviews: 267,
    features: [
      "Handcrafted",
      "Comfortable Heel",
      "Premium Leather",
      "Designer Quality",
    ],
    specifications: {
      Material: "Full Grain Leather",
      "Heel Height": "5cm",
      Sole: "Rubber",
      Sizes: "35-42",
    },
  },

  // BEAUTY CATEGORY (5 products)
  {
    id: "6",
    name: "Anti-Aging Serum",
    nameAr: "سيروم مكافح الشيخوخة",
    price: 899,
    originalPrice: 1199,
    category: "beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
    ],
    description:
      "Advanced anti-aging serum with peptides and hyaluronic acid for youthful skin.",
    descriptionAr:
      "سيروم متقدم مكافح للشيخوخة مع الببتيدات وحمض الهيالورونيك لبشرة شابة.",
    inStock: true,
    rating: 4.8,
    reviews: 289,
    features: [
      "Anti-Aging",
      "Peptides",
      "Hyaluronic Acid",
      "Clinically Tested",
    ],
    specifications: {
      Volume: "30ml",
      "Key Ingredients": "Peptides, Hyaluronic Acid",
      "Skin Type": "All skin types",
      Usage: "Morning & Evening",
    },
  },
  {
    id: "be2",
    name: "Luxury Face Moisturizer",
    nameAr: "مرطب وجه فاخر",
    price: 599,
    originalPrice: 799,
    category: "beauty",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500",
    images: [
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
    ],
    description:
      "Rich moisturizer with premium botanicals for deep hydration and nourishment.",
    descriptionAr: "مرطب غني بالنباتات الفاخرة للترطيب العميق والتغذية.",
    inStock: true,
    rating: 4.6,
    reviews: 167,
    features: [
      "Deep Hydration",
      "Premium Botanicals",
      "Rich Formula",
      "Long-lasting",
    ],
    specifications: {
      Volume: "50ml",
      "Key Ingredients": "Shea Butter, Argan Oil",
      "Skin Type": "Dry to normal",
      SPF: "SPF 15",
    },
  },
  {
    id: "be3",
    name: "Vitamin C Brightening Mask",
    nameAr: "قناع فيتامين سي المضيء",
    price: 399,
    originalPrice: 549,
    category: "beauty",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
    ],
    description:
      "Brightening face mask with vitamin C and natural extracts for radiant skin.",
    descriptionAr: "قناع وجه مضيء بفيتامين سي ومستخلصات طبيعية للبشرة المشرقة.",
    inStock: true,
    rating: 4.5,
    reviews: 134,
    features: [
      "Vitamin C",
      "Brightening",
      "Natural Extracts",
      "Weekly Treatment",
    ],
    specifications: {
      Volume: "75ml",
      "Key Ingredients": "Vitamin C, Niacinamide",
      Usage: "2-3 times per week",
      "Application Time": "15-20 minutes",
    },
  },
  {
    id: "be4",
    name: "Premium Eye Cream",
    nameAr: "كريم عيون فاخر",
    price: 749,
    originalPrice: 999,
    category: "beauty",
    image: "https://images.unsplash.com/photo-1631730486509-7e4b9c8c8b0b?w=500",
    images: [
      "https://images.unsplash.com/photo-1631730486509-7e4b9c8c8b0b?w=500",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500",
    ],
    description:
      "Intensive eye cream targeting fine lines, dark circles, and puffiness.",
    descriptionAr:
      "كريم عيون مكثف يستهدف الخطوط الدقيقة والهالات السوداء والانتفاخ.",
    inStock: true,
    rating: 4.7,
    reviews: 198,
    features: [
      "Anti-Aging",
      "Dark Circle Reduction",
      "Puffiness Relief",
      "Gentle Formula",
    ],
    specifications: {
      Volume: "15ml",
      "Key Ingredients": "Retinol, Caffeine",
      "Skin Type": "Sensitive eye area",
      Usage: "Morning & Evening",
    },
  },
  {
    id: "be5",
    name: "Hydrating Sheet Mask Set",
    nameAr: "مجموعة أقنعة الترطيب",
    price: 299,
    originalPrice: 399,
    category: "beauty",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500",
    images: [
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500",
    ],
    description:
      "Set of 10 hydrating sheet masks with various beneficial ingredients.",
    descriptionAr: "مجموعة من 10 أقنعة ترطيب بمكونات مفيدة متنوعة.",
    inStock: true,
    rating: 4.4,
    reviews: 245,
    features: [
      "10 Mask Set",
      "Various Formulas",
      "Intense Hydration",
      "Easy Application",
    ],
    specifications: {
      Quantity: "10 masks",
      "Mask Types": "Hyaluronic, Collagen, Aloe",
      "Application Time": "15-20 minutes",
      Frequency: "2-3 times per week",
    },
  },
];

// Helper functions to get products by category
export const getProductsByCategory = (category) => {
  return sampleProducts.filter((product) => product.category === category);
};

export const getFeaturedProducts = () => {
  return sampleProducts.slice(0, 10);
};

export const getBestOffers = () => {
  return sampleProducts
    .filter(
      (product) =>
        product.originalPrice && product.originalPrice > product.price
    )
    .slice(0, 8);
};

export const getBestOfCategory = (category) => {
  return sampleProducts
    .filter((product) => product.category === category)
    .slice(0, 6);
};

export const getSimilarProducts = (currentProductId, category) => {
  return sampleProducts
    .filter(
      (product) =>
        product.category === category && product.id !== currentProductId
    )
    .slice(0, 6);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return sampleProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.nameAr.includes(query) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.descriptionAr.includes(query) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getProductById = (id) => {
  return sampleProducts.find((product) => product.id === id);
};

// Category configuration
export const categories = [
  { id: "sunglasses", name: "Sunglasses", nameAr: "نظارات شمسية", icon: "🕶️" },
  { id: "fragrance", name: "Fragrance", nameAr: "عطور", icon: "🌸" },
  {
    id: "gift_cards",
    name: "Gift Cards",
    nameAr: "بطاقات الهدايا",
    icon: "🎁",
  },
  { id: "electronics", name: "Electronics", nameAr: "إلكترونيات", icon: "📱" },
  { id: "fashion", name: "Fashion", nameAr: "أزياء", icon: "👗" },
  { id: "beauty", name: "Beauty", nameAr: "جمال", icon: "💄" },
];
