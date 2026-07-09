// Circled check used in the Blueprint benefit list and the pricing tiers.
export function Check({ size = 20 }: { size?: number }) {
  return (
    <span style={{ flex: "none", color: "var(--cta)", marginTop: 1 }}>
      <svg viewBox="0 0 24 24" width={size} height={size} style={{ display: "block" }} aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" strokeWidth="1.7" />
          <path d="m8 12.5 2.5 2.5L16 9.5" strokeWidth="1.8" />
        </g>
      </svg>
    </span>
  );
}
