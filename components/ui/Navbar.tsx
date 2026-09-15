'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs' 
          : 'py-5 bg-white/60 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="WebMitra.Tech Home">
          <div className="relative h-9 w-12 flex items-center justify-center shrink-0">
            <Image
              src="/logo-icon.png"
              alt="WebMitra.Tech Logo"
              width={120}
              height={50}
              className="h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-slate-900 leading-tight">
              WEBMITRA<span className="text-rose-600">.TECH</span>
            </span>
            <span className="text-[10px] text-slate-500 tracking-widest uppercase font-mono -mt-0.5">
              Software Solutions
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="text-slate-600 hover:text-slate-950 transition-colors">
            Capabilities
          </a>
          <a href="#industries" className="text-slate-600 hover:text-slate-950 transition-colors">
            Industries
          </a>
          <a href="#projects" className="text-slate-600 hover:text-slate-950 transition-colors">
            Selected Works
          </a>
          <a href="#team" className="text-slate-600 hover:text-slate-950 transition-colors">
            Team
          </a>
          <a href="#contact" className="text-slate-600 hover:text-slate-950 transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/918411825361?text=Hi%20WebMitra.Tech%2C%20I%20want%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-mono"
          >
            +91 84118 25361
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-rose-400" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-lg">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-800 hover:text-slate-950"
          >
            Capabilities
          </a>
          <a
            href="#industries"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-800 hover:text-slate-950"
          >
            Industries
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-800 hover:text-slate-950"
          >
            Selected Works
          </a>
          <a
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-800 hover:text-slate-950"
          >
            Team
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-800 hover:text-slate-950"
          >
            Contact
          </a>
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href="https://wa.me/918411825361?text=Hi%20WebMitra.Tech%2C%20I%20want%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-600 hover:text-slate-900 font-mono"
            >
              WhatsApp: +91 84118 25361
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-rose-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
