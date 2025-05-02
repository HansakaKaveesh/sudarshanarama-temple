"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Temple",
  "Dhamma School",
  "Perahara",
  
  "Sculptures",
  "Wibhishana Devalaya",
];

const images = [
  { src: "/gallery/temple/01.jpg", category: "Temple" },
  { src: "/gallery/temple/02.jpg", category: "Temple" },
  { src: "/gallery/temple/03.jpg", category: "Temple" },
  { src: "/gallery/temple/04.jpg", category: "Temple" },
  { src: "/gallery/temple/05.jpg", category: "Temple" },
  { src: "/gallery/temple/06.jpg", category: "Temple" },
  
  { src: "/gallery/school/01.jpg", category: "Dhamma School" },
  { src: "/gallery/school/02.jpg", category: "Dhamma School" },
  { src: "/gallery/school/03.jpg", category: "Dhamma School" },
  { src: "/gallery/school/04.jpg", category: "Dhamma School" },
  { src: "/gallery/school/05.jpg", category: "Dhamma School" },
  { src: "/gallery/school/06.jpg", category: "Dhamma School" },
  { src: "/gallery/school/07.jpg", category: "Dhamma School" },
  { src: "/gallery/school/08.jpg", category: "Dhamma School" },
  { src: "/gallery/school/09.jpg", category: "Dhamma School" },
  { src: "/gallery/school/10.jpg", category: "Dhamma School" },
  { src: "/gallery/school/11.jpg", category: "Dhamma School" },
  { src: "/gallery/school/12.jpg", category: "Dhamma School" },
  { src: "/gallery/school/13.jpg", category: "Dhamma School" },
  { src: "/gallery/school/14.jpg", category: "Dhamma School" },
  { src: "/gallery/school/15.jpg", category: "Dhamma School" },
  { src: "/gallery/school/16.jpg", category: "Dhamma School" },
  { src: "/gallery/school/17.jpg", category: "Dhamma School" },
  { src: "/gallery/school/18.jpg", category: "Dhamma School" },
 
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null); // ✅ JavaScript syntax


  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section className="bg-white py-0 px-0 max-w-full mx-auto">
      {/* Header */}
      <div
        className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] bg-cover bg-center group transition-all duration-500"
        style={{ backgroundImage: "url('/unnamed (1).jpg')", backgroundPosition: "center 40%" }}
        aria-label="Dhamma School Header"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white/90 flex flex-col items-center justify-center text-center p-4 md:p-8">
          <div className="space-y-4 transform group-hover:scale-95 transition-transform duration-500">
            <h1 className="mt-24 md:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter drop-shadow-md">
              Photo Gallery 
            </h1>
          </div>
        </div>
      </div>

      {/* Filter Menu */}
      <div className="flex flex-wrap gap-4 justify-center border-b text-sm font-medium mt-6 px-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-4 py-2 transition-all duration-300 ease-in-out rounded-lg flex items-center justify-center ${
              activeCategory === cat
                ? "text-yellow-600 font-semibold bg-yellow-200 border-b-2 border-yellow-600 shadow-lg"
                : "text-gray-600 hover:text-yellow-600 hover:bg-yellow-50"
            }`}
          >
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-600 transition-all duration-300 ease-in-out ${
                activeCategory === cat ? "block" : "hidden"
              }`}
            ></span>
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 px-10 py-10">
        {filteredImages.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded cursor-pointer" onClick={() => setSelectedImage(img.src)}>
            <Image
              src={img.src}
              alt={`Gallery ${idx}`}
              width={600}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Popup (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 bg-opacity-70 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full p-4" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full z-10"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
