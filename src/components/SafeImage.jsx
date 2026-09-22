import React, { useState, useEffect } from 'react';
import { ImageOff, Loader2 } from 'lucide-react';

/**
 * SafeImage Component
 * Robust image component with:
 * - Dual-source fallback (Primary -> Secondary/CDN -> Fallback)
 * - Automatic retry on error
 * - Prop sync when switching active screenshots
 * - Loading indicator
 * - Fallback placeholder if all sources fail
 * - referrerPolicy="no-referrer" for Google Drive CDN access
 */
export default function SafeImage({
  src,
  fallbackSrc,
  alt = '',
  className = '',
  imgClassName = '',
  fit = 'cover',
  loading = 'lazy',
  ...props
}) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sync state when src or fallbackSrc changes (e.g., carousel navigation)
  useEffect(() => {
    setCurrentSrc(src || fallbackSrc);
    setHasError(false);
    setIsLoading(true);
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      // Fallback to secondary source (e.g., Google Drive CDN or local asset)
      setCurrentSrc(fallbackSrc);
      setIsLoading(true);
    } else if (src && currentSrc !== src) {
      setCurrentSrc(src);
      setIsLoading(true);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const fitClass = fit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-charcoal-900 animate-pulse flex items-center justify-center z-0">
          <Loader2 className="w-5 h-5 text-orange-400/50 animate-spin" />
        </div>
      )}

      {/* Actual Image */}
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          loading={loading}
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          onError={handleError}
          onLoad={handleLoad}
          className={`w-full h-full ${fitClass} transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${imgClassName}`}
          {...props}
        />
      ) : (
        <div className="absolute inset-0 bg-charcoal-950 flex flex-col items-center justify-center p-4 text-center text-zinc-500 gap-2">
          <ImageOff className="w-6 h-6 text-zinc-600" />
          <span className="text-xs font-mono">{alt || 'Image Preview'}</span>
        </div>
      )}
    </div>
  );
}
