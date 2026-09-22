import React from 'react';
import { ArrowDown, ArrowUpRight, Mail, FolderGit2, CheckCircle2, ShieldCheck, Database, Layers, Phone, GraduationCap, MapPin, Terminal } from 'lucide-react';
import SafeImage from './SafeImage';

/**
 * Hero Component
 * - Headline: "Hi, I'm Clint Aldwin C. Maurin."
 * - Subheadline: "Accounting Systems & Web Developer"
 * - Supporting line: "I build clean double-entry accounting systems in Excel and functional websites for small business owners who are tracking their money badly."
 * - Two CTAs: "View Projects" and "Contact Me"
 * - "Available for freelance work" badge
 * - Right Column: Interactive Accounting Systems & Ledger Terminal
 */
export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#0a0c0e] flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/[0.04]"
    >
      {/* Ambient background glow behind subject */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] md:w-[680px] h-[340px] sm:h-[520px] md:h-[680px] rounded-full bg-gradient-to-tr from-orange-600/15 via-orange-500/10 to-transparent blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-10rem)]">
        
        {/* Left Column: Headlines, copy, badges, and CTAs */}
        <div className="md:col-span-7 flex flex-col items-start text-left space-y-6 pt-4 sm:pt-0">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-orange-500/25 text-zinc-300 text-xs sm:text-sm font-medium shadow-inner shadow-orange-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-zinc-200">Available for freelance work</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Clint Aldwin C. Maurin</span>.
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-200 tracking-tight">
              Accounting Systems &amp; Web Developer
            </p>
          </div>

          {/* Supporting line */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
            I build clean double-entry accounting systems in Excel and functional websites for small business owners who are tracking their money badly.
          </p>

          {/* Numbers / Credibility Micro-Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 pb-1 border-y border-white/[0.06] w-full max-w-lg font-mono text-xs text-zinc-400">
            <div>
              <span className="text-orange-400 font-semibold block text-sm">Double-Entry</span>
              <span>General Ledgers</span>
            </div>
            <div>
              <span className="text-white font-semibold block text-sm">React &amp; Web</span>
              <span>Fast UI Tools</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-emerald-400 font-semibold block text-sm">CTU Naga Ext</span>
              <span>1st Year BSIT</span>
            </div>
          </div>

          {/* Two CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            {/* View Projects (Filled) */}
            <a
              id="hero-cta-projects"
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200 active:scale-95 group"
            >
              <FolderGit2 className="w-4 h-4 text-orange-200 group-hover:scale-110 transition-transform" />
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 text-orange-200 group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Contact Me (Outlined) */}
            <a
              id="hero-cta-contact"
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-700 hover:border-orange-500/50 transition-all duration-200 active:scale-95 group"
            >
              <Mail className="w-4 h-4 text-zinc-400 group-hover:text-orange-400 transition-colors" />
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column: Hero Systems Console */}
        <div className="md:col-span-5 flex flex-col justify-center items-center relative min-h-[380px] sm:min-h-[460px] w-full">
          {/* Floor glow */}
          <div className="absolute bottom-4 w-72 h-20 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />

          {/* Desktop & Responsive Visual Systems Console */}
          <div className="relative w-full max-w-md rounded-2xl border border-white/[0.08] bg-charcoal-900/80 p-6 backdrop-blur-md shadow-2xl shadow-black/50 space-y-5">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                C. MAURIN // ACC.SYS.01
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-400 font-bold">ONLINE</span>
              </div>
            </div>

            {/* Developer Profile Card with Profile Picture */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-charcoal-950/90 border border-white/[0.06]">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-orange-500/50 shadow-md shadow-orange-950/50 shrink-0">
                <SafeImage
                  src="/assets/profile/avatar.png"
                  fallbackSrc="https://lh3.googleusercontent.com/d/1T-LYr4I4vNAG6HsBgtR0VUM4Qf2o9wuL"
                  alt="Clint Aldwin C. Maurin"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-orange-500/20" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm sm:text-base tracking-tight truncate">
                    Clint Aldwin C. Maurin
                  </span>
                </div>
                <span className="text-xs text-orange-400 font-mono block">
                  Systems Developer &amp; Modeler
                </span>
                <span className="text-[11px] text-zinc-400 font-mono flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>BSIT Student • Cebu, PH</span>
                </span>
              </div>
            </div>

            {/* Quick Profile Info Card */}
            <div className="p-4 rounded-xl bg-charcoal-950/90 border border-orange-500/20 space-y-3 font-mono">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-white/[0.06]">
                <span className="text-orange-400 flex items-center gap-1.5 font-semibold">
                  <GraduationCap className="w-4 h-4" />
                  <span>CURRENT EDUCATION</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30">
                  1ST YEAR BSIT
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-zinc-300">
                  <span className="text-zinc-500 shrink-0">Campus:</span>
                  <span className="font-semibold text-white">CTU Naga Ext Campus</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-white/[0.04]">
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-orange-400" />
                    <span>Phone:</span>
                  </span>
                  <a
                    href="tel:09938168260"
                    className="font-bold text-orange-400 hover:text-orange-300 hover:underline transition-colors"
                  >
                    09938168260
                  </a>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-white/[0.04]">
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Location:</span>
                  </span>
                  <span className="text-zinc-300 font-medium">Cebu, Philippines</span>
                </div>
              </div>
            </div>

            {/* Skills & Arsenal Snapshot */}
            <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-orange-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>SKILLS &amp; ARSENAL</span>
                </span>
                <span className="text-zinc-500">Self-Taught &amp; BSIT</span>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                {['HTML/CSS/JS', 'React', 'Tailwind', 'Node.js', 'MySQL', 'TypeScript', 'REST APIs', 'Python Scripts', 'Prompt Eng AI', 'Excel Models'].map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.08] hover:border-orange-500/40 hover:text-white transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* System Status Footer */}
            <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-zinc-500 border-t border-white/[0.04]">
              <span>Base: Cebu, Philippines</span>
              <span className="text-zinc-400">Clint Aldwin C. Maurin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-Down Cue at Bottom of Hero */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-80 animate-pulse">
        <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border border-zinc-600 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 rounded-full bg-orange-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
