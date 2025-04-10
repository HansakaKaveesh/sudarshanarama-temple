"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiInfo, FiCalendar, FiImage, FiMail, FiBook } from 'react-icons/fi';
import { GiLotus } from 'react-icons/gi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'About', path: '/about', icon: FiInfo },
    { name: 'Events', path: '/events', icon: FiCalendar },
    { name: 'Gallery', path: '/gallery', icon: FiImage },
    { name: 'Dhamma School', path: '/dhamma-school', icon: FiBook },
    { name: 'Contact', path: '/contact', icon: FiMail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav 
      className={`fixed top-4 left-4 right-4 mx-auto rounded-xl z-50 overflow-hidden transition-all duration-300 ${
        isScrolled 
          ? 'bg-yellow-200/90 shadow-xl scale-100 opacity-100' 
          : 'bg-yellow-100/80 shadow-md scale-100 opacity-100'
      }`}
      aria-label="Main navigation"
    >
      <div className={`container mx-auto px-4 ${isScrolled ? 'py-3' : 'py-4'} transition-all duration-300`}>
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <motion.div
              whileHover={{ rotate: 12, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <GiLotus className={`w-8 h-8 text-gray-900 ${isScrolled ? 'scale-90' : 'scale-100'} transition-transform duration-300`} />
            </motion.div>
            <h1
  className={`font-semibold font-sinhala text-gray-900 transition-all duration-300
    ${isScrolled 
      ? 'text-lg sm:text-lg md:text-2xl' 
      : 'text-lg sm:text-lg md:text-2xl'}
  `}
>
ශ්‍රී සුදර්ශනාරාම පුරාණ මහා විහාරය - කලපලුවාව
</h1>

          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              return (
                <motion.li 
                  key={item.name}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  <Link
                    href={item.path}
                    className={`px-3 py-1.5 flex items-center gap-1.5 text-sm transition-colors ${
                      isActive 
                        ? 'text-gray-900 font-medium'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                    {isActive && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-800"
                        layoutId="activeIndicator"
                        transition={{ type: 'spring', bounce: 0.1, duration: 0.4 }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="md:hidden p-1.5 rounded-md hover:bg-gray-100 focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6 text-gray-900" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-900" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="md:hidden mt-2 border-t border-gray-100"
            >
              <ul className="flex flex-col space-y-1 pt-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.path;
                  const Icon = item.icon;
                  return (
                    <motion.li 
                      key={item.name}
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <Link
                        href={item.path}
                        className={`px-3 py-2 flex items-center gap-2 text-base ${
                          isActive
                            ? 'text-gray-900 font-medium bg-gray-50'
                            : 'text-gray-600 hover:bg-gray-50'
                        } rounded-md transition-colors`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <Icon className="w-5 h-5" />
                        {item.name}
                        {isActive && (
                          <div className="ml-auto w-1.5 h-1.5 bg-gray-800 rounded-full" />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}