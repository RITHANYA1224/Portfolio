import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowUpRight, CheckCircle2, Calendar, FileCheck, Download } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import CertificationModal from './CertificationModal';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-mono-tag text-xs font-semibold uppercase tracking-widest mb-3">
            <Award size={14} />
            <span>07 // CREDENTIAL ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight theme-heading">
            Certifications & Verification
          </h2>
          <p className="theme-muted text-sm sm:text-base mt-2">
            Verified course certifications with official credentials, completion certificates, and verification links.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mt-4 rounded-full" />
        </div>

        {/* Certification Archive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => setSelectedCert(cert)}
              className={`editorial-card p-5 sm:p-6 rounded-2xl flex items-center justify-between gap-4 cursor-pointer group shadow-sm transition-all hover:scale-[1.01] ${
                cert.certificateImage
                  ? 'border-purple-500/30 dark:border-purple-500/25 hover:border-purple-500/60'
                  : 'hover:border-purple-500/40'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 flex items-center justify-center font-mono-tag text-xs font-bold shrink-0">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-mono-tag text-emerald-800 dark:text-emerald-300 font-bold uppercase tracking-wider">
                      {cert.category}
                    </span>
                    {cert.certificateImage && (
                      <span className="px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-[10px] font-mono-tag font-semibold flex items-center space-x-1">
                        <FileCheck size={10} />
                        <span>Certificate</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold font-heading theme-heading group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors leading-snug mt-0.5">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs theme-muted font-mono-tag mt-1">
                    <span>ISSUER: {cert.issuer.toUpperCase()}</span>
                    {cert.date && (
                      <span className="flex items-center space-x-1 text-purple-600 dark:text-purple-300 font-semibold">
                        <Calendar size={11} />
                        <span>{cert.date}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-1.5 text-xs font-mono-tag font-bold text-purple-700 dark:text-purple-300 group-hover:text-purple-600 transition-colors shrink-0">
                <span className="hidden sm:inline">
                  {cert.certificateImage ? 'VIEW & DOWNLOAD' : 'VIEW'}
                </span>
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <CertificationModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Certifications;
