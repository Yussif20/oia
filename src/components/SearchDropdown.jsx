import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Search, Package, Star, ArrowRight, ArrowLeft } from "lucide-react";
import { searchProducts } from "../data/products";

const SearchDropdown = ({
  searchQuery,
  setSearchQuery,
  onSearch,
  className = "",
  isMobile = false,
}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);
  const isRTL = i18n.language === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  // Search products in real-time as user types
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = searchProducts(searchQuery.trim()).slice(0, 8); // Limit to 8 results
      setSearchResults(results);
      setShowResults(true);
      setSelectedIndex(-1);
    } else {
      setSearchResults([]);
      setShowResults(false);
      setSelectedIndex(-1);
    }
  }, [searchQuery]);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showResults || searchResults.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : searchResults.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
          handleProductSelect(searchResults[selectedIndex]);
        } else if (searchQuery.trim()) {
          handleSearchSubmit(e);
        }
        break;
      case "Escape":
        setShowResults(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(false);
      onSearch(e);
    }
  };

  const handleProductSelect = (product) => {
    setShowResults(false);
    setSearchQuery("");
    setSelectedIndex(-1);
    navigate(`/product/${product.id}`);
  };

  const handleInputFocus = () => {
    if (searchResults.length > 0) {
      setShowResults(true);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat(isRTL ? "ar-SA" : "en-US", {
      style: "currency",
      currency: "SAR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getProductName = (product) => {
    return isRTL ? product.nameAr : product.name;
  };

  return (
    <div ref={searchRef} className={`relative w-full ${className}`}>
      <form onSubmit={handleSearchSubmit} className="relative group">
        <div className="relative">
          <input
            type="text"
            placeholder={t("nav.search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            className={`w-full search-input ${
              isMobile
                ? "px-4 py-2.5 pr-12 rtl:pr-4 rtl:pl-12 rounded-xl text-sm"
                : "px-6 py-4 pr-16 rtl:pr-6 rtl:pl-16 rounded-2xl"
            } border-0 focus:outline-none focus:ring-4 focus:ring-white/30 bg-white/95 backdrop-blur-lg placeholder-gray-500 shadow-xl text-gray-800 font-medium group-hover:bg-white transition-all duration-300`}
          />
          <div
            className={`absolute inset-y-0 ${
              isMobile
                ? "w-9 h-9 top-1/2 transform -translate-y-1/2 right-1 rtl:right-auto rtl:left-1 rounded-lg"
                : "right-2 rtl:right-auto rtl:left-2 flex items-center"
            }`}
          >
            <button
              type="submit"
              className={`${
                isMobile ? "w-9 h-9" : "w-12 h-12"
              } bg-gradient-to-r from-blue-500 to-indigo-600 text-white ${
                isMobile ? "rounded-lg" : "rounded-xl"
              } hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center`}
            >
              <Search className={`${isMobile ? "w-4 h-4" : "w-5 h-5"}`} />
            </button>
          </div>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {showResults && searchResults.length > 0 && (
        <div
          ref={resultsRef}
          className={`absolute top-full left-0 right-0 ${
            isMobile ? "mt-2" : "mt-3"
          } bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 max-h-96 overflow-y-auto animate-fadeInUp search-dropdown`}
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-700 flex items-center">
                <Package className="w-4 h-4 mr-2 text-blue-500" />
                {t("search.found_results", { count: searchResults.length })}
              </p>
              {searchQuery && (
                <button
                  onClick={() =>
                    handleSearchSubmit({ preventDefault: () => {} })
                  }
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <span>{t("search.view_all")}</span>
                  <ArrowIcon className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="py-2">
            {searchResults.map((product, index) => (
              <button
                key={product.id}
                onClick={() => handleProductSelect(product)}
                className={`w-full px-4 py-3 search-result-item hover:bg-blue-50 transition-all duration-200 flex items-center space-x-3 rtl:space-x-reverse text-left rtl:text-right group ${
                  selectedIndex === index
                    ? "bg-blue-50 border-l-2 border-blue-500 rtl:border-l-0 rtl:border-r-2"
                    : ""
                }`}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                {/* Product Image */}
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={getProductName(product)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">
                    {getProductName(product)}
                  </h4>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mt-1">
                    <span className="text-lg font-bold text-blue-600">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice &&
                      product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Arrow Icon */}
                <ArrowIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
              </button>
            ))}
          </div>

          {/* Footer - View All */}
          {searchQuery && (
            <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
              <button
                onClick={() => handleSearchSubmit({ preventDefault: () => {} })}
                className="w-full py-2 text-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Search className="w-4 h-4" />
                <span>
                  {t("search.search_all_for", { query: searchQuery })}
                </span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* No Results */}
      {showResults && searchQuery.trim() && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 animate-fadeInUp">
          <div className="px-4 py-8 text-center">
            <Package className="w-8 h-8 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm font-medium">
              {t("search.no_results")}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              {t("search.try_different_keywords")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
