import React from 'react';
import { mockData } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen pt-0 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Passion Fuels<br />Purpose!
          </h1>
        </div>

        {/* Biography and Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {/* Left - Biography */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400">BIOGRAPHY</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              Hi, I'm <strong className="text-white">CodeBucks</strong>, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field, I am always looking for new and innovative ways to bring my clients' visions to life.
            </p>
            <p className="text-sm leading-relaxed text-gray-300">
              I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
            </p>
            <p className="text-sm leading-relaxed text-gray-300">
              Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </div>

          {/* Center - Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="relative border-4 border-white rounded-3xl p-2 bg-gray-800">
                <div className="w-64 h-80 rounded-2xl overflow-hidden bg-gray-700">
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
              <div className="text-6xl font-bold text-white">40+</div>
              <div className="text-sm font-medium text-gray-400 mt-1">Satisfied Clients</div>
            </div>
            
            <div className="text-right">
              <div className="text-6xl font-bold text-white">50+</div>
              <div className="text-sm font-medium text-gray-400 mt-1">Projects Completed</div>
            </div>
            
            <div className="text-right">
              <div className="text-6xl font-bold text-white">4+</div>
              <div className="text-sm font-medium text-gray-400 mt-1">Years Of Experience</div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-32">
          <h2 className="text-center text-5xl font-bold text-white mb-16">Skills</h2>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl aspect-square">
              {/* Concentric circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full border border-gray-700 rounded-full"></div>
                <div className="absolute w-[85%] h-[85%] border border-gray-700 rounded-full"></div>
                <div className="absolute w-[70%] h-[70%] border border-gray-700 rounded-full"></div>
                <div className="absolute w-[55%] h-[55%] border border-gray-700 rounded-full"></div>
                <div className="absolute w-[40%] h-[40%] border border-gray-700 rounded-full"></div>
                
                {/* Center badge */}
                <div className="relative z-10 bg-white rounded-full px-8 py-4">
                  <span className="text-sm font-bold text-gray-900">Frontend Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-32">
          <h2 className="text-center text-5xl font-bold text-white mb-16">Experience</h2>
          <div className="space-y-8 max-w-3xl">
            {mockData.about.experience?.map((exp, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-3 h-3 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.position} <span className="text-cyan-400">@{exp.company}</span>
                  </h3>
                  <div className="text-sm text-gray-400 mb-3">{exp.duration} | {exp.location}</div>
                  <p className="text-sm text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <h2 className="text-center text-5xl font-bold text-white mb-16">Education</h2>
          <div className="space-y-8 max-w-3xl">
            {mockData.about.education?.map((edu, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-3 h-3 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <div className="text-sm text-gray-400 mb-3">{edu.institution} | {edu.duration}</div>
                  <p className="text-sm text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
