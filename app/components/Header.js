"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/app/constants/site";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link href={"/"} className="flex items-center gap-3">
            <Image
              src={"/android-chrome-512x512.png"}
              width={60}
              height={60}
              alt="auto hemija"
              className=""
            />
            <div>
              <p className={`font-bold text-gray-900 text-xl  leading-tight`}>
                RRcustomsserbia
              </p>
              <p className="text-base text-gray-600">Auto-hemija</p>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {SITE_CONFIG.navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div className="py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {SITE_CONFIG.navigation.main.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
