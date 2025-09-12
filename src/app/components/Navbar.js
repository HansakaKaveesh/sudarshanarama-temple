"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiCalendar,
  FiImage,
  FiMail,
  FiBook,
  FiChevronDown,
} from "react-icons/fi";
import { GiLotus } from "react-icons/gi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dhammaDropdown, setDhammaDropdown] = useState(false); // mobile
  const [dhammaDesktopOpen, setDhammaDesktopOpen] = useState(false); // desktop
  const dropdownRef = useRef(null);
  const reduce = useReducedMotion();
  const pathname = usePathname();

  const navigation = [
    { name: "Home", path: "/", icon: FiHome },
    { name: "About", path: "/about", icon: FiInfo },
    { name: "Events", path: "/events", icon: FiCalendar },
    { name: "Gallery", path: "/gallery", icon: FiImage },
    // Dhamma School is a dropdown
    { name: "Contact", path: "/contact", icon: FiMail },
  ];

  const dhammaLinks = [
    { name: "Page", path: "/dhamma-school", icon: FiBook },
    {
      name: "LMS",
      path: "https://sumangala-lms.infinityfreeapp.com/",
      icon: FiBook,
      external: true,
    },
  ];

  // Scroll state
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setDhammaDropdown(false);
    setDhammaDesktopOpen(false);
  }, [pathname]);

  // ESC closes mobile menu
  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && setIsMenuOpen(false);
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Body scroll lock when mobile menu open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : original || "";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isMenuOpen]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDhammaDesktopOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const navWrapperBase =
    "fixed top-4 left-4 right-4 z-50 mx-auto rounded-2xl border transition-all duration-300";
  const navWrapperScrolled =
    "bg-white/75 border-amber-200/60 shadow-lg backdrop-blur-md";
  const navWrapperTop = "bg-white/60 border-amber-200/40 shadow-md backdrop-blur-md";

  const isActive = (path) =>
    path === "/"
      ? pathname === "/"
      : pathname === path || pathname.startsWith(path + "/");

  return (
    <nav
      className={`${navWrapperBase} ${
        isScrolled ? navWrapperScrolled : navWrapperTop
      }`}
      aria-label="Main navigation"
      role="navigation"
    >
      <div className={`container mx-auto px-4 ${isScrolled ? "py-3" : "py-4"} transition-all duration-300`}>
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-md"
          >
            <motion.div
              whileHover={reduce ? {} : { scale: 1.05, rotate: 6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative grid place-items-center"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-300/30 to-yellow-200/30 blur-sm" />
              <GiLotus className="relative w-8 h-8 text-amber-800" />
            </motion.div>
            <span
              className={`font-semibold font-sinhala text-gray-900 leading-tight ${
                isScrolled ? "text-[0.95rem] sm:text-base md:text-xl" : "text-[0.95rem] sm:text-base md:text-xl"
              }`}
            >
              ශ්‍රී සුදර්ශනාරාම පුරාණ මහා විහාරය — කලපලුවාව
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="relative hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <li key={item.name} className="relative">
                  <Link
                    href={item.path}
                    className={`relative px-3 py-1.5 flex items-center gap-1.5 text-sm rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600
                      ${active ? "text-amber-900 font-medium" : "text-gray-700 hover:text-gray-900"}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 -z-10 rounded-full bg-amber-200/60 border border-amber-300/60 shadow-sm"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        aria-hidden="true"
                      />
                    )}
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </li>
              );
            })}

            {/* Dhamma School (Desktop dropdown) */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDhammaDesktopOpen(true)}
              onMouseLeave={() => setDhammaDesktopOpen(false)}
            >
              <button
                type="button"
                className={`relative px-3 py-1.5 flex items-center gap-1.5 text-sm rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600
                  ${pathname.startsWith("/dhamma-school") ? "text-amber-900 font-medium" : "text-gray-700 hover:text-gray-900"}`}
                aria-haspopup="menu"
                aria-expanded={dhammaDesktopOpen}
                onClick={() => setDhammaDesktopOpen((v) => !v)}
              >
                {pathname.startsWith("/dhamma-school") && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 -z-10 rounded-full bg-amber-200/60 border border-amber-300/60 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    aria-hidden="true"
                  />
                )}
                <FiBook className="w-4 h-4" />
                Dhamma School
                <FiChevronDown
                  className={`w-4 h-4 transition-transform ${dhammaDesktopOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {dhammaDesktopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    role="menu"
                    aria-label="Dhamma School"
                    className="absolute left-0 mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-amber-200/60 overflow-hidden z-50"
                  >
                    <ul className="py-2">
                      {dhammaLinks.map((sub) => {
                        const SubIcon = sub.icon;
                        const active = isActive(sub.path);
                        const content = (
                          <>
                            <SubIcon className="w-4 h-4" />
                            <span>{sub.name}</span>
                          </>
                        );
                        return (
                          <li key={sub.path}>
                            {sub.external ? (
                              <a
                                href={sub.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                                className={`flex items-center gap-2 px-4 py-2 text-sm hover:bg-amber-50 transition-colors ${
                                  active ? "font-semibold text-amber-900" : "text-gray-800"
                                }`}
                              >
                                {content}
                              </a>
                            ) : (
                              <Link
                                href={sub.path}
                                role="menuitem"
                                className={`flex items-center gap-2 px-4 py-2 text-sm hover:bg-amber-50 transition-colors ${
                                  active ? "font-semibold text-amber-900" : "text-gray-800"
                                }`}
                                onClick={() => setDhammaDesktopOpen(false)}
                              >
                                {content}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Mobile toggle */}
          <motion.button
            whileHover={reduce ? {} : { scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="md:hidden p-1.5 rounded-md hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 transition-colors"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX className="w-6 h-6 text-amber-900" /> : <FiMenu className="w-6 h-6 text-amber-900" />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.16 }}
              className="md:hidden mt-2 border-t border-amber-100"
            >
              <ul className="flex flex-col space-y-1 pt-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <motion.li key={item.name} whileHover={reduce ? {} : { x: 3 }}>
                      <Link
                        href={item.path}
                        className={`px-3 py-2 flex items-center gap-2 text-base rounded-lg transition-colors ${
                          active ? "text-amber-900 font-medium bg-amber-50" : "text-gray-700 hover:bg-amber-50"
                        }`}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Icon className="w-5 h-5" />
                        {item.name}
                        {active && <span className="ml-auto w-1.5 h-1.5 bg-amber-800 rounded-full" />}
                      </Link>
                    </motion.li>
                  );
                })}

                {/* Dhamma School (mobile) */}
                <li>
                  <button
                    className={`w-full flex items-center gap-2 px-3 py-2 text-base rounded-lg transition-colors ${
                      pathname.startsWith("/dhamma-school")
                        ? "text-amber-900 font-medium bg-amber-50"
                        : "text-gray-700 hover:bg-amber-50"
                    }`}
                    onClick={() => setDhammaDropdown((v) => !v)}
                    aria-expanded={dhammaDropdown}
                    aria-controls="mobile-dhamma-submenu"
                  >
                    <FiBook className="w-5 h-5" />
                    Dhamma School
                    <FiChevronDown
                      className={`w-4 h-4 ml-auto transition-transform ${dhammaDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {dhammaDropdown && (
                      <motion.ul
                        id="mobile-dhamma-submenu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 flex flex-col overflow-hidden"
                      >
                        {dhammaLinks.map((sub) => {
                          const SubIcon = sub.icon;
                          const active = isActive(sub.path);
                          const content = (
                            <>
                              <SubIcon className="w-4 h-4" />
                              <span>{sub.name}</span>
                            </>
                          );
                          return (
                            <li key={sub.path}>
                              {sub.external ? (
                                <a
                                  href={sub.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`flex items-center gap-2 px-3 py-2 text-base rounded-md transition-colors ${
                                    active ? "font-semibold text-amber-900" : "text-gray-800 hover:bg-amber-50"
                                  }`}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setDhammaDropdown(false);
                                  }}
                                >
                                  {content}
                                </a>
                              ) : (
                                <Link
                                  href={sub.path}
                                  className={`flex items-center gap-2 px-3 py-2 text-base rounded-md transition-colors ${
                                    active ? "font-semibold text-amber-900" : "text-gray-800 hover:bg-amber-50"
                                  }`}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setDhammaDropdown(false);
                                  }}
                                >
                                  {content}
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}