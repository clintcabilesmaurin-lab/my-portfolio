import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Copy, Check, ArrowUpRight, Github, ExternalLink, MessageSquare, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Contact Component
 * - Email link (mailto)
 * - Direct phone contact (09938168260)
 * - One-line close
 * - Copy email helper with tooltip feedback
 * - Dedicated ScrollTrigger entrance reveal
 */
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const emailAddress = "clintcabilesmaurin@gmail.com";
  const phoneNumber = "09938168260";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          scrollTrigger: {
            trigger: cardRef.current,
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
    <footer
      id="contact"
      ref={sectionRef}
      className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div
        ref={cardRef}
        className="relative rounded-3xl bg-gradient-to-b from-charcoal-800 to-charcoal-900 border border-white/[0.08] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl"
      >
        {/* Ambient bottom backlight */}
        <div 
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-500/15 rounded-full blur-[90px] pointer-events-none"
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          {/* Section Marker */}
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-orange-400">
            <Mail className="w-3.5 h-3.5" />
            <span>[ 04 // INITIATE CONTACT ]</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Stop Tracking Money Badly.
          </h2>

          {/* One-Line Close */}
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Got messy financials, broken spreadsheets, or need a clean site that actually converts? Let's fix it.
          </p>

          {/* Action Hub */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Primary Mailto Action */}
            <a
              id="contact-email-cta"
              href={`mailto:${emailAddress}?subject=Business%20Inquiry%20-%20Accounting%20Systems%20%26%20Web`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200 active:scale-95 group"
            >
              <Mail className="w-5 h-5 text-orange-200" />
              <span>{emailAddress}</span>
              <ArrowUpRight className="w-4 h-4 text-orange-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Direct Phone Call Action */}
            <a
              id="contact-phone-cta"
              href={`tel:${phoneNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-orange-300 hover:text-white bg-charcoal-950/70 hover:bg-orange-600/30 border border-orange-500/30 hover:border-orange-500 transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span className="font-mono">{phoneNumber}</span>
            </a>

            {/* Quick Copy Button */}
            <button
              id="contact-copy-button"
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-charcoal-950/70 hover:bg-zinc-800 border border-zinc-700 hover:border-orange-500/40 transition-all duration-200 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono">Copied Email!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span className="font-mono">Copy Email</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Direct phone or email • Quick response</span>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-zinc-400 font-bold">Clint Aldwin C. Maurin</span>
            <span>•</span>
            <span>1st Year BSIT • CTU Naga Ext Campus</span>
          </div>

          <div>
            <a href="tel:09938168260" className="hover:text-orange-400 transition-colors">
              Phone: 09938168260
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#root"
              className="hover:text-orange-400 transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
