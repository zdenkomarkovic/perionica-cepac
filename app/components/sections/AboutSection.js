import { SITE_CONFIG } from '@/app/constants/site';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              O nama
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">{SITE_CONFIG.company.name}</strong> je dugogodišnja 
                porodična perionica poznata po kvalitetnom pranju i održavanju vozila u Zrenjaninu.
              </p>
              <p>
                Posvećeni smo detaljima i zadovoljstvu klijenata, koristeći ekološki prihvatljiva 
                sredstva koja čuvaju vaše vozilo i životnu sredinu.
              </p>
              <p>
                Sada širimo ponudu i na prodaju <strong className="text-blue-600">profesionalne auto-hemije</strong> 
                za sve ljubitelje čistih i negovanih automobila.
              </p>
              <p>
                Naša <strong className="text-blue-600">profesionalna auto-hemija</strong> uključuje 
                kvalitetne šampone za pranje vozila, sredstva za poliranje karoserije, zaštitne voskove 
                i detailing proizvode. Svi naši proizvodi su testirani i preporučeni od strane 
                profesionalnih detailing majstora.
              </p>
              <p>
                Bilo da tražite <strong className="text-gray-900">auto šampon za pranje</strong>, 
                <strong className="text-gray-900">vosak za automobil</strong>, ili 
                <strong className="text-gray-900">sredstva za čišćenje enterijera</strong>, 
                imamo sve što vam je potrebno za održavanje vozila na profesionalnom nivou.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Godina iskustva</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-gray-600">Zadovoljni klijenti</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/6872149/pexels-photo-6872149.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Profesionalna auto-hemija proizvodi"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Ekološki pristup</div>
                  <div className="text-sm text-gray-600">Bezbedna sredstva</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}