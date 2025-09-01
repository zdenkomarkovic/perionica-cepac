"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { SITE_CONFIG } from "@/app/constants/site";
import { client } from "@/sanity/lib/client";
import { getImageUrl } from "@/sanity/lib/image";

export default function FeaturedProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const PRODUCTS_PER_PAGE = 6;

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        setLoading(true);

        const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;

        const productsQuery = `*[_type == "product" && featured == true && inStock == true] | order(order asc) [${offset}...${offset + PRODUCTS_PER_PAGE}] {
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
          price
        }`;

        const countQuery = `count(*[_type == "product" && featured == true && inStock == true])`;

        const [productsData, totalCount] = await Promise.all([
          client.fetch(productsQuery),
          client.fetch(countQuery),
        ]);

        setProducts(productsData);
        setTotalProducts(totalCount);
      } catch (error) {
        console.error("Error fetching featured products:", error);
        setProducts([]);
        setTotalProducts(0);
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedProducts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Učitavanje proizvoda...</p>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Izdvojeni proizvodi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naši najpopularniji proizvodi za profesionalnu negu vozila
          </p>
        </div>

        {/* Results Info */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Prikazano {products.length} od {totalProducts} izdvojenih proizvoda
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
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
                {/* <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Izdvojeno
                  </span>
                </div> */}
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1">
                <div>
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
                </div>
                {/* Action Button */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={`/proizvodi/${product.slug?.current}`}
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full">
                      Vidi više...
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center">
            <div className="flex items-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
                  const showPage =
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1);

                  if (!showPage) {
                    if (page === currentPage - 2 || page === currentPage + 2) {
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

        {/* View All Products Link */}
        <div className="text-center mt-12">
          <Link href="/proizvodi">
            <Button variant="outline" size="lg">
              Pogledaj sve proizvode
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
