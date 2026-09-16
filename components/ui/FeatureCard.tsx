'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Code2, 
  Zap, 
  Cpu, 
  Layers, 
  BarChart3, 
  Monitor, 
  ArrowRight, 
  Sparkles, 
  RefreshCw,
  Activity
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

// Compact Contextual Micro-Widgets for Card Front
function CompactSaasWidget() {
  return (
    <div className="w-full rounded-xl bg-slate-950 dark:bg-slate-950 p-2.5 font-mono text-[10px] text-slate-300 border border-slate-800 shadow-inner">
      <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800/80">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-rose-500/80" />
          <div className="w-2 h-2 rounded-full bg-amber-500/80" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-emerald-400 font-bold">200 OK (11ms)</span>
      </div>
      <div className="truncate text-slate-300">
        <span className="text-rose-400">const</span> <span className="text-blue-300">saas</span> = <span className="text-rose-400">await</span> deployEngine();
      </div>
    </div>
  );
}

function CompactAutomationWidget() {
  return (
    <div className="w-full rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 p-2 text-[10px] font-mono">
      <div className="flex items-center justify-between gap-1 text-slate-700 dark:text-slate-300">
        <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold">Intake</span>
        <ArrowRight className="w-3 h-3 text-amber-500 shrink-0" />
        <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-300/40 font-bold">AI Parse</span>
        <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0" />
        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-300/40 font-bold">Auto-Sync</span>
      </div>
    </div>
  );
}

function CompactAiWidget() {
  return (
    <div className="w-full rounded-xl bg-gradient-to-r from-violet-950 via-slate-950 to-slate-950 border border-violet-900/40 p-2 text-white">
      <div className="flex items-center justify-between text-[10px] font-mono mb-1">
        <span className="flex items-center gap-1 text-violet-300 font-semibold">
          <Sparkles className="w-3 h-3 text-violet-400" />
          <span>Neural RAG</span>
        </span>
        <span className="text-emerald-400 font-bold">99.4% Accuracy</span>
      </div>
      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-violet-500 via-rose-500 to-emerald-400 w-[94%]" />
      </div>
    </div>
  );
}

function CompactErpWidget() {
  return (
    <div className="w-full grid grid-cols-3 gap-1.5 text-[10px] font-mono text-center">
      <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-lg p-1.5">
        <div className="text-slate-400 text-[9px]">Stock</div>
        <div className="font-bold text-emerald-600 dark:text-emerald-400">94%</div>
      </div>
      <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-lg p-1.5">
        <div className="text-slate-400 text-[9px]">Flow</div>
        <div className="font-bold text-blue-600 dark:text-blue-400">+$48k</div>
      </div>
      <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-lg p-1.5">
        <div className="text-slate-400 text-[9px]">RBAC</div>
        <div className="font-bold text-slate-800 dark:text-slate-200">Active</div>
      </div>
    </div>
  );
}

function CompactAnalyticsWidget() {
  return (
    <div className="w-full rounded-xl bg-slate-900 border border-slate-800 p-2 text-white">
      <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
        <span className="flex items-center gap-1 text-teal-300">
          <Activity className="w-3 h-3 text-teal-400" />
          <span>Real-Time Stream</span>
        </span>
        <span className="text-emerald-400 font-bold">+38.4% YoY</span>
      </div>
      <div className="flex items-end gap-1.5 h-6">
        <div className="flex-1 bg-teal-500/60 rounded-t h-[40%]" />
        <div className="flex-1 bg-teal-500/70 rounded-t h-[65%]" />
        <div className="flex-1 bg-teal-500/80 rounded-t h-[50%]" />
        <div className="flex-1 bg-rose-500 rounded-t h-[80%]" />
        <div className="flex-1 bg-emerald-400 rounded-t h-[100%]" />
      </div>
    </div>
  );
}

function CompactFrontendWidget() {
  return (
    <div className="w-full rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/70 dark:border-rose-900/40 p-2 text-[10px] font-mono flex items-center justify-between">
      <span className="text-rose-700 dark:text-rose-300 font-semibold">60 FPS Fluid Design</span>
      <span className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
        100/100 CWV
      </span>
    </div>
  );
}

export function FeatureCard({ id, title, category, tagline, description, tags, metric, metricLabel }: FeatureItemData) {
  const getIcon = () => {
    switch (id) {
      case 'saas': return <Code2 className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'automation': return <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'ai': return <Cpu className="w-6 h-6 text-violet-600 dark:text-violet-400" />;
      case 'erp': return <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'analytics': return <BarChart3 className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'frontend': return <Monitor className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
    }
  };

  const getBadgeColor = () => {
    switch (id) {
      case 'saas': return 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800';
      case 'automation': return 'bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'ai': return 'bg-violet-50 dark:bg-violet-950/50 text-violet-800 dark:text-violet-300 border-violet-200 dark:border-violet-800';
      case 'erp': return 'bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'analytics': return 'bg-teal-50 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800';
      case 'frontend': return 'bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800';
    }
  };

  const getWidget = () => {
    switch (id) {
      case 'saas': return <CompactSaasWidget />;
      case 'automation': return <CompactAutomationWidget />;
      case 'ai': return <CompactAiWidget />;
      case 'erp': return <CompactErpWidget />;
      case 'analytics': return <CompactAnalyticsWidget />;
      case 'frontend': return <CompactFrontendWidget />;
    }
  };

  return (
    <div className="feature-card-wrapper w-full max-w-sm h-80 group perspective-1000 cursor-pointer">
      <div className="feature-card-inner relative w-full h-full duration-700 preserve-3d group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Face: UI/UX Contextual Design */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl p-6 flex flex-col justify-between backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.05)] hover:border-rose-300 dark:hover:border-rose-700 transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-xs">
                {getIcon()}
              </div>
              <span className={cn('text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border shadow-xs', getBadgeColor())}>
                {category}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-1 tracking-tight">
              {title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
              {tagline}
            </p>
          </div>

          <div className="my-auto">
            {getWidget()}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400 font-semibold">
              <RefreshCw className="w-3 h-3 animate-spin-slow" />
              <span>Hover or scroll to flip</span>
            </span>
            <span className="font-bold text-slate-900 dark:text-slate-200">{metric}</span>
          </div>
        </div>

        {/* Back Face: Technical Specs & Deep-Dive */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl p-6 flex flex-col justify-between bg-slate-950 text-white border border-slate-800 shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className={cn('text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border', getBadgeColor())}>
                {category}
              </span>
              <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                {metric} {metricLabel}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              {title}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed line-clamp-4 mb-3">
              {description}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-1 mb-3">
              {tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-slate-200 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-between w-full text-xs font-semibold text-rose-400 hover:text-rose-300 pt-2 border-t border-slate-800 transition-colors"
            >
              <span>Discuss Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
