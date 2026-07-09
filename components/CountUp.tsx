"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
  style?: CSSProperties;
  duration?: number;
};

// Counts up from 0 to `value` when scrolled into view (ease-out cubic).
// SSR renders the final number, so no-JS / reduced-motion show it correctly.
export function CountUp({
  value,
  suffix = "",
  className,
  style,
  duration = 1100,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * eased));
            if (p < 1) raf = requestAnimationFrame(step);
          };
          setDisplay(0);
          raf = requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
      {suffix}
    </span>
  );
}
