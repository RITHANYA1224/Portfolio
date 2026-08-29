import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Flame, ExternalLink, Eye, X, Download } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const getImageUrl = (img) => (typeof img === 'string' ? img : img.url);
  const getImageLabel = (img) => (typeof img === 'string' ? 'Showcase Image' : img.label || img.title || 'Showcase Image');
  const getImageCaption = (img) => (typeof img === 'string' ? '' : img.caption || '');

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1F1B2C] border border-[#3A2E50] text-[#ED7BC9] font-sans text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy size={14} className="text-[#8E55F7]" />
            <span>06 // COMPETITIONS & CODING DISCIPLINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5EFFB] dark:text-[#F5EFFB] tracking-tight">
            Hackathons & Achievements
          </h2>
          <p className="text-[#C3B8D4] text-sm sm:text-base mt-2 font-sans font-normal">
            National hackathons, engineering showcases, and daily algorithmic problem-solving discipline.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#8E55F7] via-[#D562F2] to-[#ED7BC9] mt-3 rounded-full" />
        </div>

        {/* 1. LEETCODE CODING STREAK CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 warm-card p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border-2 border-[#8E55F7]"
        >
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 rounded-2xl bg-[#8E55F7]/20 border border-[#8E55F7] flex items-center justify-center text-[#ED7BC9] shrink-0 shadow-[0_0_20px_rgba(142,85,247,0.3)]">
              <Flame size={32} className="animate-pulse" />
            </div>
            <div>
              <span className="px-3 py-0.5 rounded-full bg-[#121018] border border-[#3A2E50] text-[#ED7BC9] font-sans text-xs font-bold uppercase tracking-wider mb-1 inline-block">
                JAVA PROBLEM SOLVING
              </span>
              <h3 className="text-2xl font-display font-bold text-[#F5EFFB]">
                {achievements.leetcodeStreak.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#C3B8D4] mt-1 font-sans font-normal">
                {achievements.leetcodeStreak.desc}
              </p>
            </div>
          </div>

          <a
            href={achievements.leetcodeStreak.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full btn-gradient-primary font-sans font-bold text-xs sm:text-sm shrink-0 flex items-center space-x-1.5 shadow-md"
          >
            <span>Verify LeetCode Profile</span>
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* 2. HACKATHONS & SHOWCASES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.hackathons.map((h, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="warm-card p-6 sm:p-8 rounded-3xl space-y-5 shadow-sm group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#3A2E50] pb-3">
                  <span className="text-xs font-sans font-bold text-[#ED7BC9] uppercase tracking-wider">
                    {h.tag}
                  </span>
                  <span className="text-xs font-mono text-[#8E82A3] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-display font-extrabold text-[#F5EFFB] group-hover:text-[#ED7BC9] transition-colors">
                    {h.title}
                  </h4>
                  <div className="text-xs font-sans font-bold text-[#C3B8D4] mt-1">
                    {h.organization}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#C3B8D4] leading-relaxed font-sans font-normal">
                  {h.desc}
                </p>
              </div>

              {/* Horizontal Image Thumbnails */}
              {h.images && h.images.length > 0 && (
                <div className="pt-4 border-t border-[#3A2E50] space-y-2">
                  <div className="text-[11px] font-sans font-bold text-[#8E82A3] uppercase tracking-wider">
                    EVENT EVIDENCE & CERTIFICATES ({h.images.length})
                  </div>
                  <div className="flex items-center gap-3 overflow-x-auto pb-1">
                    {h.images.map((img, iIdx) => {
                      const url = getImageUrl(img);
                      const label = getImageLabel(img);
                      return (
                        <div
                          key={iIdx}
                          onClick={() => setSelectedImage(img)}
                          className="group/img relative rounded-xl overflow-hidden border border-[#3A2E50] hover:border-[#8E55F7] bg-[#121018] w-24 h-20 shrink-0 cursor-pointer shadow-xs transition-all"
                        >
                          <img
                            src={url}
                            alt={label}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-[#121018]/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <Eye size={16} className="text-[#F5EFFB]" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Preview Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121018]/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#191424] border border-[#3A2E50] p-6 shadow-2xl text-[#F5EFFB]"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-5 right-5 p-2.5 rounded-full bg-[#121018] text-[#F5EFFB] border border-[#3A2E50] hover:border-[#ED7BC9] transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="space-y-4">
                  <div className="text-xs font-mono font-bold text-[#8E82A3]">
                    SHOWCASE IMAGE PREVIEW
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#F5EFFB]">
                    {getImageLabel(selectedImage)}
                  </h3>

                  <div className="rounded-2xl overflow-hidden border border-[#3A2E50] bg-black/20 flex items-center justify-center max-h-[60vh]">
                    <img
                      src={getImageUrl(selectedImage)}
                      alt={getImageLabel(selectedImage)}
                      className="max-h-[60vh] w-auto object-contain"
                    />
                  </div>

                  {getImageCaption(selectedImage) && (
                    <p className="text-xs sm:text-sm text-[#C3B8D4] font-sans leading-relaxed font-normal">
                      {getImageCaption(selectedImage)}
                    </p>
                  )}

                  <div className="pt-4 border-t border-[#3A2E50] flex justify-between items-center">
                    <a
                      href={getImageUrl(selectedImage)}
                      download
                      className="px-5 py-2.5 rounded-full btn-gradient-primary font-sans font-bold text-xs flex items-center space-x-1.5 shadow-sm"
                    >
                      <Download size={14} />
                      <span>Download Image</span>
                    </a>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="px-4 py-2 rounded-full bg-[#121018] text-[#F5EFFB] border border-[#3A2E50] font-sans font-semibold text-xs"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Achievements;
