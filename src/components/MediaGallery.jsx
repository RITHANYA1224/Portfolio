import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Eye, ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react';

const MediaGallery = ({ images = [], title = "Project Evidence", variant = "project" }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  // Normalize image data format (supports both string URLs and rich objects)
  const normalizedImages = images.map((img, idx) => {
    if (typeof img === 'string') {
      return {
        url: img,
        label: `0${idx + 1} — Evidence Photo`,
        title: title,
        caption: `Evidence image ${idx + 1} for ${title}`
      };
    }
    return {
      url: img.url,
      label: img.label || img.title || `0${idx + 1} — Evidence Photo`,
      title: img.title || title,
      caption: img.caption || img.label || `Evidence image ${idx + 1} for ${title}`
    };
  });

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % normalizedImages.length);
  }, [normalizedImages.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length);
  }, [normalizedImages.length]);

  // Keyboard Navigation Support (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  const primaryImage = normalizedImages[0];
  const supportingImages = normalizedImages.slice(1, 4);
  const extraCount = normalizedImages.length > 4 ? normalizedImages.length - 4 : 0;

  return (
    <div className="my-6 space-y-3 font-sans">
      {/* Header Label */}
      <div className="flex items-center justify-between text-xs font-sans text-[#6E6277] dark:text-[#9E92A4]">
        <span className="font-bold text-[#34283D] dark:text-[#F7F1EA] uppercase tracking-wider flex items-center space-x-1.5">
          <ImageIcon size={14} className="text-[#2B4234] dark:text-[#B8C9B0]" />
          <span>PROJECT EVIDENCE GALLERY</span>
        </span>
        <span className="font-mono text-[11px] bg-[#B8C9B0]/30 dark:bg-[#B8C9B0]/20 text-[#34283D] dark:text-[#F7F1EA] px-2 py-0.5 rounded border border-[#B8C9B0]/50 font-bold">
          01 / 0{normalizedImages.length}
        </span>
      </div>

      {/* ASYMMETRIC COMPOSITION GALLERY (Desktop / Tablet / Mobile Stack) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        {/* 1. DOMINANT FEATURED PRIMARY IMAGE */}
        <div
          onClick={() => openLightbox(0)}
          className={`group relative overflow-hidden rounded-2xl border-2 border-[#DDD4CC] dark:border-[#423847] hover:border-[#B8C9B0] bg-[#FAF7F2] dark:bg-[#211C23] cursor-pointer shadow-md transition-all duration-300 ${
            supportingImages.length > 0 ? 'lg:col-span-8 min-h-[260px] sm:min-h-[320px]' : 'lg:col-span-12 min-h-[280px] sm:min-h-[360px]'
          }`}
        >
          <img
            src={primaryImage.url}
            alt={primaryImage.label}
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
          />

          {/* Pastel Label Badge Overlay */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-[#FAF7F2]/90 dark:bg-[#211C23]/90 backdrop-blur-md border border-[#DDD4CC] dark:border-[#423847] text-[#34283D] dark:text-[#F7F1EA] text-xs font-semibold flex items-center space-x-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B8C9B0]" />
            <span>{primaryImage.label}</span>
          </div>

          {/* Interactive View Icon on Hover */}
          <div className="absolute inset-0 bg-[#34283D]/40 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <div className="px-4 py-2 rounded-xl bg-[#FAF7F2] dark:bg-[#211C23] text-[#34283D] dark:text-[#F7F1EA] text-xs font-bold flex items-center space-x-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye size={15} className="text-[#2B4234] dark:text-[#B8C9B0]" />
              <span>Expand Fullscreen</span>
            </div>
          </div>
        </div>

        {/* 2. SUPPORTING TILED IMAGES (Offset Layout) */}
        {supportingImages.length > 0 && (
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3.5 flex-1">
            {supportingImages.map((img, idx) => {
              const actualIdx = idx + 1;
              const isLast = idx === supportingImages.length - 1 && extraCount > 0;
              return (
                <div
                  key={actualIdx}
                  onClick={() => openLightbox(actualIdx)}
                  className="group relative overflow-hidden rounded-2xl border border-[#DDD4CC] dark:border-[#423847] hover:border-[#B8C9B0] bg-[#FAF7F2] dark:bg-[#211C23] cursor-pointer shadow-sm transition-all duration-300 aspect-4/3 lg:aspect-auto lg:h-[calc(50%-0.5rem)] min-h-[130px]"
                >
                  <img
                    src={img.url}
                    alt={img.label}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />

                  {/* Supporting Image Label Badge */}
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-[#FAF7F2]/90 dark:bg-[#211C23]/90 backdrop-blur-md border border-[#DDD4CC] dark:border-[#423847] text-[#34283D] dark:text-[#F7F1EA] text-[11px] font-semibold truncate shadow-xs">
                    {img.label}
                  </div>

                  {/* Extra count indicator if > 4 images */}
                  {isLast && (
                    <div className="absolute inset-0 bg-[#34283D]/70 dark:bg-black/75 backdrop-blur-xs flex items-center justify-center text-white text-xs font-bold">
                      +{extraCount} More Photos
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#34283D]/30 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 rounded-full bg-[#FAF7F2] dark:bg-[#211C23] text-[#34283D] dark:text-[#F7F1EA] shadow-sm">
                      <Eye size={14} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#34283D]/80 dark:bg-black/90 backdrop-blur-md select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-[#FAF7F2] dark:bg-[#211C23] border border-[#DDD4CC] dark:border-[#423847] shadow-2xl overflow-hidden text-[#34283D] dark:text-[#F7F1EA]"
            >
              {/* Lightbox Header Bar */}
              <div className="px-6 py-4 border-b border-[#DDD4CC] dark:border-[#423847] flex items-center justify-between bg-[#F3EEE7]/80 dark:bg-[#2D2630]/80">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-[#B8C9B0]/40 dark:bg-[#B8C9B0]/20 border border-[#B8C9B0] text-xs font-bold text-[#34283D] dark:text-[#F7F1EA]">
                    0{currentIndex + 1} / 0{normalizedImages.length}
                  </span>
                  <div className="text-xs sm:text-sm font-display font-bold text-[#34283D] dark:text-[#F7F1EA] truncate max-w-xs sm:max-w-md">
                    {normalizedImages[currentIndex].label}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={closeLightbox}
                    className="p-2 rounded-full bg-[#FAF7F2] dark:bg-[#211C23] border border-[#DDD4CC] dark:border-[#423847] text-[#34283D] dark:text-[#F7F1EA] hover:bg-[#DDD4CC] transition-colors"
                    aria-label="Close Lightbox"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Main Image Viewport with Nav Controls */}
              <div className="relative flex-1 bg-black/5 dark:bg-black/30 flex items-center justify-center p-4 min-h-[350px] max-h-[65vh]">
                {/* Previous Image Button */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-10 p-3 rounded-full bg-[#FAF7F2]/90 dark:bg-[#211C23]/90 text-[#34283D] dark:text-[#F7F1EA] border border-[#DDD4CC] dark:border-[#423847] hover:scale-110 transition-all shadow-md"
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Main Lightbox Image */}
                <motion.img
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  src={normalizedImages[currentIndex].url}
                  alt={normalizedImages[currentIndex].label}
                  className="max-h-[60vh] w-auto max-w-full object-contain rounded-xl shadow-lg border border-[#DDD4CC]/50 dark:border-[#423847]/50"
                />

                {/* Next Image Button */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 z-10 p-3 rounded-full bg-[#FAF7F2]/90 dark:bg-[#211C23]/90 text-[#34283D] dark:text-[#F7F1EA] border border-[#DDD4CC] dark:border-[#423847] hover:scale-110 transition-all shadow-md"
                  aria-label="Next Image"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Caption & Editable Data Footer */}
              <div className="px-6 py-4 border-t border-[#DDD4CC] dark:border-[#423847] bg-[#F3EEE7]/90 dark:bg-[#2D2630]/90 space-y-3">
                <p className="text-xs sm:text-sm text-[#29262B] dark:text-[#E4DCD6] font-sans leading-relaxed">
                  {normalizedImages[currentIndex].caption}
                </p>

                {/* Thumbnail Navigation Strip */}
                {normalizedImages.length > 1 && (
                  <div className="flex items-center space-x-2 pt-2 overflow-x-auto scrollbar-none">
                    {normalizedImages.map((tImg, tIdx) => (
                      <button
                        key={tIdx}
                        onClick={() => setCurrentIndex(tIdx)}
                        className={`w-14 h-11 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                          tIdx === currentIndex
                            ? 'border-[#B8C9B0] scale-105 shadow-sm'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={tImg.url}
                          alt={tImg.label}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaGallery;
