"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ChiefMonkMessage() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-yellow-50 via-amber-50 to-white overflow-hidden isolate">
      {/* Floating gradient circle */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
        <div className="absolute -top-16 -left-20 w-60 h-60 bg-amber-100 rounded-full mix-blend-multiply blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-amber-200 rounded-full mix-blend-multiply blur-2xl animate-blob delay-2000" />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-8 font-serif drop-shadow-sm">
            විහාරාධිපති ස්වාමීන් වහන්සේගේ පණිවිඩය
          </h2>

          <div className="flex justify-center mb-8">
            <div className="relative">
              <Image
                src="/chief-monk.jpg"
                alt="Chief Monk"
                width={130}
                height={130}
                className="rounded-full border-4 border-amber-300 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full border border-amber-200 animate-ping-slow" />
            </div>
          </div>

          <blockquote className="relative text-lg sm:text-xl text-amber-800 leading-relaxed px-6 mb-6">
            <span className="absolute -top-4 left-4 text-5xl text-amber-300">“</span>
            <p className="z-10 relative">
              සියලු සත්වයෝ දුකින් නිදහස් වෙත්වා, සැපවත් වෙත්වා. අපි එක්ව සිහිය, මෛත්‍රිය, ප්‍රඥාව යන මාර්ගයේ ගමන් කරමු.
              අපේ පන්සල සාමය සහ අභ්‍යන්තර පිබිදීම සඳහා වූ අභයභූමියකි.
            </p>
            <span className="absolute -bottom-4 right-4 text-5xl text-amber-300">”</span>
          </blockquote>

          <div className="text-amber-700 font-semibold tracking-wide text-base">
            <div className="mb-2 text-lg">✢ ✢ ✢</div>
            විහාරාධිපති පූජ්‍ය උළුවිටියේ අනුරුද්ධ හිමි
          </div>
        </motion.div>
      </div>

      {/* Lotus Icon Decoration */}
      <motion.div
        className="absolute bottom-8 left-6 opacity-25 rotate-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.25, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <LotusIcon className="w-16 h-16 text-amber-300" />
      </motion.div>
    </section>
  );
}

function LotusIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}
