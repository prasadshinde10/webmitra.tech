'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Text3DFlip from '@/registry/magicui/text-3d-flip';
import { InteractiveHoverButton } from '@/registry/magicui/interactive-hover-button';

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
      {/* Ambient Subtle Gradient Glow */}
      <div 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 dark:from-cyan-500/15 dark:via-indigo-500/15 to-transparent blur-3xl rounded-full z-0" 
        aria-hidden="true"
      />

      {/* Transparent Content Container */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="hero-text inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200 mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span>Intelligent Systems &bull; Automation &bull; Scalable Tech</span>
        </div>

        <div className="hero-text mb-6">
          <Text3DFlip
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:font-black tracking-tight"
            flipTextClassName="text-slate-950 dark:text-white"
            textClassName="text-slate-950 dark:text-white"
            rotateDirection="top"
            staggerDuration={0.03}
            staggerFrom="first"
            transition={{ type: "spring", damping: 25, stiffness: 160 }}
          >
            Next-Gen Software Solutions
          </Text3DFlip>
        </div>

        <p className="hero-text text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 text-balance font-normal">
          We architect custom software, intelligent AI/ML systems, and automated workflows for startups, growing organizations, and enterprise industries. You focus on your core business &mdash; we engineer and scale the technology, data pipelines, and digital infrastructure behind it.
        </p>

        <div className="hero-text flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 max-w-3xl mx-auto text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
          <span className="px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs">&bull; Custom Software &amp; SaaS</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs">&bull; Process Automation</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs">&bull; AI &amp; Machine Learning</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs">&bull; ERP &amp; Operations</span>
        </div>

        <div className="hero-text flex flex-col sm:flex-row items-center justify-center gap-4">
          <InteractiveHoverButton href="#contact">Start a Project</InteractiveHoverButton>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200/90 dark:border-slate-800 transition-all duration-300 hover:scale-105 shadow-xs"
          >
            Explore Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
