'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ProjectItemProps {
  title: string;
  category: string;
  imageUrl: string;
  className?: string;
}

export function ProjectItem({ title, category, imageUrl, className }: ProjectItemProps) {
  return (
    <div className={cn('relative w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[36vw] h-[48vh] sm:h-[55vh] md:h-[60vh] shrink-0 group overflow-hidden rounded-3xl border border-slate-200/80 shadow-xl', className)}>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end gap-4">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 font-mono text-xs mb-2">{category}</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h3>
        </div>
        <a 
          href="#contact"
          aria-label={`Inquire about ${title}`}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-rose-600 group-hover:border-rose-600 transition-all duration-300 shrink-0 shadow-lg"
        >
          <ArrowUpRight className="text-white w-5 h-5 md:w-6 md:h-6 group-hover:rotate-45 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}
