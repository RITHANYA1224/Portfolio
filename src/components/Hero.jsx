import React from 'react';
import { motion } from 'framer-motion';
import { ChevronsDown, Download, MapPin, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  const scrollToAbout = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-36 pb-24 flex flex-col justify-between overflow-hidden">
      {/* Background Orbital Wave SVG Decorative Accent */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,200 C300,50 800,450 1400,200" stroke="url(#purplePinkGrad)" strokeWidth="1.5" fill="none" />
        <path d="M-100,500 C400,300 700,700 1500,400" stroke="url(#purplePinkGrad)" strokeWidth="1" strokeDasharray="6,6" fill="none" />
        <defs>
          <linearGradient id="purplePinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Metadata Pill Strip */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-[#101225]/80 border border-[#1F2442] text-[#F8FAFC] text-xs font-medium flex items-center space-x-2 backdrop-blur-md shadow-sm">
                <MapPin size={13} className="text-[#EC4899]" />
                <span>{personalData.location}</span>
              </span>

              <span className="px-4 py-1.5 rounded-full bg-[#101225]/80 border border-[#1F2442] text-[#F8FAFC] text-xs font-medium flex items-center space-x-2 backdrop-blur-md shadow-sm">
                <GraduationCap size={13} className="text-[#8B5CF6]" />
                <span>B.Tech IT • {personalData.academicPeriod}</span>
              </span>

              <span className="px-4 py-1.5 rounded-full bg-[#101225]/80 border border-[#1F2442] text-[#F8FAFC] text-xs font-medium flex items-center space-x-2 backdrop-blur-md shadow-sm">
                <Award size={13} className="text-[#EC4899]" />
                <span>CGPA {personalData.cgpa}</span>
              </span>
            </div>

            {/* Display Typography */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-gradient-purple-pink">
                {personalData.name}
              </h1>
              <p className="text-xl sm:text-2xl font-display italic text-[#CBD5E1]">
                B.Tech Information Technology Student
              </p>
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#EC4899]">
                {personalData.college}
              </div>
            </div>

            {/* Editorial Statement */}
            <p className="text-[#F8FAFC] text-base sm:text-lg leading-relaxed font-sans max-w-xl border-l-3 border-[#8B5CF6] pl-4 py-1 font-normal opacity-90">
              "{personalData.tagline}"
            </p>

            {/* Action Buttons & Social Links */}
            <div className="space-y-6 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="flex items-center space-x-2 px-7 py-3.5 rounded-full btn-gradient-primary font-sans font-bold text-sm"
                >
                  <span>Explore My Work</span>
                  <ChevronsDown size={16} />
                </a>

                <a
                  href={personalData.resumePath}
                  download="Rithanya_S_Resume.pdf"
                  className="flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#070A18]/80 text-[#F8FAFC] border border-[#3B2D6B] hover:border-[#EC4899] font-sans font-semibold text-sm transition-all backdrop-blur-md hover:shadow-[0_0_20px_rgba(236,72,153,0.25)]"
                >
                  <Download size={16} className="text-[#EC4899]" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Social Link Badges */}
              <div className="flex items-center space-x-4 pt-2 border-t border-[#1F2442]/60">
                <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Connect:</span>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-[#101225] text-[#F8FAFC] border border-[#1F2442] hover:border-[#EC4899] transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-[#101225] text-[#F8FAFC] border border-[#1F2442] hover:border-[#EC4899] transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalData.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-[#101225] text-[#F8FAFC] border border-[#1F2442] hover:border-[#8B5CF6] text-xs font-semibold flex items-center space-x-1.5 transition-all"
                >
                  <span>LeetCode (160+ Days)</span>
                  <ExternalLink size={12} className="text-[#EC4899]" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Circular Profile Photo with Slightly Raised Cropping */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative group">
              {/* Glowing Outer Lavender/Pink Halo */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#8B5CF6] via-[#A855F7] to-[#EC4899] opacity-65 blur-xl group-hover:opacity-95 transition-opacity duration-500 animate-pulse" />

              {/* Orbital Ring 1 with Glowing Node Dots */}
              <div className="absolute -inset-6 rounded-full border border-[#EC4899]/40 border-dashed animate-[spin_25s_linear_infinite]" />
              
              {/* Orbital Node Dots */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#EC4899]" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />

              {/* Circular Photo Container */}
              <div className="relative rounded-full bg-[#070A18] p-3 border-2 border-[#8B5CF6] shadow-[0_0_40px_rgba(139,92,246,0.4)]">
                <div className="overflow-hidden rounded-full w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 relative shadow-inner">
                  {/* Positioned slightly higher inside container (object-[center_18%]) */}
                  <img
                    src={personalData.profileImage}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-[center_18%] transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* GLOWING DOUBLE-CHEVRON DOWNWARD ARROW ONLY (NO CIRCLE) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-col items-center justify-center pt-8 cursor-pointer relative z-20 group"
        onClick={scrollToAbout}
      >
        <ChevronsDown
          size={36}
          className="glowing-chevron animate-bounce text-[#EC4899] drop-shadow-[0_0_15px_rgba(236,72,153,0.95)] group-hover:scale-125 transition-transform"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
