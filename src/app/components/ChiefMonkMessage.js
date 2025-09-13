"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ChiefMonkMessage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-white px-6 py-20">
      {/* Ambient background: soft orbs + faint grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-yellow-200/40 blur-3xl"
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-15 mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(251,191,36,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(251,191,36,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-3xl text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 font-serif text-4xl font-bold text-amber-900 md:text-5xl"
        >
          විහාරාධිපති ස්වාමීන් වහන්සේගේ පණිවිඩය
        </motion.h2>

        {/* Avatar with halo and pulse */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-36 w-36">
            {/* Rotating conic halo */}
            <motion.div
              className="absolute -inset-3 rounded-full blur-md opacity-60"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(251,191,36,0.35), rgba(234,179,8,0.25), rgba(245,158,11,0.35))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />
            {/* Soft pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full ring-2 ring-amber-300/50"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            {/* Avatar */}
            <div className="relative h-full w-full overflow-hidden rounded-full bg-white ring-4 ring-amber-300 shadow-2xl">
              <Image
                src="/chief-monk.jpg"
                alt="Chief Monk"
                fill
                sizes="144px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Quote card with gradient frame + shine */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-3xl"
        >
          {/* Gradient frame */}
          <div className="relative rounded-3xl bg-gradient-to-br from-amber-400/60 via-yellow-200/50 to-amber-700/60 p-[2px] shadow-lg">
            <div className="relative rounded-[calc(1.5rem-2px)] bg-white/80 px-6 py-8 backdrop-blur-sm ring-1 ring-amber-900/10 sm:px-8">
              {/* Shine sweep */}
              <motion.div
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rounded-[calc(1.5rem-2px)] bg-gradient-to-r from-transparent via-white/25 to-transparent"
                initial={{ x: "-120%" }}
                whileHover={{ x: "220%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                aria-hidden
              />


              <blockquote className="relative text-left text-lg leading-relaxed text-amber-800 sm:text-xl">
                <p>
                  සියලු සත්වයෝ දුකින් නිදහස් වෙත්වා, සැපවත් වෙත්වා. අපි එක්ව සිහිය, මෛත්‍රිය, ප්‍රඥාව යන මාර්ගයේ ගමන් කරමු.
                  අපේ පන්සල සාමය සහ අභ්‍යන්තර පිබිදීම සඳහා වූ අභයභූමියකි.
                </p>
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-amber-700"
        >
          <div className="mb-2 text-lg">✢ ✢ ✢</div>
          <div className="font-semibold tracking-wide">
            විහාරාධිපති පූජ්‍ය උළුවිටියේ අනුරුද්ධ හිමි
          </div>
        </motion.div>
      </div>

      {/* Floating lotus accents */}
      <motion.div
        className="absolute bottom-8 left-6 rotate-12 opacity-25"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.25, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-hidden
      >
        <LotusIcon className="h-14 w-14 text-amber-300" />
      </motion.div>
      <motion.div
        className="absolute right-8 top-8 -rotate-6 opacity-20"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 0.2, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        aria-hidden
      >
        <LotusIcon className="h-10 w-10 text-amber-300" />
      </motion.div>
    </section>
  );
}

function LotusIcon({ className }) {
  // Simple geometric lotus mark
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3c-1.8 2.6-2.2 5.1 0 8 2.2-2.9 1.8-5.4 0-8z" />
      <path d="M7 6c-.8 2.8-.3 5.1 3 7-1-3.3-2.1-5.1-3-7z" />
      <path d="M17 6c.8 2.8.3 5.1-3 7 1-3.3 2.1-5.1 3-7z" />
      <path d="M4 12c1.6 2.2 4.2 3.5 8 3.5S18.4 14.2 20 12c-2.2.6-4.7.9-8 .9S6.2 12.6 4 12z" />
    </svg>
  );
}