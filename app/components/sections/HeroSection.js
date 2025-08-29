import Link from 'next/link';
import Button from '../ui/Button';
import { SITE_CONFIG } from '@/app/constants/site';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-red-600 text-white py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Pranje automobila"
          className="w-full h-full object-cover opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-red-600/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95">
              Profesionalna auto-hemija za sve ljubitelje čistih i negovanih automobila
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/proizvodi">
                <Button variant="secondary" size="lg">
                  Pogledaj proizvode
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Kontaktiraj nas
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Feature highlights */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Zašto RRcustomsserbia?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Dugogodišnje iskustvo</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Ekološki prihvatljiva sredstva</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Profesionalni pristup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}