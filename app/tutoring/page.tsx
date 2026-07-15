import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { Check } from "@/components/Check";
import { Faq } from "@/components/Faq";
import { TestimonialWall } from "@/components/TestimonialWall";
import { HeroVideo } from "@/components/HeroVideo";
import { PLANS, dollars } from "@/lib/content";

export const metadata: Metadata = {
  title: "1-on-1 Coaching: Private Digital SAT tutoring with Scott",
  description:
    "Work directly with Scott to master the Digital SAT: custom strategy, weekly reviews, and a plan built around your exact weaknesses. Plans from $595, 100+ point guarantee available.",
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

// The three enrollable tiers (the on-demand hour renders separately below).
const TIERS = PLANS.filter((p) => p.id !== "hour");

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
                <em style={{ fontStyle: "normal" }}>your</em>
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
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", overflow: "hidden", borderRadius: 2, background: "var(--navy-deep)" }}>
                <HeroVideo
                  src="/videos/tutoring-hero.mp4"
                  poster="/videos/tutoring-poster.jpg"
                  label="Scott coaching a live 1-on-1 session"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== WHAT STUDENTS ARE SAYING ==================== */}
      <section className="py-16 lg:py-[84px]" style={ruled}>
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ maxWidth: "40em" }}>
            <div style={eyebrow}>In their words</div>
            <h2 style={{ ...serifH, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.06, margin: "14px 0 0" }}>
              Here&apos;s what students are saying.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink-soft)", margin: "14px 0 0", maxWidth: "34em" }}>
              Real messages and real score reports from students who put in the work.
            </p>
          </Reveal>

          <div className="mt-9">
            <TestimonialWall />
          </div>
        </div>
      </section>

      {/* ===================== PRICING (pine band) ===================== */}
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

          {/* Three tiers, side by side. The Guarantee is the hero: gold ring,
              gold-tinted card, raised above its neighbors. */}
          <div className="mt-11 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {TIERS.map((tier, i) => {
              const gold = tier.accent === "gold";
              const savings = tier.was ? dollars(tier.was) - dollars(tier.price) : 0;
              return (
              <Reveal
                key={tier.name}
                delay={i * 80}
                className={gold ? "tier-gold tier-raise" : undefined}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  background: gold ? "var(--gold-tint)" : "var(--card)",
                  border: gold
                    ? "3px solid var(--gold-600)"
                    : tier.accent === "blue"
                      ? "3px solid var(--accent)"
                      : "2px solid var(--ink)",
                  borderRadius: 3,
                  boxShadow: gold ? "10px 10px 0 var(--navy-ink)" : "6px 6px 0 var(--navy-ink)",
                  padding: "26px 24px",
                }}
              >
                {tier.popular ? (
                  <span
                    style={{
                      position: "absolute",
                      top: -15,
                      left: "50%",
                      transform: "translateX(-50%) rotate(-1.5deg)",
                      fontFamily: "var(--font-mono-ui)",
                      fontWeight: 600,
                      fontSize: 10.5,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      background: "var(--gold)",
                      color: "var(--ink)",
                      border: "2px solid var(--ink)",
                      borderRadius: 2,
                      padding: "5px 13px",
                      boxShadow: "2px 2px 0 var(--ink)",
                    }}
                  >
                    Most popular
                  </span>
                ) : null}

                <h3 style={{ ...serifH, fontSize: 24, margin: 0 }}>{tier.name}</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 9, marginTop: 8 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 34, color: "var(--ink)", lineHeight: 1 }}>
                    {tier.price}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 13, color: "var(--ink-muted)", textDecoration: "line-through" }}>
                    {tier.was}
                  </span>
                </div>
                {gold && savings > 0 ? (
                  <span
                    style={{
                      alignSelf: "flex-start",
                      marginTop: 12,
                      fontFamily: "var(--font-mono-ui)",
                      fontWeight: 600,
                      fontSize: 10,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      background: "var(--gold)",
                      color: "var(--ink)",
                      border: "2px solid var(--ink)",
                      borderRadius: 2,
                      padding: "4px 9px",
                    }}
                  >
                    Best value — save ${savings.toLocaleString("en-US")}
                  </span>
                ) : null}
                {/* Ink, not gold-700 — gold-700 on the gold tint fails AA contrast. */}
                <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", color: gold ? "var(--ink)" : "var(--accent)", marginTop: 10 }}>
                  {tier.who}
                </div>

                <hr className="dashed-rule" style={{ margin: "16px 0" }} />

                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                  {tier.items.map((item) => (
                    <li key={item} style={monoItem}>
                      <Check size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {tier.guarantee ? (
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      marginTop: 16,
                      padding: "12px 13px",
                      border: "2px dashed rgba(26,35,62,.28)",
                      borderRadius: 2,
                    }}
                  >
                    <span style={{ flex: "none", color: "var(--gold-600)", marginTop: 1 }}>
                      <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
                        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                          <path d="M12 3l7 3v5c0 4.4-3 8.3-7 9.5-4-1.2-7-5.1-7-9.5V6l7-3z" />
                          <path d="M9 12l2 2 4-4" strokeLinecap="round" />
                        </g>
                      </svg>
                    </span>
                    <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--ink-soft)" }}>
                      <b style={{ color: "var(--ink)" }}>100+ Point Guarantee.</b> Improve by 100+ points
                      (or reach 1450+) by the end of the program, or your money back.{" "}
                      <Link href="#faq" className="link-quiet" style={{ color: "var(--accent)" }}>
                        Details
                      </Link>
                    </div>
                  </div>
                ) : null}

                <div style={{ marginTop: "auto", paddingTop: 22 }}>
                  <CtaButton
                    href={tier.primary === "call" ? `/book-a-call?plan=${tier.id}` : `/enroll?plan=${tier.id}`}
                    variant={gold ? "gold" : "ink"}
                    size="card"
                  >
                    {tier.cta}
                  </CtaButton>
                  {/* Shown on the "call" tiers (space-reserved but hidden on the
                      rest) so the three primary CTAs line up on one row. */}
                  <Link
                    href={`/enroll?plan=${tier.id}`}
                    className="enroll-link"
                    aria-hidden={tier.primary !== "call" || undefined}
                    tabIndex={tier.primary !== "call" ? -1 : undefined}
                    style={{ visibility: tier.primary === "call" ? "visible" : "hidden" }}
                  >
                    or skip the call and enroll now
                  </Link>
                </div>
              </Reveal>
              );
            })}
          </div>

          {/* On-demand hour */}
          <Reveal
            delay={120}
            style={{
              marginTop: 20,
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
              <b style={{ color: "var(--cream)", fontFamily: "var(--font-display)", fontSize: 16 }}>Just need an hour?</b>{" "}
              Book an on-demand session for{" "}
              <b style={{ color: "var(--gold)", fontFamily: "var(--font-mono-ui)" }}>$195/hr</b> — pay
              and pick your time, no call needed.
            </div>
            <CtaButton href="/enroll?plan=hour" variant="cream" size="session">
              Book a Session
            </CtaButton>
          </Reveal>
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
