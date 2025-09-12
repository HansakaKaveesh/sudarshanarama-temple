"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

// Shimmer blur placeholder
const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#E5E7EB" offset="20%" />
        <stop stop-color="#F3F4F6" offset="50%" />
        <stop stop-color="#E5E7EB" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#E5E7EB" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>
`;
const toBase64 = (str) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Build counts for pills
  const counts = useMemo(() => {
    const map = images.reduce((acc, img) => {
      acc[img.category] = (acc[img.category] || 0) + 1;
      return acc;
    }, {});
    return {
      All: images.length,
      ...categories.reduce((acc, c) => {
        if (c !== "All") acc[c] = map[c] || 0;
        return acc;
      }, {}),
    };
  }, []);

  // Filtered images
  const filteredImages = useMemo(() => {
    const base = activeCategory === "All" ? images : images.filter((i) => i.category === activeCategory);
    if (!query.trim()) return base;
    const q = query.toLowerCase();
    return base.filter((i, idx) => {
      const alt = `${i.category} ${idx + 1}`;
      return i.src.toLowerCase().includes(q) || alt.toLowerCase().includes(q);
    });
  }, [activeCategory, query]);

  const currentImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  // Keyboard and scroll lock for lightbox
  const closeBtnRef = useRef(null);
  useEffect(() => {
    if (selectedIndex === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") setSelectedIndex((i) => (i + 1) % filteredImages.length);
      if (e.key === "ArrowLeft")
        setSelectedIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);
    };

    document.addEventListener("keydown", onKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 0);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
      clearTimeout(t);
    };
  }, [selectedIndex, filteredImages.length]);

  // Adjust selected index if filter changes
  useEffect(() => {
    if (selectedIndex !== null && selectedIndex >= filteredImages.length) {
      setSelectedIndex(filteredImages.length ? 0 : null);
    }
  }, [filteredImages.length, selectedIndex]);

  return (
    <section className="bg-white">
      {/* Header */}
      <div
        className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] bg-cover bg-center group transition-all duration-500"
        style={{
          backgroundImage: "url('/unnamed (1).jpg')",
          backgroundPosition: "center 40%",
        }}
        aria-label="Dhamma School Header"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-white/60 to-white/95 flex flex-col items-center justify-center text-center p-4 md:p-8">
          <div className="space-y-3 transform group-hover:scale-[.98] transition-transform duration-500">
            <h1 className="mt-20 md:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 drop-shadow">
              Photo Gallery
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Explore moments from our Temple, Dhamma School, and community events.
            </p>
          </div>
        </div>
      </div>

      {/* Toolbar: Filters + Search */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            {/* Pills */}
            <div
              className="flex gap-2 overflow-x-auto pb-1"
              role="tablist"
              aria-label="Filter categories"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat)}
                    className={[
                      "whitespace-nowrap relative px-3.5 py-2 rounded-full transition-all duration-200 text-sm flex items-center gap-2 border",
                      isActive
                        ? "bg-yellow-100 text-yellow-800 border-yellow-300 shadow-sm"
                        : "bg-white text-gray-700 hover:text-yellow-700 hover:border-yellow-300 border-gray-200",
                    ].join(" ")}
                  >
                    <span>{cat}</span>
                    <span
                      className={[
                        "inline-flex items-center justify-center rounded-full text-[11px] px-1.5 min-w-[1.25rem] h-5",
                        isActive ? "bg-yellow-200 text-yellow-900" : "bg-gray-100 text-gray-600",
                      ].join(" ")}
                    >
                      {counts[cat] ?? 0}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search photos..."
                className="w-full rounded-full border border-gray-200 bg-white/80 px-10 py-2 text-sm text-gray-800 shadow-sm outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                aria-label="Search photos"
              />
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔎
              </span>
              {query && (
                <button
                  aria-label="Clear search"
                  onClick={() => setQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {filteredImages.length === 0 ? (
          <div className="py-20 text-center text-gray-500">
            <p className="text-lg">No photos found.</p>
            <p className="text-sm mt-1">Try a different category or search term.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 py-6 sm:py-10 space-y-4">
            {filteredImages.map((img, idx) => (
              <button
                key={img.src + idx}
                className="relative w-full overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                onClick={() => setSelectedIndex(idx)}
                aria-label={`Open image ${idx + 1} in lightbox`}
              >
                <Image
                  src={img.src}
                  alt={`${img.category} ${idx + 1}`}
                  width={800}
                  height={540}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03] select-none"
                  draggable={false}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 540))}`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="pointer-events-none absolute bottom-2 left-2 right-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-medium text-white/90 bg-black/40 px-2 py-1 rounded">
                    {img.category}
                  </span>
                  <span className="text-[10px] text-white/80 bg-black/30 px-1.5 py-0.5 rounded">
                    Click to view
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {currentImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-full text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Nav arrows */}
            {filteredImages.length > 1 && (
              <>
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center"
                  onClick={() =>
                    setSelectedIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length)
                  }
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center"
                  onClick={() => setSelectedIndex((i) => (i + 1) % filteredImages.length)}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            <div className="relative">
              <Image
                src={currentImage.src}
                alt={`Enlarged ${currentImage.category}`}
                width={1600}
                height={1067}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                sizes="100vw"
                draggable={false}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1600, 1067))}`}
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90 text-xs">
                <span className="bg-white/10 backdrop-blur px-2 py-1 rounded">
                  {currentImage.category}
                </span>
                <a
                  href={currentImage.src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 px-2 py-1 rounded"
                  aria-label="Open image in new tab"
                  title="Open original"
                >
                  Open original ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}