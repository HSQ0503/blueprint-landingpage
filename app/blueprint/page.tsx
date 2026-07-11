import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { GrowBar } from "@/components/GrowBar";
import { Icon } from "@/components/Icon";
import { CtaButton } from "@/components/CtaButton";
import { ImageSlot } from "@/components/ImageSlot";
import { Check } from "@/components/Check";
import { BP_FEATURES } from "@/lib/content";

export const metadata: Metadata = {
  title: "The 1500 Blueprint — Self-paced Digital SAT system",
  description:
    "A complete SAT prep system for the new Digital SAT: step-by-step courses, Desmos drills, 5 practice tests, a 1,200+ question bank, and XP, streaks & mastery.",
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

export default function BlueprintPage() {
  return (
    <main>
      {/* ============================ HEADER ============================ */}
      <section className="py-16 lg:py-[80px]">
        <div
          className="mx-auto grid grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] lg:gap-[56px]"
          style={{ maxWidth: 1160 }}
        >
          <Reveal>
            <div style={eyebrow}>For students who want a clear system</div>
            <h1 style={{ ...serifH, fontSize: "clamp(36px,4.8vw,56px)", lineHeight: 1.03, margin: "14px 0 0" }}>
              The 1500 <em style={{ fontStyle: "normal", color: "var(--accent)" }}>Blueprint.</em>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.62, color: "var(--ink-soft)", maxWidth: "33em", margin: "18px 0 0" }}>
              A complete SAT prep system built for the new Digital SAT — with step-by-step lessons,
              targeted practice, and weekly support to help you raise your score.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32, margin: "26px 0 0" }}>
              {[
                { node: <CountUp value={1200} suffix="+" />, label: "questions" },
                { node: <CountUp value={5} />, label: "practice tests" },
                { node: <CountUp value={25} />, label: "skill patterns" },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, color: "var(--ink)", lineHeight: 1 }}>
                    {stat.node}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)", marginTop: 6 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <CtaButton href="/tutoring#pricing" variant="ink" size="md" arrow>
                Get the Blueprint
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
                transform: "rotate(0.8deg)",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10" }}>
                <ImageSlot label="Blueprint course screenshot" />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 4px 2px" }}>
                <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
                  Course preview — The 1500 Blueprint
                </span>
                <span style={{ display: "inline-flex", color: "var(--gold-600)" }}>
                  <Icon name="zap" size={16} />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================= FEATURE TILES ========================= */}
      <section className="py-16 lg:py-[84px]" style={ruled}>
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ maxWidth: "34em", margin: "0 auto 40px", textAlign: "center" }}>
            <div style={eyebrow}>What&apos;s inside</div>
            <h2 style={{ ...serifH, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.06, margin: "14px 0 0" }}>
              Everything you need to hit 1500.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BP_FEATURES.map((f) => (
              <Reveal
                key={f.title}
                className="tile-lift"
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  background: "var(--card)",
                  border: "2px solid var(--ink)",
                  borderRadius: 3,
                  padding: 20,
                }}
              >
                <span
                  style={{
                    width: 44,
                    height: 44,
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
                  <Icon name={f.icon} size={22} />
                </span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--ink)", lineHeight: 1.25 }}>
                    {f.title}
                  </div>
                  <div style={{ fontSize: 13.5, color: "var(--ink-muted)", lineHeight: 1.55, marginTop: 5 }}>{f.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= XP / MASTERY PANEL ======================= */}
      <section className="py-16 lg:py-[84px]" style={ruled}>
        <div
          className="mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-[48px]"
          style={{ maxWidth: 1160 }}
        >
          <Reveal>
            <div style={eyebrow}>Gamified, not gimmicky</div>
            <h2 style={{ ...serifH, fontSize: "clamp(26px,3.2vw,38px)", lineHeight: 1.08, margin: "14px 0 0" }}>
              Progress you can actually see.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.62, color: "var(--ink-soft)", margin: "16px 0 0", maxWidth: "30em" }}>
              Every drill is graded on your process, not just the pick. XP, streaks, and a mastery
              bar turn &quot;study more&quot; into a clear, motivating system — so you always know
              you&apos;re moving toward 1500.
            </p>
            <ul style={{ listStyle: "none", margin: "22px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Level up as you clear each skill pattern",
                "Daily streaks keep the habit alive",
                "Mastery bar shows exactly what's left to learn",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 15, color: "var(--ink)" }}>
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={100}
            style={{
              background: "var(--navy)",
              border: "2px solid var(--ink)",
              borderRadius: 3,
              boxShadow: "var(--shadow-card-lg)",
              padding: 28,
              color: "var(--cream)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 2,
                    border: "2px solid rgba(247,241,227,.5)",
                    color: "var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name="spark" size={20} />
                </span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--cream)" }}>
                    Level 4 · Rising
                  </div>
                  <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10.5, letterSpacing: "0.05em", color: "var(--cream-soft)", marginTop: 2 }}>
                    1,240 / 2,000 XP
                  </div>
                </div>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono-ui)",
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  background: "var(--gold)",
                  border: "2px solid var(--ink)",
                  padding: "4px 9px",
                  borderRadius: 2,
                }}
              >
                2× XP
              </span>
            </div>

            <div style={{ marginTop: 16, height: 12, borderRadius: 2, border: "1.5px solid rgba(247,241,227,.4)", background: "rgba(4,12,28,.55)", overflow: "hidden" }}>
              <GrowBar percent={62} fillStyle={{ background: "var(--brand)", borderRadius: 0 }} />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" style={{ marginTop: 20 }}>
              <div style={{ border: "2px dashed rgba(247,241,227,.35)", borderRadius: 2, padding: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ display: "inline-flex", animation: "flicker 2.4s ease-in-out infinite" }}>
                    <Icon name="flame-gold" size={20} />
                  </span>
                  <CountUp value={12} style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--cream)" }} />
                  <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cream-soft)" }}>
                    day streak
                  </span>
                </div>
                <div style={{ display: "flex", gap: 5, marginTop: 12 }}>
                  {[true, true, true, true, true, false, false].map((filled, i) => (
                    <span
                      key={i}
                      style={{ flex: 1, height: 8, borderRadius: 1, background: filled ? "var(--gold)" : "rgba(247,241,227,.25)" }}
                    />
                  ))}
                </div>
              </div>
              <div style={{ border: "2px dashed rgba(247,241,227,.35)", borderRadius: 2, padding: 14 }}>
                <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cream-soft)" }}>
                  Patterns mastered
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--cream)", marginTop: 4 }}>
                  <CountUp value={9} /> / 25
                </div>
                <div style={{ marginTop: 10, height: 8, borderRadius: 2, border: "1.5px solid rgba(247,241,227,.4)", background: "rgba(4,12,28,.55)", overflow: "hidden" }}>
                  <GrowBar percent={36} fillStyle={{ background: "var(--sky)", borderRadius: 0 }} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ CTA BAND ============================ */}
      <section className="relative overflow-hidden py-16 lg:py-[88px]" style={{ ...ruled, background: "var(--navy)" }}>
        <div
          aria-hidden
          className="pointer-events-none select-none"
          style={{
            position: "absolute",
            right: -30,
            top: -60,
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 260,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            color: "rgba(247,241,227,.05)",
          }}
        >
          1500
        </div>
        <div className="relative mx-auto px-6 text-center" style={{ maxWidth: 760 }}>
          <Reveal>
            <h2 style={{ ...serifH, color: "var(--cream)", fontSize: "clamp(28px,3.4vw,40px)", lineHeight: 1.08, margin: 0 }}>
              Ready to start the <em style={{ fontStyle: "normal", color: "var(--gold)" }}>climb?</em>
            </h2>
            <p style={{ fontSize: 16, color: "var(--cream-soft)", margin: "14px auto 0", maxWidth: "34em" }}>
              Get the full Blueprint on its own, or bundle it with 1-on-1 coaching for a plan built
              around you.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, justifyContent: "center", marginTop: 28 }}>
              <CtaButton href="/tutoring#pricing" variant="cream" size="md" arrow>
                See plans &amp; pricing
              </CtaButton>
              <CtaButton href="/tutoring" variant="ghost" size="md">
                Explore 1-on-1 coaching
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
