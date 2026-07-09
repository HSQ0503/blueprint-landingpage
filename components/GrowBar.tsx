"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type GrowBarProps = {
  percent: number;
  className?: string;
  fillStyle?: CSSProperties;
  duration?: number;
};

// A progress-bar fill that animates its width from 0 to `percent`% when it
// scrolls into view. Render it inside the track you want to fill. SSR / no-JS
// render it filled; the effect resets to 0 (without animating) then grows in.
export function GrowBar({ percent, className, fillStyle, duration = 1100 }: GrowBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const transition = `width ${duration}ms cubic-bezier(.22,1,.36,1)`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    el.style.transition = "none";
    el.style.width = "0%";
    void el.offsetHeight;
    el.style.transition = transition;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.width = `${percent}%`;
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [percent, transition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ height: "100%", width: `${percent}%`, borderRadius: "999px", transition, ...fillStyle }}
    />
  );
}
