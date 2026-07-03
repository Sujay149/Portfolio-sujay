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

const BackgroundHeading = ({ text }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className="absolute top-0 left-0 right-0 text-center pointer-events-none select-none overflow-hidden"
    style={{ zIndex: 0 }}
    aria-hidden="true"
  >
    <span
      className="font-black uppercase leading-none inline-block"
      style={{
        fontFamily: "'Inter', 'Montserrat', sans-serif",
        fontSize: 'clamp(80px, 12vw, 180px)',
        letterSpacing: '4px',
        color: 'transparent',
        WebkitTextStroke: '1.5px solid #E0E0E0',
        textStroke: '1.5px solid #E0E0E0',
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </span>
  </motion.div>
);

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
    <div className="min-h-screen w-full pt-0 bg-white dark:bg-black transition-colors duration-300">
      {/* === HERO SECTION - Editorial Redesign === */}
      <section className="relative w-full overflow-hidden bg-white dark:bg-black" style={{ height: 'calc(100vh - 100px)' }}>
        {/* Layer 1: PORTFOLIO Outline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute text-center w-full pointer-events-none select-none"
          style={{ top: '140px', left: 0, right: 0, zIndex: 1 }}
          aria-hidden="true"
        >
          <span
            className="font-black uppercase leading-none inline-block"
            style={{
              fontFamily: "'Inter', 'Montserrat', sans-serif",
              fontSize: 'clamp(100px, 16vw, 240px)',
              letterSpacing: '6px',
              color: 'transparent',
              WebkitTextStroke: '1.5px solid #D0D0D0',
              textStroke: '1.5px solid #D0D0D0',
              whiteSpace: 'nowrap',
            }}
          >
            PORTFOLIO
          </span>
        </motion.div>

        {/* Layer 2: SUJAY Watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="absolute pointer-events-none select-none"
          style={{
            bottom: '60px',
            left: '5%',
            zIndex: 2,
            transform: 'rotate(-8deg)',
            transformOrigin: 'bottom left',
          }}
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: "'Dancing Script', 'Great Vibes', cursive",
              fontSize: 'clamp(150px, 28vw, 380px)',
              color: '#E8E8E8',
              opacity: 0.5,
              whiteSpace: 'nowrap',
              lineHeight: '0.9',
              display: 'block',
            }}
          >
            About Me
          </span>
        </motion.div>

        {/* Layer 3: "My" Script */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="absolute pointer-events-none select-none hidden lg:block"
          style={{
            top: '110px',
            left: '130px',
            zIndex: 3,
            transform: 'rotate(-3deg)',
            transformOrigin: 'bottom left',
          }}
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: "'Permanent Marker', 'Rock Salt', cursive",
              fontSize: '130px',
              color: '#000',
              lineHeight: 1,
            }}
          >
            
          </span>
        </motion.div>

        {/* Layer 4: Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="hidden lg:block absolute inset-0"
          style={{ zIndex: 4, overflow: 'hidden' }}
        >
          <img
            src="about.png"
            alt="Sujay Babu Thota - Full Stack Developer"
            className="w-full h-full object-contain"
            style={{
              objectPosition: 'center',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0) 100%)',
            }}
          />
        </motion.div>

        {/* Layer 5: Content */}
        <div
          className="absolute h-full hidden lg:block"
          style={{ left: 0, top: 0, width: '45%', paddingLeft: '130px', zIndex: 5 }}
        >
          <div className="h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            >
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: '52px',
                  lineHeight: '1.05',
                  color: '#000',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: 0,
                }}
              >
                SUJAY<br />THOTA
              </h1>

              <div
                style={{
                  width: '45px',
                  height: '4px',
                  backgroundColor: '#7B1F2A',
                  marginTop: '20px',
                  borderRadius: '2px',
                }}
              />

              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '18px',
                  color: '#7B1F2A',
                  marginTop: '28px',
                }}
              >
                Full Stack Developer
              </div>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#333',
                  maxWidth: '320px',
                  marginTop: '12px',
                }}
              >
                building scalable, efficient and user-friendly web & mobile applications.
              </p>

              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#555',
                  marginTop: '36px',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ paddingRight: '12px' }}>React</span>|
                <span style={{ padding: '0 12px' }}>Next.js</span>|
                <span style={{ padding: '0 12px' }}>Spring Boot</span>|
                <span style={{ padding: '0 12px' }}>React Native</span>|
                <span style={{ padding: '0 12px' }}>MySQL</span>|
                <span style={{ paddingLeft: '12px' }}>Docker</span>
              </div>

              <Link to="/contact">
                <motion.div
                  whileHover={{
                    y: -2,
                    boxShadow: '0 4px 12px rgba(123,31,42,0.25)',
                    backgroundColor: '#5A1620',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: '#7B1F2A',
                    color: '#FFF',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    padding: '14px 36px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    marginTop: '36px',
                  }}
                >
                  HIRE ME
                  <span style={{ fontSize: '16px', lineHeight: 1 }}>→</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden relative z-10 h-full flex flex-col justify-center">
          <img
            src="about.png"
            alt="Sujay Babu Thota"
            className="w-full h-full object-contain"
            style={{
              objectPosition: 'center',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0) 100%)',
            }}
          />
          <div className="text-center px-2">
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: '28px',
                lineHeight: '1.05',
                color: '#000',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                margin: 0,
                textAlign: 'center',
              }}
            >
              SUJAY<br />THOTA
            </h1>
            <div
              style={{
                width: '40px',
                height: '3px',
                backgroundColor: '#7B1F2A',
                marginTop: '12px',
                borderRadius: '1px',
              }}
            />
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '14px',
                color: '#7B1F2A',
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              Full Stack Developer
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '13px',
                lineHeight: '1.5',
                color: '#333',
                marginTop: '10px',
                textAlign: 'center',
                maxWidth: '280px',
              }}
            >
              building scalable, efficient and user-friendly web & mobile applications.
            </p>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '10px',
                color: '#666',
                marginTop: '20px',
                textAlign: 'center',
              }}
            >
              React | Next.js | Spring Boot | React Native | MySQL | Docker
            </div>
            <Link to="/contact">
              <motion.div
                whileHover={{ backgroundColor: '#5A1620' }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#7B1F2A',
                  color: '#FFF',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  padding: '12px 28px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  marginTop: '24px',
                }}
              >
                HIRE ME
                <span style={{ fontSize: '14px', lineHeight: 1 }}>→</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* === STATS + BIOGRAPHY SECTION === */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-28 relative">
        <BackgroundHeading text="STATS" />
        <div className="relative z-10">
        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-6xl lg:text-7xl font-black text-black dark:text-white" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-2px' }}>10+</div>
            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-2 tracking-[0.2em]" style={{ fontFamily: "'Inter', sans-serif" }}>PROJECTS</div>
          </motion.div>

          <div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-gray-700"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-6xl lg:text-7xl font-black text-black dark:text-white" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-2px' }}>3+</div>
            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-2 tracking-[0.2em]" style={{ fontFamily: "'Inter', sans-serif" }}>CLIENTS</div>
          </motion.div>

          <div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-gray-700"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-6xl lg:text-7xl font-black text-black dark:text-white" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-2px' }}>1+</div>
            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-2 tracking-[0.2em]" style={{ fontFamily: "'Inter', sans-serif" }}>YEARS EXP</div>
          </motion.div>
        </div>

        {/* Biography Section - Editorial Two Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-24 lg:mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Bio Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[3px]" style={{ backgroundColor: '#7B1F2A' }} />
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                  BIOGRAPHY
                </h2>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-black dark:text-white leading-[1.1] mb-8" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-1px' }}>
                Building digital solutions<br />
                that make an <span style={{ color: '#7B1F2A' }}>impact.</span>
              </h3>

              <div className="space-y-5 text-[15px] lg:text-base leading-[1.7] text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                <p>
                  Hi, I'm <strong style={{ color: '#7B1F2A', fontWeight: 600 }}>Sujay Babu Thota</strong>, a Full Stack Developer passionate about crafting modern, scalable, and high-performance digital experiences. I'm currently pursuing a B.Tech in Computer Science and Design at SRKR Engineering College, where I focus on building clean, efficient, and production-ready applications.
                </p>

                <p>
                  For me, technology is more than just writing code – it's about solving real problems with thoughtful design, smart systems, and user-centered thinking. I love transforming ideas into reliable and meaningful products that people enjoy using.
                </p>

                <p>
                  Whether it's developing AI-powered healthcare tools, intuitive dashboards, or full-stack platforms, I bring creativity, precision, and a product-first mindset to every project. I'm excited to continue growing and contributing to impactful software that makes a difference.
                </p>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="rounded-[24px] p-8 lg:p-10" style={{ backgroundColor: '#FAFAFA', border: '1px solid #F0E0E0' }}>
              <div className="space-y-8">
                {/* Clean Code */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: '1.5px solid #C47D85' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B1F2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-black dark:text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Clean Code</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                      Writing clean, maintainable, and efficient code that scales.
                    </p>
                  </div>
                </div>

                {/* Problem Solver */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: '1.5px solid #C47D85' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B1F2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                      <path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 4 7l3 3 3-3c2-2 4-4 4-7a7 7 0 0 0-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-black dark:text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Problem Solver</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                      Turning complex problems into simple, smart, and effective solutions.
                    </p>
                  </div>
                </div>

                {/* User Focused */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: '1.5px solid #C47D85' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B1F2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-black dark:text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>User Focused</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                      Building products that provide real value and great user experiences.
                    </p>
                  </div>
                </div>

                {/* Always Learning */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: '1.5px solid #C47D85' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B1F2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-black dark:text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Always Learning</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                      Continuously exploring new technologies and improving every day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Skills Section - Tabbed Interface */}
      <div className="mb-32 relative">
        <BackgroundHeading text="SKILLS" />
        <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-[3px]" style={{ backgroundColor: '#7B1F2A' }} />
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
              SKILLS
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-6 mb-10 text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
            {['FRONTEND', 'BACKEND', 'DATABASE', 'TOOLS & SERVICES', 'MOBILE', 'OTHERS'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSkillTab(tab)}
                className={`pb-2 border-b-2 transition-colors ${
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

          {/* Skills Grid - Filtered by active tab */}
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
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ 
                    backgroundColor: color.bg,
                    color: color.text,
                    border: color.border ? '2px solid #000' : 'none'
                  }}>
                    {color.svg ? (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        {skill === 'React.js' && (
                          <>
                            <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
                            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
                            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
                          </>
                        )}
                        {skill === 'Tailwind' && (
                          <>
                            <path d="M12.001 4.5c-1.5 0-2.5.5-3.5 1.5M12.001 4.5c1.5 0 2.5.5 3.5 1.5M12.001 4.5v2m0 0c-1.5 0-2.5.5-3.5 1.5m3.5-1.5c1.5 0 2.5.5 3.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M12 7c-3 0-5.5 1.5-7 4 1.5 2.5 4 4 7 4s5.5-1.5 7-4c-1.5-2.5-4-4-7-4z" stroke="currentColor" strokeWidth="1.5"/>
                          </>
                        )}
                      </svg>
                    ) : color.border ? (
                      <span className="text-lg font-bold">{color.abbr}</span>
                    ) : (
                      <span className="text-sm font-bold">{color.abbr}</span>
                    )}
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
        <BackgroundHeading text="EDUCATION" />
        <div className="relative z-10">
        <h2 className="text-center text-5xl font-bold text-black dark:text-white mb-16 transition-colors">Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transition-colors">
              <div
                className="w-full bg-purple-500 transition-all duration-200 ease-out"
                style={{ height: `${educationProgress}%` }}
              ></div>
            </div>

            <div className="space-y-12">
              {mockData.about.education.map((edu, index) => {
                const threshold = index === 0 ? 10 : 50;
                return (
                  <div key={index} className="flex gap-8">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 shadow-lg relative z-10 transition-all duration-300 ${educationProgress > threshold ? 'bg-purple-500 scale-100' : 'bg-gray-300 dark:bg-gray-600 scale-75'
                      }`}></div>
                    <div className={`flex-1 transition-all duration-500 ${educationProgress > threshold ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                      }`}>
                      <h3 className="text-2xl font-bold text-black dark:text-white mb-2 transition-colors">{edu.degree}</h3>
                      <div className="text-base text-gray-600 dark:text-gray-400 mb-4 transition-colors">{edu.period} | {edu.institution}, {edu.location}</div>
                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                        {edu.details}
                      </p>
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
        <BackgroundHeading text="APPROACH" />
        <div className="relative z-10">
        {/* Revolutionary Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative inline-block"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-black via-purple-600 to-cyan-600 dark:from-white dark:via-purple-400 dark:to-cyan-400 mb-6 relative">
              MY APPROACH
              <motion.div
                className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-xl sm:blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
              From Concept to Deployment:{" "}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent font-semibold">My Three-Phase Development Process</span>
            </p>
          </motion.div>

          {/* Hint for users */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6"
          >
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center flex items-center justify-center gap-2">
              <span className="hidden lg:inline">💡 Hover over cards to reveal details</span>
              <span className="lg:hidden">💡 Scroll through cards to reveal details</span>
            </p>
          </motion.div>
        </motion.div>

        <div className="my-16 flex flex-col lg:flex-row items-center justify-center w-full gap-8">
          <Card
            title="Planning & Strategy"
            icon={<AceternityIcon order="Phase 1" />}
            des="I begin by deeply understanding project requirements and user needs. Using tools like Figma and Canva, I craft detailed wireframes, design systems, and interactive prototypes. This phase ensures a solid foundation with clear objectives, scalable architecture, and an intuitive user experience blueprint."
            index={0}
            activeCardIndex={activeCardIndex}
            setActiveCardIndex={setActiveCardIndex}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-yellow-500 rounded-3xl overflow-hidden"
            />
          </Card>
          <Card
            title="Development & Iteration"
            icon={<AceternityIcon order="Phase 2" />}
            des="With designs approved, I dive into coding with best practices and clean architecture. I maintain comprehensive version control using Git, documenting every significant update with detailed commit messages. Regular progress updates, code reviews, and iterative improvements ensure the project stays on track and meets quality standards."
            index={1}
            activeCardIndex={activeCardIndex}
            setActiveCardIndex={setActiveCardIndex}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-[#f13c77] rounded-3xl overflow-hidden"
              colors={[
                [255, 166, 158],
                [221, 255, 247],
              ]}
              dotSize={2}
            />
          </Card>
          <Card
            title="Deployment & Launch"
            icon={<AceternityIcon order="Phase 3" />}
            des="The final phase focuses on optimization and deployment. I build production-ready versions with performance tuning, SEO optimization, and comprehensive testing. Leveraging platforms like Vercel, Netlify, or AWS, I ensure seamless deployment with CI/CD pipelines, monitoring, and post-launch support for a successful product release."
            index={2}
            activeCardIndex={activeCardIndex}
            setActiveCardIndex={setActiveCardIndex}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-[#97a87a] rounded-3xl overflow-hidden"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative overflow-hidden">
        <BackgroundHeading text="AWARDS" />
        <div className="relative z-10">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors"
            >
              My Achievements
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 text-lg transition-colors"
            >
              Curious about what I've accomplished? Let my track record speak for itself.
            </motion.p>
          </div>

          {/* Dashed separator */}
          <div className="mb-16 border-t border-dashed border-gray-300 dark:border-gray-700" />

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.about.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-3xl p-8 transition-all duration-300 ${achievement.bgColor}`}
              >
                {/* Image Container */}
                <div className="mb-6 w-full aspect-video relative rounded-2xl overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed transition-colors">
                  {achievement.description}
                </p>
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