"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/Landingpage";
import AboutMe from "@/components/Aboutme";
import Aibussines from "@/components/Aibussines";
import AiProcessTimeline from "@/components/AiProcessTimeline";
import AiToolsGrid from "@/components/AiToolsGrid";
import ToolsSection from "@/components/ToolSection";
import BlogSection from "@/components/BlogSection"; // Importujeme BlogSection
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Calculator from "@/components/calculator";

const Page: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Sekce - One Page struktura */}
      <div id="landing" className="snap-start">
        <LandingPage />
      </div>

      <div id="about-me" className="snap-start">
        <AboutMe />
      </div>

      <div id="aibussines" className="snap-start">
        <Aibussines />
      </div>

      <div id="timeline" className="snap-start">
        <AiProcessTimeline />
      </div>

      <div id="calculator" className="snap-start">
        <Calculator />
      </div>

      <div id="contact" className="snap-start">
        <Contact />
      </div>

      <div id="tools" className="snap-start">
        <ToolsSection />
        <AiToolsGrid />
      </div>

      {/* Blog sekce */}
      <div id="blog" className="snap-start">
        <BlogSection />
      </div>

      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
