'use client';

import { useState } from 'react';
import { motion } from "framer-motion"; // Make sure Framer Motion is installed
import { FaEye, FaDownload, FaBook } from 'react-icons/fa';

const resourcesData = {
  'Grade 1': {
    pastPapers: [
      { title: 'Buddha Darmaya 2023', file: '/pastpapers/grade1/buddha-darmaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Buddha Dharma Textbook', file: '/textbooks/grade1/buddha-dharma-textbook.pdf' },
    ],
  },
  'Grade 2': {
    pastPapers: [
      { title: 'Buddha Darmaya 2023', file: '/pastpapers/grade2/buddha-darmaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Buddha Dharma Textbook', file: '/textbooks/grade2/buddha-dharma-textbook.pdf' },
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
      { title: 'Pali Abhidharma 2023', file: '/pastpapers/grade11/pali-abhid harma-2023.pdf' },
      { title: 'Buddha Sanskruthiya 2023', file: '/pastpapers/grade11/buddha-sanskruthiya-2023.pdf' },
      { title: 'Shasana Ithihasaya 2023', file: '/pastpapers/grade11/shasana-ithihasaya-2023.pdf' },
    ],
    textbooks: [
      { title: 'Awasana Exam Textbook', file: '/textbooks/grade11/awasana-exam-textbook.pdf' },
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
    textbooks: [
      { title: 'Darmacharya Exam Textbook', file: '/textbooks/grade12/darmacharya-exam-textbook.pdf' },
    ],
  },
  // Continue for other grades...
};

export default function PastPapersSection() {
  const [selectedGrade, setSelectedGrade] = useState('Grade 1');
  const [viewType, setViewType] = useState('pastPapers'); // 'pastPapers' or 'textbooks'
  const resources = resourcesData[selectedGrade] || { pastPapers: [], textbooks: [] };
  const papers = resources[viewType];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-amber-700 mb-10">
          <FaBook className="inline-block mr-2" /> {/* Book icon */}
          {viewType === 'pastPapers' ? 'Past Papers' : 'Textbooks'}
        </h2>

      <div className="mb-8 flex justify-center">
        <select
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value)}
          className="w-full max-w-xs border border-amber-500 rounded-lg px-5 py-3 text-amber-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-200"
        >
          {Object.keys(resourcesData).map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-8 flex justify-center">
        <button
          onClick={() => setViewType('pastPapers')}
          className={`px-4 py-2 rounded-lg ${viewType === 'pastPapers' ? 'bg-amber-500 text-white' : 'bg-white text-amber-700 border border-amber-500'}`}
        >
          Past Papers
        </button>
        <button
          onClick={() => setViewType('textbooks')}
          className={`ml-4 px-4 py-2 rounded-lg ${viewType === 'textbooks' ? 'bg-amber-500 text-white' : 'bg-white text-amber-700 border border-amber-500'}`}
        >
          Textbooks
        </button>
      </div>

      <div className="space-y-6">
        {papers.map((resource, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300"
          >
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold text-gray-800">{resource.title}</h3>
              <p className="text-sm text-gray-500">Download or view the resource in PDF format</p>
            </div>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a
                href={resource.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition-all duration-300 flex items-center"
              >
                <FaEye className="mr-2" /> {/* Eye icon for viewing */}
                View PDF
              </a>
              <a
                href={resource.file}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white border border-amber-600 text-amber-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-100 transition-all duration-300 flex items-center"
              >
                <FaDownload className="mr-2" /> {/* Download icon */}
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Optional decorative emoji */}
    <div className="hidden md:block absolute bottom-10 right-10 opacity-10 text-8xl pointer-events -none select-none">
      📑
    </div>
  </section>
  );
}