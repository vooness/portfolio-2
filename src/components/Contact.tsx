"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
// 1) Import bílých ikon z React Icons (fa)
import { FaRegLightbulb, FaChartBar, FaRobot } from "react-icons/fa";

const ContactForm: React.FC = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    // Inicializace scény, kamery a rendereru
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      bgRef.current.clientWidth / bgRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(bgRef.current.clientWidth, bgRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    bgRef.current.appendChild(renderer.domElement);

    // Vytvoření geometrie částic
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.05,
      transparent: true,
      opacity: 0.5,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animace
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Ošetření změny velikosti okna
    const handleResize = () => {
      if (bgRef.current) {
        camera.aspect = bgRef.current.clientWidth / bgRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(bgRef.current.clientWidth, bgRef.current.clientHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    // Čištění při odmontování komponenty
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (bgRef.current) {
        bgRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className="relative bg-gray-900 text-white py-20 px-6 min-h-screen flex items-center justify-center">
      {/* Kontejner pro animované pozadí */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      ></div>

      {/* Obsah formuláře */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Levá strana: Obsah */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-blue-500">
            AI: Kolega, co nechodí na kafe.
          </h2>
          <p className="text-gray-400">
            AI není o tom, že by nás měla nahradit, ale krýt záda. Ušetřit čas, poradit a
            inspirovat. Žádné složitosti, žádné přednášky – jen praktická pomoc, která tu bude 24/7.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                {/* 2) Nahrazeno FaRegLightbulb ikonou  */}
                <FaRegLightbulb className="text-white" />
              </span>
              <span>Strategie implementace AI</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                {/* 3) Nahrazeno FaChartBar ikonou */}
                <FaChartBar className="text-white" />
              </span>
              <span>Kreativní využití AI</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                {/* 4) Nahrazeno FaRobot ikonou */}
                <FaRobot className="text-white" />
              </span>
              <span>Automatizace úkolů s AI</span>
            </li>
          </ul>
        </div>

        {/* Pravá strana: Formulář */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-5xl font-bold mb-6 text-white">Spojíme se?</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Jméno
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 text-sm bg-gray-900 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Vaše jméno"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Příjmení
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 text-sm bg-gray-900 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Vaše příjmení"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Telefon
              </label>
              <input
                type="text"
                id="phone"
                className="w-full px-4 py-3 text-sm bg-gray-900 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Váš telefon"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Zpráva
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 text-sm bg-gray-900 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Popište svůj projekt nebo potřeby"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-md hover:opacity-90 transition duration-300"
            >
              Odeslat zprávu
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
