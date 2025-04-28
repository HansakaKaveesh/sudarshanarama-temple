"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { FaPrayingHands, FaLeaf, FaSun, FaHeart, FaBook,FaChild,FaHandsHelping,FaBookOpen,FaArrowRight } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";

// Sample service data
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
      icon: <FaChildren className="text-3xl text-yellow-800" />,
      title: "ළමා වැඩසටහන්",
      description: "දරුවන්ගේ බුද්ධිමය, ආත්මීය හා සමාජීය කුසලතා වර්ධනය සඳහා අදාළ වැඩසටහන්",
      link: "/children-programs"
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
      title: "දානමය සහ පුණ්‍යමය කටයුතු",
      description: "ත්‍යාගශීලී පරිත්‍යාග සහ දයානුකම්පිත සේවා ව්‍යාපෘති සඳහා අවස්ථා",
      link: "/dana"
    },
    {
      icon: <FaBookOpen className="text-3xl text-yellow-800" />,
      title: "පුස්තකාල ප්‍රවේශය",
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
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-yellow-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-serif font-extrabold text-yellow-900 mb-4 tracking-wide transform hover:scale-105 transition-transform duration-300">
        අපගේ සේවා
      </h2>
      <motion.div
        className="w-24 h-1 bg-yellow-700 mx-auto mb-6 rounded-full"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      />
      <p className="text-lg text-yellow-800 max-w-2xl mx-auto leading-relaxed font-sinhala hover:text-yellow-900 transition-colors duration-300">
        සර්වකාලීන බෞද්ධ ඉගැන්වීම් සහ අධ්‍යාත්මික මගපෙන්වීම මත පදනම් වූ පරිවර්තනීය භාවිතයන් සහ ප්‍රජා වැඩසටහන් සොයා ගන්න.
      </p>
    </motion.div>

    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-200"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 to-yellow-100/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <motion.div
              className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-5 mx-auto hover:bg-yellow-200 transition-colors duration-300"
              whileHover={{ rotate: 15, scale: 1.1 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-2xl font-bold text-yellow-900 text-center mb-4 font-sinhala">
              {service.title}
            </h3>
            <p className="text-yellow-700 text-center mb-6 leading-relaxed font-sinhala text-md">
              {service.description}
            </p>
            <motion.div
              className="text-center"
              whileHover={{ x: 5 }}
            >
              <a
                href={service.link}
                className="inline-flex items-center text-yellow-800 hover:text-yellow-700 font-medium transition-colors font-sinhala"
              >
                තවත් තොරතුරු
                <FaArrowRight className="ml-2 text-sm mt-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* View All Services Button */}
    <motion.div
      className="text-center mt-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay: 0.4 }}
    >
      <a
        href="/all-services"
        className="inline-block bg-yellow-600 text-white font-sinhala text-lg py-3 px-8 rounded-full hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        සියලුම සේවා බලන්න
      </a>
    </motion.div>
  </div>
</section>

  );
};

export default ServiceSection;