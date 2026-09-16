'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Code2, 
  Zap, 
  Cpu, 
  Layers, 
  BarChart3, 
  Monitor, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Database,
  Workflow
} from 'lucide-react';

export interface FeatureItemData {
  id: 'saas' | 'automation' | 'ai' | 'erp' | 'analytics' | 'frontend';
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  metric: string;
  metricLabel: string;
}

// 1. SaaS / Custom Software Code Widget
function SaasWidget() {
  return (
    <div className="w-full rounded-2xl bg-slate-950 p-4 font-mono text-xs text-slate-300 border border-slate-800 shadow-inner overflow-hidden">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[11px] text-slate-400 font-medium">api/v1/architecture.ts</span>
        <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30">200 OK</span>
      </div>
      <div className="space-y-1 text-[11px] leading-relaxed">
        <div className="text-slate-500">{`// Enterprise Microservices Engine`}</div>
        <div>
          <span className="text-rose-400">const</span> <span className="text-blue-300">platform</span> = <span className="text-rose-400">await</span> <span className="text-amber-300">deployCore</span>({'{'}
        </div>
        <div className="pl-4">
          <span className="text-slate-400">multiTenant:</span> <span className="text-emerald-300">true</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">dbCluster:</span> <span className="text-amber-200">&quot;PostgreSQL&quot;</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">latency:</span> <span className="text-emerald-300">&quot;&lt;12ms&quot;</span>
        </div>
        <div>{'}'});</div>
      </div>
    </div>
  );
}

// 2. Process Automation Pipeline Widget
function AutomationWidget() {
  return (
    <div className="w-full rounded-2xl bg-slate-50/90 border border-slate-200 p-4 shadow-inner">
      <div className="flex items-center justify-between text-[11px] font-mono font-semibold text-slate-500 mb-3">
        <span className="flex items-center gap-1 text-amber-700">
          <Workflow className="w-3.5 h-3.5 text-amber-600" />
          <span>Active Pipeline Trigger</span>
        </span>
        <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          0.2s Execution
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        {/* Step 1 */}
        <div className="flex-1 bg-white border border-slate-200 rounded-xl p-2.5 text-center shadow-xs">
          <div className="text-[10px] text-slate-400 uppercase font-mono font-semibold">Intake</div>
          <div className="text-xs font-bold text-slate-800 mt-0.5">Webhook / Form</div>
        </div>

        <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 animate-pulse" />

        {/* Step 2 */}
        <div className="flex-1 bg-amber-500/10 border border-amber-300/60 rounded-xl p-2.5 text-center shadow-xs">
          <div className="text-[10px] text-amber-700 uppercase font-mono font-semibold">AI Parse</div>
          <div className="text-xs font-bold text-amber-900 mt-0.5">Filter &amp; Validate</div>
        </div>

        <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0 animate-pulse" />

        {/* Step 3 */}
        <div className="flex-1 bg-emerald-500/10 border border-emerald-300/60 rounded-xl p-2.5 text-center shadow-xs">
          <div className="text-[10px] text-emerald-700 uppercase font-mono font-semibold">Auto-Sync</div>
          <div className="text-xs font-bold text-emerald-900 mt-0.5">ERP Dispatched</div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-200/80 text-[11px] text-slate-600">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Zero manual spreadsheets</span>
        </span>
        <span className="font-mono font-semibold text-slate-700">10x Speed Gain</span>
      </div>
    </div>
  );
}

// 3. AI & Machine Learning Widget
function AiWidget() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-violet-950 via-slate-950 to-slate-950 border border-violet-900/40 p-4 text-white shadow-inner">
      <div className="flex items-center justify-between text-xs font-mono mb-3">
        <div className="flex items-center gap-1.5 text-violet-300">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span className="font-semibold">Neural Inference Engine</span>
        </div>
        <span className="text-[11px] text-violet-200 bg-violet-900/60 px-2 py-0.5 rounded-full border border-violet-700/50">
          99.4% Confidence
        </span>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-3">
        <div className="text-[10px] text-violet-300 font-mono uppercase mb-1">Live Prediction Matrix</div>
        <p className="text-xs text-slate-200 leading-snug">
          &ldquo;Predictive demand spike identified &mdash; Auto-reordering 1,400 units.&rdquo;
        </p>
      </div>

      {/* Accuracy meter bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-[11px] font-mono text-slate-400">
          <span>Model Accuracy</span>
          <span className="text-violet-300 font-bold">99.4%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-violet-500 via-rose-500 to-emerald-400 w-[94%]" />
        </div>
      </div>
    </div>
  );
}

// 4. ERP & Business Operations Widget
function ErpWidget() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-4 shadow-inner">
      <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-600 mb-3">
        <span className="flex items-center gap-1.5 text-blue-700">
          <Database className="w-3.5 h-3.5 text-blue-600" />
          <span>OmniFlow ERP Core</span>
        </span>
        <span className="text-[10px] text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full border border-blue-200">
          Multi-Role RBAC
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-white border border-slate-200 rounded-xl p-2.5 text-center shadow-xs">
          <div className="text-[10px] font-mono text-slate-500 uppercase">Inventory</div>
          <div className="text-xs font-bold text-emerald-600 mt-0.5">94% Stock</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-2.5 text-center shadow-xs">
          <div className="text-[10px] font-mono text-slate-500 uppercase">Daily Flow</div>
          <div className="text-xs font-bold text-blue-600 mt-0.5">+$48.2k</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-2.5 text-center shadow-xs">
          <div className="text-[10px] font-mono text-slate-500 uppercase">Audit</div>
          <div className="text-xs font-bold text-slate-800 mt-0.5">Logged</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>Real-time DB Sync</span>
        </span>
        <span className="font-mono text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          🟢 All Systems Operational
        </span>
      </div>
    </div>
  );
}

// 5. Data Analytics & BI Widget
function AnalyticsWidget() {
  return (
    <div className="w-full rounded-2xl bg-slate-900 border border-slate-800 p-4 text-white shadow-inner">
      <div className="flex items-center justify-between text-xs font-mono mb-3">
        <span className="flex items-center gap-1.5 text-teal-300">
          <Activity className="w-3.5 h-3.5 text-teal-400" />
          <span className="font-semibold">Real-Time BI Stream</span>
        </span>
        <span className="text-emerald-400 font-bold bg-emerald-950/70 border border-emerald-500/40 text-[10px] px-2 py-0.5 rounded-full">
          +38.4% YoY
        </span>
      </div>

      {/* Simulated animated multi-bar chart */}
      <div className="flex items-end justify-between gap-2 h-16 bg-slate-950/70 rounded-xl p-2.5 border border-slate-800/80 mb-3">
        <div className="w-full bg-gradient-to-t from-teal-600 to-teal-400 rounded-t h-[35%]" />
        <div className="w-full bg-gradient-to-t from-teal-600 to-teal-400 rounded-t h-[55%]" />
        <div className="w-full bg-gradient-to-t from-teal-600 to-teal-400 rounded-t h-[45%]" />
        <div className="w-full bg-gradient-to-t from-teal-600 to-teal-400 rounded-t h-[75%]" />
        <div className="w-full bg-gradient-to-t from-rose-600 to-rose-400 rounded-t h-[65%]" />
        <div className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t h-[95%]" />
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>ETL Synced 2m ago</span>
        <span className="text-teal-300 font-semibold">Live Data Pipeline</span>
      </div>
    </div>
  );
}

// 6. Modern Frontend & UI/UX Widget
function FrontendWidget() {
  const [activeToggle, setActiveToggle] = useState(true);

  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-rose-50/70 via-white to-slate-50 border border-rose-200/80 p-4 shadow-inner">
      <div className="flex items-center justify-between text-xs font-mono mb-3">
        <div className="flex items-center gap-1.5 text-rose-700">
          <Monitor className="w-3.5 h-3.5 text-rose-600" />
          <span className="font-semibold">Design System Component</span>
        </div>
        <span className="text-[10px] text-rose-800 bg-rose-100 font-bold px-2 py-0.5 rounded-full border border-rose-200">
          60 FPS Fluid
        </span>
      </div>

      {/* Interactive UI element preview */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between shadow-xs mb-3">
        <div>
          <div className="text-xs font-bold text-slate-900">Interactive Glassmorphism</div>
          <div className="text-[10px] text-slate-500 font-mono">Micro-interactions &amp; 3D WebGL</div>
        </div>
        <button
          type="button"
          onClick={() => setActiveToggle(!activeToggle)}
          className={cn(
            'w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300',
            activeToggle ? 'bg-rose-600' : 'bg-slate-300'
          )}
        >
          <div
            className={cn(
              'bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300',
              activeToggle ? 'translate-x-5' : 'translate-x-0'
            )}
          />
        </button>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
        <span className="text-rose-700 font-semibold">&bull; Core Web Vitals: 100/100</span>
        <span className="text-slate-500">&bull; a11y Accessible</span>
      </div>
    </div>
  );
}

export function FeatureCard({ id, title, category, tagline, description, tags, metric, metricLabel }: FeatureItemData) {
  const getIcon = () => {
    switch (id) {
      case 'saas': return <Code2 className="w-5 h-5 text-rose-600" />;
      case 'automation': return <Zap className="w-5 h-5 text-amber-600" />;
      case 'ai': return <Cpu className="w-5 h-5 text-violet-600" />;
      case 'erp': return <Layers className="w-5 h-5 text-blue-600" />;
      case 'analytics': return <BarChart3 className="w-5 h-5 text-teal-600" />;
      case 'frontend': return <Monitor className="w-5 h-5 text-rose-600" />;
    }
  };

  const getBadgeColor = () => {
    switch (id) {
      case 'saas': return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'automation': return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'ai': return 'bg-violet-50 text-violet-800 border-violet-200';
      case 'erp': return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'analytics': return 'bg-teal-50 text-teal-800 border-teal-200';
      case 'frontend': return 'bg-rose-50 text-rose-800 border-rose-200';
    }
  };

  const getWidget = () => {
    switch (id) {
      case 'saas': return <SaasWidget />;
      case 'automation': return <AutomationWidget />;
      case 'ai': return <AiWidget />;
      case 'erp': return <ErpWidget />;
      case 'analytics': return <AnalyticsWidget />;
      case 'frontend': return <FrontendWidget />;
    }
  };

  return (
    <div className="w-full flex flex-col justify-between rounded-3xl backdrop-blur-xl bg-white/90 border border-slate-200/90 hover:border-rose-300 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(225,29,72,0.12)] transition-all duration-500 p-6 sm:p-7 group">
      <div>
        {/* Header: Icon + Category Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
            {getIcon()}
          </div>
          <span className={cn('text-xs font-mono font-semibold px-3 py-1 rounded-full border shadow-xs', getBadgeColor())}>
            {category}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-1.5 tracking-tight group-hover:text-rose-600 transition-colors">
          {title}
        </h3>
        <p className="text-xs font-mono text-slate-500 mb-4 font-medium">
          {tagline}
        </p>

        {/* Bespoke Interactive Micro-UI Widget */}
        <div className="my-5">
          {getWidget()}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          {description}
        </p>
      </div>

      {/* Footer: Tags & Metric Badge */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="shrink-0 flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200">
          <span>{metric}</span>
          <span className="text-[10px] text-slate-500 font-normal">{metricLabel}</span>
        </div>
      </div>
    </div>
  );
}
