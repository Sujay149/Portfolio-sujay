// Mock data for the portfolio website

export const mockData = {
  profile: {
    name: "Sujay Babu Thota",
    initials: "Sujay",
    title: "Full-Stack Developer",
    tagline: "Turning Vision Into Reality With Code And Design.",
    description: "Highly driven Full Stack Developer with hands-on experience building production-ready web applications and AI-powered systems. Skilled in modern frameworks, scalable architectures and real-world deployments with a strong focus on problem-solving, rapid learning, and product-oriented development.",
    hireMeText: "Hire Me | Full Stack Developer | AI Enthusiast",
    email: "sujayss149@gmail.com",
    resume: "Sujay_Babu_Thota_Resume.pdf",
    phone: "+91-9346491221"
  },
  
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com/Sujay149/",
    linkedin: "https://www.linkedin.com/in/sujaybabu",
    pinterest: "https://pinterest.com",
    dribbble: "https://dribbble.com"
  },

  about: {
    bio: "Hi, I'm Sujay Babu Thota, a Full Stack Developer with hands-on experience building production-ready web applications and AI-powered systems. Currently pursuing B.Tech in Computer Science and Design at SRKR Engineering College, I specialize in modern frameworks, scalable architectures, and real-world deployments. I'm passionate about problem-solving, rapid learning, and product-oriented development. Whether it's building AI-powered healthcare assistants or full-stack e-commerce platforms, I bring my commitment to excellence and innovation to every project I work on.",
    skills: [
      "JavaScript", "TypeScript", "Python", "React.js", "Next.js",
      "Node.js", "Express.js", "MongoDB", "MySQL", "Firebase", "Supabase",
      "TailwindCSS", "HTML5", "CSS3", "Git", "Figma", "AI/ML"
    ],
    stats: [
      { value: "10+", label: "Projects Completed" },
      { value: "4+", label: "Client Projects" },
      { value: "1+", label: "Years Experience" }
    ],
    experience: [
       {
        id: 1,
        title: "Fullstack Developer  Intern ",
        company: "Brandverse Technologies India Pvt. Ltd.",
        period: "Sep 2025 – Oct 2025",
        description: "E-commerce application with payments, order analytics and delivery workflow.",
        technologies: ["React.js", "Node.js", "Supabase", "Tailwind", "Razorpay"],
        achievements: [
          "Integrated JWT authentication, search features, OTP verification, and Razorpay payment processing.",
          "Built an admin dashboard with order analytics, delivery tracking, and status management.",
          "Designed geo-based delivery workflow improving assignment accuracy and turnaround efficiency."
        ],
        links: {
          live: "https://brandversetech.com/",
          github: "https://github.com/Sujay149"
        }
      },
      {
        id: 2,
        title: "Fullstack Developer and Prompt Engineering Intern ",
        company: "Asvix",
        period: "Jun 2025 – Sep 2025",
        description: "AI-based healthcare assistant with medication guidance, reminders, and chat-based support.",
        technologies: ["TypeScript", "Next.js", "Tailwind", "Firebase", "AI/LLM"],
        achievements: [
          "AI-powered system development for prescription interpretation, symptom triage, and safe healthcare guidance.",
          "Skilled in modern web frameworks using TypeScript, Next.js, Tailwind CSS, and Firebase for scalable architectures.",
          "Real-world deployment implementing authentication, role-based access, real-time chat, and reminder systems.",
          "Strong foundation in applied LLM/NLP for medical-assistant conversations, knowledge retrieval, and responses."
        ],
        links: {
          live: "https://medibot-ai.com",
          github: "https://github.com/Sujay149"
        }
      },
     
      {
        id: 3,
        title: "Freelance Web Developer — WonderKids",
        company: "Freelance Project",
        period: "Oct 2024 – Dec 2024",
        description: "School platform enabling student–teacher information access and workflow management.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        achievements: [
          "Built and deployed a school management platform actively used by teachers and students.",
          "Designed interactive dashboards and improved UI/UX for streamlined administrative workflows.",
          "Implemented secure authentication and role-based access control for data privacy and compliance."
        ],
        links: {
          live: "https://wonderkids.great-site.net/",
          github: "https://github.com/Sujay149"
        }
      }
    ],
    education: [
      {
        degree: "Bachelor of Technology in Computer Science and Design",
        institution: "SRKR Engineering College",
        location: "Bhimavaram",
        period: "2023 – 2026",
        details: "CGPA: 8.24"
      },
      {
        degree: "Diploma in Computer Science",
        institution: "Smt.B.Seetha Polytechnic",
        location: "Bhimavaram",
        period: "2020 – 2023",
        details: "Percentage: 78.31"
      }
    ]
  },

projects: [
  {
    id: 1,
    title: "NeuroHub – Neurodiversity Support Platform",
    category: "Web Application",
    description:
      "Support system for ADHD, autism, and dyslexia-based learning. Designed cognitive-friendly UI to reduce overload, created personalized learning and focus modules, and enabled secure real-time content flow using Firebase.",
    image:
      "/projects/nuerohub.png",
    tags: ["Next.js", "Tailwind", "Firebase"],
    badge: null,
    github: "https://github.com/Sujay149/NUEROHUB",
    demo: "https://nuerohub.vercel.app/",
  },
  {
    id: 2,
    title: "Rofero – Full Stack E-Commerce Platform",
    category: "E-Commerce Platform",
    description:
      "Complete end-to-end e-commerce application with authentication, cart, orders, wishlist, email notifications, and Razorpay payments. Includes secure role-based access, automated email reminders with Nodemailer, and optimized responsive UI.",
    image:
      "/projects/rofero.png",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Razorpay",
      "Nodemailer",
    ],
    badge: null,
    github: "https://github.com/Sujay149/Rofero",
    demo: "https://rofero.vercel.app",
  },
  {
    id: 3,
    title: "CraveFinder",
    category: "Food Discovery App",
    description:
      "A modern food discovery app to explore restaurants, cafes, and local eateries with a clean UI and seamless browsing experience.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop&q=80",
    tags: ["TypeScript", "React", "Node.js"],
    badge: null,
    github: "https://github.com/Sujay149",
    demo: "https://crave-finder.vercel.app/",
  },
  {
    id: 4,
    title: "ReDestiny",
    category: "Interactive Design",
    description:
      "A creative project showcasing interactive design and engaging user experiences with a focus on UI aesthetics and responsive layouts.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop&q=80",
    tags: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI", "MongoDB", "Node.js"],
    badge: null,
    github: "https://github.com/Sujay149",
    demo: "#",
  },
  {
    id: 5,
    title: "Research & Startup Management System",
    category: "Enterprise Platform",
    description:
      "A comprehensive platform for managing research, IPR, innovation projects, and startups in Gujarat, developed for Smart India Hackathon.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    tags: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI", "MongoDB", "Node.js"],
    badge: "Hackathon",
    github: "https://github.com/Sujay149",
    demo: "https://innovationgujarat.vercel.app/",
  }
]


  
};
