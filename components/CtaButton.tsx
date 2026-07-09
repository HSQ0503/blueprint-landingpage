import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type Variant = "cta" | "cta-sm" | "ghost" | "outline";
type Size = "lg" | "md" | "about" | "card" | "nav" | "session";

const SIZES: Record<Size, CSSProperties> = {
  lg: { minHeight: 54, padding: "0 28px", borderRadius: 16, fontSize: 16 },
  md: { minHeight: 52, padding: "0 26px", borderRadius: 16, fontSize: 15 },
  about: { minHeight: 50, padding: "0 26px", borderRadius: 14, fontSize: 15 },
  card: {
    minHeight: 48,
    padding: "0 22px",
    borderRadius: 14,
    fontSize: 15,
    justifyContent: "center",
    width: "100%",
  },
  nav: { minHeight: 38, padding: "9px 16px", borderRadius: 11, fontSize: 13.5, gap: 7 },
  session: { minHeight: 44, padding: "0 22px", borderRadius: 14, fontSize: 14, gap: 8 },
};

const VARIANT_CLASS: Record<Variant, string> = {
  cta: "btn-cta",
  "cta-sm": "btn-cta-sm",
  ghost: "btn-ghost",
  outline: "btn-outline",
};

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  arrowSize?: number;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
};

export function CtaButton({
  href,
  children,
  variant = "cta",
  size = "md",
  arrow = false,
  arrowSize = 18,
  style,
  className,
  onClick,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`btn ${VARIANT_CLASS[variant]}${className ? ` ${className}` : ""}`}
      style={{ ...SIZES[size], ...style }}
    >
      {children}
      {arrow ? (
        <svg viewBox="0 0 24 24" width={arrowSize} height={arrowSize} style={{ flex: "none" }} aria-hidden="true">
          <path
            d="M9 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </Link>
  );
}
