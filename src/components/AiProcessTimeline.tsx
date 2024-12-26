"use client";

import React, { useRef, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaLightbulb, FaDatabase, FaTools, FaRocket, FaChartLine } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

const steps = [
  {
    title: "Identifikace potřeb",
    description:
      "Určíme, kde a jak může AI přinést vaší firmě největší hodnotu. Analyzujeme vaše současné procesy a identifikujeme oblasti, kde může AI optimalizovat výkon a efektivitu.",
    icon: <FaLightbulb />,
  },
  {
    title: "Analýza dat",
    description:
      "Shromáždíme, vyčistíme a připravíme data, na kterých se AI bude učit. Tento krok je zásadní pro zajištění přesnosti a relevance výsledků AI modelů.",
    icon: <FaDatabase />,
  },
  {
    title: "Výběr nástrojů",
    description:
      "Zvolíme správné AI platformy, modely a frameworky podle vašich specifických potřeb. Tím zajistíme, že vybrané nástroje budou plně kompatibilní s vašimi firemními procesy.",
    icon: <FaTools />,
  },
  {
    title: "Implementace a testování",
    description:
      "Nasadíme AI do vašich procesů a provádíme důkladné testování funkčnosti. Optimalizujeme výsledky a zajišťujeme hladkou integraci s existujícími systémy.",
    icon: <FaRocket />,
  },
  {
    title: "Monitoring a optimalizace",
    description:
      "Pravidelně sledujeme výkon AI modelů a provádíme jejich vylepšování pro dlouhodobý úspěch. Tento kontinuální proces zajišťuje, že vaše AI řešení zůstává efektivní a aktuální.",
    icon: <FaChartLine />,
  },
];

const AiProcessTimeline: React.FC = () => {
  return (
    <section
      id="consulting"
      className="relative bg-gray-900 text-white py-16 px-4 md:px-6 lg:px-8 overflow-hidden flex flex-col items-center justify-center"
    >
      

     

      {/* Obsah - Vertical Timeline */}
      <div className="relative z-30 container mx-auto">
        <h2 className="text-5xl font-bold text-center text-blue-500 mb-12">
          Jak to budeme postupovat?
        </h2>


         {/* Centrální Video */}
      <div className="relative z-20 mb-16 max-w-[800px] w-full mx-auto overflow-hidden rounded-lg shadow-lg">
        <video
          className="w-full h-auto object-cover"
          src="/imgs/chip.webm" // Nahraďte cestu k vašemu video souboru
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/imgs/1920x1080_FULL_HD.webm" type="video/webm" />
          Váš prohlížeč nepodporuje přehrávání videí.
        </video>
      </div>

        <VerticalTimeline lineColor="#3b82f6">
          {steps.map((step, index) => (
            <VerticalTimelineElement
              key={index}
              iconStyle={{ background: "#3b82f6", color: "#fff" }}
              icon={step.icon}
              contentStyle={{
                background: "linear-gradient(to bottom, #1f2937, #111827)",
                color: "#fff",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <span className="block text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
                Krok {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300">{step.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default AiProcessTimeline;
