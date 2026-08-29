import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A18] border-t border-[#1F2442] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-[#F8FAFC] text-base font-display font-bold tracking-tight">
              {personalData.name}
            </h4>
            <p className="text-xs text-[#94A3B8] font-sans font-semibold">
              B.Tech Information Technology • {personalData.college}
            </p>
            <p className="text-[11px] text-[#94A3B8] font-sans font-semibold">
              Coimbatore, Tamil Nadu • 2024–2028
            </p>
          </div>

          <div className="flex items-center space-x-6 text-[#F8FAFC] font-sans text-xs">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#EC4899] transition-colors flex items-center space-x-1.5 font-semibold"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8B5CF6] transition-colors flex items-center space-x-1.5 font-semibold"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="hover:text-[#EC4899] transition-colors font-semibold"
            >
              Email
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#101225] text-[#F8FAFC] border border-[#1F2442] hover:border-[#EC4899] transition-all hover:scale-105 shadow-xs"
            aria-label="Back to top"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1F2442]/60 text-center font-sans text-[11px] text-[#94A3B8] font-semibold">
          © {new Date().getFullYear()} {personalData.name}. All Rights Reserved. Deep Navy & Purple Personal Brand System.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
