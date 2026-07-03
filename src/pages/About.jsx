import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../mock';
import { motion } from 'framer-motion';
import { CanvasRevealEffect } from '../components/ui/canvas-reveal-effect';

const AceternityIcon = ({ order }) => {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
      <div className="relative bg-gradient-to-br from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 rounded-full w-14 h-14 flex items-center justify-center border-2 border-white dark:border-black shadow-lg">
        <span className="text-white dark:text-black font-extrabold text-xs tracking-wide">{order}</span>
      </div>
    </div>
  );
};

const Card = ({ title, icon, children, des, index, activeCardIndex, setActiveCardIndex }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.innerWidth < 1024) {
          setActiveCardIndex(index);
        }
      },
      {
        threshold: 0.6,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index, setActiveCardIndex]);

  const shouldShowEffect = hovered || (activeCardIndex === index && window.innerWidth < 1024);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] dark:border-white/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem] rounded-3xl bg-white dark:bg-black"
    >
      <div className="absolute h-10 w-10 top-3 left-3">{icon}</div>
      <AnimatePresence>
        {shouldShowEffect && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className={`text-center transition duration-200 w-full mx-auto flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${shouldShowEffect ? '-translate-y-4 opacity-0' : ''}`}>
          <h2 className="text-black dark:text-white text-3xl md:text-4xl font-extrabold px-4">{title}</h2>
        </div>
        <p className={`text-base md:text-lg relative z-10 text-white transition duration-200 text-center px-6 leading-relaxed font-semibold ${shouldShowEffect ? 'opacity-100 -translate-y-2' : 'opacity-0'}`}>
          {des}
        </p>
      </div>
    </div>
  );
};

const AnimatePresence = ({ children }) => {
  return <>{children}</>;
};

const techBadges = ['React', 'Next.js', 'Spring Boot', 'Node.js', 'React Native', 'MySQL', 'Docker'];

const About = () => {
  const [educationProgress, setEducationProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [activeSkillTab, setActiveSkillTab] = useState('FRONTEND');
  const educationRef = useRef();

  const getFilteredSkills = () => {
    const frontend = ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind'];
    const backend = ['Java', 'Node.js', 'Express.js', 'PHP', 'Spring Boot'];
    const database = ['MongoDB', 'MySQL', 'Firebase', 'Supabase'];
    const tools = ['Git', 'GitHub', 'Vercel', 'Netlify', 'Docker', 'Figma', 'Bootstrap', 'Material UI'];
    const mobile = ['React Native'];
    const others = ['Python'];

    switch (activeSkillTab) {
      case 'FRONTEND': return frontend;
      case 'BACKEND': return backend;
      case 'DATABASE': return database;
      case 'TOOLS & SERVICES': return tools;
      case 'MOBILE': return mobile;
      case 'OTHERS': return others;
      default: return mockData.about.skills;
    }
  };

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
    <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-300">
      {/* === HERO SECTION === */}
      <section className="hero-screen relative w-full bg-white dark:bg-black">
        <div className="w-full h-full">
          {/* Mobile layout - portrait image, starts directly below the fixed header */}
          <div className="lg:hidden hero-media" style={{ zIndex: 4 }}>
            <img
              src="about.png"
              alt="Sujay Babu Thota"
              className="w-full h-full"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0) 100%)',
              }}
            />
          </div>

          {/* Desktop layout - Full width image hero */}
          <div className="hidden lg:block w-full h-full">
            {/* Decorative watermark */}
            <div className="absolute pointer-events-none select-none" style={{ bottom: '60px', left: '5%', zIndex: 2, transform: 'rotate(-8deg)', transformOrigin: 'bottom left' }} aria-hidden="true">
              <span style={{ fontFamily: "'Dancing Script', 'Great Vibes', cursive", fontSize: 'clamp(150px, 28vw, 380px)', color: '#E8E8E8', opacity: 0.5, whiteSpace: 'nowrap', lineHeight: '0.9', display: 'block' }}>About Me</span>
            </div>
            {/* PORTFOLIO watermark */}
            <div className="absolute text-center w-full pointer-events-none select-none" style={{ top: '140px', left: 0, right: 0, zIndex: 1 }} aria-hidden="true">
              <span className="font-black uppercase leading-none inline-block" style={{ fontFamily: "'Inter', 'Montserrat', sans-serif", fontSize: 'clamp(100px, 16vw, 240px)', letterSpacing: '6px', color: 'transparent', WebkitTextStroke: '1.5px solid #D0D0D0', textStroke: '1.5px solid #D0D0D0', whiteSpace: 'nowrap' }}>
                PORTFOLIO
              </span>
            </div>
            {/* Script layer */}
            <div className="absolute pointer-events-none select-none" style={{ top: '110px', left: '130px', zIndex: 3, transform: 'rotate(-3deg)', transformOrigin: 'bottom left' }} aria-hidden="true">
              <span style={{ fontFamily: "'Permanent Marker', 'Rock Salt', cursive", fontSize: '130px', color: '#000', lineHeight: 1 }}></span>
            </div>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
              className="absolute inset-0"
              style={{ top: 'var(--header-height)', zIndex: 4, overflow: 'hidden' }}
            >
              <img
                src="about-desk.png"
                alt="Sujay Babu Thota - Full Stack Developer"
                className="w-full h-full"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0) 100%)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* === ABOUT INTRO CARD === */}
      <div className="relative px-4 lg:px-12 max-w-6xl mx-auto -mt-8 lg:-mt-16 z-20">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 lg:p-10"
        >
          <div className="w-10 h-1 bg-[#8B1E2D] rounded-full mb-6"></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black dark:text-white leading-tight" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-1px' }}>
            SUJAY<br />
            <span className="text-[#8B1E2D]">THOTA</span>
          </h2>
          <div className="w-10 h-[3px] bg-[#8B1E2D] mt-4 mb-4 rounded-full"></div>
          <p className="text-base sm:text-lg font-semibold text-[#8B1E2D] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Full Stack Developer
          </p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Building scalable, efficient and user-friendly web & mobile applications with modern technologies.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {techBadges.map((tech) => (
              <span key={tech} className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#8B1E2D] dark:hover:border-[#8B1E2D] transition-all duration-200 hover:scale-105 cursor-default" style={{ fontFamily: "'Inter', sans-serif" }}>
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#8B1E2D] to-[#6B1522] text-white px-8 py-4 rounded-2xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                HIRE ME
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.button>
            </Link>
            <a href={mockData.profile.resume} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <motion.button whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold text-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                Resume
              </motion.button>
            </a>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <a href={mockData.socialLinks.github} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href={mockData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* === STATISTICS SECTION === */}
      <div className="px-4 lg:px-12 max-w-5xl mx-auto mt-10 lg:mt-16">
        <div className="grid grid-cols-3 gap-3 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 lg:p-8 text-center"
          >
            <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-3 lg:mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
              </svg>
            </div>
            <div className="text-2xl lg:text-4xl font-black text-black dark:text-white" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-2px' }}>10+</div>
            <div className="w-6 h-0.5 bg-[#8B1E2D] mx-auto mt-2 mb-2"></div>
            <div className="text-xs lg:text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-[0.15em]" style={{ fontFamily: "'Inter', sans-serif" }}>PROJECTS</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 lg:p-8 text-center"
          >
            <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-3 lg:mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="text-2xl lg:text-4xl font-black text-black dark:text-white" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-2px' }}>3+</div>
            <div className="w-6 h-0.5 bg-[#8B1E2D] mx-auto mt-2 mb-2"></div>
            <div className="text-xs lg:text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-[0.15em]" style={{ fontFamily: "'Inter', sans-serif" }}>CLIENTS</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 lg:p-8 text-center"
          >
            <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-3 lg:mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div className="text-2xl lg:text-4xl font-black text-black dark:text-white" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-2px' }}>1+</div>
            <div className="w-6 h-0.5 bg-[#8B1E2D] mx-auto mt-2 mb-2"></div>
            <div className="text-xs lg:text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-[0.15em]" style={{ fontFamily: "'Inter', sans-serif" }}>YEARS EXP</div>
          </motion.div>
        </div>
      </div>

      {/* === QUICK HIGHLIGHTS === */}
      <div className="px-4 lg:px-12 max-w-5xl mx-auto mt-10 lg:mt-16">
        <div className="grid grid-cols-2 gap-3 lg:gap-4">
          {[
            { icon: 'code', title: 'Clean Code', desc: 'Writing clean, maintainable and efficient code that scales.' },
            { icon: 'zap', title: 'Problem Solver', desc: 'Turning complex problems into simple, effective solutions.' },
            { icon: 'user', title: 'User Focused', desc: 'Building products that provide real value and great UX.' },
            { icon: 'star', title: 'Fast Learner', desc: 'Continuously exploring new technologies and improving.' },
            { icon: 'users', title: 'Team Player', desc: 'Collaborating effectively to deliver outstanding results.' },
            { icon: 'layers', title: 'Full Stack', desc: 'End-to-end development from frontend to backend systems.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, boxShadow: '0 8px 25px rgba(139,30,45,0.08)' }}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-800 p-4 lg:p-6 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.icon === 'code' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  )}
                  {item.icon === 'zap' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  )}
                  {item.icon === 'user' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  )}
                  {item.icon === 'star' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  )}
                  {item.icon === 'users' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  )}
                  {item.icon === 'layers' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="text-sm lg:text-base font-bold text-black dark:text-white mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{item.title}</h4>
                  <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === BIOGRAPHY FULL SECTION === */}
      <div className="px-4 lg:px-12 max-w-5xl mx-auto mt-10 lg:mt-16 pb-10 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 p-6 lg:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[3px] bg-[#8B1E2D] rounded-full"></div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>BIOGRAPHY</span>
          </div>
          <div className="space-y-4 text-sm lg:text-base leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
            <p>Hi, I'm <strong className="text-[#8B1E2D]">Sujay Babu Thota</strong>, a Full Stack Developer passionate about crafting modern, scalable, and high-performance digital experiences. I'm currently pursuing a B.Tech in Computer Science and Design at SRKR Engineering College.</p>
            <p>For me, technology is more than just writing code – it's about solving real problems with thoughtful design, smart systems, and user-centered thinking. I love transforming ideas into reliable and meaningful products that people enjoy using.</p>
            <p>Whether it's developing AI-powered healthcare tools, intuitive dashboards, or full-stack platforms, I bring creativity, precision, and a product-first mindset to every project.</p>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="mb-32 relative">
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[3px]" style={{ backgroundColor: '#7B1F2A' }} />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>SKILLS</h2>
            </div>
            <div className="flex flex-wrap gap-6 mb-10 text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
              {['FRONTEND', 'BACKEND', 'DATABASE', 'TOOLS & SERVICES', 'MOBILE', 'OTHERS'].map((tab) => (
                <button key={tab} onClick={() => setActiveSkillTab(tab)}
                  className={`pb-2 border-b-2 transition-colors ${activeSkillTab === tab ? 'text-black dark:text-white' : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
                  style={activeSkillTab === tab ? { borderColor: '#7B1F2A' } : {}}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {getFilteredSkills().map((skill, index) => {
                const skillColors = {
                  'JavaScript': { bg: '#F7DF1E', text: '#000', abbr: 'JS' },
                  'Python': { bg: '#3776AB', text: '#FFF', abbr: 'PY' },
                  'TypeScript': { bg: '#3178C6', text: '#FFF', abbr: 'TS' },
                  'Java': { bg: '#007396', text: '#FFF', abbr: 'JV' },
                  'React.js': { bg: '#61DAFB', svg: true },
                  'Next.js': { bg: 'transparent', border: true, abbr: 'N' },
                  'HTML5': { bg: '#E34F26', text: '#FFF', abbr: '5' },
                  'CSS3': { bg: '#1572B6', text: '#FFF', abbr: '3' },
                  'Tailwind': { bg: '#06B6D4', svg: true },
                  'Bootstrap': { bg: '#7952B3', text: '#FFF', abbr: 'BS' },
                  'Material UI': { bg: '#007FFF', text: '#FFF', abbr: 'MU' },
                  'Node.js': { bg: '#339933', text: '#FFF', abbr: 'ND' },
                  'Express.js': { bg: '#000000', text: '#FFF', abbr: 'EX' },
                  'MongoDB': { bg: '#47A248', text: '#FFF', abbr: 'MG' },
                  'MySQL': { bg: '#4479A1', text: '#FFF', abbr: 'MY' },
                  'Firebase': { bg: '#FFCA28', text: '#000', abbr: 'FB' },
                  'Supabase': { bg: '#3ECF8E', text: '#000', abbr: 'SB' },
                  'Git': { bg: '#F05032', text: '#FFF', abbr: 'GT' },
                  'GitHub': { bg: '#181717', text: '#FFF', abbr: 'GH' },
                  'Vercel': { bg: '#000000', text: '#FFF', abbr: 'VC' },
                  'Netlify': { bg: '#00C7B7', text: '#000', abbr: 'NL' },
                  'Figma': { bg: '#F24E1E', text: '#FFF', abbr: 'FG' },
                  'Docker': { bg: '#2496ED', text: '#FFF', abbr: 'DK' },
                  'PHP': { bg: '#777BB4', text: '#FFF', abbr: 'PHP' },
                  'Spring Boot': { bg: '#6DB33F', text: '#FFF', abbr: 'SB' },
                  'React Native': { bg: '#61DAFB', text: '#000', abbr: 'RN' },
                };
                const color = skillColors[skill] || { bg: '#6366F1', text: '#FFF', abbr: skill.substring(0, 2).toUpperCase() };
                return (
                  <div key={index} className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: color.bg, color: color.text, border: color.border ? '2px solid #000' : 'none' }}>
                      {color.svg ? (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                          {skill === 'React.js' && (<><circle cx="12" cy="12" r="2.5" fill="currentColor" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(120 12 12)" /></>)}
                          {skill === 'Tailwind' && (<><path d="M12.001 4.5c-1.5 0-2.5.5-3.5 1.5M12.001 4.5c1.5 0 2.5.5 3.5 1.5M12.001 4.5v2m0 0c-1.5 0-2.5.5-3.5 1.5m3.5-1.5c1.5 0 2.5.5 3.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M12 7c-3 0-5.5 1.5-7 4 1.5 2.5 4 4 7 4s5.5-1.5 7-4c-1.5-2.5-4-4-7-4z" stroke="currentColor" strokeWidth="1.5" /></>)}
                        </svg>
                      ) : color.border ? (<span className="text-lg font-bold">{color.abbr}</span>) : (<span className="text-sm font-bold">{color.abbr}</span>)}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-20 relative" id="education" ref={educationRef}>
        <div className="relative z-10">
          <h2 className="text-center text-5xl font-bold text-black dark:text-white mb-16 transition-colors">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transition-colors">
                <div className="w-full bg-purple-500 transition-all duration-200 ease-out" style={{ height: `${educationProgress}%` }}></div>
              </div>
              <div className="space-y-12">
                {mockData.about.education.map((edu, index) => {
                  const threshold = index === 0 ? 10 : 50;
                  return (
                    <div key={index} className="flex gap-8">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 shadow-lg relative z-10 transition-all duration-300 ${educationProgress > threshold ? 'bg-purple-500 scale-100' : 'bg-gray-300 dark:bg-gray-600 scale-75'}`}></div>
                      <div className={`flex-1 transition-all duration-500 ${educationProgress > threshold ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-2 transition-colors">{edu.degree}</h3>
                        <div className="text-base text-gray-600 dark:text-gray-400 mb-4 transition-colors">{edu.period} | {edu.institution}, {edu.location}</div>
                        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">{edu.details}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Approach Section */}
      <section className="w-full py-16 relative">
        <div className="relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring", stiffness: 100 }} className="relative inline-block">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-black via-purple-600 to-cyan-600 dark:from-white dark:via-purple-400 dark:to-cyan-400 mb-6 relative">
                MY APPROACH
                <motion.div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-xl sm:blur-2xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="relative">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
                From Concept to Deployment:{" "}
                <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent font-semibold">My Three-Phase Development Process</span>
              </p>
            </motion.div>
          </div>
          <div className="my-16 flex flex-col lg:flex-row items-center justify-center w-full gap-8">
            <Card title="Planning & Strategy" icon={<AceternityIcon order="Phase 1" />} des="I begin by deeply understanding project requirements and user needs." index={0} activeCardIndex={activeCardIndex} setActiveCardIndex={setActiveCardIndex}>
              <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-yellow-500 rounded-3xl overflow-hidden" />
            </Card>
            <Card title="Development & Iteration" icon={<AceternityIcon order="Phase 2" />} des="With designs approved, I dive into coding with best practices and clean architecture." index={1} activeCardIndex={activeCardIndex} setActiveCardIndex={setActiveCardIndex}>
              <CanvasRevealEffect animationSpeed={3} containerClassName="bg-[#f13c77] rounded-3xl overflow-hidden" colors={[[255, 166, 158], [221, 255, 247]]} dotSize={2} />
            </Card>
            <Card title="Deployment & Launch" icon={<AceternityIcon order="Phase 3" />} des="The final phase focuses on optimization and deployment." index={2} activeCardIndex={activeCardIndex} setActiveCardIndex={setActiveCardIndex}>
              <CanvasRevealEffect animationSpeed={3} containerClassName="bg-[#97a87a] rounded-3xl overflow-hidden" colors={[[125, 211, 252]]} />
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative overflow-hidden">
        <div className="relative z-10">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                My Achievements
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
                Curious about what I've accomplished? Let my track record speak for itself.
              </motion.p>
            </div>
            <div className="mb-16 border-t border-dashed border-gray-300 dark:border-gray-700" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.about.achievements.map((achievement, index) => (
                <motion.div key={achievement.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.15 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }} className={`rounded-3xl p-8 transition-all duration-300 ${achievement.bgColor}`}>
                  <div className="mb-6 w-full aspect-video relative rounded-2xl overflow-hidden">
                    <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed transition-colors">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;