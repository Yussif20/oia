import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Shield,
  Heart,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const categories = siteConfig.categories.map((cat) => ({
    id: cat.id,
    name: t(`categories.${cat.id}`),
    path: `/category/${cat.id}`,
  }));

  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
    youtube: Youtube,
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <img
                  src={siteConfig.company.logo}
                  alt={siteConfig.company.name}
                  className="h-6 w-6 filter brightness-0 invert"
                />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {siteConfig.company.name}
                </span>
                <p className="text-gray-400 text-sm">
                  {t("footer.company_info")}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3 rtl:space-x-reverse group">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  {siteConfig.company.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse group">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  {siteConfig.company.email}
                </span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse group">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300 mt-1">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {siteConfig.company.address}
                </span>
              </div>
            </div>

            {/* Enhanced Legal Info */}
            <div className="space-y-2 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <p className="text-sm text-gray-400">
                <span className="text-blue-400 font-medium">
                  {t("footer.commercial_reg")}:
                </span>{" "}
                {siteConfig.company.commercialReg}
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-indigo-400 font-medium">
                  {t("footer.tax_number")}:
                </span>{" "}
                {siteConfig.company.taxNumber}
              </p>
            </div>
          </div>

          {/* Enhanced Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {t("footer.categories")}
            </h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={category.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                  >
                    <ArrowIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Quick Links (without Verified Store) */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t("footer.quick_links")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                >
                  <ArrowIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                    {t("contact.title")}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/terms"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                >
                  <ArrowIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                    {t("footer.terms")}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/privacy"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                >
                  <ArrowIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                    {t("footer.privacy")}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/return-policy"
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse group"
                >
                  <ArrowIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                    {t("legal.return_policy")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Enhanced Social Links & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("footer.social_links")}
            </h3>

            {/* Social Icons */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                if (!Icon) return null;

                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-blue-500/50"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Enhanced Newsletter Signup */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-6 rounded-2xl border border-gray-700/50">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                <Heart className="w-5 h-5 text-pink-400" />
                <h4 className="text-lg font-semibold text-white">
                  {t("footer.newsletter_title")}
                </h4>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                {t("footer.newsletter_subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={t("footer.email_placeholder")}
                  className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 min-w-0"
                />
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 rtl:space-x-reverse text-white font-medium whitespace-nowrap">
                  <span>{t("footer.subscribe")}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Bar with Only Verified Store Link */}
      <div className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center space-x-2 rtl:space-x-reverse">
              <span>© 2025 {siteConfig.company.name}.</span>
              <span>{t("footer.all_rights")}</span>
            </p>

            {/* Only Verified Store Link in Bottom Footer */}
            <Link
              to="/legal/verified"
              className="flex items-center space-x-3 rtl:space-x-reverse bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 px-6 py-3 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                <Shield className="w-4 h-4 text-green-400" />
              </div>
              <div className="text-left rtl:text-right">
                <span className="text-green-400 font-semibold text-sm block">
                  {t("footer.verified")}
                </span>
                <span className="text-gray-400 text-xs">Trusted & Secure</span>
              </div>
              <ArrowIcon className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
