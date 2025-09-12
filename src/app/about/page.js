// app/about/page.jsx
import Image from "next/image";
import Link from "next/link";
import {
  FaPagelines,
  FaChalkboardTeacher,
  FaBookOpen,
  FaHandsHelping,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPagelines className="w-12 h-12" />,
    title: "Our Vision",
    stitle: "අපගේ දැක්ම",
    content: "A spiritually awakened community living in accordance with the Dhamma",
    color: "from-green-100 to-green-50",
  },
  {
    icon: <FaChalkboardTeacher className="w-12 h-12" />,
    title: "Our Mission",
    stitle: "අපගේ මෙහෙය",
    content:
      "To guide devotees on the path of Dhamma through rituals, teachings, and compassionate action",
    color: "from-amber-100 to-amber-50",
  },
  {
    icon: <FaBookOpen className="w-12 h-12" />,
    title: "Our Offerings",
    stitle: "අපගේ සේවාවන්",
    content:
      "Daily pujas, Dhamma sermons, meditation sessions, and community outreach programs",
    color: "from-blue-100 to-blue-50",
  },
];

const timeline = [
  { year: "1975", event: "Temple founded by Ven. Pallegama Siriniwasa Thera" },
  { year: "1982", event: "Construction of the main shrine and meditation hall" },
  { year: "2004", event: "Became a regional center for Vesak celebrations" },
  { year: "2020", event: "Introduced virtual Dhamma sermons and online meditation sessions" },
];

export default function AboutUs() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Soft vignette and dot pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.06)_95%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><circle cx=%2220%22 cy=%2220%22 r=%221.5%22 fill=%22%23d97706%22 fill-opacity=%220.5%22/></svg>')",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8 relative z-10">
        {/* Hero */}
        <header className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-amber-100 text-amber-800/90 font-sinhala text-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            අපි ගැන
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-amber-800 to-yellow-800">
            About Us
          </h1>

          <p className="mt-4 text-base sm:text-lg text-amber-800/90 max-w-3xl mx-auto leading-relaxed">
            Established in 1975, Sri Sudarshanarama Purana Maha Viharaya stands as a beacon of
            <span className="font-semibold text-amber-900"> spiritual guidance</span>,
            <span className="font-semibold text-amber-900"> mindfulness</span>, and
            <span className="font-semibold text-amber-900"> compassionate service</span>. Rooted in the teachings of the Buddha, we serve as a sanctuary for devotees seeking inner peace and wisdom.
          </p>

          <p className="font-sinhala text-amber-900/95 max-w-3xl mx-auto leading-relaxed mt-4">
            1975 දී ස්ථාපිත වූ ශ්‍රී සුදර්ශනාරාම පුරාණ මහා විහාරය බුදුදහමේ
            උපදෙස්, සතුටු සිහිසේසීම සහ දයානුකම්පාව යන අගයන් මඟින් සමාජයට
            ආලෝකය ලබාදෙයි. අභ්‍යන්තර සමාධිය හා ප්‍රඥාව සොයන භක්ත සංඝයට
            අභයභූමියක් ලෙස අප විහාරස්ථානය සේවය කරයි.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Since", value: "1975" },
              { label: "Programs / year", value: "100+" },
              { label: "Community", value: "1,000+" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/80 backdrop-blur-sm border border-amber-100 p-4 shadow-sm"
              >
                <div className="text-2xl font-bold text-amber-900">{s.value}</div>
                <div className="text-sm text-amber-700">{s.label}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Feature Grid */}
        <section aria-labelledby="features" className="mb-20">
          <h2 id="features" className="sr-only">Features</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 text-center">
            {features.map((item, index) => (
              <article
                key={index}
                className={`bg-gradient-to-br ${item.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100`}
              >
                <div className="mx-auto mb-5 grid place-items-center w-16 h-16 rounded-2xl bg-white ring-1 ring-amber-200 shadow-inner text-amber-700">
                  {item.icon}
                </div>
                <h3 className="font-sinhala text-xl text-amber-800">{item.stitle}</h3>
                <p className="text-2xl font-bold text-amber-900 mt-1">{item.title}</p>
                <p className="text-amber-800/90 leading-relaxed mt-3">{item.content}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section aria-labelledby="journey" className="mb-20">
          <h2 id="journey" className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6">
            Our Journey
          </h2>

          <div className="relative">
            {/* Line */}
            <span className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-px bg-amber-200" aria-hidden="true" />
            <ol className="space-y-6 relative">
              {timeline.map((item, index) => (
                <li key={index} className="pl-12 sm:pl-16 md:pl-20">
                  <div className="relative">
                    {/* Dot */}
                    <span
                      className="absolute -left-8 sm:-left-10 md:-left-12 top-2 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-amber-100"
                      aria-hidden="true"
                    />
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-amber-700 font-bold border-2 border-amber-200 shadow-sm">
                        {item.year}
                      </div>
                      <p className="text-base sm:text-lg text-amber-900 pt-2">{item.event}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section aria-labelledby="philosophy" className="grid gap-10 sm:gap-12 md:grid-cols-2 items-center mb-20">
          <h2 id="philosophy" className="sr-only">Temple Philosophy</h2>

          <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-amber-200/60">
            <Image
              src="/path-to-temple-photo.jpg"
              alt="Temple Activities"
              width={1200}
              height={800}
              className="w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover transition duration-500 hover:scale-[1.03]"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-900/15 via-transparent to-transparent" />
          </div>

          <div>
            <p className="text-2xl font-bold text-amber-900 mb-2">Temple Philosophy</p>
            <p className="text-base sm:text-lg text-amber-800/90 leading-relaxed mb-6">
              Our temple embodies the Buddha’s teachings in everyday life. We emphasize:
            </p>
            <ul className="space-y-4">
              {[
                "Daily mindfulness through rituals and meditation",
                "Loving-kindness and compassionate service",
                "Cultural preservation through religious festivals",
                "Community gatherings and spiritual counseling",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-amber-900">
                  <FaHandsHelping className="mt-1 text-amber-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Sinhala emphasis */}
            <blockquote className="mt-6 p-4 rounded-2xl bg-amber-100/60 border border-amber-200">
              <p className="font-sinhala text-amber-900 leading-relaxed">
                “සියලු සතුන්ට කරුණාව, සදා සත්‍යයෙහි රැදී සිටීම, සහ සද්ධර්මය
                දැනුමෙන් කරුණාවෙන් දානවීම — අපගේ මූලධර්මයයි.”
              </p>
            </blockquote>
          </div>
        </section>

        {/* Callout */}
        <section className="rounded-3xl bg-gradient-to-r from-amber-100 to-amber-50 p-8 md:p-10 border border-amber-200 shadow-sm">
          <h3 className="font-sinhala text-xl text-amber-900 mb-2">අප සමඟ එක්වන්න</h3>
          <p className="text-amber-800/90 mb-4">
            Join our community for meditation, Dhamma sessions, and service.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber-800 text-amber-50 hover:bg-amber-700 px-5 py-3 text-sm font-medium transition"
            >
              Contact the Temple
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}