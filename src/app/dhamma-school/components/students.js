'use client';
import { FaBullhorn } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

// 🎯 Sample data
const announcements = [
  {
    id: 1,
    title: 'EYMBA Exam Registrations – 2025',
    description:
      'Submission deadline 28th Feb 2025... Please complete the YMBA exam registration form by 28th February 2025.',
    date: '2025-05-01',
    link: 'https://yourdomain.com/announcements/library-hours',
    image: '/exam.jpg',
  },
  {
    id: 2,
    title: 'YMBA Exam Results 2024',
    description:
      'The final exam results are out. Visit the student portal to view your results and contact admin for queries.',
    date: '2025-05-03',
    link: 'https://yourdomain.com/announcements/library-hours',
    image: '/results.png',
  },
  {
    id: 3,
    title: 'Admission of new students - 2025',
    description:
      'Admissions for the 2025 academic year are open. Apply online through the official application portal.',
    date: '2025-05-05',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfVRG35ZA5Ulvji9EmlCoql--LO0JuOwmESGxro_F9xNgT8ug/viewform?embedded=true',
    image: '/pngtree-admission-open.png',
  },
];

const AnnouncementSection = () => {
  // ✅ Find the latest announcement
  const latestAnnouncementId = announcements.reduce((latestId, current) => {
    const latestDate = new Date(
      announcements.find((a) => a.id === latestId)?.date || ''
    );
    const currentDate = new Date(current.date);
    return currentDate > latestDate ? current.id : latestId;
  }, announcements[0].id);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title */}
      <div className="flex items-center justify-center mb-10">
        <FaBullhorn className="text-amber-600 text-3xl mr-3" />
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Student Announcements</h2>
      </div>

      {/* Announcement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {announcements.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group bg-white rounded-2xl shadow border border-gray-100 transition-transform duration-300 
              hover:shadow-xl hover:-translate-y-1 
              ${item.id === latestAnnouncementId ? 'animate-blink ring-2 ring-amber-500' : ''}
            `}
          >
            {/* Card Image */}
            <div className="h-48 w-full overflow-hidden rounded-t-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-semibold text-amber-700 group-hover:text-amber-800 transition">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{item.description}</p>
              <div className="flex items-center text-sm text-gray-500 pt-3">
                <MdDateRange className="mr-2" />
                <span>{item.date}</span>
              </div>
              {item.link.includes('yourdomain.com') && (
                <p className="text-xs text-red-500 mt-1">Note: Sample link only</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AnnouncementSection;