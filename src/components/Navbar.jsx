import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Moon, Sun, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { mockData } from '../mock';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Header */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-gray-50/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
        <div className="w-full px-6 lg:px-16 xl:px-32 py-2">
          <div className="flex items-center justify-between w-full">
            {/* Left Navigation - Desktop */}
            <div className="flex items-center gap-6 lg:gap-8">
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
                to="/experience" 
                className={`text-base font-medium transition-colors hover:text-black dark:hover:text-white relative ${
                  isActive('/experience') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Experience
                {isActive('/experience') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white"></span>}
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
                to="/contact" 
                className={`text-base font-medium transition-colors hover:text-black dark:hover:text-white relative ${
                  isActive('/contact') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Contact
                {isActive('/contact') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white"></span>}
              </Link>
            </div>

            {/* Center Logo */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <img 
                  src={darkMode ? "/middlelight.png" : "/middledark.png"}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Right Social Icons - Desktop */}
            <div className="flex items-center gap-3 lg:gap-4">
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
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-50/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
        <div className="w-full px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Left - Social Icons */}
            <div className="flex items-center gap-3">
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

            {/* Center Logo */}
            <Link to="/">
              <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <img 
                  src={darkMode ? "/middlelight.png" : "/middledark.png"}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Right - Theme Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Floating Style */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-full shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
        <div className="flex items-center justify-around py-3">
          <Link 
            to="/" 
            className={`flex flex-col items-center gap-1 p-2 transition-colors ${
              isActive('/') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <Home size={20} />
          </Link>
          <Link 
            to="/about" 
            className={`flex flex-col items-center gap-1 p-2 transition-colors ${
              isActive('/about') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <User size={20} />
          </Link>
          <Link 
            to="/projects" 
            className={`flex flex-col items-center gap-1 p-2 transition-colors ${
              isActive('/projects') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <FolderOpen size={20} />
          </Link>
          <Link 
            to="/experience" 
            className={`flex flex-col items-center gap-1 p-2 transition-colors ${
              isActive('/experience') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <Briefcase size={20} />
          </Link>
          <Link 
            to="/contact" 
            className={`flex flex-col items-center gap-1 p-2 transition-colors ${
              isActive('/contact') ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <Mail size={20} />
          </Link>
        </div>
      </nav>
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;