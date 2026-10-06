import React, { useEffect, useRef, useState } from 'react';
import { mockData } from '../mock';
import { motion } from 'framer-motion';
import AppleCardsCarouselDemo from '../components/apple-cards-carousel-demo';
import HowIWork from '../components/How-i-work';

/* ---------- Hero text styles (shared by desktop + mobile) ---------- */
const INK = '#0b1220';
const heroFont = "'Montserrat', 'Inter', sans-serif";

// Inline styles: used where text sits on the photo (always navy)
const solidText = {
  fontFamily: heroFont,
  fontWeight: 900,
  color: INK,
  lineHeight: 0.92,
  letterSpacing: '-0.02em',
  textTransform: 'uppercase',
};

const outlineText = {
  ...solidText,
  color: 'transparent',
  WebkitTextStroke: `2px ${INK}`,
};

// Tailwind classes: used where text sits on the page background (follows dark mode)
const mSolid = 'font-black uppercase leading-[0.92] tracking-[-0.02em] text-[#0b1220] dark:text-white';
const mOutline =
  'font-black uppercase leading-[0.92] tracking-[-0.02em] text-transparent [-webkit-text-stroke:1.5px_#0b1220] dark:[-webkit-text-stroke:1.5px_#fff]';

const stackRows = [
  ['React', 'Next.js', 'Node.js'],
  ['Spring Boot', 'MySQL', 'Docker'],
];

const skillTabs = ['FRONTEND', 'BACKEND', 'DATABASE', 'TOOLS & SERVICES', 'MOBILE', 'OTHERS'];

const skillsByTab = {
  FRONTEND: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind'],
  BACKEND: ['Java', 'Node.js', 'Express.js', 'PHP', 'Spring Boot'],
  DATABASE: ['MongoDB', 'MySQL', 'Firebase', 'Supabase'],
  'TOOLS & SERVICES': ['Git', 'GitHub', 'Vercel', 'Netlify', 'Docker', 'Figma', 'Bootstrap', 'Material UI'],
  MOBILE: ['React Native'],
  OTHERS: ['Python'],
};

/* ---------- Skill icons (https://skillicons.dev) ---------- */
const skillIcons = {
  'JavaScript': 'js',
  'TypeScript': 'ts',
  'Python': 'py',
  'Java': 'java',
  'PHP': 'php',
  'React.js': 'react',
  'Next.js': 'nextjs',
  'HTML5': 'html',
  'CSS3': 'css',
  'Tailwind': 'tailwind',
  'Bootstrap': 'bootstrap',
  'Material UI': 'materialui',
  'Node.js': 'nodejs',
  'Express.js': 'express',
  'Spring Boot': 'spring',
  'MongoDB': 'mongodb',
  'MySQL': 'mysql',
  'Firebase': 'firebase',
  'Supabase': 'supabase',
  'Git': 'git',
  'GitHub': 'github',
  'Vercel': 'vercel',
  'Netlify': 'netlify',
  'Docker': 'docker',
  'Figma': 'figma',
  'React Native': 'react', // skillicons.dev has no React Native icon
};

const iconUrl = (skill, theme) =>
  `https://skillicons.dev/icons?i=${skillIcons[skill]}&theme=${theme}`;

const StackRows = ({ className = '', rowClassName = '' }) => (
  <div className={className}>
    {stackRows.map((row) => (
      <div key={row[0]} className={rowClassName}>
        {row.map((tech, i) => (
          <React.Fragment key={tech}>
            {i > 0 && <span style={{ opacity: 0.45 }}>|</span>}
            <span>{tech}</span>
          </React.Fragment>
        ))}
      </div>
    ))}
  </div>
);

const About = () => {
  const [educationProgress, setEducationProgress] = useState(0);
  const [activeSkillTab, setActiveSkillTab] = useState('FRONTEND');
  const educationRef = useRef();

  const getFilteredSkills = () => skillsByTab[activeSkillTab] || mockData.about.skills;

  useEffect(() => {
    const handleScroll = () => {
      if (educationRef.current) {
        const rect = educationRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          const visibleHeight = Math.min(windowHeight, sectionTop + sectionHeight) - Math.max(0, sectionTop);
          const progress = Math.min(100, Math.max(0, (visibleHeight / sectionHeight) * 150 - 25));
          setEducationProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* === HERO SECTION ===
          On mobile the section must grow with its content (the role block sits below the first screen),
          so the fixed height from .hero-screen is overridden below lg. */}
      <section className="hero-screen relative w-full bg-white dark:bg-black max-lg:!h-auto max-lg:!min-h-0 max-lg:!overflow-visible">
        <div className="w-full lg:h-full">
          {/* ---------- Mobile: name over the photo, role section below the first screen ---------- */}
          <div className="lg:hidden" style={{ fontFamily: heroFont }}>
            {/* Screen 1: full-viewport photo with name on top */}
            <div className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
              <img
                src="about-new.jpg"
                alt="Sujay Babu Thota"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: '47% 40%', // was '55% 40%'
                  maskImage: 'linear-gradient(to bottom, #000 0%, #000 82%, rgba(0,0,0,0.5) 93%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 82%, rgba(0,0,0,0.5) 93%, transparent 100%)',
                }}
              />

              <motion.h1
                aria-label="Sujay Thota"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="absolute left-5 right-5 top-20 z-10 select-none"
              >
                <span className="block" style={{ ...solidText, fontSize: 'clamp(64px, 21vw, 120px)' }}>
                  Sujay
                </span>
                <span className="block" style={{ ...outlineText, fontSize: 'clamp(64px, 21vw, 120px)' }}>
                  Thota
                </span>
              </motion.h1>
            </div>

            {/* Screen 2: role + stack, revealed on scroll */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="px-5 pt-6 pb-14"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-medium tracking-[0.3em] text-[#0b1220]/70 dark:text-white/70">
                  FULL STACK
                </span>
                <span className="flex-1 h-px bg-[#0b1220]/60 dark:bg-white/60" />
              </div>

              <h2 aria-label="Software Developer">
                <span className={`block ${mSolid}`} style={{ fontSize: 'clamp(40px, 13vw, 72px)' }}>Software</span>
                <span className={`block ${mOutline}`} style={{ fontSize: 'clamp(40px, 13vw, 72px)' }}>Developer</span>
              </h2>

              <StackRows
                className="mt-5 space-y-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#0b1220]/70 dark:text-white/70"
                rowClassName="flex flex-wrap items-center gap-x-3"
              />

              <div className="mt-6 mb-5 h-0.5 w-12 bg-[#0b1220] dark:bg-white" />

              <p className="max-w-xs text-[15px] leading-relaxed text-[#0b1220] dark:text-gray-300">
                Building scalable, efficient and user-friendly web &amp; mobile applications
                with modern technologies.
              </p>

              {/* Resume CTA */}
              <motion.a
                href={mockData.profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#0b1220] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#7B1F2A] dark:bg-white dark:text-[#0b1220] dark:hover:bg-[#7B1F2A] dark:hover:text-white"
                style={{ fontFamily: heroFont }}
              >
                Resume
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="13" y2="17" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* ---------- Desktop: full-width photo with text overlay ---------- */}
          <div className="hidden lg:block w-full h-full relative">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
              className="absolute inset-0"
              style={{ top: -50, zIndex: 4, overflow: 'hidden' }}
            >
              <img
                src="about-new.jpg"
                alt="Sujay Babu Thota - Full Stack Developer"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Text overlay */}
            <div
              className="absolute inset-0 flex items-center justify-between px-[4vw] pt-10 pointer-events-none select-none"
              style={{ zIndex: 5 }}
            >
              {/* Left: name + tagline */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                className="w-[32vw]"
              >
                <h1 aria-label="Sujay Thota">
                  <span className="block" style={{ ...solidText, fontSize: 'clamp(72px, 8vw, 170px)' }}>
                    Sujay
                  </span>
                  <span className="block" style={{ ...outlineText, fontSize: 'clamp(72px, 8vw, 170px)' }}>
                    Thota
                  </span>
                </h1>

                <div className="mt-8 h-0.5 w-[5vw]" style={{ background: INK }} />

                <p
                  className="mt-5 max-w-[22rem]"
                  style={{
                    fontFamily: heroFont,
                    fontSize: 'clamp(15px, 1.25vw, 22px)',
                    lineHeight: 1.45,
                    color: INK,
                  }}
                >
                  Building scalable, efficient and user-friendly web &amp; mobile applications
                  with modern technologies.
                </p>

                {/* Resume CTA */}
                <motion.a
                  href={mockData.profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
                  className="group pointer-events-auto mt-7 inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] transition-all duration-300"
                  style={{
                    fontFamily: heroFont,
                    background: INK,
                    color: '#fff',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#7B1F2A'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = INK; }}
                >
                  Resume
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="8" y1="13" x2="16" y2="13" />
                    <line x1="8" y1="17" x2="13" y2="17" />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Right: role + stack */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
                className="w-[31vw]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span
                    style={{
                      fontFamily: heroFont,
                      fontSize: 'clamp(12px, 1.1vw, 18px)',
                      fontWeight: 500,
                      letterSpacing: '0.3em',
                      color: 'rgba(11,18,32,0.75)',
                    }}
                  >
                    FULL STACK
                  </span>
                  <span className="flex-1 h-px" style={{ background: INK }} />
                </div>

                <h2 aria-label="Software Developer">
                  <span className="block" style={{ ...solidText, fontSize: 'clamp(44px, 4.7vw, 100px)' }}>
                    Software
                  </span>
                  <span className="block" style={{ ...outlineText, fontSize: 'clamp(44px, 4.7vw, 100px)' }}>
                    Developer
                  </span>
                </h2>

                <div style={{ fontFamily: heroFont, color: 'rgba(11,18,32,0.7)' }}>
                  <StackRows
                    className="mt-5 space-y-2 font-medium uppercase"
                    rowClassName="flex items-center gap-4 tracking-[0.25em] text-[clamp(11px,1vw,17px)]"
                  />
                </div>

                <div className="mt-8 ml-auto h-0.5 w-[5vw]" style={{ background: INK }} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === SKILLS === */}
      <div className="mb-20 lg:mb-32 mt-12 lg:mt-16 relative">
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-5 lg:px-12">
            <div className="flex items-center gap-3 mb-6 lg:mb-8">
              <div className="w-10 h-[3px]" style={{ backgroundColor: '#7B1F2A' }} />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>SKILLS</h2>
            </div>

            {/* Tabs: single scrollable row on mobile, wraps on desktop */}
            <div
              className="flex gap-6 mb-8 lg:mb-10 text-sm font-semibold overflow-x-auto lg:overflow-visible lg:flex-wrap whitespace-nowrap -mx-5 px-5 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {skillTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSkillTab(tab)}
                  className={`shrink-0 pb-2 border-b-2 transition-colors ${
                    activeSkillTab === tab
                      ? 'text-black dark:text-white'
                      : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                  }`}
                  style={activeSkillTab === tab ? { borderColor: '#7B1F2A' } : {}}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-4">
              {getFilteredSkills().map((skill) => (
                <div
                  key={skill}
                  className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {skillIcons[skill] ? (
                    <>
                      {/* light-mode icon */}
                      <img
                        src={iconUrl(skill, 'light')}
                        alt={skill}
                        loading="lazy"
                        className="w-12 h-12 mb-3 dark:hidden"
                      />
                      {/* dark-mode icon */}
                      <img
                        src={iconUrl(skill, 'dark')}
                        alt={skill}
                        loading="lazy"
                        className="hidden dark:block w-12 h-12 mb-3"
                      />
                    </>
                  ) : (
                    <div className="w-12 h-12 mb-3 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-gray-700 dark:text-gray-200">
                      {skill.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                  <span
                    className="text-sm font-semibold text-center text-gray-700 dark:text-gray-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === EDUCATION === */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-16 lg:mb-20 relative" id="education" ref={educationRef}>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-4 max-w-3xl"
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Education</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto px-5 lg:px-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transition-colors">
                <div className="w-full bg-purple-500 transition-all duration-200 ease-out" style={{ height: `${educationProgress}%` }}></div>
              </div>
              <div className="space-y-12">
                {mockData.about.education.map((edu, index) => {
                  const threshold = index === 0 ? 10 : 50;
                  return (
                    <div key={index} className="flex gap-5 sm:gap-8">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 shadow-lg relative z-10 transition-all duration-300 ${educationProgress > threshold ? 'bg-purple-500 scale-100' : 'bg-gray-300 dark:bg-gray-600 scale-75'}`}></div>
                      <div className={`flex-1 min-w-0 transition-all duration-500 ${educationProgress > threshold ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2 transition-colors">{edu.degree}</h3>
                        <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 transition-colors">{edu.period} | {edu.institution}, {edu.location}</div>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">{edu.details}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === HOW I WORK === */}
      <HowIWork />

      {/* === ACHIEVEMENTS === */}
      <AppleCardsCarouselDemo />
    </div>
  );
};

export default About;