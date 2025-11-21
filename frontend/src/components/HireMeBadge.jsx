import React from 'react';
import './HireMeBadge.css';

const HireMeBadge = () => {
  return (
    <a href="mailto:sujayss149@gmail.com" className="hire-me-badge">
      <div className="badge-circle">
        <svg viewBox="0 0 200 200" className="badge-text">
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
          <text className="badge-rotating-text">
            <textPath href="#circlePath" startOffset="0">
              Web Developer • UI/UX Designer • Web Developer • UI/UX Designer •
            </textPath>
          </text>
        </svg>
        <div className="badge-center">
          <span className="badge-hire-text">Hire Me</span>
        </div>
      </div>
    </a>
  );
};

export default HireMeBadge;
