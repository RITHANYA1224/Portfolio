import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowUpRight } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import CertificationModal from './CertificationModal';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative bg-[#191424]/40 dark:bg-[#191424]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1F1B2C] border border-[#3A2E50] text-[#ED7BC9] font-sans text-xs font-semibold uppercase tracking-wider mb-3">
            <Award size={14} className="text-[#8E55F7]" />
            <span>07 // VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5EFFB] dark:text-[#F5EFFB] tracking-tight">
            Certifications Gallery
          </h2>
          <p className="text-[#C3B8D4] text-sm sm:text-base mt-2 font-sans font-normal">
            Verified course credentials from AWS, IBM, Google, Infosys Springboard, University of Alberta, and NPTEL.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#8E55F7] via-[#D562F2] to-[#ED7BC9] mt-3 rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => setSelectedCert(cert)}
              className="warm-card p-6 rounded-3xl flex flex-col justify-between cursor-pointer group shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#3A2E50] pb-3">
                  <span className="px-3 py-0.5 rounded-full bg-[#8E55F7]/20 border border-[#8E55F7]/40 text-[#ED7BC9] text-xs font-bold">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-[#8E82A3] font-bold">
                    {cert.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-[#F5EFFB] group-hover:text-[#ED7BC9] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-sans font-bold text-[#C3B8D4] mt-2">
                    {cert.issuer}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#3A2E50] flex items-center justify-between">
                <span className="text-xs font-sans font-bold text-[#F5EFFB] group-hover:text-[#ED7BC9] transition-colors flex items-center space-x-1">
                  <span>View Certificate</span>
                  <ArrowUpRight size={14} />
                </span>
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
