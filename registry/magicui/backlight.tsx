'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface BacklightProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: number | string;
  className?: string;
  glowClassName?: string;
  color?: string;
  spotlight?: boolean;
  spotlightColor?: string;
  children?: React.ReactNode;
}

export function Backlight({
  blur = 40,
  className,
  glowClassName,
  color,
  spotlight = true,
  spotlightColor,
  children,
  ...props
}: BacklightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const blurValue = typeof blur === 'number' ? `${blur}px` : blur;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative group/backlight", className)}
      {...props}
    >
      {/* Modern Atmospheric Background Glow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-rose-500/25 via-indigo-500/20 to-cyan-500/25 dark:from-rose-500/30 dark:via-indigo-500/30 dark:to-cyan-500/30 opacity-40 group-hover/backlight:opacity-100 transition-all duration-500 -z-10 shadow-lg",
          glowClassName
        )}
        style={{
          filter: `blur(${blurValue})`,
          backgroundColor: color,
        }}
      />

      {/* Mouse-Tracking Spotlight Glow */}
      {spotlight && isHovered && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover/backlight:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(320px circle at ${position.x}px ${position.y}px, ${spotlightColor || 'rgba(244, 63, 94, 0.12)'}, transparent 80%)`,
          }}
        />
      )}

      {children}
    </div>
  );
}

export default Backlight;
