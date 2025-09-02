# Functional Requirements Document (FRD)

## Project: OIA E-Commerce Website

### Summary

This FRD outlines the current state of the OIA e-commerce website, features implemented, and the next steps for integration and enhancement.

---

## 1. Features Implemented

### 1.1 Product Catalog & Categories

- Products are displayed by category (Sunglasses, Fragrance, Gift Cards, etc.)
- Featured products section on the main page, showing top items from each category
- Product data is currently loaded from local files

### 1.2 Cart & Wishlist

- Users can add products to the cart and wishlist
- Quantity controls for cart items are available directly on the main page and cart page
- Cart state persists across page refreshes
- Users can increase/decrease product quantity and remove items from the cart

### 1.3 Currency & UI

- All prices are displayed with a Saudi Riyal icon (Lucide)
- SAR text is removed from all UI and config
- Quantity controls are styled for a modern, professional look

### 1.4 Internationalization

- Arabic and English language support
- RTL layout for Arabic

### 1.5 Fallback Logic

- Fallback product logic removed; only actual products from categories are shown

---

## 2. Next Steps

### 2.1 API Integration

- Integrate with backend API endpoints for:
  - Products
  - Logo
  - Banner
  - Cart operations
- Replace local product data with live API data
- Handle API errors and loading states

### 2.2 Payment Gateway Integration

- Integrate Ottu payment gateway for checkout
- Implement secure payment flow and order confirmation

### 2.3 Additional Enhancements

- Add user authentication (login, register, profile)
- Implement order history and tracking
- Add admin panel for product management (optional)
- Optimize for mobile and performance

---

## 3. Pending Tasks

- Await API access from backend developer
- Await Ottu payment gateway credentials and documentation
- Begin API and payment integration once access is provided

---

## 4. Notes

- All UI/UX changes are ready for API and payment integration
- Codebase is modular and ready for backend connectivity
- Further requirements may be added based on client feedback

---

**Prepared by:** GitHub Copilot
**Date:** September 2, 2025
