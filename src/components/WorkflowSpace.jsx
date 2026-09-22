import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users2, Maximize2, ExternalLink, Sparkles, MapPin, MonitorCheck } from 'lucide-react';
import ImageModal from './ImageModal';
import SafeImage from './SafeImage';

gsap.registerPlugin(ScrollTrigger);

const workflowSpaces = [
  {
    id: 'space-1',
    title: 'Team Workspaces & Sprints',
    caption: 'Working together in Cebu to plan systems, map out databases, and test ideas.',
    image: '/assets/workflow/space_1.png',
    driveCdnUrl: 'https://lh3.googleusercontent.com/d/1MAeD03jIAkNJL9T6zYWUeskvP63mPBBG',
    driveUrl: 'https://drive.google.com/file/d/1MAeD03jIAkNJL9T6zYWUeskvP63mPBBG/view?usp=drive_link',
    tag: 'Team Sessions',
    detail: 'Sprint planning & collaboration'
  },
  {
    id: 'space-2',
    title: 'Live Reviews & Code Sync',
    caption: 'Going over formulas, tweaking UI layouts, and making sure everything works before shipping.',
    image: '/assets/workflow/space_2.png',
    driveCdnUrl: 'https://lh3.googleusercontent.com/d/1o6k_slqYDVfu5e3x4_juVaoE4WPrFIdT',
    driveUrl: 'https://drive.google.com/file/d/1o6k_slqYDVfu5e3x4_juVaoE4WPrFIdT/view?usp=drive_link',
    tag: 'Review & Strategy',
    detail: 'Testing logic & solving bugs'
  },
  {
    id: 'space-3',
    title: 'Focus Desk & Deep Work',
    caption: 'Where I sit down with headphones on to build spreadsheets, code frontends, and push updates.',
    image: '/assets/workflow/space_3.png',
    driveCdnUrl: 'https://lh3.googleusercontent.com/d/1yh0Ba-i2YoNFhJ4W4Cu1JPVNS4l3KhNJ',
    driveUrl: 'https://drive.google.com/file/d/1yh0Ba-i2YoNFhJ4W4Cu1JPVNS4l3KhNJ/view?usp=drive_link',
    tag: 'Focus Desk',
    detail: 'Building & shipping stuff'
  }
];

export default function WorkflowSpace() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const [modalIndex, setModalIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const cards = cardsRef.current ? Array.from(cardsRef.current.children) : [];
      if (cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
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

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const openImageModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const modalImages = workflowSpaces.map((item) => ({
    url: item.image,
    driveCdnUrl: item.driveCdnUrl,
    caption: `${item.title} — ${item.caption}`,
    driveUrl: item.driveUrl
  }));

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.06]"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Header */}
      <div ref={headerRef} className="space-y-4 mb-14 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-orange-400">
          <Users2 className="w-4 h-4" />
          <span>[ 02 // PERSONAL WORKFLOW SPACE &amp; TEAMS ]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Where I Work &amp; Build with Teams
        </h2>

        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
          A quick look at my setup, team sessions, and where I actually build and test stuff.
        </p>
      </div>

      {/* 3 Spaces Gallery Grid */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
      >
        {workflowSpaces.map((space, idx) => (
          <div
            key={space.id}
            className="group relative rounded-2xl border border-white/[0.08] bg-charcoal-900/80 hover:bg-charcoal-800/90 hover:border-orange-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl shadow-black/40"
          >
            {/* Image Box */}
            <div>
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-950 cursor-pointer"
                onClick={() => openImageModal(idx)}
                title="Click to view full photo"
              >
                <SafeImage
                  src={space.image}
                  fallbackSrc={space.driveCdnUrl}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-orange-300 border border-orange-500/30">
                    <Sparkles className="w-3 h-3 text-orange-400" />
                    <span>{space.tag}</span>
                  </span>
                </div>

                {/* Enlarge Hint */}
                <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/[0.1] opacity-80 group-hover:opacity-100 group-hover:bg-orange-500 transition-all">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pb-4 space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                  {space.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {space.caption}
                </p>
              </div>
            </div>

            {/* Footer / Meta info */}
            <div className="p-6 pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-zinc-500">{space.detail}</span>
              
              <button
                type="button"
                onClick={() => openImageModal(idx)}
                className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
              >
                <span>Inspect</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox for workflow space images */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={modalImages}
        currentIndex={modalIndex}
        onIndexChange={setModalIndex}
        title="Personal Workflow Space & Teams"
      />
    </section>
  );
}
