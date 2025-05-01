'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // Optional icon
import { motion } from 'framer-motion';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-yellow-700 text-white shadow-lg hover:bg-yellow-600 transition"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    )
  );
}
