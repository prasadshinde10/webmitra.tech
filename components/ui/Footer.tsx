import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { InteractiveHoverButton } from '@/registry/magicui/interactive-hover-button';

export function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-16 px-4 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Col 1: Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo-icon.png"
              alt="WebMitra.Tech Logo"
              width={34}
              height={34}
              className="object-contain"
            />
            <span className="font-bold text-lg text-slate-950 dark:text-white">
              WebMitra<span className="text-rose-600 font-black">.Tech</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6 text-slate-600 dark:text-slate-400">
            Next-generation software solutions company. We architect, automate, and scale digital operations so you can focus entirely on growing your business.
          </p>
          <div className="flex items-center gap-3">
            <InteractiveHoverButton href="#contact" className="py-2 px-5 text-xs">
              Get in Touch
            </InteractiveHoverButton>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-950 dark:text-white mb-4">Navigation</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="#features" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Capabilities</a>
            </li>
            <li>
              <a href="#industries" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Industries</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Selected Works</a>
            </li>
            <li>
              <a href="#team" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Our Team</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-950 dark:text-white mb-4">Solutions</h4>
          <ul className="space-y-2.5 text-sm">
            <li>Custom Software &amp; SaaS</li>
            <li>Business Process Automation</li>
            <li>AI &amp; Machine Learning</li>
            <li>ERP &amp; Operations Systems</li>
            <li>Data Analytics &amp; Dashboards</li>
            <li>Modern High-Perf Frontend</li>
          </ul>
        </div>

        {/* Col 4: Contact info */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-950 dark:text-white mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
              <span>Chhatrapati Sambhajinagar, Maharashtra, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-rose-500 shrink-0" />
              <a href="tel:+918411825361" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                +91 84118 25361
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-rose-500 shrink-0" />
              <a href="mailto:prasadshinde10102004@gmail.com" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors break-all">
                prasadshinde10102004@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} WebMitra.Tech. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
