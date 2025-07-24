import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
