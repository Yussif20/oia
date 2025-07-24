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

        {/* Ultra-Enhanced Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteConfig.categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative bg-white rounded-3xl shadow-soft overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 animate-fadeInUp category-card-glow hover-lift"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* Magic Border Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-sm"></div>
              </div>

              {/* Image Container with Enhanced Effects */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={category.image}
                  alt={t(`categories.${category.id}`)}
                  className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-700"
                />

                {/* Multi-layered Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Enhanced Featured Badge */}
                {category.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-bounce-subtle flex items-center">
                    <Crown className="w-3 h-3 mr-1" />
                    <span>{t("home.featured")}</span>
                    <Star className="w-3 h-3 ml-1 animate-pulse" />
                  </div>
                )}

                {/* Premium Badge for Special Categories */}
                {index === 0 && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center">
                    <Zap className="w-3 h-3 mr-1" />
                    {t("home.premium")}
                  </div>
                )}

                {/* Enhanced Hover Arrow */}
                <div className="absolute top-1/2 right-6 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 animate-shimmer">
                    <ArrowIcon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Enhanced Category Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg md:text-xl mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-lg">
                    {t(`categories.${category.id}`)}
                  </h3>
                  <div className="w-12 h-1 bg-white/60 group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-500 rounded-full"></div>
                  <p className="text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {t("home.explore_collection")} →
                  </p>
                </div>
              </div>

              {/* Enhanced Bottom Content */}
              <div className="p-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 relative">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {t("home.discover_more")}
                  </span>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300 shadow-md">
                    <ArrowIcon className="w-4 h-4 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" />
                  </div>
                </div>

                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full"></div>
              </div>

              {/* Enhanced Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-blue-500/25"></div>
              </div>
            </Link>
          ))}
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
