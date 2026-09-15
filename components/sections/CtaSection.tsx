import { SplitTextReveal } from '../ui/SplitTextReveal';
import { ArrowDown } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center py-24 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <SplitTextReveal 
          text="Let's work together!" 
          className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter mb-8"
        />
        <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-2xl mx-auto">
          Ready to build the next generation of web experiences? Drop us a line.
        </p>
        <div className="animate-bounce flex justify-center">
          <ArrowDown className="w-12 h-12" />
        </div>
      </div>
    </section>
  );
}
