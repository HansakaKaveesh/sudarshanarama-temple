'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTransform, useScroll } from 'framer-motion';
import { FiChevronDown, FiArrowRight, FiMapPin, FiCalendar } from 'react-icons/fi';
import { GiLotus, GiStoneBlock } from 'react-icons/gi';
import Image from 'next/image';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const floatingLotuses = [
    { id: 1, top: '15%', left: '5%', size: 'text-6xl', delay: 0.2 },
    { id: 2, top: '70%', left: '85%', size: 'text-5xl', delay: 0.5 },
    { id: 3, top: '40%', left: '20%', size: 'text-7xl', delay: 0.8 },
  ];

  const images = [
    '/hero.jpg',
    '/2023-06-01 (1).jpg',
    '/footer.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per image
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image slider */}
      <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt="Hero background"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
              priority
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Gradient overlay */}
      <motion.div className="absolute inset-0 z-1" style={{ y: y2 }}>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
      </motion.div>

      {/* Floating lotuses */}
      {floatingLotuses.map((lotus) => (
        <motion.div
          key={lotus.id}
          className={`absolute ${lotus.size} text-amber-200/30 z-20`}
          style={{ top: lotus.top, left: lotus.left }}
          initial={{ y: -20, rotate: -15 }}
          animate={{ y: 20, rotate: 15 }}
          transition={{
            duration: 4,
            delay: lotus.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <GiLotus />
        </motion.div>
      ))}

      {/* Stone overlay */}
      <div className="absolute inset-0 z-10 opacity-20 mix-blend-soft-light">
        <GiStoneBlock className="w-full h-full text-stone-800" />
      </div>

      {/* Main content */}
      <div className="relative z-30 text-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center justify-center gap-2 text-yellow-100/80"
          >
            <FiMapPin className="w-5 h-5" />
            <span className="font-medium tracking-wide">Kalapaluwawa, Sri Lanka</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 px-4 font-sinhala"
          >
            <span className="block font-medium text-amber-200 mt-2">
              ශ්‍රී සුදර්ශනාරාම පුරාණ මහා විහාරය
            </span>
            <span className="block text-3xl md:text-5xl font-medium text-amber-100/95 mt-2">
              කලපලුවාව
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-amber-50/95 mb-8 max-w-2xl mx-auto leading-relaxed font-serif relative py-4"
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-amber-200/30 " />
            ධම්මය සමඟ ඒකාබද්ධව 1855 සිට
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-amber-200/30" />
          </motion.p>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-amber-300/90 hover:bg-amber-200 text-stone-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-300/20 flex items-center gap-2 mx-auto overflow-hidden"
            >
              <span className="relative z-10">අපේ උරුමය ගවේෂණය කරන්න</span>
              <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-amber-100/50 to-transparent animate-shine" />
              </div>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-amber-200/30 bg-gradient-to-r from-amber-400/10 to-amber-200/5 backdrop-blur-sm"
          >
            <FiCalendar className="w-5 h-5 text-amber-200/80" />
            <span className="text-amber-200/90 text-sm font-medium">
            මැයි 23-25 ​​වෙසක් සැමරුම් සඳහා අප හා එක්වන්න
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100/20 backdrop-blur-sm border border-yellow-100/30"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiChevronDown className="w-6 h-6 text-yellow-100" />
        </motion.div>
        <span className="text-sm text-amber-100/80 font-medium tracking-wide">
          Scroll to Explore
        </span>
      </motion.div>
    </section>
  );
}
