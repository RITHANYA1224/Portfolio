import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mx-auto rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'editorial-card py-3 px-5 border shadow-lg'
              : 'bg-transparent py-4 px-2'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Editorial Brand Logo with User Profile Image */}
            <a
              href="#home"
              className="flex items-center space-x-3 group"
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden border-2 border-purple-500/50 p-0.5 shadow-md group-hover:scale-105 transition-transform bg-slate-900 shrink-0">
                <img
                  src="/profile.png"
                  alt="Rithanya S"
                  className="w-full h-full object-cover object-[50%_15%] rounded-lg"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-bold text-sm tracking-wide theme-heading group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {personalData.name.toUpperCase()}
                </span>
                <span className="text-[10px] font-mono-tag theme-muted uppercase tracking-widest">
                  B.Tech IT • SKCT
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 border rounded-full px-3 py-1.5 backdrop-blur-md bg-white/50 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800/60">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30 font-semibold'
                        : 'theme-muted hover:theme-heading hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Side Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-xl border transition-all duration-200 bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:scale-105"
                aria-label="Toggle Theme"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-purple-600" />}
              </button>

              {/* Resume CTA */}
              <button
                onClick={onOpenResume}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-purple-600 text-white dark:bg-purple-500/20 dark:text-purple-200 border border-purple-600 dark:border-purple-500/40 text-xs font-semibold hover:bg-purple-700 dark:hover:border-purple-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Resume</span>
                <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg theme-heading hover:bg-slate-200 dark:hover:bg-slate-800"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-purple-600" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg theme-heading"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl editorial-card space-y-2 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-medium theme-heading hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-300"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full mt-2 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-xs flex items-center justify-center space-x-1.5"
            >
              <span>View Resume</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
