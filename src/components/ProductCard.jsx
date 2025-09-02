import { useTranslation } from "react-i18next";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { formatPriceWithDirection } from "../utils/currency";
import RiyalIcon from "./RiyalIcon";
import { useState } from "react";

const ProductCard = ({ product, showQuickView = false, viewMode = "grid" }) => {
  const { t, i18n } = useTranslation();
  const {
    cart,
    addToCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    updateCartQuantity,
  } = useApp();
  const cartItem = cart.find((item) => item.id === product.id);
  const [showQtyControls, setShowQtyControls] = useState(!!cartItem);
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);
  const isRTL = i18n.language === "ar";
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowQtyControls(true);
    if (!cartItem) {
      addToCart(product, quantity);
    }
  };

  const productName = isRTL ? product.nameAr : product.name;
  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  if (viewMode === "list") {
    return (
      <div className="group bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-glow transition-all duration-300 animate-fadeInUp max-w-lg">
        <Link to={`/product/${product.id}`} className="flex">
          {/* Product Image */}
          <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
            <img
              src={product.image}
              alt={productName}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {hasDiscount && (
              <div className="absolute top-1 left-1 bg-danger text-white text-xs font-bold px-1.5 py-0.5 rounded text-[10px]">
                -{discountPercentage}%
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-1 p-3 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors line-clamp-1">
                {productName}
              </h3>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center space-x-1 rtl:space-x-reverse mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2.5 h-2.5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-600">
                    ({product.reviews})
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              {/* Price */}
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <span className="text-sm font-bold text-primary flex items-center">
                  {formatPriceWithDirection(product.price, isRTL)}
                  <RiyalIcon />
                </span>
                {hasDiscount && (
                  <span className="text-[10px] text-gray-500 line-through flex items-center">
                    {formatPriceWithDirection(product.originalPrice, isRTL)}
                    <RiyalIcon className="w-3 h-3 ml-1" />
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <button
                  onClick={handleWishlistClick}
                  className={`p-1 rounded-full transition-colors ${
                    isWishlisted
                      ? "bg-danger text-white"
                      : "bg-gray-100 text-gray-600 hover:text-danger"
                  }`}
                >
                  <Heart
                    className={`w-2.5 h-2.5 ${
                      isWishlisted ? "fill-current" : ""
                    }`}
                  />
                </button>

                {!showQtyControls ? (
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="btn-modern btn-primary px-2 py-1 text-[10px]"
                  >
                    <ShoppingCart className="w-2.5 h-2.5 mr-1" />
                    {t("product.add_to_cart")}
                  </button>
                ) : (
                  <div className="flex items-center bg-gray-50 rounded-full shadow-sm px-2 py-1 space-x-2 rtl:space-x-reverse border border-gray-200">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                          updateCartQuantity(product.id, quantity - 1);
                        }
                      }}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-300 text-primary font-bold text-lg shadow hover:bg-primary hover:text-white transition-colors duration-150 disabled:bg-gray-200 disabled:text-gray-400"
                      disabled={quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-base font-bold text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm min-w-[2.5rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setQuantity(quantity + 1);
                        updateCartQuantity(product.id, quantity + 1);
                      }}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-300 text-primary font-bold text-lg shadow hover:bg-primary hover:text-white transition-colors duration-150"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-glow transition-all duration-500 transform hover:scale-105 card-hover animate-scale-in max-w-[240px] mx-auto">
      <Link to={`/product/${product.id}`} className="block">
        {/* Product Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={product.image}
            alt={productName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Discount Badge */}
          {hasDiscount && (
            <div className="absolute top-1 left-1 bg-danger text-white text-xs font-bold px-1.5 py-0.5 rounded">
              -{discountPercentage}%
            </div>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold bg-gray-800 px-3 py-1 rounded">
                {t("product.out_of_stock")}
              </span>
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute top-1 right-1 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleWishlistClick}
              className={`p-1.5 rounded-full shadow-md transition-colors ${
                isWishlisted
                  ? "bg-danger text-white"
                  : "bg-white text-gray-600 hover:text-danger"
              }`}
            >
              <Heart
                className={`w-3 h-3 ${isWishlisted ? "fill-current" : ""}`}
              />
            </button>

            {showQuickView && (
              <button className="p-1.5 bg-white text-gray-600 hover:text-primary rounded-full shadow-md transition-colors">
                <Eye className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Add to Cart Button - Overlay */}
          <div className="absolute bottom-1 left-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {!showQtyControls ? (
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-primary text-white py-1.5 px-2 rounded-md hover:bg-primary-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-1 rtl:space-x-reverse"
              >
                <ShoppingCart className="w-3 h-3" />
                <span className="text-xs font-medium">
                  {t("product.add_to_cart")}
                </span>
              </button>
            ) : (
              <div className="flex items-center justify-center bg-gray-50 rounded-full shadow-sm px-2 py-1 space-x-2 rtl:space-x-reverse border border-gray-200">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                      updateCartQuantity(product.id, quantity - 1);
                    }
                  }}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-300 text-primary font-bold text-lg shadow hover:bg-primary hover:text-white transition-colors duration-150 disabled:bg-gray-200 disabled:text-gray-400"
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-3 py-1 text-base font-bold text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm min-w-[2.5rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setQuantity(quantity + 1);
                    updateCartQuantity(product.id, quantity + 1);
                  }}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-300 text-primary font-bold text-lg shadow hover:bg-primary hover:text-white transition-colors duration-150"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {productName}
          </h3>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center space-x-1 rtl:space-x-reverse mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-600">({product.reviews})</span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-lg font-bold text-primary flex items-center">
              {formatPriceWithDirection(product.price, isRTL)}
              <RiyalIcon />
            </span>
            {hasDiscount && (
              <span className="text-xs text-gray-500 line-through flex items-center">
                {formatPriceWithDirection(product.originalPrice, isRTL)}
                <RiyalIcon className="w-3 h-3 ml-1" />
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
