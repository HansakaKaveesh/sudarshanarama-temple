'use client';
import { FaBullhorn } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

const announcements = [
  {
    id: 1,
    title: 'EYMBA Exam Registrations – 2025',
    description: 'Submission deadline 28th Feb 2025 FAO: YMBA students & Parents,  Dear Parents,  We have now received the YMBA exam registration forms from Colombo YMBA.  We have a very tight deadline to complete and send the registration forms to Sri Lanka. Therefore, please complete the registration from (via the link) by 28th February 2025',
    date: '2025-05-01',
    link: 'https://yourdomain.com/announcements/library-hours',
    image: '/exam.jpg', // ✅ Add your image path here
  },
  {
    id: 2,
    title: 'YMBA Exam Results 2024',
    description: 'The final exam results for the academic year 2024 have been officially released. Students can access their individual results through the student portal by logging in with their credentials. Please review your results carefully and contact the examinations department for any inquiries or clarifications.',
    date: '2025-05-03',
    link: 'https://yourdomain.com/announcements/library-hours',
    image: '/results.png',
  },
  {
    id: 3,
    title: 'Admission of new students -2025',
    description: 'We are pleased to announce that the admission process for the academic year 2025 is now open. Prospective students are invited to submit their applications online through the official university admission portal. Detailed guidelines, eligibility criteria, and important dates are available on the website.',
    date: '2025-05-05',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfVRG35ZA5Ulvji9EmlCoql--LO0JuOwmESGxro_F9xNgT8ug/viewform?embedded=true',
    image: '/pngtree-admission-open.png',
  },
];

const AnnouncementSection = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 max-w-5xl mx-auto my-10">
      <div className="flex items-center mb-6">
        <FaBullhorn className="text-blue-600 text-2xl mr-2" />
        <h2 className="text-2xl font-semibold text-gray-800">Student Announcements</h2>
      </div>
      <ul className="space-y-4">
        {announcements.map((item) => (
          <li
            key={item.id}
            className={`bg-gray-50 p-4 rounded-md hover:bg-gray-100 transition flex flex-col md:flex-row gap-4 items-start md:items-center ${
              item.date === '2025-05-01' ? 'border-l-4 border-blue-600' : ''
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-md flex-shrink-0"
            />
            <div className="flex-1">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {item.title}
              </a>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <MdDateRange className="mr-1" />
                <span>{item.date}</span>
              </div>
              {item.link.includes('yourdomain.com') && (
                <p className="text-red-500 text-sm mt-1">Link may not be accessible.</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AnnouncementSection;
