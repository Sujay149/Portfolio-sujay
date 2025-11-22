import React from 'react';
import { Github } from 'lucide-react';
import { mockData } from '../mock';

const FeaturedProject = ({ project }) => {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="border-4 border-black dark:border-white rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-colors">
        {/* Image Section */}
        <div className="relative overflow-hidden bg-white dark:bg-gray-700 p-3 h-80 transition-colors">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
          />
          {project.badge && (
            <div className="absolute top-6 left-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold transform -rotate-12">
              {project.badge}
            </div>
          )}
        </div>
        
        {/* Content Section */}
        <div className="p-8 bg-white dark:bg-gray-800 transition-colors">
          <p className="text-pink-500 dark:text-pink-400 font-semibold text-sm mb-2 transition-colors">{project.category}</p>
          <h3 className="text-3xl font-bold text-black dark:text-white mb-4 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 transition-colors">
            {project.description}
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Github size={24} className="text-black dark:text-white transition-colors" />
            </a>
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const RegularProject = ({ project }) => {
  return (
    <div className="border-4 border-black dark:border-white rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all">
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gray-100">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        {project.badge && (
          <div className="absolute top-3 right-3 bg-white text-black p-2 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6 bg-white dark:bg-gray-800 transition-colors">
        <p className="text-pink-500 dark:text-pink-400 font-semibold text-xs mb-2 transition-colors">{project.category}</p>
        <h3 className="text-xl font-bold text-black dark:text-white mb-3 transition-colors">
          {project.title}
        </h3>
        
        <div className="flex items-center gap-3">
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white font-semibold text-sm hover:underline transition-colors"
          >
            Visit
          </a>
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Github size={20} className="text-black dark:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-0 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Main Heading */}
        <div className="text-center mb-20 pt-[50px]">
          <h1 className="text-7xl lg:text-8xl font-black text-black dark:text-white leading-[1.02] tracking-tight transition-colors">
            Imagination Trumps<br />Knowledge!
          </h1>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <FeaturedProject project={mockData.projects[0]} />
        </div>

        {/* Second Featured Project */}
        <div className="mb-16">
          <FeaturedProject project={mockData.projects[1]} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
