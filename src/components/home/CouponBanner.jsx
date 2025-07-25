import { useTranslation } from "react-i18next";
import { Tag, Clock, Sparkles, Gift, Zap, Copy, Check } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { useState } from "react";

const CouponBanner = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(siteConfig.coupon.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-yellow-200/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-200/20 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute top-20 right-1/4 w-36 h-36 bg-pink-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-3xl p-1 shadow-2xl animate-fadeInUp">
          <div className="bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-float"></div>
            </div>

            <div className="relative z-10 text-center">
              {/* Enhanced Header */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce-subtle">
                    <Gift className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                    <Sparkles className="w-3 h-3 text-yellow-900" />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
                  {t("home.coupon_title")}
                </h3>
                <p className="text-xl md:text-2xl font-medium text-orange-100">
                  {t("home.coupon_subtitle")}
                </p>
              </div>

              {/* Enhanced Coupon Code Section */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 inline-block border border-white/20 shadow-2xl">
                <div className="flex items-center justify-center space-x-6 rtl:space-x-reverse">
                  <div className="text-center">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2">
                      <Tag className="w-6 h-6 text-yellow-200" />
                      <span className="text-yellow-200 font-semibold text-sm uppercase tracking-wide">
                        {t("home.coupon_code_label")}
                      </span>
                    </div>
                    <div
                      onClick={copyToClipboard}
                      className="cursor-pointer group bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30"
                    >
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="text-3xl md:text-4xl font-black tracking-wider text-white">
                          {siteConfig.coupon.code}
                        </div>
                        {copied ? (
                          <Check className="w-5 h-5 text-green-300 animate-pulse" />
                        ) : (
                          <Copy className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                        )}
                      </div>
                      <div className="text-sm text-white/80 group-hover:text-white transition-colors duration-300 mt-1">
                        {copied
                          ? t("home.coupon_copied")
                          : t("home.coupon_click_to_copy")}
                      </div>
                    </div>
                  </div>

                  <div className="w-px h-16 bg-white/30"></div>

                  <div className="text-center">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                      <Zap className="w-6 h-6 text-yellow-200" />
                      <span className="text-yellow-200 font-semibold text-sm uppercase tracking-wide">
                        Discount
                      </span>
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                      {siteConfig.coupon.discount}% OFF
                    </div>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse text-orange-100 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Limited Time</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-orange-100 text-lg">
                ✨ {siteConfig.coupon.description} ✨
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2 rtl:space-x-reverse mx-auto">
                  <span>{t("components.shop_now_save")}</span>
                  <Sparkles className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponBanner;
