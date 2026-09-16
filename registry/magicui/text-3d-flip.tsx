'use client';

import React from 'react';
import { motion, type Transition } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface Text3DFlipProps {
  children: string;
  className?: string;
  flipTextClassName?: string;
  textClassName?: string;
  rotateDirection?: 'top' | 'bottom' | 'left' | 'right';
  staggerDuration?: number;
  staggerFrom?: 'first' | 'last' | 'center' | number;
  transition?: Transition;
}

export function Text3DFlip({
  children,
  className,
  flipTextClassName,
  textClassName,
  rotateDirection = 'top',
  staggerDuration = 0.03,
  staggerFrom = 'first',
  transition = { type: 'spring', damping: 25, stiffness: 160 },
}: Text3DFlipProps) {
  const text = typeof children === 'string' ? children : String(children);
  const words = text.split(' ');

  // Count total characters for stagger index calculation
  let charIndexCounter = 0;
  const totalChars = text.length;

  const getDelay = (index: number) => {
    if (staggerFrom === 'first') {
      return index * staggerDuration;
    }
    if (staggerFrom === 'last') {
      return (totalChars - 1 - index) * staggerDuration;
    }
    if (staggerFrom === 'center') {
      return Math.abs(index - Math.floor(totalChars / 2)) * staggerDuration;
    }
    if (typeof staggerFrom === 'number') {
      return Math.abs(index - staggerFrom) * staggerDuration;
    }
    return index * staggerDuration;
  };

  const isTop = rotateDirection === 'top';
  const isBottom = rotateDirection === 'bottom';
  const isLeft = rotateDirection === 'left';
  const isRight = rotateDirection === 'right';

  const primaryVariants = {
    initial: {
      y: '0%',
      x: '0%',
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
    },
    hover: (custom: number) => ({
      y: isTop ? '-100%' : isBottom ? '100%' : '0%',
      x: isLeft ? '-100%' : isRight ? '100%' : '0%',
      rotateX: isTop ? 90 : isBottom ? -90 : 0,
      rotateY: isLeft ? -90 : isRight ? 90 : 0,
      opacity: 0,
      transition: {
        ...transition,
        delay: getDelay(custom),
      },
    }),
  };

  const secondaryVariants = {
    initial: {
      y: isTop ? '100%' : isBottom ? '-100%' : '0%',
      x: isLeft ? '100%' : isRight ? '-100%' : '0%',
      rotateX: isTop ? -90 : isBottom ? 90 : 0,
      rotateY: isLeft ? 90 : isRight ? -90 : 0,
      opacity: 0,
    },
    hover: (custom: number) => ({
      y: '0%',
      x: '0%',
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
      transition: {
        ...transition,
        delay: getDelay(custom),
      },
    }),
  };

  return (
    <motion.span
      initial="initial"
      whileHover="hover"
      animate="initial"
      className={cn(
        'relative inline-flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-3.5 cursor-pointer select-none leading-tight py-1',
        className
      )}
    >
      {words.map((word, wordIdx) => (
        <span
          key={wordIdx}
          className="inline-flex whitespace-nowrap overflow-hidden"
          style={{ perspective: 1000 }}
        >
          {word.split('').map((char, charIdx) => {
            const currentGlobalIndex = charIndexCounter++;
            return (
              <span
                key={charIdx}
                className="relative inline-block overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Front character layer */}
                <motion.span
                  custom={currentGlobalIndex}
                  variants={primaryVariants}
                  className={cn(
                    'inline-block origin-bottom transition-colors',
                    textClassName
                  )}
                  style={{
                    display: 'inline-block',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {char}
                </motion.span>

                {/* Back / Flip character layer */}
                <motion.span
                  custom={currentGlobalIndex}
                  variants={secondaryVariants}
                  className={cn(
                    'absolute inset-0 inline-block origin-top transition-colors',
                    flipTextClassName
                  )}
                  style={{
                    display: 'inline-block',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {char}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </motion.span>
  );
}

export default Text3DFlip;
