"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { FiArrowUpRight, FiX, FiChevronLeft, FiChevronRight, FiShare2 } from 'react-icons/fi';

const collageImages = [
  { src: '/images.jpg', alt: 'Meditation Session', category: 'activities' },
  { src: '/image_1516561325-a825f5e7ae.jpg', alt: 'Festival Celebration', category: 'events' },
  { src: '/image_1516561357-aeaa6fb579.jpg', alt: 'Dhamma Teaching', category: 'education' },
  { src: '/footer.jpg', alt: 'Community Service', category: 'service' },
  { src: '/2023-06-01.jpg', alt: 'Temple Garden', category: 'nature' },
];

export default function ImageCollage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [direction, setDirection] = useState(0);
  const dragControls = useDragControls();

  const filteredImages = activeCategory === 'all' 
    ? collageImages 
    : collageImages.filter(img => img.category === activeCategory);

  const handleKeyDown = (e) => {
    if (selectedIndex !== null) {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'Escape') setSelectedIndex(null);
    }
  };

  const handleNext = () => {
    setDirection(1);
    setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-yellow-50 to-yellow-50 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10 mix-blend-multiply"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-[url('/2023-06-01.jpg')] bg-repeat opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/10 via-transparent to-amber-100/10" />
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-4 bg-amber-200/30 blur-3xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
            />
            <h2 className="text-4xl font-bold text-amber-900 mb-4 relative font-serif">
              Temple Moments
            </h2>
          </div>
          <p className="text-lg text-amber-800/90 max-w-2xl mx-auto leading-relaxed">
            Explore our vibrant community through these captured moments of peace, learning, and togetherness
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['all', 'activities', 'events', 'education', 'service', 'nature'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-2 rounded-full capitalize font-medium ${
                  activeCategory === category
                    ? 'bg-amber-900 text-amber-50'
                    : 'bg-amber-200/50 text-amber-800 hover:bg-amber-200/70'
                } transition-all duration-300`}
                aria-label={`Filter by ${category}`}
              >
                {activeCategory === category && (
                  <motion.div 
                    className="absolute inset-0 bg-amber-900 rounded-full"
                    layoutId="activeCategory"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Collage Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.category}-${index}`}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                layout
                className={`relative group cursor-pointer ${
                  index % 5 === 0 ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <motion.div
                  className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="/placeholder.jpg"
                    onClick={() => setSelectedIndex(index)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-amber-900/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-xl font-semibold mb-2">{image.alt}</h3>
                    <span className="px-3 py-1 bg-amber-50/20 backdrop-blur-sm rounded-full text-sm inline-flex items-center gap-2">
                      #{image.category}
                      <FiArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/gallery" legacyBehavior>
            <motion.a
              whileHover={{ y: -2 }}
              className="px-8 py-3 bg-amber-900 text-amber-50 rounded-full hover:bg-amber-800 transition-colors duration-300 shadow-lg hover:shadow-amber-900/30 flex items-center gap-2 mx-auto"
            >
              View Full Gallery
              <FiArrowUpRight className="w-5 h-5" />
            </motion.a>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence custom={direction}>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setSelectedIndex(null)}
          >
            <button 
              className="absolute top-8 right-8 text-amber-50 hover:text-amber-200 transition-colors z-50"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close lightbox"
            >
              <FiX className="w-8 h-8" />
            </button>

            <motion.div
              className="relative w-full max-w-6xl h-[90vh]"
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.3 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset, velocity }) => {
                if (Math.abs(offset.x) > 100 || Math.abs(velocity.x) > 500) {
                  offset.x > 0 ? handlePrevious() : handleNext();
                }
              }}
              dragControls={dragControls}
            >
              <Image
                src={filteredImages[selectedIndex].src}
                alt={filteredImages[selectedIndex].alt}
                fill
                className="object-contain rounded-lg"
                priority
              />

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-amber-50 backdrop-blur-sm">
                {filteredImages[selectedIndex].alt}
              </div>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-amber-50 hover:text-amber-200 bg-black/30 rounded-full backdrop-blur-sm"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <FiChevronLeft className="w-8 h-8" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-amber-50 hover:text-amber-200 bg-black/30 rounded-full backdrop-blur-sm"
                onClick={handleNext}
                aria-label="Next image"
              >
                <FiChevronRight className="w-8 h-8" />
              </button>

              <div className="absolute top-8 left-8 flex gap-4">
                <button
                  className="p-3 bg-black/30 text-amber-50 rounded-full backdrop-blur-sm hover:bg-black/50 transition-colors"
                  onClick={() => navigator.share({
                    title: filteredImages[selectedIndex].alt,
                    url: filteredImages[selectedIndex].src
                  })}
                  aria-label="Share image"
                >
                  <FiShare2 className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-amber-100 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-amber-100 to-transparent" />
    </section>
  );
}