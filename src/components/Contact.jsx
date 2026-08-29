import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrpgbllb';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [fieldErrors, setFieldErrors] = useState({});
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  // Validate email address format using standard regex
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Your name is required';
    if (!formData.email.trim()) {
      errors.email = 'Your email is required';
    } else if (!isValidEmail(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitStatus === 'submitting') return;

    if (!validateForm()) return;

    setSubmitStatus('submitting');
    setApiErrorMessage('');

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _replyto: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim()
        })
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFieldErrors({});
      } else {
        setSubmitStatus('error');
        setApiErrorMessage(
          result?.errors?.[0]?.message ||
          result?.message ||
          'Something went wrong. Please try again or contact me directly.'
        );
      }
    } catch (error) {
      console.error('Formspree submission error:', error);
      setSubmitStatus('error');
      setApiErrorMessage('Something went wrong. Please try again or contact me directly.');
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-warm-ambient bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#101225] border border-[#1F2442] text-[#EC4899] font-sans text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail size={14} className="text-[#8B5CF6]" />
            <span>08 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight">
            Contact Channels
          </h2>
          <p className="text-[#CBD5E1] text-sm sm:text-base mt-2 font-sans font-normal">
            Open for software engineering internships, entry-level developer roles, and technical project collaborations.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="warm-card p-6 sm:p-8 rounded-3xl space-y-6 shadow-sm">
              <h3 className="text-xl font-display font-bold text-[#F8FAFC] border-b border-[#1F2442] pb-3">
                {personalData.name}
              </h3>

              {/* Email */}
              <a
                href={`mailto:${personalData.email}`}
                className="p-4 rounded-2xl bg-[#070A18] border border-[#1F2442] hover:border-[#8B5CF6] flex items-center space-x-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#EC4899] group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-sans text-[#94A3B8] uppercase font-bold">Email Address</div>
                  <div className="text-xs sm:text-sm font-bold text-[#F8FAFC] group-hover:text-[#EC4899] transition-colors">
                    {personalData.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalData.phone}`}
                className="p-4 rounded-2xl bg-[#070A18] border border-[#1F2442] hover:border-[#EC4899] flex items-center space-x-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EC4899]/20 border border-[#EC4899]/40 flex items-center justify-center text-[#EC4899] group-hover:scale-105 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-sans text-[#94A3B8] uppercase font-bold">Phone</div>
                  <div className="text-xs sm:text-sm font-bold text-[#F8FAFC] group-hover:text-[#EC4899] transition-colors">
                    {personalData.phone}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#070A18] border border-[#1F2442] flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#8B5CF6]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-sans text-[#94A3B8] uppercase font-bold">Location</div>
                  <div className="text-xs sm:text-sm font-bold text-[#F8FAFC]">
                    {personalData.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="warm-card p-6 rounded-3xl space-y-3 shadow-sm">
              <span className="text-xs font-sans font-bold text-[#94A3B8] uppercase tracking-wider block">
                PROFESSIONAL NETWORKS
              </span>
              <div className="flex gap-3 text-xs">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-full bg-[#070A18] border border-[#1F2442] hover:border-[#8B5CF6] text-[#F8FAFC] font-bold text-center transition-colors flex items-center justify-center space-x-2 shadow-xs"
                >
                  <GithubIcon size={16} />
                  <span>GITHUB</span>
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-full bg-[#070A18] border border-[#1F2442] hover:border-[#EC4899] text-[#F8FAFC] font-bold text-center transition-colors flex items-center justify-center space-x-2 shadow-xs"
                >
                  <LinkedinIcon size={16} />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 warm-card p-6 sm:p-8 rounded-3xl shadow-sm"
          >
            <h3 className="text-xl font-display font-bold text-[#F8FAFC] mb-6 flex items-center space-x-2">
              <MessageSquare size={18} className="text-[#8B5CF6]" />
              <span>Send a Direct Message</span>
            </h3>

            {/* Success Banner */}
            {submitStatus === 'success' ? (
              <div className="p-8 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6] text-center space-y-4 shadow-sm">
                <CheckCircle2 size={44} className="text-[#EC4899] mx-auto" />
                <h4 className="text-xl font-display font-bold text-[#F8FAFC]">
                  Message sent successfully! I'll get back to you soon.
                </h4>
                <p className="text-xs sm:text-sm text-[#CBD5E1] font-sans leading-relaxed font-normal">
                  Thank you for reaching out. Your message has been delivered via Formspree.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-2 px-6 py-2.5 rounded-full btn-gradient-primary font-sans font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans" noValidate>
                {/* Global Error Banner */}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-[#EC4899]/20 border border-[#EC4899] text-[#F8FAFC] text-xs font-semibold flex items-start space-x-2">
                    <AlertCircle size={16} className="shrink-0 mt-0.5 text-[#EC4899]" />
                    <span>{apiErrorMessage || "Something went wrong. Please try again or contact me directly."}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-[#94A3B8] mb-1.5 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      disabled={submitStatus === 'submitting'}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: null });
                      }}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-xl bg-[#070A18] border ${
                        fieldErrors.name ? 'border-[#EC4899]' : 'border-[#1F2442]'
                      } text-[#F8FAFC] placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors`}
                    />
                    {fieldErrors.name && (
                      <span className="text-[11px] text-[#EC4899] mt-1 block font-bold">
                        {fieldErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-[#94A3B8] mb-1.5 uppercase">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      disabled={submitStatus === 'submitting'}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: null });
                      }}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#070A18] border ${
                        fieldErrors.email ? 'border-[#EC4899]' : 'border-[#1F2442]'
                      } text-[#F8FAFC] placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors`}
                    />
                    {fieldErrors.email && (
                      <span className="text-[11px] text-[#EC4899] mt-1 block font-bold">
                        {fieldErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-bold text-[#94A3B8] mb-1.5 uppercase">
                    Subject *
                  </label>
                  <input
                    type="text"
                    disabled={submitStatus === 'submitting'}
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (fieldErrors.subject) setFieldErrors({ ...fieldErrors, subject: null });
                    }}
                    placeholder="Internship Opportunity / Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-[#070A18] border ${
                      fieldErrors.subject ? 'border-[#EC4899]' : 'border-[#1F2442]'
                    } text-[#F8FAFC] placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors`}
                  />
                  {fieldErrors.subject && (
                    <span className="text-[11px] text-[#EC4899] mt-1 block font-bold">
                      {fieldErrors.subject}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-bold text-[#94A3B8] mb-1.5 uppercase">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    disabled={submitStatus === 'submitting'}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: null });
                    }}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#070A18] border ${
                      fieldErrors.message ? 'border-[#EC4899]' : 'border-[#1F2442]'
                    } text-[#F8FAFC] placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none`}
                  />
                  {fieldErrors.message && (
                    <span className="text-[11px] text-[#EC4899] mt-1 block font-bold">
                      {fieldErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button with Loading State */}
                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="w-full py-3.5 rounded-full btn-gradient-primary font-sans font-bold text-xs sm:text-sm shadow-sm disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
                >
                  {submitStatus === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Message</span>
                    </>
                  )}
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
