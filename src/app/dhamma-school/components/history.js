'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaPrayingHands,
  FaCalendarAlt,
  FaUsers,
  FaBookOpen,
  FaCircle,
  FaCrown,
} from 'react-icons/fa';
import { MdTimeline } from 'react-icons/md';

const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs><linearGradient id="g"><stop stop-color="#E5E7EB" offset="20%"/><stop stop-color="#F3F4F6" offset="50%"/><stop stop-color="#E5E7EB" offset="70%"/></linearGradient></defs>
    <rect width="${w}" height="${h}" fill="#E5E7EB" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>
`;
const toBase64 = (str) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const milestones = [
  { year: '1982', text: 'First purpose-built Dhamma hall completed' },
  { year: '1995', text: 'Recognized as National Model Dhamma School' },
  { year: '2010', text: 'Digital Learning Initiative launched' },
];

const leaders = [
  {
    name: 'Ven. Kalupahana Seelawansa Thero',
    role: 'Founding Principal (1975–1985)',
    image: '/images/seelawansa.jpg',
  },
  {
    name: 'Ven. Dikwelle Pannasekara Thero',
    role: 'Principal (1986–1995)',
    image: '/images/pannasekara.jpg',
  },
  {
    name: 'Mrs. Anula Wijesinghe',
    role: 'Vice Principal (1980–1992)',
    image: '/images/anula.jpg',
  },
  {
    name: 'Mr. Sanath Jayasuriya',
    role: 'Vice Principal (1993–2005)',
    image: '/images/sanath.jpg',
  },
  {
    name: 'Ven. Dr. Walpola Piyananda Thero',
    role: 'Chief Advisor & Spiritual Guide',
    image: '/images/piyananda.jpg',
  },
];

export default function History() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Soft background accents */}
      <div
        className="pointer-events-none absolute -z-10 inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(40rem 20rem at 10% 120%, rgba(251, 191, 36, 0.08), transparent 60%), radial-gradient(28rem 16rem at 90% -10%, rgba(251, 146, 60, 0.08), transparent 60%)',
        }}
      />

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-3">
          <FaPrayingHands className="text-amber-600 w-7 h-7 drop-shadow-sm" aria-hidden="true" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent font-sinhala">
            අපගේ ප්‍රඥාවේ උරුමය
          </h2>
        </div>
        <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full mt-4" />
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          ශ්‍රී සුමංගල දහම් පාසලේ නිහතමානී ආරම්භයේ සිට බෞද්ධ අධ්‍යාපනයේ ජාතික ආලෝකයක් දක්වා වූ ගමන
          සොයා ගන්න.
        </p>
      </motion.div>

      {/* Intro row */}
      <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
        {/* Text */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="text-lg leading-relaxed text-gray-700 italic border-l-4 border-amber-600 pl-4">
            අධ්‍යාපනය යනු බුද්ධත්වයට යන මාර්ගය ආලෝකවත් කරන ආලෝකයයි.
          </blockquote>

          <p className="text-lg leading-relaxed text-gray-800">
            1975 දී පූජ්‍ය ආචාර්ය වල්පොල පියනන්ද හිමියන් විසින් ආරම්භ කරන ලද ශ්‍රී සුමංගල දහම් පාසල
            කුඩා භාවනා කණ්ඩායමක සිට බෞද්ධ දර්ශනය පිළිබඳව සිසුන් 50,000 කට අධික සංඛ්‍යාවක් දැනුවත් කර
            ඇති කීර්තිමත් ආයතනයක් බවට පරිණාමය වී ඇත. මෙම උරුමය සාම්ප්‍රදායික ධර්මය සමකාලීන
            අධ්‍යාපනය සමඟ සුසංයෝගීව ඒකාබද්ධ කිරීම පෙන්නුම් කරයි.
          </p>

          {/* Stats with react-icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Founded', value: '1975', Icon: FaCalendarAlt },
              { label: 'Students Impacted', value: '50,000+', Icon: FaUsers },
              { label: 'Programs', value: '12+', Icon: FaBookOpen },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-amber-100 bg-amber-50/60 p-4 text-center shadow-sm"
              >
                <s.Icon className="mx-auto text-amber-700 w-7 h-7" aria-hidden="true" />
                <div className="mt-2 text-2xl font-extrabold text-amber-800">{s.value}</div>
                <div className="text-xs uppercase tracking-wide text-amber-700">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Timeline with icons */}
          <div className="p-6 bg-white/70 rounded-xl shadow-md border border-amber-100">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-amber-900 mb-4">
              <MdTimeline className="w-5 h-5 text-amber-700" aria-hidden="true" />
              Milestones
            </h3>
            <ol className="relative border-l-2 border-amber-200 pl-6 space-y-6">
              {milestones.map((m, idx) => (
                <li key={idx} className="relative">
                  <span className="absolute -left-[13px] top-0">
                    <FaCircle className="text-amber-500 w-3 h-3" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                    <span className="text-amber-700 font-semibold">{m.year}</span>
                    <p className="text-gray-700">{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        {/* Images */}
        <motion.div
          className="lg:w-1/2 grid gap-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Image 1 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]">
            <Image
              src="/unnamed (1).jpg"
              alt="Historic campus"
              width={1280}
              height={768}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1280, 768))}`}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white font-medium">Our Original Vihara</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]">
            <Image
              src="/history2.jpg"
              alt="Founder portrait - Ven. Dr. Walpola Piyananda Thero"
              width={1280}
              height={768}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1280, 768))}`}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white font-medium">Ven. Dr. Piyananda Thero</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Leadership */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-amber-800 mb-8 md:mb-12 font-playfair">
          Former Principals & Leadership
        </h3>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg border border-amber-200 max-w-6xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leaders.map((person, index) => {
              const isSpiritual = person.role.toLowerCase().includes('spiritual');
              return (
                <li
                  key={index}
                  className="group flex items-center gap-5 p-5 rounded-xl bg-white/60 border border-amber-100 hover:border-amber-200 hover:shadow-md transition-all"
                >
                  <div className="relative shrink-0">
                    <Image
                      src={person.image}
                      alt={`${person.name} - ${person.role}`}
                      width={112}
                      height={112}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-md ring-2 ring-amber-100 group-hover:ring-amber-200 transition"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(112, 112))}`}
                    />
                    {isSpiritual && (
                      <span className="absolute -bottom-2 -right-1 bg-amber-500 text-white px-2 py-0.5 rounded-full text-[10px] font-semibold shadow inline-flex items-center gap-1">
                        <FaCrown className="w-3.5 h-3.5" aria-hidden="true" />
                        Spiritual Leader
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg sm:text-xl font-semibold text-amber-900 truncate">
                      {person.name}
                    </h4>
                    <p className="text-amber-700">{person.role}</p>
                    {isSpiritual && (
                      <p className="text-sm text-amber-600 mt-1 italic">
                        Continuing to guide our spiritual journey since 1995
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 pt-6 border-t border-amber-200 text-center">
            <p className="text-sm text-amber-700/80 italic">
              We honor the legacy of all who shaped our institution
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}