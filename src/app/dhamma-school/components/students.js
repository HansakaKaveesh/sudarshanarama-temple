'use client';
import { FaBullhorn } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

const announcements = [
  {
    id: 1,
    title: 'Exam Schedule Released',
    description: 'The final exam schedule for all departments has been released. Check the student portal.',
    date: '2025-05-01',
    link: 'https://yourdomain.com/announcements/library-hours',
  },
  {
    id: 2,
    title: 'Library Hours Extended',
    description: 'Library will be open until 9 PM during the exam week.',
    date: '2025-05-03',
    link: 'https://yourdomain.com/announcements/library-hours',
  },
  {
    id: 3,
    title: 'New Course Materials Available',
    description: 'Additional resources for the Data Structures course are now available.',
    date: '2025-05-05',
    link: 'https://yourdomain.com/announcements/data-structures-resources',
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
          <li key={item.id} className={`bg-gray-50 p-4 rounded-md hover:bg-gray-100 transition ${item.date === '2025-05-01' ? 'border-l-4 border-blue-600' : ''}`}>
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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AnnouncementSection;