import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Clock, Mail, Phone } from 'lucide-react';
import { mockData } from '../mock';

const budgetOptions = [
  { value: "", label: "Select a budget" },
  { value: "5k-10k", label: "₹5,000 - ₹10,000" },
  { value: "10k-25k", label: "₹10,000 - ₹25,000" },
  { value: "25k-50k", label: "₹25,000 - ₹50,000" },
  { value: "50k+", label: "₹50,000+" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipient = "sujayss149@gmail.com";
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nPhone: ${formData.phone || "N/A"}\nBudget: ${formData.budget || "N/A"}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      budget: "",
      message: "",
    });
  };

  return (
    <section className="w-full py-16 md:py-44 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Contact Info */}
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 transition-colors">Book a call</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">Let's Collaborate</h1>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-md transition-colors">
              Reach out and let's explore how we can bring your ideas to life. Whether you're ready to begin or just have questions.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-10">
              <a
                href={`tel:${mockData.profile.phone}`}
                className="text-xl font-semibold text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors block"
              >
                {mockData.profile.phone}
              </a>
              <a
                href={`mailto:${mockData.profile.email}`}
                className="text-2xl font-bold text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors block"
              >
                {mockData.profile.email}
              </a>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 transition-colors">
              Reach out to us via email or give us a call, we are happy to assist you!
            </p>

            {/* Social links */}
            <div className="space-y-3">
              <a
                href={mockData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={mockData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 transition-colors"
              />

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 transition-colors"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-5 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 transition-colors"
                />
              </div>

              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-5 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 transition-colors appearance-none cursor-pointer"
              >
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="What can we help you with?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-5 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 transition-colors resize-none"
              />

              <button
                type="submit"
                className="w-full py-6 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 rounded-xl text-base font-medium transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Address and Hours */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-pink-500 dark:text-pink-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 transition-colors">Address</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Bhimavaram, Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-pink-500 dark:text-pink-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 transition-colors">Availability</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Available for freelance opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;