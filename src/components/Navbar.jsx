import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Navbar = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 180;

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
          className={`mx-auto rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#191424]/90 dark:bg-[#191424]/90 backdrop-blur-md border border-[#3A2E50] dark:border-[#3A2E50] shadow-lg py-2.5 px-6'
              : 'bg-[#191424]/60 dark:bg-[#191424]/60 backdrop-blur-sm border border-[#3A2E50]/60 py-3 px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Editorial Brand Name */}
            <a
              href="#home"
              className="flex items-center space-x-3 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#8E55F7]/20 border border-[#8E55F7] flex items-center justify-center text-[#F5EFFB] dark:text-[#F5EFFB] font-display font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base tracking-tight text-[#F5EFFB] dark:text-[#F5EFFB] group-hover:text-[#ED7BC9] transition-colors">
                  {personalData.name}
                </span>
                <span className="text-[10px] font-sans text-[#C3B8D4] dark:text-[#C3B8D4] tracking-wide font-medium">
                  B.Tech IT • SKCT
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-[#121018]/80 dark:bg-[#121018]/80 border border-[#3A2E50] rounded-full px-3 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#8E55F7] via-[#D562F2] to-[#ED7BC9] text-white shadow-md font-bold'
                        : 'text-[#C3B8D4] hover:text-[#F5EFFB] hover:bg-[#8E55F7]/15'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Theme Switcher Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full text-[#F5EFFB] bg-[#121018] border border-[#3A2E50] hover:border-[#8E55F7] transition-colors"
                aria-label="Toggle Theme"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? <Sun size={16} className="text-[#ED7BC9]" /> : <Moon size={16} className="text-[#8E55F7]" />}
              </button>

              {/* Resume Button */}
              <button
                onClick={onOpenResume}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#121018] border border-[#563A80] hover:border-[#ED7BC9] text-[#F5EFFB] font-sans font-semibold text-xs transition-all shadow-sm group hover:shadow-[0_0_15px_rgba(237,123,201,0.3)]"
              >
                <span>Resume</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg text-[#F5EFFB]"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={18} className="text-[#ED7BC9]" /> : <Moon size={18} className="text-[#8E55F7]" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#F5EFFB]"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-3xl bg-[#191424] border border-[#3A2E50] space-y-2 shadow-2xl backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#F5EFFB] hover:bg-[#8E55F7]/20"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-[#8E55F7] to-[#ED7BC9] text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md"
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
