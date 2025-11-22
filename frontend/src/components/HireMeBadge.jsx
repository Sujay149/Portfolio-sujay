import React from 'react';
import './HireMeBadge.css';
import { useTheme } from '../contexts/ThemeContext';

const HireMeBadge = () => {
  const { darkMode } = useTheme();
  
  return (
    <a href="mailto:sujayss149@gmail.com" className="hire-me-badge">
      <div className="badge-circle">
        <svg viewBox="0 0 200 200" className="badge-text">
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
          <text className={darkMode ? "badge-rotating-text dark" : "badge-rotating-text"}>
            <textPath href="#circlePath" startOffset="0">
              Fullstack  • n8n • AI • Fullstack  • n8n • AI •
            </textPath>
          </text>
        </svg>
        <div className={darkMode ? "badge-center dark" : "badge-center"}>
          <span className="badge-hire-text">Hire Me</span>
        </div>
      </div>
    </a>
  );
};

export default HireMeBadge;
