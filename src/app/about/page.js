// app/about/page.jsx or pages/about.jsx
import { FaPagelines, FaChalkboardTeacher, FaBookOpen, FaHandsHelping } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 mb-6 mt-10 animate-fade-in-down">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-amber-700/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Established in 1975, Sri Sudarshanarama Purana MahaViharaya stands as a beacon of
            <span className="font-semibold text-amber-900"> spiritual guidance</span>,
            <span className="font-semibold text-amber-900"> mindfulness</span>, and
            <span className="font-semibold text-amber-900"> compassionate service</span>.
            Rooted in the teachings of the Buddha, we serve as a sanctuary for devotees seeking inner peace and wisdom.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 text-center mb-20">
          {[
            {
              icon: <FaPagelines className="w-12 h-12" />,
              title: "Our Vision",
              content: "A spiritually awakened community living in accordance with the Dhamma",
              color: "bg-gradient-to-br from-green-100 to-green-50"
            },
            {
              icon: <FaChalkboardTeacher className="w-12 h-12" />,
              title: "Our Mission",
              content: "To guide devotees on the path of Dhamma through rituals, teachings, and compassionate action",
              color: "bg-gradient-to-br from-amber-100 to-amber-50"
            },
            {
              icon: <FaBookOpen className="w-12 h-12" />,
              title: "Our Offerings",
              content: "Daily pujas, Dhamma sermons, meditation sessions, and community outreach programs",
              color: "bg-gradient-to-br from-blue-100 to-blue-50"
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all 
              duration-300 transform hover:-translate-y-2 border-l-4 border-amber-600`}
            >
              <div className="text-amber-700 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4">{item.title}</h3>
              <p className="text-amber-700/90 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-amber-50 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-repeat"
            style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJMMiA3bDEwIDUgMTAtNS0xMC01ek0yIDE3bDEwIDUgMTAtNU0yIDEybDEwIDUgMTAtNSIgc3Ryb2tlPSIjZjU5ZDI4IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')" }}>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-8">Our Journey</h2>
          <div className="space-y-8 relative">
            {[
              { year: "1975", event: "Temple founded by Ven. Pallegama Siriniwasa Thera" },
              { year: "1982", event: "Construction of the main shrine and meditation hall" },
              { year: "2004", event: "Became a regional center for Vesak celebrations" },
              { year: "2020", event: "Introduced virtual Dhamma sermons and online meditation sessions" }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center 
                               text-sm sm:text-base md:text-lg text-amber-700 font-bold border-2 border-amber-200">
                  {item.year}
                </div>
                <p className="text-base sm:text-lg text-amber-800 pt-2">{item.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 items-center mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/path-to-temple-photo.jpg"
              alt="Temple Activities"
              className="w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover transform transition duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-6">Temple Philosophy</h2>
            <p className="text-base sm:text-lg text-amber-700/90 leading-relaxed mb-6">
              Our temple embodies the Buddha’s teachings in everyday life. We emphasize:
            </p>
            <ul className="space-y-4">
              {[
                'Daily mindfulness through rituals and meditation',
                'Loving-kindness and compassionate service',
                'Cultural preservation through religious festivals',
                'Community gatherings and spiritual counseling'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-amber-800">
                  <FaHandsHelping className="flex-shrink-0 text-amber-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
