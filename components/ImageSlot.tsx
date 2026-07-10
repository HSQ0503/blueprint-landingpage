import type { CSSProperties } from "react";

type ImageSlotProps = {
  label: string;
  tone?: "light" | "dark";
  style?: CSSProperties;
};

// Print-style media placeholder — a dashed keepsake frame with a mono label.
// Fills its (positioned) parent. Swap for next/image once real assets exist.
export function ImageSlot({ label, tone = "light", style }: ImageSlotProps) {
  const dark = tone === "dark";
  const line = dark ? "rgba(247,241,227,.45)" : "rgba(25,22,19,.35)";
  const text = dark ? "var(--cream-soft)" : "var(--ink-muted)";
  return (
    <div
      aria-label={label}
      style={{
        position: "absolute",
        inset: 0,
        background: dark ? "transparent" : "var(--tag)",
        padding: 10,
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: `2px dashed ${line}`,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: 16,
          textAlign: "center",
          color: text,
        }}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3.5" y="4.5" width="17" height="15" rx="1" />
            <circle cx="9" cy="10" r="1.6" />
            <path d="M5 18l4.5-4.5a2 2 0 0 1 2.8 0L19 20" />
          </g>
        </svg>
        <span
          style={{
            fontFamily: "var(--font-mono-ui)",
            fontSize: 10.5,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            maxWidth: "24em",
            lineHeight: 1.5,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
