'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-text',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power4.out', delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 pb-20 overflow-hidden"
    >
      {/* Dark Dot Matrix Grid Pattern with Radial Mask */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1e293b_1.6px,transparent_1.6px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_48%,#000_60%,transparent_100%)] opacity-35 z-0" 
        aria-hidden="true"
      />

      {/* Ambient Gradient Glows */}
      <div 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-rose-500/10 via-indigo-500/10 to-transparent blur-3xl rounded-full z-0" 
        aria-hidden="true"
      />

      {/* Glassmorphic Content Container */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 py-12 sm:px-12 sm:py-16 rounded-3xl backdrop-blur-xl bg-white/75 border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.07)]">
        <div className="hero-text inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-mono text-slate-800 mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span>Intelligent Systems &bull; Automation &bull; Scalable Tech</span>
        </div>

        <h1 className="hero-text text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 text-balance mb-6 leading-none">
          Next-Gen Software Solutions
        </h1>

        <p className="hero-text text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 text-balance font-normal">
          We architect custom software, intelligent AI/ML systems, and automated workflows for startups, growing organizations, and enterprise industries. You focus on your core business &mdash; we engineer and scale the technology, data pipelines, and digital infrastructure behind it.
        </p>

        <div className="hero-text flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 max-w-3xl mx-auto text-xs sm:text-sm text-slate-700 font-medium">
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-xs">&bull; Custom Software &amp; SaaS</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-xs">&bull; Process Automation</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-xs">&bull; AI &amp; Machine Learning</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-xs">&bull; ERP &amp; Operations</span>
        </div>

        <div className="hero-text flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-950/10 hover:scale-105"
          >
            Start a Project &rarr;
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 transition-all duration-300 hover:scale-105 shadow-xs"
          >
            Explore Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
