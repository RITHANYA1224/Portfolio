import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t theme-border py-12 relative bg-editorial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-base font-bold font-heading tracking-wide theme-heading">
              {personalData.name.toUpperCase()}
            </h4>
            <p className="text-xs theme-muted font-mono-tag">
              B.Tech Information Technology • {personalData.college}
            </p>
            <p className="text-[11px] theme-subtle font-mono-tag">
              Coimbatore, Tamil Nadu • 2024–2028
            </p>
          </div>

          <div className="flex items-center space-x-6 theme-muted font-mono-tag text-xs font-semibold">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors flex items-center space-x-1.5"
            >
              <GithubIcon size={14} />
              <span>GITHUB</span>
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors flex items-center space-x-1.5"
            >
              <LinkedinIcon size={14} />
              <span>LINKEDIN</span>
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
            >
              EMAIL
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl editorial-card theme-heading hover:scale-105 transition-all"
            aria-label="Back to top"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t theme-border text-center font-mono-tag text-[11px] theme-subtle font-semibold">
          © {new Date().getFullYear()} {personalData.name}. Original Personal Portfolio System.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

