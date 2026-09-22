import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/**
 * ProjectsGrid Component
 * - Displays the 6 project cards (Double-Entry flagship + 5 supporting)
 * - All marked as "Coming Soon" with clear spots for real media
 * - Dedicated ScrollTrigger section reveal (separate from hero pin)
 */
export default function ProjectsGrid() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 90%',
            once: true,
          },
          opacity: 0,
          y: 25,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }

      // Reveal project cards with stagger
      const cards = gridRef.current ? Array.from(gridRef.current.children) : [];
      if (cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 90%',
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }
    }, sectionRef);

    // Refresh after DOM layout calculation
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.06]"
    >
      {/* Section Header */}
      <div ref={headerRef} className="space-y-4 mb-14 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-orange-400">
          <Layers className="w-3.5 h-3.5" />
          <span>[ 01 // SELECTED WORK ]</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Stuff I've Built
        </h2>

        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
          Real projects I put together to solve actual problems—from automated spreadsheets that keep money straight to live websites and daily workspaces.
        </p>
      </div>

      {/* Projects Grid: 1 col on mobile, 2 on md, 3 on lg */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
