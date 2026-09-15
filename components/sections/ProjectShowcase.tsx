'use client';

import { useEffect, useRef } from 'react';
import { ProjectItem } from '../ui/ProjectItem';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const projects = [
  {
    title: 'Aurora Analytics',
    category: 'SaaS Dashboard',
    imageUrl: '/projects/project_one.png',
  },
  {
    title: 'Velocity Store',
    category: 'E-commerce App',
    imageUrl: '/projects/project_two.png',
  },
  {
    title: 'Equinox Capital',
    category: 'Fintech Platform',
    imageUrl: '/projects/project_three.png',
  },
];

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-background">
      <div className="absolute top-12 left-12 md:top-24 md:left-24 z-10">
        <h2 className="text-5xl md:text-7xl font-bold">Selected Works</h2>
        <p className="text-muted-foreground mt-4 text-xl">Scroll to explore our featured projects.</p>
      </div>

      <div className="flex items-center h-full pt-32">
        <div ref={trackRef} className="flex gap-8 px-12 md:px-24 flex-nowrap w-max">
          {projects.map((project, idx) => (
            <ProjectItem key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
