import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ShoppingBag, Star, TrendingUp } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { getProductsByCategory } from "../data/products";

const CategoriesPage = () => {
  const { t } = useTranslation();

  const categoriesWithProducts = siteConfig.categories.map((category) => ({
    ...category,
    products: getProductsByCategory(category.id),
    productCount: getProductsByCategory(category.id).length,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            {t("nav.categories")}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in-up">
            Discover our wide range of premium products across all categories
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesWithProducts.map((category, index) => (
              <div
                key={category.id}
                className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-glow transition-all duration-500 card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={t(`categories.${category.id}`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Featured Badge */}
                  {category.featured && (
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 rtl:space-x-reverse">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Featured</span>
                    </div>
                  )}

                  {/* Product Count */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {category.productCount}{" "}
                    {category.productCount === 1 ? "Product" : "Products"}
                  </div>

                  {/* Trending Indicator */}
                  {index < 3 && (
                    <div className="absolute bottom-4 left-4 flex items-center space-x-1 rtl:space-x-reverse text-white">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">Trending</span>
                    </div>
                  )}
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {t(`categories.${category.id}`)}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {t("categories.explore_description", { 
                      category: t(`categories.${category.id}`).toLowerCase() 
                    })}
                  </p>

                  {/* Category Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500">
                      <span>{category.productCount} items</span>
                      <span>•</span>
                      <span>Free shipping</span>
                    </div>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">
                        4.8
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/category/${category.id}`}
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse group-hover:transform group-hover:scale-105"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Shop Now</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our customer support team and we'll help you find the
            perfect product for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Contact Support</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
