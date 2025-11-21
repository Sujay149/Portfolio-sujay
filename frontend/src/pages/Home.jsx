import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import HireMeBadge from '../components/HireMeBadge';
import { mockData } from '../mock';

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Portrait Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop" 
                alt="Developer portrait" 
                className="w-full h-auto max-w-lg mx-auto"
                style={{
                  filter: 'contrast(1.1) saturate(0.8)'
                }}
              />
              <HireMeBadge />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              {mockData.profile.tagline}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {mockData.profile.description}
            </p>
            <div className="flex items-center gap-6">
              <a
                href={mockData.profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Resume <ExternalLink size={18} />
              </a>
              <Link
                to="/contact"
                className="text-black font-medium hover:underline underline-offset-4 transition-all"
              >
                Contact
              </Link>
            </div>

            {/* Lightbulb illustration */}
            <div className="absolute bottom-20 right-20 hidden xl:block">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="45" r="25" fill="#FCD34D" stroke="#000" strokeWidth="2"/>
                <path d="M 45 70 L 45 85 L 75 85 L 75 70" stroke="#000" strokeWidth="2" fill="none"/>
                <line x1="45" y1="90" x2="75" y2="90" stroke="#000" strokeWidth="2"/>
                <line x1="50" y1="95" x2="70" y2="95" stroke="#000" strokeWidth="2"/>
                <path d="M 45 70 Q 45 60 50 55" stroke="#000" strokeWidth="2" fill="none"/>
                <path d="M 75 70 Q 75 60 70 55" stroke="#000" strokeWidth="2" fill="none"/>
                <line x1="60" y1="15" x2="60" y2="5" stroke="#000" strokeWidth="2"/>
                <line x1="85" y1="25" x2="92" y2="18" stroke="#000" strokeWidth="2"/>
                <line x1="35" y1="25" x2="28" y2="18" stroke="#000" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
