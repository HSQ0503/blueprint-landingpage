// 1500 SAT Blueprint icon set — glyphs lifted verbatim from the product's
// inline-SVG icons (24x24 grid, stroke-first, currentColor). The streak flame
// keeps its literal gold/amber fill; a few glyphs are intentionally filled.

import type { CSSProperties, ReactNode } from "react";

export type IconName =
  | "target"
  | "scan"
  | "reading"
  | "drills"
  | "aimath"
  | "tests"
  | "trophy"
  | "layers"
  | "zap"
  | "spark"
  | "flame-gold"
  | "history"
  | "grammar"
  | "play";

const GLYPHS: Record<IconName, ReactNode> = {
  drills: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="7" height="7" rx="1.6" />
      <rect x="13" y="4" width="7" height="7" rx="1.6" />
      <rect x="4" y="13" width="7" height="7" rx="1.6" />
      <rect x="13" y="13" width="7" height="7" rx="1.6" />
    </g>
  ),
  tests: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M13.5 3.5H7a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8.5l-5-5Z" />
      <path d="M13.5 3.5V8a1 1 0 0 0 1 1h4" />
      <path d="M8.5 13h7M8.5 16h5" strokeLinecap="round" />
    </g>
  ),
  history: (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.5V12l3 1.8" />
    </g>
  ),
  layers: (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3z" />
      <path d="M3 12.5 12 17l9-4.5M3 17 12 21.5 21 17" />
    </g>
  ),
  "flame-gold": (
    <path
      d="M12 3s5 3.5 5 8.5a5 5 0 0 1-10 0c0-1.6.6-2.8 1.3-3.6.2 1.2.9 1.9 1.7 2.1C9.4 7.8 12 6.3 12 3z"
      fill="#ffbd20"
      stroke="#f0a900"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  ),
  zap: <path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9z" fill="currentColor" />,
  play: (
    <path
      d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z"
      fill="currentColor"
    />
  ),
  spark: (
    <path
      d="M12 3c.5 3.6 1.9 5 5.5 5.5-3.6.5-5 1.9-5.5 5.5-.5-3.6-1.9-5-5.5-5.5C10.1 8 11.5 6.6 12 3z"
      fill="currentColor"
    />
  ),
  trophy: (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4.5v1.5A2.5 2.5 0 0 0 7 10M17 6h2.5v1.5A2.5 2.5 0 0 1 17 10M9.5 14.5 9 18h6l-.5-3.5M8 20h8" />
    </g>
  ),
  grammar: (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3.5h8l4 4V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z" />
      <path d="M13.5 3.5V8h4M8.5 12.5h7M8.5 16h5" />
    </g>
  ),
  reading: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M12 6.5C10.5 5.2 8.3 4.8 5.5 5.2A1 1 0 0 0 4.7 6.2v11a1 1 0 0 0 1.1 1c2.6-.3 4.7 0 6.2 1.3 1.5-1.3 3.6-1.6 6.2-1.3a1 1 0 0 0 1.1-1v-11a1 1 0 0 0-.8-1C15.7 4.8 13.5 5.2 12 6.5z" />
      <path d="M12 6.5V19" />
    </g>
  ),
  scan: (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
      <circle cx="11" cy="11" r="3.2" />
      <path d="m14 14 2.2 2.2" />
    </g>
  ),
  target: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </g>
  ),
  aimath: (
    <path
      d="M12 3.5c.6 3.3 1.7 4.4 5 5-3.3.6-4.4 1.7-5 5-.6-3.3-1.7-4.4-5-5 3.3-.6 4.4-1.7 5-5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  ),
};

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
  title?: string;
};

export function Icon({ name, size = 20, className, style, title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ display: "inline-block", flex: "none", ...style }}
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {GLYPHS[name]}
    </svg>
  );
}
