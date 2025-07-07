"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaPrayingHands, FaLeaf, FaSun, FaHeart, FaBook,
  FaChild, FaHandsHelping, FaBookOpen, FaArrowRight
} from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";

// Service data
const services = [
  {
    icon: <FaPrayingHands className="text-3xl text-yellow-800" />,
    title: "භාවනා සැසි",
    description: "ආතාපි සම්පජානෝ සතිමා",
    link: "/meditation"
  },
  {
    icon: <FaBook className="text-3xl text-yellow-800" />,
    title: "දහම් පාසල",
    description: "ශ්‍රි සුමංගල දහම් පාසල යටතේ තරුණ සිත් පෝෂණය හා සංස්කෘතීන්.",
    link: "/dhamma-school"
  },
  {
    icon: <FaLeaf className="text-3xl text-yellow-800" />,
    title: "ධර්ම දේශන",
    description: "සතිපතා බෞද්ධ දේශනා සහ ප්‍රායෝගික අවබෝධය.",
    link: "/dhamma-talks"
  },
  {
    icon: <FaChild className="text-3xl text-yellow-800" />,
    title: "තරුණ වැඩසටහන්",
    description: "තරුණයින්ට ධර්මය සම්බන්ධයෙන් මනා අවබෝධයක් ලබාදීම.",
    link: "/youth-programs"
  },
  {
    icon: <FaChildren className="text-3xl text-yellow-800" />,
    title: "ළමා වැඩසටහන්",
    description: "දරුවන්ට ආත්මීය සහ සමාජීය හැකියාවන් පෝෂණය.",
    link: "/children-programs"
  },
  {
    icon: <FaSun className="text-3xl text-yellow-800" />,
    title: "පෝය වැඩසටහන්",
    description: "මාසික පොහොය දිනයන්හි විශේෂ වැඩසටහන්.",
    link: "/poya-programs"
  },
  {
    icon: <FaHandsHelping className="text-3xl text-yellow-800" />,
    title: "උපදේශන සේවා",
    description: "මනෝවිද්‍යාත්මක සහ අධ්‍යාත්මික උපදේශන සේවා.",
    link: "/counseling"
  },
  {
    icon: <FaHeart className="text-3xl text-yellow-800" />,
    title: "දානමය කටයුතු",
    description: "දයානුකම්පාව සහ දානය ඇසුරින් සත්කාර්මය.",
    link: "/dana"
  },
  {
    icon: <FaBookOpen className="text-3xl text-yellow-800" />,
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
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function ServiceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-yellow-900 mb-4 tracking-tight">
            අපගේ සේවා
          </h2>
          <div className="w-24 h-1 bg-yellow-700 mx-auto mb-5 rounded-full" />
          <p className="text-lg text-yellow-800 max-w-2xl mx-auto leading-relaxed font-sinhala">
            සර්වකාලීන බෞද්ධ ඉගැන්වීම් හා අධ්‍යාත්මික උපදේශන මග පෙන්වීමක්.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-yellow-300"
            >
              {/* Icon bubble */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 bg-yellow-100 rounded-2xl group-hover:bg-yellow-200 transition duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-yellow-900 text-center mb-2 font-sinhala">
                {service.title}
              </h3>
              <p className="text-yellow-700 text-center font-sinhala mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <div className="text-center">
                <a
                  href={service.link}
                  className="inline-flex items-center text-yellow-800 hover:text-yellow-700 font-medium font-sinhala text-sm transition-transform duration-300"
                >
                  තවත් තොරතුරු
                  <FaArrowRight className="ml-2 text-sm mt-0.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
