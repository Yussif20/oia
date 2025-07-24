// 🎨 Site Configuration
// Edit this file to customize your website

export const siteConfig = {
  // 🏢 Company Information
  company: {
    name: "Oia Store",
    logo: "/logo.svg", // Updated to use the new SVG logo
    phone: "+966 11 123 4567",
    email: "info@oiastore.com",
    address: "123 Shopping Street, Riyadh, Saudi Arabia",
    commercialReg: "1234567890",
    taxNumber: "987654321012345",
  },

  // 🎨 Theme Colors (These match the CSS variables)
  colors: {
    primary: "#3b82f6",
    primaryDark: "#2563eb",
    primaryLight: "#93c5fd",
    secondary: "#f8fafc",
    accent: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
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

  // 📱 Features
  features: {
    enableWishlist: true,
    enableCart: true,
    enableUserAuth: true,
    enableSearch: true,
    enableCoupons: true,
    enableReviews: true,
  },

  // 🛒 Default Products (Replace with your actual products)
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
    code: "VISA",
    discount: 10,
    description: "Get 10% off with VISA cards",
  },

  // 📄 Legal Pages Content
  legal: {
    termsOfUse: `
      <h2>Terms of Use</h2>
      <p>Welcome to Oia Store. By using our website, you agree to these terms.</p>
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
      <h3>2. Use License</h3>
      <p>Permission is granted to temporarily download one copy of the materials on Oia Store's website for personal, non-commercial transitory viewing only.</p>
      <h3>3. Disclaimer</h3>
      <p>The materials on Oia Store's website are provided on an 'as is' basis. Oia Store makes no warranties, expressed or implied.</p>
    `,
    privacyPolicy: `
      <h2>Privacy Policy</h2>
      <p>Your privacy is important to us. This privacy statement explains the personal data Oia Store processes, how we process it, and for what purposes.</p>
      <h3>Information We Collect</h3>
      <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us.</p>
      <h3>How We Use Your Information</h3>
      <p>We use the information we collect to provide, maintain, and improve our services.</p>
    `,
    returnPolicy: `
      <h2>Return Policy</h2>
      <p>We want you to be completely satisfied with your purchase.</p>
      <h3>Return Window</h3>
      <p>You have 30 days from the date of purchase to return items for a full refund.</p>
      <h3>Condition of Items</h3>
      <p>Items must be returned in their original condition, unused, and in original packaging.</p>
      <h3>Refund Process</h3>
      <p>Refunds will be processed within 5-7 business days after we receive your return.</p>
    `,
    verifiedInfo: `
      <h2>Verified Store Information</h2>
      <div class="verification-badge">
        <div class="badge">✓ Verified</div>
        <p>This store is officially verified and meets all legal requirements.</p>
      </div>
      <h3>Our Certifications</h3>
      <ul>
        <li>Commercial Registration: 1234567890</li>
        <li>Tax Number: 987654321012345</li>
        <li>Verified Business License</li>
        <li>Secure Payment Processing</li>
      </ul>
    `,
  },

  // 🔧 Helper function to get verified info with dynamic data
  getVerifiedInfo() {
    return `
      <h2>Verified Store Information</h2>
      <div class="verification-badge">
        <div class="badge">✓ Verified</div>
        <p>This store is officially verified and meets all legal requirements.</p>
      </div>
      <h3>Our Certifications</h3>
      <ul>
        <li>Commercial Registration: ${this.company.commercialReg}</li>
        <li>Tax Number: ${this.company.taxNumber}</li>
        <li>Verified Business License</li>
        <li>Secure Payment Processing</li>
      </ul>
    `;
  },
};

export default siteConfig;
