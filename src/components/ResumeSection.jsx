import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, FileText, ExternalLink } from 'lucide-react';

const ResumeSection = ({ onOpenResume }) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="editorial-card p-8 sm:p-14 rounded-3xl text-left relative overflow-hidden shadow-2xl border-2 border-purple-500/30"
        >
          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-mono-tag text-xs font-semibold uppercase tracking-widest inline-block">
              CURRICULUM VITAE
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight theme-heading">
              Looking for my complete resume?
            </h2>

            <p className="theme-body text-base sm:text-lg leading-relaxed font-sans">
              Access my verified qualifications, academic record (8.18 CGPA), full-stack project architecture, internship deliverables at Ytock, and certifications in PDF format.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenResume}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all font-mono-tag"
              >
                <FileText size={16} />
                <span>VIEW RESUME</span>
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl editorial-card theme-heading text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all font-mono-tag"
              >
                <ExternalLink size={16} className="text-purple-700 dark:text-purple-300" />
                <span>OPEN IN TAB</span>
              </a>

              <a
                href="/resume.pdf"
                download="Rithanya_S_Resume.pdf"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all font-mono-tag shadow-md"
              >
                <Download size={16} />
                <span>DOWNLOAD PDF</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
