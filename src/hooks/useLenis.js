import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useLenis
 * Initializes Lenis smooth scroll and synchronizes it strictly with GSAP's ticker.
 * Note: Lenis's internal rAF loop is disabled in favor of GSAP's ticker so that
 * ScrollTrigger scrub animations remain 100% in lockstep with user scrolling.
 */
export function useLenis() {
  useEffect(() => {
    // Respect user's reduced motion settings or iframe environment
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isInIframe = window.self !== window.top;
    
    // In iframes or reduced motion, native browser scrolling is 100% reliable
    if (prefersReducedMotion || isInIframe) {
      ScrollTrigger.refresh();
      return;
    }

    try {
      const lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      lenis.on('scroll', ScrollTrigger.update);

      const updateTicker = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      // Refresh ScrollTrigger after DOM settle
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => {
        gsap.ticker.remove(updateTicker);
        lenis.destroy();
      };
    } catch {
      ScrollTrigger.refresh();
    }
  }, []);
}
