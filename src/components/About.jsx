import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';
import { aboutTabs, personalData } from '../data/portfolioData';

const About = () => {
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id);

  const selectedContent = aboutTabs.find((t) => t.id === activeTab) || aboutTabs[0];

  return (
    <section id="about" className="py-24 relative bg-[#191424]/50 dark:bg-[#191424]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1F1B2C] border border-[#3A2E50] text-[#ED7BC9] font-sans text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck size={14} className="text-[#8E55F7]" />
            <span>01 // PERSPECTIVE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5EFFB] dark:text-[#F5EFFB] tracking-tight">
            About & Technical Focus
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#8E55F7] via-[#D562F2] to-[#ED7BC9] mt-3 rounded-full" />
        </div>

        {/* Editorial Interactive Tab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Selector Column */}
          <div className="lg:col-span-4 space-y-3">
            {aboutTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#1F1B2C] border-[#8E55F7] text-[#F5EFFB] font-bold shadow-[0_0_20px_rgba(142,85,247,0.2)]'
                      : 'bg-[#121018]/60 border-[#3A2E50] text-[#C3B8D4] hover:text-[#F5EFFB] hover:border-[#8E55F7]/50'
                  }`}
                >
                  <span className="font-display font-semibold text-sm">
                    {tab.label}
                  </span>
                  <ArrowRight
                    size={16}
                    className={`transition-transform ${
                      isActive ? 'text-[#ED7BC9] translate-x-1' : 'text-[#8E82A3] group-hover:text-[#8E55F7]'
                    }`}
                  />
                </button>
              );
            })}

            {/* Academic Summary Badge Box */}
            <div className="p-4.5 rounded-2xl bg-[#191424] border border-[#3A2E50] text-xs font-sans text-[#F5EFFB] space-y-2 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-[#8E82A3]">INSTITUTION</span>
                <span className="font-bold text-[#F5EFFB]">SKCT, Coimbatore</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#8E82A3]">BATCH</span>
                <span className="font-bold text-[#F5EFFB]">2024–2028</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#8E82A3]">CGPA SCORE</span>
                <span className="font-extrabold text-[#F5EFFB] bg-[#8E55F7]/20 px-2.5 py-0.5 rounded border border-[#8E55F7]/40">8.18 / 10</span>
              </div>
            </div>
          </div>

          {/* Right Display Column */}
          <div className="lg:col-span-8">
            <motion.div
              key={selectedContent.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="warm-card p-6 sm:p-10 rounded-3xl space-y-6 relative min-h-[320px] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="px-3.5 py-1 rounded-full bg-[#8E55F7]/20 border border-[#8E55F7]/40 text-[#ED7BC9] text-xs font-bold uppercase tracking-wider inline-block">
                  {selectedContent.label}
                </span>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#F5EFFB] leading-tight">
                  {selectedContent.heading}
                </h3>

                <p className="text-[#C3B8D4] text-base sm:text-lg leading-relaxed font-sans font-normal">
                  {selectedContent.content}
                </p>
              </div>

              {/* Core Competencies Pills */}
              <div className="pt-6 border-t border-[#3A2E50] flex flex-wrap gap-2.5 text-xs font-sans">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#121018] border border-[#3A2E50] text-[#F5EFFB] font-semibold flex items-center space-x-1.5 shadow-xs">
                  <CheckCircle2 size={14} className="text-[#8E55F7]" />
                  <span>Java & Spring Boot APIs</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#121018] border border-[#3A2E50] text-[#F5EFFB] font-semibold flex items-center space-x-1.5 shadow-xs">
                  <CheckCircle2 size={14} className="text-[#ED7BC9]" />
                  <span>React Frontend Engineering</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#121018] border border-[#3A2E50] text-[#F5EFFB] font-semibold flex items-center space-x-1.5 shadow-xs">
                  <CheckCircle2 size={14} className="text-[#8E55F7]" />
                  <span>MySQL Relational Databases</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#121018] border border-[#3A2E50] text-[#F5EFFB] font-semibold flex items-center space-x-1.5 shadow-xs">
                  <CheckCircle2 size={14} className="text-[#ED7BC9]" />
                  <span>Power BI Analytics</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
