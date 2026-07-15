import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type Variant = "ink" | "cream" | "ghost" | "outline" | "gold";
type Size = "lg" | "md" | "about" | "card" | "nav" | "session";

const SIZES: Record<Size, CSSProperties> = {
  lg: { minHeight: 54, padding: "0 26px" },
  md: { minHeight: 52, padding: "0 24px" },
  about: { minHeight: 50, padding: "0 24px" },
  card: { minHeight: 48, padding: "0 20px", width: "100%" },
  nav: { minHeight: 40, padding: "0 16px", fontSize: 12 },
  session: { minHeight: 44, padding: "0 20px", fontSize: 12.5 },
};

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
};

export function CtaButton({
  href,
  children,
  variant = "ink",
  size = "md",
  arrow = false,
  style,
  className,
  onClick,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`btn btn-${variant}${className ? ` ${className}` : ""}`}
      style={{ ...SIZES[size], ...style }}
    >
      {children}
      {arrow ? (
        <svg viewBox="0 0 24 24" width={15} height={15} style={{ flex: "none" }} aria-hidden="true">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </Link>
  );
}
