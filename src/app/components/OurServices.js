"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { FaPrayingHands, FaLeaf, FaSun, FaHeart, FaBook,FaChild,FaHandsHelping,FaBookOpen,FaMountain,FaHandHoldingHeart,FaMusic,FaCalendarDay,FaArrowRight } from "react-icons/fa";

// Sample service data
const services = [

    {
      icon: <FaPrayingHands className="text-3xl text-yellow-800" />,
      title: "භාවනා සැසි",
      description: "සිහිය සහ අභ්‍යන්තර සාමය වර්ධනය කිරීම සඳහා දිනපතා මඟ පෙන්වන භාවනා පිළිවෙත්",
      link: "/meditation"
    },
    {
      icon: <FaBook className="text-3xl text-yellow-800" />,
      title: "දහම් පාසල",
      description: "ශ්‍රි සුමංගල දහම් පාසලේ ප්‍රවීණත්වය යටතේ දහස් සංඛ්‍යාත තරුණ සිත් පෝෂණය හා සංස්කෘතීන් කෙරේ.",
      link: "/dhamma-school"
    },
    {
      icon: <FaLeaf className="text-3xl text-yellow-800" />,
      title: "ධර්ම දේශන",
      description: "සතිපතා බෞද්ධ ඉගැන්වීම් සහ ප්‍රායෝගික ජීවිතයේ යෙදීම් පිළිබඳ දේශන",
      link: "/dhamma-talks"
    },
    {
      icon: <FaChild className="text-3xl text-yellow-800" />,
      title: "තරුණ වැඩසටහන්",
      description: "තරුණ වැඩිහිටියන්ට ධර්මය හා සම්බන්ධ වීමට ක්‍රියාකාරකම් සහ සාකච්ඡා කිරීම",
      link: "/youth-programs"
    },
    {
      icon: <FaSun className="text-3xl text-yellow-800" />,
      title: "පෝය වැඩසටහන්",
      description: "අපගේ විහාරස්ථානයේ මාසික පොහොය වැඩසටහන් ඔබේ මනසට උපරිම සාමකාමී බව සහතික කිරීම සඳහා ප්රවේශමෙන් සැලසුම් කර ඇති සාර්ථක උත්සවයකි",
      link: "/poya-programs"
    },
    {
      icon: <FaHandsHelping className="text-3xl text-yellow-800" />,
      title: "උපදේශන සේවා",
      description: "බෞද්ධ මනෝවිද්‍යාව මත පදනම් වූ අධ්‍යාත්මික මග පෙන්වීම සහ උපදේශනය",
      link: "/counseling"
    },
    {
      icon: <FaHeart className="text-3xl text-yellow-800" />,
      title: "දාන සහ පුණ්‍ය කටයුතු",
      description: "ත්‍යාගශීලී පරිත්‍යාග සහ දයානුකම්පිත සේවා ව්‍යාපෘති සඳහා අවස්ථා",
      link: "/dana"
    },
    {
      icon: <FaBookOpen className="text-3xl text-yellow-800" />,
      title: "පුස්තකාල ප්රවේශය",
      description: "බෞද්ධ සාහිත්‍ය සහ ඩිජිටල් සම්පත් පුළුල් එකතුව",
      link: "/library"
    },
    
  ];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-serif font-extrabold text-yellow-900 mb-4 tracking-wide">
          අපගේ සේවා
          </h2>
          <div className="w-24 h-1 bg-yellow-700 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-yellow-800 max-w-2xl mx-auto leading-relaxed">
          සදාකාලික බෞද්ධ ඉගැන්වීම් සහ අධ්‍යාත්මික මගපෙන්වීම මත පදනම් වූ පරිවර්තනීය භාවිතයන් සහ ප්‍රජා වැඩසටහන් සොයා ගන්න.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-yellow-100 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-200 rounded-full mb-5 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-yellow-900 text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-yellow-700 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-center">
                  <a
                    href={service.link}
                    className="inline-flex items-center text-yellow-800 hover:text-yellow-700 font-medium transition-colors"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-sm" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  );
};

export default ServiceSection;