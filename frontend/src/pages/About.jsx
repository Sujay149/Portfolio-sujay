import React, { useEffect, useRef, useState } from 'react';
import { mockData } from '../mock';

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
    <div className="min-h-screen pt-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 transition-colors">BIOGRAPHY</h2>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 transition-colors">
              Hi, I'm <strong className="text-black dark:text-white">Sujay Babu Thota</strong>, a Full Stack Developer with hands-on experience building production-ready web applications and AI-powered systems. Currently pursuing B.Tech in Computer Science and Design at SRKR Engineering College, I specialize in modern frameworks and scalable architectures.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 transition-colors">
              I believe that technology is about more than just code – it's about solving real-world problems and creating impactful, user-centered solutions that make a difference in people's lives.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 transition-colors">
              Whether I'm building AI-powered healthcare assistants or full-stack e-commerce platforms, I bring my commitment to excellence, innovation, and product-oriented development to every project. I look forward to bringing my skills and passion to your next project.
            </p>
          </div>

          {/* Center - Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="relative border-6 border-black dark:border-white rounded-3xl p-4 bg-white dark:bg-gray-800 shadow-lg transition-colors">
                <div className="w-72 h-[420px] rounded-2xl overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" 
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
              <div className="text-7xl lg:text-8xl font-black text-black dark:text-white transition-colors">2+</div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 transition-colors">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-32">
          <h2 className="text-center text-5xl font-bold text-black dark:text-white mb-16 transition-colors">Skills</h2>
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl aspect-[4/3]">
              {/* Concentric circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full border border-gray-300 dark:border-gray-600 rounded-full transition-colors"></div>
                <div className="absolute w-[85%] h-[85%] border border-gray-300 dark:border-gray-600 rounded-full transition-colors"></div>
                <div className="absolute w-[70%] h-[70%] border border-gray-300 dark:border-gray-600 rounded-full transition-colors"></div>
                <div className="absolute w-[55%] h-[55%] border border-gray-300 dark:border-gray-600 rounded-full transition-colors"></div>
                <div className="absolute w-[40%] h-[40%] border border-gray-300 dark:border-gray-600 rounded-full transition-colors"></div>
                
                {/* Center badge */}
                <div className="relative z-10 bg-black dark:bg-white rounded-full px-6 py-3 transition-colors">
                  <span className="text-sm font-bold text-white">Web</span>
                </div>
                
                {/* Skill badges positioned around circles */}
                <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 bg-black rounded-full px-6 py-3">
                  <span className="text-sm font-bold text-white">Figma</span>
                </div>
                
                <div className="absolute top-[20%] left-[15%] bg-black rounded-full px-6 py-3">
                  <span className="text-sm font-bold text-white">NextJS</span>
                </div>
                
                <div className="absolute top-[20%] right-[15%] bg-black rounded-full px-6 py-3">
                  <span className="text-sm font-bold text-white">GatsbyJS</span>
                </div>
                
                <div className="absolute top-[35%] left-[25%] bg-black rounded-full px-6 py-3">
                  <span className="text-sm font-bold text-white">CSS</span>
                </div>
                
                <div className="absolute left-[5%] top-1/2 transform -translate-y-1/2 bg-black rounded-full px-6 py-3">
                  <span className="text-sm font-bold text-white">Github</span>
                </div>
                
                <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 bg-black rounded-full px-6 py-3">
                  <span className="text-sm font-bold text-white">Web Design</span>
                </div>
                
                <div className="absolute bottom-[35%] left-[25%] bg-black rounded-full px-6 py-3">
                  <span className="text-sm font-bold text-white">HTML</span>
                </div>
                
                <div className="absolute bottom-[35%] right-[25%] bg-black rounded-full px-6 py-3">
                  <span className="text-sm font-bold text-white">JavaScript</span>
                </div>
                
                <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 bg-black dark:bg-white rounded-full px-6 py-3 transition-colors">
                  <span className="text-sm font-bold text-white dark:text-black transition-colors">ReactJS</span>
                </div>
                
                <div className="absolute bottom-[5%] left-[20%] bg-black dark:bg-white rounded-full px-6 py-3 transition-colors">
                  <span className="text-sm font-bold text-white dark:text-black transition-colors">Firebase</span>
                </div>
                
                <div className="absolute bottom-[5%] right-[20%] bg-black dark:bg-white rounded-full px-6 py-3 transition-colors">
                  <span className="text-sm font-bold text-white dark:text-black transition-colors">Tailwind CSS</span>
                </div>
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
      </div>
    </div>
  );
};

export default About;
