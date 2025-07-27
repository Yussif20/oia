import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  TrendingUp,
  Star,
  Zap,
  Crown,
} from "lucide-react";
import { siteConfig } from "../../config/siteConfig";

const CategoriesSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  // Create floating particles
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 4,
    delay: Math.random() * 15,
    left: Math.random() * 100,
  }));

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-100/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-10 right-1/4 w-24 h-24 bg-yellow-200/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-10 left-1/4 w-36 h-36 bg-pink-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header with More Visual Appeal */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-10 h-10 text-blue-500 mr-4 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
              ✨ {t("home.explore_collections")} ✨
            </span>
            <div className="relative">
              <Sparkles
                className="w-10 h-10 text-blue-500 ml-4 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-gray-900">{t("home.shop_by")} </span>
            <span className="text-gradient-rainbow inline-block transform hover:scale-105 transition-transform duration-300">
              {t("nav.categories")}
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            {t("home.discover_description")}
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Categories Grid with Circular Design */}
        <div className="flex justify-center">
          <div className="categories-grid grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 max-w-6xl w-full justify-items-center">
            {siteConfig.categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="category-item group relative flex flex-col items-center transition-all duration-500 transform hover:scale-110 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Circular Image Container */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 group">
                  {/* Background gradient border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src={category.image}
                        alt={t(`categories.${category.id}`)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Circular overlay with hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Enhanced Featured Badge for circular design */}
                  {category.featured && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  )}

                  {/* Premium Badge for Special Categories */}
                  {index === 0 && (
                    <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <Crown className="w-3 h-3 text-white" />
                    </div>
                  )}

                  {/* Floating particles effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                    <div
                      className="absolute top-4 right-3 w-1 h-1 bg-purple-400 rounded-full animate-ping"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute bottom-3 left-4 w-1 h-1 bg-indigo-400 rounded-full animate-ping"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>

                {/* Category Title */}
                <div className="mt-3 text-center">
                  <h3 className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                    {t(`categories.${category.id}`)}
                  </h3>

                  {/* Subtle underline effect */}
                  <div className="w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-1 transition-all duration-300 rounded-full"></div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-blue-400 to-purple-600 blur-xl -z-10"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Enhanced View All Categories Button */}
        <div
          className="text-center mt-16 animate-fadeInUp"
          style={{ animationDelay: "0.8s" }}
        >
          <Link
            to="/categories"
            className="inline-flex items-center space-x-4 rtl:space-x-reverse bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
          >
            {/* Button shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full"></div>

            <Sparkles className="w-6 h-6 animate-pulse relative z-10" />
            <span className="text-lg relative z-10">
              {t("home.view_all_categories")}
            </span>
            <div className="relative z-10">
              <ArrowIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>

          {/* Small decorative elements */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
