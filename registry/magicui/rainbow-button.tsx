import React from "react";
import { cn } from "@/lib/utils";

export interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export const RainbowButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  RainbowButtonProps
>(({ children, className, href, ...props }, ref) => {
  const buttonContent = (
    <span
      className={cn(
        "group relative inline-flex h-12 animate-rainbow cursor-pointer items-center justify-center rounded-full border border-transparent bg-[length:200%] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-lg shadow-rose-500/10",
        // Glow pseudo-element
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(0.8rem)] before:opacity-75 group-hover:before:opacity-100 before:transition-opacity",
        // Inner gradient container for light & dark
        "bg-[linear-gradient(#0f172a,#0f172a),linear-gradient(#0f172a_50%,rgba(15,23,42,0.6)_80%,rgba(15,23,42,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        "dark:bg-[linear-gradient(#020617,#020617),linear-gradient(#020617_50%,rgba(2,6,23,0.6)_80%,rgba(2,6,23,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className="inline-block"
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      {...props}
    >
      {buttonContent}
    </button>
  );
});

RainbowButton.displayName = "RainbowButton";

export default RainbowButton;
