'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on devices that have a fine pointer (mouse)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let hasMoved = false;

    // Use GSAP quickTo for high performance mouse tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        setIsVisible(true);
      }
      xTo(e.clientX - 10);
      yTo(e.clientY - 10);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Event delegation for hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, textarea, select, [role="button"]')) {
        gsap.to(cursor, { scale: 2.2, opacity: 0.8, backgroundColor: 'rgba(225, 29, 72, 0.15)', borderColor: '#e11d48', borderWidth: '1px', borderStyle: 'solid', duration: 0.2 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, textarea, select, [role="button"]')) {
        gsap.to(cursor, { scale: 1, opacity: 1, backgroundColor: 'rgba(15, 23, 42, 0.75)', borderWidth: '0px', duration: 0.2 });
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className={`fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)' }}
    />
  );
}
