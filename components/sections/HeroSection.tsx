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
      className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <div className="max-w-5xl z-10">
        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance mb-6">
          Next-Gen Software Solutions
        </h1>
        <p className="hero-text text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We build immersive, performant, and premium digital experiences for the modern web. 
          Scroll to explore our universe.
        </p>
      </div>
    </section>
  );
}
