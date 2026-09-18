'use client';

import React from 'react';
import { ProfileCard } from '../ui/ProfileCard';

const teamMembers = [
  {
    name: 'Prasad Shinde',
    role: 'Founder & AI Lead Architect Full-Stack Engineer',
    skills: ['Data Scientist', 'AI Systems Architecture', 'Next.js & MERN', 'Cloud'],
    imageUrl: '/team/prasad.jpg',
    imagePosition: 'object-center',
  },
  {
    name: 'Sanket Dhotre',
    role: 'Lead Frontend Developer',
    skills: ['AI UI/UX Design', 'Design Systems', 'Generative AI', 'Cybersecurity', 'Software Tester'],
    imageUrl: '/team/sanket.jpg',
    imagePosition: 'object-top',
  },
  {
    name: 'Chaitanya Mundhe',
    role: 'Lead Backend Developer',
    skills: ['Machine Learning', 'React & Node.js', 'High-Scale Backend', 'Database Systems'],
    imageUrl: '/team/chaitanya.jpg',
    imagePosition: 'object-top',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative w-full py-28 bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors overflow-hidden">
      {/* Ambient Atmospheric Background Glows for Depth & Separation */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-rose-500/10 via-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-24 w-[450px] h-[450px] bg-gradient-to-tl from-rose-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-xs font-mono text-rose-700 dark:text-rose-300 font-semibold mb-4 shadow-xs">
            <span>Our Experts</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-slate-950 dark:text-white">
            Multidisciplinary Engineering Team
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl mx-auto text-balance">
            Direct access to dedicated AI architects, full-stack engineers, and modern product designers &mdash; committed to building and scaling your digital infrastructure.
          </p>
        </div>

        {/* 3-Column Balanced Layout on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto justify-items-stretch items-stretch">
          {teamMembers.map((member, idx) => (
            <ProfileCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
