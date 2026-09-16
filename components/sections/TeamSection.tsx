'use client';

import { useEffect, useRef } from 'react';
import { ProfileCard } from '../ui/ProfileCard';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: 'Prasad Shinde',
    role: 'Lead Architect & Full-Stack Engineer',
    skills: ['MERN Stack', 'System Architecture', 'Node.js', 'PostgreSQL', 'Cloud & DevOps', 'REST / GraphQL APIs'],
    projects: ['OmniFlow Enterprise ERP', 'Scalable Microservices Core', 'Cloud Infrastructure Setup'],
    imageUrl: '/team/team_1.png',
  },
  {
    name: 'AI & Data Science Specialist',
    role: 'Machine Learning & Analytics Lead',
    skills: ['Machine Learning', 'Predictive Modeling', 'NLP & LLM Integrations', 'Data Pipelines', 'Python / PyTorch'],
    projects: ['PulseAI Forecasting Engine', 'Intelligent Document Processing', 'Customer Segmentation Models'],
    imageUrl: '/team/team_1.png',
  },
  {
    name: 'Modern Frontend Specialist',
    role: 'Senior UI/UX & Frontend Developer',
    skills: ['Next.js 14', 'React', 'Three.js / WebGL', 'GSAP Animation', 'Tailwind CSS', 'High-Performance UI'],
    projects: ['WebMitra 3D Interactive Platform', 'Nexus Commerce Engine', 'Responsive Enterprise Portals'],
    imageUrl: '/team/team_1.png',
  },
  {
    name: 'UI/UX & Product Architect',
    role: 'Product Designer & UX Strategist',
    skills: ['User Research', 'Design Systems', 'Wireframing & Prototyping', 'UX Architecture', 'Usability Testing'],
    projects: ['Equinox Financial Suite Redesign', 'OmniFlow Design System', 'SaaS Dashboard Frameworks'],
    imageUrl: '/team/team_1.png',
  }
];

export default function TeamSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.profile-card');
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // Don't scale down the last card
        
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.6,
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top 85%',
            end: 'top 35%',
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={containerRef} className="relative w-full py-24 bg-slate-50/50 dark:bg-slate-950/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 w-full mb-20 md:mb-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-xs font-mono text-rose-700 dark:text-rose-300 font-semibold mb-4 shadow-xs">
            <span>Unified Technical Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-slate-950 dark:text-white">Multidisciplinary Engineering</h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl max-w-3xl mx-auto text-balance">
            You don&apos;t need to coordinate with multiple disjointed technology vendors. We bring MERN developers, AI engineers, data science specialists, modern frontend architects, and UI/UX designers together under one roof.
          </p>
        </div>
      </div>

      <div className="relative pb-24 px-4">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="w-full flex items-start justify-center mb-16 md:mb-24">
            <ProfileCard 
              {...member} 
              index={idx} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
