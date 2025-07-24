import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="animate-fadeInUp">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative">
              <h1 className="text-[200px] md:text-[300px] font-bold text-gray-200 leading-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Page not found"
                  className="w-40 h-30 md:w-60 md:h-45 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-8 animate-fadeInUp stagger-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("404.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
              {t("404.description")}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp stagger-3">
            <Link
              to="/"
              className="btn-modern btn-primary flex items-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>{t("404.go_home")}</span>
            </Link>

            <Link
              to="/categories"
              className="btn-modern btn-ghost flex items-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>{t("404.browse_products")}</span>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 animate-fadeInUp stagger-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t("404.helpful_links")}
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/categories"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                {t("nav.categories")}
              </Link>
              <Link
                to="/contact"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                {t("contact.title")}
              </Link>
              <Link
                to="/legal/terms"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                {t("footer.terms")}
              </Link>
              <Link
                to="/legal/privacy"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                {t("footer.privacy")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
