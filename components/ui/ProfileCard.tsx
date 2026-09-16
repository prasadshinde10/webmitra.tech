import React from 'react';
import { cn } from '@/lib/utils';

interface ProfileCardProps {
  name: string;
  role: string;
  skills: string[];
  projects: string[];
  imageUrl: string;
  index: number;
  className?: string;
}

export function ProfileCard({ name, role, skills, projects, imageUrl, index, className }: ProfileCardProps) {
  return (
    <div 
      className={cn('profile-card sticky top-24 md:top-32 w-full max-w-4xl mx-auto min-h-[520px] md:h-[60vh] rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] dark:shadow-black/60 flex flex-col md:flex-row border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 backdrop-blur-md', className)}
      style={{ zIndex: index, transformOrigin: 'top center' }}
    >
      <div className="w-full h-48 sm:h-56 md:w-1/3 md:h-full relative shrink-0 bg-slate-100 dark:bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-white dark:to-slate-900 opacity-90 md:opacity-100" />
      </div>
      
      <div className="w-full md:w-2/3 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-slate-900">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 dark:text-white mb-1 md:mb-2">{name}</h3>
        <p className="text-rose-600 dark:text-rose-400 font-semibold text-base sm:text-lg md:text-xl font-mono mb-4 md:mb-6">{role}</p>
        
        <div className="mb-4 md:mb-6">
          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 md:mb-3">Core Skills</h4>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 md:mb-3">Key Projects</h4>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1.5 text-xs sm:text-sm">
            {projects.map((project, i) => (
              <li key={i}>{project}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
