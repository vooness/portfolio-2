"use client";

import React from "react";
import Slider from "react-slick";

type BlogPost = {
  title: string;
  image: string;
  excerpt: string;
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Jak AI mění trh práce",
    image: "/imgs/blog1.jpg",
    excerpt:
      "Ponořte se do světa umělé inteligence a objevte, jak ovlivňuje nábor, vzdělávání a pracovní procesy.",
    link: "/blog/jak-ai-meni-trh-prace",
  },
  {
    title: "Nejnovější trendy v AI nástrojích",
    image: "/imgs/blog2.jpg",
    excerpt:
      "Prozkoumejte nejnovější technologie a platformy, které usnadňují implementaci AI ve firmách.",
    link: "/blog/nejnovejsi-trendy",
  },
  {
    title: "Jak začít s datovou analýzou",
    image: "/imgs/blog3.jpg",
    excerpt:
      "Základy datové analýzy, které vám pomohou lépe porozumět svým datům a dělat informovaná rozhodnutí.",
    link: "/blog/jak-zacit-s-analyzou",
  },
  {
    title: "Automatizace procesů v praxi",
    image: "/imgs/blog4.jpg",
    excerpt:
      "Příklady úspěšné automatizace firemních procesů, které šetří čas a peníze.",
    link: "/blog/automatizace-v-praxi",
  },
  {
    title: "Ethika a zodpovědnost v AI",
    image: "/imgs/blog5.jpg",
    excerpt:
      "Jak zajistit, aby vaše AI řešení byla etická, transparentní a spravedlivá.",
    link: "/blog/etika-a-ai",
  },
];

const BlogSection: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-blue-500 mb-12">
          Články a novinky
        </h2>
        <Slider {...sliderSettings}>
          {blogPosts.map((post, index) => (
            <div key={index} className="p-4">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm flex-grow mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.link}
                    className="inline-block bg-blue-500 text-white px-5 py-2 rounded-full text-center font-bold hover:bg-blue-600 transition-colors"
                  >
                    Číst více
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogSection;
