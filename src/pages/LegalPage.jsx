import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Shield, CheckCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

const LegalPage = () => {
  const { page } = useParams();
  const { t } = useTranslation();

  const getPageContent = () => {
    switch (page) {
      case "terms":
        return {
          title: t("legal.terms_title"),
          content: siteConfig.legal.termsOfUse,
        };
      case "privacy":
        return {
          title: t("legal.privacy_title"),
          content: siteConfig.legal.privacyPolicy,
        };
      case "return-policy":
        return {
          title: t("legal.return_policy"),
          content: siteConfig.legal.returnPolicy,
        };
      case "verified":
        return {
          title: t("legal.verified_info"),
          content: siteConfig.legal.verifiedInfo,
          isVerified: true,
        };
      default:
        return {
          title: "Page Not Found",
          content: "<p>The requested legal page was not found.</p>",
        };
    }
  };

  const pageData = getPageContent();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            {pageData.isVerified && (
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <Shield className="w-12 h-12 text-green-600" />
                </div>
              </div>
            )}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {pageData.title}
            </h1>
            {pageData.isVerified && (
              <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg text-green-600 font-semibold">
                  {t("footer.verified")}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: pageData.content }}
              />
            </div>

            {/* Company Info Footer for Verified Page */}
            {pageData.isVerified && (
              <div className="bg-gray-50 border-t p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Company Details
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <strong>{t("legal.company_name")}:</strong>{" "}
                        {siteConfig.company.name}
                      </p>
                      <p>
                        <strong>{t("legal.commercial_registration")}:</strong>{" "}
                        {siteConfig.company.commercialReg}
                      </p>
                      <p>
                        <strong>{t("legal.tax_number")}:</strong>{" "}
                        {siteConfig.company.taxNumber}
                      </p>
                      <p>
                        <strong>{t("legal.registered_address")}:</strong>{" "}
                        {siteConfig.company.address}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <strong>{t("legal.phone")}:</strong>{" "}
                        {siteConfig.company.phone}
                      </p>
                      <p>
                        <strong>{t("legal.email")}:</strong>{" "}
                        {siteConfig.company.email}
                      </p>
                      <p>
                        <strong>{t("legal.customer_service")}:</strong>{" "}
                        {t("contact.hours")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-900">
                        {t("legal.verified_business")}
                      </h4>
                      <p className="text-sm text-green-700">
                        {t("legal.verified_business_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Back to Homepage */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.history.back()}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              {t("common.back")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
