import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { Check } from "@/components/Check";
import { CALENDLY_URL, getPlan } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a free call: 1-on-1 SAT coaching with Scott",
  description:
    "Grab a time to talk with Scott about your goal score, timeline, and the fastest plan to get there. No pressure, no hard sell.",
};

const eyebrow = {
  fontFamily: "var(--font-mono-ui)",
  fontSize: 11.5,
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: "var(--accent)",
};

const serifH = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  letterSpacing: "-0.02em",
  color: "var(--ink)",
};

const EXPECT = [
  "A relaxed 15-minute call, no pressure, no hard sell",
  "We pinpoint your target score and test date",
  "You get an honest recommendation on where to start",
  "Enroll whenever you're ready. Blueprint access starts day one",
];

export default async function BookACallPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan: planId } = await searchParams;
  const plan = getPlan(planId);

  return (
    <main>
      <section className="py-14 lg:py-[72px]">
        <div className="mx-auto px-6" style={{ maxWidth: 1080 }}>
          <Reveal style={{ maxWidth: "42em" }}>
            <div style={eyebrow}>Book your free call</div>
            <h1 style={{ ...serifH, fontSize: "clamp(34px,4.6vw,54px)", lineHeight: 1.03, margin: "14px 0 0" }}>
              Let&apos;s map your path to your goal.
            </h1>
            <p style={{ fontSize: 16.5, lineHeight: 1.62, color: "var(--ink-soft)", margin: "16px 0 0", maxWidth: "34em" }}>
              Grab a time that works and we&apos;ll talk through your goal score, timeline, and the
              fastest plan to get you there.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)]">
            {/* Left rail: context + what to expect */}
            <Reveal>
              {plan ? (
                <div
                  style={{
                    background: "var(--card)",
                    border: "2px solid var(--ink)",
                    borderRadius: 3,
                    boxShadow: "4px 4px 0 var(--ink)",
                    padding: "16px 18px",
                    marginBottom: 20,
                  }}
                >
                  <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
                    You&apos;re booking about
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, marginTop: 6 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 19, color: "var(--ink)" }}>
                      {plan.name}
                    </span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 19, color: "var(--accent)" }}>
                      {plan.price}
                    </span>
                  </div>
                  <Link
                    href="/tutoring#pricing"
                    className="link-quiet"
                    style={{ display: "inline-block", marginTop: 8, fontFamily: "var(--font-mono-ui)", fontSize: 11, color: "var(--accent)" }}
                  >
                    Change plan
                  </Link>
                </div>
              ) : null}

              <div
                style={{
                  background: "var(--card)",
                  border: "2px solid var(--ink)",
                  borderRadius: 3,
                  boxShadow: "4px 4px 0 var(--ink)",
                  padding: "22px 22px 24px",
                }}
              >
                <h2 style={{ ...serifH, fontSize: 20, margin: 0 }}>What to expect</h2>
                <ul style={{ listStyle: "none", margin: "16px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 13 }}>
                  {EXPECT.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14.5, lineHeight: 1.5, color: "var(--ink-soft)" }}>
                      <Check size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: 20 }}>
                <CtaButton href={plan ? `/enroll?plan=${plan.id}` : "/tutoring#pricing"} variant="outline" size="md" arrow>
                  {plan ? "Skip the call, enroll now" : "See all plans"}
                </CtaButton>
              </div>
            </Reveal>

            {/* Right: the scheduling widget */}
            <Reveal delay={90}>
              <BookingEmbed />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- helpers ----------------------------- */

function BookingEmbed() {
  const frame = {
    background: "var(--card)",
    border: "2px solid var(--ink)",
    borderRadius: 3,
    boxShadow: "var(--shadow-card-lg)",
    padding: 10,
  } as const;

  // When Scott provides the Calendly link, drop it into CALENDLY_URL and the
  // real inline scheduler renders in place of the placeholder — no other change.
  if (CALENDLY_URL) {
    // Preserve any query string Scott's pasted link may already carry.
    const sep = CALENDLY_URL.includes("?") ? "&" : "?";
    return (
      <div style={frame}>
        <iframe
          src={`${CALENDLY_URL}${sep}hide_gdpr_banner=1&primary_color=2160c8`}
          title="Book a call with Scott"
          style={{ width: "100%", height: 680, border: "none", borderRadius: 2, display: "block" }}
        />
      </div>
    );
  }

  return (
    <div style={frame}>
      <div
        style={{
          border: "2px dashed rgba(26,35,62,.32)",
          borderRadius: 2,
          background: "var(--tag)",
          minHeight: 520,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 14,
          padding: 28,
        }}
      >
        <span
          style={{
            width: 58,
            height: 58,
            borderRadius: 2,
            background: "var(--card)",
            border: "2px solid var(--ink)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--ink)",
            boxShadow: "3px 3px 0 var(--ink)",
          }}
        >
          <CalendarIcon />
        </span>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "var(--ink)" }}>
          Calendly booking widget
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-muted)", maxWidth: "28em", margin: 0 }}>
          Scott&apos;s scheduling link drops in right here. You&apos;ll pick a time without leaving
          the page.
        </p>
        <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)" }}>
          Placeholder · embed pending
        </span>
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
        <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
        <path d="M7.5 13h2.5M14 13h2.5M7.5 16.5h2.5M14 16.5h2.5" />
      </g>
    </svg>
  );
}
