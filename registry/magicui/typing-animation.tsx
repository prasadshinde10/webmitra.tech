'use client';

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface TypingAnimationProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  cursor?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 45,
  delay = 150,
  as: Component = 'h2',
  cursor = true,
}: TypingAnimationProps) {
  const text = typeof children === 'string' ? children : String(children);
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          setIsCompleted(true);
          clearInterval(interval);
        }
      }, duration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [started, text, duration, delay]);

  return (
    <Component
      ref={elementRef}
      className={cn('inline-block tracking-tight', className)}
    >
      {displayedText || (started ? '' : text)}
      {cursor && (
        <span
          className={cn(
            'inline-block w-[3px] h-[0.85em] align-baseline bg-rose-600 dark:bg-rose-400 ml-1.5 transition-opacity',
            isCompleted ? 'animate-pulse opacity-75' : 'animate-ping opacity-100'
          )}
        />
      )}
    </Component>
  );
}

export default TypingAnimation;
