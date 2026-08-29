import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-[#191424]/40 dark:bg-[#191424]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1F1B2C] border border-[#3A2E50] text-[#ED7BC9] font-sans text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap size={14} className="text-[#8E55F7]" />
            <span>05 // ACADEMIC RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5EFFB] dark:text-[#F5EFFB] tracking-tight">
            Academic Timeline
          </h2>
          <p className="text-[#C3B8D4] text-sm sm:text-base mt-2 font-sans font-normal">
            Formal education record from B.Tech Information Technology to Higher Secondary schooling.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#8E55F7] via-[#D562F2] to-[#ED7BC9] mt-3 rounded-full" />
        </div>

        {/* Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="warm-card p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#3A2E50] pb-3">
                  <span className="font-mono text-xs font-bold text-[#8E82A3]">
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#8E55F7]/20 border border-[#8E55F7]/40 text-[#ED7BC9] text-xs font-sans font-bold">
                    {edu.score}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-[#F5EFFB] leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-sans font-bold text-[#C3B8D4] mt-2">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-[#8E82A3] mt-1 flex items-center space-x-1 font-sans font-semibold">
                    <MapPin size={12} className="text-[#ED7BC9]" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#3A2E50] text-xs font-sans text-[#8E82A3] font-bold">
                STATUS: <span className="text-[#F5EFFB]">{edu.status.toUpperCase()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
