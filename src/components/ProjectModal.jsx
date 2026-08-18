import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const { details } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl editorial-card p-6 sm:p-10 shadow-2xl theme-heading"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-slate-200 dark:border-slate-800 theme-heading hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="space-y-4 pb-6 border-b theme-border">
            <div className="flex items-center space-x-3">
              <span className="font-mono-tag text-purple-700 dark:text-purple-300 font-bold text-sm">
                PROJECT {project.number} CASE STUDY
              </span>
              {project.featured && (
                <span className="px-3 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase">
                  ★ Featured Architecture
                </span>
              )}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading theme-heading">
              {project.title}
            </h2>
            <p className="theme-muted text-base">
              {project.subtitle}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 text-xs font-mono-tag font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Project Image Preview (Future-proof system) */}
          {project.image && (
            <div className="pt-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-80 shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Editorial Case Study Content Sections */}
          <div className="py-6 space-y-8">
            {/* 1. Problem & Approach */}
            {details && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-mono-tag text-rose-700 dark:text-rose-400 font-bold uppercase tracking-wider block">
                    01 // THE PROBLEM STATEMENT
                  </span>
                  <p className="text-sm theme-body leading-relaxed">
                    {details.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-mono-tag text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider block">
                    02 // ARCHITECTURAL APPROACH
                  </span>
                  <p className="text-sm theme-body leading-relaxed">
                    {details.approach}
                  </p>
                </div>
              </div>
            )}

            {/* 2. Implementation & Technology */}
            {details?.implementation && (
              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="text-xs font-mono-tag text-purple-700 dark:text-purple-400 font-bold uppercase tracking-wider block">
                  03 // SYSTEM IMPLEMENTATION DETAILS
                </span>
                <p className="text-sm theme-body leading-relaxed">
                  {details.implementation}
                </p>
                {details.technology && (
                  <div className="pt-2 text-xs font-mono-tag theme-muted">
                    <strong className="theme-heading">Tech Stack Breakdown:</strong> {details.technology}
                  </div>
                )}
              </div>
            )}

            {/* 3. Key Features */}
            {details?.keyFeatures && (
              <div className="space-y-3">
                <span className="text-xs font-mono-tag text-sky-700 dark:text-sky-400 font-bold uppercase tracking-wider block">
                  04 // KEY DELIVERABLES & FEATURES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {details.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-start space-x-2.5 text-xs sm:text-sm theme-body"
                    >
                      <CheckCircle size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Outcome */}
            {details?.outcome && (
              <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20 space-y-2">
                <span className="text-xs font-mono-tag text-purple-700 dark:text-purple-300 font-bold uppercase tracking-wider block">
                  05 // PROJECT IMPACT & OUTCOME
                </span>
                <p className="text-sm theme-body leading-relaxed">
                  {details.outcome}
                </p>
              </div>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t theme-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              {project.details?.github && (
                <a
                  href={project.details.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.details?.live && (
                <a
                  href={project.details.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 theme-heading hover:bg-slate-200 dark:hover:bg-slate-800 font-medium text-xs sm:text-sm transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
