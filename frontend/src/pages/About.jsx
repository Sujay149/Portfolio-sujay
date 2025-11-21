import React from 'react';
import { mockData } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-7xl font-bold">
            Passion Fuels Purpose!
          </h1>
        </div>

        {/* Biography and Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Left - Biography */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-lg font-bold uppercase tracking-wider">BIOGRAPHY</h2>
            <p className="text-base leading-relaxed">
              Hi, I'm <strong>CodeBucks</strong>, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.
            </p>
            <p className="text-base leading-relaxed">
              I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
            </p>
            <p className="text-base leading-relaxed">
              Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </div>

          {/* Right - Profile Image with Stats */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Profile Image with Border Frame */}
              <div className="relative border-2 border-black rounded-2xl p-4 bg-white">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Stats - Positioned absolutely */}
              <div className="absolute -right-4 top-12 bg-white border-2 border-black rounded-2xl px-8 py-6 text-center">
                <div className="text-5xl font-bold">27+</div>
                <div className="text-sm font-medium mt-2">Satisfied Clients</div>
              </div>
              
              <div className="absolute -right-4 top-1/2 bg-white border-2 border-black rounded-2xl px-8 py-6 text-center">
                <div className="text-5xl font-bold">34+</div>
                <div className="text-sm font-medium mt-2">Projects Completed</div>
              </div>
              
              <div className="absolute -right-4 bottom-12 bg-white border-2 border-black rounded-2xl px-8 py-6 text-center">
                <div className="text-5xl font-bold">4+</div>
                <div className="text-sm font-medium mt-2">Years Of Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-32 space-y-8">
          <h2 className="text-center text-4xl lg:text-5xl font-bold mb-12">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {mockData.about.skills.map((skill, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full border-4 border-black flex items-center justify-center mb-3">
                  <span className="text-xl font-bold">{skill.substring(0, 2)}</span>
                </div>
                <div className="text-sm font-medium">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
