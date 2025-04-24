"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiX } from 'react-icons/fi';

const collageImages = [
  { src: '/images.jpg', alt: 'Meditation Session', category: 'activities' },
  { src: '/image_1516561325-a825f5e7ae.jpg', alt: 'Festival Celebration', category: 'events' },
  { src: '/image_1516561357-aeaa6fb579.jpg', alt: 'Dhamma Teaching', category: 'education' },
  { src: '/footer.jpg', alt: 'Community Service', category: 'service' },
  { src: '/2023-06-01.jpg', alt: 'Temple Garden', category: 'nature' },
];

export default function ImageCollage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? collageImages 
    : collageImages.filter(img => img.category === activeCategory);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-yellow-100/95 to-yellow-50/90 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10 mix-blend-multiply"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-[url('/texture-paper.png')] bg-repeat opacity-30" />
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
            <h2 className="text-4xl font-bold text-amber-900 mb-4 relative">
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
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="/placeholder.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-amber-900/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-xl font-semibold mb-2">{image.alt}</h3>
                    <span className="px-3 py-1 bg-amber-50/20 backdrop-blur-sm rounded-full text-sm inline-flex items-center gap-2">
                      #{image.category}
                      <FiArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
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
        <Link href="/gallery">
        <motion.button 
            whileHover={{ y: -2 }}
            className="px-8 py-3 bg-amber-900 text-amber-50 rounded-full hover:bg-amber-800 transition-colors duration-300 shadow-lg hover:shadow-amber-900/30 flex items-center gap-2 mx-auto"
    >
      View Full Gallery
      <FiArrowUpRight className="w-5 h-5" />
    </motion.button>
  </Link>
</motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-amber-50 hover:text-amber-200 transition-colors">
              <FiX className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-6xl h-[90vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-amber-100 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-amber-100 to-transparent" />
    </section>
  );
}