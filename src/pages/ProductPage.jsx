import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Heart,
  ShoppingCart,
  Star,
  Minus,
  Plus,
  Check,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { getProductById, getSimilarProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } =
    useApp();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const product = getProductById(id);
  const similarProducts = getSimilarProducts(id);
  const isRTL = i18n.language === "ar";
  const isWishlisted = isInWishlist(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {t("product.not_found_title")}
          </h1>
          <p className="text-gray-600">
            {t("product.not_found_description")}
          </p>
        </div>
      </div>
    );
  }

  const productName = isRTL ? product.nameAr : product.name;
  const productDescription = isRTL
    ? product.descriptionAr
    : product.description;
  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const tabs = [
    { id: "description", label: t("product.description") },
    { id: "specifications", label: t("product.specifications") },
    { id: "reviews", label: t("product.reviews") },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={productName}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex space-x-4 rtl:space-x-reverse overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${productName} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {productName}
                </h1>

                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">
                      {product.rating} ({product.reviews} {t("product.reviews")}
                      )
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                  <span className="text-4xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {hasDiscount && (
                    <>
                      <span className="text-2xl text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="bg-danger text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{discountPercentage}% OFF
                      </span>
                    </>
                  )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
                  <Check className="w-5 h-5 text-green-500" />
                  <span
                    className={`font-medium ${
                      product.inStock ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.inStock
                      ? t("product.in_stock")
                      : t("product.out_of_stock")}
                  </span>
                </div>
              </div>

              {/* Features */}
              {product.features && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 rtl:space-x-reverse"
                      >
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <span className="font-medium">{t("product.quantity")}:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4 rtl:space-x-reverse">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rtl:space-x-reverse"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{t("product.add_to_cart")}</span>
                  </button>

                  <button
                    onClick={handleWishlistToggle}
                    className={`p-3 border-2 rounded-lg transition-colors ${
                      isWishlisted
                        ? "border-danger text-danger bg-danger bg-opacity-10"
                        : "border-gray-300 text-gray-600 hover:border-danger hover:text-danger"
                    }`}
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        isWishlisted ? "fill-current" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span className="text-sm">
                    Free shipping on orders over $50
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">1 year warranty included</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <RotateCcw className="w-5 h-5 text-orange-600" />
                  <span className="text-sm">30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="border-b">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {t("product.description")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {productDescription}
                </p>
              </div>
            )}

            {activeTab === "specifications" && product.specifications && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {t("product.specifications")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between border-b pb-2"
                      >
                        <span className="font-medium text-gray-900">
                          {key}:
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {t("product.reviews")}
                </h3>
                <div className="text-center py-8 text-gray-500">
                  <p>Reviews feature coming soon...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">
                {t("product.similar_products")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
