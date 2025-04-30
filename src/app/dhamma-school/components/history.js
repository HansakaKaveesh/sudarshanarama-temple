export default function History() {
    return (
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent font-sinhala">
          අපගේ ප්‍රඥාවේ උරුමය
          </h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          ශ්‍රී සුමංගල දහම් පාසලේ නිහතමානී ආරම්භයේ සිට බෞද්ධ අධ්‍යාපනයේ ජාතික ආලෝකයක් දක්වා වූ ගමන සොයා ගන්න.
          </p>
        </div>
  
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <blockquote className="text-lg leading-relaxed text-gray-700 italic border-l-4 border-amber-600 pl-4">
            අධ්‍යාපනය යනු බුද්ධත්වයට යන මාර්ගය ආලෝකවත් කරන ආලෝකයයි.
            </blockquote>
  
            <p className="text-lg leading-relaxed text-gray-800">
            1975 දී පූජ්‍ය ආචාර්ය වල්පොල පියනන්ද හිමියන් විසින් ආරම්භ කරන ලද ශ්‍රී සුමංගල දහම් පාසල කුඩා භාවනා කණ්ඩායමක සිට බෞද්ධ දර්ශනය පිළිබඳව සිසුන් 50,000 කට අධික සංඛ්‍යාවක් දැනුවත් කර ඇති කීර්තිමත් ආයතනයක් බවට පරිණාමය වී ඇත. මෙම උරුමය සාම්ප්‍රදායික ධර්මය සමකාලීන අධ්‍යාපනය සමඟ සුසංයෝගීව ඒකාබද්ධ කිරීම පෙන්නුම් කරයි.
            </p>
  
            <div className="p-6 bg-amber-50 rounded-xl shadow-md border border-amber-100">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Milestones</h3>
              <ul className="space-y-2 list-disc list-inside text-amber-800">
                <li><span className="font-semibold">1982:</span> First purpose-built Dhamma hall completed</li>
                <li><span className="font-semibold">1995:</span> Recognized as National Model Dhamma School</li>
                <li><span className="font-semibold">2010:</span> Digital Learning Initiative launched</li>
              </ul>
            </div>
          </div>
  
          {/* Image Section */}
          <div className="lg:w-1/2 grid gap-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02]">
              <img 
                src="/unnamed (1).jpg" 
                alt="Historic campus" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/90 via-amber-900/60 to-transparent p-4">
                <p className="text-white font-medium">Our Original Vihara</p>
              </div>
            </div>
  
            <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02]">
              <img 
                src="/history2.jpg" 
                alt="Founder portrait" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/90 via-amber-900/60 to-transparent p-4">
                <p className="text-white font-medium">Ven. Dr. Piyananda Thero</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Former Principals and Vice Principals Section */}
<div className="mt-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
  <h3 className="text-3xl sm:text-4xl font-bold text-center text-amber-800 mb-8 md:mb-12 font-playfair">
    Former Principals & Leadership
  </h3>
  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg border border-amber-200 max-w-6xl mx-auto transform transition-all duration-300 hover:shadow-xl">
    <ul className="space-y-6 sm:space-y-8 md:space-y-10">
      {[
        {
          name: "Ven. Kalupahana Seelawansa Thero",
          role: "Founding Principal (1975–1985)",
          image: "/images/seelawansa.jpg",
        },
        {
          name: "Ven. Dikwelle Pannasekara Thero",
          role: "Principal (1986–1995)",
          image: "/images/pannasekara.jpg",
        },
        {
          name: "Mrs. Anula Wijesinghe",
          role: "Vice Principal (1980–1992)",
          image: "/images/anula.jpg",
        },
        {
          name: "Mr. Sanath Jayasuriya",
          role: "Vice Principal (1993–2005)",
          image: "/images/sanath.jpg",
        },
        {
          name: "Ven. Dr. Walpola Piyananda Thero",
          role: "Chief Advisor & Spiritual Guide",
          image: "/images/piyananda.jpg",
        },
      ].map((person, index, array) => (
        <li
          key={index}
          className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 p-6 rounded-lg transition-all duration-300 hover:bg-amber-50/50 relative"
        >
          <div className="relative">
            <img
              src={person.image}
              alt={`${person.name} - ${person.role}`}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-amber-200 object-cover shadow-md transform transition-all duration-300 group-hover:scale-105 group-hover:border-amber-300"
            />
            {person.role.includes("Spiritual Guide") && (
              <div className="absolute bottom-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium transform translate-y-2">
                ✨ Spiritual Leader
              </div>
            )}
          </div>

          <div className="flex-1">
            <h4 className="text-xl sm:text-2xl font-semibold text-amber-900 font-merriweather">
              {person.name}
            </h4>
            <p className="text-base sm:text-lg md:text-xl text-amber-700 mt-1">
              {person.role}
            </p>
            {person.role.includes("Spiritual Guide") && (
              <p className="text-sm text-amber-600 mt-2 italic">
                Continuing to guide our spiritual journey since 1995
              </p>
            )}
          </div>

          {index !== array.length - 1 && (
            <div className="absolute bottom-0 inset-x-6 border-b border-amber-100/80 group-hover:border-transparent" />
          )}
        </li>
      ))}
    </ul>

    <div className="mt-8 pt-6 border-t border-amber-200 text-center">
      <p className="text-sm text-amber-600 italic">
        We honor the legacy of all who shaped our institution
      </p>
    </div>
  </div>
</div>


      </section>
    );
  }
  