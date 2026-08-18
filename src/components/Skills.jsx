import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Layers, Wrench, Database, Sparkles, CheckCircle2 } from 'lucide-react';
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
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-mono-tag text-xs font-semibold uppercase tracking-widest mb-3">
            <Terminal size={14} />
            <span>03 // TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight theme-heading">
            Skills & Competencies
          </h2>
          <p className="theme-muted text-sm sm:text-base mt-2">
            Structured inventory of programming languages, web & backend frameworks, databases, tools, and soft skills.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mt-4 rounded-full" />
        </div>

        {/* Skill System Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComp = categoryIcons[cat.category] || Terminal;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="editorial-card p-6 sm:p-7 rounded-3xl space-y-5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b theme-border pb-3.5 mb-4">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300">
                        <IconComp size={16} />
                      </div>
                      <h3 className="text-sm font-bold font-heading tracking-wider theme-heading">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="text-xs font-mono-tag theme-subtle font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skill Badges Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="skill-badge px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-semibold flex items-center space-x-2 shadow-sm cursor-default"
                      >
                        <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span className="tracking-tight">{skill}</span>
                      </div>
                    ))}
                  </div>
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
