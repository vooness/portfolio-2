"use client";

import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Words to cycle through
  const words = [
    "Umělou Inteligenci",
   
    "Datovou Analýzu",
    "Automatizaci Procesů",
    "Moderní Technologie",
  ];

  // Cycle through words with smooth animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1000); // Matches animation duration (1s)
    }, 4000); // Change word every 4 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [words.length]);

  return (
    <section className="relative h-screen text-white flex items-center justify-center px-4">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/imgs/bg.webm" // Replace with your video path
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 space-y-6 max-w-3xl mx-auto text-left md:text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="whitespace-nowrap">Naučte se</span>{" "}
          <span
            className={`text-blue-500 transition-opacity duration-1000 ease-in-out inline-block min-h-[2.5rem]`}
          >
            <span
              className={`block ${
                animate ? "opacity-0" : "opacity-100"
              } transition-opacity duration-1000 ease-in-out`}
            >
              {words[currentWordIndex]}
            </span>
          </span>{" "}
          <span className="hidden md:inline whitespace-nowrap">s expertem</span>
          <span className="block md:hidden">s expertem</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg opacity-100 max-w-2xl mx-auto">
          Pomůžu vám pochopit, jak funguje umělá inteligence, a naučím vás, jak ji aplikovat ve vašem podnikání, abyste zůstali o krok před konkurencí.
        </p>

        {/* Buttons */}
        <div className="flex justify-start md:justify-center space-x-4">
          <a
            href="#ai-skoleni"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-200 shadow-lg transform hover:scale-105"
          >
            Více o AI Školení
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
