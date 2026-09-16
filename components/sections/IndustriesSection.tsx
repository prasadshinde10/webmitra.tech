'use client';

import React, { useState } from 'react';
import { 
  Stethoscope, 
  Landmark, 
  Factory, 
  ShoppingBag, 
  GraduationCap, 
  Sprout, 
  Hotel, 
  Rocket, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const industries = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Stethoscope,
    tagline: 'Patient management, diagnostics & clinical workflows',
    solutions: [
      'HIPAA-conscious electronic health systems',
      'Automated patient appointment & billing portals',
      'Diagnostic AI pipelines & report generation',
      'Inventory & pharmacy tracking modules',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Logistics',
    icon: Factory,
    tagline: 'Supply chain visibility, shop-floor ERP & automation',
    solutions: [
      'Custom production planning & dispatch ERP',
      'IoT & warehouse inventory automation',
      'Automated vendor order reconciliation',
      'Predictive maintenance & asset tracking',
    ],
  },
  {
    id: 'finance',
    name: 'Finance & Fintech',
    icon: Landmark,
    tagline: 'High-security financial portals, analytics & reporting',
    solutions: [
      'Automated reconciliation & audit pipelines',
      'Custom customer onboarding & KYC workflows',
      'Real-time financial BI dashboards',
      'Algorithmic decision-support systems',
    ],
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    icon: ShoppingBag,
    tagline: 'Omnichannel commerce, customer retention & inventory',
    solutions: [
      'High-performance custom storefronts',
      'Multi-channel inventory synchronization',
      'Automated order fulfillment workflows',
      'AI recommendation & customer segmentation engines',
    ],
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    icon: GraduationCap,
    tagline: 'Campus ERP, interactive portals & administrative automation',
    solutions: [
      'Comprehensive student lifecycle & fee systems',
      'Custom learning management platforms',
      'Automated parent-student notification triggers',
      'Examination & grading analytics dashboards',
    ],
  },
  {
    id: 'realestate',
    name: 'Real Estate & Hospitality',
    icon: Hotel,
    tagline: 'Booking systems, tenant portals & operations tracking',
    solutions: [
      'Custom booking & reservation engines',
      'Property portfolio & tenant management',
      'Automated lead routing from ad channels',
      'Staff task & maintenance workflow pipelines',
    ],
  },
  {
    id: 'agriculture',
    name: 'Agriculture & AgTech',
    icon: Sprout,
    tagline: 'Procurement networks, yield tracking & vendor systems',
    solutions: [
      'Farm-to-market inventory & pricing platforms',
      'Crop yield & sensor data collection pipelines',
      'Automated farmer payout & reconciliation systems',
      'Supply chain tracking for agro-enterprises',
    ],
  },
  {
    id: 'startups',
    name: 'Startups & SMEs',
    icon: Rocket,
    tagline: 'Rapid MVP deployment, scalable cloud backends & digitizing manual work',
    solutions: [
      'Zero-to-one custom web applications & SaaS MVPs',
      'Migrating Excel/spreadsheet chaos to centralized tools',
      'Scalable cloud architecture designed for 10x growth',
      'Continuous technical partnership without vendor fragmentation',
    ],
  },
];

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeIndustry = industries[activeTab];

  return (
    <section id="industries" className="relative w-full py-24 bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-xs font-mono text-rose-700 dark:text-rose-300 mb-4 shadow-xs">
            <span>Industry-Specific Solutions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 dark:text-white mb-4 tracking-tight">
            Tailored to Your Operational Workflows
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-base sm:text-lg text-balance">
            Every industry has unique workflows, constraints, and operational bottlenecks. We don&apos;t offer one-size-fits-all software. <strong className="text-slate-900 dark:text-white font-semibold">We understand the problem first and engineer the technology around it.</strong>
          </p>
        </div>

        {/* Industry selector tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isActive = idx === activeTab;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md scale-105'
                    : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800 shadow-xs'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-rose-400' : 'text-rose-600 dark:text-rose-400'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active industry detail card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 shadow-xl shadow-slate-200/50 dark:shadow-black/50 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-100 dark:border-rose-900 flex items-center justify-center shrink-0 shadow-xs">
                {React.createElement(activeIndustry.icon, { className: 'w-7 h-7 text-rose-600 dark:text-rose-400' })}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white mb-1">
                  {activeIndustry.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  {activeIndustry.tagline}
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-rose-600 dark:text-rose-400 font-semibold hover:text-rose-700 dark:hover:text-rose-300 hover:underline self-start md:self-auto"
            >
              <span>Discuss {activeIndustry.name} Solution</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeIndustry.solutions.map((sol, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800"
              >
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-800 dark:text-slate-200 leading-snug font-medium">{sol}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
