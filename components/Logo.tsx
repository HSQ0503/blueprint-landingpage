// 1500 SAT Blueprint logo — concentric bullseye ("aim for 1500") + serif
// wordmark, print-style. Placeholder mark; swap for official artwork later.

import type { CSSProperties } from "react";

type LogoProps = {
  variant?: "full" | "mark";
  tone?: "ink" | "cream";
  size?: number;
  className?: string;
  style?: CSSProperties;
};

export function Logo({ variant = "full", tone = "ink", size = 30, className, style }: LogoProps) {
  const ring = tone === "ink" ? "var(--ink)" : "var(--cream)";
  const dot = tone === "ink" ? "var(--accent)" : "var(--gold)";
  const word = tone === "ink" ? "var(--ink)" : "var(--cream)";
  const sat = tone === "ink" ? "var(--accent)" : "var(--gold)";

  const mark = (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      role="img"
      aria-label="1500 SAT Blueprint"
      style={{ flex: "none" }}
    >
      <circle cx="20" cy="20" r="17.5" fill="none" stroke={ring} strokeWidth="3.4" />
      <circle cx="20" cy="20" r="10.5" fill="none" stroke={ring} strokeWidth="3" />
      <circle cx="20" cy="20" r="4" fill={dot} />
    </svg>
  );

  if (variant === "mark") {
    return (
      <span className={className} style={{ display: "inline-flex", ...style }}>
        {mark}
      </span>
    );
  }

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: 10, ...style }}
    >
      {mark}
      <span
        style={{
          fontFamily: "var(--font-serif-display)",
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-0.01em",
          fontSize: Math.round(size * 0.62),
          whiteSpace: "nowrap",
          color: word,
        }}
      >
        1500 <span style={{ color: sat }}>SAT</span> Blueprint
      </span>
    </span>
  );
}
