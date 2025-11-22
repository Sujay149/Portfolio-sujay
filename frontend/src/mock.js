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
      { value: "3+", label: "Client Projects" },
      { value: "2+", label: "Years Experience" }
    ],
    experience: [
      {
        title: "Freelance Web Developer",
        company: "WonderKids School Platform",
        location: "Remote",
        period: "Oct 2024 – Dec 2024",
        description: "Built and deployed a school management platform actively used by teachers and students. Designed interactive dashboards and improved UI/UX for streamlined administrative workflows. Implemented secure authentication and role-based access control for data privacy and compliance.",
        url: "https://wonderkids.great-site.net/"
      },
      {
        title: "Full Stack Developer at ASVIX",
        company: "MediBot - AI Health Companion",
        location: "Remote",
        period: "Jun 2025 – Sep 2025",
        description: "Developed AI-based healthcare assistant with medication guidance, reminders, and chat-based support. Built using TypeScript, Next.js, Tailwind, Firebase with AI/LLM integration. Implemented authentication, role-based access, real-time chat, and reminder systems.",
        url: "https://medibot-ai.com"
      },
      {
        title: "Full Stack Developer",
        company: "Akepati Mart - E-commerce Platform",
        location: "Remote",
        period: "Sep 2025 – Oct 2025",
        description: "Built full-stack e-commerce application with payments, order analytics and delivery workflow. Integrated JWT authentication, OTP verification, Razorpay payment processing, and admin dashboard with order analytics and delivery tracking.",
        url: "https://akepatimart.com/"
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
    title: "MediBot – AI Powered Health Companion",
    category: "Featured Project",
    description:
      "AI-based healthcare assistant with medication guidance, reminders, and chat-based support. Features prescription interpretation, symptom triage, safe healthcare guidance with real-time chat and intelligent reminder systems powered by advanced LLM technology.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop&q=80",
    tags: ["TypeScript", "Next.js", "Tailwind", "Firebase", "AI/LLM"],
    badge: "AI-Powered",
    github: "https://github.com/Sujay149",
    demo: "https://medibot-ai.com",
  },
  {
    id: 2,
    title: "NeuroHub – Neurodiversity Support Platform",
    category: "Web Application",
    description:
      "Support system for ADHD, autism, and dyslexia-based learning. Designed cognitive-friendly UI to reduce overload, created personalized learning and focus modules, and enabled secure real-time content flow using Firebase.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&q=80",
    tags: ["Next.js", "Tailwind", "Firebase"],
    badge: null,
    github: "https://github.com/Sujay149",
    demo: "https://nuerohub.vercel.app/",
  },
  {
    id: 3,
    title: "Akepati Mart – E-commerce Platform",
    category: "E-Commerce",
    description:
      "Full-stack e-commerce application with integrated payments, order analytics and delivery workflow. Features JWT authentication, OTP verification, Razorpay payment gateway, admin dashboard with comprehensive order analytics and real-time delivery tracking.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop&q=80",
    tags: ["React.js", "Node.js", "Supabase", "Tailwind", "Razorpay"],
    badge: null,
    github: "https://github.com/Sujay149",
    demo: "https://akepatimart.com/",
  },
  {
    id: 4,
    title: "Rofero – Full Stack E-Commerce Platform",
    category: "E-Commerce Platform",
    description:
      "Complete end-to-end e-commerce application with authentication, cart, orders, wishlist, email notifications, and Razorpay payments. Includes secure role-based access, automated email reminders with Nodemailer, and optimized responsive UI.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&q=80",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Razorpay",
      "Nodemailer",
    ],
    badge: null,
    github: "https://github.com/Sujay149",
    demo: "https://rofero.vercel.app",
  },
  {
    id: 5,
    title: "WonderKids School Platform",
    category: "School Management",
    description:
      "Comprehensive school management platform enabling seamless student-teacher information access and workflow management. Features interactive dashboards, secure authentication, and role-based access control ensuring data privacy and regulatory compliance.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=500&fit=crop&q=80",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    badge: null,
    github: "https://github.com/Sujay149",
    demo: "https://wonderkids.great-site.net/",
  },
]


  
};
