import React from 'react';
import { useLenis } from './hooks/useLenis';

import Nav from './components/Nav';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import WorkflowSpace from './components/WorkflowSpace';
import About from './components/About';
import Contact from './components/Contact';

/**
 * App Component
 * Mounts Nav and sections in clean order.
 */
export default function App() {
  // Initialize Lenis smooth scroll synced to GSAP ticker
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#0a0c0e] text-[#e2e5ea] selection:bg-orange-500/20 selection:text-orange-400 font-sans">
      {/* 1. Fixed Nav */}
      <Nav />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Projects Grid (3 verified projects: Excel Financial Tracker, 11:11 Cafe, Notion Workspace) */}
      <ProjectsGrid />

      {/* 4. Personal Workflow Space & Teams (3 collaboration environments) */}
      <WorkflowSpace />

      {/* 5. About Me Section (exact biographical copy) */}
      <About />

      {/* 6. Contact Section (email mailto, one-line close, copy helper) */}
      <Contact />
    </div>
  );
}
