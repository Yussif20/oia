# GitHub Copilot README

This README is generated for GitHub Copilot to help understand and update the app efficiently.

## Project Overview

This is a Vite-based React application for product management, featuring multi-language support, cart, wishlist, and checkout functionalities. The codebase is organized for scalability and maintainability.

## Key Directories & Files

- `src/` - Main source code
  - `components/` - Reusable UI components (Header, Footer, ProductCard, etc.)
  - `pages/` - Route-based pages (HomePage, CartPage, ProductPage, etc.)
  - `context/` - React context for global state management
  - `config/` - Site configuration
  - `data/` - Static product data
  - `i18n/` - Internationalization setup and locale files
  - `utils/` - Utility functions (e.g., currency formatting)
  - `assets/` - Images and icons
- `public/` - Static assets
- `index.html` - Main HTML file
- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint configuration
- `package.json` - Project dependencies and scripts

## How to Update

- **Add features:** Create new components in `src/components/` and new pages in `src/pages/`.
- **Change global state:** Update `src/context/AppContext.jsx`.
- **Modify product data:** Edit `src/data/products.js`.
- **Update translations:** Edit locale files in `src/i18n/locales/`.
- **Change configuration:** Update `src/config/siteConfig.js`.
- **Styling:** Use `src/index.css` for global styles.

## How to Understand

- Start with `src/App.jsx` and `src/main.jsx` to see app entry and routing.
- Review context usage in `src/context/AppContext.jsx`.
- Explore page components in `src/pages/` for main features.
- Check `src/components/` for reusable UI logic.
- Look at `src/i18n/` for language support.

## How to Run

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`

## How to Test

- Manual testing via browser (no automated tests detected).

## Notes for Copilot

- Follow the existing folder structure for new features.
- Use context for global state.
- Keep translations updated for new UI elements.
- Maintain code style and linting rules.

---

This README is tailored for GitHub Copilot to streamline future updates and maintenance.
