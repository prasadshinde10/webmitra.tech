'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, TargetAndTransition, VariantLabels } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DiaTextRevealProps {
  text: string[];
  duration?: number;
  framerProps?: {
    initial?: TargetAndTransition | VariantLabels;
    animate?: TargetAndTransition | VariantLabels;
    exit?: TargetAndTransition | VariantLabels;
    transition?: object;
  };
  className?: string;
  repeat?: boolean;
  repeatDelay?: number;
}

export function DiaTextReveal({
  text = ["build", "ship", "scale", "smarter", "faster", "easier"],
  duration = 2400,
  framerProps = {
    initial: { opacity: 0, y: 24, filter: "blur(6px)", rotateX: 60 },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 },
    exit: { opacity: 0, y: -24, filter: "blur(6px)", rotateX: -60 },
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  className,
  repeat = true,
  repeatDelay = 1.2,
}: DiaTextRevealProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!repeat && index === text.length - 1) return;

    const delayMs = repeatDelay ? repeatDelay * 1000 : duration;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, delayMs);

    return () => clearInterval(interval);
  }, [text.length, duration, repeat, repeatDelay, index]);

  return (
    <span className="inline-block relative overflow-hidden py-1 align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={text[index]}
          className={cn(
            "inline-block bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-black tracking-tight",
            className
          )}
          {...framerProps}
        >
          {text[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
