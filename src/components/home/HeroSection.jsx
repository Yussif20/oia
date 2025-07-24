import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight, ArrowLeft } from "lucide-react";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-blue-900 text-white overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
          alt="Shopping Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            {t("home.hero_title")}
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-up max-w-3xl mx-auto"
            style={{ animationDelay: "0.2s" }}
          >
            {t("home.hero_subtitle")}
          </p>

          {/* Stats */}
          <div
            className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-blue-200 text-sm">
                {t("home.stats_products")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-blue-200 text-sm">
                {t("home.stats_customers")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-200 text-sm">
                {t("home.stats_support")}
              </div>
            </div>
          </div>

          <Link
            to="/categories"
            className="inline-flex items-center space-x-3 rtl:space-x-reverse bg-white text-primary px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-glow animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <ShoppingBag className="w-6 h-6" />
            <span>{t("home.shop_now")}</span>
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
