import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Twitter, Github, Linkedin, Moon, Sun, Menu, X } from 'lucide-react';
import { FaPinterest, FaDribbble } from 'react-icons/fa';
import { mockData } from '../mock';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300">
      <div className="w-full px-6 lg:px-16 xl:px-32 py-2">
        <div className="flex items-center justify-between w-full">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link 
              to="/" 
              className={`text-base font-medium transition-colors hover:text-black dark:hover:text-white relative ${
                isActive('/') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Home
              {isActive('/') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white"></span>}
            </Link>
            <Link 
              to="/about" 
              className={`text-base font-medium transition-colors hover:text-black dark:hover:text-white relative ${
                isActive('/about') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              About
              {isActive('/about') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white"></span>}
            </Link>
            <Link 
              to="/projects" 
              className={`text-base font-medium transition-colors hover:text-black dark:hover:text-white relative ${
                isActive('/projects') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Projects
              {isActive('/projects') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white"></span>}
            </Link>
            <Link 
              to="/experience" 
              className={`text-base font-medium transition-colors hover:text-black dark:hover:text-white relative ${
                isActive('/experience') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Experience
              {isActive('/experience') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white"></span>}
            </Link>
          </div>

          {/* Hamburger Menu - Mobile */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-black dark:text-white hover:opacity-70 transition-opacity z-50 relative"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-base md:text-lg hover:scale-110 transition-transform">
              {mockData.profile.initials}
            </div>
          </Link>

          {/* Right Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a 
              href={mockData.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:opacity-70 transition-opacity"
              aria-label="Github"
            >
              <Github size={22} />
            </a>
            <a 
              href={mockData.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0A66C2] dark:text-[#0A66C2] hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} fill="currentColor" />
            </a>
            <button 
              onClick={toggleDarkMode}
              className="text-black dark:text-white hover:opacity-70 transition-opacity"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>

          {/* Right Social Icons - Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <a 
              href={mockData.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:opacity-70 transition-opacity"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a 
              href={mockData.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0A66C2] dark:text-[#0A66C2] hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={closeMobileMenu}>
        <div className="flex flex-col items-center justify-center h-screen gap-8 px-6" onClick={(e) => e.stopPropagation()}>
          {/* Mobile Navigation Links Container */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-8 flex flex-col gap-6 min-w-[280px]">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className={`text-2xl font-bold transition-colors hover:text-black dark:hover:text-white text-center ${
                isActive('/') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Home
            </Link>
            <div className="h-px bg-gray-200 dark:bg-gray-600"></div>
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className={`text-2xl font-bold transition-colors hover:text-black dark:hover:text-white text-center ${
                isActive('/about') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              About
            </Link>
            <div className="h-px bg-gray-200 dark:bg-gray-600"></div>
            <Link 
              to="/projects" 
              onClick={closeMobileMenu}
              className={`text-2xl font-bold transition-colors hover:text-black dark:hover:text-white text-center ${
                isActive('/projects') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Projects
            </Link>
            <div className="h-px bg-gray-200 dark:bg-gray-600"></div>
            <Link 
              to="/experience" 
              onClick={closeMobileMenu}
              className={`text-2xl font-bold transition-colors hover:text-black dark:hover:text-white text-center ${
                isActive('/experience') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Experience
            </Link>
            <div className="h-px bg-gray-200 dark:bg-gray-600"></div>
            <button 
              onClick={toggleDarkMode}
              className="text-black dark:text-white hover:opacity-70 transition-opacity flex items-center justify-center gap-2 text-xl font-bold"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <><Sun size={24} /> Light</> : <><Moon size={24} /> Dark</>}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
