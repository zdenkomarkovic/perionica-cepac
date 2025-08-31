'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { SITE_CONFIG } from '@/app/constants/site';
import { client } from '@/sanity/lib/client';
import { getImageUrl } from '@/sanity/lib/image';
import { featuredProductsQuery } from '@/sanity/lib/queries';

export default function FeaturedProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const data = await client.fetch(featuredProductsQuery);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedProducts();
  }, []);

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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product._id}
              className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
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
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                )}
                
                {/* Category Badge */}
                {product.category && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category.name}
                    </span>
                  </div>
                )}

                {/* Featured Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Izdvojeno
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                
                {product.shortDescription && (
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.shortDescription}
                  </p>
                )}

                {/* Price */}
                {product.price && (
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
                )}

                {/* Action Button */}
                <a href={`tel:${SITE_CONFIG.company.phone.replace(/\s/g, '')}`}>
                  <Button size="sm" className="w-full">
                    Poruči sada
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Link */}
        <div className="text-center mt-12">
          <Link href="/proizvodi">
            <Button variant="outline" size="lg">
              Pogledaj sve proizvode
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}