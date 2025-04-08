"use client";
import { motion } from 'framer-motion';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/50 to-transparent z-10" />
      
      {/* Optimized background image with zoom effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="/hero.jpg"
          alt="Temple Background"
          
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ letterSpacing: '2px' }}
            animate={{ letterSpacing: '0px' }}
            transition={{ duration: 1.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-yellow-100 drop-shadow-lg"
          >
            Sri Sudarshanarama Purana Maha Viharaya
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-xl text-yellow-50/95 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Discover Serenity Through Ancient Wisdom and Mindful Practice
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button className="group bg-yellow-100/90 hover:bg-yellow-50 text-stone-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-100/20 flex items-center gap-2 mx-auto">
              Explore Teachings
              <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="animate-bounce w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100/20 backdrop-blur-sm border border-yellow-100/30">
          <FiChevronDown className="w-6 h-6 text-yellow-100" />
        </div>
      </motion.div>
    </section>
  );
}