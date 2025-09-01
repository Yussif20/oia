// 🎨 Site Configuration
// Edit this file to customize your website
// This is your central place to manage all site settings

export const siteConfig = {
  // 🏢 Company Information
  company: {
    name: "Oia Store",
    logo: "/logo.svg", // Path to your logo (can be SVG, PNG, JPG)
    favicon: "/favicon.ico", // Path to your favicon
    phone: "+966 11 123 4567",
    email: "info@oiastore.com",
    address: "123 Shopping Street, Riyadh, Saudi Arabia",
    commercialReg: "1234567890",
    taxNumber: "987654321012345",
    description: "Your one-stop shop for quality products", // Site description for SEO
    keywords: "ecommerce, shop, store, online, products", // SEO keywords
  },

  // 🎨 Theme Colors (Change these to customize your brand colors)
  colors: {
    primary: "#3b82f6", // Main brand color (blue)
    primaryDark: "#2563eb", // Darker shade of primary
    primaryLight: "#93c5fd", // Lighter shade of primary
    secondary: "#f8fafc", // Secondary background color
    accent: "#10b981", // Accent color for highlights (green)
    warning: "#f59e0b", // Warning color (orange)
    danger: "#ef4444", // Error/danger color (red)
    success: "#22c55e", // Success color (green)
    gray: "#6b7280", // Text gray color
    lightGray: "#f3f4f6", // Light background gray
  },

  // 💰 Tax Configuration
  tax: {
    enabled: false, // Set to false to disable tax calculation
    rate: 0.15, // Tax rate (15% = 0.15)
    displayName: "VAT", // Display name for tax (VAT, Tax, etc.)
    includedInPrice: false, // true if prices already include tax
  },

  // 🌐 Social Media Links
  social: {
    facebook: "https://facebook.com/oiastore",
    twitter: "https://twitter.com/oiastore",
    instagram: "https://instagram.com/oiastore",
    linkedin: "https://linkedin.com/company/oiastore",
    youtube: "https://youtube.com/@oiastore",
    tiktok: "https://tiktok.com/@oiastore",
  },

  // 📱 Features (Enable/Disable site features)
  features: {
    enableWishlist: true,
    enableCart: true,
    enableUserAuth: true,
    enableSearch: true,
    enableCoupons: true,
    enableReviews: true,
    enableNewsletter: false, // Newsletter signup
    enableLiveChat: false, // Live chat widget
    enableMultiCurrency: false, // Multiple currency support
  },

  // 🛒 Shop Configuration
  shop: {
    currency: "SAR", // Default currency
    currencySymbol: "ر.س", // Currency symbol
    defaultShipping: 25, // Default shipping cost
    freeShippingThreshold: 200, // Free shipping above this amount
    maxQuantityPerItem: 10, // Maximum quantity per product
    enableGuestCheckout: true, // Allow checkout without account
  },

  // 🛒 Categories (Replace with your actual categories)
  categories: [
    {
      id: "sunglasses",
      name: "Sunglasses",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      featured: true,
    },
    {
      id: "fragrance",
      name: "Fragrance",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      featured: true,
    },
    {
      id: "gift_cards",
      name: "Gift Cards",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400",
      featured: true,
    },
    {
      id: "electronics",
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
      featured: false,
    },
    {
      id: "fashion",
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
      featured: false,
    },
    {
      id: "beauty",
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
      featured: false,
    },
  ],

  // 🎁 Coupon Configuration
  coupon: {
    enabled: true, // Enable/disable coupon system
    code: "VISA",
    discount: 10, // Percentage discount
    description: "Get 10% off with VISA cards",
    minAmount: 100, // Minimum order amount for coupon
    maxDiscount: 50, // Maximum discount amount
  },

  // 🎨 UI Configuration
  ui: {
    showProductRatings: true,
    showProductReviews: true,
    showSaleBadges: true,
    showNewBadges: true,
    showFeaturedBadges: true,
    enableProductQuickView: true,
    enableProductZoom: true,
    productsPerPage: 12,
    enableInfiniteScroll: false,
  },
};

export default siteConfig;
