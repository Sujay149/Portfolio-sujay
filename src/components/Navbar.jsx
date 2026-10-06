import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Moon, Sun, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { mockData } from '../mock';
import { useTheme } from '../contexts/ThemeContext';

const springConfig = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

const Navbar = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();

  const isActive = (path) => location.pathname === path;

  const tabs = [
    { id: '/', label: 'Home', icon: Home },
    { id: '/about', label: 'About', icon: User },
    { id: '/projects', label: 'Projects', icon: FolderOpen },
    { id: '/experience', label: 'Experience', icon: Briefcase },
    { id: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Header */}
     {/* Desktop Header - Notch Style */}
<nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center pointer-events-none">
  <div className="relative pointer-events-auto [--nav-bg:#0A0A0A] dark:[--nav-bg:#141414]">
    {/* Concave flares on the top-left and top-right */}
    <div
      aria-hidden
      className="absolute top-0 right-full w-5 h-5"
      style={{ background: 'radial-gradient(circle at 0 100%, transparent 20px, var(--nav-bg) 20px)' }}
    />
    <div
      aria-hidden
      className="absolute top-0 left-full w-5 h-5"
      style={{ background: 'radial-gradient(circle at 100% 100%, transparent 20px, var(--nav-bg) 20px)' }}
    />

    {/* Pill */}
    <div className="flex items-center gap-8 lg:gap-12 bg-[var(--nav-bg)] rounded-b-[28px] px-4 lg:px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
      {/* Logo + name */}
    {/* Logo */}
<Link to="/" className="flex items-center shrink-0">
  <img
    src="/middlelight.png"
    alt="Logo"
    className="h-10 w-auto object-contain hover:scale-110 transition-transform"
  />
</Link>

      {/* Links */}
      <div className="flex items-center gap-6 lg:gap-7">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            to={tab.id}
            className={`text-[15px] font-medium transition-colors hover:text-white ${
              isActive(tab.id) ? 'text-white' : 'text-gray-400'
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {/* Socials + theme toggle */}
      <div className="flex items-center gap-3 shrink-0">
        <a
          href={mockData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-70 transition-opacity"
          aria-label="Github"
        >
          <Github size={20} />
        </a>
        <a
          href={mockData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:opacity-70 transition-opacity"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} fill="currentColor" />
        </a>
        <button
          onClick={toggleDarkMode}
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white text-black hover:bg-gray-200 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </div>
  </div>
</nav>

      {/* Mobile Header */}
      {/* Mobile Header - Notch Style */}
<nav className="md:hidden fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
  <div className="relative pointer-events-auto [--nav-bg:#0A0A0A] dark:[--nav-bg:#141414]">
    {/* Concave flares on the top-left and top-right */}
    <div
      aria-hidden
      className="absolute top-0 right-full w-4 h-4"
      style={{ background: 'radial-gradient(circle at 0 100%, transparent 16px, var(--nav-bg) 16px)' }}
    />
    <div
      aria-hidden
      className="absolute top-0 left-full w-4 h-4"
      style={{ background: 'radial-gradient(circle at 100% 100%, transparent 16px, var(--nav-bg) 16px)' }}
    />

    {/* Pill */}
    <div className="flex items-center gap-5 bg-[var(--nav-bg)] rounded-b-[24px] px-5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
      {/* Socials */}
      <div className="flex items-center gap-3">
        <a
          href={mockData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-70 transition-opacity"
          aria-label="Github"
        >
          <Github size={20} />
        </a>
        <a
          href={mockData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:opacity-70 transition-opacity"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} fill="currentColor" />
        </a>
      </div>

      {/* Logo */}
      <Link to="/" className="flex items-center shrink-0">
        <img
          src="/middlelight.png"
          alt="Logo"
          className="h-8 w-auto object-contain"
        />
      </Link>

      {/* Theme toggle */}
      <button
        onClick={toggleDarkMode}
        className="h-9 w-9 flex items-center justify-center rounded-xl bg-white text-black hover:bg-gray-200 transition"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  </div>
</nav>

      {/* Mobile Bottom Navigation - Fluid Morphing Style */}
      <nav
        className="md:hidden fixed z-50 w-full flex justify-center items-center"
        style={{
          bottom: 24,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#0A0A0A',
            padding: 8,
            borderRadius: 9999,
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            pointerEvents: 'auto',
          }}
        >
        {tabs.map((tab) => {
          const active = isActive(tab.id);
          const Icon = tab.icon;

          return (
            <Link key={tab.id} to={tab.id}>
              <motion.div
                layout
                transition={springConfig}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: active ? 8 : 0,
                  height: 48,
                  padding: active ? '0 20px' : '0 12px',
                  borderRadius: 9999,
                  border: 'none',
                  background: active ? '#1A1A1A' : 'transparent',
                  color: '#fff',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
              <motion.div
                layout
                transition={springConfig}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Icon size={22} strokeWidth={1.5} />
              </motion.div>

              {active && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    color: '#fff',
                  }}
                >
                  {tab.label}
                </motion.span>
              )}
            </motion.div>
            </Link>
          );
        })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;