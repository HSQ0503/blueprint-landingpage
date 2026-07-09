import type { CSSProperties } from "react";

type ImageSlotProps = {
  label: string;
  tone?: "light" | "dark";
  style?: CSSProperties;
};

// Placeholder for a media drop-zone from the design. Fills its (positioned,
// aspect-ratio'd) parent. Swap for a next/image <Image> once real assets exist.
export function ImageSlot({ label, tone = "light", style }: ImageSlotProps) {
  const dark = tone === "dark";
  return (
    <div
      aria-label={label}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "20px",
        textAlign: "center",
        background: dark
          ? "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.01))"
          : "linear-gradient(180deg, var(--mist), var(--tile))",
        color: dark ? "rgba(255,255,255,.66)" : "var(--text-muted)",
        ...style,
      }}
    >
      <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
          <circle cx="9" cy="10" r="1.6" />
          <path d="M5 18l4.5-4.5a2 2 0 0 1 2.8 0L19 20" />
        </g>
      </svg>
      <span
        style={{
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.01em",
          maxWidth: "22em",
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
    </div>
  );
}
