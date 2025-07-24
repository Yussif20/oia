import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle, ShoppingBag, Download } from "lucide-react";

const CheckoutSuccessPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get("order");

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  if (!orderNumber) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t("checkout.success_title")}
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            {t("checkout.success_message")}
          </p>

          {/* Order Details */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {t("checkout.order_number")}
              </h2>
              <div className="text-2xl font-bold text-primary bg-gray-50 p-3 rounded-lg inline-block">
                #{orderNumber}
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">24-48</div>
                  <div className="text-sm text-gray-600">
                    Hours for processing
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">3-5</div>
                  <div className="text-sm text-gray-600">
                    Business days delivery
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">30</div>
                  <div className="text-sm text-gray-600">
                    Days return policy
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              What happens next?
            </h3>
            <div className="space-y-3 text-blue-800">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="bg-blue-200 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium">Order Confirmation</p>
                  <p className="text-sm">
                    You'll receive an email confirmation shortly with your order
                    details.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="bg-blue-200 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium">Processing</p>
                  <p className="text-sm">
                    Your order will be processed and prepared for shipment
                    within 24-48 hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="bg-blue-200 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium">Shipping</p>
                  <p className="text-sm">
                    You'll receive tracking information once your order ships.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{t("checkout.continue_shopping")}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="flex items-center justify-center space-x-2 rtl:space-x-reverse border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download Receipt</span>
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">Need help with your order?</p>
            <button
              onClick={() => navigate("/contact")}
              className="text-primary hover:text-primary-dark font-medium"
            >
              Contact Customer Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
