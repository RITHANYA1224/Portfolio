import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ArrowRight } from 'lucide-react';
import { aboutTabs } from '../data/portfolioData';
import BeyondCode from './BeyondCode';


const About = () => {
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id);

  const selectedContent = aboutTabs.find((t) => t.id === activeTab) || aboutTabs[0];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-mono-tag text-xs font-semibold uppercase tracking-widest mb-3">
            <UserCheck size={14} />
            <span>01 // PERSPECTIVE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight theme-heading">
            About & Technical Focus
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mt-4 rounded-full" />
        </div>

        {/* Interactive Editorial Tab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selector Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {aboutTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? 'bg-purple-500/15 border-purple-500/40 theme-heading shadow-md font-semibold'
                      : 'editorial-card theme-muted hover:theme-heading'
                  }`}
                >
                  <span className="font-heading font-semibold text-sm">
                    {tab.label}
                  </span>
                  <ArrowRight
                    size={16}
                    className={`transition-transform ${
                      isActive ? 'text-purple-600 dark:text-purple-300 translate-x-1' : 'theme-muted group-hover:theme-heading'
                    }`}
                  />
                </button>
              );
            })}

            {/* Metrics Box */}
            <div className="p-4 rounded-2xl editorial-card text-xs font-mono-tag space-y-2 mt-4">
              <div className="flex justify-between items-center theme-body">
                <span>INSTITUTION</span>
                <span className="text-purple-700 dark:text-purple-300 font-bold">SKCT</span>
              </div>
              <div className="flex justify-between items-center theme-body">
                <span>BATCH</span>
                <span className="text-emerald-700 dark:text-emerald-300 font-bold">2024–2028</span>
              </div>
              <div className="flex justify-between items-center theme-body">
                <span>ACADEMIC SCORE</span>
                <span className="text-amber-700 dark:text-amber-300 font-bold">8.18 CGPA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Display Card */}
          <div className="lg:col-span-8">
            <motion.div
              key={selectedContent.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="editorial-card p-6 sm:p-10 rounded-3xl space-y-6 shadow-xl relative min-h-[320px] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 font-mono-tag text-xs font-semibold uppercase">
                  {selectedContent.label}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading theme-heading leading-tight">
                  {selectedContent.heading}
                </h3>

                <p className="theme-body text-base sm:text-lg leading-relaxed font-sans">
                  {selectedContent.content}
                </p>
              </div>

              {/* Core Skill Pills */}
              <div className="pt-6 border-t theme-border flex flex-wrap gap-2 text-xs font-mono-tag">
                <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-medium">
                  Java & Spring Boot
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-medium">
                  React Applications
                </span>
                <span className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-800 dark:text-sky-300 font-medium">
                  SQL & DBMS
                </span>
                <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 font-medium">
                  Data Analytics
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Embedded Beyond Code Section */}
        <BeyondCode />
      </div>
    </section>
  );
};

export default About;

