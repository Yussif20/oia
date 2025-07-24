import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Filter, Grid, List, SortAsc } from "lucide-react";
import { useState } from "react";
import { getProductsByCategory } from "../data/products";
import { siteConfig } from "../config/siteConfig";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const category = siteConfig.categories.find((cat) => cat.id === categoryId);
  const allProducts = getProductsByCategory(categoryId);

  // Sort products
  const sortedProducts = [...allProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return (b.rating || 0) - (a.rating || 0);
      case "newest":
        return (
          new Date(b.createdAt || "2024-01-01") -
          new Date(a.createdAt || "2024-01-01")
        );
      default:
        return 0;
    }
  });

  // Filter by price range
  const filteredProducts = sortedProducts.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Category Not Found
          </h1>
          <p className="text-gray-600">
            The category you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <section className="relative h-64 bg-gradient-to-r from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={t(`categories.${categoryId}`)}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              {t(`categories.${categoryId}`)}
            </h1>
            <p className="text-xl text-blue-100 animate-fade-in-up">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"} available
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <SortAsc className="w-5 h-5 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              <div className="flex items-center space-x-2 rtl:space-x-reverse border-l border-gray-300 pl-4 rtl:pl-0 rtl:pr-4">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Price Filter */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm text-gray-600">Price:</span>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-32"
                />
                <span className="text-sm font-medium text-gray-900">
                  $0 - ${priceRange[1]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-6"
            }
          >
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`animate-scale-in ${
                  viewMode === "list" ? "w-full" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {viewMode === "grid" ? (
                  <ProductCard product={product} showQuickView />
                ) : (
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex">
                      <div className="w-48 h-48 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {product.name}
                            </h3>
                            <p className="text-gray-600 line-clamp-2">
                              {product.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              ${product.price}
                            </div>
                            {product.originalPrice && (
                              <div className="text-sm text-gray-500 line-through">
                                ${product.originalPrice}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            {product.rating && (
                              <>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <svg
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < Math.floor(product.rating)
                                          ? "text-yellow-400 fill-current"
                                          : "text-gray-300"
                                      }`}
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="text-sm text-gray-600">
                                  ({product.reviews})
                                </span>
                              </>
                            )}
                          </div>
                          <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              No products found
            </h2>
            <p className="text-gray-600 mb-8">
              Try adjusting your filters or search for something else.
            </p>
            <button
              onClick={() => setPriceRange([0, 2000])}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
