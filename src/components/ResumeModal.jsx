import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl h-[88vh] rounded-3xl editorial-card flex flex-col overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b theme-border flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
                <FileText size={20} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold font-heading theme-heading">
                  {personalData.name} — Curriculum Vitae
                </h3>
                <p className="text-xs theme-muted font-mono-tag">
                  B.Tech Information Technology • {personalData.college}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <a
                href={personalData.resumePath}
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:px-3 sm:py-2 rounded-xl editorial-card theme-heading text-xs font-semibold flex items-center space-x-1.5 hover:scale-105 transition-transform"
                title="Open resume in full tab"
              >
                <ExternalLink size={15} />
                <span className="hidden md:inline">Open in Tab</span>
              </a>

              <a
                href={personalData.resumePath}
                download="Rithanya_S_Resume.pdf"
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm"
              >
                <Download size={15} />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 theme-heading hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* PDF Frame Embed View */}
          <div className="flex-1 p-2 sm:p-4 overflow-hidden relative">
            <iframe
              src={personalData.resumePath}
              title="Resume Preview"
              className="w-full h-full rounded-2xl border theme-border shadow-inner"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
