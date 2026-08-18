import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Flame, ExternalLink, Calendar, MapPin, Eye, X, Image as ImageIcon } from 'lucide-react';
import { achievements, personalData } from '../data/portfolioData';

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-mono-tag text-xs font-semibold uppercase tracking-widest mb-3">
            <Trophy size={14} />
            <span>06 // EVENTS, HACKATHONS & CODING PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight theme-heading">
            Events & Hackathons
          </h2>
          <p className="theme-muted text-sm sm:text-base mt-2">
            Project showcases, technical presentations, competitive hackathons, and daily Java coding consistency.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mt-4 rounded-full" />
        </div>

        {/* 1. LEETCODE STREAK CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 editorial-card p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border-2 border-amber-500/40"
        >
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 shadow-inner">
              <Flame size={36} className="animate-pulse" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-800 dark:text-amber-300 font-mono-tag text-xs font-bold uppercase tracking-wider mb-1 inline-block">
                JAVA CODING CONSISTENCY
              </span>
              <h3 className="text-2xl font-extrabold font-heading theme-heading">
                {achievements.leetcodeStreak.title}
              </h3>
              <p className="text-xs sm:text-sm theme-muted mt-1 max-w-xl font-sans">
                {achievements.leetcodeStreak.desc}
              </p>
            </div>
          </div>

          <a
            href={personalData.leetcode}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm transition-all shrink-0 shadow-md font-mono-tag flex items-center space-x-2 hover:scale-105"
          >
            <span>LeetCode Profile</span>
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* 2. HACKATHONS & EVENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.hackathons.map((h, idx) => (
            <motion.div
              key={h.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`editorial-card p-6 sm:p-7 rounded-3xl space-y-4 shadow-lg group flex flex-col justify-between ${
                h.images && h.images.length > 0 ? 'border-purple-500/40 dark:border-purple-500/30' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b theme-border pb-3">
                  <span className="text-xs font-mono-tag font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
                    {h.tag}
                  </span>
                  <div className="flex items-center space-x-2">
                    {h.date && (
                      <span className="text-xs font-mono-tag text-purple-700 dark:text-purple-300 font-semibold flex items-center space-x-1 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                        <Calendar size={11} />
                        <span>{h.date}</span>
                      </span>
                    )}
                    <span className="text-xs font-mono-tag text-emerald-700 dark:text-emerald-400 font-semibold uppercase bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      {h.role}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold font-heading theme-heading group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {h.title}
                  </h4>
                  <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 mt-1 flex items-center space-x-1.5">
                    <MapPin size={12} />
                    <span>{h.organization}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm theme-body leading-relaxed font-sans">
                  {h.desc}
                </p>

                {/* Event Photo Showcase Gallery */}
                {h.images && h.images.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs font-mono-tag theme-muted">
                      <span className="flex items-center space-x-1 font-semibold text-purple-600 dark:text-purple-300">
                        <ImageIcon size={13} />
                        <span>Event Photographs & Certificate</span>
                      </span>
                    </div>

                    <div className={`grid gap-3 ${h.images.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                      {h.images.map((imgUrl, imgIdx) => (
                        <div
                          key={imgIdx}
                          onClick={() => setSelectedImage({ url: imgUrl, title: `${h.title} — Item ${imgIdx + 1}`, caption: h.desc })}
                          className="relative rounded-2xl overflow-hidden border-2 border-purple-500/25 h-32 cursor-pointer group/img shadow-md hover:border-purple-500/60 transition-all hover:scale-[1.02]"
                        >
                          <img
                            src={imgUrl}
                            alt={`${h.title} item ${imgIdx + 1}`}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                            <span className="p-2 rounded-xl bg-white/90 text-slate-900 shadow-lg">
                              <Eye size={16} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-Screen Image Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl max-h-[92vh] editorial-card p-4 sm:p-6 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full border border-slate-200 dark:border-slate-800 theme-heading hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors z-20"
                  aria-label="Close photo"
                >
                  <X size={20} />
                </button>

                <h3 className="text-base sm:text-lg font-bold font-heading theme-heading mb-3 self-start pr-10">
                  {selectedImage.title}
                </h3>

                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-[70vh] bg-black/50">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>

                <p className="text-xs sm:text-sm theme-muted mt-3 text-center max-w-xl font-sans">
                  {selectedImage.caption}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Achievements;
