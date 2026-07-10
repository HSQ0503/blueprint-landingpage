import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Icon } from "@/components/Icon";
import { CtaButton } from "@/components/CtaButton";
import { ImageSlot } from "@/components/ImageSlot";
import { Check } from "@/components/Check";
import { Faq } from "@/components/Faq";
import { CO_FEATURES, PROOF } from "@/lib/content";

export const metadata: Metadata = {
  title: "1-on-1 Coaching — Private Digital SAT tutoring with Scott",
  description:
    "Work directly with Scott to master the Digital SAT: custom strategy, weekly reviews, and a plan built around your exact weaknesses. Plans from $595. 100+ point guarantee available.",
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
  fontFamily: "var(--font-serif-display)",
  fontWeight: 600,
  letterSpacing: "-0.015em",
  color: "var(--ink)",
};

const ruled = { borderTop: "2px solid var(--ink)" };

const monoItem = {
  display: "flex",
  gap: 10,
  alignItems: "flex-start",
  fontFamily: "var(--font-mono-ui)",
  fontSize: 12.5,
  lineHeight: 1.55,
  color: "var(--ink)",
} as const;

/* Parker-style tiers: serif name + price, dashed rules, mono details. */
const TIERS: {
  name: string;
  who: string;
  price: string;
  was: string;
  items: string[];
  cta: string;
  popular?: boolean;
  guarantee?: boolean;
}[] = [
  {
    name: "The Essentials",
    who: "For getting started with a clear plan",
    price: "$595",
    was: "$700",
    items: ["2 hours of 1-on-1 sessions", "3 months of The 1500 Blueprint ($210 value)"],
    cta: "Get Started",
  },
  {
    name: "The Accelerator",
    who: "For fast progress before your test date",
    price: "$1,395",
    was: "$1,690",
    items: [
      "6 hours of 1-on-1 sessions",
      "Custom step-by-step roadmap + weekly assignments",
      "6 months of The 1500 Blueprint ($420 value)",
      "Add hours anytime at $185/hr",
    ],
    cta: "Book a free call",
    popular: true,
  },
  {
    name: "The Guarantee",
    who: "For a serious score jump, backed in writing",
    price: "$2,495",
    was: "$3,280",
    items: [
      "12 hours of 1-on-1 sessions (priority scheduling)",
      "Everything in The Accelerator",
      "12 months of The 1500 Blueprint ($840 value)",
      "Add hours anytime at $175/hr",
    ],
    cta: "Book a free call",
    guarantee: true,
  },
];

const INCLUDED = [
  "A diagnostic that finds your exact weak spots",
  "A written study plan, updated as you improve",
  "Weekly reviews & accountability between sessions",
  "Math, Desmos, Reading & Grammar — every section",
  "Full access to The 1500 Blueprint system",
  "Access to Scott's SAT predictions ($100 value)",
  "Direct line to Scott — never a rotating tutor",
];

export default function TutoringPage() {
  return (
    <main>
      {/* ============================ HEADER ============================ */}
      <section className="py-16 lg:py-[80px]">
        <div
          className="mx-auto grid grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-[56px]"
          style={{ maxWidth: 1160 }}
        >
          <Reveal>
            <div style={eyebrow}>Private SAT tutoring</div>
            <h1 style={{ ...serifH, fontSize: "clamp(36px,4.8vw,56px)", lineHeight: 1.03, margin: "14px 0 0" }}>
              1-on-1 coaching, built for{" "}
              <span style={{ background: "var(--gold)", padding: "0 10px", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>
                <em style={{ fontStyle: "italic" }}>your</em>
              </span>{" "}
              exact situation.
            </h1>
            <p style={{ fontSize: 16.5, lineHeight: 1.62, color: "var(--ink-soft)", maxWidth: "33em", margin: "18px 0 0" }}>
              Work directly with Scott to master the Digital SAT through custom strategy, weekly
              reviews, and a plan built around your exact weaknesses.
            </p>
            <div style={{ marginTop: 26 }}>
              <CtaButton href="#pricing" variant="ink" size="md" arrow>
                Apply for Coaching
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div
              style={{
                background: "var(--card)",
                border: "2px solid var(--ink)",
                borderRadius: 3,
                boxShadow: "var(--shadow-card-lg)",
                padding: 12,
                transform: "rotate(-0.8deg)",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10" }}>
                <ImageSlot label="Live session — Desmos strategy" />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 4px 2px" }}>
                <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
                  Weekly reviews — accountability that sticks
                </span>
                <span style={{ display: "inline-flex", color: "var(--ink)" }}>
                  <Icon name="history" size={16} />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== FEATURES + SCORE RING ==================== */}
      <section className="py-16 lg:py-[84px]" style={ruled}>
        <div
          className="mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)] lg:gap-[48px]"
          style={{ maxWidth: 1160 }}
        >
          <div>
            <Reveal style={{ marginBottom: 28 }}>
              <div style={eyebrow}>What you get</div>
              <h2 style={{ ...serifH, fontSize: "clamp(26px,3.2vw,38px)", lineHeight: 1.08, margin: "12px 0 0" }}>
                Coaching built around you.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CO_FEATURES.map((f) => (
                <Reveal
                  key={f.title}
                  className="tile-lift"
                  style={{
                    display: "flex",
                    gap: 13,
                    alignItems: "flex-start",
                    background: "var(--card)",
                    border: "2px solid var(--ink)",
                    borderRadius: 3,
                    padding: 18,
                  }}
                >
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      background: "var(--tag)",
                      color: "var(--ink)",
                      border: "2px solid var(--ink)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    }}
                  >
                    <Icon name={f.icon} size={21} />
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 16, color: "var(--ink)", lineHeight: 1.25 }}>
                      {f.title}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--ink-muted)", lineHeight: 1.55, marginTop: 4 }}>{f.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal
            delay={100}
            style={{
              background: "var(--card)",
              border: "2px solid var(--ink)",
              borderRadius: 3,
              boxShadow: "var(--shadow-card)",
              padding: 30,
              textAlign: "center",
            }}
          >
            <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
              Average student
            </div>
            <div style={{ position: "relative", width: 184, height: 184, margin: "20px auto 0" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "conic-gradient(var(--accent) var(--ring,78%), rgba(26,35,62,.12) 0)",
                  animation: "ringfill 1.4s cubic-bezier(.22,1,.36,1) both",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 13,
                  borderRadius: "50%",
                  background: "var(--card)",
                  border: "2px solid var(--ink)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 30, color: "var(--accent)", lineHeight: 1 }}>
                  +<CountUp value={150} />
                </div>
                <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)", marginTop: 4 }}>
                  points
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 22, flexWrap: "wrap" }}>
              {["Bronze", "Silver", "1500 Club"].map((tier, i) => (
                <span
                  key={tier}
                  style={{
                    fontFamily: "var(--font-mono-ui)",
                    fontSize: 9.5,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    background: i === 2 ? "var(--gold)" : "transparent",
                    border: "1.5px solid var(--ink)",
                    borderRadius: 2,
                    padding: "4px 9px",
                  }}
                >
                  {tier}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================= COMPACT PROOF ========================= */}
      <section className="py-14" style={ruled}>
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
            <div>
              <div style={eyebrow}>Proof it works</div>
              <div style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 24, color: "var(--ink)", marginTop: 8 }}>
                400+ students · avg <em style={{ fontStyle: "italic", color: "var(--accent)" }}>+150 points</em>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {PROOF.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    background: "var(--card)",
                    border: "2px solid var(--ink)",
                    borderRadius: 2,
                    padding: "10px 14px",
                    boxShadow: "3px 3px 0 var(--ink)",
                    fontFamily: "var(--font-mono-ui)",
                    fontSize: 14,
                  }}
                >
                  <span style={{ color: "var(--ink-muted)" }}>{p.from}</span>
                  <span aria-hidden style={{ color: "var(--accent)", fontWeight: 600 }}>
                    →
                  </span>
                  <span style={{ fontWeight: 600, color: "var(--ink)" }}>{p.to}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= PRICING (pine band, Parker layout) ================= */}
      <section id="pricing" className="py-16 lg:py-[88px]" style={{ ...ruled, background: "var(--navy)" }}>
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20 }}>
            <div style={{ maxWidth: "30em" }}>
              <span className="paper-tag">
                Plans built for <b style={{ color: "var(--accent)" }}>your</b> goal.
              </span>
              <h2 style={{ ...serifH, color: "var(--cream)", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.08, margin: "22px 0 0" }}>
                Pick the plan that matches your target score.
              </h2>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--cream-soft)", maxWidth: "24em", margin: 0 }}>
              Every plan is built for the new Digital SAT and personalized to your exact weak spots.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.35fr)]">
            {/* What's included in every plan */}
            <Reveal
              style={{
                background: "var(--card)",
                border: "2px solid var(--ink)",
                borderRadius: 3,
                boxShadow: "6px 6px 0 var(--navy-ink)",
                padding: 26,
              }}
            >
              <h3 style={{ ...serifH, fontSize: 26, margin: 0 }}>What&apos;s included</h3>
              <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)", marginTop: 6 }}>
                in every plan
              </div>
              <hr className="dashed-rule" style={{ margin: "18px 0" }} />
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {INCLUDED.map((item) => (
                  <li key={item} style={monoItem}>
                    <Check size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <hr className="dashed-rule" style={{ margin: "18px 0" }} />
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ flex: "none", color: "var(--gold-600)", marginTop: 1 }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                      <path d="M12 3l7 3v5c0 4.4-3 8.3-7 9.5-4-1.2-7-5.1-7-9.5V6l7-3z" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" />
                    </g>
                  </svg>
                </span>
                <div style={{ fontSize: 13, lineHeight: 1.55, color: "var(--ink-soft)" }}>
                  <b style={{ color: "var(--ink)" }}>100+ Point Guarantee</b> on The Guarantee plan:
                  improve by 100+ points (or reach 1450+) or your money back.{" "}
                  <Link href="#faq" className="link-quiet" style={{ color: "var(--accent)" }}>
                    Details
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Tier cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {TIERS.map((tier, i) => (
                <Reveal
                  key={tier.name}
                  delay={i * 80}
                  style={{
                    position: "relative",
                    background: "var(--card)",
                    border: tier.popular ? "3px solid var(--gold)" : "2px solid var(--ink)",
                    borderRadius: 3,
                    boxShadow: "6px 6px 0 var(--navy-ink)",
                    padding: "24px 26px",
                  }}
                >
                  {tier.popular ? (
                    <span
                      style={{
                        position: "absolute",
                        top: -13,
                        right: 20,
                        fontFamily: "var(--font-mono-ui)",
                        fontWeight: 600,
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        background: "var(--gold)",
                        color: "var(--ink)",
                        border: "2px solid var(--ink)",
                        borderRadius: 2,
                        padding: "4px 10px",
                        transform: "rotate(1.5deg)",
                      }}
                    >
                      Most popular
                    </span>
                  ) : null}

                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 style={{ ...serifH, fontSize: 27, margin: 0 }}>{tier.name}</h3>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                      <span style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 34, color: "var(--ink)", lineHeight: 1 }}>
                        {tier.price}
                      </span>
                      <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 13, color: "var(--ink-muted)", textDecoration: "line-through" }}>
                        {tier.was}
                      </span>
                    </div>
                  </div>

                  <hr className="dashed-rule" style={{ margin: "14px 0" }} />
                  <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 12, color: "var(--ink-soft)" }}>{tier.who}</div>
                  <hr className="dashed-rule" style={{ margin: "14px 0" }} />

                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {tier.items.map((item) => (
                      <li key={item} style={monoItem}>
                        <Check size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 20 }}>
                    {/* TODO: wire to Stripe Checkout / booking */}
                    <CtaButton href="#pricing" variant="ink" size="card">
                      {tier.cta}
                    </CtaButton>
                  </div>
                  {i > 0 ? (
                    <Link href="#pricing" className="enroll-link">
                      or skip the call and enroll now
                    </Link>
                  ) : null}
                </Reveal>
              ))}

              {/* On-demand hour */}
              <Reveal
                delay={260}
                style={{
                  background: "var(--navy-deep)",
                  border: "2px solid var(--ink)",
                  borderRadius: 3,
                  boxShadow: "6px 6px 0 var(--navy-ink)",
                  padding: "16px 22px",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 14,
                }}
              >
                <div style={{ fontSize: 14.5, color: "var(--cream-soft)" }}>
                  <b style={{ color: "var(--cream)", fontFamily: "var(--font-serif-display)", fontSize: 16 }}>Just need an hour?</b>{" "}
                  Book an on-demand session for{" "}
                  <b style={{ color: "var(--gold)", fontFamily: "var(--font-mono-ui)" }}>$195/hr</b>.
                </div>
                <CtaButton href="#pricing" variant="cream" size="session">
                  Book a Session
                </CtaButton>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== FAQ ============================== */}
      <section id="faq" className="py-16 lg:py-[88px]" style={ruled}>
        <div className="mx-auto px-6" style={{ maxWidth: 840 }}>
          <Reveal style={{ textAlign: "center" }}>
            <div style={eyebrow}>FAQ</div>
            <h2 style={{ ...serifH, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.06, margin: "14px 0 0" }}>
              Common questions
            </h2>
          </Reveal>
          <Faq />
        </div>
      </section>
    </main>
  );
}
