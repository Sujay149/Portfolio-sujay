import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            2025 © All Rights Reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            Built with <Heart size={16} fill="#E60023" stroke="#E60023" /> by <a href="https://github.com" className="underline hover:text-black transition-colors">CodeBucks</a>
          </p>
          <Link to="/contact" className="text-gray-600 text-sm underline hover:text-black transition-colors">
            Say Hello
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
