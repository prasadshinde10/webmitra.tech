import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, children, href, ...props }, ref) => {
  const content = (
    <span
      className={cn(
        "group relative inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 px-7 py-3 text-center font-semibold text-slate-900 dark:text-white transition-all duration-300 hover:border-slate-400 dark:hover:border-slate-700 shadow-sm hover:shadow-md hover:scale-105 active:scale-95",
        className
      )}
    >
      {/* Default text with expansion animation */}
      <span className="inline-flex items-center gap-2 translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-sm font-semibold">
        <span>{children || text}</span>
        <div className="h-2 w-2 rounded-full bg-rose-500" />
      </span>

      {/* Hover reveal text with arrow */}
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100 text-sm font-semibold">
        <span>{children || text}</span>
        <ArrowRight className="w-4 h-4 text-rose-300" />
      </div>

      {/* Expandable background pill */}
      <div className="absolute left-[8%] top-[40%] h-2 w-2 scale-[1] rounded-full bg-slate-950 dark:bg-slate-900 transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-slate-950 dark:group-hover:bg-slate-900" />
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      {...props}
    >
      {content}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
