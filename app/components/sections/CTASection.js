import Link from 'next/link';
import Button from '../ui/Button';
import { SITE_CONFIG } from '@/app/constants/site';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Spremni za čist i negovan automobil?
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-95">
          Kontaktirajte nas za više informacija o našim proizvodima i uslugama
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href={`tel:${SITE_CONFIG.company.phone.replace(/\s/g, '')}`}>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Pozovi nas
            </Button>
          </a>
          <Link href="/kontakt">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
              Pošalji poruku
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}