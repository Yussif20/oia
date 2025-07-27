import { useTranslation } from "react-i18next";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import {
  formatPriceWithDirection,
  calculateTax,
  getShippingCost,
} from "../utils/currency";
import { siteConfig } from "../config/siteConfig";

const CartPage = () => {
  const { t, i18n } = useTranslation();
  const { cart, updateCartQuantity, removeFromCart, getCartTotal } = useApp();
  const isRTL = i18n.language === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = getShippingCost(subtotal);
  const tax = calculateTax(subtotal);
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {t("cart_page.shopping_cart")} ({cart.length}{" "}
            {cart.length === 1 ? t("cart_page.item") : t("cart_page.items")})
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 rtl:space-x-reverse border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                      >
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 truncate">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {item.category}
                          </p>
                          <div className="text-lg font-bold text-primary mt-2">
                            {formatPriceWithDirection(item.price, isRTL)}
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() =>
                                updateCartQuantity(item.id, item.quantity - 1)
                              }
                              className="p-2 hover:bg-gray-100 transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-2 min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateCartQuantity(item.id, item.quantity + 1)
                              }
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">
                            {formatPriceWithDirection(
                              item.price * item.quantity,
                              isRTL
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  {t("checkout_page.order_summary")}
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t("cart.subtotal")}</span>
                    <span className="font-semibold">
                      {formatPriceWithDirection(subtotal, isRTL)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">{t("cart.shipping")}</span>
                    <span className="font-semibold">
                      {shipping === 0
                        ? t("cart.free")
                        : formatPriceWithDirection(shipping, isRTL)}
                    </span>
                  </div>

                  {siteConfig.tax.enabled && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {t("cart.tax")} ({siteConfig.tax.displayName})
                      </span>
                      <span className="font-semibold">
                        {formatPriceWithDirection(tax, isRTL)}
                      </span>
                    </div>
                  )}

                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-xl font-bold text-gray-900">
                        Total
                      </span>
                      <span className="text-xl font-bold text-primary">
                        {formatPriceWithDirection(total, isRTL)}
                      </span>
                    </div>
                  </div>
                </div>

                {shipping > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800">
                      {t("cart.free_shipping_message", {
                        amount: (
                          siteConfig.shop.freeShippingThreshold - subtotal
                        ).toFixed(2),
                      })}
                    </p>
                  </div>
                )}

                <Link
                  to="/checkout"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse mb-4"
                >
                  <span>{t("cart_page.proceed_to_checkout")}</span>
                  <ArrowIcon className="w-5 h-5" />
                </Link>

                <Link
                  to="/"
                  className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  {t("cart_page.continue_shopping")}
                </Link>

                {/* Security Badges */}
                <div className="mt-6 pt-6 border-t">
                  <div className="text-center text-sm text-gray-600">
                    <p className="mb-2">{t("cart.secure_checkout")}</p>
                    <p>💳 Multiple Payment Options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
