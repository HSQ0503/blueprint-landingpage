import type { Metadata } from "next";
import type { ReactNode } from "react";
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
  fontFamily: "var(--font-sans)",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: "var(--brand-700)",
};

function PriceLi({ children }: { children: ReactNode }) {
  return (
    <li style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 14.5, lineHeight: 1.5, color: "var(--ink)" }}>
      <Check size={19} />
      <span>{children}</span>
    </li>
  );
}

const cardHeaderTitle = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: 20,
  color: "var(--navy)",
  letterSpacing: "-0.01em",
} as const;
const cardHeaderSub = { fontSize: 12.5, color: "var(--text-muted)" } as const;
const priceMain = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: 40,
  color: "var(--navy)",
  letterSpacing: "-0.02em",
  lineHeight: 1,
} as const;
const priceWas = { fontSize: 17, color: "var(--text-subtle)", textDecoration: "line-through" } as const;
const iconTile40 = {
  width: 40,
  height: 40,
  borderRadius: 11,
  background: "var(--tile)",
  color: "var(--brand-700)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "none",
} as const;
const muted = { color: "var(--text-muted)" } as const;

export default function TutoringPage() {
  return (
    <main>
      {/* ============================ HEADER ============================ */}
      <section className="bg-haze py-16 lg:pb-[84px] lg:pt-16">
        <div
          className="mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-[56px]"
          style={{ maxWidth: 1160 }}
        >
          <Reveal>
            <div style={eyebrow}>Private SAT tutoring</div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(34px,4.6vw,52px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "var(--navy)",
                margin: "14px 0 0",
              }}
            >
              1-on-1 Coaching
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--navy)", fontWeight: 600, margin: "14px 0 0" }}>
              Built for{" "}
              <span style={{ background: "var(--gold)", color: "var(--navy)", padding: "1px 8px", borderRadius: 4 }}>your</span>{" "}
              exact situation.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--ink)", opacity: 0.9, maxWidth: "33em", margin: "14px 0 0" }}>
              Work directly with Scott to master the Digital SAT through custom strategy, weekly
              reviews, and a plan built around your exact weaknesses.
            </p>
            <div style={{ marginTop: 26 }}>
              <CtaButton href="#pricing" variant="cta" size="md" arrow>
                Apply for Coaching
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={90} style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "var(--shadow-float)",
                border: "1px solid var(--line-200)",
                background: "#0a1f45",
              }}
            >
              <div
                style={{
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "0 13px",
                  background: "rgba(255,255,255,.04)",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(255,255,255,.3)" }} />
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(255,255,255,.3)" }} />
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(255,255,255,.3)" }} />
                <span style={{ marginLeft: 8, color: "rgba(255,255,255,.6)", fontSize: 11 }}>Live session · Desmos</span>
              </div>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", background: "#12305c" }}>
                <ImageSlot tone="dark" label="Drop a tutoring session video or screenshot" />
                <div style={{ position: "absolute", left: 16, bottom: 16, pointerEvents: "none" }}>
                  <span
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "rgba(43,111,214,.95)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 10px 30px rgba(7,25,59,.5)",
                    }}
                  >
                    <Icon name="play" size={22} style={{ color: "#fff", marginLeft: 3 }} />
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                left: -16,
                bottom: -16,
                background: "#fff",
                borderRadius: 14,
                boxShadow: "var(--shadow-pop)",
                padding: "11px 15px",
                display: "flex",
                gap: 11,
                alignItems: "center",
                border: "1px solid var(--line-150)",
              }}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 11,
                  background: "var(--tile)",
                  color: "var(--brand-700)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                <Icon name="history" size={20} />
              </span>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, color: "var(--navy)", lineHeight: 1.1 }}>
                  Weekly reviews
                </div>
                <div style={{ fontSize: 11.5, color: "var(--text-muted)" }}>accountability that sticks</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== FEATURE TILES + SCORE RING ==================== */}
      <section className="bg-white py-16 lg:py-[80px]">
        <div
          className="mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)] lg:gap-[48px]"
          style={{ maxWidth: 1160 }}
        >
          <div>
            <Reveal style={{ marginBottom: 28 }}>
              <div style={eyebrow}>What you get</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(26px,3.2vw,36px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--navy)",
                  margin: "10px 0 0",
                }}
              >
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
                    background: "#fff",
                    border: "1px solid var(--line-200)",
                    borderRadius: 16,
                    padding: 18,
                    boxShadow: "var(--shadow-raised)",
                  }}
                >
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 13,
                      background: "var(--tile)",
                      color: "var(--brand-700)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    }}
                  >
                    <Icon name={f.icon} size={23} />
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15.5, color: "var(--navy)", lineHeight: 1.25 }}>
                      {f.title}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5, marginTop: 3 }}>{f.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal
            delay={100}
            style={{
              background: "linear-gradient(180deg,#fff,var(--mist))",
              border: "1px solid var(--line-200)",
              borderRadius: 22,
              padding: 30,
              textAlign: "center",
              boxShadow: "var(--shadow-raised)",
            }}
          >
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--brand-700)" }}>
              Average student
            </div>
            <div style={{ position: "relative", width: 184, height: 184, margin: "18px auto 0" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "conic-gradient(var(--brand) var(--ring,78%), var(--line-200) 0)",
                  animation: "ringfill 1.4s cubic-bezier(.22,1,.36,1) both",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 14,
                  borderRadius: "50%",
                  background: "#fff",
                  boxShadow: "var(--shadow-raised)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "var(--success-600)", lineHeight: 1 }}>
                  +<CountUp value={150} />
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>points</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", background: "rgba(11,42,91,.06)", borderRadius: 999, padding: "4px 9px" }}>
                Bronze
              </span>
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand-600)", background: "var(--ice)", borderRadius: 999, padding: "4px 9px" }}>
                Silver
              </span>
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--flag)", background: "#fff7e6", border: "1px solid rgba(240,169,0,.35)", borderRadius: 999, padding: "4px 9px" }}>
                1500 Club
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================= COMPACT PROOF ========================= */}
      <section className="bg-haze py-16">
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
            <div>
              <div style={eyebrow}>Proof it works</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--navy)", marginTop: 6 }}>
                400+ students · avg +150 points
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {PROOF.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#fff",
                    border: "1px solid var(--line-200)",
                    borderRadius: 14,
                    padding: "12px 16px",
                    boxShadow: "var(--shadow-raised)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, color: "var(--text-muted)" }}>{p.from}</span>
                  <svg viewBox="0 0 24 24" width="15" height="15" style={{ color: "var(--text-subtle)" }} aria-hidden="true">
                    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, color: "var(--success-600)" }}>{p.to}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ PRICING ============================ */}
      <section id="pricing" className="bg-white py-16 lg:py-[88px]">
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ textAlign: "center", maxWidth: "38em", margin: "0 auto" }}>
            <div style={eyebrow}>Pricing</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(30px,3.6vw,42px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "var(--navy)",
                margin: "12px 0 0",
              }}
            >
              Pick the plan that matches your goal.
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--ink)", opacity: 0.9, margin: "14px 0 0" }}>
              Every plan is built for the new Digital SAT and personalized to your exact weak spots.
            </p>
          </Reveal>

          <div className="mt-11 grid grid-cols-1 items-start gap-[22px] lg:grid-cols-3">
            {/* Essentials */}
            <Reveal
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#fff",
                border: "1px solid var(--line-200)",
                borderRadius: 20,
                padding: 28,
                boxShadow: "var(--shadow-raised)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={iconTile40}>
                  <Icon name="zap" size={20} />
                </span>
                <div>
                  <div style={cardHeaderTitle}>The Essentials</div>
                  <div style={cardHeaderSub}>Best for getting started</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 20 }}>
                <span style={priceMain}>$595</span>
                <span style={priceWas}>$700</span>
              </div>
              <ul style={{ listStyle: "none", margin: "22px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                <PriceLi>
                  <b style={{ color: "var(--navy)" }}>2 hours</b> of 1-on-1 sessions
                </PriceLi>
                <PriceLi>A clear study plan for your exact situation</PriceLi>
                <PriceLi>
                  3 months of The 1500 Blueprint <span style={muted}>($210 value)</span>
                </PriceLi>
                <PriceLi>
                  Access to my SAT predictions <span style={muted}>($100 value)</span>
                </PriceLi>
              </ul>
              <div style={{ marginTop: 24 }}>
                {/* TODO: wire to Stripe Checkout / booking */}
                <CtaButton href="#pricing" variant="cta" size="card">
                  Get Started
                </CtaButton>
              </div>
            </Reveal>

            {/* Accelerator — most popular, animated beam border */}
            <Reveal
              delay={90}
              style={{
                position: "relative",
                borderRadius: 22,
                padding: 2,
                overflow: "hidden",
                background: "rgba(63,169,245,.28)",
                boxShadow: "var(--shadow-pop)",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 22,
                  background:
                    "conic-gradient(from var(--beam), rgba(63,169,245,0) 0deg, rgba(63,169,245,0) 250deg, #7ccbff 300deg, #3fa9f5 330deg, #7ccbff 350deg, rgba(63,169,245,0) 360deg)",
                  animation: "beamspin 4.2s linear infinite",
                }}
              />
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  background: "#fff",
                  borderRadius: 20,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -13,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg,var(--gold),var(--gold-600))",
                    color: "var(--navy)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 800,
                    fontSize: 10.5,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "6px 14px",
                    borderRadius: 999,
                    boxShadow: "0 6px 16px rgba(240,169,0,.35)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most popular
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                  <span style={iconTile40}>
                    <Icon name="target" size={21} />
                  </span>
                  <div>
                    <div style={cardHeaderTitle}>The Accelerator</div>
                    <div style={cardHeaderSub}>Best for fast progress</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 20 }}>
                  <span style={priceMain}>$1,395</span>
                  <span style={priceWas}>$1,690</span>
                </div>
                <ul style={{ listStyle: "none", margin: "22px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  <PriceLi>
                    <b style={{ color: "var(--navy)" }}>6 hours</b> of 1-on-1 sessions
                  </PriceLi>
                  <PriceLi>A custom step-by-step roadmap with weekly assignments</PriceLi>
                  <PriceLi>
                    6 months of The 1500 Blueprint <span style={muted}>($420 value)</span>
                  </PriceLi>
                  <PriceLi>
                    Access to my SAT predictions <span style={muted}>($100 value)</span>
                  </PriceLi>
                  <PriceLi>Add hours anytime at $185/hr</PriceLi>
                </ul>
                <div style={{ marginTop: 24 }}>
                  <CtaButton href="#pricing" variant="cta" size="card">
                    Book a free call
                  </CtaButton>
                </div>
                <Link href="#pricing" className="enroll-link">
                  or skip the call and enroll now
                </Link>
              </div>
            </Reveal>

            {/* Guarantee */}
            <Reveal
              delay={180}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#fff",
                border: "1px solid var(--line-200)",
                borderRadius: 20,
                padding: 28,
                boxShadow: "var(--shadow-raised)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={iconTile40}>
                  <Icon name="trophy" size={21} />
                </span>
                <div>
                  <div style={cardHeaderTitle}>The Guarantee</div>
                  <div style={cardHeaderSub}>Best for a serious score jump</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 20 }}>
                <span style={priceMain}>$2,495</span>
                <span style={priceWas}>$3,280</span>
              </div>
              <ul style={{ listStyle: "none", margin: "22px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                <PriceLi>
                  <b style={{ color: "var(--navy)" }}>12 hours</b> of 1-on-1 sessions (priority scheduling)
                </PriceLi>
                <PriceLi>Everything in The Accelerator plan</PriceLi>
                <PriceLi>
                  12 months of The 1500 Blueprint <span style={muted}>($840 value)</span>
                </PriceLi>
                <PriceLi>Add hours anytime at $175/hr</PriceLi>
              </ul>
              <div
                style={{
                  marginTop: 16,
                  background: "#fff7e6",
                  border: "1px solid rgba(240,169,0,.35)",
                  borderRadius: 12,
                  padding: "12px 14px",
                  display: "flex",
                  gap: 10,
                }}
              >
                <span style={{ flex: "none", color: "var(--gold-600)", marginTop: 1 }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                      <path d="M12 3l7 3v5c0 4.4-3 8.3-7 9.5-4-1.2-7-5.1-7-9.5V6l7-3z" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" />
                    </g>
                  </svg>
                </span>
                <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--ink)" }}>
                  <b style={{ color: "var(--navy)" }}>100+ Point Guarantee.</b> If your score doesn&apos;t improve by at
                  least 100 points, or reach 1450+, by the end of the program, you get your money back.{" "}
                  <Link href="#faq" className="link-quiet" style={{ color: "var(--brand-700)" }}>
                    More details
                  </Link>
                  .
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <CtaButton href="#pricing" variant="cta" size="card">
                  Book a free call
                </CtaButton>
              </div>
              <Link href="#pricing" className="enroll-link">
                or skip the call and enroll now
              </Link>
            </Reveal>
          </div>

          {/* On-demand band */}
          <Reveal
            style={{
              marginTop: 22,
              background: "var(--ice)",
              border: "1px solid var(--line-150)",
              borderRadius: 16,
              padding: "18px 24px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 14,
            }}
          >
            <div style={{ fontSize: 15.5, color: "var(--ink)" }}>
              <b style={{ color: "var(--navy)" }}>Just need an hour?</b> Book an on-demand session for{" "}
              <b style={{ color: "var(--navy)" }}>$195/hr</b>.
            </div>
            <CtaButton href="#pricing" variant="outline" size="session">
              Book a Session
            </CtaButton>
          </Reveal>
        </div>
      </section>

      {/* ============================== FAQ ============================== */}
      <section id="faq" className="bg-haze py-16 lg:py-[88px]">
        <div className="mx-auto px-6" style={{ maxWidth: 840 }}>
          <Reveal style={{ textAlign: "center" }}>
            <div style={eyebrow}>FAQ</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(30px,3.6vw,42px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "var(--navy)",
                margin: "12px 0 0",
              }}
            >
              Common questions
            </h2>
          </Reveal>
          <Faq />
        </div>
      </section>
    </main>
  );
}
