import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Icon } from "@/components/Icon";
import { CtaButton } from "@/components/CtaButton";
import { ImageSlot } from "@/components/ImageSlot";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { SCORES } from "@/lib/content";
import type { IconName } from "@/components/Icon";

const eyebrow = {
  fontFamily: "var(--font-sans)",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: "var(--brand-700)",
};

const ROAD: { icon: IconName; title: string; sub: string; delay: number }[] = [
  { icon: "scan", title: "Diagnostic", sub: "Find weak spots", delay: 0.1 },
  { icon: "reading", title: "Foundations", sub: "Core concepts", delay: 0.4 },
  { icon: "drills", title: "Pattern drills", sub: "Earn XP", delay: 0.7 },
  { icon: "aimath", title: "Desmos mastery", sub: "Calc strategies", delay: 1 },
  { icon: "tests", title: "Practice tests", sub: "5 full-length", delay: 1.3 },
];
const CONNECTORS = [0.28, 0.58, 0.88, 1.18, 1.48];

const HOW: { icon: IconName; iconBg: string; iconColor: string; title: string; desc: string }[] = [
  {
    icon: "zap",
    iconBg: "var(--tile)",
    iconColor: "var(--brand-700)",
    title: "Earn XP on every drill",
    desc: "Graded on your process, not just the answer — so every rep actually teaches you something.",
  },
  {
    icon: "flame-gold",
    iconBg: "#fff7e6",
    iconColor: "var(--gold-600)",
    title: "Keep your streak alive",
    desc: "Two clean drills a day builds the habit that gets you to test day ready, not cramming.",
  },
  {
    icon: "target",
    iconBg: "var(--tile)",
    iconColor: "var(--brand-700)",
    title: "Master one pattern at a time",
    desc: "Watch your mastery bar climb as you turn weak spots into strengths, pattern by pattern.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ============================ HERO ============================ */}
      <section
        id="top"
        className="relative overflow-hidden"
        style={{ background: "var(--grad-hero)", color: "#fff" }}
      >
        <div
          aria-hidden
          className="pointer-events-none select-none"
          style={{
            position: "absolute",
            right: -46,
            top: -56,
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 360,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "rgba(255,255,255,var(--ghost-op,.06))",
          }}
        >
          1500
        </div>

        <div
          className="relative mx-auto grid grid-cols-1 items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,.94fr)] lg:gap-[56px] lg:pb-[96px] lg:pt-[88px]"
          style={{ maxWidth: 1160 }}
        >
          <Reveal>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 13px",
                borderRadius: 999,
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(255,255,255,.16)",
              }}
            >
              <span style={{ color: "var(--sky)", display: "inline-flex" }}>
                <Icon name="target" size={15} />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11.5,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#fff",
                  whiteSpace: "nowrap",
                }}
              >
                400+ students on the road to 1500
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(38px,5.2vw,62px)",
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
                margin: "18px 0 0",
              }}
            >
              The SAT changed.
              <br />
              Your prep should too.
            </h1>

            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.62,
                color: "rgba(255,255,255,.82)",
                maxWidth: "32em",
                margin: "20px 0 0",
              }}
            >
              I&apos;m Scott. I scored a <b style={{ color: "#fff" }}>1580</b> on the SAT and earned a
              perfect <b style={{ color: "#fff" }}>800 Math</b> score four times. I help students
              master the new Digital SAT with Desmos strategies, reading systems, grammar shortcuts,
              and a personalized plan built around their weaknesses.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, margin: "30px 0 0" }}>
              <CtaButton href="/tutoring#pricing" variant="cta" size="lg" arrow>
                Master the Digital SAT
              </CtaButton>
              <CtaButton
                href="/blueprint"
                variant="ghost"
                size="lg"
                style={{ padding: "0 22px", fontSize: 15, gap: 8 }}
              >
                Explore the Blueprint
              </CtaButton>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "22px 32px",
                marginTop: 34,
                paddingTop: 26,
                borderTop: "1px solid rgba(255,255,255,.14)",
              }}
            >
              {[
                { node: <CountUp value={1580} />, label: "SAT score" },
                {
                  node: (
                    <>
                      <CountUp value={4} />×
                    </>
                  ),
                  label: "perfect 800 Math",
                },
                { node: <CountUp value={400} suffix="+" />, label: "students helped" },
              ].map((stat, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 27,
                      color: "#fff",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {stat.node}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--sky)", marginTop: 5, letterSpacing: "0.02em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "var(--shadow-float)",
                border: "1px solid rgba(255,255,255,.14)",
                background: "#0a1f45",
              }}
            >
              <div
                style={{
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "0 14px",
                  background: "rgba(255,255,255,.04)",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <span style={{ marginLeft: 8, color: "rgba(255,255,255,.55)", fontSize: 11, letterSpacing: "0.02em" }}>
                  Intro · The 1500 Blueprint
                </span>
              </div>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", background: "#12305c" }}>
                <ImageSlot tone="dark" label="Drop a hero video thumbnail or screenshot" />
                <div style={{ position: "absolute", left: 16, bottom: 16, pointerEvents: "none" }}>
                  <span
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(43,111,214,.95)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 10px 30px rgba(7,25,59,.5)",
                    }}
                  >
                    <Icon name="play" size={24} style={{ color: "#fff", marginLeft: 3 }} />
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
                <Icon name="target" size={20} />
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 15,
                    color: "var(--navy)",
                    lineHeight: 1.1,
                  }}
                >
                  Built for 1500+
                </div>
                <div style={{ fontSize: 11.5, color: "var(--text-muted)" }}>every strategy, one goal</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================= ROAD TO 1500 ======================= */}
      <section className="bg-white py-16 lg:pb-[84px] lg:pt-[88px]">
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ textAlign: "center", maxWidth: "40em", margin: "0 auto" }}>
            <div style={eyebrow}>Your road to 1500</div>
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
              A clear path — one pattern at a time.
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--ink)", opacity: 0.9, margin: "14px 0 0" }}>
              No more random practice. Every step is mapped, so you always know exactly what moves
              your score next.
            </p>
          </Reveal>

          <Reveal
            delay={80}
            style={{
              marginTop: 44,
              background: "linear-gradient(180deg,#fff,var(--mist))",
              border: "1px solid var(--line-200)",
              borderRadius: 22,
              padding: "38px 28px",
              boxShadow: "var(--shadow-raised)",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 4,
                  maxWidth: 960,
                  minWidth: 660,
                  margin: "0 auto",
                }}
              >
                {ROAD.map((step, i) => (
                  <RoadStep key={step.title} step={step} connectorDelay={CONNECTORS[i]} last={i === ROAD.length - 1} />
                ))}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    width: 120,
                    flex: "none",
                    animation: "popIn .6s cubic-bezier(.22,1,.36,1) both",
                    animationDelay: "1.62s",
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      width: 64,
                      height: 64,
                      borderRadius: 20,
                      background: "linear-gradient(135deg,var(--gold),var(--gold-600))",
                      color: "var(--navy)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 3px 0 var(--gold-700),0 10px 24px rgba(240,169,0,.4)",
                    }}
                  >
                    <Icon name="trophy" size={28} />
                  </span>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, color: "var(--navy)", marginTop: 11 }}>
                    1500
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--flag)", fontWeight: 600, marginTop: 2 }}>Goal reached</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================= TWO OFFERINGS ======================= */}
      <section className="bg-haze py-16 lg:py-[84px]">
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ textAlign: "center", maxWidth: "36em", margin: "0 auto 40px" }}>
            <div style={eyebrow}>Choose your path</div>
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
              Two ways to get to your goal.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <OfferingCard
                href="/blueprint"
                iconName="layers"
                iconBg="var(--tile)"
                iconColor="var(--brand-700)"
                title="The 1500 Blueprint"
                sub="Self-paced system"
                body="Courses, Desmos drills, 5 practice tests, and a 1,200+ question bank. Earn XP as you master each pattern."
                tags={["1,200+ questions", "5 practice tests", "Self-paced"]}
                tagColor="var(--brand-700)"
                tagBg="var(--ice)"
                cta="Explore the Blueprint"
              />
            </Reveal>
            <Reveal delay={90}>
              <OfferingCard
                href="/tutoring"
                iconName="target"
                iconBg="#fff7e6"
                iconColor="var(--gold-600)"
                title="1-on-1 Coaching"
                sub="Work directly with Scott"
                body="A custom plan, weekly reviews, and strategies built around your exact weak spots — with Blueprint access included."
                tags={["+150 pts avg", "Weekly reviews", "Any goal"]}
                tagColor="var(--flag)"
                tagBg="#fff7e6"
                cta="Explore tutoring"
                goldTop
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================= HOW IT WORKS ======================= */}
      <section className="bg-white py-16 lg:py-[84px]">
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ textAlign: "center", maxWidth: "36em", margin: "0 auto 40px" }}>
            <div style={eyebrow}>How it works</div>
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
              Earn XP. Build streaks. Master patterns.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {HOW.map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 90}
                style={{
                  background: "var(--mist)",
                  border: "1px solid var(--line-150)",
                  borderRadius: 18,
                  padding: 24,
                }}
              >
                <span
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    background: card.iconBg,
                    color: card.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name={card.icon} size={26} />
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 18,
                    color: "var(--navy)",
                    marginTop: 16,
                  }}
                >
                  {card.title}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--text-muted)", margin: "6px 0 0" }}>
                  {card.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= TESTIMONIALS ======================= */}
      <section id="testimonials" className="bg-haze py-16 lg:py-[88px]">
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ maxWidth: "38em" }}>
            <div style={eyebrow}>Don&apos;t just take my word for it</div>
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
              Here&apos;s what students are saying.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <TestimonialCarousel />
          </Reveal>

          <Reveal delay={120}>
            <WallOfWins />
          </Reveal>
        </div>
      </section>

      {/* ============================ ABOUT ============================ */}
      <section id="about" className="bg-white py-16 lg:py-[88px]">
        <div
          className="mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-[60px]"
          style={{ maxWidth: 1160 }}
        >
          <Reveal style={{ position: "relative" }}>
            <div
              style={{
                background: "linear-gradient(160deg,#eef1fb,#e3e9fb)",
                borderRadius: 22,
                padding: 22,
                border: "1px solid var(--line-150)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 5",
                  borderRadius: 15,
                  overflow: "hidden",
                  boxShadow: "var(--shadow-float)",
                  background: "var(--mist)",
                }}
              >
                <ImageSlot label="Drop a photo of Scott" />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                right: 12,
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
                <Icon name="trophy" size={20} />
              </span>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, color: "var(--navy)", lineHeight: 1.1 }}>
                  4× perfect 800
                </div>
                <div style={{ fontSize: 11.5, color: "var(--text-muted)" }}>SAT Math</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div style={eyebrow}>About Scott</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(28px,3.3vw,38px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--navy)",
                margin: "12px 0 0",
              }}
            >
              I built SAT prep for the new Digital SAT.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.62, color: "var(--ink)", opacity: 0.9, margin: "18px 0 0" }}>
              I scored a <b style={{ color: "var(--brand-700)" }}>1580</b> on the SAT and earned a
              perfect <b style={{ color: "var(--navy)" }}>800 Math</b> score four times. Now I help
              students master the new Digital SAT with Desmos strategies, reading systems, grammar
              shortcuts, and a clear plan built around their weaknesses.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.62, color: "var(--ink)", opacity: 0.9, margin: "14px 0 0" }}>
              Most students waste months doing random practice without knowing what to fix. My goal
              is to make SAT prep more direct: find the weak spots, learn the right strategy, and
              practice with a system that actually matches the test.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.62, color: "var(--ink)", opacity: 0.9, margin: "14px 0 0" }}>
              Through The 1500 Blueprint and private tutoring, I help students study with structure,
              accountability, and the strategies they need to raise their scores.
            </p>
            <div style={{ marginTop: 26 }}>
              <CtaButton href="/tutoring#pricing" variant="cta" size="about" arrow>
                Work with Scott
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- helpers ----------------------------- */

function RoadStep({
  step,
  connectorDelay,
  last,
}: {
  step: { icon: IconName; title: string; sub: string; delay: number };
  connectorDelay: number;
  last: boolean;
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: 120,
          flex: "none",
          animation: "popIn .55s cubic-bezier(.22,1,.36,1) both",
          animationDelay: `${step.delay}s`,
        }}
      >
        <span
          style={{
            width: 60,
            height: 60,
            borderRadius: 18,
            background: "var(--navy)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 3px 0 var(--navy-900)",
          }}
        >
          <Icon name={step.icon} size={26} />
        </span>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, color: "var(--navy)", marginTop: 12 }}>
          {step.title}
        </div>
        <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 2 }}>{step.sub}</div>
      </div>
      <div
        style={{
          flex: 1,
          height: 4,
          borderRadius: 2,
          background: "var(--line-200)",
          marginTop: 28,
          overflow: "hidden",
          minWidth: 18,
        }}
      >
        <div
          style={{
            height: "100%",
            background: last ? "linear-gradient(90deg,var(--brand),var(--gold))" : "var(--grad-xp)",
            transformOrigin: "left",
            animation: "growX .5s ease both",
            animationDelay: `${connectorDelay}s`,
          }}
        />
      </div>
    </>
  );
}

function OfferingCard({
  href,
  iconName,
  iconBg,
  iconColor,
  title,
  sub,
  body,
  tags,
  tagColor,
  tagBg,
  cta,
  goldTop,
}: {
  href: string;
  iconName: IconName;
  iconBg: string;
  iconColor: string;
  title: string;
  sub: string;
  body: string;
  tags: string[];
  tagColor: string;
  tagBg: string;
  cta: string;
  goldTop?: boolean;
}) {
  return (
    <Link
      href={href}
      className="card-lift block"
      style={{
        background: "#fff",
        border: "1px solid var(--line-200)",
        borderTop: goldTop ? "3px solid var(--gold)" : "1px solid var(--line-200)",
        borderRadius: 20,
        padding: 28,
        boxShadow: "var(--shadow-pop)",
        textDecoration: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
        <span
          style={{
            width: 52,
            height: 52,
            borderRadius: 15,
            background: iconBg,
            color: iconColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "none",
          }}
        >
          <Icon name={iconName} size={26} />
        </span>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--navy)", letterSpacing: "-0.01em" }}>
            {title}
          </div>
          <div style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{sub}</div>
        </div>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink)", opacity: 0.9, margin: "16px 0 0" }}>{body}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{ fontSize: 11.5, fontWeight: 700, color: tagColor, background: tagBg, borderRadius: 999, padding: "5px 11px" }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          marginTop: 20,
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: 14.5,
          color: "var(--cta)",
        }}
      >
        {cta}
        <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
          <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}

function WallOfWins() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: 40,
        background: "var(--grad-panel)",
        borderRadius: 22,
        padding: 30,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none"
        style={{
          position: "absolute",
          right: -30,
          bottom: -70,
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: 220,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "rgba(255,255,255,.05)",
        }}
      >
        1500
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <span style={{ color: "var(--gold)", display: "inline-flex" }}>
            <Icon name="trophy" size={18} />
          </span>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--sky)",
            }}
          >
            Wall of wins
          </div>
        </div>

        <div className="columns-1 gap-[14px] sm:columns-2 lg:columns-3" style={{ marginTop: 16 }}>
          {SCORES.map((s, i) => (
            <div
              key={i}
              style={{
                breakInside: "avoid",
                marginBottom: 14,
                background: "#fff",
                borderRadius: 14,
                padding: "15px 16px 13px",
                boxShadow: "0 8px 22px rgba(7,25,59,.22)",
              }}
            >
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-subtle)" }}>
                Total score
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 2 }}>
                <CountUp
                  value={s.total}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 38,
                    color: "var(--navy)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                />
                <div style={{ display: "flex", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 8.5, color: "var(--text-subtle)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Read/Write
                    </div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, color: "var(--ink)", marginTop: 1 }}>
                      {s.rw}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 8.5, color: "var(--text-subtle)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Math
                    </div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, color: "var(--ink)", marginTop: 1 }}>
                      {s.math}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: 11,
                  paddingTop: 9,
                  borderTop: "1px solid var(--line-150)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{s.date}</span>
                {s.delta ? (
                  <span
                    style={{
                      fontSize: 10.5,
                      fontWeight: 700,
                      color: "var(--success-600)",
                      background: "var(--success-bg)",
                      borderRadius: 999,
                      padding: "2px 8px",
                    }}
                  >
                    {s.delta}
                  </span>
                ) : null}
              </div>
            </div>
          ))}

          {[
            { initial: "M", time: "8:54 AM", text: "Hi Scott! I wanted to share my score — literally your program helped so much." },
            { initial: "R", time: "now", text: "Two-month progress — 1400 coming soon in August." },
          ].map((msg) => (
            <div
              key={msg.initial}
              style={{
                breakInside: "avoid",
                marginBottom: 14,
                background: "var(--navy-900)",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 14,
                padding: "14px 15px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 8 }}>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "var(--grad-avatar)",
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                >
                  {msg.initial}
                </span>
                <div>
                  <div style={{ color: "#fff", fontSize: 12.5, fontWeight: 600 }}>Student</div>
                  <div style={{ color: "var(--sky)", fontSize: 10.5 }}>{msg.time}</div>
                </div>
              </div>
              <div style={{ color: "rgba(255,255,255,.9)", fontSize: 13.5, lineHeight: 1.5 }}>{msg.text}</div>
            </div>
          ))}

          <div style={{ breakInside: "avoid", marginBottom: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["GRATEFUL FOR YOU BRO", "LFG"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 12.5,
                  letterSpacing: "0.02em",
                  color: "var(--gold)",
                  border: "1px solid rgba(255,189,32,.42)",
                  borderRadius: 999,
                  padding: "6px 13px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
