import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from 'lucide-react';
import SafeImage from './SafeImage';

/**
 * ImageModal Component
 * Fullscreen high-resolution lightbox for inspecting project screenshots
 * and workflow space environments. Supports keyboard navigation & direct Drive links.
 */
export default function ImageModal({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onIndexChange,
  title = '',
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        onIndexChange((currentIndex + 1) % images.length);
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex] || {};
  const currentSrc = typeof currentImage === 'string' ? currentImage : currentImage.url;
  const currentDriveCdn = typeof currentImage === 'string' ? null : currentImage.driveCdnUrl;
  const currentCaption = typeof currentImage === 'string' ? '' : currentImage.caption;
  const currentDriveUrl = typeof currentImage === 'string' ? null : currentImage.driveUrl;

  const handlePrev = (e) => {
    e.stopPropagation();
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onIndexChange((currentIndex + 1) % images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div 
        className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 text-white">
          <span className="font-mono text-xs text-orange-400 font-semibold tracking-wider uppercase">
            {title || 'PREVIEW'}
          </span>
          {images.length > 1 && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-800/90 text-zinc-300 border border-white/[0.08]">
              {currentIndex + 1} / {images.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {currentDriveUrl && (
            <a
              href={currentDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.1] text-xs font-mono transition-colors"
              title="Open source file in Google Drive"
            >
              <span>Drive Source</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="p-2 rounded-lg bg-zinc-900/90 hover:bg-orange-500 text-zinc-400 hover:text-white border border-white/[0.1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Frame */}
      <div
        className="relative max-w-6xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-charcoal-950 shadow-2xl flex items-center justify-center max-h-[75vh] w-full aspect-[16/9]">
          <SafeImage
            key={`modal-${currentIndex}-${currentSrc}`}
            src={currentSrc}
            fallbackSrc={currentDriveCdn}
            alt={currentCaption || title || 'Enlarged project media'}
            fit="contain"
            className="w-full h-full flex items-center justify-center"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/75 hover:bg-orange-500 text-white border border-white/[0.2] backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/75 hover:bg-orange-500 text-white border border-white/[0.2] backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Caption & Thumbnail bar */}
        <div className="mt-4 text-center max-w-3xl px-4 space-y-3">
          {currentCaption && (
            <p className="text-sm sm:text-base text-zinc-200 font-medium">
              {currentCaption}
            </p>
          )}
          
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-2 pt-1 overflow-x-auto py-1 scrollbar-thin">
              {images.map((img, idx) => {
                const thumbSrc = typeof img === 'string' ? img : img.url;
                const thumbCdn = typeof img === 'string' ? null : img.driveCdnUrl;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onIndexChange(idx)}
                    className={`relative w-14 h-9 sm:w-16 sm:h-10 rounded-lg overflow-hidden shrink-0 border transition-all ${
                      idx === currentIndex
                        ? 'border-orange-500 ring-2 ring-orange-500/40 opacity-100 scale-105'
                        : 'border-white/[0.1] opacity-50 hover:opacity-100 hover:border-white/30'
                    }`}
                    aria-label={`Jump to image ${idx + 1}`}
                  >
                    <SafeImage
                      src={thumbSrc}
                      fallbackSrc={thumbCdn}
                      alt={`Thumbnail ${idx + 1}`}
                      fit="cover"
                      className="w-full h-full"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
