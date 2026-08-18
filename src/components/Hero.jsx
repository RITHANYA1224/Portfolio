import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, MapPin, GraduationCap, Award, Terminal, Cpu, FileText, Code2, Sparkles, Database, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { personalData } from '../data/portfolioData';

const roles = [
  { text: "Software Engineer", icon: Code2, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10 border-purple-500/30" },
  { text: "Data Analyst", icon: Database, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" },
  { text: "Full Stack Developer", icon: Layers, color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-500/10 border-sky-500/30" },
  { text: "Java & Backend Developer", icon: Terminal, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/30" },
  { text: "Problem Solver", icon: Sparkles, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" }
];

const Hero = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const activeRole = roles[currentRoleIndex];
  const IconComponent = activeRole.icon;

  return (
    <section id="home" className="relative min-h-screen pt-36 pb-20 flex items-center justify-center overflow-hidden bg-editorial-grid">
      {/* Soft Pastel Background Accent Glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-emerald-500/10 dark:bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Asymmetric Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Profile Avatar Photo (Super Prominent Circular Hero Showcase) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-7 pt-2">
              <div className="relative group shrink-0">
                {/* Ambient Glow Aura */}
                <div className="absolute -inset-5 rounded-full bg-gradient-to-tr from-purple-600/35 via-indigo-500/30 to-emerald-500/35 blur-2xl opacity-90 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                
                {/* Super Large Circular Profile Frame */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-2.5 bg-gradient-to-tr from-purple-600 via-indigo-400 to-emerald-400 shadow-2xl shadow-purple-950/50 transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-white dark:border-slate-900 shadow-inner">
                    <img
                      src="/profile.png"
                      alt="Rithanya S"
                      className="w-full h-full object-cover object-[50%_12%]"
                    />
                  </div>
                </div>

                {/* Active Status Badge */}
                <span className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 border border-emerald-500 text-emerald-700 dark:text-emerald-400 font-mono-tag text-xs font-bold flex items-center space-x-1.5 shadow-xl backdrop-blur-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available</span>
                </span>
              </div>

              {/* Metadata Badges Strip & Quick Socials */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/25 text-purple-700 dark:text-purple-300 font-mono-tag text-xs font-semibold uppercase tracking-widest flex items-center space-x-1.5 shadow-sm">
                    <MapPin size={14} className="text-purple-600 dark:text-purple-400" />
                    <span>Coimbatore, India</span>
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 font-mono-tag text-xs font-semibold uppercase tracking-widest flex items-center space-x-1.5 shadow-sm">
                    <GraduationCap size={14} className="text-emerald-700 dark:text-emerald-400" />
                    <span>B.Tech IT • 2024–2028</span>
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-800 dark:text-amber-300 font-mono-tag text-xs font-semibold uppercase tracking-widest flex items-center space-x-1.5 shadow-sm">
                    <Award size={14} className="text-amber-600 dark:text-amber-400" />
                    <span>CGPA 8.18 / 10</span>
                  </span>
                </div>

                {/* Direct Social & Platform Links */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-700 dark:text-purple-300 font-mono-tag text-xs font-semibold transition-all hover:scale-105"
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-200/70 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 theme-heading font-mono-tag text-xs font-semibold transition-all hover:scale-105"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalData.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-800 dark:text-amber-300 font-mono-tag text-xs font-semibold transition-all hover:scale-105"
                  >
                    <LeetcodeIcon size={14} className="text-amber-600 dark:text-amber-400" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Creative Dynamic Role Rotator Strip */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center">
                {/* Smooth Animated Role Pill */}
                <div className="h-9 relative min-w-[240px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentRoleIndex}
                      initial={{ opacity: 0, y: 12, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border shadow-sm backdrop-blur-md ${activeRole.bg}`}
                    >
                      <IconComponent size={15} className={activeRole.color} />
                      <span className={`text-xs sm:text-sm font-extrabold font-mono-tag tracking-wider uppercase ${activeRole.color}`}>
                        {activeRole.text}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-heading theme-heading">
                RITHANYA S
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {roles.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentRoleIndex(i)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-mono-tag font-semibold transition-all duration-300 ${
                      i === currentRoleIndex
                        ? 'bg-purple-600 text-white shadow-md scale-105'
                        : 'bg-slate-100 dark:bg-slate-900/60 theme-muted hover:text-purple-600 dark:hover:text-purple-300 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {r.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Tagline Statement */}
            <p className="theme-body text-sm sm:text-base max-w-xl leading-relaxed font-sans border-l-3 border-purple-500/60 pl-4 py-1">
              "{personalData.tagline}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md shadow-purple-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore My Work</span>
                <ArrowDown size={16} />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl editorial-card theme-heading font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FileText size={16} className="text-purple-600 dark:text-purple-400" />
                <span>View Resume</span>
              </button>
            </div>

          </motion.div>

          {/* Right Column: Interactive Tech Constellation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="editorial-card p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl relative">
              <div className="flex items-center justify-between border-b theme-border pb-4">
                <span className="text-xs font-mono-tag uppercase tracking-wider text-purple-600 dark:text-purple-300 font-bold flex items-center space-x-2">
                  <Terminal size={15} />
                  <span>Technical Brand Matrix</span>
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Data Grid Matrix */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono-tag">
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="theme-muted text-[10px] uppercase font-semibold">Primary Core</div>
                  <div className="text-purple-700 dark:text-purple-300 font-bold mt-1">Java & SQL</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="theme-muted text-[10px] uppercase font-semibold">Backend</div>
                  <div className="text-emerald-700 dark:text-emerald-300 font-bold mt-1">Spring Boot</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="theme-muted text-[10px] uppercase font-semibold">Frontend</div>
                  <div className="text-sky-700 dark:text-sky-300 font-bold mt-1">React & Tailwind</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="theme-muted text-[10px] uppercase font-semibold">Analytics</div>
                  <div className="text-amber-700 dark:text-amber-300 font-bold mt-1">Python & Power BI</div>
                </div>
              </div>

              {/* Specialization Architecture Note */}
              <div className="p-4 rounded-2xl bg-purple-500/10 dark:bg-purple-500/5 border border-purple-500/20 text-xs theme-body space-y-2">
                <div className="flex items-center justify-between font-mono-tag text-purple-700 dark:text-purple-300 font-semibold">
                  <span>PLACEMENT TARGET</span>
                  <Cpu size={15} />
                </div>
                <p className="leading-relaxed theme-muted">
                  Engineering robust web applications, REST APIs, and analytics dashboards with clean Object-Oriented design and high reliability.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
