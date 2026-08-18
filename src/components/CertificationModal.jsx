import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ShieldCheck, ExternalLink, Calendar, Download, Eye } from 'lucide-react';

const CertificationModal = ({ cert, onClose }) => {
  if (!cert) return null;

  const downloadFilename = cert.downloadName || `${cert.title.replace(/[^a-zA-Z0-9]/g, '_')}_Certificate.png`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl editorial-card p-6 sm:p-8 shadow-2xl theme-heading my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full border border-slate-200 dark:border-slate-800 theme-heading hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors z-20"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="space-y-6">
            {/* Header info */}
            <div className="text-left space-y-2 border-b theme-border pb-4 pr-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-mono-tag font-semibold border border-emerald-500/20 uppercase">
                  {cert.category}
                </span>
                {cert.date && (
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-mono-tag font-semibold border border-purple-500/20 flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>Completed: {cert.date}</span>
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading theme-heading">
                {cert.title}
              </h3>
              {cert.subtitle && (
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 font-mono-tag">
                  {cert.subtitle}
                </p>
              )}
              <p className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300 font-mono-tag">
                ISSUED BY {cert.issuer.toUpperCase()}
              </p>
            </div>

            {/* Certificate Image Viewer / Verified Banner */}
            {cert.certificateImage ? (
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border-2 border-purple-500/30 bg-slate-950/40 shadow-xl relative group">
                  <img
                    src={cert.certificateImage}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-auto max-h-[50vh] object-contain mx-auto"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <a
                      href={cert.certificateImage}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-white/90 text-slate-900 text-xs font-bold font-mono-tag flex items-center space-x-1.5 shadow-lg hover:scale-105 transition-transform"
                    >
                      <Eye size={14} />
                      <span>View Full Image</span>
                    </a>
                    <a
                      href={cert.certificateImage}
                      download={downloadFilename}
                      className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold font-mono-tag flex items-center space-x-1.5 shadow-lg hover:scale-105 transition-transform"
                    >
                      <Download size={14} />
                      <span>Download Certificate</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 font-mono-tag font-bold text-xs">
                    <ShieldCheck size={16} />
                    <span>Official Completion Credential</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={cert.certificateImage}
                      download={downloadFilename}
                      className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs font-mono-tag flex items-center space-x-1.5 transition-colors shadow-sm"
                    >
                      <Download size={14} />
                      <span>DOWNLOAD CERTIFICATE</span>
                    </a>

                    <a
                      href={cert.certificateImage}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl editorial-card theme-heading text-xs font-mono-tag font-semibold flex items-center space-x-1.5 hover:scale-105 transition-transform"
                    >
                      <ExternalLink size={13} />
                      <span>FULL VIEW</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-3 text-left">
                <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 font-mono-tag font-bold">
                  <ShieldCheck size={18} />
                  <span>Verified Professional Credential</span>
                </div>
                <p className="leading-relaxed theme-body text-sm">
                  Successfully completed comprehensive course curriculum and evaluations offered by <strong className="theme-heading">{cert.issuer}</strong>.
                </p>
                <div className="pt-2 text-[11px] theme-muted font-mono-tag">
                  Official certificate credential verification records available upon request.
                </div>
              </div>
            )}

            {/* Credential Verification Link */}
            {cert.credentialUrl && (
              <div className="pt-2">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center space-x-2 shadow-sm font-mono-tag"
                >
                  <span>VERIFY CREDENTIAL ONLINE</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            )}

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 theme-heading hover:bg-slate-200 dark:hover:bg-slate-800 font-medium text-xs sm:text-sm transition-colors font-mono-tag"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificationModal;
