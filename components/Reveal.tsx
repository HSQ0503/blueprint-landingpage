"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

const TRANSITION =
  "opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1)";

// Rises + fades content in when it scrolls into view. Drives the element's
// style directly (like the prototype's enhance()) so SSR / no-JS render it
// visible and reduced-motion shows it instantly.
export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    // Snap to the hidden state without animating the initial hide.
    el.style.transition = "none";
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    void el.offsetHeight;
    el.style.transition = TRANSITION;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${delay}ms`;
            el.style.opacity = "1";
            el.style.transform = "none";
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ ...style, transition: TRANSITION }}>
      {children}
    </div>
  );
}
