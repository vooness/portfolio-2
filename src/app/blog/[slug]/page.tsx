"use client";

import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Ukázková data článků (pro simulaci reálných dat)
const blogPosts = [
  {
    title: "AI šetří desítky hodin měsíčně",
    image: "/imgs/blog1.jpg",
    content: "Tento článek se věnuje tomu, jak umělá inteligence ovlivňuje pracovní trh...",
    slug: "jak-ai-meni-trh-prace",
  },
  {
    title: "Nejnovější trendy v AI nástrojích",
    image: "/imgs/blog2.jpg",
    content: "Přečtěte si o nejnovějších AI technologiích a jak mohou zlepšit vaši práci.",
    slug: "nejnovejsi-trendy",
  },
  {
    title: "Jak začít s datovou analýzou",
    image: "/imgs/blog3.jpg",
    content: "Průvodce základy datové analýzy a jak s ní začít.",
    slug: "jak-zacit-s-analyzou",
  },
];

const BlogDetail: React.FC = () => {
  const { slug } = useParams(); // Dynamicky získáme slug z URL
  const post = blogPosts.find((p) => p.slug === slug); // Najdeme článek podle slug

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Článek nenalezen</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Obsah článku */}
      <main className="flex-grow container mx-auto px-6 py-16">
      <div className="mt-8">
          <a
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition mt-12"
          >
            Zpět na články
          </a>
        </div>
        <h1 className="text-5xl font-bold text-blue-500 mb-6 text-center">
          {post.title}
        </h1>
        <div className="relative h-64 w-full mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <p className="text-lg text-gray-300 leading-relaxed">{post.content}</p>
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogDetail;
