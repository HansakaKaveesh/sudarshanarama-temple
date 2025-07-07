'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTransform, useScroll } from 'framer-motion';
import {
  FiChevronDown,
  FiArrowRight,
  FiMapPin,
  FiCalendar,
} from 'react-icons/fi';
import { GiLotus, GiStoneBlock } from 'react-icons/gi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const { scrollY } = useScroll();
  const yOverlay = useTransform(scrollY, [0, 500], [0, 300]);
  const rotateX = useTransform(scrollY, [0, 500], [0, -10]);
  const translateZ = useTransform(scrollY, [0, 500], [0, -100]);

  const images = ['/hero.jpg', '/2023-06-01 (1).jpg', '/footer.jpg'];
  const [currentImage, setCurrentImage] = useState(0);

  const serviceTexts = [
    'සාමාජික දානය සහ සන්සුන් වැඩමුළු',
    'ධම්ම දේශනා සහ භාවනා වැඩසටහන්',
    'දෝරට වාඩි වී සද්ධර්මය අසන්න',
    'යහපත් ගුණ සහ දානයා වර්ධනය කරන්න',
    'සියලුම වයස් සඳහා ධම්ම පාසලක්',
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    const textInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % serviceTexts.length);
    }, 3000);

    return () => {
      clearInterval(imgInterval);
      clearInterval(textInterval);
    };
  }, []);

  const socialLinks = [
    {
      id: 1,
      href: 'https://facebook.com',
      icon: <FaFacebookF className="w-5 h-5" />,
    },
    {
      id: 2,
      href: 'https://instagram.com',
      icon: <FaInstagram className="w-5 h-5" />,
    },
    {
      id: 3,
      href: 'https://youtube.com',
      icon: <FaYoutube className="w-5 h-5" />,
    },
  ];

  const floatingLotuses = [
    {
      id: 1,
      top: '15%',
      left: '5%',
      size: 'text-6xl',
      animation: { rotateY: [0, 360], y: [-20, 20] },
    },
    {
      id: 2,
      top: '70%',
      left: '85%',
      size: 'text-5xl',
      animation: { rotateZ: [0, 45], y: [15, -15] },
    },
    {
      id: 3,
      top: '40%',
      left: '20%',
      size: 'text-7xl',
      animation: { rotateX: [0, 360], y: [-15, 15] },
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black text-white">
      
{/* Background Image Layer */}
<motion.div className="absolute inset-0 z-0 overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.div
      key={images[currentImage]}
      initial={{ scale: 1.2, y: 50, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.8, y: -50, opacity: 0 }}
      transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
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
      <motion.div className="absolute inset-0 z-10" style={{ y: yOverlay }}>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />
      </motion.div>

      {/* Floating and Spinning Lotuses */}
      {floatingLotuses.map((lotus) => (
        <motion.div
          key={lotus.id}
          className={`absolute ${lotus.size} text-yellow-200/20 z-20`}
          style={{ top: lotus.top, left: lotus.left }}
          animate={lotus.animation}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <GiLotus />
        </motion.div>
      ))}

      {/* Stone Texture */}
      <div className="absolute inset-0 z-10 opacity-10 mix-blend-overlay pointer-events-none">
        <GiStoneBlock className="w-full h-full text-stone-700" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-30 px-6 text-center max-w-4xl mx-auto"
        style={{ rotateX, translateZ, transformStyle: 'preserve-3d' }}
      >
        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-yellow-100/80 mb-4">
          <FiMapPin className="w-5 h-5" />
          <span className="font-medium">Kalapaluwawa, Sri Lanka</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold font-sinhala text-amber-200 leading-snug">
          ශ්‍රී සුදර්ශනාරාම පුරාණ මහා විහාරය
          <span className="block text-3xl md:text-5xl text-amber-100/90 mt-2">
            කලපලුවාව
          </span>
        </h1>

{/* Sliding Services Text - Enhanced */}
<div className="mt-6 relative h-[3rem] md:h-[3.5rem] overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.p
      key={serviceTexts[currentServiceIndex]}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="absolute w-full text-lg md:text-xl text-amber-50 font-medium text-center"
    >
      <span className="inline-block px-4 py-1 rounded bg-white/5 backdrop-blur-sm shadow-sm">
        {serviceTexts[currentServiceIndex]}
      </span>
    </motion.p>
  </AnimatePresence>
</div>


        {/* CTA Button */}
        <motion.div className="mt-6 inline-block">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 15px 30px rgba(255, 215, 100, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative bg-amber-300 text-stone-900 px-8 py-4 rounded-full font-semibold transition-all shadow-md flex items-center gap-2"
          >
            <span>අපේ උරුමය ගවේෂණය කරන්න</span>
            <FiArrowRight />
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300">
              <div className="animate-shine bg-gradient-to-r from-transparent via-white to-transparent absolute -inset-12" />
            </div>
          </motion.button>
        </motion.div>


        {/* Social Media Icons */}
        <div className="mt-12 flex justify-center gap-4 text-amber-200 text-lg">
          {socialLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.3,
                rotate: 15,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-amber-100"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-10 h-10 rounded-full bg-yellow-100/20 border border-yellow-100/30 flex items-center justify-center">
          <FiChevronDown className="text-yellow-100 w-5 h-5" />
        </div>
        <p className="text-sm text-amber-100/80">Scroll to Explore</p>
      </motion.div>
    </section>
  );
}