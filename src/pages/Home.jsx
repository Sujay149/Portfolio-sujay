import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import HireMeBadge from '../components/HireMeBadge';
import { mockData } from '../mock';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className="min-h-screen lg:h-screen pt-[70px] bg-gray-50 dark:bg-transparent relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 lg:py-8 min-h-full lg:h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Left Side - Watercolor Portrait */}
          <div className="relative order-1 lg:order-1">
  <div className="relative max-w-sm sm:max-w-md lg:max-w-md mx-auto lg:mx-0 mt-10 lg:mt-0">
   <img 
  src={darkMode ? "/herodark.png" : "/herobg.png"}
  alt="Developer portrait"
  className="
    w-full
    h-[420px] sm:h-[470px] lg:h-[720px]
    object-contain
    relative z-10
  "
  style={darkMode ? {
    filter: 'contrast(1.1) saturate(1.1) brightness(1.15)',
  } : {
    filter: 'contrast(1.15) saturate(1.2) brightness(1.05)',
    mixBlendMode: 'multiply'
  }}
/>


    {/* Watercolor splash effects */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-0 w-28 sm:w-40 lg:w-40 h-28 sm:h-40 lg:h-40 bg-purple-400 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-10 sm:top-16 lg:top-16 right-0 w-40 sm:w-56 lg:w-56 h-40 sm:h-56 lg:h-56 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-16 lg:bottom-16 left-6 sm:left-8 lg:left-10 w-36 sm:w-48 lg:w-48 h-36 sm:h-48 lg:h-48 bg-orange-400 rounded-full opacity-25 blur-3xl"></div>
    </div>

    <div className="hidden lg:block">
      <HireMeBadge />
    </div>
  </div>
</div>


          {/* Right Side - Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-black dark:text-white transition-colors">
              {mockData.profile.tagline}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl transition-colors">
              {mockData.profile.description}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-0">
              <a
                href={mockData.profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 font-semibold text-sm md:text-base shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Resume <ExternalLink size={18} />
              </a>
              <Link
                to="/contact"
                className="text-black dark:text-white font-semibold hover:underline underline-offset-4 transition-all text-sm md:text-base text-center sm:text-left w-full sm:w-auto"
              >
                Contact
              </Link>
              <a
                href="mailto:sujayss149@gmail.com"
                className="lg:hidden inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold text-sm md:text-base shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* Lightbulb illustration - Bottom Right */}
        <div className="fixed bottom-8 right-8 hidden xl:block z-20 animate-pulse">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Glow effect */}
            <circle cx="70" cy="50" r="35" fill="#FCD34D" opacity="0.3" filter="blur(8px)"/>
            {/* Main bulb */}
            <circle cx="70" cy="50" r="28" fill="#FDE68A" stroke="#1F2937" strokeWidth="2.5"/>
            {/* Light rays */}
            <line x1="70" y1="15" x2="70" y2="5" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="98" y1="28" x2="106" y2="20" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="42" y1="28" x2="34" y2="20" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="105" y1="50" x2="115" y2="50" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="35" y1="50" x2="25" y2="50" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round"/>
            {/* Base */}
            <path d="M 52 78 L 52 93 L 88 93 L 88 78" stroke="#1F2937" strokeWidth="2.5" fill="#E5E7EB"/>
            <line x1="52" y1="98" x2="88" y2="98" stroke="#1F2937" strokeWidth="3"/>
            <line x1="57" y1="103" x2="83" y2="103" stroke="#1F2937" strokeWidth="3"/>
            {/* Connection curves */}
            <path d="M 52 78 Q 52 68 58 62" stroke="#1F2937" strokeWidth="2.5" fill="none"/>
            <path d="M 88 78 Q 88 68 82 62" stroke="#1F2937" strokeWidth="2.5" fill="none"/>
            {/* Shine mark */}
            <line x1="60" y1="40" x2="65" y2="35" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;