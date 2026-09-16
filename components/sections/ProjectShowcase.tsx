'use client';

import { useEffect, useRef } from 'react';
import { ProjectItem } from '../ui/ProjectItem';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'OmniFlow Enterprise ERP',
    category: 'ERP & Process Digitization',
    imageUrl: '/projects/project_one.png',
  },
  {
    title: 'PulseAI Intelligence',
    category: 'AI & Predictive Analytics',
    imageUrl: '/projects/project_two.png',
  },
  {
    title: 'Equinox Financial Suite',
    category: 'Custom Fintech Platform',
    imageUrl: '/projects/project_three.png',
  },
  {
    title: 'Nexus Commerce Engine',
    category: 'High-Performance E-commerce',
    imageUrl: '/projects/project_one.png',
  },
];

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const diff = trackWidth - window.innerWidth;
        return diff > 0 ? -diff : 0;
      };

      const tween = gsap.to(track, {
        x: () => getScrollAmount(),
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${Math.max(window.innerHeight * 0.8, Math.abs(getScrollAmount()))}`,
        pin: true,
        animation: tween,
        scrub: 0.6,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      });

      // Refresh ScrollTrigger after cards layout
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-white dark:bg-slate-950 transition-colors">
      <div className="absolute top-6 left-6 md:top-20 md:left-20 z-10">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tight">Selected Works</h2>
        <p className="text-slate-600 dark:text-slate-300 mt-2 md:mt-4 text-sm md:text-xl">
          Real software systems, ERPs, and automation platforms we engineered.
        </p>
      </div>

      <div className="flex items-center h-full pt-28 md:pt-32">
        <div ref={trackRef} className="flex gap-6 md:gap-8 px-6 md:px-20 flex-nowrap w-max">
          {projects.map((project, idx) => (
            <ProjectItem key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
