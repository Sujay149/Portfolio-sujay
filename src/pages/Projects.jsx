import React, { useEffect, useState, useRef } from 'react';
import { Github } from 'lucide-react';
import { mockData } from '../mock';

const FeaturedProject = ({ project, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`group relative bg-white dark:bg-gray-800 rounded-[40px] p-8 border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 ease-out w-[360px] h-[480px] flex-shrink-0 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_16px_50px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_16px_50px_rgba(255,255,255,0.1)] ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative w-full h-52 mb-3 rounded-[28px] overflow-hidden bg-gray-50 dark:bg-gray-700">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {project.badge && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            {project.badge}
          </div>
        )}
      </div>

      {/* Category Label - Below Image */}
      <div className="mb-5">
        <span className="inline-block text-xs font-semibold text-pink-500 dark:text-pink-400 uppercase tracking-wide">
          {project.category}
        </span>
      </div>

      {/* Content positioned at bottom */}
      <div className="absolute inset-x-8 bottom-8">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-2 transition-colors">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-2">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <Github size={20} className="text-gray-900 dark:text-white transition-colors" />
          </a>
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
};

const RegularProject = ({ project }) => {
  return (
    <div className="border-4 border-black dark:border-white rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all h-full flex flex-col">
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gray-100">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 md:h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-300"
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
      <div className="p-4 sm:p-5 md:p-6 bg-white dark:bg-gray-800 transition-colors flex-grow flex flex-col justify-between">
        <div>
          <p className="text-pink-500 dark:text-pink-400 font-semibold text-xs mb-2 transition-colors">{project.category}</p>
          <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-3 transition-colors">
            {project.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-3 mt-auto">
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

const ProjectRow = ({ projects, title, delay = 0 }) => {
  const scrollRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="mb-16">
      <h2 
        className={`text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10 transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {title}
      </h2>
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {projects.map((project, index) => (
          <FeaturedProject key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Separate projects by type and sort (fullstack first, then frontend)
  const sortedProjects = [...mockData.projects].sort((a, b) => {
    const typeOrder = { fullstack: 0, frontend: 1 };
    return (typeOrder[a.type] || 2) - (typeOrder[b.type] || 2);
  });

  // Group projects by type
  const fullstackProjects = sortedProjects.filter(p => p.type === 'fullstack');
  const frontendProjects = sortedProjects.filter(p => p.type === 'frontend');

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black pt-0 transition-colors duration-300">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 py-24">
        {/* Main Heading */}
        <div className="text-center mb-16 pt-[50px]">
          <h1 
            className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Imagination Trumps<br />Knowledge!
          </h1>
        </div>

        {/* Fullstack Projects Section */}
        {fullstackProjects.length > 0 && (
          <ProjectRow 
            projects={fullstackProjects} 
            title="Full Stack Projects" 
            delay={100}
          />
        )}

        {/* Frontend Projects Section */}
        {frontendProjects.length > 0 && (
          <ProjectRow 
            projects={frontendProjects} 
            title="Frontend Projects" 
            delay={200}
          />
        )}
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Projects;
