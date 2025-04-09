"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ChiefMonkMessage() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-yellow-50 via-amber-50 to-white overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 font-serif">
            A Message from the Chief Monk
          </h2>

          <div className="flex justify-center mb-6">
            <div className="relative inline-block">
              <Image
                src="/chief-monk.jpg"
                alt="Chief Monk"
                width={120}
                height={120}
                className="rounded-full border-2 border-amber-300 shadow-lg"
              />
              <div className="absolute inset-0 rounded-full border border-amber-200 animate-ping-slow"></div>
            </div>
          </div>

          <blockquote className="relative text-lg text-amber-800 leading-relaxed mb-6 px-4">
            <div className="absolute top-0 left-0 text-4xl text-amber-300">“</div>
            <div className="absolute bottom-0 right-0 text-4xl text-amber-300">”</div>
            May all beings be happy and free from suffering. Let us walk the
            path of mindfulness, compassion, and wisdom together. Our temple is
            not just a place of worship — it is a sanctuary for peace and
            inner awakening.
          </blockquote>

          <div className="text-amber-700 font-medium text-base">
            <span className="block mb-1">✢ ✢ ✢</span>
            Venerable Uluvitike Anuruddha Thera
          </div>
        </motion.div>
      </div>

      {/* Smaller lotus decorations */}
      <div className="absolute bottom-6 left-4 opacity-20 rotate-12">
        <LotusIcon className="w-16 h-16 text-amber-200" />
      </div>
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
      strokeWidth="1"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}