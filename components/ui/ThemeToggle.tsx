'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn('w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80', className)} />
    );
  }

  const isDark = (resolvedTheme || theme) === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className={cn(
        'relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300',
        'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800',
        'border border-slate-200 dark:border-slate-700/80',
        'text-slate-700 dark:text-slate-200 shadow-xs hover:scale-105 active:scale-95',
        className
      )}
    >
      <Sun className="w-4 h-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-rose-400" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
