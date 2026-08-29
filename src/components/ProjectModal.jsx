import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const { details } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#070A18]/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#101225] border border-[#1F2442] p-6 sm:p-10 shadow-2xl text-[#F8FAFC]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-[#070A18] text-[#F8FAFC] border border-[#1F2442] hover:border-[#EC4899] transition-colors"
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="space-y-4 pb-6 border-b border-[#1F2442]">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs font-bold text-[#94A3B8]">
                PROJECT {project.number} CASE STUDY
              </span>
              {project.featured && (
                <span className="px-3 py-0.5 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6] text-[#EC4899] text-xs font-bold uppercase">
                  ★ Featured Architecture
                </span>
              )}
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F8FAFC]">
              {project.title}
            </h2>
            <p className="text-[#CBD5E1] text-base font-sans leading-relaxed font-normal">
              {project.subtitle}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-[#070A18] border border-[#1F2442] text-[#F8FAFC] text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Editorial Case Study Content */}
          <div className="py-6 space-y-8">
            {/* Problem & Approach */}
            {details && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#070A18] border border-[#1F2442] space-y-2">
                  <span className="text-xs font-sans font-bold text-[#EC4899] uppercase tracking-wider block">
                    01 // THE PROBLEM STATEMENT
                  </span>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed font-normal">
                    {details.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#070A18] border border-[#1F2442] space-y-2">
                  <span className="text-xs font-sans font-bold text-[#8B5CF6] uppercase tracking-wider block">
                    02 // ARCHITECTURAL APPROACH
                  </span>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed font-normal">
                    {details.approach}
                  </p>
                </div>
              </div>
            )}

            {/* Implementation Details */}
            {details?.implementation && (
              <div className="p-5 rounded-2xl bg-[#070A18] border border-[#1F2442] space-y-3">
                <span className="text-xs font-sans font-bold text-[#8B5CF6] uppercase tracking-wider block">
                  03 // SYSTEM IMPLEMENTATION & TECH STACK
                </span>
                <p className="text-sm text-[#CBD5E1] leading-relaxed font-normal">
                  {details.implementation}
                </p>
                {details.technology && (
                  <div className="pt-2 text-xs font-sans text-[#94A3B8]">
                    <strong className="text-[#F8FAFC]">Tech Stack:</strong> {details.technology}
                  </div>
                )}
              </div>
            )}

            {/* Key Deliverables */}
            {details?.keyFeatures && (
              <div className="space-y-3">
                <span className="text-xs font-sans font-bold text-[#F8FAFC] uppercase tracking-wider block">
                  04 // KEY DELIVERABLES & FEATURES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {details.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#070A18] border border-[#1F2442] flex items-start space-x-2.5 text-xs sm:text-sm text-[#CBD5E1] font-medium"
                    >
                      <CheckCircle size={16} className="text-[#EC4899] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcome */}
            {details?.outcome && (
              <div className="p-5 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6] space-y-2">
                <span className="text-xs font-sans text-[#F8FAFC] font-bold uppercase tracking-wider block">
                  05 // PROJECT IMPACT & OUTCOME
                </span>
                <p className="text-sm text-[#F8FAFC] leading-relaxed font-normal">
                  {details.outcome}
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-[#1F2442] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              {details?.github && (
                <a
                  href={details.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full btn-gradient-primary font-sans font-bold text-xs sm:text-sm shadow-sm"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository</span>
                </a>
              )}
              {details?.live && (
                <a
                  href={details.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#070A18] border border-[#8B5CF6] text-[#F8FAFC] font-sans font-semibold text-xs sm:text-sm shadow-sm hover:border-[#EC4899]"
                >
                  <ExternalLink size={16} className="text-[#EC4899]" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#070A18] border border-[#1F2442] text-[#F8FAFC] font-sans font-semibold text-xs sm:text-sm"
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
