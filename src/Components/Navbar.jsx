import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaUser, FaLaptopCode, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: 'hero', label: 'Home', icon: <FaUser /> },
    { to: 'about', label: 'About', icon: <FaUser /> },
    { to: 'skills', label: 'Skills', icon: <FaLaptopCode /> },
    { to: 'portfolio', label: 'Portfolio', icon: <FaLaptopCode /> },
    { to: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="bg-gray-900 text-white shadow-md sticky top-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        <motion.h1
          className="text-2xl font-bold text-purple-400 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="animate-pulse">Deluar.dev</span>
        </motion.h1>

       
        <div className="hidden md:flex gap-6 text-sm md:text-base">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-purple-400 border-b-2 border-purple-500"
              className="cursor-pointer flex items-center gap-2 px-3 py-1 rounded-md transition-all duration-300 ease-in-out hover:text-purple-400"
              onClick={closeMobileMenu}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>

       
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

     
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 py-3 space-y-3 transition-all duration-300">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-purple-400"
              className="flex items-center gap-2 cursor-pointer py-2 rounded-md transition duration-300 ease-in-out hover:text-purple-400"
              onClick={closeMobileMenu}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
