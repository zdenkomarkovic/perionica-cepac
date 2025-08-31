import Link from "next/link";
import Button from "../ui/Button";
import { SITE_CONFIG } from "@/app/constants/site";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-red-600 text-white py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={"/pexels-photo-3354648.jpeg"}
          width={1000}
          height={1000}
          alt="Pranje automobila"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-red-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95">
              Profesionalna auto-hemija, šamponi za pranje, voskovi za zaštitu i
              detailing proizvodi za sve ljubitelje čistih i negovanih
              automobila u Zrenjaninu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/proizvodi">
                <Button variant="secondary" size="lg">
                  Pogledaj proizvode
                </Button>
              </Link>
              <Link href="tel:+381621083762">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  +381621083762
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
