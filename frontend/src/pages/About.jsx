import React, { useEffect, useRef, useState } from 'react';
import { mockData } from '../mock';

const About = () => {
  const [experienceProgress, setExperienceProgress] = useState(0);
  const [educationProgress, setEducationProgress] = useState(0);
  const experienceRef = useRef();
  const educationRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      // Experience section scroll progress
      if (experienceRef.current) {
        const rect = experienceRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          const visibleHeight = Math.min(windowHeight, sectionTop + sectionHeight) - Math.max(0, sectionTop);
          const progress = Math.min(100, Math.max(0, (visibleHeight / sectionHeight) * 150 - 25));
          setExperienceProgress(progress);
        }
      }

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
    <div className="min-h-screen pt-0 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h1 className="text-7xl lg:text-8xl font-black text-black leading-[1.02] tracking-tight">
            Passion Fuels<br />Purpose!
          </h1>
        </div>

        {/* Biography and Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {/* Left - Biography */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-600">BIOGRAPHY</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Hi, I'm <strong className="text-black">CodeBucks</strong>, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field, I am always looking for new and innovative ways to bring my clients' visions to life.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </div>

          {/* Center - Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="relative border-6 border-black rounded-3xl p-4 bg-white shadow-lg">
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
              <div className="text-7xl lg:text-8xl font-black text-black">40+</div>
              <div className="text-sm font-medium text-gray-600 mt-1">Satisfied Clients</div>
            </div>
            
            <div className="text-right">
              <div className="text-7xl lg:text-8xl font-black text-black">50+</div>
              <div className="text-sm font-medium text-gray-600 mt-1">Projects Completed</div>
            </div>
            
            <div className="text-right">
              <div className="text-7xl lg:text-8xl font-black text-black">4+</div>
              <div className="text-sm font-medium text-gray-600 mt-1">Years Of Experience</div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-32">
          <h2 className="text-center text-5xl font-bold text-black mb-16">Skills</h2>
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl aspect-[4/3]">
              {/* Concentric circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full border border-gray-300 rounded-full"></div>
                <div className="absolute w-[85%] h-[85%] border border-gray-300 rounded-full"></div>
                <div className="absolute w-[70%] h-[70%] border border-gray-300 rounded-full"></div>
                <div className="absolute w-[55%] h-[55%] border border-gray-300 rounded-full"></div>
                <div className="absolute w-[40%] h-[40%] border border-gray-300 rounded-full"></div>
                
                {/* Center badge */}
                <div className="relative z-10 bg-black rounded-full px-6 py-3">
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
                
                <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 bg-black rounded-full px-6 py-3">
                  <span className="text-sm font-bold text-white">ReactJS</span>
                </div>
                
                <div className="absolute bottom-[5%] left-[20%] bg-black rounded-full px-6 py-3">
                  <span className="text-sm font-bold text-white">Firebase</span>
                </div>
                
                <div className="absolute bottom-[5%] right-[20%] bg-black rounded-full px-6 py-3">
                  <span className="text-sm font-bold text-white">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-32" id="experience" ref={experienceRef}>
          <h2 className="text-center text-5xl font-bold text-black mb-16">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Animated timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200">
                <div 
                  className="w-full bg-purple-500 transition-all duration-200 ease-out"
                  style={{ height: `${experienceProgress}%` }}
                ></div>
              </div>
              
              <div className="space-y-12">
                {/* Software Engineer @Google */}
                <div className="flex gap-8">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-4 border-white shadow-lg relative z-10 transition-all duration-300 ${
                    experienceProgress > 10 ? 'bg-purple-500 scale-100' : 'bg-gray-300 scale-75'
                  }`}></div>
                  <div className={`flex-1 transition-all duration-500 ${
                    experienceProgress > 10 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      Software Engineer <span className="text-purple-500">@Google</span>
                    </h3>
                    <div className="text-base text-gray-600 mb-4">2022-Present | Mountain View, CA</div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.
                    </p>
                  </div>
                </div>

                {/* Intern @Facebook */}
                <div className="flex gap-8">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-4 border-white shadow-lg relative z-10 transition-all duration-300 ${
                    experienceProgress > 45 ? 'bg-purple-500 scale-100' : 'bg-gray-300 scale-75'
                  }`}></div>
                  <div className={`flex-1 transition-all duration-500 ${
                    experienceProgress > 45 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      Intern <span className="text-purple-500">@Facebook</span>
                    </h3>
                    <div className="text-base text-gray-600 mb-4">Summer 2021 | Menlo Park, CA.</div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.
                    </p>
                  </div>
                </div>

                {/* Software Developer @Amazon */}
                <div className="flex gap-8">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-4 border-white shadow-lg relative z-10 transition-all duration-300 ${
                    experienceProgress > 80 ? 'bg-purple-500 scale-100' : 'bg-gray-300 scale-75'
                  }`}></div>
                  <div className={`flex-1 transition-all duration-500 ${
                    experienceProgress > 80 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      Software Developer <span className="text-purple-500">@Amazon</span>
                    </h3>
                    <div className="text-base text-gray-600 mb-4">2020-2021 | Seattle, WA.</div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Worked on a team responsible for developing Amazon's mobile app, including implementing new features for the product catalog and search functionality, optimizing app performance and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20" id="education" ref={educationRef}>
          <h2 className="text-center text-5xl font-bold text-black mb-16">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Animated timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200">
                <div 
                  className="w-full bg-purple-500 transition-all duration-200 ease-out"
                  style={{ height: `${educationProgress}%` }}
                ></div>
              </div>
              
              <div className="space-y-12">
                {/* Bachelor Of Science */}
                <div className="flex gap-8">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-4 border-white shadow-lg relative z-10 transition-all duration-300 ${
                    educationProgress > 10 ? 'bg-purple-500 scale-100' : 'bg-gray-300 scale-75'
                  }`}></div>
                  <div className={`flex-1 transition-all duration-500 ${
                    educationProgress > 10 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}>
                    <h3 className="text-2xl font-bold text-black mb-2">Bachelor Of Science In Computer Science</h3>
                    <div className="text-base text-gray-600 mb-4">2016-2020 | Massachusetts Institute Of Technology (MIT)</div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.
                    </p>
                  </div>
                </div>

                {/* Master Of Computer Science */}
                <div className="flex gap-8">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-4 border-white shadow-lg relative z-10 transition-all duration-300 ${
                    educationProgress > 45 ? 'bg-purple-500 scale-100' : 'bg-gray-300 scale-75'
                  }`}></div>
                  <div className={`flex-1 transition-all duration-500 ${
                    educationProgress > 45 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}>
                    <h3 className="text-2xl font-bold text-black mb-2">Master Of Computer Science</h3>
                    <div className="text-base text-gray-600 mb-4">2020-2022 | Stanford University</div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.
                    </p>
                  </div>
                </div>

                {/* Online Coursework */}
                <div className="flex gap-8">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-4 border-white shadow-lg relative z-10 transition-all duration-300 ${
                    educationProgress > 80 ? 'bg-purple-500 scale-100' : 'bg-gray-300 scale-75'
                  }`}></div>
                  <div className={`flex-1 transition-all duration-500 ${
                    educationProgress > 80 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}>
                    <h3 className="text-2xl font-bold text-black mb-2">Online Coursework</h3>
                    <div className="text-base text-gray-600 mb-4">2016-2020 | Coursera And EdX</div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
