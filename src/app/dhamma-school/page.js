'use client'
import { useState } from 'react'

export default function DhammaSchool() {
  const [selectedCategory, setSelectedCategory] = useState('school')

  const categories = [
    { id: 'school', label: 'Dhamma School' },
    { id: 'history', label: 'Our History' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'staff', label: 'Teaching Staff' },
    { id: 'prefects', label: 'Prefects' },
    { id: 'programs', label: 'Programs & Activities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
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
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto scrollbar-hide scroll-smooth">
    <div className="flex items-center justify-start space-x-4 w-max min-w-full">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`whitespace-nowrap min-w-max px-6 py-2.5 rounded-full text-sm font-semibold transition duration-300 transform
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
  </div>
</nav>





      {/* Content Sections */}
      <div className="container mx-auto px-10 py-12">
        {selectedCategory === 'school' && (
              <section className="relative  py-16 px-4 sm:px-8 lg:px-16">
              <div className="max-w-7xl mx-auto">
                {/* Decorative Dharma Wheel */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10">
                  <svg className="w-48 h-48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="#FBBF24"/>
                    <path d="M50 85.7143C69.3395 85.7143 85.7143 69.3395 85.7143 50C85.7143 30.6605 69.3395 14.2857 50 14.2857C30.6605 14.2857 14.2857 30.6605 14.2857 50C14.2857 69.3395 30.6605 85.7143 50 85.7143Z" fill="white"/>
                    <path d="M50 71.4286C61.8645 71.4286 71.4286 61.8645 71.4286 50C71.4286 38.1355 61.8645 28.5714 50 28.5714C38.1355 28.5714 28.5714 38.1355 28.5714 50C28.5714 61.8645 38.1355 71.4286 50 71.4286Z" fill="#FBBF24"/>
                  </svg>
                </div>
            
                <header className="relative z-10 text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl font-bold text-yellow-900 mb-6 font-sinhala">
                    <span className="block english-font">Sri Sumangala Dhamma School</span>
                    ශ්‍රි සුමංගල දහම් පාසැල
                  </h2>
                  <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-gray-800 leading-relaxed mb-8">
                    Our temple is a sanctuary of peace and mindfulness, nurturing spiritual growth through the Buddha&rsquo;s timeless wisdom. We offer guidance, meditation, and Dhamma education for all ages in a compassionate environment.
                    </p>
                    <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full"/>
                  </div>
                </header>
            
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                  {[
                    { 
                      title: "Our Mission", 
                      content: "Guide individuals on the path of Dhamma through peace, compassion, and mindful living",
                      icon: "🌸"
                    },
                    { 
                      title: "Our Vision", 
                      content: "A spiritually awakened community living in harmony with Buddhas teachings",
                      icon: "☸️"
                    },
                    { 
                      title: "Our Values", 
                      content: "Compassion, mindfulness, generosity, discipline, and wisdom in all practices",
                      icon: "🧘"
                    }
                  ].map((card, index) => (
                    <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500">
                      <div className="absolute top-4 right-4 text-3xl opacity-30">{card.icon}</div>
                      <h3 className="text-2xl font-bold text-yellow-900 mb-4">{card.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{card.content}</p>
                    </div>
                  ))}
                </div>
            
                <div className="space-y-16">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl">
                      <img 
                        src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/462767541_2700196043474419_2820044370736457035_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHh2Lupwv2XRdERkitt-bCmAgdfpJ3RMMICB1-kndEwwhpwemXBoAg8x2bx6PuxH05MmMVOzdqKJ5OX4EyquiOm&_nc_ohc=8UJ9dE88CVkQ7kNvwGlvnDw&_nc_oc=AdmDsM3KxkiVd8xZ5kX2bEA0xQJ8id52sjTiopRMWF2XIBGOqrQKDms8Vn2QmABVoWM&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=Sb1bRvOyAiqjdajhf_jmrg&oh=00_AfHrQ1F0nCO22mG1_atIi9sjCGCbqBeZAesHlFKJ6SFVJQ&oe=67FEA9AF" 
                        alt="Dhamma School History" 
                        className="w-full h-64 object-cover transform transition duration-500 hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-yellow-900 mb-6">Our Heritage</h3>
                      <p className="text-gray-800 leading-relaxed">
                        Established in 1975, Sri Sumangala Dhamma School has blossomed into a beacon of Buddhist education. 
                        Through decades of dedicated service, we&rsquo;ve nurtured generations in the Noble Eightfold Path, 
                        guided by venerable monks and devoted teachers committed to preserving our rich spiritual legacy.
                      </p>
                    </div>
                  </div>
            
                  <div className="bg-yellow-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 opacity-10 text-9xl">🙏</div>
                    <h3 className="text-3xl font-bold text-yellow-900 mb-6">Principal&rsquo;s Guidance</h3>
                    <blockquote className="text-gray-800 text-lg italic leading-relaxed mb-6">
                    &ldquo;True Dhamma education is not merely in books, but in cultivating kind hearts and wise minds.
  Together with our dedicated teachers and supportive community, we strive to raise a generation
  rooted in Buddhist values.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center text-white text-2xl">A</div>
                      <div>
                        <p className="font-bold text-yellow-900">Venerable Uluvitike Anuruddha Thera</p>
                        <p className="text-gray-600">Chief Incumbent & Principal</p>
                      </div>
                    </div>
                  </div>
            
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-yellow-900 mb-6">Community Roots</h3>
                      <ul className="space-y-4 text-gray-800">
                        {['Temple maintenance projects', 'Dana collections', 'Vesak lantern workshops', 
                          'Sil programs', 'Dhamma discussion circles'].map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">✓</div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <img src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/39248884_980174078809966_1059204802812051456_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeETyQ4UM2Wvm98WN_jTrmyBHUvO_C6fQFgdS878Lp9AWKRwe7gbxi5Ixy4VxaiHtwt4uCeCr_XWcOZsPyodNVvT&_nc_ohc=QJwegRQKck0Q7kNvwHQvqqr&_nc_oc=Adl2a0uR0-ocNFs6GW8I3v5r4eGsIfYS-D02oGZWicKfuHgEisezMVhDIaW_7FFIDso&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=pUi10ZwkNNVcaVy3dFYBig&oh=00_AfGWSK1W2JcpwCUv8gosp7_5W98Ax1BJqhfnBBV9B_a6zQ&oe=68203BA7" alt="Community Service" className="rounded-2xl h-48 object-cover" />
                      <img src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/463432514_2707441659416524_2027133231080509496_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeG0566s38aPUt7rESeARY_8vUjphaFQ7Wm9SOmFoVDtaYSLrfoLDXfPFqELEYurj8H_P6JT9vXnJvBuAl9sTPNK&_nc_ohc=0jRDjwSeIeMQ7kNvwGJkk7w&_nc_oc=AdnW9Tas1K7I8Xnlry1kIbnIi1dgVYB5pU20seV31_z_6h7diughxxUKlpaUb3IqI_0&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=SSGtCWzs03VMuWVIdr4Wag&oh=00_AfH917W7uvfBWOl04HXsWmWHH-YLwoAkviEjnKiPPSCjQw&oe=67FEB80A" alt="Dhamma Class" className="rounded-2xl h-48 object-cover mt-8" />
                      <img src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/486319669_2844823199011702_7910226328139359809_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGZwnPeWPaj6tV8jxky4X0aoppHbQZ0yUmimkdtBnTJSW6AmMqexW0RDiwOu8LG_d6pzkH21XxKMfSWpCpHN0z1&_nc_ohc=uio8ScBzU5EQ7kNvwGlAz5c&_nc_oc=AdlI3eHVRPaccoX1dna2aJEaup-j1ydgbph96k-JYTlGkD1BwGfq1j-NX5RMvw9iOcw&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=BehfWcK_0fLNpPxzyy_OfA&oh=00_AfEQYwezly8v4iJOZoZKVfmHpducCDw4Alzcv_z9X71JQA&oe=67FE9F42" alt="Vesak Celebration" className="rounded-2xl h-48 object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            
)}




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
              img: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/462767541_2700196043474419_2820044370736457035_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHh2Lupwv2XRdERkitt-bCmAgdfpJ3RMMICB1-kndEwwhpwemXBoAg8x2bx6PuxH05MmMVOzdqKJ5OX4EyquiOm&_nc_ohc=8UJ9dE88CVkQ7kNvwGlvnDw&_nc_oc=AdmDsM3KxkiVd8xZ5kX2bEA0xQJ8id52sjTiopRMWF2XIBGOqrQKDms8Vn2QmABVoWM&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=Sb1bRvOyAiqjdajhf_jmrg&oh=00_AfHrQ1F0nCO22mG1_atIi9sjCGCbqBeZAesHlFKJ6SFVJQ&oe=67FEA9AF",
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

{selectedCategory === 'contact' && (
  <section className="max-w-6xl mx-auto px-4 py-20" id="contact">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-amber-700 mb-4">Get in Touch</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">Connect with us for spiritual guidance, event inquiries, or volunteer opportunities. We&rsquo;re here to help!</p>
  </div>

  <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-0">
    {/* Contact Info */}
    <div className="bg-amber-50 p-8 lg:p-12">
      <h3 className="text-2xl font-semibold text-amber-700 mb-6">Contact Information</h3>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-amber-100 p-2 rounded-lg">
            <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-800">Our Location</p>
            <p className="text-gray-600">No. 123, Main Street<br/>Colombo, Sri Lanka</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-amber-100 p-2 rounded-lg">
            <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-800">Phone Numbers</p>
            <p className="text-gray-600">+94 77 123 4567<br/>+94 11 234 5678</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-amber-100 p-2 rounded-lg">
            <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-800">Email Address</p>
            <p className="text-gray-600">contact@yourtemple.lk<br/>support@yourtemple.lk</p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-amber-100">
        <h4 className="text-lg font-semibold text-amber-700 mb-4">Follow Us</h4>
        <div className="flex gap-4">
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-800 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-800 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <div className="p-8 lg:p-12 lg:col-span-2">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
          <textarea
            rows="5"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition transform hover:scale-101"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>

  {/* Map Section */}
  <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511757644!2d79.860774415393!3d6.921668295003654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596b8d5f07e9%3A0xec6b8b9bce1a05d!2sColombo!5e0!3m2!1sen!2slk!4v1623930407751!5m2!1sen!2slk"
      className="w-full h-96 border-0"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</section>
)}


      </div>
    </div>
  )
}