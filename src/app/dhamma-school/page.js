'use client'
import { useState } from 'react'

export default function DhammaSchool() {
  const [selectedCategory, setSelectedCategory] = useState('history')

  const categories = [
    { id: 'history', label: 'Our History' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'prefects', label: 'Prefects' },
    { id: 'programs', label: 'Programs & Activities' },
    { id: 'staff', label: 'Teaching Staff' },
  ]

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div
        className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] bg-cover bg-center group transition-all duration-500"
        style={{ backgroundImage: "url('/dpheader.jpg')", backgroundPosition: 'center 40%' }}
        aria-label="Dhamma School Header"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white/90 flex flex-col items-center justify-center text-center p-4 md:p-8">
          <div className="space-y-4 transform group-hover:scale-95 transition-transform duration-500 ">
          <h1 className="mt-24 md:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tighter drop-shadow-md">

              DHAMMA SCHOOL
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-2 md:mt-4">
  ශ්‍රි සුමංගල දහම් පාසැල
</p>

            
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 py-3 flex overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 mx-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-600 hover:bg-amber-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        {selectedCategory === 'history' && (
          <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-amber-700">Our Proud History</h2>
            <p className="text-lg leading-relaxed">
              Established in 1975, Sri Sumangala Dhamma School has been nurturing young minds in
              Buddhist teachings for over four decades. Founded by Ven. Dr. Walpola Piyananda Thero,
              our school has grown from humble beginnings to become a leading institution in
              Dhamma education...
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <img src="/history1.jpg" alt="Old school building" className="rounded-lg shadow-lg" />
              <img src="/history2.jpg" alt="Founder portrait" className="rounded-lg shadow-lg" />
            </div>
          </section>
        )}

        {selectedCategory === 'facilities' && (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Meditation Hall</h3>
              <p className="text-gray-600">Spacious area for mindfulness practice and group meditation</p>
              <img src="/meditation-hall.jpg" alt="Meditation Hall" className="mt-4 rounded-lg" />
            </div>
            <div className="p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Dhamma Library</h3>
              <p className="text-gray-600">Over 5,000 Buddhist texts and modern spiritual literature</p>
              <img src="/library.jpg" alt="Library" className="mt-4 rounded-lg" />
            </div>
            <div className="p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Open Auditorium</h3>
              <p className="text-gray-600">500-seat facility for lectures and cultural events</p>
              <img src="/auditorium.jpg" alt="Auditorium" className="mt-4 rounded-lg" />
            </div>
          </section>
        )}

        {selectedCategory === 'prefects' && (
          <section className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-amber-700">Senior Prefects</h3>
              <ul className="space-y-3">
                <li className="flex items-center p-3 bg-amber-50 rounded">
                  <span className="font-medium">Kavindu Perera</span>
                  <span className="ml-auto text-sm text-amber-600">Head Prefect</span>
                </li>
                {/* Add more prefects */}
              </ul>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-amber-700">Junior Prefects</h3>
              <ul className="space-y-3">
                <li className="flex items-center p-3 bg-amber-50 rounded">
                  <span className="font-medium">Sachini Fernando</span>
                  <span className="ml-auto text-sm text-amber-600">Assistant Prefect</span>
                </li>
                {/* Add more prefects */}
              </ul>
            </div>
          </section>
        )}

        {selectedCategory === 'programs' && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-amber-700">Annual Programs</h2>
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-amber-500 bg-amber-50 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2">Bakthi Gee Competition</h3>
                <p className="text-gray-600">Annual devotional songs competition held every October</p>
              </div>
              {/* Add more programs */}
            </div>
          </section>
        )}

        {selectedCategory === 'staff' && (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 text-center bg-white shadow-lg rounded-lg">
              <img src="/teacher1.jpg" alt="Head Teacher" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold">Ven. Sumanasara Thero</h3>
              <p className="text-amber-600">Head of Dhamma School</p>
            </div>
            {/* Add more staff members */}
          </section>
        )}
      </div>
    </div>
  )
}