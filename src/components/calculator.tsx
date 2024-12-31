"use client";

import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registrace modulů z chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

/**
 * 10 příkladů využití AI s teoretickou hodnotou (hoursBefore) a "ušetřeným" časem (improvementFactor),
 * vše v češtině (včetně HR).
 */
const tasks = [
  {
    name: "E-mailové shrnutí",
    hoursBefore: 2,
    improvementFactor: 0.5,
    popis: "Automatizované shrnutí e-mailů pomocí AI.",
  },
  {
    name: "Chatbot pro podporu",
    hoursBefore: 5,
    improvementFactor: 0.6,
    popis: "AI chatbot pro zodpovídání dotazů zákazníků 24/7.",
  },
  {
    name: "Tvorba obsahu (blogy, marketing)",
    hoursBefore: 6,
    improvementFactor: 0.5,
    popis: "Generování textů pro marketingové kampaně či články.",
  },
  {
    name: "Analýza dat a reporting",
    hoursBefore: 4,
    improvementFactor: 0.4,
    popis: "Automatické vyhodnocení dat a tvorba přehledů.",
  },
  {
    name: "Zpracování dokumentů",
    hoursBefore: 3,
    improvementFactor: 0.5,
    popis: "Shrnutí dlouhých PDF, vyhledávání klíčových informací.",
  },
  {
    name: "HR: Třídění životopisů",
    hoursBefore: 4,
    improvementFactor: 0.5,
    popis: "Automatizovaná selekce uchazečů podle klíčových slov.",
  },
  {
    name: "HR: Návrh pohovorových otázek",
    hoursBefore: 2,
    improvementFactor: 0.4,
    popis: "Generování otázek pro různé pracovní pozice.",
  },
  {
    name: "Přepisy / Shrnutí meetingů",
    hoursBefore: 3,
    improvementFactor: 0.5,
    popis: "Automatické zápisy z porad a analýza úkolů.",
  },
  {
    name: "Kontrola kvality textů",
    hoursBefore: 2,
    improvementFactor: 0.5,
    popis: "Gramatické a stylistické revize textů pomocí AI.",
  },
  {
    name: "Rychlý průzkum / rešerše",
    hoursBefore: 3,
    improvementFactor: 0.5,
    popis: "Vyhledávání informací a trendů z webu či interních zdrojů.",
  },
];

export default function CalculatorAI() {
  const [employees, setEmployees] = useState<number>(15);

  // Vypočítáme "před AI" / "po AI"
  const totalBeforeArray = tasks.map(
    (task) => task.hoursBefore * employees
  );
  const totalAfterArray = tasks.map(
    (task) => task.hoursBefore * task.improvementFactor * employees
  );

  const sumBefore = totalBeforeArray.reduce((acc, val) => acc + val, 0);
  const sumAfter = totalAfterArray.reduce((acc, val) => acc + val, 0);

  // Data pro graf
  const data = {
    labels: tasks.map((t) => t.name),
    datasets: [
      {
        label: "Before AI",
        data: totalBeforeArray,
        backgroundColor: "#3B82F6", // Tailwind modrá
      },
      {
        label: "After AI",
        data: totalAfterArray,
        backgroundColor: "#7DD3FC", // Tailwind světlejší modrá
      },
    ],
  };

  // Nastavení grafu (tmavé pozadí, bílé popisky)
  const options = {
    responsive: true,
    maintainAspectRatio: false as const,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        ticks: {
          color: "#ffffff",
        },
      },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-[#0f172a] py-10">
      <div className="mx-auto max-w-6xl text-white px-4">
      <h2 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 items-center mb-6   text-center">
          Kalkulačka úspor s AI
          </h2>

        {/* SLIDER - moderněji pojatý, s popiskem hned vedle */}
        <div className="flex flex-col items-center mb-6">
          <label className="text-lg font-semibold mb-2">
            Počet zaměstnanců: {employees}
          </label>
          <input
            type="range"
            min={1}
            max={200}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="slider" // Pozor na className slider (viz styl níže)
          />
          <p className="text-sm text-gray-400 mt-2">
            Přetáhněte posuvník pro úpravu počtu zaměstnanců
          </p>
        </div>

        {/* VÝSLEDKY hned pod sliderem */}
        <div className="text-center mb-8">
          <p className="text-xl mb-1">
            <strong>Before AI (celkem):</strong> {sumBefore.toFixed(0)} hodin/týden
          </p>
          <p className="text-xl mb-1">
            <strong>After AI (celkem):</strong> {sumAfter.toFixed(0)} hodin/týden
          </p>
          <p className="text-xl mt-2 text-green-400 font-bold">
            Úspora času: {(sumBefore - sumAfter).toFixed(0)} hodin týdně
          </p>
        </div>

        {/* Kontejner pro graf */}
        <div className="relative w-full h-[400px] md:h-[500px] mb-8">
          <Bar data={data} options={options} />
        </div>

        

        {/* Drobný disclaimers */}
        <p className="text-xs text-gray-400 text-center">
          *Tato kalkulačka je pouze teoretická. Skutečné úspory závisí na
          konkrétních podmínkách vaší firmy a na typu nasazené AI.
        </p>
      </div>

      {/* Vložený styl pro náš „moderní“ slider */}
      <style jsx>{`
        .slider {
          -webkit-appearance: none;
          appearance: none;
          width: 75%;
          height: 6px;
          background: #374151; /* Tailwind gray-700 */
          outline: none;
          border-radius: 3px;
          transition: background 0.3s ease-in-out;
          cursor: pointer;
        }
        .slider:hover {
          background: #4b5563; /* Tailwind gray-600 */
        }
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          background: #3b82f6; /* Tailwind blue-500 */
          border-radius: 50%;
          box-shadow: 0 0 0 3px #7dd3fc55;
          transition: transform 0.2s ease-in-out;
        }
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        .slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background: #3b82f6;
          border: none;
          border-radius: 50%;
          transition: transform 0.2s ease-in-out;
        }
        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
