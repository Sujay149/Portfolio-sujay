import React, { useEffect, useRef, useState } from 'react';
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

const Card = ({ title, icon, children, des }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] dark:border-white/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem] rounded-3xl bg-white dark:bg-black"
    >
      <div className="absolute h-10 w-10 top-3 left-3">{icon}</div>
      <AnimatePresence>
        {hovered && (
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
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="text-black dark:text-white text-2xl md:text-3xl font-bold px-4">{title}</h2>
        </div>
        <p className="text-base md:text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center px-6 leading-relaxed font-light">
          {des}
        </p>
      </div>
    </div>
  );
};

const AnimatePresence = ({ children }) => {
  return <>{children}</>;
};

const About = () => {
  const [educationProgress, setEducationProgress] = useState(0);
  const educationRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      // Education section scroll progress
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
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen pt-0 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Main Heading */}
        <div className="text-center mb-20 pt-[50px]">
          <h1 className="text-7xl lg:text-8xl font-black text-black dark:text-white leading-[1.02] tracking-tight transition-colors">
            Passion Fuels<br />Purpose!
          </h1>
        </div>

        {/* Biography and Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {/* Left - Biography */}
          <div className="lg:col-span-1 space-y-4">
  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 transition-colors">
    BIOGRAPHY
  </h2>

  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 transition-colors">
    Hi, I'm <strong className="text-black dark:text-white">Sujay Babu Thota</strong>, a Full Stack Developer passionate about crafting modern, scalable, and high-performance digital experiences. I’m currently pursuing a B.Tech in Computer Science and Design at SRKR Engineering College, where I focus on building clean, efficient, and production-ready applications.
  </p>

  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 transition-colors">
    For me, technology is more than just writing code — it’s about solving real problems with thoughtful design, smart systems, and user-centered thinking. I love transforming ideas into reliable and meaningful products that people enjoy using.
  </p>

  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 transition-colors">
    Whether it's developing AI-powered healthcare tools, intuitive dashboards, or full-stack platforms, I bring creativity, precision, and a product-first mindset to every project. I'm excited to continue growing and contributing to impactful software that makes a difference.
  </p>
</div>
  {/* Center - Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="relative border-6 border-black dark:border-white rounded-3xl p-4 bg-white dark:bg-gray-800 shadow-lg transition-colors">
                <div className="w-72 h-[420px] rounded-2xl overflow-hidden bg-gray-100">
                  <img 
                    src="sujay.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="lg:col-span-1 flex flex-col justify-center space-y-8">
            <div className="text-right">
              <div className="text-7xl lg:text-8xl font-black text-black dark:text-white transition-colors">10+</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 transition-colors">Projects Completed</div>
            </div>
            
            <div className="text-right">
              <div className="text-7xl lg:text-8xl font-black text-black dark:text-white transition-colors">3+</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 transition-colors">Client Projects</div>
            </div>
            
            <div className="text-right">
              <div className="text-7xl lg:text-8xl font-black text-black dark:text-white transition-colors">1+</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 transition-colors">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-32">
          <h2 className="text-center text-5xl font-bold text-black dark:text-white mb-16 transition-colors">Skills</h2>
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Languages */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-black dark:text-white transition-colors">Languages</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-500 to-transparent dark:from-purple-400"></div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'Python', 'PHP', 'TypeScript', 'Java'].map((skill) => (
                  <span key={skill} className="px-5 py-2.5 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full text-sm font-semibold text-black dark:text-white transition-all hover:scale-105 hover:shadow-lg hover:bg-purple-50 dark:hover:bg-purple-900/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-black dark:text-white transition-colors">Frontend</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500 to-transparent dark:from-cyan-400"></div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'Material UI'].map((skill) => (
                  <span key={skill} className="px-5 py-2.5 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full text-sm font-semibold text-black dark:text-white transition-all hover:scale-105 hover:shadow-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend/DB */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-black dark:text-white transition-colors">Backend/DB</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-500 to-transparent dark:from-emerald-400"></div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express.js', 'PHP', 'MongoDB', 'MySQL', 'Firebase', 'Supabase'].map((skill) => (
                  <span key={skill} className="px-5 py-2.5 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full text-sm font-semibold text-black dark:text-white transition-all hover:scale-105 hover:shadow-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-black dark:text-white transition-colors">Tools</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-pink-500 to-transparent dark:from-pink-400"></div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Git', 'GitHub', 'Vercel', 'Netlify', 'Render', 'Postman', 'Figma', 'CI/CD'].map((skill) => (
                  <span key={skill} className="px-5 py-2.5 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full text-sm font-semibold text-black dark:text-white transition-all hover:scale-105 hover:shadow-lg hover:bg-pink-50 dark:hover:bg-pink-900/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI/Automation */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-black dark:text-white transition-colors">AI/Automation</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-orange-500 to-transparent dark:from-orange-400"></div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Machine Learning', 'Prompt Engineering', 'N8N', 'AI APIs'].map((skill) => (
                  <span key={skill} className="px-5 py-2.5 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full text-sm font-semibold text-black dark:text-white transition-all hover:scale-105 hover:shadow-lg hover:bg-orange-50 dark:hover:bg-orange-900/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20" id="education" ref={educationRef}>
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
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 shadow-lg relative z-10 transition-all duration-300 ${
                        educationProgress > threshold ? 'bg-purple-500 scale-100' : 'bg-gray-300 dark:bg-gray-600 scale-75'
                      }`}></div>
                      <div className={`flex-1 transition-all duration-500 ${
                        educationProgress > threshold ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
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

        {/* My Approach Section */}
        <section className="w-full py-16">
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
          </motion.div>

          <div className="my-16 flex flex-col lg:flex-row items-center justify-center w-full gap-8">
            <Card
              title="Planning & Strategy"
              icon={<AceternityIcon order="Phase 1" />}
              des="I begin by deeply understanding project requirements and user needs. Using tools like Figma and Canva, I craft detailed wireframes, design systems, and interactive prototypes. This phase ensures a solid foundation with clear objectives, scalable architecture, and an intuitive user experience blueprint."
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
              />
            </Card>
            <Card
              title="Development & Iteration"
              icon={<AceternityIcon order="Phase 2" />}
              des="With designs approved, I dive into coding with best practices and clean architecture. I maintain comprehensive version control using Git, documenting every significant update with detailed commit messages. Regular progress updates, code reviews, and iterative improvements ensure the project stays on track and meets quality standards."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
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
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
