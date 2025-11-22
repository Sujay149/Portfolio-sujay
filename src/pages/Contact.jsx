import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { mockData } from '../mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-0 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 pt-[50px]">
            <h1 className="text-5xl lg:text-6xl font-bold text-black dark:text-white transition-colors">Get In Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Have a project in mind? Let's work together to create something amazing.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex justify-center">
            <a 
              href={`mailto:${mockData.profile.email}`}
              className="flex items-center gap-3 text-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Mail size={24} />
              {mockData.profile.email}
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800 text-black dark:text-white"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800 text-black dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all resize-none bg-white dark:bg-gray-800 text-black dark:text-white"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
