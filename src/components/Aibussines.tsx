"use client";

import React from "react";
import { FaRocket, FaUsers, FaRegLightbulb, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";

const Aibussines: React.FC = () => {
  return (
    <section id="intelligence" className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        {/* Nadpis */}
        <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 mb-12">
          AI pro váš byznys
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Umělá inteligence otevírá dveře k novým příležitostem, rychlejšímu
          růstu a lepším výsledkům. Umožní vám inovovat, lépe rozumět svým
          zákazníkům a získat konkurenční náskok na trhu.
        </p>

        <div className="relative overflow-hidden rounded-lg shadow-lg mb-16 max-w-[1000px] w-full mx-auto">
  <video
    className="w-full h-auto object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/imgs/1920x1080_FULL_HD.webm" type="video/webm" />
    Váš prohlížeč nepodporuje přehrávání videí.
  </video>
</div>


        {/* Oddělovací čára */}
        <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-300 w-24 mx-auto mb-12"></div>

        {/* Grid s kartami */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            {
              icon: <FaRocket className="text-blue-500 text-6xl" />,
              title: "Rychlejší růst",
              description:
                "Implementace AI zefektivňuje provoz, šetří čas a umožňuje růst bez navyšování nákladů.",
            },
            {
              icon: <FaUsers className="text-blue-500 text-6xl" />,
              title: "Lepší zákaznická zkušenost",
              description:
                "S AI můžete personalizovat nabídky, zlepšit podporu a lépe předvídat potřeby svých klientů.",
            },
            {
              icon: <FaRegLightbulb className="text-blue-500 text-6xl" />,
              title: "Inovace a strategie",
              description:
                "Prediktivní analýzy a automatizace vám pomohou činit lepší rozhodnutí a objevovat nové trhy.",
            },
            {
              icon: <FaMoneyBillWave className="text-blue-500 text-6xl" />,
              title: "Optimalizace nákladů",
              description:
                "Snížení provozních výdajů díky efektivnější alokaci zdrojů a chytřejšímu plánování.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center md:items-start md:flex-row text-left bg-gray-800 p-6 rounded-lg transition-colors"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 20px rgba(59, 130, 246, 0.7)",
                  "0 0 0px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                duration: 3,
                delay: index * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Ikona */}
              <div className="mb-4 md:mb-0 md:mr-6">{item.icon}</div>
              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aibussines;
