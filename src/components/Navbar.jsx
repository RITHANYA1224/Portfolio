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
              ? 'bg-[#0B0D1A]/90 dark:bg-[#0B0D1A]/90 backdrop-blur-md border border-[#1F2442] dark:border-[#1F2442] shadow-lg py-2.5 px-6'
              : 'bg-[#0B0D1A]/70 dark:bg-[#0B0D1A]/70 backdrop-blur-sm border border-[#1F2442]/70 py-3 px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Editorial Brand Name */}
            <a
              href="#home"
              className="flex items-center space-x-3 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6] flex items-center justify-center text-[#F8FAFC] dark:text-[#F8FAFC] font-display font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base tracking-tight text-[#F8FAFC] dark:text-[#F8FAFC] group-hover:text-[#EC4899] transition-colors">
                  {personalData.name}
                </span>
                <span className="text-[10px] font-sans text-[#CBD5E1] dark:text-[#CBD5E1] tracking-wide font-medium">
                  B.Tech IT • SKCT
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-[#070A18]/80 dark:bg-[#070A18]/80 border border-[#1F2442] rounded-full px-3 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] text-white shadow-md font-bold'
                        : 'text-[#CBD5E1] dark:text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-[#8B5CF6]/15'
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
                className="p-2 rounded-full text-[#F8FAFC] dark:text-[#F8FAFC] bg-[#070A18] border border-[#1F2442] hover:border-[#8B5CF6] transition-colors"
                aria-label="Toggle Theme"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? <Sun size={16} className="text-[#EC4899]" /> : <Moon size={16} className="text-[#8B5CF6]" />}
              </button>

              {/* Resume Button */}
              <button
                onClick={onOpenResume}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#070A18] border border-[#3B2D6B] hover:border-[#EC4899] text-[#F8FAFC] font-sans font-semibold text-xs transition-all shadow-sm group hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
              >
                <span>Resume</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg text-[#F8FAFC] dark:text-[#F8FAFC]"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={18} className="text-[#EC4899]" /> : <Moon size={18} className="text-[#8B5CF6]" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#F8FAFC] dark:text-[#F8FAFC]"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-3xl bg-[#0B0D1A] border border-[#1F2442] space-y-2 shadow-2xl backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#F8FAFC] hover:bg-[#8B5CF6]/20"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md"
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
