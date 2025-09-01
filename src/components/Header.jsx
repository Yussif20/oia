import { useState, useEffect } from "react";
import { fetchOiaLogo } from "../utils/oiaApi";
import { useTranslation } from "react-i18next";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  Star,
  Sparkles,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { siteConfig } from "../config/siteConfig";
import LanguageSwitch from "./LanguageSwitch";
import SearchDropdown from "./SearchDropdown";

const Header = () => {
  const { t } = useTranslation();
  const { cart, wishlist } = useApp();
  const [logoUrl, setLogoUrl] = useState(siteConfig.company.logo);
  // Fetch logo from API
  useEffect(() => {
    fetchOiaLogo()
      .then((blob) => setLogoUrl(URL.createObjectURL(blob)))
      .catch(() => setLogoUrl(siteConfig.company.logo));
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const categories = siteConfig.categories.map((cat) => ({
    id: cat.id,
    name: t(`categories.${cat.id}`),
    path: `/category/${cat.id}`,
  }));

  const navigation = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.categories"), path: "/categories" },
  ];

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 shadow-2xl sticky top-0 z-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-20 w-16 h-16 bg-blue-300/20 rounded-full animate-bounce-subtle"></div>
        <div className="absolute bottom-2 left-1/3 w-8 h-8 bg-indigo-300/30 rounded-full animate-pulse"></div>
        <div className="absolute top-4 left-1/2 w-12 h-12 bg-cyan-300/20 rounded-full animate-float"></div>
      </div>
      {/* Main Header */}
      <div className="relative container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse group hover-scale"
          >
            <div className="relative">
              <img
                src={logoUrl}
                alt={siteConfig.company.name}
                className="h-8 w-8 md:h-12 md:w-12 drop-shadow-lg group-hover:rotate-12 transition-transform duration-300"
              />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 md:w-6 md:h-6 text-blue-300 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-bold text-white text-shadow-lg tracking-tight">
                {siteConfig.company.name}
              </span>
              <span className="hidden sm:block text-xs text-white/80 font-medium tracking-wider uppercase">
                Premium Store
              </span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <SearchDropdown
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearch={handleSearch}
            />
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse">
            <div className="hidden sm:block">
              <LanguageSwitch />
            </div>

            {/* Login */}
            <Link
              to="/login"
              className="hidden lg:flex items-center space-x-2 rtl:space-x-reverse px-3 md:px-4 py-2 text-white/90 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 backdrop-blur-sm hover-scale"
            >
              <User className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium text-sm">{t("nav.login")}</span>
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 md:p-3 text-white/90 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 backdrop-blur-sm hover-scale"
            >
              <Heart className="w-5 h-5 md:w-6 md:h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center animate-bounce font-bold shadow-lg">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 md:p-3 text-white/90 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 backdrop-blur-sm hover-scale"
            >
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center animate-bounce font-bold shadow-lg">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white/90 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden pb-3">
          <SearchDropdown
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearch}
            isMobile={true}
          />
        </div>
      </div>
      {/* Enhanced Categories Bar */}
      <div className="bg-white/10 backdrop-blur-lg border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-center space-x-8 rtl:space-x-reverse py-4 overflow-x-auto">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={category.path}
                className={`group relative whitespace-nowrap px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg hover-scale ${
                  location.pathname === category.path
                    ? "text-white bg-white/20 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{category.name}</span>
                {location.pathname === category.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg animate-pulse"></div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>{" "}
      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-2xl animate-slideInDown">
          <div className="px-4 py-6 space-y-4">
            {/* Language Switch - Mobile */}
            <div className="flex justify-center border-b border-gray-200 pb-4">
              <LanguageSwitch isMobile={true} />
            </div>

            {/* Navigation Links */}
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-3 px-4 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Categories - Compact Grid */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <p className="text-sm font-bold text-gray-900 mb-3 px-4 flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                {t("nav.categories")}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {categories.slice(0, 6).map((category) => (
                  <Link
                    key={category.id}
                    to={category.path}
                    className="block py-2 px-3 text-xs text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all text-center font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* User Actions */}
            <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
              <Link
                to="/login"
                className="flex items-center space-x-3 rtl:space-x-reverse py-3 px-4 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                <span>{t("nav.login")}</span>
              </Link>

              <div className="flex justify-center space-x-4 pt-2">
                <Link
                  to="/wishlist"
                  className="relative p-3 text-gray-600 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="w-5 h-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                <Link
                  to="/cart"
                  className="relative p-3 text-gray-600 hover:text-emerald-500 transition-colors rounded-lg hover:bg-emerald-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
