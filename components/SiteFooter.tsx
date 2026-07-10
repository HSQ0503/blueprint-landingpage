import Link from "next/link";
import { Logo } from "@/components/Logo";

const colHead = {
  fontFamily: "var(--font-mono-ui)",
  fontSize: 11,
  fontWeight: 600,
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
    <footer style={{ background: "var(--navy-deep)", color: "var(--cream-soft)", borderTop: "2px solid var(--ink)" }}>
      <div className="mx-auto" style={{ maxWidth: 1160, padding: "64px 24px 40px" }}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))_minmax(0,1.4fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo tone="cream" size={30} />
            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.6,
                color: "var(--cream-soft)",
                margin: "16px 0 0",
                maxWidth: "26em",
              }}
            >
              New Digital SAT instruction from a four-time perfect-800 Math scorer. Hundreds of
              students helped.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div style={colHead}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
                {col.links.map((link) => (
                  <Link key={link.label} href={link.href} className="link-foot">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <div style={colHead}>Have a question?</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--cream-soft)", margin: "14px 0 0" }}>
              Send me an email — I read every one.
            </p>
            <a
              href="mailto:scott@scottssatprep.com"
              style={{
                display: "inline-block",
                marginTop: 8,
                fontFamily: "var(--font-mono-ui)",
                fontSize: 12.5,
                color: "var(--sky)",
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
            borderTop: "2px dashed rgba(247,241,227,.25)",
          }}
        >
          <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 11, letterSpacing: "0.04em", color: "rgba(247,241,227,.55)" }}>
            © SCOTT&apos;S SAT PREP LLC. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: "flex", gap: 18 }}>
            {["YouTube", "Instagram", "X"].map((s) => (
              <a
                key={s}
                href="#"
                className="link-foot"
                style={{ fontFamily: "var(--font-mono-ui)", fontSize: 11.5, letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
