'use client';
import { useState } from 'react'

  export default function SchoolDhamma() {
    <section className="relative  py-16 px-4 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto">
      {/* Decorative Dharma Wheel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10 mt-4">
        <svg className="w-48 h-48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="#FBBF24"/>
          <path d="M50 85.7143C69.3395 85.7143 85.7143 69.3395 85.7143 50C85.7143 30.6605 69.3395 14.2857 50 14.2857C30.6605 14.2857 14.2857 30.6605 14.2857 50C14.2857 69.3395 30.6605 85.7143 50 85.7143Z" fill="white"/>
          <path d="M50 71.4286C61.8645 71.4286 71.4286 61.8645 71.4286 50C71.4286 38.1355 61.8645 28.5714 50 28.5714C38.1355 28.5714 28.5714 38.1355 28.5714 50C28.5714 61.8645 38.1355 71.4286 50 71.4286Z" fill="#FBBF24"/>
        </svg>
      </div>
  
      <header className="relative z-10 text-center mb-16">
{/* Logo */}
<img
src="/logodp.png" // Replace with your actual logo path
alt="Dhamma School Logo"
className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 object-contain"
/>

<h2 className="text-4xl sm:text-5xl font-bold text-yellow-900 mb-6 font-sinhala">
<span className="block english-font">Sri Sumangala Dhamma School</span>
ශ්‍රි සුමංගල දහම් පාසැල
</h2>

<div className="max-w-3xl mx-auto">
<p className="text-lg text-gray-800 leading-relaxed mb-8">
Our temple is a sanctuary of peace and mindfulness, nurturing spiritual growth through the Buddha&rsquo;s timeless wisdom. We offer guidance, meditation, and Dhamma education for all ages in a compassionate environment.
</p>
<div className="h-1 w-24 bg-amber-600 mx-auto rounded-full" />
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
content: "A spiritually awakened community living in harmony with Buddha's teachings",
icon: "☸️"
},
{ 
title: "Our Values", 
content: "Compassion, mindfulness, generosity, discipline, and wisdom in all practices",
icon: "🧘"
}
].map((card, index) => (
<div 
key={index} 
className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out overflow-hidden 
       transform-gpu hover:-translate-y-2 hover:scale-[1.02]
       before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-0 
       before:bg-gradient-to-b before:from-amber-400 before:to-amber-600 
       before:transition-all before:duration-700 before:group-hover:h-full"
>
<div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute top-4 right-4 text-3xl opacity-30 group-hover:opacity-100 
           transition-all duration-500 group-hover:rotate-12 group-hover:scale-125">
{card.icon}
</div>

<div className="relative space-y-4">
<h3 className="text-2xl font-bold text-amber-900 mb-4 transition-colors 
            duration-300 group-hover:text-amber-700">
{card.title}
</h3>
<p className="text-gray-700 leading-relaxed transition-colors duration-300 
           group-hover:text-gray-800 group-hover:pl-2">
{card.content}
</p>
</div>
</div>
))}
</div>
  
<div className="space-y-16">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="relative overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105">
<img 
src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/462767541_2700196043474419_2820044370736457035_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHh2Lupwv2XRdERkitt-bCmAgdfpJ3RMMICB1-kndEwwhpwemXBoAg8x2bx6PuxH05MmMVOzdqKJ5OX4EyquiOm&_nc_ohc=8UJ9dE88CVkQ7kNvwGlvnDw&_nc_oc=AdmDsM3KxkiVd8xZ5kX2bEA0xQJ8id52sjTiopRMWF2XIBGOqrQKDms8Vn2QmABVoWM&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=Sb1bRvOyAiqjdajhf_jmrg&oh=00_AfHrQ1F0nCO22mG1_atIi9sjCGCbqBeZAesHlFKJ6SFVJQ&oe=67FEA9AF" 
alt="Dhamma School History" 
className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
/>
</div>
<div>
<h3 className="text-3xl font-bold text-yellow-900 mb-6">Our Heritage</h3>
<p className="text-gray-800 leading-relaxed">
Established in 1975, Sri Sumangala Dhamma School has blossomed into a beacon of Buddhist education. 
Through decades of dedicated service, we’ve nurtured generations in the Noble Eightfold Path, 
guided by venerable monks and devoted teachers committed to preserving our rich spiritual legacy.
</p>
</div>
</div>

<div className="bg-yellow-100 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg">
<div className="absolute bottom-0 right-0 opacity-10 text-9xl">🙏</div>
<h3 className="text-3xl font-bold text-yellow-900 mb-6">Principal’s Guidance</h3>
<blockquote className="text-gray-800 text-lg italic leading-relaxed mb-6 border-l-4 border-amber-600 pl-4">
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
<li key ={index} className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">✓</div>
  {item}
</li>
))}
</ul>
</div>
<div className="grid grid-cols-2 gap-4">
<img src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/39248884_980174078809966_1059204802812051456_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeETyQ4UM2Wvm98WN_jTrmyBHUvO_C6fQFgdS878Lp9AWKRwe7gbxi5Ixy4VxaiHtwt4uCeCr_XWcOZsPyodNVvT&_nc_ohc=QJwegRQKck0Q7kNvwHQvqqr&_nc_oc=Adl2a0uR0-ocNFs6GW8I3v5r4eGsIfYS-D02oGZWicKfuHgEisezMVhDIaW_7FFIDso&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=pUi10ZwkNNVcaVy3dFYBig&oh=00_AfGWSK1W2JcpwCUv8gosp7_5W98Ax1BJqhfnBBV9B_a6zQ&oe=68203BA7" alt="Community Service" className="rounded-2xl h-48 object-cover transition-transform duration-500 hover:scale-105" />
<img src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/463432514_2707441659416524_2027133231080509496_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeG0566s38aPUt7rESeARY_8vUjphaFQ7Wm9SOmFoVDtaYSLrfoLDXfPFqELEYurj8H_P6JT9vXnJvBuAl9sTPNK&_nc_ohc=0jRDjwSeIeMQ7kNvwGJkk7w&_nc_oc=AdnW9Tas1K7I8Xnlry1kIbnIi1dgVYB5pU20seV31_z_6h7diughxxUKlpaUb3IqI_0&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=SSGtCWzs03VMuWVIdr4Wag&oh=00_AfH917W7uvfBWOl04HXsWmWHH-YLwoAkviEjnKiPPSCjQw&oe=67FEB80A" alt="Dhamma Class" className="rounded-2xl h-48 object-cover transition-transform duration-500 hover:scale-105 mt-8" />
<img src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/486319669_2844823199011702_7910226328139359809_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGZwnPeWPaj6tV8jxky4X0aoppHbQZ0yUmimkdtBnTJSW6AmMqexW0RDiwOu8LG_d6pzkH21XxKMfSWpCpHN0z1&_nc_ohc=uio8ScBzU5EQ7kNvwGlAz5c&_nc_oc=AdlI3eHVRPaccoX1dna2aJEaup-j1ydgbph96k-JYTlGkD1BwGfq1j-NX5RMvw9iOcw&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=BehfWcK_0fLNpPxzyy_OfA&oh=00_AfEQYwezly8v4iJOZoZKVfmHpducCDw4Alzcv_z9X71JQA&oe=67FE9F42" alt="Vesak Celebration" className="rounded-2xl h-48 object-cover transition-transform duration-500 hover:scale- 105" />
</div>
</div>
</div>
    </div>
  </section>
  }; 