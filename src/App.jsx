import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ParticleCursor from './components/ParticleCursor';

function App() {
  // Default to Dark Mode (Deep Navy Base)
  const [darkMode, setDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = 'dark-theme dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'light-theme';
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen relative font-sans selection:bg-[#8B5CF6] selection:text-white transition-colors duration-300 bg-warm-ambient bg-dot-pattern">
      {/* Fixed Atmospheric Background Layers for ALL Pages & Sections */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,300 C400,100 800,600 1600,300" stroke="url(#appPurplePinkGrad)" strokeWidth="1.5" fill="none" />
          <path d="M-100,800 C500,600 900,1100 1700,750" stroke="url(#appPurplePinkGrad)" strokeWidth="1" strokeDasharray="8,8" fill="none" />
          <defs>
            <linearGradient id="appPurplePinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Interactive Sparkle Particle Cursor */}
      <ParticleCursor />

      {/* Navigation Header with Dual Theme Toggle */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Resume View/Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
