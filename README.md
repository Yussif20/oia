# Oia Store - Modern E-commerce Platform

🛍️ A beautiful, fully responsive e-commerce platform built with React, featuring Arabic/English internationalization, modern design, and seamless shopping experience.

![Oia Store](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.0+-61DAFB.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC.svg)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF.svg)

## ✨ Features

### 🌟 Core Features

- **Modern Design**: Beautiful, gradient-rich UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Bilingual Support**: Complete Arabic/English internationalization with RTL support
- **Product Management**: Advanced product browsing, filtering, and sorting
- **Shopping Cart**: Full cart functionality with quantity management
- **Wishlist**: Save favorite items with individual remove options
- **User Authentication**: Login/register with social media integration
- **Checkout System**: Secure checkout with payment information collection

### 🎨 Design & UX

- **Gradient Backgrounds**: Beautiful color transitions throughout the app
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Professional Typography**: Carefully selected fonts and spacing
- **Modern Icons**: Lucide React icons for consistent iconography
- **Loading States**: Smooth loading animations and skeleton screens

### 🌐 Internationalization

- **Arabic & English**: Complete translation for all user-facing text
- **RTL Support**: Proper right-to-left layout for Arabic language
- **Dynamic Language Switching**: Real-time language change without page reload
- **Localized Content**: Currency, dates, and number formatting

### 📱 Pages & Components

- **Homepage**: Hero section, featured products, categories showcase
- **Product Pages**: Detailed product views with specifications
- **Category Pages**: Filtered product listings with sorting options
- **Shopping Cart**: Item management and checkout preparation
- **Wishlist**: Personal favorites with easy management
- **User Authentication**: Login, register, and forgot password
- **Checkout**: Secure payment and shipping information collection
- **Success Pages**: Order confirmation and next steps
- **Error Handling**: 404 and error pages with helpful navigation

## 🚀 Tech Stack

### Frontend

- **React 18.0+** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework
- **React i18next** - Internationalization framework
- **Lucide React** - Beautiful icon library

### Development Tools

- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

## 📦 Installation & Setup

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/oia-store.git
   cd oia-store
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── home/            # Homepage-specific components
│   ├── Header.jsx       # Main navigation header
│   ├── Footer.jsx       # Site footer with links
│   ├── ProductCard.jsx  # Product display card
│   └── Layout.jsx       # Main layout wrapper
├── pages/               # Route-based page components
│   ├── HomePage.jsx     # Landing page
│   ├── ProductPage.jsx  # Individual product pages
│   ├── CategoryPage.jsx # Category listing pages
│   ├── CartPage.jsx     # Shopping cart
│   ├── WishlistPage.jsx # User wishlist
│   ├── CheckoutPage.jsx # Checkout process
│   └── LoginPage.jsx    # Authentication
├── context/             # React context for state management
│   └── AppContext.jsx   # Global app state
├── i18n/               # Internationalization
│   ├── index.js        # i18n configuration
│   └── locales/        # Translation files
│       ├── en.json     # English translations
│       └── ar.json     # Arabic translations
├── data/               # Mock data and utilities
│   └── products.js     # Product data and functions
├── config/             # App configuration
│   └── siteConfig.js   # Site settings and constants
└── assets/             # Static assets
```

## 🎯 Key Components

### Product Management

- **ProductCard**: Displays product information with add to cart/wishlist
- **Categories**: Product categorization and filtering
- **Search**: Advanced product search with filters
- **Sorting**: Multiple sorting options (price, rating, name)

### Shopping Experience

- **Cart Management**: Add, remove, update quantities
- **Wishlist**: Save favorites with individual controls
- **Checkout Process**: Multi-step checkout with validation
- **Order Success**: Confirmation and next steps

### User Interface

- **Responsive Design**: Mobile-first approach
- **Dark/Light Themes**: Consistent color schemes
- **Animations**: Smooth transitions and micro-interactions
- **Loading States**: Skeleton screens and spinners

## 🌍 Internationalization

The app supports complete bilingual functionality:

### Supported Languages

- **English (en)**: Default language with LTR layout
- **Arabic (ar)**: Full RTL support with Arabic translations

### Translation Files

- `src/i18n/locales/en.json` - English translations
- `src/i18n/locales/ar.json` - Arabic translations

### Adding New Languages

1. Create new locale file in `src/i18n/locales/`
2. Add language option to the language switcher
3. Update i18n configuration if needed

## 🎨 Customization

### Theme Colors

The app uses Tailwind CSS with custom gradients:

- Primary: Blue to Cyan gradients
- Secondary: Purple to Pink gradients
- Accent: Orange to Red gradients

### Modifying Styles

1. Update `tailwind.config.js` for global changes
2. Modify component classes for specific styling
3. Add custom CSS in `src/index.css` if needed

### Adding Products

Update `src/data/products.js` with new product data:

```javascript
{
  id: "unique-id",
  name: "Product Name",
  nameAr: "اسم المنتج",
  price: 299,
  category: "category-name",
  image: "image-url",
  // ... other properties
}
```

## 🔧 Configuration

### Site Configuration

Edit `src/config/siteConfig.js` to update:

- Company information
- Contact details
- Social media links
- Payment methods
- Legal information

### Environment Variables

Create `.env` file for environment-specific settings:

```
VITE_APP_NAME=Oia Store
VITE_API_URL=your-api-endpoint
VITE_PAYMENT_KEY=your-payment-key
```

## 📱 Mobile Optimization

- **Touch-Friendly**: Large tap targets and gesture support
- **Fast Loading**: Optimized images and code splitting
- **Offline Support**: Service worker for basic offline functionality
- **PWA Ready**: Can be installed as a Progressive Web App

## 🔐 Security Features

- **Input Validation**: Client-side form validation
- **XSS Protection**: Safe rendering of user content
- **HTTPS Ready**: Secure connections in production
- **Data Sanitization**: Clean user inputs

## 🚀 Performance

- **Lazy Loading**: Components and images load on demand
- **Code Splitting**: Reduced initial bundle size
- **Optimized Images**: WebP format with fallbacks
- **Caching**: Browser caching for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices
- Use Tailwind CSS for styling
- Maintain RTL support for Arabic
- Add translations for new text
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- 📧 Email: support@oiastore.com
- 🌐 Website: [www.oiastore.com](https://www.oiastore.com)
- 📱 Phone: +966 XX XXX XXXX

## 🏆 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind Labs** for the utility-first CSS framework
- **Lucide** for the beautiful icon library
- **i18next** for internationalization support

---

Made with ❤️ by the Oia Store Team
