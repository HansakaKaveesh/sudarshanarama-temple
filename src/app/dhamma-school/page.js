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
    { id: 'gallery', label: 'gallery' },
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
<nav className="sticky top-0 bg-white/90 backdrop-blur-md shadow-md z-40 w-full">
  <div className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center overflow-x-auto space-x-4 scrollbar-hide scroll-smooth">
    {categories.map((category) => (
      <button
        key={category.id}
        onClick={() => setSelectedCategory(category.id)}
        className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition duration-300 transform
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400
          ${
            selectedCategory === category.id
              ? 'bg-amber-600 text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700 hover:scale-105'
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
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">
      Our Legacy of Wisdom
    </h2>
    <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full" />
  </div>

  <div className="flex flex-col lg:flex-row gap-8 items-center">
    <div className="lg:w-1/2 space-y-6">
      <p className="text-lg leading-relaxed text-gray-700 italic border-l-4 border-amber-600 pl-4">
        Education is the light that illuminates the path to enlightenment
      </p>
      <p className="text-lg leading-relaxed text-gray-800">
        Founded in 1975 by Ven. Dr. Walpola Piyananda Thero, Sri Sumangala Dhamma School has blossomed from a small meditation group to a premier institution nurturing over 50,000 students in Buddhist philosophy. Our journey reflects the timeless wisdom of the Dhamma adapting to modern education.
      </p>
      
      <div className="p-6 bg-amber-50 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-amber-900 mb-3">Milestones</h3>
        <ul className="space-y-2 list-disc list-inside text-amber-800">
          <li>1982: First purpose-built Dhamma hall completed</li>
          <li>1995: Recognized as National Model Dhamma School</li>
          <li>2010: Digital Learning Initiative launched</li>
        </ul>
      </div>
    </div>

    <div className="lg:w-1/2 relative group">
      <div className="grid gap-6 transform transition-all duration-300">
        <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
          <img 
            src="/unnamed (1).jpg" 
            alt="Historic campus" 
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900 p-4">
            <p className="text-white font-medium">Our Original Vihara</p>
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
          <img 
            src="/history2.jpg" 
            alt="Founder portrait" 
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900 p-4">
            <p className="text-white font-medium">Ven. Dr. Piyananda Thero</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-12 text-center">
    <a href="/legacy" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:-translate-y-1">
      Explore Our Legacy →
    </a>
  </div>
</section>
        )}

        {selectedCategory === 'facilities' && (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-0 py-10">
          {[
            {
              title: "Meditation Hall",
              description: "Spacious area for mindfulness practice and group meditation.",
              img: "/meditation-hall.jpg",
              alt: "Meditation Hall",
            },
            {
              title: "Dhamma Library",
              description: "Over 5,000 Buddhist texts and modern spiritual literature.",
              img: "/library.jpg",
              alt: "Library",
            },
            {
              title: "Open Auditorium",
              description: "500-seat facility for lectures and cultural events.",
              img: "/auditorium.jpg",
              alt: "Auditorium",
            },
          ].map(({ title, description, img, alt }, index) => (
            <div
              key={index}
              className="group relative p-6 bg-amber-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={img}
                alt={alt}
                className="rounded-xl object-cover w-full h-64 mb-4 transform group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-semibold text-amber-700 mb-2">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
              <div className="absolute inset-0 bg-amber-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
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
          <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-amber-700 text-center">Annual Programs</h2>
          <div className="space-y-8">
            {/* Program 1 */}
            <div className="group flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="md:w-1/3 relative overflow-hidden">
                <img 
                  src="/path-to-bhakti-gee-image.jpg" 
                  alt="Bhakti Gee Performance" 
                  className="w-full h-48 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-800/30 to-transparent"></div>
              </div>
              <div className="p-6 md:w-2/3 border-l-4 border-amber-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">Oct 15-20</span>
                  <span className="text-gray-500 text-sm">• Annual Event</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bhakti Gee Competition</h3>
                <p className="text-gray-600 mb-4">Experience the divine harmony of devotional songs performed by talented artists from across the region. This annual October event features both traditional bhajans and contemporary spiritual compositions.</p>
                <div className="flex items-center gap-4">
                  <button className="text-amber-700 hover:text-amber-800 font-medium flex items-center">
                    View Schedule
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                  <span className="text-gray-500 text-sm">Free Entry</span>
                </div>
              </div>
            </div>
        
            {/* Program 2 */}
            <div className="group flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="md:w-1/3 relative overflow-hidden">
                <img 
                  src="/path-to-art-exhibition-image.jpg" 
                  alt="Spiritual Art Exhibition" 
                  className="w-full h-48 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-800/30 to-transparent"></div>
              </div>
              <div className="p-6 md:w-2/3 border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Mar 20-25</span>
                  <span className="text-gray-500 text-sm">• Art & Culture</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Spiritual Art Exhibition</h3>
                <p className="text-gray-600 mb-4">Explore sacred art forms through centuries-old traditions and modern interpretations. Features live demonstrations, artist talks, and interactive workshops.</p>
                <div className="flex items-center gap-4">
                  <button className="text-purple-700 hover:text-purple-800 font-medium flex items-center">
                    View Gallery
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                  <span className="text-gray-500 text-sm">50+ Artists</span>
                </div>
              </div>
            </div>
        
            {/* Program 3 */}
            <div className="group flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="md:w-1/3 relative overflow-hidden">
                <img 
                  src="/path-to-workshop-image.jpg" 
                  alt="Scripture Workshop" 
                  className="w-full h-48 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/30 to-transparent"></div>
              </div>
              <div className="p-6 md:w-2/3 border-l-4 border-emerald-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">Jul 8-12</span>
                  <span className="text-gray-500 text-sm">• Educational</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Scripture Workshop Series</h3>
                <p className="text-gray-600 mb-4">Deep dive into ancient texts with renowned scholars. Daily sessions include guided readings, group discussions, and practical applications for modern life.</p>
                <div className="flex items-center gap-4">
                  <button className="text-emerald-700 hover:text-emerald-800 font-medium flex items-center">
                    Register Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                  <span className="text-gray-500 text-sm">Limited Seats</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {selectedCategory === 'staff' && (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 text-center bg-white shadow-lg rounded-lg">
            <img src="/chief-monk.jpg" alt="Head Teacher" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">Venerable Uluvitike Anuruddha Thera</h3>
            <p className="text-amber-600">Head of Dhamma School</p>
          </div>
        
          <div className="p-6 text-center bg-white shadow-lg rounded-lg">
            <img src="/teacher1.jpg" alt="Senior Teacher" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">Mrs. Sandamali Herath</h3>
            <p className="text-amber-600">Senior Teacher - Grade 10 & 11</p>
          </div>
        
          <div className="p-6 text-center bg-white shadow-lg rounded-lg">
            <img src="/teacher2.jpg" alt="Assistant Teacher" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">Mr. Nishantha Perera</h3>
            <p className="text-amber-600">Assistant Teacher - Grade 8 & 9</p>
          </div>
        </section>
        
        )}

{selectedCategory === 'gallery' && (
  <section className="max-w-6xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-10 text-blue-700 text-center">Facebook Albums</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Album 1 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <img
        src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/486550736_2844822805678408_7850764153772363523_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHBvy_NnkjSjHx5lcI7KMD7l7PKfW1BjmSXs8p9bUGOZBB6Y53xr23ksdbZh9ldJN5VL6mYFtPGLgZaHOYtvqY6&_nc_ohc=ujarzVqy9gIQ7kNvwHNlA1X&_nc_oc=AdksoGyfLNULL8_p0aOIO9nWyLrXHL75_WQN0ylUEGuy1OwcPtwQ6dGoJtzDHAGfArQ&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=-C-UeISfKJR0TtZxc_QaQg&oh=00_AfHuP0rsvlrMilpjFQuitwt004cnfEWGDues7kuhMXGmRw&oe=67FE8F92"
        alt="Album 1"
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Annual Bhakti Gee Night - පොසොන් බැති ගී 2022</h3>
        <a
          href="https://www.facebook.com/media/set/?set=a.2116136411880388&type=3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:text-blue-800 font-medium"
        >
          View Album on Facebook →
        </a>
      </div>
    </div>

    {/* Album 2 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <img
        src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/79856150_1330893550404682_3370722382946762752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeFAVxlEYnXUilmFQ78rHVsHUtTfUB1mxqhS1N9QHWbGqEeD4qGVH7JPnB1QMUc2z_57VUzpEV0VsVHSPY6yyj58&_nc_ohc=jSM-SK1T1LcQ7kNvwEh3f5g&_nc_oc=AdnxTVgRwcyYjBDUPHXxamiar9V1eCAurIMN3Vb3eYj1LSIspJDUjrj6GlJhpr97uRU&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=HztLPecFhcwqfW33qTIPZQ&oh=00_AfG1suppwXfqFkYkn5rSBjVjWzPpFtNZNTupeWcFQrrrPQ&oe=68201FCB"
        alt="Album 2"
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">SUMANGALA BITHUSITHUWAM - 2019</h3>
        <a
          href="https://www.facebook.com/media/set/?set=a.1330892760404761&type=3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:text-blue-800 font-medium"
        >
          View Album on Facebook →
        </a>
      </div>
    </div>

    {/* Album 3 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <img
        src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/59645142_1144530759040963_7237648655497297920_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeH0lRfBerSrLleDzuXpW7Pbzst9hbPYtEvOy32Fs9i0S3fZIOs5kSYnDubvYDMgMEWV1ft0PwZVd3lGh8kA1mFK&_nc_ohc=s4vAwrgsS4cQ7kNvwGHBMZv&_nc_oc=Adk10YAAXba6Ot6v5lXlcTmT1sCmZpfs0CRQXgDpXvVXVPr9_3VtMV2gD-WHgcgYhEg&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=yDj73PQhzDhuziJt6vf55w&oh=00_AfHIsyhv5oe5W-ASZFFoH0czURS7jRbqPb91B4F-gnag6Q&oe=682017CF"
        alt="Album 3"
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">SUMANGALA AWURUDU - 2019</h3>
        <a
          href="https://www.facebook.com/media/set/?set=a.1144528429041196&type=3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:text-blue-800 font-medium"
        >
          View Album on Facebook →
        </a>
      </div>
    </div>

    {/* You can add 3 more albums the same way */}
  </div>
</section>

)}

      </div>
    </div>
  )
}