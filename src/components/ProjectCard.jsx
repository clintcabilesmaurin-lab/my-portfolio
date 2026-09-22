import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  FileSpreadsheet, 
  Globe, 
  FileText, 
  Layers, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  TableProperties
} from 'lucide-react';
import ImageModal from './ImageModal';
import SafeImage from './SafeImage';

/**
 * ProjectCard Component
 * Displays a real verified project card with:
 * - Direct image carousel / gallery switcher (3 for Excel, 3 for Cafe, 7 for Notion)
 * - Click to enlarge in fullscreen ImageModal lightbox
 * - Direct external links to live website (Cafe on Vercel), live Excel spreadsheet, or Google Drive assets
 * - Status badges ("Live System", "Live Website", "Active Setup")
 */
export default function ProjectCard({ project, index }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = project.images || [];
  const currentImage = images[activeImageIndex] || { url: '', caption: '', driveUrl: '' };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Financial Systems':
        return <FileSpreadsheet className="w-4 h-4 text-orange-400" />;
      case 'Web Development':
        return <Globe className="w-4 h-4 text-orange-400" />;
      case 'Productivity & Operations':
        return <FileText className="w-4 h-4 text-orange-400" />;
      default:
        return <Layers className="w-4 h-4 text-orange-400" />;
    }
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <article
        id={`project-card-${project.slug}`}
        className="group relative rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden bg-charcoal-900/90 border-white/[0.08] hover:border-orange-500/40 shadow-xl shadow-black/40 hover:shadow-orange-950/20"
      >
        {/* Subtle accent glow */}
        {project.isFlagship && (
          <div
            className="absolute -top-24 -right-24 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
        )}

        <div>
          {/* Top Bar: Category, Index, Status */}
          <div className="p-5 sm:p-6 pb-4 flex items-center justify-between border-b border-white/[0.05]">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20">
                {getCategoryIcon(project.category)}
              </span>
              <span className="text-xs font-mono tracking-wider uppercase text-zinc-400 font-medium">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs text-zinc-600">
                #{String(index + 1).padStart(2, '0')}
              </span>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/25">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>{project.status}</span>
              </span>
            </div>
          </div>

          {/* Interactive Screenshot Showcase Area */}
          <div className="p-5 sm:p-6 pb-3">
            <div 
              className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0e12] cursor-pointer group/img shadow-inner"
              onClick={() => setIsModalOpen(true)}
              title="Click to view full screenshot in high resolution"
            >
              <SafeImage
                key={`${project.id}-${activeImageIndex}`}
                src={currentImage.url}
                fallbackSrc={currentImage.driveCdnUrl}
                alt={currentImage.caption || project.title}
                fit="contain"
                className="w-full h-full flex items-center justify-center p-1 group-hover/img:scale-[1.01] transition-transform duration-300"
              />

              {/* Subtle top & bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-70 group-hover/img:opacity-85 pointer-events-none transition-opacity" />

              {/* Image Counter & Enlarge Hint */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono text-zinc-200 border border-white/[0.15] shadow-md pointer-events-none">
                <Maximize2 className="w-3 h-3 text-orange-400" />
                <span>{activeImageIndex + 1} / {images.length}</span>
              </div>

              {/* Navigation Arrows for Carousel */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous screenshot"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/80 hover:bg-orange-500 text-white border border-white/[0.2] backdrop-blur-md transition-all shadow-lg hover:scale-105 active:scale-95 z-10"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next screenshot"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/80 hover:bg-orange-500 text-white border border-white/[0.2] backdrop-blur-md transition-all shadow-lg hover:scale-105 active:scale-95 z-10"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Caption Bar inside thumbnail */}
              <div className="absolute bottom-2.5 inset-x-3 text-left pointer-events-none">
                <p className="text-xs font-mono text-zinc-300 truncate drop-shadow-sm">
                  {currentImage.caption || project.title}
                </p>
              </div>
            </div>

            {/* Thumbnail Strip for Multi-Screenshot Projects */}
            {images.length > 1 && (
              <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex(idx);
                    }}
                    className={`relative w-16 h-10 sm:w-20 sm:h-12 rounded-lg overflow-hidden shrink-0 border transition-all ${
                      idx === activeImageIndex
                        ? 'border-orange-500 ring-2 ring-orange-500/40 opacity-100 scale-102 shadow-md'
                        : 'border-white/[0.1] opacity-60 hover:opacity-100 hover:border-white/30'
                    }`}
                    title={`Switch to screenshot ${idx + 1}`}
                  >
                    <SafeImage
                      src={img.url}
                      fallbackSrc={img.driveCdnUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      fit="cover"
                      className="w-full h-full"
                    />
                    <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/75 text-[9px] font-mono text-zinc-300 pointer-events-none">
                      #{idx + 1}
                    </span>
                  </button>
                ))}
                <span className="text-[11px] font-mono text-zinc-400 pl-1 shrink-0">
                  {images.length} views
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
              {project.title}
            </h3>

            {/* Blurb */}
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              {project.blurb}
            </p>
          </div>
        </div>

        {/* Card Footer: Tags & Action Buttons */}
        <div className="p-5 sm:p-6 pt-2">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.05]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {/* Excel Spreadsheet File Link */}
              {project.excelFileUrl && (
                <a
                  href={project.excelFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/30 shadow-md shadow-emerald-950/40 transition-all hover:scale-102 active:scale-98"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-100" />
                  <span>Open Excel Spreadsheet</span>
                  <ExternalLink className="w-3 h-3 text-emerald-200" />
                </a>
              )}

              {/* Live Web Link (e.g. 11:11 Cafe) */}
              {project.liveUrl && !project.excelFileUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-orange-600/90 hover:bg-orange-500 border border-orange-400/30 shadow-md shadow-orange-950/40 transition-all hover:scale-102 active:scale-98"
                >
                  <Globe className="w-3.5 h-3.5 text-orange-100" />
                  <span>Visit Live Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-orange-200" />
                </a>
              )}

              {/* Notion / Gallery Inspect Button */}
              {!project.excelFileUrl && !project.liveUrl && (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-zinc-800 hover:bg-orange-600/90 border border-white/[0.1] hover:border-orange-500/30 transition-all"
                >
                  <TableProperties className="w-3.5 h-3.5 text-orange-400" />
                  <span>Inspect 7 Views</span>
                  <Maximize2 className="w-3 h-3 text-zinc-300" />
                </button>
              )}
            </div>

            {/* Quick Lightbox Enlarge trigger */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-xs font-mono text-zinc-400 hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              <span>Gallery ({images.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </article>

      {/* Fullscreen Lightbox Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        currentIndex={activeImageIndex}
        onIndexChange={setActiveImageIndex}
        title={project.title}
      />
    </>
  );
}
