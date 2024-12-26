"use client";

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"; // Ikony sociálních sítí a kontaktu

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Tady můžete přidat logiku pro odeslání e-mailu na server
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        {/* Hlavní grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Sekce Rychlé odkazy */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  O nás
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition">
                  Kurzy
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Sekce Sociální sítě + Kontakt */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Sledujte nás</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-2xl transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-2xl transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-2xl transition"
              >
                <FaLinkedin />
              </a>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 text-xl" />
                <a
                  href="mailto:info@ai-skoleni.cz"
                  className="hover:text-blue-400 transition"
                >
                  info@ai-skoleni.cz
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-400 text-xl" />
                <a
                  href="tel:+420123456789"
                  className="hover:text-blue-400 transition"
                >
                  +420 123 456 789
                </a>
              </li>
            </ul>
          </div>

          {/* Sekce Formulář */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Zanechte nám e-mail
            </h4>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Váš e-mail"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Odeslat
                </button>
              </form>
            ) : (
              <p className="text-blue-400">
                Děkujeme! Brzy se vám ozveme.
              </p>
            )}
          </div>
        </div>

        {/* Spodní část */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} AI Školení. Všechna práva
            vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
