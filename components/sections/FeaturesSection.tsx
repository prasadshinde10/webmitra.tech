'use client';

import { useEffect, useRef } from 'react';
import { FeatureCard } from '../ui/FeatureCard';
import { Monitor, Cpu, Code2 } from 'lucide-react';
import gsap from 'gsap';

const features = [
  {
    title: '3D Immersive Design',
    description: 'We build digital spaces that captivate audiences with high-performance WebGL and React Three Fiber integrations.',
    icon: Monitor,
  },
  {
    title: 'High Performance',
    description: 'Optimized models, compressed textures, and efficient render loops ensure buttery smooth 60fps experiences.',
    icon: Cpu,
  },
  {
    title: 'Modern Stack',
    description: 'Leveraging Next.js 14, Tailwind CSS, and Framer Motion to deliver scalable and maintainable architectures.',
    icon: Code2,
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Flip animation on scroll
      gsap.utils.toArray<HTMLElement>('.feature-card-inner').forEach((card) => {
        gsap.fromTo(card,
          { rotationY: 0 },
          {
            rotationY: 180,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              end: 'top 45%',
              scrub: 1, // Smooth scrub
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our approach combines aesthetic brilliance with technical excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
