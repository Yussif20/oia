// Sample products data - Replace with your actual product data
export const sampleProducts = [
  {
    id: "1",
    name: "Classic Aviator Sunglasses",
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
      "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=500",
    ],
    description:
      "Elegant rose fragrance with long-lasting scent and premium packaging.",
    descriptionAr: "عطر ورد أنيق برائحة تدوم طويلاً وتغليف فاخر.",
    inStock: true,
    rating: 4.8,
    reviews: 256,
    features: [
      "Long-lasting",
      "Premium Quality",
      "Elegant Packaging",
      "Natural Ingredients",
    ],
    specifications: {
      Volume: "100ml",
      Concentration: "Eau de Parfum",
      "Top Notes": "Rose, Bergamot",
      "Base Notes": "Musk, Amber",
    },
  },
  {
    id: "3",
    name: "Digital Gift Card",
    nameAr: "بطاقة هدية رقمية",
    price: 500,
    category: "gift_cards",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500",
    images: ["https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500"],
    description:
      "Perfect gift card for any occasion. Can be used on any product in our store.",
    descriptionAr:
      "بطاقة هدية مثالية لأي مناسبة. يمكن استخدامها على أي منتج في متجرنا.",
    inStock: true,
    rating: 5.0,
    reviews: 89,
    features: [
      "Digital Delivery",
      "No Expiry",
      "Flexible Amount",
      "Easy to Use",
    ],
    specifications: {
      Delivery: "Instant Email",
      Validity: "No Expiry",
      Usage: "Online Store",
      Transferable: "Yes",
    },
  },
  {
    id: "4",
    name: "Wireless Bluetooth Headphones",
    nameAr: "سماعات بلوتوث لاسلكية",
    price: 899,
    originalPrice: 1199,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
    images: [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    ],
    description:
      "High-quality wireless headphones with noise cancellation and premium sound.",
    descriptionAr: "سماعات لاسلكية عالية الجودة مع إلغاء الضوضاء وصوت فاخر.",
    inStock: true,
    rating: 4.6,
    reviews: 342,
    features: [
      "Noise Cancellation",
      "30H Battery",
      "Quick Charge",
      "Premium Sound",
    ],
    specifications: {
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      Bluetooth: "5.0",
      Weight: "250g",
    },
  },
  {
    id: "5",
    name: "Designer Handbag",
    nameAr: "حقيبة يد مصممة",
    price: 1299,
    originalPrice: 1599,
    category: "fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500",
    images: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    ],
    description:
      "Elegant designer handbag made from premium leather with exquisite craftsmanship.",
    descriptionAr: "حقيبة يد مصممة أنيقة مصنوعة من الجلد الفاخر بحرفية رائعة.",
    inStock: true,
    rating: 4.7,
    reviews: 167,
    features: [
      "Genuine Leather",
      "Multiple Compartments",
      "Designer Brand",
      "Durable",
    ],
    specifications: {
      Material: "Genuine Leather",
      Dimensions: "35x25x15 cm",
      Weight: "800g",
      Compartments: "3 main + 2 side",
    },
  },
  {
    id: "6",
    name: "Premium Skincare Set",
    nameAr: "مجموعة العناية بالبشرة الفاخرة",
    price: 799,
    originalPrice: 999,
    category: "beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
      "https://images.unsplash.com/photo-1556228149-d75a1b962f6e?w=500",
    ],
    description:
      "Complete skincare routine with premium organic ingredients for healthy glowing skin.",
    descriptionAr:
      "روتين عناية كامل بالبشرة مع مكونات عضوية فاخرة لبشرة صحية ومتوهجة.",
    inStock: true,
    rating: 4.9,
    reviews: 203,
    features: [
      "Organic Ingredients",
      "Complete Set",
      "All Skin Types",
      "Cruelty-Free",
    ],
    specifications: {
      Items: "5 products",
      "Skin Type": "All types",
      Ingredients: "Organic",
      Certification: "Cruelty-Free",
    },
  },
];

// Helper functions
export const getProductById = (id) => {
  return sampleProducts.find((product) => product.id === id);
};

export const getProductsByCategory = (category) => {
  return sampleProducts.filter((product) => product.category === category);
};

export const getFeaturedProducts = () => {
  return sampleProducts.slice(0, 6);
};

export const getBestOfCategory = (category, limit = 4) => {
  return sampleProducts
    .filter((product) => product.category === category)
    .slice(0, limit);
};

export const getSimilarProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];

  return sampleProducts
    .filter((p) => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};

// Alias for convenience
export const products = sampleProducts;
