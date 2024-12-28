"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

// Ikony pro nové skilly
import { FaRobot, FaUsers, FaNetworkWired } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

// Nové skilly
const skills = [
  { name: "AI", value: 99, icon: <FaRobot /> },
  { name: "Figma", value: 80, icon: <SiFigma /> },
  { name: "Sociální sítě", value: 85, icon: <FaNetworkWired /> },
  { name: "HR procesy", value: 75, icon: <FaUsers /> },
];


export default function AboutMe() {
  const bgRef = useRef<HTMLDivElement | null>(null);

  // THREE.js částicové pozadí
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    if (bgRef.current) {
      bgRef.current.appendChild(renderer.domElement);
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

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

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (bgRef.current) {
        bgRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="relative bg-gray-900 text-white flex items-center justify-center px-6 py-16 min-h-screen"
    >
      {/* Kontejner pro částicové pozadí s maskou */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      ></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Levý blok - Text */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            Ing. Martin Andrt
          </h2>
          <p className="text-base lg:text-lg">
            Konzultant a nadšenec do AI, který neustále zkoumá svět digitálních
            technologií a trendů. Od roku 2022 buduji HR oddělení v IT startupu
            Rascasone. Zároveň se podílím na budování strategie a směřování firmy
            v oblasti salesu, marketingu a HR.
          </p>
          <p className="text-base lg:text-lg">
            Usiluji o to, aby byl celý tým součástí rozhodování, a společná
            strategie dávala smysl všem. Co dělám jinak? Vím, jak AI zapadá do
            reálného provozu firmy – nehraju si na vizionáře, prostě hledám
            řešení. Jednám narovinu a lidsky – když něco nejde, řeknu to. Když to
            jde, ukážu jak.
          </p>

          {/* Skill cards (4) - NAD tlačítkem CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>

          {/* CTA tlačítko */}
          <a
            href="#courses"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-200 shadow-lg transform hover:scale-105"
          >
            Více o mně
          </a>
        </div>

        {/* Pravý blok - Obrázek s efekty */}
        <div className="relative lg:w-1/2 flex flex-col items-center">
          {/* Motion koule */}
          <motion.div
            className="absolute w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full opacity-30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Rotující čárky */}
          <motion.div
            className="absolute w-64 h-64 md:w-96 md:h-96 border-[4px] border-dashed rounded-full"
            style={{
              borderColor: "rgba(59, 130, 246, 0.8)",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>

          {/* Profilová fotka */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden z-10">
            <img
              src="/imgs/profil.png" // Cesta k profilové fotce
              alt="Profilová fotka"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hashtagy pod fotkou */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              "#ChatGPT",
              "#Lektor",
              "#AIvHR",
              "#Automatizace",
              "#Konzultace",
            ].map((hashtag, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 bg-blue-900 bg-opacity-30 text-blue-500 rounded-full shadow-md"
                style={{
                  boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
                  border: "1px solid rgba(59, 130, 246, 0.8)",
                }}
              >
                {hashtag}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Komponenta pro jednotlivý skill
function SkillCard({
  skill,
}: {
  skill: { name: string; value: number; icon: React.ReactNode };
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="flex flex-col items-center space-y-4  px-4 py-2 "
    >
      {/* Ikona */}
      <div className="text-4xl text-blue-500">{skill.icon}</div>
      {/* Název dovednosti */}
      <h4 className="text-lg font-medium">{skill.name}</h4>
      {/* Progres bar */}
      <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}
