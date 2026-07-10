// Plain print checkmark for feature lists.
export function Check({ size = 15, color = "var(--ink)" }: { size?: number; color?: string }) {
  return (
    <span style={{ flex: "none", color, marginTop: 3 }}>
      <svg viewBox="0 0 24 24" width={size} height={size} style={{ display: "block" }} aria-hidden="true">
        <path
          d="M4.5 12.5l5 5L19.5 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
