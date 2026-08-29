import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-warm-ambient bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#101225] border border-[#1F2442] text-[#EC4899] font-sans text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap size={14} className="text-[#8B5CF6]" />
            <span>05 // ACADEMIC RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] dark:text-[#F8FAFC] tracking-tight">
            Academic Timeline
          </h2>
          <p className="text-[#CBD5E1] text-sm sm:text-base mt-2 font-sans font-normal">
            Formal education record from B.Tech Information Technology to Higher Secondary schooling.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] mt-3 rounded-full" />
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
                <div className="flex items-center justify-between border-b border-[#1F2442] pb-3">
                  <span className="font-mono text-xs font-bold text-[#94A3B8]">
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#EC4899] text-xs font-sans font-bold">
                    {edu.score}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-[#F8FAFC] leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-sans font-bold text-[#CBD5E1] mt-2">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-[#94A3B8] mt-1 flex items-center space-x-1 font-sans font-semibold">
                    <MapPin size={12} className="text-[#EC4899]" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1F2442] text-xs font-sans text-[#94A3B8] font-bold">
                STATUS: <span className="text-[#F8FAFC]">{edu.status.toUpperCase()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
