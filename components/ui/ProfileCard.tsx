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
      className={cn('profile-card sticky top-32 w-full max-w-4xl mx-auto h-[60vh] rounded-3xl overflow-hidden shadow-2xl flex border border-white/10 bg-black', className)}
      style={{ zIndex: index, transformOrigin: 'top center' }}
    >
      <div className="w-1/3 h-full relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black" />
      </div>
      
      <div className="w-2/3 p-12 flex flex-col justify-center">
        <h3 className="text-4xl font-bold text-white mb-2">{name}</h3>
        <p className="text-primary text-xl font-mono mb-8">{role}</p>
        
        <div className="mb-6">
          <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-3">Core Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/5">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-3">Key Projects</h4>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            {projects.map((project, i) => (
              <li key={i}>{project}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
