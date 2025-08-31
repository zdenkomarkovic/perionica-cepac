import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import FeaturedProductsSection from './components/sections/FeaturedProductsSection';
import CTASection from './components/sections/CTASection';
import Header from './components/Header';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedProductsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}