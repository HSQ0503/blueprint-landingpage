import Link from "next/link";
import { Logo } from "@/components/Logo";

const eyebrow = {
  fontFamily: "var(--font-sans)",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: "var(--sky)",
};

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "The Blueprint", href: "/blueprint" },
      { label: "About", href: "/#about" },
    ],
  },
  {
    title: "Tutoring",
    links: [
      { label: "1-on-1 Coaching", href: "/tutoring" },
      { label: "Pricing", href: "/tutoring#pricing" },
      { label: "Book a call", href: "/tutoring#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Reviews", href: "/#testimonials" },
      { label: "FAQ", href: "/tutoring#faq" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer style={{ background: "var(--navy)", color: "var(--text-on-navy)" }}>
      <div className="mx-auto" style={{ maxWidth: 1160, padding: "64px 24px 40px" }}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))_minmax(0,1.4fr)]">
          {/* Brand + blurb */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Logo variant="mark" size={30} />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 18,
                  letterSpacing: "-0.01em",
                  color: "#fff",
                }}
              >
                1500 <span style={{ color: "var(--brand)" }}>SAT</span> Blueprint
              </span>
            </div>
            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.6,
                color: "rgba(255,255,255,.62)",
                margin: "14px 0 0",
                maxWidth: "26em",
              }}
            >
              New Digital SAT instruction from a four-time perfect-800 Math scorer. Hundreds of
              students helped.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div style={eyebrow}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
                {col.links.map((link) => (
                  <Link key={link.label} href={link.href} className="link-foot">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div>
            <div style={eyebrow}>Have a question?</div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: "rgba(255,255,255,.72)",
                margin: "14px 0 0",
              }}
            >
              Send me an email — I read every one.
            </p>
            <a
              href="mailto:scott@scottssatprep.com"
              style={{
                display: "inline-block",
                marginTop: 8,
                fontSize: 14,
                fontWeight: 600,
                color: "var(--brand)",
              }}
            >
              scott [at] scottssatprep [dot] com
            </a>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-4"
          style={{
            marginTop: 44,
            paddingTop: 22,
            borderTop: "1px solid rgba(255,255,255,.12)",
          }}
        >
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,.5)" }}>
            © Scott&apos;s SAT Prep LLC. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {["YT", "IG", "X"].map((s) => (
              <a key={s} href="#" aria-label={s} className="foot-social">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
