import React, { useEffect, useState } from 'react';
import { Github, ArrowUpRight, Layers } from 'lucide-react';
import { mockData } from '../mock';

/* ---------- Bento layout (same classes as the bento-grid component) ---------- */
const BentoGrid = ({ className = '', children }) => (
  <div
    className={`mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[21rem] md:grid-cols-3 md:[grid-auto-flow:dense] ${className}`}
  >
    {children}
  </div>
);

const BentoGridItem = ({ className = '', title, description, header, icon, footer }) => (
  <article
    className={`group/bento row-span-1 flex flex-col justify-between gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none ${className}`}
  >
    {header}
    <div className="transition duration-200 group-hover/bento:translate-x-2">
      {icon}
      <h3 className="mt-2 mb-2 line-clamp-1 font-sans font-bold text-neutral-600 dark:text-neutral-200">
        {title}
      </h3>
      <p className="line-clamp-2 font-sans text-xs font-normal leading-relaxed text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
      {footer}
    </div>
  </article>
);

/* ---------- Project card ---------- */
const ProjectHeader = ({ project }) => (
  <div className="relative min-h-[10rem] flex-1 w-full overflow-hidden rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
    {project.image && (
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/bento:scale-105"
      />
    )}
    {project.badge && (
      <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 text-xs font-bold text-white">
        {project.badge}
      </span>
    )}
  </div>
);

const ProjectLinks = ({ project }) => (
  <div className="mt-3 flex items-center gap-3">
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} on GitHub`}
        className="text-neutral-600 transition-opacity hover:opacity-70 dark:text-neutral-200"
      >
        <Github size={18} />
      </a>
    )}
    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 rounded-lg bg-black px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
      >
        Visit Project
        <ArrowUpRight size={14} />
      </a>
    )}
  </div>
);

/* Wide cards at positions 3 and 6 of every 7 (same rhythm as the bento demo) */
const isWide = (i) => i % 7 === 3 || i % 7 === 6;

const ProjectBento = ({ projects, title }) => (
  <section className="mb-16 lg:mb-20">
    <h2 className="mx-auto mb-8 max-w-7xl text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
      {title}
    </h2>
    <BentoGrid>
      {projects.map((project, i) => (
        <BentoGridItem
          key={project.id}
          className={isWide(i) ? 'md:col-span-2' : ''}
          header={<ProjectHeader project={project} />}
          icon={
            <div className="flex items-center gap-2">
              <Layers size={16} className="text-neutral-500" />
              <span className="text-xs font-semibold uppercase tracking-wide text-pink-500 dark:text-pink-400">
                {project.category}
              </span>
            </div>
          }
          title={project.title}
          description={project.description}
          footer={<ProjectLinks project={project} />}
        />
      ))}
    </BentoGrid>
  </section>
);

/* ---------- Page ---------- */
const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fullstackProjects = mockData.projects.filter((p) => p.type === 'fullstack');
  const frontendProjects = mockData.projects.filter((p) => p.type === 'frontend');

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] dark:bg-black pt-0 transition-colors duration-300">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 py-24">
        {/* Main Heading */}
        <div className="text-center mb-16 lg:mb-20 pt-[50px]">
          <h1
            className={`text-5xl sm:text-7xl lg:text-8xl font-black text-black dark:text-white leading-[1.02] tracking-tight transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Imagination Trumps<br />Knowledge!
          </h1>
        </div>

        {fullstackProjects.length > 0 && (
          <ProjectBento projects={fullstackProjects} title="Full Stack Projects" />
        )}

        {frontendProjects.length > 0 && (
          <ProjectBento projects={frontendProjects} title="Frontend Projects" />
        )}
      </div>
    </div>
  );
};

export default Projects;