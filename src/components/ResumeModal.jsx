import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121018]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl h-[88vh] rounded-3xl bg-[#191424] border border-[#3A2E50] flex flex-col overflow-hidden shadow-2xl text-[#F5EFFB]"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#3A2E50] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-[#8E55F7]/20 border border-[#8E55F7]/40 text-[#ED7BC9]">
                <FileText size={20} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-[#F5EFFB]">
                  {personalData.name} — Curriculum Vitae
                </h3>
                <p className="text-xs text-[#8E82A3] font-sans font-semibold">
                  B.Tech Information Technology • {personalData.college}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <a
                href={personalData.resumePath}
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:px-3 sm:py-2 rounded-full bg-[#121018] text-[#F5EFFB] border border-[#3A2E50] text-xs font-bold flex items-center space-x-1.5 hover:border-[#8E55F7] transition-colors"
                title="Open resume in full tab"
              >
                <ExternalLink size={15} />
                <span className="hidden md:inline">Open in Tab</span>
              </a>

              <a
                href={personalData.resumePath}
                download="Rithanya_S_Resume.pdf"
                className="flex items-center space-x-1.5 px-4 py-2 rounded-full btn-gradient-primary font-sans font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <Download size={15} />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#121018] text-[#F5EFFB] border border-[#3A2E50] hover:border-[#ED7BC9] transition-colors"
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
              className="w-full h-full rounded-2xl border border-[#3A2E50] shadow-inner"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
