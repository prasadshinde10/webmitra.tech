'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 group">
      <a
        href="https://wa.me/918411825361?text=Hi%20WebMitra.Tech%2C%20I%20am%20interested%20in%20a%20website"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Chat with WebMitra on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
