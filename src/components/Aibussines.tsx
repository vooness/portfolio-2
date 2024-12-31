"use client";

import React from "react";
import { FaRocket, FaUsers, FaRegLightbulb, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";

const Aibussines: React.FC = () => {
  return (
    <section id="intelligence" className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        {/* Nadpis */}
        <h2 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 mb-12">
        Proč se seznámit s AI?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
      AI za vás všechnu práci neudělá, ale může být skvělým pomocníkem, když jí dáte
        šanci. Nemusíte to být hned na profi úrovni – stačí se s ní jen trochu skamarádit.
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
      title: "Rychlejší progress!",
      description:
        "AI zvládne splnit nudné úkoly, co berou spoustu času. My se díky tomu můžeme soustředit na kreativní činnosti.",
    },
    {
      icon: <FaUsers className="text-blue-500 text-6xl" />,
      title: "Jít s dobou",
      description:
        "AI se velmi pravděpodobně brzy stane ‚must have‘ dovedností. Čím déle čekáme na seznámení s AI, tím těžší to bude.",
    },
    {
      icon: <FaRegLightbulb className="text-blue-500 text-6xl" />,
      title: "Inovace a strategie",
      description:
        "AI neřekne, co přesně dělat. Ale může nám ukázat, kde jsou možnosti, které nemusely být zřejmé.",
    },
    {
      icon: <FaMoneyBillWave className="text-blue-500 text-6xl" />,
      title: "Časová úspora",
      description:
        "Místo 3 hodin to zvládla za 45 minut.",
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
