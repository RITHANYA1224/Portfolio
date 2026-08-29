import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const ResumeSection = ({ onOpenResume }) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="warm-card p-8 sm:p-14 rounded-3xl text-left relative overflow-hidden shadow-lg border-2 border-[#8E55F7]"
        >
          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-[#8E55F7]/20 border border-[#8E55F7]/40 text-[#ED7BC9] font-sans text-xs font-bold uppercase tracking-wider inline-block">
              CURRICULUM VITAE
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F5EFFB] tracking-tight">
              Interested in my work?
            </h2>

            <p className="text-[#C3B8D4] text-base sm:text-lg leading-relaxed font-sans font-normal">
              Review my formal technical background, project case studies, academic record, and internship achievements in my official resume.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenResume}
                className="flex items-center space-x-2 px-7 py-3.5 rounded-full btn-gradient-primary font-sans font-bold text-sm shadow-sm"
              >
                <span>View Resume</span>
                <ArrowUpRight size={16} />
              </button>

              <a
                href={personalData.resumePath}
                download="Rithanya_S_Resume.pdf"
                className="flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#121018] text-[#F5EFFB] border border-[#563A80] hover:border-[#ED7BC9] text-sm font-semibold transition-all shadow-xs"
              >
                <Download size={16} className="text-[#ED7BC9]" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
