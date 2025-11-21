// Mock data for the portfolio website

export const mockData = {
  profile: {
    name: "Code Bucks",
    initials: "CB",
    title: "Full-Stack Developer",
    tagline: "Turning Vision Into Reality With Code And Design.",
    description: "As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.",
    hireMeText: "Hire Me | Web Developer | UI/UX Designer",
    email: "codebucks@example.com",
    resume: "#"
  },
  
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    pinterest: "https://pinterest.com",
    dribbble: "https://dribbble.com"
  },

  about: {
    bio: "Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 5+ years of experience in the field, I am always looking for new and innovative ways to bring my clients' visions to life.",
    skills: [
      "React.js", "Next.js", "JavaScript", "TypeScript", "Node.js",
      "Express.js", "MongoDB", "PostgreSQL", "TailwindCSS", "Figma",
      "Git", "Docker", "AWS", "REST APIs", "GraphQL"
    ],
    stats: [
      { value: "50+", label: "Satisfied Clients" },
      { value: "40+", label: "Projects Completed" },
      { value: "5+", label: "Years Of Experience" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Crypto Screener Application",
      description: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
      tags: ["React", "TailwindCSS", "API"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "NFT Collection Website",
      description: "A beautiful and modern NFT collection website built with Next.js and styled-components. Features include smooth animations, responsive design, and interactive UI elements.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      tags: ["Next.js", "Styled Components", "GSAP"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "Fashion Studio Website",
      description: "A stunning fashion studio website with smooth page transitions, elegant animations, and a modern design aesthetic. Built with React and Framer Motion.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea3c8374?w=600&h=400&fit=crop",
      tags: ["React", "Framer Motion", "SCSS"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 4,
      title: "Agency Website",
      description: "A professional agency website showcasing services, portfolio, and team. Features include parallax scrolling, smooth animations, and fully responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Next.js", "TailwindCSS", "TypeScript"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A minimal and clean portfolio website for showcasing creative work. Built with Next.js, featuring dark mode, smooth scrolling, and elegant typography.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["Next.js", "CSS Modules", "React"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration. Built with the MERN stack.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ],

  articles: [
    {
      id: 1,
      title: "Build A Custom Pagination Component In Reactjs From Scratch",
      description: "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to understand pagination logic and improve your React skills.",
      date: "March 22, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "Creating Stunning Loading Screens In React",
      description: "Master the art of creating beautiful loading screens in React. Learn different techniques and best practices for implementing engaging loading states.",
      date: "February 2, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Form Validation In Reactjs: Build A Reusable Custom Hook",
      description: "Build a powerful, reusable form validation custom hook in React. This comprehensive guide covers validation logic, error handling, and best practices.",
      date: "January 5, 2023",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      id: 4,
      title: "Silky Smooth Scrolling In Reactjs",
      description: "Implement smooth scrolling effects in your React applications. Learn about different libraries and techniques to create silky smooth scroll experiences.",
      date: "December 15, 2022",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      id: 5,
      title: "Creating An Efficient Modal Component In React",
      description: "Learn how to create a fully accessible and efficient modal component in React. Covers accessibility, animations, and portal-based implementation.",
      date: "November 28, 2022",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      id: 6,
      title: "Todo List App In React With LocalStorage",
      description: "Build a feature-rich todo list application in React with localStorage persistence. Perfect project for beginners to intermediate developers.",
      date: "October 10, 2022",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
      link: "#"
    }
  ]
};
