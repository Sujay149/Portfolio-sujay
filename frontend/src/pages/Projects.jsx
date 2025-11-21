import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { mockData } from '../mock';

const FeaturedProject = ({ project, reverse = false }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 ${
      reverse ? 'lg:flex-row-reverse' : ''
    }`}>
      {/* Image */}
      <div className={`lg:col-span-7 ${
        reverse ? 'lg:col-start-6' : ''
      }`}>
        <div className="relative border-2 border-black rounded-2xl overflow-hidden bg-white p-2">
          <div className="rounded-xl overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className={`lg:col-span-5 ${
        reverse ? 'lg:col-start-1 lg:row-start-1' : ''
      }`}>
        <div className="space-y-4">
          <p className="text-purple-600 font-medium">Featured Project</p>
          <h3 className="text-3xl lg:text-4xl font-bold">
            {project.title}
          </h3>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-base leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-6 pt-2">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <Github size={28} />
            </a>
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <ExternalLink size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const RegularProject = ({ project }) => {
  return (
    <div className="border-2 border-black rounded-2xl overflow-hidden bg-white">
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>
        
        <p className="text-base leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4 pt-2">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Github size={24} />
          </a>
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-0">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-7xl font-bold">
            Imagination Trumps Knowledge!
          </h1>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <FeaturedProject project={mockData.projects[0]} />
          <FeaturedProject project={mockData.projects[1]} reverse={true} />
        </div>

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {mockData.projects.slice(2).map((project) => (
            <RegularProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
