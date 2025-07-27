import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search, Package, Sparkles, Star } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { searchProducts } from "../data/products";

const SearchPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Get search query from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q") || "";
    setSearchQuery(query);

    if (query.trim()) {
      setLoading(true);
      const results = searchProducts(query);
      setSearchResults(results);
      setLoading(false);
    } else {
      setSearchResults([]);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Classy Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            {/* Icon and Badge */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Search className="w-12 h-12 text-white/90 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
              {searchQuery ? (
                <>
                  <span className="block text-2xl md:text-3xl font-semibold text-white/80 mb-2">
                    {t("search.search_results")}
                  </span>
                  <span className="text-gradient-white inline-block transform hover:scale-105 transition-transform duration-300">
                    "{searchQuery}"
                  </span>
                </>
              ) : (
                <span className="text-gradient-white inline-block transform hover:scale-105 transition-transform duration-300">
                  {t("search.discover_products")}
                </span>
              )}
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              {searchQuery
                ? t("search.showing_results", {
                    query: searchQuery,
                    count: searchResults.length,
                  })
                : t("search.search_description")}
            </p>

            {/* Results Count Badge */}
            {searchQuery && (
              <div className="inline-flex items-center space-x-3 rtl:space-x-reverse bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Package className="w-5 h-5 text-white/90" />
                <span className="text-white font-semibold">
                  {t("search.found_results", { count: searchResults.length })}
                </span>
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              </div>
            )}

            {/* Decorative Line */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-white/50 to-white/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 text-gray-50"
            fill="currentColor"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">{t("search.searching")}</p>
            </div>
          </div>
        ) : searchResults.length > 0 ? (
          <>
            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {searchResults.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} showQuickView />
                </div>
              ))}
            </div>
          </>
        ) : searchQuery ? (
          /* No Results */
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("search.no_results")}
              </h3>
              <p className="text-gray-600 mb-8">
                {t("search.no_results_description", { query: searchQuery })}
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-3">
                  {t("search.search_tips")}
                </h4>
                <ul className="text-sm text-blue-800 space-y-2 text-left rtl:text-right">
                  <li>• {t("search.tip_check_spelling")}</li>
                  <li>• {t("search.tip_try_different")}</li>
                  <li>• {t("search.tip_more_general")}</li>
                  <li>• {t("search.tip_browse_categories")}</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          /* Initial State - No Search Query */
          <div className="text-center py-20">
            <div className="max-w-lg mx-auto">
              <div className="relative mb-8">
                <Search className="w-20 h-20 text-gray-300 mx-auto" />
                <div className="absolute top-0 right-1/2 transform translate-x-8 -translate-y-2">
                  <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {t("search.start_searching")}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("search.start_searching_description")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
