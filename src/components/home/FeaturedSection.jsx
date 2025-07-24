import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Star, Crown, Sparkles } from "lucide-react";
import ProductCard from "../ProductCard";
import { getBestOfCategory } from "../../data/products";

const FeaturedSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const bestSunglasses = getBestOfCategory("sunglasses", 4);
  const bestFragrances = getBestOfCategory("fragrance", 4);
  const bestGiftCards = getBestOfCategory("gift_cards", 4);

  const featuredCategories = [
    {
      category: "sunglasses",
      products: bestSunglasses,
      title: t("categories.sunglasses"),
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      category: "fragrance",
      products: bestFragrances,
      title: t("categories.fragrance"),
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      category: "gift_cards",
      products: bestGiftCards,
      title: t("categories.gift_cards"),
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-200/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Main Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-yellow-500 mr-3 animate-pulse" />
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
              ⭐ {t("home.featured_products")} ⭐
            </span>
            <Star
              className="w-8 h-8 text-yellow-500 ml-3 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-gray-900">{t("home.best_of")} </span>
            <span className="text-gradient-rainbow inline-block transform hover:scale-105 transition-transform duration-300">
              Collections
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Handpicked premium products that our customers love the most
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {featuredCategories.map((section, sectionIndex) => (
          <div
            key={section.category}
            className={`mb-24 animate-fadeInUp`}
            style={{ animationDelay: `${sectionIndex * 0.2}s` }}
          >
            {/* Enhanced Section Header */}
            <div
              className={`bg-gradient-to-br ${section.bgGradient} rounded-3xl p-8 mb-12 relative overflow-hidden`}
            >
              {/* Background decorations for each section */}
              <div className="absolute inset-0">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              </div>

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}
                  >
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                      <Sparkles className="w-5 h-5 text-yellow-600" />
                      <span className="text-gray-700 font-semibold text-sm uppercase tracking-wider">
                        {t("home.premium_collection")}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-1">
                      {t("home.best_of")}{" "}
                      <span
                        className={`bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                      >
                        {section.title}
                      </span>
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Discover our top-rated {section.title.toLowerCase()}{" "}
                      collection
                    </p>
                  </div>
                </div>

                <Link
                  to={`/category/${section.category}`}
                  className={`bg-gradient-to-r ${section.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse group`}
                >
                  <span>View All</span>
                  <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Enhanced Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fadeInUp group"
                  style={{
                    animationDelay: `${sectionIndex * 0.4 + index * 0.1}s`,
                  }}
                >
                  <div className="relative">
                    {/* Product ranking badge */}
                    <div
                      className={`absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r ${section.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm z-20 shadow-lg`}
                    >
                      {index + 1}
                    </div>

                    <ProductCard product={product} showQuickView />
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative separator (except for last section) */}
            {sectionIndex < featuredCategories.length - 1 && (
              <div className="flex items-center justify-center mt-16">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
                  <Sparkles className="w-6 h-6 text-gray-400" />
                  <div className="w-16 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
