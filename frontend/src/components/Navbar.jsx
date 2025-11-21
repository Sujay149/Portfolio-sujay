import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Twitter, Github, Linkedin, Moon, Sun } from 'lucide-react';
import { FaPinterest, FaDribbble } from 'react-icons/fa';
import { mockData } from '../mock';

const Navbar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // This would typically toggle a dark mode class on the document
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50/80 backdrop-blur-md">
      <div className="w-full px-8 lg:px-16 xl:px-32 py-6">
        <div className="flex items-center justify-between w-full">
          {/* Left Navigation */}
          <div className="flex items-center gap-6 lg:gap-8">
            <Link 
              to="/" 
              className={`text-base font-medium transition-colors hover:text-black relative ${
                isActive('/') ? 'text-black' : 'text-gray-700'
              }`}
            >
              Home
              {isActive('/') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>}
            </Link>
            <Link 
              to="/about" 
              className={`text-base font-medium transition-colors hover:text-black relative ${
                isActive('/about') ? 'text-black' : 'text-gray-700'
              }`}
            >
              About
              {isActive('/about') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>}
            </Link>
            <Link 
              to="/projects" 
              className={`text-base font-medium transition-colors hover:text-black relative ${
                isActive('/projects') ? 'text-black' : 'text-gray-700'
              }`}
            >
              Projects
              {isActive('/projects') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>}
            </Link>
            <Link 
              to="/experience" 
              className={`text-base font-medium transition-colors hover:text-black relative ${
                isActive('/experience') ? 'text-black' : 'text-gray-700'
              }`}
            >
              Experience
              {isActive('/experience') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>}
            </Link>
          </div>

          {/* Center Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg hover:scale-110 transition-transform">
              {mockData.profile.initials}
            </div>
          </Link>

          {/* Right Social Icons */}
          <div className="flex items-center gap-3 lg:gap-4">
          
            <a 
              href={mockData.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition-opacity"
              aria-label="Github"
            >
              <Github size={22} />
            </a>
            <a 
              href={mockData.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} fill="currentColor" />
            </a>
          
           
            <button 
              onClick={toggleDarkMode}
              className="text-black hover:opacity-70 transition-opacity"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
