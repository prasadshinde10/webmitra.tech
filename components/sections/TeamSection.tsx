'use client';

import { useEffect, useRef } from 'react';
import { ProfileCard } from '../ui/ProfileCard';
import gsap from 'gsap';

const teamMembers = [
  {
    name: 'Alex Rivera',
    role: 'Lead 3D Developer',
    skills: ['Three.js', 'WebGL', 'React Three Fiber', 'GLSL'],
    projects: ['Aurora Analytics 3D View', 'Virtual Showroom'],
    imageUrl: '/team/team_1.png',
  },
  {
    name: 'Maya Patel',
    role: 'Senior UI/UX Designer',
    skills: ['Figma', 'Framer Motion', 'User Research', 'Design Systems'],
    projects: ['Velocity Store Redesign', 'Equinox Capital'],
    imageUrl: '/team/team_1.png',
  },
  {
    name: 'Samir Johnson',
    role: 'Frontend Engineer',
    skills: ['Next.js', 'Tailwind CSS', 'GSAP', 'TypeScript'],
    projects: ['WebMitra Tech Solutions', 'Velocity Store'],
    imageUrl: '/team/team_1.png',
  },
  {
    name: 'Elena Rostova',
    role: 'Technical Lead',
    skills: ['System Architecture', 'Node.js', 'React', 'DevOps'],
    projects: ['Equinox Capital Core', 'Aurora Analytics Backend'],
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
          scale: 0.9,
          opacity: 0.5,
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 w-full mb-32">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            The minds behind the digital experiences.
          </p>
        </div>
      </div>

      <div className="relative pb-64">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="h-screen w-full flex items-start justify-center absolute top-0" style={{ position: 'relative', marginTop: idx === 0 ? '0' : '-50vh' }}>
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
