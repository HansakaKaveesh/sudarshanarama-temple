"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Flower2, CalendarDays, BookOpen, Sparkles } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section className="relative py-24 px-4 py-20 bg-gradient-to-b from-yellow-100 to-yellow-50 overflow-hidden isolate">
      {/* Animated Floating Flowers */}
      <motion.div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {}
        }}
      >
        <motion.div 
          className="absolute top-0 left-0 -translate-x-20 -translate-y-20"
          variants={{
            visible: { 
              y: [0, -20, 0],
              transition: { 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            },
            hidden: { y: 0 }
          }}
        >
          <Flower2 className="w-48 h-48 text-amber-300/30" />
        </motion.div>
        <motion.div 
          className="absolute bottom-0 right-0 translate-x-20 translate-y-20"
          variants={{
            visible: { 
              y: [0, 20, 0],
              transition: { 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }
            },
            hidden: { y: 0 }
          }}
        >
          <Flower2 className="w-48 h-48 text-amber-300/30 rotate-45" />
        </motion.div>
      </motion.div>

      {/* Animated Wood Texture */}
      <motion.div 
        className="absolute inset-0 bg-[url('/wood-texture.svg')] bg-repeat opacity-5 mix-blend-multiply"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Enhanced Buddha Image Section */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.02 }
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Animated Border */}
            <motion.div 
              className="absolute inset-0 rounded-3xl pointer-events-none border-[3px] border-amber-900/5"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.03 }
              }}
            />
            
            {/* Image with Parallax Effect */}
            <motion.div 
              className="w-full h-full"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 }
              }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Image
                src="/hero.jpg"
                alt="Serene Buddha statue surrounded by flowers and offerings"
                width={800}
                height={600}
                className="w-full h-full object-cover origin-center"
                priority
                quality={90}
                placeholder="blur"
                blurDataURL="/hero-blur.jpg"
              />
            </motion.div>

            {/* Animated Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-amber-900/15 to-transparent"
              variants={{
                rest: { opacity: 1 },
                hover: { opacity: 0.8 }
              }}
            />

            {/* Floating Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-amber-200/40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.8],
                    x: Math.random() * 100 - 50 + '%',
                    y: Math.random() * 100 - 50 + '%'
                  }}
                  transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Welcome Text */}
          <div className="space-y-10 relative">
            {/* Animated Quote Marks */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-8 -left-8 text-amber-300/40 text-7xl font-cursive select-none"
            >
              “
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight"
            >
              <motion.span 
                className="block text-3xl mb-3 text-amber-700 font-cursive"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                නමෝ බුද්ධාය
              </motion.span>
              <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
              සිහිකල්පනාවෙන් ජීවත් වීමට මාර්ගය
              </span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-amber-800/90 leading-relaxed mb-10 font-serif max-w-2xl relative"
            >
              <span className="absolute -left-8 top-2 text-amber-200/40 text-4xl">•</span>
              අපගේ නවීන අභයභූමියේ පුරාණ ප්‍රඥාව තුළින් සන්සුන් භාවය සොයා ගන්න. භාවනාව,
              දහම් අධ්‍යයනය සහ සිහිකල්පනාවෙන් යුතු ජීවන පිළිවෙත් ගවේෂණය කිරීමට අපගේ දයානුකම්පිත ප්‍රජාව හා එක්වන්න.
              <span className="absolute -right-8 bottom-2 text-amber-200/40 text-4xl">•</span>
            </motion.p>

            {/* Enhanced Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-5 justify-center lg:justify-start"
            >
              {[
                { 
                  href: "/events",
                  text: "Upcoming Events",
                  icon: CalendarDays,
                  style: "bg-amber-900 text-amber-50 hover:bg-amber-800 shadow-lg hover:shadow-amber-900/30"
                },
                {
                  href: "/dhamma",
                  text: "Dharma Studies",
                  icon: BookOpen,
                  style: "border-2 border-amber-900 text-amber-900 hover:bg-amber-900/5"
                }
              ].map((button, index) => (
                <Link key={index} href={button.href} passHref>
                  <motion.div
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${button.style} px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-3 cursor-pointer`}
                  >
                    <button.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    <span className="text-lg">{button.text}</span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Divider */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-24 bg-[url('/divider-pattern.svg')] bg-repeat-x opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%']
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  );
}