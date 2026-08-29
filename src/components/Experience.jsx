import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ImageIcon, Eye, X, Download } from 'lucide-react';
import { experience } from '../data/portfolioData';

const Experience = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const getUrl = (img) => (typeof img === 'string' ? img : img.url);
  const getTitle = (img) => (typeof img === 'string' ? 'Internship Document' : img.title || img.label || 'Internship Document');
  const getCaption = (img) => (typeof img === 'string' ? '' : img.caption || '');

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1F1B2C] border border-[#3A2E50] text-[#ED7BC9] font-sans text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase size={14} className="text-[#8E55F7]" />
            <span>04 // INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5EFFB] dark:text-[#F5EFFB] tracking-tight">
            Internship Timeline & Verification
          </h2>
          <p className="text-[#C3B8D4] text-sm sm:text-base mt-2 font-sans font-normal">
            Practical data analytics, exploratory analysis, visualization, and business intelligence reporting.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#8E55F7] via-[#D562F2] to-[#ED7BC9] mt-3 rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-5xl">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="warm-card p-6 sm:p-10 rounded-3xl space-y-8 shadow-sm"
            >
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#3A2E50] pb-6">
                <div>
                  <span className="px-3.5 py-1 rounded-full bg-[#8E55F7]/20 border border-[#8E55F7]/40 text-[#ED7BC9] text-xs font-sans font-bold uppercase tracking-wider mb-2 inline-block">
                    DATA ANALYTICS INTERNSHIP
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F5EFFB]">
                    {exp.role}
                  </h3>
                  <div className="text-lg font-display italic text-[#ED7BC9] mt-1 font-semibold">
                    {exp.company}
                  </div>
                </div>

                <div className="space-y-1 text-left sm:text-right font-sans text-xs text-[#C3B8D4]">
                  <div className="flex items-center space-x-1.5 justify-start sm:justify-end text-[#F5EFFB] font-bold">
                    <Calendar size={14} className="text-[#8E55F7]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 justify-start sm:justify-end text-[#C3B8D4]">
                    <MapPin size={14} className="text-[#ED7BC9]" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div className="space-y-4">
                <span className="text-xs font-sans font-bold text-[#F5EFFB] uppercase tracking-wider block">
                  KEY DELIVERABLES & IMPACT
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {exp.deliverables.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-4 rounded-2xl bg-[#121018] border border-[#3A2E50] space-y-2 hover:border-[#8E55F7] transition-all"
                    >
                      <div className="flex items-center space-x-2 text-[#F5EFFB] font-sans font-semibold text-xs">
                        <CheckCircle2 size={14} className="text-[#8E55F7] shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-[#C3B8D4] leading-relaxed font-sans font-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internship Photos Clean Grid */}
              {exp.photos && exp.photos.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-[#3A2E50]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-sans font-bold text-[#F5EFFB] uppercase tracking-wider flex items-center space-x-2">
                      <ImageIcon size={15} className="text-[#8E55F7]" />
                      <span>INTERNSHIP VERIFICATION & CERTIFICATES ({exp.photos.length})</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {exp.photos.map((photo, pIdx) => {
                      const url = getUrl(photo);
                      const title = getTitle(photo);
                      return (
                        <div
                          key={pIdx}
                          onClick={() => setSelectedPhoto(photo)}
                          className="group relative rounded-2xl overflow-hidden border border-[#3A2E50] bg-[#121018] aspect-4/3 cursor-pointer shadow-xs hover:border-[#ED7BC9] transition-all"
                        >
                          <img
                            src={url}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-[#121018]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                            <span className="px-3 py-1 rounded-full bg-[#8E55F7] text-white text-[11px] font-sans font-bold flex items-center space-x-1 shadow-md">
                              <Eye size={12} />
                              <span>View</span>
                            </span>
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

        {/* Internship Document Preview Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121018]/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#191424] border border-[#3A2E50] p-6 shadow-2xl text-[#F5EFFB]"
              >
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-5 right-5 p-2.5 rounded-full bg-[#121018] text-[#F5EFFB] border border-[#3A2E50] hover:border-[#ED7BC9] transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="space-y-4">
                  <div className="text-xs font-mono font-bold text-[#8E82A3]">
                    INTERNSHIP DOCUMENT PREVIEW
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#F5EFFB]">
                    {getTitle(selectedPhoto)}
                  </h3>

                  <div className="rounded-2xl overflow-hidden border border-[#3A2E50] bg-black/20 flex items-center justify-center max-h-[60vh]">
                    <img
                      src={getUrl(selectedPhoto)}
                      alt={getTitle(selectedPhoto)}
                      className="max-h-[60vh] w-auto object-contain"
                    />
                  </div>

                  {getCaption(selectedPhoto) && (
                    <p className="text-xs sm:text-sm text-[#C3B8D4] font-sans leading-relaxed font-normal">
                      {getCaption(selectedPhoto)}
                    </p>
                  )}

                  <div className="pt-4 border-t border-[#3A2E50] flex justify-between items-center">
                    <a
                      href={getUrl(selectedPhoto)}
                      download
                      className="px-5 py-2.5 rounded-full btn-gradient-primary font-sans font-bold text-xs flex items-center space-x-1.5 shadow-sm"
                    >
                      <Download size={14} />
                      <span>Download Document</span>
                    </a>
                    <button
                      onClick={() => setSelectedPhoto(null)}
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

export default Experience;
