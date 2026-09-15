'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use GSAP quickTo for high performance mouse tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      // Center the cursor
      xTo(e.clientX - 10);
      yTo(e.clientY - 10);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Hover effect logic
    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 3, opacity: 0.5, backgroundColor: 'white', mixBlendMode: 'difference', duration: 0.3 });
    };
    
    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, backgroundColor: 'hsl(var(--primary))', mixBlendMode: 'normal', duration: 0.3 });
    };

    // Add listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]"
      style={{ backgroundColor: 'hsl(var(--primary))' }}
    />
  );
}
