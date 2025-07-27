import { siteConfig } from "../config/siteConfig.js";

/**
 * Currency and Tax Utilities
 * Uses configuration from siteConfig for all calculations
 */

/**
 * Format price with currency from site config
 * @param {number} price - The price to format
 * @param {string} locale - The locale for formatting (default: 'ar-SA')
 * @returns {string} Formatted price string
 */
export const formatPrice = (price, locale = "ar-SA") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: siteConfig.shop.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

/**
 * Format price for RTL/LTR display
 * @param {number} price - The price to format
 * @param {boolean} isRTL - Whether the current language is RTL
 * @returns {string} Formatted price string
 */
export const formatPriceWithDirection = (price, isRTL = false) => {
  if (isRTL) {
    return formatPrice(price, "ar-SA");
  } else {
    return formatPrice(price, "en-SA");
  }
};

/**
 * Simple currency formatting using site config
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount) => {
  if (typeof amount !== "number") {
    amount = parseFloat(amount) || 0;
  }
  return `${amount.toFixed(2)} ${siteConfig.shop.currencySymbol}`;
};

/**
 * Calculate tax amount based on site config
 * @param {number} amount - The amount to calculate tax for
 * @returns {number} Tax amount
 */
export const calculateTax = (amount) => {
  if (!siteConfig.tax.enabled) return 0;
  return amount * siteConfig.tax.rate;
};

/**
 * Calculate total with tax
 * @param {number} subtotal - The subtotal amount
 * @returns {number} Total amount including tax
 */
export const calculateTotal = (subtotal) => {
  const tax = calculateTax(subtotal);
  return subtotal + tax;
};

/**
 * Check if free shipping applies
 * @param {number} amount - Order amount
 * @returns {boolean} Whether free shipping applies
 */
export const isFreeShipping = (amount) => {
  return amount >= siteConfig.shop.freeShippingThreshold;
};

/**
 * Get shipping cost
 * @param {number} amount - Order amount
 * @returns {number} Shipping cost
 */
export const getShippingCost = (amount) => {
  return isFreeShipping(amount) ? 0 : siteConfig.shop.defaultShipping;
};

/**
 * Calculate complete order totals
 * @param {Array} items - Array of cart items with price and quantity
 * @returns {Object} Order totals breakdown
 */
export const calculateOrderTotals = (items) => {
  const subtotal = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const tax = calculateTax(subtotal);
  const shipping = getShippingCost(subtotal);
  const total = subtotal + tax + shipping;

  return {
    subtotal,
    tax,
    shipping,
    total,
    formatted: {
      subtotal: formatCurrency(subtotal),
      tax: formatCurrency(tax),
      shipping: shipping === 0 ? "Free" : formatCurrency(shipping),
      total: formatCurrency(total),
    },
  };
};

/**
 * Apply coupon discount
 * @param {number} amount - Amount to apply discount to
 * @param {string} couponCode - Coupon code to validate
 * @returns {Object} Discount calculation result
 */
export const applyCoupon = (amount, couponCode) => {
  if (!siteConfig.coupon.enabled || couponCode !== siteConfig.coupon.code) {
    return { valid: false, discount: 0, finalAmount: amount };
  }

  if (amount < siteConfig.coupon.minAmount) {
    return {
      valid: false,
      discount: 0,
      finalAmount: amount,
      error: `Minimum order amount is ${formatCurrency(
        siteConfig.coupon.minAmount
      )}`,
    };
  }

  const discountAmount = Math.min(
    (amount * siteConfig.coupon.discount) / 100,
    siteConfig.coupon.maxDiscount
  );

  return {
    valid: true,
    discount: discountAmount,
    finalAmount: amount - discountAmount,
    formatted: {
      discount: formatCurrency(discountAmount),
      finalAmount: formatCurrency(amount - discountAmount),
    },
  };
};

/**
 * Get tax information for display
 * @returns {Object} Tax configuration info
 */
export const getTaxInfo = () => {
  return {
    enabled: siteConfig.tax.enabled,
    rate: siteConfig.tax.rate,
    percentage: `${(siteConfig.tax.rate * 100).toFixed(0)}%`,
    displayName: siteConfig.tax.displayName,
    includedInPrice: siteConfig.tax.includedInPrice,
  };
};
