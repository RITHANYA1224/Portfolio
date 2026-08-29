import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';
import { aboutTabs, personalData } from '../data/portfolioData';

const About = () => {
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id);

  const selectedContent = aboutTabs.find((t) => t.id === activeTab) || aboutTabs[0];

  return (
    <section id="about" className="py-24 relative bg-warm-ambient bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#101225] border border-[#1F2442] text-[#EC4899] font-sans text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck size={14} className="text-[#8B5CF6]" />
            <span>01 // PERSPECTIVE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC] dark:text-[#F8FAFC] tracking-tight">
            About & Technical Focus
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] mt-3 rounded-full" />
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
                      ? 'bg-[#101225] border-[#8B5CF6] text-[#F8FAFC] font-bold shadow-[0_0_20px_rgba(139,92,246,0.25)]'
                      : 'bg-[#070A18]/70 border-[#1F2442] text-[#CBD5E1] hover:text-[#F8FAFC] hover:border-[#8B5CF6]/50'
                  }`}
                >
                  <span className="font-display font-semibold text-sm">
                    {tab.label}
                  </span>
                  <ArrowRight
                    size={16}
                    className={`transition-transform ${
                      isActive ? 'text-[#EC4899] translate-x-1' : 'text-[#94A3B8] group-hover:text-[#8B5CF6]'
                    }`}
                  />
                </button>
              );
            })}

            {/* Academic Summary Badge Box */}
            <div className="p-4.5 rounded-2xl bg-[#101225] border border-[#1F2442] text-xs font-sans text-[#F8FAFC] space-y-2 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-[#94A3B8]">INSTITUTION</span>
                <span className="font-bold text-[#F8FAFC]">SKCT, Coimbatore</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#94A3B8]">BATCH</span>
                <span className="font-bold text-[#F8FAFC]">2024–2028</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#94A3B8]">CGPA SCORE</span>
                <span className="font-extrabold text-[#F8FAFC] bg-[#8B5CF6]/20 px-2.5 py-0.5 rounded border border-[#8B5CF6]/40">8.18 / 10</span>
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
                <span className="px-3.5 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#EC4899] text-xs font-bold uppercase tracking-wider inline-block">
                  {selectedContent.label}
                </span>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#F8FAFC] leading-tight">
                  {selectedContent.heading}
                </h3>

                <p className="text-[#CBD5E1] text-base sm:text-lg leading-relaxed font-sans font-normal">
                  {selectedContent.content}
                </p>
              </div>

              {/* Core Competencies Pills */}
              <div className="pt-6 border-t border-[#1F2442] flex flex-wrap gap-2.5 text-xs font-sans">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#070A18] border border-[#1F2442] text-[#F8FAFC] font-semibold flex items-center space-x-1.5 shadow-xs">
                  <CheckCircle2 size={14} className="text-[#8B5CF6]" />
                  <span>Java & Spring Boot APIs</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#070A18] border border-[#1F2442] text-[#F8FAFC] font-semibold flex items-center space-x-1.5 shadow-xs">
                  <CheckCircle2 size={14} className="text-[#EC4899]" />
                  <span>React Frontend Engineering</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#070A18] border border-[#1F2442] text-[#F8FAFC] font-semibold flex items-center space-x-1.5 shadow-xs">
                  <CheckCircle2 size={14} className="text-[#8B5CF6]" />
                  <span>MySQL Relational Databases</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#070A18] border border-[#1F2442] text-[#F8FAFC] font-semibold flex items-center space-x-1.5 shadow-xs">
                  <CheckCircle2 size={14} className="text-[#EC4899]" />
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
