import { SplitTextReveal } from '../ui/SplitTextReveal';
import { ArrowDown } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-28 bg-gradient-to-br from-rose-600 via-rose-600 to-rose-700 text-white overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-mono mb-6 uppercase tracking-wider text-white shadow-sm">
          <span>Our Vision</span>
        </div>

        <SplitTextReveal 
          text="Focus on your business. We handle the technology." 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance text-white"
        />

        <p className="text-base sm:text-xl md:text-2xl text-rose-50 mb-10 max-w-3xl mx-auto leading-relaxed text-balance font-normal">
          Whether you&apos;re trapped in manual spreadsheets, need a custom ERP tailored to your exact workflow, want to automate repetitive operations, or need predictive AI models &mdash; we architect, build, and scale the technology for you.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-3xl mx-auto text-xs sm:text-sm">
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white font-medium">&ldquo;We are doing this manually.&rdquo;</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white font-medium">&ldquo;We need an ERP.&rdquo;</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white font-medium">&ldquo;We need an AI solution.&rdquo;</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white font-medium">&ldquo;We have data but need insights.&rdquo;</span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white font-medium">&ldquo;We need custom software.&rdquo;</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            aria-label="Scroll to contact form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-950 hover:bg-black text-white font-bold text-base transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <span>Discuss Your Project &rarr;</span>
          </a>
          <a 
            href="#contact" 
            aria-label="Scroll to contact form"
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 hover:bg-white text-white hover:text-rose-600 transition-all duration-300 shadow-xl"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
