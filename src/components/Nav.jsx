import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Mail } from 'lucide-react';
import SafeImage from './SafeImage';

/**
 * Nav Component
 * - Fixed at top-0, z-40.
 * - Displays brand identity for Clint Aldwin C. Maurin with custom monogram badge.
 * - Contains logo, navigation links, and "Let's Talk" pill button.
 */
export default function Nav({ navRef, anchorRef }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Workflow", href: "#workflow" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-nav"
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#0a0c0e]/85 border-b border-white/[0.06] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center space-x-3.5">
          <div
            id="nav-avatar-anchor"
            ref={anchorRef}
            className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-orange-500/35 bg-gradient-to-br from-charcoal-800 to-charcoal-900 flex items-center justify-center overflow-hidden shrink-0 shadow-sm shadow-orange-500/10 group-hover:border-orange-400 transition-colors"
          >
            <SafeImage
              src="/assets/profile/avatar.png"
              fallbackSrc="https://lh3.googleusercontent.com/d/1T-LYr4I4vNAG6HsBgtR0VUM4Qf2o9wuL"
              alt="Clint Aldwin C. Maurin"
              className="w-full h-full object-cover"
            />
            {/* Ambient inner glow */}
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-orange-500/20 pointer-events-none" />
          </div>

          <a
            href="#"
            onClick={(e) => handleScrollTo(e, '#root')}
            className="flex flex-col group text-left cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <span className="font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors text-sm sm:text-base md:text-lg">
                Clint Aldwin C. Maurin
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 tracking-wide uppercase hidden sm:inline-block">
              Accounting Systems & Web
            </span>
          </a>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-zinc-300 hover:text-orange-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: "Let's Talk" CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-3">
          <a
            id="nav-cta-talk"
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200 active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger button */}
          <button
            id="nav-mobile-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#0a0c0e]/95 border-b border-white/[0.08] backdrop-blur-lg">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:text-orange-400 hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/20"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
