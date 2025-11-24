import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="hidden lg:block bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-700 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
            2025 © All Rights Reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2 transition-colors">
            Built with <Heart size={16} fill="#E60023" stroke="#E60023" /> by <a href="https://github.com" className="underline hover:text-black dark:hover:text-white transition-colors">Sujay Babu</a>
          </p>
          <Link to="/contact" className="text-gray-600 dark:text-gray-400 text-sm underline hover:text-black dark:hover:text-white transition-colors">
            Say Hello
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
