'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface BacklightProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: number | string;
  className?: string;
  glowClassName?: string;
  color?: string;
  children?: React.ReactNode;
}

export function Backlight({
  blur = 40,
  className,
  glowClassName,
  color,
  children,
  ...props
}: BacklightProps) {
  const blurValue = typeof blur === 'number' ? `${blur}px` : blur;

  return (
    <div className={cn("relative group/backlight", className)} {...props}>
      {/* Modern Atmospheric Background Glow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-500/20 via-indigo-500/20 to-cyan-500/20 dark:from-rose-500/25 dark:via-indigo-500/25 dark:to-cyan-500/25 opacity-30 group-hover/backlight:opacity-90 dark:opacity-40 dark:group-hover/backlight:opacity-100 transition-all duration-500 -z-10",
          glowClassName
        )}
        style={{
          filter: `blur(${blurValue})`,
          backgroundColor: color,
        }}
      />
      {children}
    </div>
  );
}

export default Backlight;
