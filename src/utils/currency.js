/**
 * Format price with SAR currency
 * @param {number} price - The price to format
 * @param {string} locale - The locale for formatting (default: 'ar-SA')
 * @returns {string} Formatted price string
 */
export const formatPrice = (price, locale = "ar-SA") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "SAR",
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
