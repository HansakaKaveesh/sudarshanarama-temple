"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiInfo, FiCalendar, FiImage, FiMail } from 'react-icons/fi';
import { GiLotus } from 'react-icons/gi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Navigation items with icons
  const navigation = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'About', path: '/about', icon: FiInfo },
    { name: 'Events', path: '/events', icon: FiCalendar },
    { name: 'Gallery', path: '/gallery', icon: FiImage },
    { name: 'Contact', path: '/contact', icon: FiMail },
  ];

  // Close menu on route change
  useEffect(() => setIsMenuOpen(false), [pathname]);

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav 
      id="navbar"
      className="sticky top-0 z-50 bg-yellow-100/95 backdrop-blur-sm shadow-md border-b border-yellow-200"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity group"
          >
            <GiLotus className="w-8 h-8 text-yellow-700 group-hover:text-yellow-800 transition-colors" />
            <h1 className="text-xl font-bold text-yellow-900">Buddhist Temple</h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-2 text-yellow-900 font-medium">
            {navigation.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                      isActive 
                        ? 'bg-yellow-200 text-yellow-900' 
                        : 'hover:bg-yellow-50 hover:text-yellow-800'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              <ul className="flex flex-col space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.path;
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className={`block px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                          isActive
                            ? 'bg-yellow-200 text-yellow-900'
                            : 'hover:bg-yellow-100 text-yellow-800'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <Icon className="w-5 h-5" />
                        {item.name}
                      </Link>
                    </li>
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