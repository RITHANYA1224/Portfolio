import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, Download } from 'lucide-react';

const CertificationModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070A18]/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#101225] border border-[#1F2442] p-6 sm:p-8 shadow-2xl text-[#F8FAFC]"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-[#070A18] text-[#F8FAFC] border border-[#1F2442] hover:border-[#EC4899] transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2 border-b border-[#1F2442] pb-4">
              <span className="px-3 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#EC4899] text-xs font-sans font-bold uppercase tracking-wider inline-block">
                {cert.category}
              </span>
              <h3 className="text-2xl font-display font-bold text-[#F8FAFC]">
                {cert.title}
              </h3>
              {cert.subtitle && (
                <div className="text-xs text-[#94A3B8] font-sans italic font-semibold">
                  {cert.subtitle}
                </div>
              )}
              <div className="text-xs font-sans text-[#CBD5E1] font-normal">
                Issued by <strong className="text-[#F8FAFC]">{cert.issuer}</strong> • {cert.date}
              </div>
            </div>

            {/* Certificate Image Frame */}
            {cert.certificateImage ? (
              <div className="p-3 rounded-2xl bg-[#070A18] border border-[#1F2442] shadow-inner">
                <img
                  src={cert.certificateImage}
                  alt={cert.title}
                  className="w-full h-auto rounded-xl object-contain max-h-[50vh]"
                />
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-[#070A18] border border-[#1F2442] text-center space-y-2">
                <Award size={40} className="text-[#8B5CF6] mx-auto" />
                <h4 className="font-display font-bold text-lg text-[#F8FAFC]">Verified Course Credential</h4>
                <p className="text-xs text-[#94A3B8] font-medium">
                  Certificate record on file from {cert.issuer}.
                </p>
              </div>
            )}

            {/* Verification Footer */}
            <div className="pt-4 border-t border-[#1F2442] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1.5 px-5 py-2.5 rounded-full btn-gradient-primary font-sans font-bold text-xs shadow-sm"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={14} />
                  </a>
                )}

                {cert.certificateImage && (
                  <a
                    href={cert.certificateImage}
                    download={cert.downloadName || "certificate.png"}
                    className="flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-[#070A18] text-[#F8FAFC] border border-[#1F2442] font-sans font-semibold text-xs hover:border-[#EC4899]"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-[#070A18] text-[#F8FAFC] border border-[#1F2442] font-sans font-semibold text-xs"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificationModal;
