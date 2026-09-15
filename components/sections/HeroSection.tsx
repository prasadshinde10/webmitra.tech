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
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16"
    >
      <div className="max-w-5xl z-10">
        <div className="hero-text inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-mono text-slate-800 mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span>Intelligent Systems &bull; Automation &bull; Scalable Tech</span>
        </div>

        <h1 className="hero-text text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 text-balance mb-6">
          Next-Gen Software Solutions
        </h1>

        <p className="hero-text text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 text-balance">
          We architect custom software, intelligent AI/ML systems, and automated workflows for startups, growing organizations, and enterprise industries. You focus on your core business &mdash; we engineer and scale the technology, data pipelines, and digital infrastructure behind it.
        </p>

        <div className="hero-text flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 max-w-2xl mx-auto text-xs sm:text-sm text-slate-700 font-medium">
          <span className="px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs">&bull; Custom Software &amp; SaaS</span>
          <span className="px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs">&bull; Process Automation</span>
          <span className="px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs">&bull; AI &amp; Machine Learning</span>
          <span className="px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs">&bull; ERP &amp; Operations</span>
        </div>

        <div className="hero-text flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all duration-300 shadow-md shadow-slate-900/10 hover:scale-105"
          >
            Start a Project &rarr;
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all duration-300 hover:scale-105 shadow-xs"
          >
            Explore Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
