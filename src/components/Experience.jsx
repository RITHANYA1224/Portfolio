import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Image as ImageIcon, Eye, X, Download, ExternalLink, FileCheck, Layers, Award } from 'lucide-react';
import { experience } from '../data/portfolioData';

const Experience = () => {
  const [showAllModal, setShowAllModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const exp = experience[0];
  const featuredPhoto = exp?.photos?.[0]; // 01-workstation-desk.png

  const categories = [
    { id: 'all', label: 'All Documents (8)' },
    { id: 'certificates', label: 'Certificates (4)' },
    { id: 'photos', label: 'Working Photos (3)' },
    { id: 'letters', label: 'Acceptance (1)' }
  ];

  const getFilteredPhotos = () => {
    if (!exp?.photos) return [];
    if (activeCategory === 'all') return exp.photos;
    if (activeCategory === 'certificates') {
      return exp.photos.filter(p => p.title.toLowerCase().includes('certificate'));
    }
    if (activeCategory === 'photos') {
      return exp.photos.filter(p => p.title.toLowerCase().includes('desk') || p.title.toLowerCase().includes('lab') || p.title.toLowerCase().includes('session'));
    }
    if (activeCategory === 'letters') {
      return exp.photos.filter(p => p.title.toLowerCase().includes('acceptance'));
    }
    return exp.photos;
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-mono-tag text-xs font-semibold uppercase tracking-widest mb-3">
            <Briefcase size={14} />
            <span>05 // INDUSTRY EXPOSURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight theme-heading">
            Internship Experience
          </h2>
          <p className="theme-muted text-sm sm:text-base mt-2">
            Applied data engineering, data cleaning, visualization, and analytics reporting in industry.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mt-4 rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="editorial-card p-6 sm:p-10 rounded-3xl space-y-8 shadow-2xl"
          >
            {/* Role Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b theme-border pb-6">
              <div>
                <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 font-mono-tag text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                  INTERNSHIP ROLE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading theme-heading">
                  {exp.role}
                </h3>
                <div className="text-lg font-semibold text-purple-700 dark:text-purple-300 mt-1">
                  {exp.company}
                </div>
              </div>

              <div className="space-y-1 text-left sm:text-right font-mono-tag text-xs theme-muted">
                <div className="flex items-center space-x-1.5 justify-start sm:justify-end text-purple-700 dark:text-purple-300 font-semibold">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center space-x-1.5 justify-start sm:justify-end theme-muted">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Featured Working Image Showcase & View All Action */}
            {featuredPhoto && (
              <div className="rounded-3xl p-5 bg-slate-100/80 dark:bg-slate-900/60 border border-purple-500/30 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Working Photo Outside */}
                <div
                  onClick={() => setSelectedPhoto(featuredPhoto)}
                  className="md:col-span-6 relative rounded-2xl overflow-hidden border-2 border-purple-500/40 h-56 cursor-pointer group shadow-lg"
                >
                  <img
                    src={featuredPhoto.url}
                    alt={featuredPhoto.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-white font-mono-tag text-[11px] font-semibold border border-white/20 backdrop-blur-md">
                    📍 Live Workstation
                  </div>
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-white/90 text-slate-900 text-xs font-bold font-mono-tag flex items-center space-x-1.5 shadow-xl">
                      <Eye size={14} />
                      <span>Enlarge Photo</span>
                    </span>
                  </div>
                </div>

                {/* Info and Modal Open Button */}
                <div className="md:col-span-6 space-y-4 text-left">
                  <div>
                    <span className="text-xs font-mono-tag text-purple-600 dark:text-purple-300 font-bold uppercase tracking-wider block mb-1">
                      HANDS-ON WORKSPACE & CREDENTIALS
                    </span>
                    <h4 className="text-xl font-bold font-heading theme-heading">
                      Data Analytics Project & Lab Engagement
                    </h4>
                    <p className="text-xs theme-muted mt-1 leading-relaxed">
                      Conducted exploratory data analysis, dashboard structuring, and analytics workshops on site in Ram Nagar, Coimbatore.
                    </p>
                  </div>

                  {/* Prominent Separate Button to View All Certificates & Documents */}
                  <button
                    onClick={() => setShowAllModal(true)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-mono-tag font-bold text-xs sm:text-sm flex items-center justify-center space-x-2.5 shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    <Layers size={16} />
                    <span>VIEW ALL INTERNSHIP CERTIFICATES & IMAGES ({exp.photos?.length || 8})</span>
                  </button>
                </div>
              </div>
            )}

            {/* Responsibilities & Deliverables Grid */}
            <div className="space-y-4">
              <span className="text-xs font-mono-tag theme-subtle uppercase tracking-widest block font-semibold">
                KEY DELIVERABLES & IMPACT
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exp.deliverables.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-purple-500/40 transition-all"
                  >
                    <div className="flex items-center space-x-2 text-purple-700 dark:text-purple-300 font-mono-tag font-bold text-xs">
                      <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs theme-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 1. Modal: View ALL 8 Internship Certificates & Images */}
        <AnimatePresence>
          {showAllModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl editorial-card p-6 sm:p-8 shadow-2xl my-auto text-left space-y-6"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between border-b theme-border pb-4 pr-8">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-mono-tag text-purple-600 dark:text-purple-300 font-bold uppercase mb-1">
                      <Award size={15} />
                      <span>Ytock & Appin Technology Lab</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading theme-heading">
                      Internship Certificates & Verification Archive
                    </h3>
                    <p className="text-xs sm:text-sm theme-muted mt-1">
                      Official course completion certificates, workshop credentials, attendance records, and workspace activities.
                    </p>
                  </div>

                  <button
                    onClick={() => setShowAllModal(false)}
                    className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 theme-heading hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-tag font-semibold transition-all ${
                        activeCategory === cat.id
                          ? 'bg-purple-600 text-white shadow-md'
                          : 'bg-slate-100 dark:bg-slate-900/60 theme-muted hover:text-purple-600 dark:hover:text-purple-300 border border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Documents Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {getFilteredPhotos().map((photo, pIdx) => (
                    <div
                      key={pIdx}
                      className="group/card rounded-2xl overflow-hidden border-2 border-purple-500/20 bg-slate-950/20 shadow-md flex flex-col justify-between hover:border-purple-500/60 transition-all hover:scale-[1.02]"
                    >
                      <div
                        onClick={() => setSelectedPhoto(photo)}
                        className="h-44 w-full overflow-hidden bg-slate-950/40 relative cursor-pointer"
                      >
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                          <span className="px-3 py-1.5 rounded-xl bg-white/90 text-slate-900 text-xs font-bold font-mono-tag flex items-center space-x-1 shadow-lg">
                            <Eye size={13} />
                            <span>Preview</span>
                          </span>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-100/90 dark:bg-slate-900/90 border-t theme-border space-y-2">
                        <div>
                          <div className="text-xs font-bold font-heading theme-heading truncate">
                            {photo.title}
                          </div>
                          <div className="text-[11px] theme-muted line-clamp-2 font-sans mt-0.5">
                            {photo.caption}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => setSelectedPhoto(photo)}
                            className="flex-1 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-mono-tag text-[11px] font-bold transition-colors text-center"
                          >
                            View
                          </button>
                          <a
                            href={photo.url}
                            download={photo.title.replace(/[^a-zA-Z0-9]/g, '_') + '.png'}
                            className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 theme-heading hover:bg-purple-500/20 transition-colors"
                            title="Download"
                          >
                            <Download size={13} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* 2. Lightbox Single Photo Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-slate-950/95 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl max-h-[92vh] editorial-card p-5 sm:p-7 rounded-3xl overflow-y-auto shadow-2xl flex flex-col items-center my-auto"
              >
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 p-2 rounded-full border border-slate-200 dark:border-slate-800 theme-heading hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors z-20"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                <div className="self-start pr-12 mb-3">
                  <div className="flex items-center space-x-2 text-xs font-mono-tag text-purple-600 dark:text-purple-300 font-bold uppercase mb-1">
                    <FileCheck size={14} />
                    <span>Internship Document View</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading theme-heading">
                    {selectedPhoto.title}
                  </h3>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-[65vh] bg-black/60 shadow-xl w-full flex items-center justify-center">
                  <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.title}
                    className="w-full h-auto max-h-[65vh] object-contain mx-auto"
                  />
                </div>

                <p className="text-xs sm:text-sm theme-muted mt-4 text-center max-w-2xl font-sans">
                  {selectedPhoto.caption}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 mt-5 w-full">
                  <a
                    href={selectedPhoto.url}
                    download={selectedPhoto.title.replace(/[^a-zA-Z0-9]/g, '_') + '.png'}
                    className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold font-mono-tag flex items-center space-x-2 shadow-md hover:scale-105 transition-all"
                  >
                    <Download size={14} />
                    <span>DOWNLOAD FILE</span>
                  </a>

                  <a
                    href={selectedPhoto.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl editorial-card theme-heading text-xs font-bold font-mono-tag flex items-center space-x-2 hover:scale-105 transition-all"
                  >
                    <ExternalLink size={14} />
                    <span>OPEN FULL VIEW</span>
                  </a>

                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 theme-heading hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-mono-tag font-semibold transition-colors"
                  >
                    CLOSE
                  </button>
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
