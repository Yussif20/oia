import { useTranslation } from "react-i18next";
import { Heart, ShoppingBag, Sparkles, Star, Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const WishlistPage = () => {
  const { t } = useTranslation();
  const { wishlist, removeFromWishlist, clearWishlist } = useApp();

  const handleRemoveItem = (productId) => {
    removeFromWishlist(productId);
  };

  const handleClearAll = () => {
    if (window.confirm(t("wishlist.clear_all") + "?")) {
      clearWishlist();
    }
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-lg mx-auto text-center">
            {/* Enhanced Empty State Icon */}
            <div className="relative mb-8">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Heart className="w-16 h-16 text-pink-500" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
              </div>
            </div>

            <h1 className="text-4xl font-black text-gray-900 mb-4">
              {t("wishlist.title")}
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t("wishlist.empty")}
            </p>

            {/* Enhanced CTA Button */}
            <Link
              to="/"
              className="inline-flex items-center space-x-3 rtl:space-x-0 rtl:space-x-reverse rtl:gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ShoppingBag className="w-6 h-6" />
              <span>{t("wishlist.browse_products")}</span>
            </Link>

            {/* Decorative elements */}
            <div className="mt-12 flex justify-center space-x-4">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            <span className="text-gradient-rainbow">{t("wishlist.title")}</span>
          </h1>

          <div className="flex items-center justify-center space-x-2 rtl:space-x-0 rtl:space-x-reverse rtl:gap-2 text-gray-600 text-lg mb-6">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>
              {wishlist.length === 1
                ? t("wishlist.item_count", { count: wishlist.length })
                : t("wishlist.item_count_plural", { count: wishlist.length })}
            </span>
            <Star className="w-5 h-5 text-yellow-500" />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleClearAll}
              className="flex items-center space-x-2 rtl:space-x-0 rtl:space-x-reverse rtl:gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-100 transition-all duration-300 shadow-md hover:shadow-lg border border-red-200"
            >
              <Trash2 className="w-5 h-5" />
              <span>{t("wishlist.clear_all")}</span>
            </button>
          </div>

          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {wishlist.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="group relative">
                {/* Remove button */}
                <button
                  onClick={() => handleRemoveItem(product.id)}
                  className="absolute -top-2 -right-2 z-20 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
                  title={t("wishlist.remove_item")}
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Wishlist badge */}
                <div className="absolute -top-2 -left-2 z-10">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden border border-gray-100">
                  <ProductCard product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("wishlist.discover_more")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("wishlist.continue_exploring")}
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-3 rtl:space-x-0 rtl:space-x-reverse rtl:gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{t("wishlist.browse_products")}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
