"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import { SITE_CONFIG } from "@/app/constants/site";
import { client } from "@/sanity/lib/client";
import { getImageUrl } from "@/sanity/lib/image";
import { categoriesQuery } from "@/sanity/lib/queries";

export default function ProizvodiPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);

  const PRODUCTS_PER_PAGE = 9;

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Pokušavam da učitam podatke...");
        console.log("Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
        console.log("Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);

        const categoriesData = await client.fetch(categoriesQuery);

        console.log("Raw categories data:", categoriesData);

        setCategories(categoriesData);

        console.log("Učitano kategorija:", categoriesData.length);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.error("Error details:", error.message);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;

        let productsQuery = `*[_type == "product" && inStock == true`;
        let countQuery = `count(*[_type == "product" && inStock == true`;

        if (selectedCategory !== "all") {
          productsQuery += ` && category._ref == "${selectedCategory}"`;
          countQuery += ` && category._ref == "${selectedCategory}"`;
        }

        productsQuery += `] | order(order asc) [${offset}...${offset + PRODUCTS_PER_PAGE}] {
          _id,
          name,
          brand,
          slug,
          shortDescription,
          category->{
            _id,
            name,
            slug
          },
          images[] {
            asset->{
              _id,
              url
            },
            alt
          },
          price,
          featured,
          inStock
        }`;

        countQuery += `])`;

        const [productsData, totalCount] = await Promise.all([
          client.fetch(productsQuery),
          client.fetch(countQuery),
        ]);

        setProducts(productsData);
        setTotalProducts(totalCount);

        console.log("Učitano proizvoda:", productsData.length);
        console.log("Ukupno proizvoda:", totalCount);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
        setTotalProducts(0);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategory, currentPage]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Učitavanje proizvoda...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Auto-hemija proizvodi"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-red-600/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Naši proizvodi
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Profesionalna auto-hemija za sve vaše potrebe
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="mb-12">
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => handleCategoryChange("all")}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === "all"
                      ? "bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  Svi proizvodi
                </button>
                {categories.map((category) => (
                  <button
                    key={category._id}
                    onClick={() => handleCategoryChange(category._id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category._id
                        ? "bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results Info */}
          {!loading && (
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                Prikazano {products.length} od {totalProducts} proizvoda
                {selectedCategory !== "all" &&
                  categories.find((c) => c._id === selectedCategory) && (
                    <span>
                      {" "}
                      u kategoriji &quot;
                      {categories.find((c) => c._id === selectedCategory).name}
                      &quot;
                    </span>
                  )}
              </p>
            </div>
          )}

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-gray-200">
                    {product.images?.[0] ? (
                      <img
                        src={getImageUrl(product.images[0], 400, 300)}
                        alt={product.images[0].alt || product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-red-100">
                        <svg
                          className="w-16 h-16 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Category Badge */}
                    {/* {product.category && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {product.category.name}
                        </span>
                      </div>
                    )} */}

                    {/* Featured Badge */}
                    {/* {product.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Izdvojeno
                        </span>
                      </div>
                    )} */}
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {product.name}
                      </h3>

                      {/* Brand */}
                      {product.brand && (
                        <p className="text-sm text-gray-500 mb-2">
                          {product.brand}
                        </p>
                      )}

                      {product.shortDescription && (
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {product.shortDescription}
                        </p>
                      )}
                    </div>
                    {/* Price */}
                    {/* {product.price && (
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-blue-600">
                          {product.price.amount} {product.price.currency}
                        </span>
                        {product.price.unit && (
                          <span className="text-gray-500 ml-2">
                            {product.price.unit}
                          </span>
                        )}
                      </div>
                    )} */}

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={`/proizvodi/${product.slug?.current}`}
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full ">
                          Vidi više...
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Products Message */
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Uskoro novi proizvodi
              </h2>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Radimo na dodavanju novih proizvoda. Za informacije o trenutno
                dostupnim proizvodima pozovite nas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${SITE_CONFIG.company.phone.replace(/\s/g, "")}`}>
                  <Button size="lg" className="w-full sm:w-auto">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Pozovite za informacije
                  </Button>
                </a>
                <a href={`mailto:${SITE_CONFIG.company.email}`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Pošaljite email
                  </Button>
                </a>
              </div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    // Show first page, last page, current page, and pages around current
                    const showPage =
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1);

                    if (!showPage) {
                      // Show ellipsis
                      if (
                        page === currentPage - 2 ||
                        page === currentPage + 2
                      ) {
                        return (
                          <span key={page} className="px-2 text-gray-400">
                            ...
                          </span>
                        );
                      }
                      return null;
                    }

                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          currentPage === page
                            ? "bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg"
                            : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }
                )}

                {/* Next Button */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
