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
    <div className={cn('relative w-[80vw] md:w-[40vw] h-[60vh] shrink-0 group overflow-hidden rounded-3xl', className)}>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
        <div>
          <p className="text-primary font-mono text-sm mb-2">{category}</p>
          <h3 className="text-3xl md:text-5xl font-bold text-white">{title}</h3>
        </div>
        <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
          <ArrowUpRight className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
