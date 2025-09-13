'use client';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Flower2, CalendarDays, BookOpen, Sparkles } from 'lucide-react';

export default function WelcomeSection() {
  // 3D tilt for the image card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set((px - 0.5) * 100);
    y.set((py - 0.5) * 100);
  };
  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  const sparkleConfigs = [
    { style: { top: '8%', left: '6%' }, duration: 5.2, delay: 0.4 },
    { style: { top: '18%', right: '8%' }, duration: 6.1, delay: 1.1 },
    { style: { bottom: '12%', left: '10%' }, duration: 7.2, delay: 0.8 },
    { style: { bottom: '8%', right: '14%' }, duration: 5.8, delay: 1.6 },
    { style: { top: '42%', left: '42%' }, duration: 6.6, delay: 1.9 },
    { style: { bottom: '38%', right: '32%' }, duration: 7.4, delay: 0.2 },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-yellow-50 to-white py-16 sm:py-24">
      {/* Aurora / soft gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-yellow-200/40 blur-3xl"
          animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Subtle wood texture overlay */}
        <motion.div
          className="absolute inset-0 bg-[url('/wood-texture.svg')] bg-repeat mix-blend-multiply opacity-5"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid items-center gap-14 lg:grid-cols-2"
        >
          {/* Image Card with 3D tilt + glow + shimmer */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
            className="relative rounded-[28px] p-[2px]"
          >
            {/* Gradient frame */}
            <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-amber-500/40 via-amber-300/20 to-amber-800/40" />
            <div className="relative overflow-hidden rounded-[26px] bg-amber-50/30 shadow-2xl ring-1 ring-amber-900/10">
              <Image
                src="/hero.jpg"
                alt="Serene Buddha statue surrounded by flowers and offerings"
                width={800}
                height={600}
                className="h-full w-full origin-center object-cover"
                priority
                quality={90}
                placeholder="blur"
                blurDataURL="/hero-blur.jpg"
              />

              {/* Warm gradient overlay */}
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-900/40 via-amber-900/10 to-transparent"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 0.8 }}
              />

              {/* Shimmer sweep on hover */}
              <motion.div
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '250%' }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />

              {/* Subtle inner glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-amber-100/50" />

              {/* Floating sparkles */}
              <div className="pointer-events-none absolute inset-0">
                {sparkleConfigs.map((cfg, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-amber-200/60"
                    style={cfg.style}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: [0, 1, 0], scale: [0.7, 1.15, 0.9] }}
                    transition={{ duration: cfg.duration, repeat: Infinity, delay: cfg.delay, ease: 'easeInOut' }}
                  >
                    <Sparkles className="h-6 w-6" />
                  </motion.span>
                ))}
              </div>

              {/* Floating flowers at corners */}
              <motion.div
                className="pointer-events-none absolute -top-10 -left-10 text-amber-300/40"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Flower2 className="h-28 w-28" />
              </motion.div>
              <motion.div
                className="pointer-events-none absolute -bottom-10 -right-10 rotate-45 text-amber-300/40"
                animate={{ y: [0, 18, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <Flower2 className="h-28 w-28" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text + Actions */}
          <div className="relative space-y-8">
            {/* Decorative quote mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="pointer-events-none absolute -top-8 -left-6 select-none text-6xl text-amber-300/40"
              aria-hidden="true"
            >
              “
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-2 text-4xl font-bold leading-tight text-amber-900 sm:text-5xl lg:text-6xl"
            >
              <span className="mb-2 block text-2xl text-amber-700 sm:text-3xl">
                නමෝ බුද්ධාය
              </span>
              <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                සිහිකල්පනාවෙන් ජීවත් වීමට මාර්ගය
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="relative max-w-2xl text-lg leading-relaxed text-amber-800/90 sm:text-xl"
            >
              <span className="absolute -left-6 top-2 text-3xl text-amber-200/60">•</span>
              අපගේ නවීන අභයභූමියේ පුරාණ ප්‍රඥාව තුළින් සන්සුන් භාවය සොයා ගන්න. භාවනාව,
              දහම් අධ්‍යයනය සහ සිහිකල්පනාවෙන් යුතු ජීවන පිළිවෙත් ගවේෂණය කිරීමට අපගේ දයානුකම්පිත ප්‍රජාව හා එක්වන්න.
              <span className="absolute -right-6 bottom-2 text-3xl text-amber-200/60">•</span>
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/events"
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-900 to-amber-700 px-7 py-4 text-amber-50 shadow-lg shadow-amber-900/20 transition-transform hover:-translate-y-0.5"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center">
                  <CalendarDays className="h-6 w-6 transition-transform group-hover:scale-110" />
                </span>
                <span className="text-lg font-medium">Upcoming Events</span>
                {/* Shine */}
                <span className="pointer-events-none absolute inset-px rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(253,230,138,0.35) 50%, rgba(255,255,255,0) 100%)'
                  }}
                />
              </Link>

              <Link
                href="/dhamma"
                className="group relative inline-flex items-center gap-3 rounded-full border-2 border-amber-900 px-7 py-4 text-amber-900 transition-all hover:bg-amber-900/5 hover:-translate-y-0.5"
              >
                <BookOpen className="h-6 w-6 transition-transform group-hover:scale-110" />
                <span className="text-lg font-medium">Dharma Studies</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated divider */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-[url('/divider-pattern.svg')] bg-repeat-x opacity-20"
        animate={{ backgroundPosition: ['0% 0%', '100% 0%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />
    </section>
  );
}