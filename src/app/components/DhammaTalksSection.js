"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FiPlay,
  FiX,
  FiShare2,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

// Raw data
const videos = [
  {
    id: 1,
    title:
      "බිනර පොහොය දින වැදගත්කම් තුලින් බෞද්ධ හා අබෞද්ද ඔබේ දිවියට යමක්....!!!",
    src: "https://www.youtube.com/embed/g5uLqMvySjk?si=nkJ_54F2Lk-N2Uo8",
    link: "https://youtu.be/g5uLqMvySjk?si=nkJ_54F2Lk-N2Uo8",
    ariaLabel: "Binara Full Moon Dhamma Talk",
  },
  {
    id: 2,
    title: "ඉල් පෝය යෙදුන චීවර මාසයේ කුසල් රැස් කරගැනීම",
    src: "https://www.youtube.com/embed/EuvcwnZi0bg?si=exH8q6rLYbA4I_iC",
    link: "https://youtu.be/EuvcwnZi0bg?si=exH8q6rLYbA4I_iC",
    ariaLabel: "Il Full Moon - Kathina Month Talk",
  },
  {
    id: 3,
    title: "2021 උදුවප් පෝය නිමිත්තෙන් නත්තල බුදුදහම හා සාමය",
    src: "https://www.youtube.com/embed/0SyNk3CdGpc?si=qka4PThAsR62frD9",
    link: "https://youtu.be/0SyNk3CdGpc?si=qka4PThAsR62frD9",
    ariaLabel: "Uduwap Full Moon - Dhamma and Peace",
  },
];

// Helpers
function getYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.pathname.startsWith("/embed/")) return u.pathname.split("/embed/")[1].split(/[?&]/)[0];
    return u.searchParams.get("v");
  } catch {
    const m = url.match(/(youtu\.be\/|embed\/|v=)([A-Za-z0-9_-]{11})/);
    return m ? m[2] : null;
  }
}

export default function DhammaTalksSection() {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(null); // index of current video
  const [toast, setToast] = useState("");

  const items = useMemo(
    () =>
      videos
        .map((v) => {
          const ytId = getYouTubeId(v.src) || getYouTubeId(v.link);
          if (!ytId) return null;
          return {
            ...v,
            ytId,
            thumb: `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`,
            embed: `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`,
          };
        })
        .filter(Boolean),
    []
  );

  const nextVideo = () => setActive((prev) => (prev + 1) % items.length);
  const prevVideo = () => setActive((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") nextVideo();
      if (e.key === "ArrowLeft") prevVideo();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items.length]);

  const shareVideo = async (item) => {
    try {
      if (navigator.share) {
        await navigator.share({ title: item.title, url: item.link });
      } else {
        await navigator.clipboard.writeText(item.link);
        setToast("Link copied to clipboard");
        setTimeout(() => setToast(""), 1600);
      }
    } catch {}
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-amber-50 to-white py-20 px-6 md:px-10 lg:px-20">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl"
          animate={shouldReduceMotion ? {} : { y: [0, -16, 0], x: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-yellow-200/40 blur-3xl"
          animate={shouldReduceMotion ? {} : { y: [0, 16, 0], x: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-15 mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(251,191,36,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(251,191,36,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-100/40 px-4 py-1.5 text-amber-800 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span className="text-sm font-medium">Dhamma Series</span>
        </div>
        <h2 className="mt-4 text-4xl md:text-5xl font-serif font-extrabold text-yellow-900 tracking-tight">
          ධර්ම දේශන
        </h2>
        <div className="mx-auto mt-4 mb-5 h-1 w-24 rounded-full bg-yellow-700" />
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-yellow-800 font-sinhala">
          YouTube හි ඉදිරිපත් කරන ලද ප්‍රබෝධදායක සහ සම්මානීය ධර්ම දේශන සොයා බලන්න. <br />
          මෙම වීඩියෝවල බෙදා හරින ලද ප්‍රජා සහ බුද්ධිමත් වචන පිළිබඳ මනනය කරන්න.
        </p>
      </motion.div>

      {/* Video Grid (YouTube-lite previews) */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group relative"
          >
            {/* Gradient frame */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-400/60 via-yellow-200/40 to-amber-700/60 p-[2px] shadow-lg transition-all duration-300 hover:shadow-amber-900/20">
              <div className="relative overflow-hidden rounded-[1rem] bg-white/80 ring-1 ring-amber-900/10 backdrop-blur-sm">
                {/* Poster */}
                <button
                  onClick={() => setActive(index)}
                  className="relative block w-full overflow-hidden"
                  aria-label={`Play video: ${item.title}`}
                >
                  <div className="aspect-video relative">
                    <img
                      src={item.thumb}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-900/40 via-amber-900/10 to-transparent" />
                    {/* Shine sweep */}
                    <motion.div
                      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: "-120%" }}
                      whileHover={shouldReduceMotion ? {} : { x: "220%" }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                    {/* Play button */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <motion.span
                          className="absolute -inset-3 rounded-full bg-amber-300/30 blur-md"
                          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1] }}
                          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-900 text-amber-50 shadow-lg ring-2 ring-amber-200/60 transition-transform group-hover:scale-105">
                          <FiPlay className="h-6 w-6" />
                        </span>
                      </div>
                    </div>
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="line-clamp-2 text-left text-[15px] font-semibold leading-snug text-amber-50">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </button>

                {/* Footer actions */}
                <div className="flex items-center justify-between gap-3 px-5 py-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-600 transition-colors hover:text-red-700"
                    aria-label="Watch on YouTube"
                  >
                    ▶️ Watch on YouTube
                    <FiExternalLink className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => shareVideo(item)}
                    className="inline-flex items-center gap-2 rounded-full bg-amber-100/70 px-3 py-1.5 text-sm text-amber-900 transition-colors hover:bg-amber-200"
                    aria-label="Share video"
                  >
                    <FiShare2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Channel CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-16 text-center"
      >
        <Link
          href="https://www.youtube.com/@dahamimaga-3258"
          target="_blank"
          className="mx-auto inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 text-lg text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-amber-900/30"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
          යූ ටියුබ් නාලිකාව
        </Link>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && items[active] && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setActive(null)}
          >
            <button
              className="absolute right-6 top-6 z-50 text-amber-50 transition-colors hover:text-amber-200"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              <FiX className="h-8 w-8" />
            </button>

            {/* Prev/Next */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-amber-50 backdrop-blur-sm transition hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                prevVideo();
              }}
              aria-label="Previous video"
            >
              <FiChevronLeft className="h-8 w-8" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-amber-50 backdrop-blur-sm transition hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                nextVideo();
              }}
              aria-label="Next video"
            >
              <FiChevronRight className="h-8 w-8" />
            </button>

            <motion.div
              key={items[active].ytId}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={items[active].embed}
                  title={items[active].ariaLabel || items[active].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 text-center text-amber-50">
                <div className="mx-auto max-w-3xl text-balance text-lg leading-snug">
                  {items[active].title}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-black/80 px-4 py-2 text-sm text-amber-50 backdrop-blur"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}