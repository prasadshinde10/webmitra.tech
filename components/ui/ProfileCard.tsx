'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Backlight } from '@/registry/magicui/backlight';

export interface ProfileCardProps {
  name: string;
  role: string;
  skills?: string[];
  imageUrl: string;
  className?: string;
  imagePosition?: string;
}

export function ProfileCard({
  name,
  role,
  skills,
  imageUrl,
  className,
  imagePosition = 'object-top',
}: ProfileCardProps) {
  return (
    <Backlight blur={35} className="w-full h-full">
      <div
        className={cn(
          'group relative h-full flex flex-col rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/95 backdrop-blur-2xl shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.05)] hover:border-rose-400/80 dark:hover:border-rose-500/80 transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(244,63,94,0.15)] hover:-translate-y-1',
          className
        )}
      >
        {/* Photo Container with Fixed Aspect Ratio */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-950">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              'object-cover transition-transform duration-500 group-hover:scale-105',
              imagePosition
            )}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        </div>

        {/* Content Details: Name, Role, and Clean Skills */}
        <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white dark:bg-slate-900/90">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 dark:text-white mb-1.5 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
              {name}
            </h3>
            <p className="text-xs sm:text-sm font-mono font-semibold text-rose-600 dark:text-rose-400 mb-4 leading-snug">
              {role}
            </p>
          </div>

          {skills && skills.length > 0 && (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Backlight>
  );
}
