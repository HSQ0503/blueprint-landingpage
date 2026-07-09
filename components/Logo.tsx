// 1500 SAT Blueprint logo — a concentric "radar / bullseye" target ("aim for
// 1500") paired with the tri-color wordmark. Placeholder mark; swap for Scott's
// official artwork when supplied.

import type { CSSProperties } from "react";

type LogoVariant = "full" | "mark" | "wordmark";

type LogoProps = {
  variant?: LogoVariant;
  size?: number;
  className?: string;
  style?: CSSProperties;
};

export function Logo({ variant = "full", size = 32, className, style }: LogoProps) {
  const mark = (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      role="img"
      aria-label="1500 SAT Blueprint"
      style={{ flex: "none" }}
    >
      <circle cx="20" cy="20" r="18" fill="none" stroke="var(--brand)" strokeWidth="3.2" />
      <circle cx="20" cy="20" r="11" fill="none" stroke="var(--sky)" strokeWidth="3.2" />
      <circle cx="20" cy="20" r="4" fill="var(--brand)" />
    </svg>
  );

  const wordmark = (
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        lineHeight: 1,
        letterSpacing: "-0.02em",
        fontSize: `${Math.round(size * 0.56)}px`,
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ color: "var(--navy)" }}>1500</span>{" "}
      <span style={{ color: "var(--brand)" }}>SAT</span>{" "}
      <span style={{ color: "var(--navy)" }}>Blueprint</span>
    </span>
  );

  if (variant === "mark") {
    return (
      <span className={className} style={{ display: "inline-flex", ...style }}>
        {mark}
      </span>
    );
  }
  if (variant === "wordmark") {
    return (
      <span className={className} style={{ display: "inline-flex", ...style }}>
        {wordmark}
      </span>
    );
  }
  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: "10px", ...style }}
    >
      {mark}
      {wordmark}
    </span>
  );
}
