import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';


const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-mono-tag text-xs font-semibold uppercase tracking-widest mb-3">
            <GraduationCap size={14} />
            <span>02 // ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight theme-heading">
            Education Record
          </h2>
          <p className="theme-muted text-sm sm:text-base mt-2">
            Academic progression in Information Technology and secondary schooling.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 mt-4 rounded-full" />
        </div>

        {/* Academic Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="editorial-card p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b theme-border pb-3">
                  <span className="font-mono-tag text-xs text-purple-700 dark:text-purple-300 font-bold uppercase">
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 text-xs font-mono-tag font-bold">
                    {edu.score}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-heading theme-heading leading-tight">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold theme-body mt-2">
                    {edu.institution}
                  </div>
                  <div className="text-xs theme-muted mt-1 flex items-center space-x-1">
                    <MapPin size={12} className="text-purple-600 dark:text-purple-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t theme-border text-[11px] font-mono-tag theme-subtle font-semibold">
                STATUS: {edu.status.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

