"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { CtaButton } from "@/components/CtaButton";

type NavItem = { label: string; href: string; activePath?: string };

const NAV: NavItem[] = [
  { label: "Home", href: "/", activePath: "/" },
  { label: "Tutoring", href: "/tutoring", activePath: "/tutoring" },
  { label: "Blueprint", href: "/blueprint", activePath: "/blueprint" },
  { label: "Reviews", href: "/results", activePath: "/results" },
  { label: "Pricing", href: "/tutoring#pricing" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkStyle = (item: NavItem) => {
    const active = item.activePath != null && pathname === item.activePath;
    return active
      ? {
          color: "var(--accent)",
          fontWeight: 600,
          textDecoration: "underline",
          textUnderlineOffset: 6,
          textDecorationThickness: 2,
        }
      : undefined;
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "var(--paper)",
        borderBottom: "2px solid var(--ink)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between gap-6"
        style={{ maxWidth: 1160, padding: "0 24px", height: 64 }}
      >
        <Link href="/" aria-label="Scott's SAT, home" style={{ display: "inline-flex", alignItems: "center" }}>
          <Logo size={30} />
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} className="link-nav" style={linkStyle(item)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton href="/tutoring#pricing" variant="ink" size="nav">
            Book a free call
          </CtaButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex md:hidden"
          style={{
            width: 42,
            height: 42,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            border: "2px solid var(--ink)",
            background: "var(--card)",
            color: "var(--ink)",
            cursor: "pointer",
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav
          className="md:hidden"
          style={{
            background: "var(--paper)",
            borderBottom: "2px solid var(--ink)",
            padding: "8px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="link-nav"
              style={{ ...linkStyle(item), padding: "12px 0", fontSize: 14 }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ marginTop: 10 }}>
            <CtaButton href="/tutoring#pricing" variant="ink" size="card" onClick={() => setOpen(false)}>
              Book a free call
            </CtaButton>
          </div>
        </nav>
      )}
    </header>
  );
}
