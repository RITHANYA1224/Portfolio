import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-mono-tag text-xs font-semibold uppercase tracking-widest mb-3">
            <Mail size={14} />
            <span>08 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight theme-heading">
            Contact Channels
          </h2>
          <p className="theme-muted text-sm sm:text-base mt-2">
            Open for software development internships, entry-level engineering roles, and academic collaborations.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="editorial-card p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl">
              <h3 className="text-xl font-bold font-heading border-b theme-border pb-3 theme-heading">
                {personalData.name}
              </h3>

              {/* Email */}
              <a
                href={`mailto:${personalData.email}`}
                className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 flex items-center space-x-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-700 dark:text-purple-300 group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono-tag theme-muted uppercase font-semibold">Email Address</div>
                  <div className="text-xs sm:text-sm font-bold theme-heading group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {personalData.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalData.phone}`}
                className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 flex items-center space-x-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-700 dark:text-emerald-300 group-hover:scale-105 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono-tag theme-muted uppercase font-semibold">Phone</div>
                  <div className="text-xs sm:text-sm font-bold theme-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    {personalData.phone}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-700 dark:text-purple-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono-tag theme-muted uppercase font-semibold">Location</div>
                  <div className="text-xs sm:text-sm font-bold theme-heading">
                    {personalData.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Networks */}
            <div className="editorial-card p-6 rounded-3xl space-y-3 shadow-xl">
              <span className="text-xs font-mono-tag theme-subtle uppercase tracking-widest block font-semibold">
                NETWORKS
              </span>
              <div className="flex gap-3 font-mono-tag text-xs">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 theme-heading hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-center font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <GithubIcon size={16} />
                  <span>GITHUB</span>
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 theme-heading hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-center font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <LinkedinIcon size={16} />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 editorial-card p-6 sm:p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-xl font-bold font-heading mb-6 flex items-center space-x-2 theme-heading">
              <MessageSquare size={18} className="text-purple-700 dark:text-purple-300" />
              <span>Direct Message</span>
            </h3>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 size={36} className="text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold font-heading theme-heading">Message Dispatched!</h4>
                <p className="text-xs theme-muted">
                  Thank you for reaching out. Rithanya will respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tag theme-muted mb-1.5 uppercase font-semibold">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 theme-heading placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tag theme-muted mb-1.5 uppercase font-semibold">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 theme-heading placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tag theme-muted mb-1.5 uppercase font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 theme-heading placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tag theme-muted mb-1.5 uppercase font-semibold">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 theme-heading placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm font-mono-tag shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                >
                  <Send size={14} />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

