import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

// Alternating subtle lavender/pink pastel accent system
const accentStyles = [
  {
    badgeBg: 'bg-[#8E55F7]/20',
    badgeBorder: 'border-[#8E55F7]',
    accentText: 'text-[#8E55F7]',
    cardBorderHover: 'hover:border-[#8E55F7]'
  },
  {
    badgeBg: 'bg-[#ED7BC9]/20',
    badgeBorder: 'border-[#ED7BC9]',
    accentText: 'text-[#ED7BC9]',
    cardBorderHover: 'hover:border-[#ED7BC9]'
  },
  {
    badgeBg: 'bg-[#D562F2]/20',
    badgeBorder: 'border-[#D562F2]',
    accentText: 'text-[#D562F2]',
    cardBorderHover: 'hover:border-[#D562F2]'
  },
  {
    badgeBg: 'bg-[#8E55F7]/20',
    badgeBorder: 'border-[#8E55F7]',
    accentText: 'text-[#8E55F7]',
    cardBorderHover: 'hover:border-[#8E55F7]'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative bg-[#191424]/40 dark:bg-[#191424]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1F1B2C] border border-[#3A2E50] text-[#ED7BC9] font-sans text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 size={14} className="text-[#8E55F7]" />
            <span>03 // FEATURED WORK & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F5EFFB] dark:text-[#F5EFFB] tracking-tight">
            Selected Engineering Projects
          </h2>
          <p className="text-[#C3B8D4] text-sm sm:text-base mt-2 font-sans font-normal">
            In-depth software applications ranging from full-stack agri-tourism platforms to HRIS portals, industrial digital twins, and supply chain control towers.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#8E55F7] via-[#D562F2] to-[#ED7BC9] mt-3 rounded-full" />
        </div>

        {/* 1. FEATURED PROJECT HERO SHOWCASE */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 warm-card rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden group border-2 border-[#8E55F7]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-2xl font-extrabold text-[#F5EFFB]">
                    {featuredProject.number}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-[#8E55F7]/20 border border-[#8E55F7] text-[#ED7BC9] text-xs font-sans font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-sm">
                    <Sparkles size={12} className="text-[#ED7BC9]" />
                    <span>Featured Showcase</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#F5EFFB] group-hover:text-[#ED7BC9] transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-[#C3B8D4] text-sm sm:text-base mt-3 leading-relaxed font-sans font-normal">
                    {featuredProject.shortDesc}
                  </p>
                </div>

                {/* Problem Teaser */}
                <div className="p-4.5 rounded-2xl bg-[#121018] border border-[#3A2E50] text-xs space-y-2 text-[#C3B8D4]">
                  <div className="font-sans font-bold text-[#8E55F7] uppercase tracking-wider">
                    PROBLEM SOLVED & ARCHITECTURE
                  </div>
                  <p className="leading-relaxed font-sans font-normal">
                    {featuredProject.details.problem}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-[#121018] border border-[#3A2E50] text-[#F5EFFB] text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#3A2E50]">
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="flex items-center space-x-2 px-6 py-3.5 rounded-full btn-gradient-primary font-sans font-bold text-xs sm:text-sm shadow-sm"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={16} />
                  </button>

                  {featuredProject.details?.github && (
                    <a
                      href={featuredProject.details.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 px-4 py-3.5 rounded-full bg-[#121018] text-[#F5EFFB] font-sans font-semibold text-xs sm:text-sm border border-[#3A2E50] hover:border-[#ED7BC9] transition-colors"
                    >
                      <GithubIcon size={16} />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Architectural Panel */}
              <div className="lg:col-span-5 relative">
                <div className="p-6 rounded-2xl bg-[#121018] border border-[#3A2E50] space-y-4 font-sans text-xs text-[#F5EFFB]">
                  <div className="flex items-center justify-between border-b border-[#3A2E50] pb-3">
                    <span className="font-bold flex items-center space-x-2">
                      <ShieldCheck size={16} className="text-[#8E55F7]" />
                      <span>FULL-STACK REST ARCHITECTURE</span>
                    </span>
                    <span className="text-[#F5EFFB] text-[10px] bg-[#8E55F7]/20 border border-[#8E55F7]/40 px-2 py-0.5 rounded font-bold">
                      React + Spring Boot
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-[#191424] border border-[#3A2E50] flex justify-between">
                      <span className="text-[#8E82A3]">Frontend UI:</span>
                      <span className="font-bold">React.js Single Page App</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#191424] border border-[#3A2E50] flex justify-between">
                      <span className="text-[#8E82A3]">Backend Service:</span>
                      <span className="font-bold">Spring Boot REST Controller</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#191424] border border-[#3A2E50] flex justify-between">
                      <span className="text-[#8E82A3]">ORM Persistence:</span>
                      <span className="font-bold">Hibernate JPA / Spring Data</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#191424] border border-[#3A2E50] flex justify-between">
                      <span className="text-[#8E82A3]">Database Engine:</span>
                      <span className="font-bold">MySQL Relational DB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. OTHER PROJECTS EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, idx) => {
            const accent = accentStyles[(idx + 1) % accentStyles.length];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`warm-card p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between group shadow-sm ${accent.cardBorderHover}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-extrabold text-[#F5EFFB]">
                      {project.number}
                    </span>
                    {project.details?.github && (
                      <a
                        href={project.details.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-full bg-[#121018] border border-[#3A2E50] text-[#F5EFFB] hover:border-[#ED7BC9] transition-colors"
                        aria-label="GitHub Repo"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5EFFB] group-hover:text-[#ED7BC9] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#C3B8D4] text-xs sm:text-sm mt-2 leading-relaxed font-sans font-normal">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#121018] border border-[#3A2E50] text-[#F5EFFB] text-xs font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#3A2E50] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center space-x-1.5 text-xs font-sans font-extrabold text-[#F5EFFB] hover:text-[#ED7BC9] transition-colors"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Case Study Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
