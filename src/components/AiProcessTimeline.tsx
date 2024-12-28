"use client";


import React, { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaLightbulb, FaDatabase, FaTools, FaRocket, FaChartLine } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

const steps = [
  {
    title: "Zavoláme si",
    description: "Spojíme se, seznámíme se a pobavíme se o tom, jak to u vás funguje.",
    icon: <FaLightbulb />,
  },
  {
    title: "Teď je to na mně",
    description:
      "Po úvodním meetingu připravím návrhy a konkrétní kroky, jak AI postupně začlenit do praxe. Zároveň se u vás spojím s lidmi, kteří by měli AI začít využívat ve své agendě.",
    icon: <FaDatabase />,
  },
  {
    title: "Strategie",
    description:
      "Znovu se spojíme a domluvíme si cíle, a kam se v AI chcete posunout. Podle toho společně vybereme nástroje, které se budou využívat.",
    icon: <FaTools />,
  },
  {
    title: "Implementace a testování",
    description:
      "Po výběru nástrojů a praktik se pouštíme do práce. V průběhu testování nástrojů jsem bok po boku těm, kteří je využívají.",
    icon: <FaRocket />,
  },
  {
    title: "Monitoring a optimalizace",
    description:
      "Sleduji, jak se daří využívat AI nástroje v praxi, a zda jsou výsledky v souladu s očekáváními. Pokud ne, společně upravujeme strategii využití AI nástrojů.",
    icon: <FaChartLine />,
  },
];

const AiProcessTimeline: React.FC = () => {
  return (
    <section
      id="consulting"
      className="relative bg-gray-900 text-white py-16 px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center"
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
            src="/imgs/chip.webm"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/imgs/1920x1080_FULL_HD.webm" type="video/webm" />
            Váš prohlížeč nepodporuje přehrávání videí.
          </video>
        </div>

        {/* Vertical Timeline */}
        <VerticalTimeline
          lineColor="#3b82f6" // Modrá čára – explicitní definice
          className="relative z-40"
        >
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
              contentArrowStyle={{ borderRight: "7px solid #1f2937" }} // Přizpůsobení šipky
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
