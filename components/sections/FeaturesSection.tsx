'use client';

import { useEffect, useRef } from 'react';
import { FeatureCard, FeatureItemData } from '../ui/FeatureCard';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features: FeatureItemData[] = [
  {
    id: 'saas',
    title: 'Custom Software & SaaS',
    category: 'Full-Stack Architecture',
    tagline: 'High-concurrency microservices & multi-tenant SaaS platforms.',
    description: 'Bespoke web applications, SaaS platforms, customer portals, and high-throughput REST/GraphQL APIs engineered with resilient databases and cloud infrastructure.',
    tags: ['Next.js 14', 'Node / FastAPI', 'PostgreSQL', 'Docker'],
    metric: '99.99%',
    metricLabel: 'SLA Uptime',
  },
  {
    id: 'automation',
    title: 'Process Automation',
    category: 'Zero-Manual Ops',
    tagline: 'End-to-end webhook pipelines & intelligent document workflows.',
    description: 'If your business operations are manual, repetitive, or trapped in disconnected spreadsheets, we build event-driven pipelines, instant API syncs, and automated approval logic.',
    tags: ['Webhook Pipelines', 'Doc Extraction', 'Approval Logic', 'Sync APIs'],
    metric: '10x',
    metricLabel: 'Speed Gain',
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    category: 'Intelligent Systems',
    tagline: 'Predictive forecasting, custom embeddings & Generative AI.',
    description: 'Enterprise AI integrations including predictive demand modeling, RAG-powered vector search, document NLP classifiers, and automated recommendation engines.',
    tags: ['Predictive ML', 'Vector RAG / LLM', 'NLP Pipelines', 'PyTorch / Python'],
    metric: '99.4%',
    metricLabel: 'Accuracy',
  },
  {
    id: 'erp',
    title: 'ERP & Business Systems',
    category: 'Enterprise Operations',
    tagline: 'Centralized operations, supply chain & role-based RBAC.',
    description: 'Customized ERP solutions, inventory control, automated financial invoicing, customer relationship management (CRM), and unified internal digitization.',
    tags: ['Custom ERP', 'Inventory Engine', 'Multi-Role RBAC', 'Audit Trail'],
    metric: '100%',
    metricLabel: 'Data Integrity',
  },
  {
    id: 'analytics',
    title: 'Data & BI Analytics',
    category: 'Decision Clarity',
    tagline: 'Executive dashboards, real-time KPI streams & automated ETL.',
    description: 'Interactive business intelligence dashboards, real-time data streaming pipelines, and automated reporting systems that convert raw operational data into strategic decisions.',
    tags: ['Executive BI', 'Real-Time ETL', 'Custom Dashboards', 'KPI Alerts'],
    metric: '+38.4%',
    metricLabel: 'Avg. ROI Growth',
  },
  {
    id: 'frontend',
    title: 'Modern Frontend & UX',
    category: 'High-Performance UI',
    tagline: 'Fluid 60 FPS interfaces, 3D WebGL & component design systems.',
    description: 'High-performance web applications, interactive 3D WebGL visualizations, component design systems, and responsive, accessible, mobile-first architectures.',
    tags: ['Three.js / WebGL', 'GSAP Animation', 'Tailwind CSS', 'Accessible UI'],
    metric: '100/100',
    metricLabel: 'Core Web Vitals',
  },
];

import { DiaTextReveal } from "@/registry/magicui/dia-text-reveal";
import { Backlight } from "@/registry/magicui/backlight";

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Flip animation on scroll for all card inners
      gsap.utils.toArray<HTMLElement>('.feature-card-inner').forEach((card) => {
        gsap.fromTo(card,
          { rotationY: 0 },
          {
            rotationY: 180,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
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
    <section id="features" ref={sectionRef} className="relative w-full py-28 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors overflow-hidden">
      {/* Ambient Atmospheric Background Glows for Depth & Separation */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-rose-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-xs font-mono text-rose-700 dark:text-rose-300 font-semibold mb-4 shadow-xs">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-950 dark:text-white mb-4">
            Comprehensive Software Ecosystem to{" "}
            <DiaTextReveal
              text={["build", "ship", "scale", "smarter", "faster", "easier"]}
              repeat
              repeatDelay={1.2}
            />
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-base sm:text-lg text-balance">
            We don&apos;t just build websites. We deliver full-stack technology solutions &mdash; from bespoke enterprise software and automation to predictive AI and scalable digital infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {features.map((feature, idx) => (
            <Backlight key={idx} blur={40} className="w-full max-w-sm">
              <FeatureCard {...feature} />
            </Backlight>
          ))}
        </div>
      </div>
    </section>
  );
}
