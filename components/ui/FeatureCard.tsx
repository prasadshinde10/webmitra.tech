'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <div className={cn('feature-card-wrapper w-full max-w-sm h-80 group perspective-1000', className)}>
      <div className="feature-card-inner relative w-full h-full duration-1000 preserve-3d">
        
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-background/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm opacity-80">Hover or Scroll to reveal</p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary text-primary-foreground rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
