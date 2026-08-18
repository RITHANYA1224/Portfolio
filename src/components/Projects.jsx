import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowUpRight, Sparkles, Server, Layers, Database, Cpu, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => p.id !== featuredProject?.id);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-mono-tag text-xs font-semibold uppercase tracking-widest mb-3">
            <Code2 size={14} />
            <span>04 // FEATURED WORK & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight theme-heading">
            Selected Projects
          </h2>
          <p className="theme-muted text-sm sm:text-base mt-2">
            Full-stack engineering applications built with Java, Spring Boot, React.js, MySQL, and AI data dashboards.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mt-4 rounded-full" />
        </div>

        {/* 1. FEATURED HERO SHOWCASE */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 rounded-3xl editorial-card border-2 border-purple-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden group"
          >
            {/* Background Accent Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[110px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="font-mono-tag text-3xl font-extrabold text-purple-700 dark:text-purple-400">
                    {featuredProject.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-mono-tag font-semibold uppercase tracking-wider flex items-center space-x-1">
                    <Sparkles size={12} />
                    <span>Featured Showcase</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold font-heading theme-heading group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="theme-body text-sm sm:text-base mt-3 leading-relaxed">
                    {featuredProject.shortDesc}
                  </p>
                </div>

                {/* Problem Teaser */}
                {featuredProject.details?.problem && (
                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs space-y-2 theme-body">
                    <div className="font-mono-tag text-emerald-700 dark:text-emerald-400 font-bold uppercase">
                      Core Contribution & Problem Solved
                    </div>
                    <p className="leading-relaxed theme-muted">
                      {featuredProject.details.problem}
                    </p>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 text-xs font-mono-tag font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t theme-border">
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={16} />
                  </button>

                  {featuredProject.details?.github && (
                    <a
                      href={featuredProject.details.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 px-4 py-3 rounded-xl editorial-card theme-heading font-medium text-xs sm:text-sm transition-colors"
                    >
                      <GithubIcon size={16} />
                      <span>GitHub Repo</span>
                    </a>
                  )}

                  {featuredProject.details?.live && (
                    <a
                      href={featuredProject.details.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Architectural Blueprint Graphic or Project Image */}
              <div className="lg:col-span-5 relative">
                {featuredProject.image ? (
                  <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl group-hover:scale-[1.02] transition-transform">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ) : (
                  <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 space-y-4 font-mono-tag text-xs theme-body">
                    <div className="flex items-center justify-between border-b theme-border pb-3">
                      <span className="text-purple-700 dark:text-purple-300 font-bold flex items-center space-x-2">
                        <Server size={16} className="text-emerald-600 dark:text-emerald-400" />
                        <span>FULL-STACK ARCHITECTURE</span>
                      </span>
                      <span className="text-emerald-800 dark:text-emerald-300 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                        REST APIs
                      </span>
                    </div>

                    <div className="space-y-2.5 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <span className="theme-muted flex items-center space-x-1.5">
                          <Layers size={13} className="text-sky-500" />
                          <span>Frontend UI:</span>
                        </span>
                        <span className="text-purple-700 dark:text-purple-300 font-semibold">React.js Client</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <span className="theme-muted flex items-center space-x-1.5">
                          <Server size={13} className="text-emerald-500" />
                          <span>Backend Engine:</span>
                        </span>
                        <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Spring Boot & REST</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <span className="theme-muted flex items-center space-x-1.5">
                          <Database size={13} className="text-amber-500" />
                          <span>Database Store:</span>
                        </span>
                        <span className="text-amber-700 dark:text-amber-300 font-semibold">MySQL Relational DB</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <span className="theme-muted flex items-center space-x-1.5">
                          <Cpu size={13} className="text-purple-500" />
                          <span>Key Workflows:</span>
                        </span>
                        <span className="text-sky-700 dark:text-sky-300 font-semibold">Bookings & Feedback</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. OTHER PROJECTS EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="editorial-card p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tag text-2xl font-bold theme-muted group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {project.number}
                  </span>
                  {project.details?.github && (
                    <a
                      href={project.details.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 theme-muted hover:theme-heading transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>

                {project.image && (
                  <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 h-44 w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold font-heading theme-heading group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm theme-muted mt-2 leading-relaxed font-sans">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-mono-tag font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t theme-border flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center space-x-1.5 text-xs font-mono-tag font-bold text-purple-700 dark:text-purple-300 hover:text-purple-600 transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
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
