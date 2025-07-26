import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageSwitch = ({ isMobile = false }) => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);

    // Update document direction and font
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  // Different styles for mobile and desktop
  const baseClasses =
    "flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover-scale shadow-lg";

  const desktopClasses =
    "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/20";

  const mobileClasses =
    "text-gray-700 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 shadow-sm";

  return (
    <button
      onClick={toggleLanguage}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
      title={t("nav.language")}
      aria-label={t("nav.language")}
    >
      <Globe className="w-4 h-4" />
      <span className="font-semibold">
        {i18n.language === "en" ? "العربية" : "English"}
      </span>
    </button>
  );
};

export default LanguageSwitch;
