import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Layers, Database, Wrench, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  'PROGRAMMING LANGUAGES': Code2,
  'WEB & BACKEND DEVELOPMENT': Layers,
  'DATA & DATABASES': Database,
  'TOOLS & PLATFORMS': Wrench,
  'SOFT SKILLS': Sparkles
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-warm-ambient bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#101225] border border-[#1F2442] text-[#EC4899] font-sans text-xs font-semibold uppercase tracking-wider mb-3">
            <Terminal size={14} className="text-[#8B5CF6]" />
            <span>02 // TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] dark:text-[#F8FAFC] tracking-tight">
            Skills & Technical Competencies
          </h2>
          <p className="text-[#CBD5E1] text-sm sm:text-base mt-2 font-sans font-normal">
            Structured inventory of programming languages, web & backend frameworks, database tools, and professional soft skills.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] mt-3 rounded-full" />
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const IconComp = categoryIcons[cat.category] || Terminal;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="warm-card p-6 sm:p-8 rounded-3xl space-y-6 shadow-sm"
              >
                <div className="flex items-center justify-between border-b border-[#1F2442] pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#EC4899]">
                      <IconComp size={18} />
                    </div>
                    <h3 className="text-base sm:text-lg font-display font-bold text-[#F8FAFC] tracking-wide">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={skill}
                      className="px-3.5 py-2 rounded-xl bg-[#070A18] border border-[#1F2442] hover:border-[#8B5CF6] text-[#F8FAFC] text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2 shadow-xs hover:shadow-[0_0_12px_rgba(139,92,246,0.25)]"
                    >
                      <span className={`w-2 h-2 rounded-full ${sIdx % 2 === 0 ? 'bg-[#8B5CF6]' : 'bg-[#EC4899]'}`} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
