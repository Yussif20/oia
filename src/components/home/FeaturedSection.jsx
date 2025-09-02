import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Star, Crown, Sparkles } from "lucide-react";
import ProductCard from "../ProductCard";

const FeaturedSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const [featuredCategories, setFeaturedCategories] = useState([]);
  useEffect(() => {
    // Import products data directly from local file
    import("../../data/products.js").then(({ sampleProducts }) => {
      // Only use actual products from categories, no fallback
      const featuredCats = ["sunglasses", "fragrance", "gift_cards"];
      setFeaturedCategories(
        featuredCats.map((catId) => ({
          category: catId,
          title: t(`categories.${catId}`),
          gradient:
            catId === "sunglasses"
              ? "from-blue-500 to-cyan-500"
              : catId === "fragrance"
              ? "from-purple-500 to-pink-500"
              : "from-orange-500 to-red-500",
          bgGradient:
            catId === "sunglasses"
              ? "from-blue-50 to-cyan-50"
              : catId === "fragrance"
              ? "from-purple-50 to-pink-50"
              : "from-orange-50 to-red-50",
          products: sampleProducts
            .filter((p) => p.category === catId)
            .slice(0, 4),
        }))
      );
    });
  }, [t]);

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
            {t("home.handpicked_description")}
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
            {/* Clean Professional Section Header */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${section.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {t("home.best_of")}{" "}
                      <span
                        className={`bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                      >
                        {section.title}
                      </span>
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("home.discover_top_rated", {
                        category: section.title.toLowerCase(),
                      })}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/category/${section.category}`}
                  className={`bg-gradient-to-r ${section.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse group self-start sm:self-center`}
                >
                  <span>{t("components.view_all")}</span>
                  <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Enhanced Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {section.products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fadeInUp group"
                  style={{
                    animationDelay: `${sectionIndex * 0.4 + index * 0.1}s`,
                  }}
                >
                  <div className="relative">
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
