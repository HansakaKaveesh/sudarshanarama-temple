export default function DhammaTalksSection() {
    // Video data array for easier management and scalability
    const videos = [
      {
        id: 1,
        title: "බිනර පොහොය දින වැදගත්කම් තුලින් බෞද්ධ හා අබෞද්ද ඔබේ දිවියට යමක්....!!!",
        src: "https://www.youtube.com/embed/g5uLqMvySjk?si=nkJ_54F2Lk-N2Uo8",
        link: "https://youtu.be/g5uLqMvySjk?si=nkJ_54F2Lk-N2Uo8",
        ariaLabel: "Dhamma School Annual Concert",
      },
      {
        id: 2,
        title: "ඉල් පෝය යෙදුන චීවර මාසයේ කුසල් රැස් කරගැනීම",
        src: "https://www.youtube.com/embed/EuvcwnZi0bg?si=exH8q6rLYbA4I_iC",
        link: "https://youtu.be/EuvcwnZi0bg?si=exH8q6rLYbA4I_iC",
        ariaLabel: "Prefects Badge Ceremony 2017",
      },
      {
        id: 3,
        title: "2021 දෙසැම්බර් 25 දිනට යෙදුනු උදුවප් පෝය නිමිත්තෙන් පසුගිය වසරේ විකාසය උවකි - නත්තල බුදුදහම හා සාමය!",
        src: "https://www.youtube.com/embed/0SyNk3CdGpc?si=qka4PThAsR62frD9",
        link: "https://youtu.be/0SyNk3CdGpc?si=qka4PThAsR62frD9",
        ariaLabel: "Prefects Badge Ceremony 2017",
      },
    ];
  
    return (
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-yellow-50 px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif font-extrabold text-yellow-900 mb-4 tracking-wide">ධර්ම දේශන</h2>
          <p className="text-lg text-yellow-800 max-w-2xl mx-auto leading-relaxed font-sinhala">
            YouTube හි ඉදිරිපත් කරන ලද ප්‍රබෝධදායක සහ සම්මානීය ධර්ම දේශන සොයා බලන්න.
            මෙම වීඩියෝවල බෙදා හරින ලද ප්‍රජා සහ බුද්ධිමත් වචන පිළිබඳ මනනය කරන්න.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(video => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  src={video.src}
                  title={video.ariaLabel}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  aria-label={video.ariaLabel}
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h3>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-red-600 hover:text-red-800 font-medium"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>
          ))}
        </div>
  
        {/* Button to go to YouTube Channel */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@dahamimaga-3258" // Replace with your actual YouTube channel link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white font -semibold py-2 px-4 rounded hover:bg-red-800 transition duration-300"
          >
            Go to YouTube Channel
          </a>
        </div>
      </section>
    );
  }