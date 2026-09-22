import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, MapPin, GraduationCap, Bike, Terminal, Zap, Phone, Code2, Database, Sparkles, Layers } from 'lucide-react';
import SafeImage from './SafeImage';

gsap.registerPlugin(ScrollTrigger);

/**
 * About Component
 * Contains the EXACT copy specified by the user:
 * - "I'm Clint Aldwin C. Maurin. 18, BSIT student at CTU Naga — but I was already building before the program started..."
 * - "I don't pitch myself as 'a VA' or 'available for any remote work.'..."
 * - "I dropped the retail job and the McDonald's plan on purpose..."
 * Dedicated ScrollTrigger reveal on enter.
 */
export default function About() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 90%',
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all',
        });
      }

      if (sidebarRef.current) {
        gsap.from(sidebarRef.current, {
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: 'top 90%',
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: 0.1,
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.06]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Exact Copy Story */}
        <div ref={contentRef} className="lg:col-span-7 space-y-8">
          {/* Section Marker */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-orange-400">
            <User className="w-4 h-4" />
            <span>[ 03 // ABOUT ME ]</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built Before the Syllabus.
          </h2>

          {/* EXACT COPY: DO NOT REWRITE */}
          <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            <p className="border-l-2 border-orange-500/60 pl-4 py-1 text-white font-medium">
              I'm Clint Aldwin C. Maurin. 18, 1st Year BSIT student at CTU Naga Ext Campus — but I was already building before the program started. Self-taught in HTML, CSS, and JavaScript, then moved straight into React, Tailwind, Node.js, MySQL, TypeScript, modern JavaScript libraries, and REST APIs — plus Python automation scripts and AI prompt engineering.
            </p>

            <p>
              I don't pitch myself as "a VA" or "available for any remote work." I build double-entry accounting systems — the kind that auto-generate financial statements and dashboards, not a spreadsheet duct-taped together — and the sites and tools around them. If you're a small business owner tracking your money badly, that's the problem I solve.
            </p>

            <p>
              I dropped the retail job and the McDonald's plan on purpose. Working inside someone else's ceiling wasn't the plan. I ride my own bike, live with family in Cebu, and I don't stack prep before I ship — I ship, then fix what breaks.
            </p>
          </div>

          {/* Key Principles Checklist */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-zinc-300">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-charcoal-900/90 border border-white/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>Self-Taught Engineering</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-charcoal-900/90 border border-white/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>Double-Entry Financial Logic</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-charcoal-900/90 border border-white/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>Ship Fast, Refine What Works</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-charcoal-900/90 border border-white/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>Direct Client Problem Solving</span>
            </div>
          </div>
        </div>

        {/* Right Column: Numbers / Credibility Docket */}
        <div ref={sidebarRef} className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-charcoal-900/80 border border-white/[0.08] p-8 space-y-6 shadow-xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                PROFILE RECORD // CLINT ALDWIN C. MAURIN
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/20">
                ACTIVE
              </span>
            </div>

            {/* Profile Avatar & Title */}
            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-charcoal-950/70 border border-white/[0.05]">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-orange-500/30 shrink-0 shadow-md">
                <SafeImage
                  src="/assets/profile/avatar.png"
                  fallbackSrc="https://lh3.googleusercontent.com/d/1T-LYr4I4vNAG6HsBgtR0VUM4Qf2o9wuL"
                  alt="Clint Aldwin C. Maurin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="text-white font-bold text-base block truncate">
                  Clint Aldwin C. Maurin
                </span>
                <span className="text-xs font-mono text-orange-400 block truncate">
                  Systems &amp; Web Developer
                </span>
                <span className="text-[11px] font-mono text-zinc-400 block mt-0.5">
                  1st Year BSIT • CTU Naga Ext Campus
                </span>
              </div>
            </div>

            {/* Quick Fact Items */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white/[0.04] text-orange-400 shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-zinc-400">Education</span>
                  <span className="text-sm font-semibold text-white">1st Year BSIT • CTU Naga Ext Campus</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white/[0.04] text-orange-400 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-zinc-400">Phone</span>
                  <a href="tel:09938168260" className="text-sm font-semibold text-orange-400 hover:underline">
                    09938168260
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white/[0.04] text-orange-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-zinc-400">Base Location</span>
                  <span className="text-sm font-semibold text-white">Cebu, Philippines</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white/[0.04] text-orange-400 shrink-0 mt-0.5">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-zinc-400">Core Toolkit</span>
                  <span className="text-sm font-semibold text-white">
                    HTML/CSS/JS, React, Tailwind, Node.js, MySQL, TypeScript, APIs, Python, AI Prompting
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white/[0.04] text-orange-400 shrink-0 mt-0.5">
                  <Bike className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-zinc-400">Operating Mindset</span>
                  <span className="text-sm font-semibold text-white">"Ship, then fix what breaks."</span>
                </div>
              </div>
            </div>

            {/* Callout Box */}
            <div className="p-4 rounded-2xl bg-charcoal-950/80 border border-orange-500/20 text-xs font-mono text-zinc-300 space-y-1">
              <span className="text-orange-400 font-semibold block uppercase tracking-wider">
                Double-Entry Guarantee
              </span>
              <p className="text-zinc-400 leading-relaxed font-sans">
                Every spreadsheet ledger is constructed with cross-check verification formulas so trial balances always reconcile without manual reconciliation panic.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Skills & Technical Arsenal Grid */}
      <div className="mt-16 pt-12 border-t border-white/[0.08] space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-orange-400">
            <Terminal className="w-4 h-4" />
            <span>[ SKILLS &amp; TECHNICAL ARSENAL ]</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Self-Taught Roots, Production-Ready Stack
          </h3>
          <p className="text-sm sm:text-base text-zinc-400">
            Self-taught foundation in core web technologies, expanding into full-stack development, database architecture, Python automation scripting, and AI prompt engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Frontend & UI */}
          <div className="p-5 rounded-2xl bg-charcoal-900/80 border border-white/[0.08] hover:border-orange-500/40 transition-colors space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 group-hover:scale-105 transition-transform">
                  <Code2 className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Self-Taught Core</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-orange-300 transition-colors">
                  Frontend Development
                </h4>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Responsive, high-speed interfaces built with modern component architectures, utility styling, and strict typing.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
              {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS', 'TypeScript', 'JS Libraries'].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono text-orange-300 bg-orange-950/40 border border-orange-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Backend, DB & APIs */}
          <div className="p-5 rounded-2xl bg-charcoal-900/80 border border-white/[0.08] hover:border-emerald-500/40 transition-colors space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Database className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Backend &amp; Data</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Backend, MySQL &amp; APIs
                </h4>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Server-side logic, structured relational database schemas in MySQL, and resilient REST APIs connecting UI to live data.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
              {['Node.js', 'Express', 'MySQL', 'REST APIs', 'TypeScript Backend', 'JSON Data'].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Automations & AI Prompt Engineering */}
          <div className="p-5 rounded-2xl bg-charcoal-900/80 border border-white/[0.08] hover:border-blue-500/40 transition-colors space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Scripts &amp; AI</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  Python &amp; Prompt AI
                </h4>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Eliminating manual grunt work with automated Python scripts and engineering precise prompt structures for modern AI systems.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
              {['Python Scripts', 'Automation', 'Prompt Engineering', 'AI Workflows', 'Task Automation'].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono text-blue-300 bg-blue-950/40 border border-blue-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Financial Systems & Ledgers */}
          <div className="p-5 rounded-2xl bg-charcoal-900/80 border border-white/[0.08] hover:border-amber-500/40 transition-colors space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Systems &amp; Models</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  Accounting &amp; Systems
                </h4>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Mathematical double-entry spreadsheets, automatic trial balance reconciliation, and multi-relational Notion workspaces.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
              {['Double-Entry Excel', 'Trial Balances', 'General Ledgers', 'P&L Reports', 'Notion Architecture'].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono text-amber-300 bg-amber-950/40 border border-amber-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
