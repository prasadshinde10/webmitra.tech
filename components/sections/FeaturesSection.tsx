'use client';

import { useEffect, useRef } from 'react';
import { FeatureCard } from '../ui/FeatureCard';
import { Monitor, Cpu, Code2, Zap, Layers, BarChart3 } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Custom Software & SaaS',
    description: 'Custom web apps, enterprise software, SaaS platforms, customer portals, and scalable API backend architectures engineered for high reliability.',
    icon: Code2,
  },
  {
    title: 'Process Automation',
    description: 'If a workflow is manual, repetitive, or dependent on disconnected spreadsheets, we build automated pipelines, document processing, and approval chains.',
    icon: Zap,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Predictive analytics, forecasting engines, intelligent document processing, recommendation models, and practical Generative AI integrations.',
    icon: Cpu,
  },
  {
    title: 'ERP & Business Systems',
    description: 'Customized ERP solutions, inventory and operations management, CRM platforms, and complete enterprise process digitization.',
    icon: Layers,
  },
  {
    title: 'Data & Analytics',
    description: 'Interactive business intelligence dashboards, real-time data pipelines, automated reporting, and decision-support systems that unlock data value.',
    icon: BarChart3,
  },
  {
    title: 'Modern Frontend & UX',
    description: 'High-performance web apps, interactive 3D visualizations, component design systems, and responsive, accessible mobile-first interfaces.',
    icon: Monitor,
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
              start: 'top 80%',
              end: 'top 45%',
              scrub: 0.8,
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="relative w-full py-28 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono text-rose-700 mb-4 shadow-xs">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 mb-4 tracking-tight">
            Comprehensive Software Ecosystem
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            We don&apos;t just build websites. We deliver full-stack technology solutions &mdash; from bespoke enterprise software and automation to predictive AI and scalable infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
