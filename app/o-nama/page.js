import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import { SITE_CONFIG } from "@/app/constants/site";

export default function ONamaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6872149/pexels-photo-6872149.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Profesionalna auto-hemija proizvodi"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-red-600/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">O nama</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Tradicija, kvalitet i profesionalnost u svetu auto-hemije
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Naša priča
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">
                    {SITE_CONFIG.company.name}
                  </strong>{" "}
                  je dugogodišnja porodična perionica poznata po kvalitetnom
                  pranju i održavanju vozila u Zrenjaninu. Sa više od 15 godina
                  iskustva u oblasti auto-detailing usluga, stekli smo
                  reputaciju kao jedan od najpouzdanijih partnera za negu vozila
                  u regionu.
                </p>
                <p>
                  Posvećeni smo detaljima i zadovoljstvu klijenata, koristeći
                  ekološki prihvatljiva sredstva koja čuvaju vaše vozilo i
                  životnu sredinu. Naš tim stručnjaka kontinuirano se usavršava
                  u najnovijim tehnikama pranja, poliranja i zaštite vozila.
                </p>
                <p>
                  Sada širimo ponudu i na prodaju{" "}
                  <strong className="text-blue-600">
                    profesionalne auto-hemije
                  </strong>
                  za sve ljubitelje čistih i negovanih automobila. Naša misija
                  je da omogućimo svim vlasnicima vozila pristup vrhunskim
                  proizvodima za auto-detailing koji se koriste u profesionalnim
                  servisima.
                </p>
                <p>
                  Naša{" "}
                  <strong className="text-blue-600">
                    profesionalna auto-hemija
                  </strong>{" "}
                  uključuje kvalitetne šampone za pranje vozila, sredstva za
                  poliranje karoserije, zaštitne voskove i detailing proizvode.
                  Svi naši proizvodi su testirani i preporučeni od strane
                  profesionalnih detailing majstora širom Srbije.
                </p>
                <p>
                  Bilo da tražite{" "}
                  <strong className="text-gray-900">
                    auto šampon za pranje
                  </strong>
                  ,<strong className="text-gray-900">vosak za automobil</strong>
                  ,
                  <strong className="text-gray-900">
                    sredstva za čišćenje enterijera
                  </strong>
                  , ili
                  <strong className="text-gray-900">
                    proizvode za poliranje lakova
                  </strong>
                  , imamo sve što vam je potrebno za održavanje vozila na
                  profesionalnom nivou.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Profesionalno pranje automobila u Zrenjaninu"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">15+ godina</div>
                    <div className="text-sm text-gray-600">
                      Iskustva u auto-detailing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Naše vrednosti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principi koji nas vode u radu sa klijentima i proizvodima
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kvalitet</h3>
              <p className="text-gray-600">
                Koristimo samo najkvalitetniju auto-hemiju i profesionalne
                proizvode za detailing koji garantuju vrhunske rezultate.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ekologija
              </h3>
              <p className="text-gray-600">
                Sva naša sredstva za pranje i poliranje su ekološki bezbedna i
                ne štete životnoj sredini ni vašem vozilu.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Iskustvo</h3>
              <p className="text-gray-600">
                Naša ekipa ima dugogodišnje iskustvo u radu sa svim tipovima
                vozila i auto-hemijskih proizvoda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Zašto izabrati nas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Razlozi zbog kojih su nas klijenti izabrali za partnera u negi
              vozila
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Profesionalna auto-hemija
              </h3>
              <p className="text-gray-600 mb-4">
                Nudimo širok asortiman profesionalne auto-hemije uključujući
                auto šampone za dubinsko pranje, voskove za dugotrajnu zaštitu
                laka, sredstva za poliranje koja vraćaju sjaj, kao i
                specijalizovane detailing proizvode za enterijere vozila.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Uvozni proizvodi vrhunskog kvaliteta
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Testirana sredstva za sve tipove vozila
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Konkurentne cene za Zrenjanin i okolinu
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dugogodišnje iskustvo
              </h3>
              <p className="text-gray-600 mb-4">
                Sa preko 15 godina rada u oblasti pranja i održavanja vozila,
                stekli smo duboko znanje o tome koja sredstva najbolje
                funkcionišu za različite tipove vozila i stepene zagađenosti.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Rad sa svim tipovima vozila
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Stručno savetovanje o proizvodima
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Garancija na sve proizvode
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Godina iskustva</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Zadovoljnih klijenata</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Različitih proizvoda</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Garancija kvaliteta</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spremni za saradnju?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas za informacije o proizvodima ili zakazivanje
            usluga pranja vozila
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
                {SITE_CONFIG.company.phone}
              </Button>
            </a>
            <a href="/kontakt">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Pošaljite poruku
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
