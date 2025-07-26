import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams, Link } from "react-router-dom";
import { Search, Filter, X, Grid, List } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { sampleProducts as products } from "../data/products";

const SearchPage = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("relevance");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const query = searchParams.get("q") || "";
    setSearchQuery(query);

    if (query) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchParams({});
    setFilteredProducts(products);
  };

  const sortProducts = (products, sortBy) => {
    switch (sortBy) {
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...products].sort((a, b) => b.price - a.price);
      case "name":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "rating":
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts, sortBy);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8 animate-fadeInUp">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {searchQuery
                  ? t("search.results_for", { query: searchQuery })
                  : t("search.title")}
              </h1>

              <form onSubmit={handleSearch} className="relative max-w-lg">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("search.placeholder")}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>

            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-primary text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-primary text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="relevance">{t("search.sort.relevance")}</option>
                <option value="price-low">{t("search.sort.price_low")}</option>
                <option value="price-high">
                  {t("search.sort.price_high")}
                </option>
                <option value="name">{t("search.sort.name")}</option>
                <option value="rating">{t("search.sort.rating")}</option>
              </select>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="w-5 h-5" />
                <span>{t("search.filters")}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 animate-fadeInLeft">
              <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("search.filters")}
                </h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">
                    {t("search.category")}
                  </h4>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  >
                    <option value="">{t("search.all_categories")}</option>
                    <option value="electronics">
                      {t("categories.electronics")}
                    </option>
                    <option value="clothing">{t("categories.clothing")}</option>
                    <option value="books">{t("categories.books")}</option>
                    <option value="home">{t("categories.home")}</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">
                    {t("search.price_range")}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([
                            parseInt(e.target.value) || 0,
                            priceRange[1],
                          ])
                        }
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                      <span>-</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            parseInt(e.target.value) || 1000,
                          ])
                        }
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedCategory("");
                    setPriceRange([0, 1000]);
                  }}
                  className="w-full btn-modern btn-ghost text-sm"
                >
                  {t("search.clear_filters")}
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6 animate-fadeInUp stagger-2">
              <p className="text-gray-600">
                {t("search.results_count", { count: sortedProducts.length })}
              </p>
            </div>

            {/* Products */}
            {sortedProducts.length > 0 ? (
              <div
                className={`${
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                    : "space-y-4"
                } animate-fadeInUp stagger-3`}
              >
                {sortedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`animate-fadeInUp stagger-${(index % 5) + 1}`}
                  >
                    <ProductCard product={product} viewMode={viewMode} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 animate-fadeInUp">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("search.no_results")}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t("search.try_different")}
                </p>
                <Link to="/categories" className="btn-modern btn-primary">
                  {t("search.browse_categories")}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
