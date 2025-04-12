'use client';

import { useState } from 'react';
import { motion } from "framer-motion"; // Make sure Framer Motion is installed

const pastPapersData = {
  'Grade 1': [
    { title: 'Math Paper 2023', file: '/pastpapers/grade6/math-2023.pdf' },
    { title: 'Science Paper 2023', file: '/pastpapers/grade6/science-2023.pdf' },
  ],
  'Grade 2': [
    { title: 'Math Paper 2023', file: '/pastpapers/grade6/math-2023.pdf' },
    { title: 'Science Paper 2023', file: '/pastpapers/grade6/science-2023.pdf' },
  ],
  'Grade 3': [
    { title: 'Math Paper 2023', file: '/pastpapers/grade6/math-2023.pdf' },
    { title: 'Science Paper 2023', file: '/pastpapers/grade6/science-2023.pdf' },
  ],
  'Grade 4': [
    { title: 'Math Paper 2023', file: '/pastpapers/grade6/math-2023.pdf' },
    { title: 'Science Paper 2023', file: '/pastpapers/grade6/science-2023.pdf' },
  ],
  'Grade 5': [
    { title: 'Math Paper 2023', file: '/pastpapers/grade6/math-2023.pdf' },
    { title: 'Science Paper 2023', file: '/pastpapers/grade6/science-2023.pdf' },
  ],
  'Grade 6': [
    { title: 'Math Paper 2023', file: '/pastpapers/grade6/math-2023.pdf' },
    { title: 'Science Paper 2023', file: '/pastpapers/grade6/science-2023.pdf' },
  ],
  'Grade 7': [
    { title: 'History Paper 2023', file: '/pastpapers/grade7/history-2023.pdf' },
    { title: 'English Paper 2023', file: '/pastpapers/grade7/english-2023.pdf' },
  ],
  'Grade 8': [
    { title: 'Math Paper 2023', file: '/pastpapers/grade8/math-2023.pdf' },
    { title: 'Science Paper 2023', file: '/pastpapers/grade8/science-2023.pdf' },
  ],
  'Grade 9': [
    { title: 'Math Paper 2023', file: '/pastpapers/grade9/math-2023.pdf' },
    { title: 'Science Paper 2023', file: '/pastpapers/grade9/science-2023.pdf' },
  ],
  'Grade 10': [
    { title: 'Math Paper 2023', file: '/pastpapers/grade10/math-2023.pdf' },
    { title: 'Science Paper 2023', file: '/pastpapers/grade10/science-2023.pdf' },
  ],
  'Awasana Exam': [
    { title: 'Buddha Charithaya 2023', file: '/pastpapers/grade11/math-2023.pdf' },
    { title: 'Pali Abhidharma 2023', file: '/pastpapers/grade11/science-2023.pdf' },
    { title: 'Buddha Sanskruthiya 2023', file: '/pastpapers/grade11/dharma-2023.pdf' },
    { title: 'Shasana Ithihasaya 2023', file: '/pastpapers/grade11/english-2023.pdf' },
  ],
  'Darmacharya Exam': [
    { title: 'Abhidharmaya 2023', file: '/pastpapers/grade12/math-2023.pdf' },
    { title: 'Samaja Dharshanaya 2023', file: '/pastpapers/grade12/science-2023.pdf' },
    { title: 'Baudda Ithihasaya Sanskruthiya 2023', file: '/pastpapers/grade12/dharma-2023.pdf' },
    { title: 'Therawadi Dharmaya 2023', file: '/pastpapers/grade12/english-2023.pdf' },
    { title: 'Pali 2023', file: '/pastpapers/grade12/dharma-2023.pdf' },
  ],
};

export default function PastPapersSection() {
  const [selectedGrade, setSelectedGrade] = useState('Grade 1');
  const papers = pastPapersData[selectedGrade] || [];

  return (
    <section className="relative  py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-amber-700 mb-10">
      📘 Past Papers
    </h2>

    <div className="mb-8 flex justify-center">
      <select
        value={selectedGrade}
        onChange={(e) => setSelectedGrade(e.target.value)}
        className="w-full max-w-xs border border-amber-500 rounded-lg px-5 py-3 text-amber-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-200"
      >
        {Object.keys(pastPapersData).map((grade) => (
          <option key={grade} value={grade}>
            {grade}
          </option>
        ))}
      </select>
    </div>

    <div className="space-y-6">
      {papers.map((paper, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300"
        >
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold text-gray-800">{paper.title}</h3>
            <p className="text-sm text-gray-500">Download the paper in PDF format</p>
            {paper.subject && (
              <span className="inline-block mt-2 text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                {paper.subject}
              </span>
            )}
          </div>
          <a
            href={paper.file}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-5 py-2 rounded-lg text-sm font-medium shadow transition-all duration-300"
          >
            📄 Download
          </a>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Optional decorative emoji */}
  <div className="hidden md:block absolute bottom-10 right-10 opacity-10 text-8xl pointer-events-none select-none">
    📑
  </div>
</section>
  );
}
