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
        <div className="absolute w-full h-full backface-hidden bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-6 shadow-xs">
            <Icon className="w-8 h-8 text-rose-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-500 text-xs font-mono uppercase tracking-wider">Hover or Scroll to reveal</p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-950 text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl border border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center mb-4">
            <Icon className="w-5 h-5 text-rose-400" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
