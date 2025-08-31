'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import { SITE_CONFIG } from '@/app/constants/site';
import { client } from '@/sanity/lib/client';
import { getImageUrl } from '@/sanity/lib/image';
import { categoriesQuery, productsQuery } from '@/sanity/lib/queries';

// Mock data za demonstraciju
const mockCategories = [
  {
    _id: '1',
    name: 'Šamponi',
    slug: { current: 'samponi' },
    description: 'Profesionalni šamponi za pranje vozila'
  },
  {
    _id: '2', 
    name: 'Voskovi',
    slug: { current: 'voskovi' },
    description: 'Zaštitni voskovi za dugotrajnu zaštitu'
  },
  {
    _id: '3',
    name: 'Poliranje',
    slug: { current: 'poliranje' },
    description: 'Sredstva za poliranje i sjaj'
  }
];

const mockProducts = [
  {
    _id: '1',
    name: 'Premium Car Shampoo',
    shortDescription: 'Profesionalni šampon za bezbedno pranje svih tipova vozila',
    category: { _id: '1', name: 'Šamponi' },
    price: { amount: 1200, currency: 'RSD', unit: 'po litru' },
    inStock: true,
    featured: true,
    images: null
  },
  {
    _id: '2',
    name: 'Ceramic Wax Pro',
    shortDescription: 'Napredni keramički vosak za dugotrajnu zaštitu laka',
    category: { _id: '2', name: 'Voskovi' },
    price: { amount: 2500, currency: 'RSD', unit: 'po komadu' },
    inStock: true,
    featured: true,
    images: null
  },
  {
    _id: '3',
    name: 'Polish & Shine',
    shortDescription: 'Sredstvo za poliranje koje vraća originalni sjaj vozilu',
    category: { _id: '3', name: 'Poliranje' },
    price: { amount: 1800, currency: 'RSD', unit: 'po komadu' },
    inStock: true,
    featured: false,
    images: null
  },
  {
    _id: '4',
    name: 'Glass Cleaner Pro',
    shortDescription: 'Profesionalno sredstvo za čišćenje stakala bez tragova',
    category: { _id: '1', name: 'Šamponi' },
    price: { amount: 800, currency: 'RSD', unit: 'po komadu' },
    inStock: false,
    featured: false,
    images: null
  },
  {
    _id: '5',
    name: 'Tire Shine Gel',
    shortDescription: 'Gel za sjaj guma koji pruža dugotrajnu zaštitu',
    category: { _id: '3', name: 'Poliranje' },
    price: { amount: 1500, currency: 'RSD', unit: 'po komadu' },
    inStock: true,
    featured: false,
    images: null
  },
  {
    _id: '6',
    name: 'Interior Cleaner',
    shortDescription: 'Sveobuhvatno sredstvo za čišćenje enterijera vozila',
    category: { _id: '1', name: 'Šamponi' },
    price: { amount: 1000, currency: 'RSD', unit: 'po komadu' },
    inStock: true,
    featured: true,
    images: null
  }
];

export default function ProizvodiPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoriesData, productsData] = await Promise.all([
          client.fetch(categoriesQuery),
          client.fetch(productsQuery)
        ]);
        
        setCategories(categoriesData);
        setProducts(productsData);
        
        console.log('Učitano kategorija:', categoriesData.length);
        console.log('Učitano proizvoda:', productsData.length);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCategories([]);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category?._id === selectedCategory);

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
            className="w-full h-full object-cover opacity-20"
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
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  Svi proizvodi
                </button>
                {categories.map((category) => (
                  <button
                    key={category._id}
                    onClick={() => setSelectedCategory(category._id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category._id
                        ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product._id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
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
                    {product.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Izdvojeno
                        </span>
                      </div>
                    )}
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

                    {/* Stock Status */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-2 ${
                          product.inStock ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                        <span className={`text-sm font-medium ${
                          product.inStock ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {product.inStock ? 'Na stanju' : 'Nema na stanju'}
                        </span>
                      </div>

                      <a href={`tel:${SITE_CONFIG.company.phone.replace(/\s/g, '')}`}>
                        <Button size="sm" className="text-sm">
                          Poruči
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
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Uskoro novi proizvodi
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Radimo na dodavanju novih proizvoda. Za informacije o trenutno dostupnim proizvodima pozovite nas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${SITE_CONFIG.company.phone.replace(/\s/g, '')}`}>
                  <Button size="lg" className="w-full sm:w-auto">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Pozovite za informacije
                  </Button>
                </a>
                <a href={`mailto:${SITE_CONFIG.company.email}`}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Pošaljite email
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}