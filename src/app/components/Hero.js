'use client';

import { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useTransform,
  useScroll,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import { FiChevronDown, FiArrowRight, FiMapPin } from 'react-icons/fi';
import { GiLotus, GiStoneBlock } from 'react-icons/gi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Scroll parallax
  const { scrollY } = useScroll();
  const yOverlay = useTransform(scrollY, [0, 600], [0, 320]);
  const scrollRotateX = useTransform(scrollY, [0, 600], [0, -8]);
  const translateZ = useTransform(scrollY, [0, 600], [0, -120]);

  // Background images
  const images = ['/hero.jpg', '/2023-06-01 (1).jpg', '/footer.jpg'];
  const [currentImage, setCurrentImage] = useState(0);

  // Rotating service text
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
    }, 6000);

    const textInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % serviceTexts.length);
    }, 2800);

    return () => {
      clearInterval(imgInterval);
      clearInterval(textInterval);
    };
  }, [images.length, serviceTexts.length]);

  // Socials
  const socialLinks = [
    { id: 1, href: 'https://facebook.com', icon: <FaFacebookF className="w-5 h-5" />, label: 'Facebook' },
    { id: 2, href: 'https://instagram.com', icon: <FaInstagram className="w-5 h-5" />, label: 'Instagram' },
    { id: 3, href: 'https://youtube.com', icon: <FaYoutube className="w-5 h-5" />, label: 'YouTube' },
  ];

  // Floating lotuses
  const floatingLotuses = [
    {
      id: 1,
      top: '15%',
      left: '5%',
      size: 'text-6xl',
      animation: shouldReduceMotion ? {} : { rotateY: [0, 360], y: [-20, 20] },
    },
    {
      id: 2,
      top: '70%',
      left: '85%',
      size: 'text-5xl',
      animation: shouldReduceMotion ? {} : { rotateZ: [0, 45], y: [15, -15] },
    },
    {
      id: 3,
      top: '40%',
      left: '20%',
      size: 'text-7xl',
      animation: shouldReduceMotion ? {} : { rotateX: [0, 360], y: [-15, 15] },
    },
  ];

  // Bokeh particles — generate client-side only to avoid hydration mismatch
  const [bokehs, setBokehs] = useState([]);
  useEffect(() => {
    const arr = Array.from({ length: 12 }, (_, id) => ({
      id,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.floor(Math.random() * 40) + 30, // 30–70px
      delay: Math.random() * 4,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setBokehs(arr);
  }, []);

  // Mouse tilt for the glass card
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const sy = useSpring(mouseY, { stiffness: 200, damping: 20 });
  const rotateYMouse = useTransform(sx, [0, 1], [-10, 10]);
  const rotateXMouse = useTransform(sy, [0, 1], [10, -10]);
  const rotateX = useTransform([scrollRotateX, rotateXMouse], ([a, b]) => a + b);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mouseX.set(Math.max(0, Math.min(1, px)));
    mouseY.set(Math.max(0, Math.min(1, py)));
  };
  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black text-white">
      {/* Background Images (Ken Burns) */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentImage]}
            initial={{ scale: 1.15, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 1.1, y: -20, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt="Serene temple background"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
              priority
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Aurora Glow */}
      {!shouldReduceMotion && (
        <motion.div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            className="absolute -inset-[20%] mix-blend-screen opacity-70"
            style={{
              background:
                'radial-gradient(40% 50% at 20% 10%, rgba(255,210,120,0.15), transparent 60%), radial-gradient(40% 50% at 80% 90%, rgba(100,190,255,0.15), transparent 60%)',
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      )}

      {/* Gradient overlays (vignette + bottom fade) */}
      <motion.div className="absolute inset-0 z-10" style={{ y: yOverlay }}>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />
      </motion.div>
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.65)_85%)]" />

      {/* Bokeh particles (render only after mount) */}
      {!shouldReduceMotion &&
        bokehs.length > 0 &&
        bokehs.map((b) => (
          <motion.span
            key={b.id}
            className="absolute z-20 rounded-full blur-2xl"
            style={{
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
              background:
                'radial-gradient(circle, rgba(255,225,150,0.25), rgba(255,225,150,0))',
              opacity: b.opacity,
              filter: 'saturate(120%)',
            }}
            animate={{ y: [0, -20, 0], scale: [1, 1.15, 1] }}
            transition={{
              duration: 8 + b.delay,
              delay: b.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

      {/* Floating and Spinning Lotuses */}
      {floatingLotuses.map((lotus) => (
        <motion.div
          key={lotus.id}
          className={`absolute ${lotus.size} text-yellow-200/20 z-20`}
          style={{
            top: lotus.top,
            left: lotus.left,
            filter: 'drop-shadow(0 0 14px rgba(255,235,160,0.15))',
          }}
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

      {/* Soft grain */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.06] mix-blend-overlay">
        <div className="grain w-full h-full" />
      </div>

      {/* Main Content - Glass Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-30 px-6 max-w-4xl mx-auto w-[94%] md:w-auto"
        style={{ z: translateZ }}
      >
        <motion.div
          className="group relative mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xs shadow-2xl ring-1 ring-white/10 overflow-hidden px-6 py-8 md:px-12 md:py-12"
          style={{
            rotateX,
            rotateY: shouldReduceMotion ? 0 : rotateYMouse,
            transformStyle: 'preserve-3d',
            transformPerspective: 1000,
          }}
        >
          {/* Subtle gradient border glow */}
          <div className="pointer-events-none absolute -inset-[1px] rounded-[1.6rem] bg-gradient-to-b from-amber-300/15 via-transparent to-rose-300/10" />

          {/* Light sheen on hover */}
          <span className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
            <span className="absolute left-0 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shine" />
          </span>

          {/* Location */}
          <div className="relative flex items-center justify-center gap-2 text-yellow-100/90 mb-4">
            <FiMapPin className="w-5 h-5" />
            <span className="font-medium">Kalapaluwawa, Sri Lanka</span>
          </div>

          {/* Title */}
          <h1 className="relative text-center font-bold font-sinhala leading-snug">
            <span className="block text-4xl md:text-6xl text-amber-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              ශ්‍රී සුදර්ශනාරාම පුරාණ මහා විහාරය
            </span>
            <span className="block text-3xl md:text-5xl mt-3 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-200 to-rose-200 drop-shadow">
              කලපලුවාව
            </span>
          </h1>

          {/* Sliding Services Text */}
          <div className="mt-6 relative h-[3rem] md:h-[3.5rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={serviceTexts[currentServiceIndex]}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                className="absolute w-full text-lg md:text-xl font-medium text-center"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/15 backdrop-blur-md shadow-sm text-amber-50">
                  <GiLotus className="opacity-80" />
                  {serviceTexts[currentServiceIndex]}
                </span>
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: '0px 18px 35px rgba(255, 210, 120, 0.35)',
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden bg-gradient-to-r from-amber-300 via-yellow-300 to-rose-300 text-stone-900 px-8 py-4 rounded-full font-semibold shadow-md flex items-center gap-2"
            >
              <span>අපේ උරුමය ගවේෂණය කරන්න</span>
              <FiArrowRight />
              <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute -inset-12 animate-shine bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </span>
            </motion.button>
          </div>

          {/* Social Media Icons */}
          <div className="mt-10 flex justify-center gap-4 text-amber-200 text-lg">
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                whileHover={{
                  scale: 1.25,
                  rotate: 10,
                  transition: { duration: 0.35 },
                }}
                whileTap={{ scale: 0.92 }}
                className="hover:text-amber-100"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-10 h-14 rounded-full bg-white/10 border border-white/20 flex items-start justify-center p-2">
          <motion.span
            className="w-1.5 h-3 rounded-full bg-yellow-100/90"
            animate={{ y: [0, 18] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
        </div>
        <p className="text-sm text-amber-100/80">Scroll to Explore</p>
      </motion.div>
    </section>
  );
}