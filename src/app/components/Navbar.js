"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiInfo, FiCalendar, FiImage, FiMail, FiBook } from 'react-icons/fi';
import { GiLotus } from 'react-icons/gi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'About', path: '/about', icon: FiInfo },
    { name: 'Events', path: '/events', icon: FiCalendar },
    { name: 'Gallery', path: '/gallery', icon: FiImage },
    { name: 'Dhamma School', path: '/dhamma-school', icon: FiBook },
    { name: 'Contact', path: '/contact', icon: FiMail },
  ];

  useEffect(() => setIsMenuOpen(false), [pathname]);

  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav 
      className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur-sm shadow-sm border-b border-amber-50"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <motion.div
              whileHover={{ rotate: 12, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <GiLotus className="w-8 h-8 text-amber-700" />
            </motion.div>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">
            Sri Sudarshanarama Purana Maha Viharaya
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
                        ? 'text-amber-900 font-medium'
                        : 'text-amber-600 hover:text-amber-800'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                    {isActive && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-amber-500"
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
            className="md:hidden p-1.5 rounded-md hover:bg-amber-100 focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6 text-amber-700" />
            ) : (
              <FiMenu className="w-6 h-6 text-amber-700" />
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
              className="md:hidden mt-2 border-t border-amber-100"
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
                            ? 'text-amber-900 font-medium bg-amber-50'
                            : 'text-amber-600 hover:bg-amber-50'
                        } rounded-md transition-colors`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <Icon className="w-5 h-5" />
                        {item.name}
                        {isActive && (
                          <div className="ml-auto w-1.5 h-1.5 bg-amber-500 rounded-full" />
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