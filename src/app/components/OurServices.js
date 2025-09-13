"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaPrayingHands, FaLeaf, FaSun, FaHeart, FaBook,
  FaChild, FaHandsHelping, FaBookOpen, FaArrowRight
} from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";

// Service data
const services = [
  {
    icon: <FaPrayingHands className="text-3xl text-amber-800" />,
    title: "භාවනා සැසි",
    description: "ආතාපි සම්පජානෝ සතිමා",
    link: "/meditation"
  },
  {
    icon: <FaBook className="text-3xl text-amber-800" />,
    title: "දහම් පාසල",
    description: "ශ්‍රි සුමංගල දහම් පාසල යටතේ තරුණ සිත් පෝෂණය හා සංස්කෘතීන්.",
    link: "/dhamma-school"
  },
  {
    icon: <FaLeaf className="text-3xl text-amber-800" />,
    title: "ධර්ම දේශන",
    description: "සතිපතා බෞද්ධ දේශනා සහ ප්‍රායෝගික අවබෝධය.",
    link: "/dhamma-talks"
  },
  {
    icon: <FaChild className="text-3xl text-amber-800" />,
    title: "තරුණ වැඩසටහන්",
    description: "තරුණයින්ට ධර්මය සම්බන්ධයෙන් මනා අවබෝධයක් ලබාදීම.",
    link: "/youth-programs"
  },
  {
    icon: <FaChildren className="text-3xl text-amber-800" />,
    title: "ළමා වැඩසටහන්",
    description: "දරුවන්ට ආත්මීය සහ සමාජීය හැකියාවන් පෝෂණය.",
    link: "/children-programs"
  },
  {
    icon: <FaSun className="text-3xl text-amber-800" />,
    title: "පෝය වැඩසටහන්",
    description: "මාසික පොහොය දිනයන්හි විශේෂ වැඩසටහන්.",
    link: "/poya-programs"
  },
  {
    icon: <FaHandsHelping className="text-3xl text-amber-800" />,
    title: "උපදේශන සේවා",
    description: "මනෝවිද්‍යාත්මක සහ අධ්‍යාත්මික උපදේශන සේවා.",
    link: "/counseling"
  },
  {
    icon: <FaHeart className="text-3xl text-amber-800" />,
    title: "දානමය කටයුතු",
    description: "දයානුකම්පාව සහ දානය ඇසුරින් සත්කාර්මය.",
    link: "/dana"
  },
  {
    icon: <FaBookOpen className="text-3xl text-amber-800" />,
    title: "පුස්තකාලය",
    description: "බෞද්ධ සාහිත්‍යය සහ ඩිජිටල් සම්පත් එකතුවක්.",
    link: "/library"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export default function ServiceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-yellow-50 to-white py-20">
      {/* Ambient background: soft orbs + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-yellow-200/40 blur-3xl"
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(251,191,36,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(251,191,36,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-100/40 px-4 py-1.5 text-amber-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="text-sm font-medium">Our Offerings</span>
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent">
              අපගේ සේවා
            </span>
          </h2>
          <div className="mx-auto mt-4 mb-5 h-1 w-24 rounded-full bg-amber-700" />
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-amber-800/90 font-sinhala">
            සර්වකාලීන බෞද්ධ ඉගැන්වීම් හා අධ්‍යාත්මික උපදේශන මග පෙන්වීමක්.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              whileHover={{ y: -6 }}
              className="group relative"
              tabIndex={0}
            >
              {/* Glow under card */}
              <div className="absolute -inset-x-4 -bottom-4 h-12 rounded-full bg-amber-400/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Gradient frame */}
              <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-amber-400/60 via-yellow-200/40 to-amber-700/60 shadow-lg">
                {/* Inner card */}
                <div className="relative h-full rounded-[calc(1.5rem-2px)] bg-white/80 backdrop-blur-sm border border-amber-900/10 p-8 shadow-inner transition-all duration-300 group-hover:shadow-amber-900/10">
                  {/* Shine sweep */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-[calc(1.5rem-2px)]"
                    initial={{ backgroundPosition: "-200% 0%" }}
                    whileHover={{ backgroundPosition: "200% 0%" }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                    style={{
                      backgroundImage:
                        "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 70%)",
                      backgroundSize: "200% 100%"
                    }}
                  />

                  {/* Icon bubble */}
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 ring-1 ring-amber-900/10 shadow-sm transition-all duration-300 group-hover:bg-amber-100 group-hover:shadow-md">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-center text-xl font-bold text-amber-900 font-sinhala">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-center text-sm leading-relaxed text-amber-700 font-sinhala">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="text-center">
                    <a
                      href={service.link}
                      aria-label={`තවත් තොරතුරු - ${service.title}`}
                      className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-700 font-medium font-sinhala text-sm transition-transform duration-300"
                    >
                      තවත් තොරතුරු
                      <FaArrowRight className="mt-0.5 text-sm transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                  {/* Corner flourish */}
                  <div className="pointer-events-none absolute inset-0 rounded-[calc(1.5rem-2px)] ring-1 ring-inset ring-amber-900/5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}