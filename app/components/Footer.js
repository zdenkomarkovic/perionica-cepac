import { SITE_CONFIG } from "@/app/constants/site";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={"/android-chrome-512x512.png"}
                width={60}
                height={60}
                alt="auto hemija"
                className=""
              />
              <div>
                <p className={`font-bold text-white text-xl  leading-tight`}>
                  RRcustomsserbia
                </p>
                <p className="text-base text-gray-300">Auto-hemija</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Dugogodišnja porodična perionica poznata po kvalitetnom pranju i
              održavanju vozila. Sada i prodaja profesionalne auto-hemije.
            </p>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Brzi linkovi</h3>
            <ul className="space-y-4">
              {SITE_CONFIG.navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300">
                  {SITE_CONFIG.company.address}
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0"
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
                <a
                  href={`tel:${SITE_CONFIG.company.phone.replace(/\s/g, "")}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {SITE_CONFIG.company.phone}
                </a>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0"
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
                <a
                  href={`mailto:${SITE_CONFIG.company.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {SITE_CONFIG.company.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {SITE_CONFIG.company.fullName}. Sva prava
              zadržana.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Profesionalna auto-hemija • {SITE_CONFIG.company.location}
              </p>
              <p className="text-gray-400 text-sm">
                Izrada web sajta{" "}
                <a
                  href="https://manikamwebsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  ManikamWebSolutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
