'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { FaBullhorn } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

// Sample data (you can fetch from an API instead)
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

// Shimmer placeholder for next/image
const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g"><stop stop-color="#e5e7eb" offset="20%"/><stop stop-color="#f3f4f6" offset="50%"/><stop stop-color="#e5e7eb" offset="70%"/></linearGradient></defs>
    <rect width="${w}" height="${h}" fill="#e5e7eb"/>
    <rect id="r" width="${w}" height="${h}" fill="url(#g)"/>
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"/>
  </svg>
`;
const toBase64 = (str) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

export default function AnnouncementSection() {
  // Sort newest first
  const sorted = useMemo(
    () => [...announcements].sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    []
  );

  // Identify latest announcement
  const latestAnnouncementId = sorted[0]?.id;

  // Mark as "New" if within last 21 days
  const isNew = (iso) => {
    const dt = new Date(iso);
    const days = (Date.now() - dt.getTime()) / (1000 * 60 * 60 * 24);
    return days <= 21;
  };

  // Controls
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'oldest'

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let data = sorted;
    if (q) {
      data = data.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
      );
    }
    if (sortBy === 'oldest') {
      data = [...data].reverse();
    }
    return data;
  }, [query, sortBy, sorted]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center">
          <FaBullhorn className="text-amber-600 text-3xl mr-3" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Student Announcements
          </h2>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-72">
            <input
              type="text"
              placeholder="Search announcements..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-white px-10 py-2.5 text-sm text-gray-800 shadow-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
              aria-label="Search announcements"
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔎
            </span>
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort announcements"
              className="rounded-full border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 shadow-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          No announcements found.
        </div>
      ) : (
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          {filtered.map((item) => {
            const latest = item.id === latestAnnouncementId;
            const newBadge = isNew(item.date);

            return (
              <li key={item.id} role="listitem">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open announcement: ${item.title}`}
                  className={[
                    'group block bg-white rounded-2xl shadow border border-gray-100 transition-transform duration-300 focus:outline-none',
                    'hover:shadow-xl hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2',
                    latest ? 'ring-1 ring-amber-400/60' : '',
                  ].join(' ')}
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 300))}`}
                    />
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {latest && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-600 text-white shadow">
                          Latest
                        </span>
                      )}
                      {newBadge && !latest && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
                          New
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-semibold text-amber-700 group-hover:text-amber-800 transition">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 pt-3">
                      <MdDateRange className="mr-2" aria-hidden />
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    </div>
                    {item.link.includes('yourdomain.com') && (
                      <p className="text-xs text-red-500 mt-1">Note: Sample link only</p>
                    )}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}