'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaDownload, FaBook } from 'react-icons/fa';

// Your existing data
const resourcesData = {
  'Grade 1': {
    pastPapers: [
      { title: 'Buddha Darmaya 2023', file: '/pastpapers/grade1/buddha-darmaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Grade 1 Dhamma School Text Book - Sinhala', file: '/pastpapers/Grade 1/Textbook/grade-1-dhamma-school-text-book-sinhala.pdf' },
      { title: 'Grade 1 Dhamma School Text Book - English', file: '/pastpapers/Grade 1/Textbook/grade-1-dhamma-school-text-book-english.pdf' },
    ],
  },
  'Grade 2': {
    pastPapers: [
      { title: 'Buddha Darmaya 2023', file: '/pastpapers/grade2/buddha-darmaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Grade 2 Dhamma School Text Book - Sinhala', file: '/pastpapers/Grade 2/Textbook/grade-2-dhamma-school-text-book-sinhala.pdf' },
      { title: 'Grade 2 Dhamma School Text Book - English', file: '/pastpapers/Grade 2/Textbook/grade-2-dhamma-school-text-book-english.pdf' },
    ],
  },
  'Grade 3': {
    pastPapers: [
      { title: 'Buddha Darmaya 2023', file: '/pastpapers/grade3/buddha-darmaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Buddha Dharma Textbook', file: '/textbooks/grade3/buddha-dharma-textbook.pdf' },
    ],
  },
  'Grade 4': {
    pastPapers: [
      { title: 'Buddha Darmaya 2023', file: '/pastpapers/grade4/buddha-darmaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Buddha Dharma Textbook', file: '/textbooks/grade4/buddha-dharma-textbook.pdf' },
    ],
  },
  'Grade 5': {
    pastPapers: [
      { title: 'Buddha Darmaya 2023', file: '/pastpapers/grade5/buddha-darmaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Buddha Dharma Textbook', file: '/textbooks/grade5/buddha-dharma-textbook.pdf' },
    ],
  },
  'Grade 6': {
    pastPapers: [
      { title: 'Buddha Darmaya 2023', file: '/pastpapers/grade6/buddha-darmaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Buddha Dharma Textbook', file: '/textbooks/grade6/buddha-dharma-textbook.pdf' },
    ],
  },
  'Grade 7': {
    pastPapers: [
      { title: 'Buddha Darmaya 2023', file: '/pastpapers/grade7/buddha-darmaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Buddha Dharma Textbook', file: '/textbooks/grade7/buddha-dharma-textbook.pdf' },
    ],
  },
  'Grade 8': {
    pastPapers: [
      { title: 'Buddha Darmaya 2023', file: '/pastpapers/grade8/buddha-darmaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Buddha Dharma Textbook', file: '/textbooks/grade8/buddha-dharma-textbook.pdf' },
    ],
  },
  'Grade 9': {
    pastPapers: [
      { title: 'Buddha Darmaya 2023', file: '/pastpapers/grade9/buddha-darmaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Buddha Dharma Textbook', file: '/textbooks/grade9/buddha-dharma-textbook.pdf' },
    ],
  },
  'Grade 10': {
    pastPapers: [
      { title: 'Buddha Darmaya 2023', file: '/pastpapers/grade10/buddha-darmaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Buddha Dharma Textbook', file: '/textbooks/grade10/buddha-dharma-textbook.pdf' },
    ],
  },
  'Awasana Exam': {
    pastPapers: [
      { title: 'Buddha Charithaya 2023', file: '/pastpapers/grade11/buddha-charithaya-2023.pdf' },
      { title: 'Pali Abhidharma 2023', file: '/pastpapers/grade11/pali-abhid harma-2023.pdf' }, // space handled below
      { title: 'Buddha Sanskruthiya 2023', file: '/pastpapers/grade11/buddha-sanskruthiya-2023.pdf' },
      { title: 'Shasana Ithihasaya 2023', file: '/pastpapers/grade11/shasana-ithihasaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Buddha Charithaya', file: '/pastpapers/Awasana/Textbook/buddha-charithaya.pdf' },
      { title: 'Pali Abhidharma', file: '/pastpapers/Awasana/Textbook/Pali-Abhidharma.pdf' },
      { title: 'Buddha Sanskruthiya', file: '/pastpapers/Awasana/Textbook/Buddha-Sanskruthiya.pdf' },
      { title: 'Shasana Ithihasaya', file: '/pastpapers/Awasana/Textbook/Shasana-Ithihasaya.pdf' },
    ],
  },
  'Darmacharya Exam': {
    pastPapers: [
      { title: 'Dharmacharya-2019', file: '/pastpapers/Dharmacharya/dharmacharya-exam-2019-past-papers.pdf' },
      { title: 'Samaja Dharshanaya 2023', file: '/pastpapers/grade12/samaja-dharshanaya-2023.pdf' },
      { title: 'Baudda Ithihasaya Sanskruthiya 2023', file: '/pastpapers/grade12/baudda-ithihasaya-sanskruthiya-2023.pdf' },
      { title: 'Therawadi Dharmaya 2023', file: '/pastpapers/grade12/therawadi-dharmaya-2023.pdf' },
      { title: 'Pali 2023', file: '/pastpapers/grade12/pali-2023.pdf' },
    ],
    textbooks: [{ title: 'Darmacharya Exam Textbook', file: '/textbooks/grade12/darmacharya-exam-textbook.pdf' }],
  },
};

function safeUrl(path) {
  try {
    return encodeURI(path);
  } catch {
    return path;
  }
}

export default function PastPapersSection() {
  const grades = useMemo(() => ['All', ...Object.keys(resourcesData)], []);
  const [selectedGrade, setSelectedGrade] = useState('Grade 1');
  const [viewType, setViewType] = useState('pastPapers'); // 'pastPapers' | 'textbooks'
  const [query, setQuery] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);

  // Restore persisted selection
  useEffect(() => {
    const g = localStorage.getItem('papers:selectedGrade');
    const v = localStorage.getItem('papers:viewType');
    if (g && (g === 'All' || resourcesData[g])) setSelectedGrade(g);
    if (v && (v === 'pastPapers' || v === 'textbooks')) setViewType(v);
  }, []);
  useEffect(() => {
    localStorage.setItem('papers:selectedGrade', selectedGrade);
  }, [selectedGrade]);
  useEffect(() => {
    localStorage.setItem('papers:viewType', viewType);
  }, [viewType]);

  // Flatten for current view
  const allForView = useMemo(() => {
    const list = [];
    for (const [grade, buckets] of Object.entries(resourcesData)) {
      const arr = buckets[viewType] || [];
      arr.forEach((r) => list.push({ ...r, grade }));
    }
    return list;
  }, [viewType]);

  // Counts for dropdown labels
  const counts = useMemo(() => {
    const map = { All: 0 };
    for (const [grade, buckets] of Object.entries(resourcesData)) {
      const n = (buckets[viewType] || []).length;
      map[grade] = n;
      map.All += n;
    }
    return map;
  }, [viewType]);

  // Filtered list
  const visible = useMemo(() => {
    const base =
      selectedGrade === 'All'
        ? allForView
        : (resourcesData[selectedGrade]?.[viewType] || []).map((r) => ({ ...r, grade: selectedGrade }));
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter((r) => r.title.toLowerCase().includes(q));
  }, [selectedGrade, viewType, query, allForView]);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-700">
            <FaBook className="inline-block mr-2 -mt-1" />
            {viewType === 'pastPapers' ? 'Past Papers' : 'Textbooks'}
          </h2>
          <p className="text-gray-600 mt-2">Use the dropdowns to select grade and type.</p>
        </div>

        {/* Toolbar with dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:items-center mb-8">
          {/* Type dropdown */}
          <label className="flex flex-col">
            <span className="text-sm text-gray-700 mb-1">Type</span>
            <select
              value={viewType}
              onChange={(e) => setViewType(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 shadow-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            >
              <option value="pastPapers">Past Papers</option>
              <option value="textbooks">Textbooks</option>
            </select>
          </label>

          {/* Grade dropdown */}
          <label className="flex flex-col">
            <span className="text-sm text-gray-700 mb-1">Grade</span>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 shadow-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
            >
              {grades.map((g) => (
                <option key={g} value={g}>
                  {g} ({counts[g] ?? 0})
                </option>
              ))}
            </select>
          </label>

          {/* Search input */}
          <label className="flex flex-col">
            <span className="text-sm text-gray-700 mb-1">Search</span>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-10 py-2.5 text-sm text-gray-800 shadow-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
              />
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔎</span>
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
          </label>
        </div>

        {/* Grid */}
        {visible.length === 0 ? (
          <div className="text-center text-gray-500 py-16">
            No resources found. Try a different grade, type, or search term.
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial={false}>
            <AnimatePresence>
              {visible.map((resource, idx) => (
                <motion.article
                  key={`${resource.title}-${resource.file}`}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="flex flex-col justify-between bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{resource.title}</h3>
                      <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
                        {resource.grade}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">Download or view the resource in PDF format</p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-5">
                    <button
                      onClick={() => setPreviewUrl(safeUrl(resource.file))}
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition-all flex items-center"
                      aria-label={`Preview PDF: ${resource.title}`}
                    >
                      <FaEye className="mr-2" />
                      Preview
                    </button>
                    <a
                      href={safeUrl(resource.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="bg-white border border-amber-600 text-amber-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-50 transition-all flex items-center"
                      aria-label={`Download PDF: ${resource.title}`}
                    >
                      <FaDownload className="mr-2" />
                      Download
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Decorative */}
      <div className="hidden md:block absolute bottom-10 right-10 opacity-10 text-8xl pointer-events-none select-none">
        📑
      </div>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewUrl(null)}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative bg-white rounded-xl shadow-2xl max-w-5xl w-full h-[80vh] overflow-hidden"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-3 border-b">
                <strong className="text-sm">PDF Preview</strong>
                <div className="flex items-center gap-2">
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-700 hover:underline"
                    title="Open in new tab"
                  >
                    Open in new tab ↗
                  </a>
                  <button
                    onClick={() => setPreviewUrl(null)}
                    className="rounded-md px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200"
                    aria-label="Close preview"
                  >
                    Close
                  </button>
                </div>
              </div>
              <iframe src={`${previewUrl}#view=FitH`} className="w-full h-[calc(80vh-48px)]" title="PDF preview" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}