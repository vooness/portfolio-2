"use client";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Zakázat scrollování na pozadí při otevřeném menu
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo vlevo */}
        <div className="text-2xl font-extrabold">
          <Link href="#" className="hover:text-blue-400 transition-all">
            AI Školení
          </Link>
        </div>

        {/* Odkazy uprostřed */}
        <div className="hidden md:flex space-x-8">
          <Link href="#about" className="relative group text-sm font-medium text-white">
            Jak využít AI ve svém podnikání
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link href="#intelligence" className="relative group text-sm font-medium text-white">
            Umělá inteligence
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link href="#consulting" className="relative group text-sm font-medium text-white">
            AI konzultace
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
        </div>

        {/* Tlačítko napravo */}
        <div className="hidden md:block relative">
          <Link
            href="#contact"
            className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
          >
            Konzultace
            <span className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:animate-glow transition duration-500" />
          </Link>
        </div>

        {/* Mobilní menu ikona */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose className="h-8 w-8 text-blue-400" />
          ) : (
            <AiOutlineMenu className="h-8 w-8 text-blue-400" />
          )}
        </button>
      </nav>

      {/* Mobilní menu */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-800 text-white flex flex-col items-center justify-between transform transition-all duration-300 ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {/* Horní část s tlačítkem zavření */}
        <div className="w-full flex justify-between items-center px-4 py-4">
          <div className="text-lg font-extrabold">AI Školení</div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-blue-400 focus:outline-none"
          >
            <AiOutlineClose className="h-8 w-8" />
          </button>
        </div>

        {/* Odkazy ve středu */}
        <div className="flex flex-col items-center space-y-6">
          <Link href="#about" className="relative group text-lg font-medium text-white">
            Jak využít AI ve svém podnikání
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link href="#intelligence" className="relative group text-lg font-medium text-white">
            Umělá inteligence
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link href="#consulting" className="relative group text-lg font-medium text-white">
            AI konzultace
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
        </div>

        {/* Spodní část s výzvou ke kontaktu */}
        <div className="w-full bg-gray-700 py-6 px-4 text-center">
          <p className="text-sm text-gray-300">Máte dotazy? Kontaktujte mě:</p>
          <a
            href="mailto:info@ai-skoleni.cz"
            className="block mt-2 text-lg text-blue-400 underline hover:text-blue-500"
          >
            info@ai-skoleni.cz
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
