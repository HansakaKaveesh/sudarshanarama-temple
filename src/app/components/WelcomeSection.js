"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Flower2 } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-yellow-50 to-yellow-100/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-8">
        <Flower2 className="w-12 h-12 text-yellow-300/80" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/buddha-statue.jpg"
              alt="Buddha Statue"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-stone-900/10 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6 leading-tight"
            >
              <span className="block text-3xl mb-2 text-yellow-700">Namo Buddhaya</span>
              Discover Inner Peace Through Dharma
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-yellow-800/90 leading-relaxed mb-8"
            >
              Our sacred space welcomes all seekers to experience transformative meditation practices, 
              enlightening Dhamma discussions, and a compassionate community dedicated to spiritual growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <button className="bg-yellow-900 text-yellow-50 px-6 py-3 rounded-full font-medium hover:bg-yellow-800 transition-colors shadow-lg hover:shadow-yellow-900/20">
                Upcoming Events
              </button>
              <button className="border-2 border-yellow-900 text-yellow-900 px-6 py-3 rounded-full font-medium hover:bg-yellow-900/10 transition-colors">
                Learn About Dharma
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}