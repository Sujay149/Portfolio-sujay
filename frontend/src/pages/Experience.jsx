import React from 'react';
import { ExternalLink } from 'lucide-react';
import { mockData } from '../mock';

const ExperienceCard = ({ exp, index }) => {
  // Color schemes for cards
  const colors = [
    { bg: 'bg-[#912f56]', text: 'text-white', badge: 'bg-white/20' }, // Berry
    { bg: 'bg-[#f13c77]', text: 'text-[#fff8e1]', badge: 'bg-white/20' }, // Peach
    { bg: 'bg-[#97a87a]', text: 'text-white', badge: 'bg-white/20' }, // Forest Green
  ];
  
  const colorScheme = colors[index % colors.length];
  
  return (
    <div className="border-4 border-black rounded-3xl overflow-hidden bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
      {/* Header Section */}
      <div className={`${colorScheme.bg} p-6`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className={`${colorScheme.text} opacity-90 font-semibold text-sm mb-2`}>{exp.period}</p>
            <h3 className={`text-2xl font-bold ${colorScheme.text} mb-2`}>
              {exp.title}
            </h3>
            <p className={`${colorScheme.text} opacity-90 text-lg font-semibold`}>
              @{exp.company}
            </p>
          </div>
          <div className={`${colorScheme.badge} backdrop-blur-sm rounded-full px-4 py-2`}>
            <span className={`${colorScheme.text} text-sm font-bold`}>{exp.location}</span>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 bg-white">
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          {exp.description}
        </p>
        
        <div className="flex items-center gap-3">
          <a 
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <ExternalLink size={18} />
            <span>View Project</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="min-h-screen pt-0 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h1 className="text-7xl lg:text-8xl font-black text-black leading-[1.02] tracking-tight">
            Where Vision Meets<br />Execution
          </h1>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.about.experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
