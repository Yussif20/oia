import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageSwitch = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);

    // Update document direction and font
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 backdrop-blur-sm border border-white/20 hover-scale shadow-lg"
      title={t("nav.language")}
    >
      <Globe className="w-4 h-4" />
      <span className="font-semibold">{t("nav.language")}</span>
    </button>
  );
};

export default LanguageSwitch;
