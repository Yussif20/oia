import { useTranslation } from "react-i18next";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const WishlistPage = () => {
  const { t } = useTranslation();
  const { wishlist } = useApp();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {t("wishlist.title")}
            </h1>
            <p className="text-gray-600 mb-8">{t("wishlist.empty")}</p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{t("wishlist.browse_products")}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t("wishlist.title")}
          </h1>
          <p className="text-gray-600">
            {wishlist.length === 1
              ? t("wishlist.item_count", { count: wishlist.length })
              : t("wishlist.item_count_plural", { count: wishlist.length })}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
