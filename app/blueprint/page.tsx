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
  fontFamily: "var(--font-sans)",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: "var(--brand-700)",
};

export default function BlueprintPage() {
  return (
    <main>
      {/* ============================ HEADER ============================ */}
      <section className="bg-haze py-16 lg:pb-[84px] lg:pt-16">
        <div
          className="mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] lg:gap-[56px]"
          style={{ maxWidth: 1160 }}
        >
          <Reveal>
            <div style={eyebrow}>For students who want a clear system</div>
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
              The 1500 Blueprint
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink)", opacity: 0.9, maxWidth: "33em", margin: "18px 0 0" }}>
              A complete SAT prep system built for the new Digital SAT — with step-by-step lessons,
              targeted practice, and weekly support to help you raise your score.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 26, margin: "26px 0 0" }}>
              {[
                { node: <CountUp value={1200} suffix="+" />, label: "questions" },
                { node: <CountUp value={5} />, label: "practice tests" },
                { node: <CountUp value={25} />, label: "skill patterns" },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: "var(--navy)", lineHeight: 1 }}>
                    {stat.node}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 3 }}>{stat.label}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <CtaButton href="/tutoring#pricing" variant="cta" size="md" arrow>
                Get the Blueprint
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
                background: "#fff",
              }}
            >
              <div
                style={{
                  height: 30,
                  background: "#eef2f8",
                  borderBottom: "1px solid var(--line-200)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "0 12px",
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#cbd5e3" }} />
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#cbd5e3" }} />
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#cbd5e3" }} />
                <span
                  style={{
                    marginLeft: 8,
                    height: 15,
                    flex: 1,
                    maxWidth: 200,
                    background: "#fff",
                    border: "1px solid var(--line-200)",
                    borderRadius: 6,
                  }}
                />
              </div>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", background: "var(--mist)" }}>
                <ImageSlot label="Drop a Blueprint course screenshot" />
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                right: -14,
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
                  background: "#fff7e6",
                  color: "var(--gold-600)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "none",
                }}
              >
                <Icon name="zap" size={20} />
              </span>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, color: "var(--navy)", lineHeight: 1.1 }}>
                  Earn XP
                </div>
                <div style={{ fontSize: 11.5, color: "var(--text-muted)" }}>as you master patterns</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================= FEATURE TILES ========================= */}
      <section className="bg-white py-16 lg:py-[80px]">
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ maxWidth: "34em", margin: "0 auto 36px", textAlign: "center" }}>
            <div style={eyebrow}>What&apos;s inside</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(28px,3.4vw,40px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "var(--navy)",
                margin: "12px 0 0",
              }}
            >
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
                  background: "#fff",
                  border: "1px solid var(--line-200)",
                  borderRadius: 16,
                  padding: 20,
                  boxShadow: "var(--shadow-raised)",
                }}
              >
                <span
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 13,
                    background: "var(--tile)",
                    color: "var(--brand-700)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                >
                  <Icon name={f.icon} size={24} />
                </span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, color: "var(--navy)", lineHeight: 1.2 }}>
                    {f.title}
                  </div>
                  <div style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.5, marginTop: 4 }}>{f.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= XP / MASTERY PANEL ======================= */}
      <section className="bg-haze py-16 lg:py-[80px]">
        <div
          className="mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-[48px]"
          style={{ maxWidth: 1160 }}
        >
          <Reveal>
            <div style={eyebrow}>Gamified, not gimmicky</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(26px,3.2vw,36px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--navy)",
                margin: "12px 0 0",
              }}
            >
              Progress you can actually see.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink)", opacity: 0.9, margin: "16px 0 0", maxWidth: "30em" }}>
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
              position: "relative",
              overflow: "hidden",
              background: "var(--grad-panel)",
              borderRadius: 22,
              padding: 28,
              color: "#fff",
              boxShadow: "var(--shadow-float)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none"
              style={{
                position: "absolute",
                right: -24,
                bottom: -56,
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 180,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "rgba(255,255,255,.05)",
              }}
            >
              XP
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: "rgba(255,255,255,.12)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon name="spark" size={22} />
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, color: "#fff" }}>Level 4 · Rising</div>
                    <div style={{ fontSize: 11.5, color: "var(--sky)" }}>1,240 / 2,000 XP</div>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 800,
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--navy)",
                    background: "linear-gradient(135deg,var(--gold),var(--gold-600))",
                    padding: "5px 10px",
                    borderRadius: 999,
                  }}
                >
                  2× XP
                </span>
              </div>

              <div style={{ marginTop: 14, height: 12, borderRadius: 999, background: "rgba(255,255,255,.16)", overflow: "hidden" }}>
                <GrowBar percent={62} fillStyle={{ background: "var(--grad-xp)" }} />
              </div>

              <div style={{ display: "flex", gap: 14, marginTop: 20 }}>
                <div style={{ flex: 1, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 14, padding: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ display: "inline-flex", animation: "flicker 2.4s ease-in-out infinite" }}>
                      <Icon name="flame-gold" size={20} />
                    </span>
                    <CountUp value={12} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "#fff" }} />
                    <span style={{ fontSize: 12, color: "var(--sky)" }}>day streak</span>
                  </div>
                  <div style={{ display: "flex", gap: 5, marginTop: 12 }}>
                    {[true, true, true, true, true, false, false].map((filled, i) => (
                      <span
                        key={i}
                        style={{
                          flex: 1,
                          height: 8,
                          borderRadius: 3,
                          background: filled ? "var(--gold)" : "rgba(255,255,255,.22)",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 14, padding: 14 }}>
                  <div style={{ fontSize: 12, color: "var(--sky)" }}>Patterns mastered</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "#fff", marginTop: 2 }}>
                    <CountUp value={9} /> / 25
                  </div>
                  <div style={{ marginTop: 10, height: 8, borderRadius: 999, background: "rgba(255,255,255,.16)", overflow: "hidden" }}>
                    <GrowBar percent={36} fillStyle={{ background: "linear-gradient(90deg,var(--brand),var(--sky))" }} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ CTA BAND ============================ */}
      <section className="bg-white pb-16 pt-9 lg:pb-[88px]">
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal
            style={{
              position: "relative",
              overflow: "hidden",
              background: "var(--grad-hero)",
              borderRadius: 24,
              padding: 44,
              textAlign: "center",
              color: "#fff",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none"
              style={{
                position: "absolute",
                right: -30,
                top: -50,
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 220,
                lineHeight: 1,
                color: "rgba(255,255,255,.05)",
              }}
            >
              1500
            </div>
            <div style={{ position: "relative" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(26px,3.2vw,36px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                Ready to start the climb?
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,.82)", margin: "12px auto 0", maxWidth: "34em" }}>
                Get the full Blueprint on its own, or bundle it with 1-on-1 coaching for a plan built
                around you.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 26 }}>
                <CtaButton href="/tutoring#pricing" variant="cta" size="md" arrow>
                  See plans &amp; pricing
                </CtaButton>
                <CtaButton href="/tutoring" variant="ghost" size="md" style={{ fontSize: 15, gap: 8 }}>
                  Explore 1-on-1 coaching
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
