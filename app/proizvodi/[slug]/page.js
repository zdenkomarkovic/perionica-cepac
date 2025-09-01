"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/ui/Button";
import { SITE_CONFIG } from "@/app/constants/site";
import { client } from "@/sanity/lib/client";
import { getImageUrl } from "@/sanity/lib/image";
import { productBySlugQuery } from "@/sanity/lib/queries";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await client.fetch(productBySlugQuery, {
          slug: params.slug,
        });
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    if (params.slug) {
      fetchProduct();
    }
  }, [params.slug]);

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

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Proizvod nije pronađen
            </h1>
            <p className="text-gray-600 mb-8">
              Proizvod koji tražite ne postoji ili je uklonjen.
            </p>
            <Link href="/proizvodi">
              <Button>Vrati se na proizvode</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Početna
            </Link>
            <span>/</span>
            <Link
              href="/proizvodi"
              className="hover:text-blue-600 transition-colors"
            >
              Proizvodi
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="relative mb-6">
                <div className="aspect-square bg-[#f9fafb] rounded-2xl overflow-hidden flex items-center justify-center">
                  {product.images?.[selectedImage] ? (
                    <img
                      src={getImageUrl(product.images[selectedImage], 2000)}
                      alt={product.images[selectedImage].alt || product.name}
                      className="object-contain max-w-full max-h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-red-100">
                      <svg
                        className="w-24 h-24 text-gray-400"
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
                </div>
              </div>

              {/* Image Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-blue-600 ring-2 ring-blue-600/20"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={getImageUrl(image, 150, 150)}
                        alt={image.alt || `${product.name} slika ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              {/* Category */}
              {product.category && (
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {product.category.name}
                  </span>
                </div>
              )}

              {/* Product Name */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {product.name}
              </h1>

              {/* Brand */}
              {product.brand && (
                <p className="text-lg text-gray-500 mb-6">
                  Brend:{" "}
                  <span className="font-medium text-gray-700">
                    {product.brand}
                  </span>
                </p>
              )}

              {/* Short Description */}
              {product.shortDescription && (
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {product.shortDescription}
                </p>
              )}

              {/* Price */}
              {product.price && (
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-blue-600">
                      {product.price.amount} {product.price.currency}
                    </span>
                    {product.price.unit && (
                      <span className="text-lg text-gray-500">
                        {product.price.unit}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Stock Status */}
              <div className="mb-8">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-3 ${
                      product.inStock ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <span
                    className={`text-lg font-medium ${
                      product.inStock ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.inStock ? "Na stanju" : "Nema na stanju"}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href={`tel:${SITE_CONFIG.company.phone.replace(/\s/g, "")}`}
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    className="w-full"
                    disabled={!product.inStock}
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {product.inStock
                      ? "Poruči telefonom"
                      : "Kontaktiraj za dostupnost"}
                  </Button>
                </a>
                {/* <a
                  href={`mailto:${SITE_CONFIG.company.email}?subject=Upit za ${product.name}`}
                >
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
                    Pošalji email
                  </Button>
                </a> */}
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          {product.description && (
            <div className="mt-16 max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Detaljan opis
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                {/* Ovde bi trebalo da se renderuje rich text content */}
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <p className="text-lg leading-relaxed">
                    {product.shortDescription ||
                      "Detaljan opis proizvoda će biti dostupan uskoro."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
