import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import ar from "../i18n/locales/ar.json";
import en from "../i18n/locales/en.json";

const LegalPage = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";
  const isTerms = location.pathname.includes("terms");
  const legal = isTerms
    ? lang === "ar"
      ? ar.terms
      : en.terms
    : lang === "ar"
    ? ar.privacy_policy
    : en.privacy_policy;
  const isRTL = lang === "ar";

  return (
    <div
      className={`container legal-page mx-auto my-8 max-w-3xl bg-white rounded-xl shadow-lg p-8 ${
        isRTL ? "rtl text-right font-arabic" : "ltr text-left"
      }`}
    >
      <h1 className="text-3xl font-bold mb-8 text-blue-700">{legal.title}</h1>
      <div className="legal-content text-base leading-relaxed">
        {/* Introduction */}
        {legal.introduction && (
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2 text-gray-800">
              {legal.introduction.title}
            </h2>
            <p>{legal.introduction.content}</p>
          </section>
        )}
        {/* Render all other sections */}
        {Object.keys(legal)
          .filter(
            (key) =>
              key !== "title" &&
              key !== "introduction" &&
              typeof legal[key] === "object"
          )
          .map((key) => {
            const section = legal[key];
            return (
              <section key={key} className="mb-8 bg-gray-50 rounded-lg p-6">
                <h2 className="text-lg font-bold mb-2 text-blue-600">
                  {section.title}
                </h2>
                {section.content && <p className="mb-2">{section.content}</p>}
                {Object.keys(section)
                  .filter(
                    (subKey) => subKey !== "title" && subKey !== "content"
                  )
                  .map((subKey) => {
                    const value = section[subKey];
                    if (typeof value === "string") {
                      return (
                        <p key={subKey} className="mb-2">
                          {value}
                        </p>
                      );
                    } else if (typeof value === "object" && value !== null) {
                      // If nested object, render its title/content recursively
                      return (
                        <div key={subKey} className="ml-4">
                          {value.title && (
                            <h3 className="font-bold text-base mb-1 text-gray-700">
                              {value.title}
                            </h3>
                          )}
                          {value.content && (
                            <p className="mb-2">{value.content}</p>
                          )}
                        </div>
                      );
                    }
                    return null;
                  })}
              </section>
            );
          })}
      </div>
    </div>
  );
};

export default LegalPage;
