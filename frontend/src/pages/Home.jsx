import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import HireMeBadge from '../components/HireMeBadge';
import { mockData } from '../mock';

const Home = () => {
  return (
    <div className="min-h-screen pt-0 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Watercolor Portrait */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <img 
                src="/herobg.png" 
                alt="Developer portrait" 
                className="w-full h-[560px] object-cover relative z-10"
                style={{
                  filter: 'contrast(1.15) saturate(1.2) brightness(1.05)',
                  mixBlendMode: 'multiply'
                }}
              />
              {/* Watercolor splash effects */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-48 h-48 bg-purple-400 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute top-20 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-56 h-56 bg-orange-400 rounded-full opacity-25 blur-3xl"></div>
              </div>
              <HireMeBadge />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 order-1 lg:order-2 -ml-[32px] -mt-[37px]">
               <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-normal">
              {mockData.profile.tagline}
            </h1>
            <p className="text-l text-black-900 font leading-relaxed max-w-xl -mt-[14px]">
              {mockData.profile.description}
            </p>
            <div className="flex items-center gap-6 pt-0">
              <a
                href={mockData.profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 font-semibold text-sm md:text-base shadow-lg hover:shadow-xl"
              >
                Resume <ExternalLink size={18} />
              </a>
              <Link
                to="/contact"
                className="text-black font-semibold hover:underline underline-offset-4 transition-all text-sm md:text-base"
              >
                Contact
              </Link>
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