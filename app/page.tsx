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

// Full-width ink rule between paper sections (print grid).
const ruled = { borderTop: "2px solid var(--ink)" };

const ROAD: { icon: IconName; title: string; sub: string }[] = [
  { icon: "scan", title: "Diagnostic", sub: "Find weak spots" },
  { icon: "reading", title: "Foundations", sub: "Core concepts" },
  { icon: "drills", title: "Pattern drills", sub: "Earn XP" },
  { icon: "aimath", title: "Desmos mastery", sub: "Calc strategies" },
  { icon: "tests", title: "Practice tests", sub: "5 full-length" },
];

const HOW: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "zap",
    title: "Earn XP on every drill",
    desc: "Graded on your process, not just the answer — so every rep actually teaches you something.",
  },
  {
    icon: "flame-gold",
    title: "Keep your streak alive",
    desc: "Two clean drills a day builds the habit that gets you to test day ready, not cramming.",
  },
  {
    icon: "target",
    title: "Master one pattern at a time",
    desc: "Watch your mastery bar climb as you turn weak spots into strengths, pattern by pattern.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ============================ HERO (pine) ============================ */}
      <section id="top" className="relative overflow-hidden" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div
          aria-hidden
          className="pointer-events-none select-none"
          style={{
            position: "absolute",
            right: -40,
            top: -60,
            fontFamily: "var(--font-serif-display)",
            fontWeight: 900,
            fontSize: 380,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            color: "rgba(247,241,227,.05)",
          }}
        >
          1500
        </div>

        <div
          className="relative mx-auto grid grid-cols-1 items-center gap-14 px-6 pb-20 pt-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-[64px] lg:pb-[96px] lg:pt-[80px]"
          style={{ maxWidth: 1160 }}
        >
          <Reveal>
            <span className="paper-tag">
              Taught by a <b style={{ color: "var(--accent)", fontWeight: 700 }}>1580</b> scorer —{" "}
              <b style={{ color: "var(--accent)", fontWeight: 700 }}>four</b> perfect 800s.
            </span>

            <h1
              style={{
                ...serifH,
                color: "var(--cream)",
                fontSize: "clamp(42px,5.6vw,68px)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                margin: "24px 0 0",
              }}
            >
              The SAT changed.
              <br />
              Your prep should{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>too.</em>
            </h1>

            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--cream-soft)", maxWidth: "32em", margin: "22px 0 0" }}>
              I&apos;m Scott. I help students master the new Digital SAT with Desmos strategies,
              reading systems, grammar shortcuts, and a personalized plan built around their
              weaknesses — the same system that&apos;s moved{" "}
              <b style={{ color: "var(--cream)" }}>400+ students</b> toward 1500.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, margin: "30px 0 0" }}>
              <CtaButton href="/tutoring#pricing" variant="cream" size="lg" arrow>
                Master the Digital SAT
              </CtaButton>
              <CtaButton href="/blueprint" variant="ghost" size="lg">
                Explore the Blueprint
              </CtaButton>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "22px 36px",
                marginTop: 36,
                paddingTop: 24,
                borderTop: "2px dashed rgba(247,241,227,.3)",
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
                      fontFamily: "var(--font-serif-display)",
                      fontWeight: 700,
                      fontSize: 30,
                      color: "var(--cream)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.node}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono-ui)",
                      fontSize: 10.5,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--sky)",
                      marginTop: 6,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Matted portrait — a print, not a device mockup. */}
          <Reveal delay={120} style={{ position: "relative" }}>
            <div
              style={{
                background: "var(--card)",
                border: "2px solid var(--ink)",
                borderRadius: 3,
                boxShadow: "8px 8px 0 var(--navy-ink)",
                padding: 12,
                maxWidth: 400,
                margin: "0 auto",
                transform: "rotate(1.2deg)",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 5" }}>
                <ImageSlot label="Portrait of Scott — 4×5" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  padding: "12px 4px 2px",
                }}
              >
                <span style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 16, color: "var(--ink)" }}>
                  Scott — <em style={{ color: "var(--accent)" }}>1580 SAT</em>
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono-ui)",
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted)",
                  }}
                >
                  4× 800 Math
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================= ROAD TO 1500 ======================= */}
      <section className="py-16 lg:py-[88px]" style={ruled}>
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ textAlign: "center", maxWidth: "42em", margin: "0 auto" }}>
            <div style={eyebrow}>Your road to 1500</div>
            <h2 style={{ ...serifH, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.06, margin: "14px 0 0" }}>
              A clear path — one pattern at a time.
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--ink-soft)", margin: "14px 0 0" }}>
              No more random practice. Every step is mapped, so you always know exactly what moves
              your score next.
            </p>
          </Reveal>

          <Reveal
            delay={80}
            style={{
              marginTop: 44,
              background: "var(--card)",
              border: "2px solid var(--ink)",
              borderRadius: 3,
              padding: "38px 28px",
              boxShadow: "var(--shadow-card-lg)",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 6,
                  maxWidth: 960,
                  minWidth: 680,
                  margin: "0 auto",
                }}
              >
                {ROAD.map((step, i) => (
                  <RoadStep key={step.title} step={step} index={i} />
                ))}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    width: 118,
                    flex: "none",
                    animation: "popIn .55s cubic-bezier(.22,1,.36,1) both",
                    animationDelay: "1.5s",
                  }}
                >
                  <span
                    style={{
                      width: 62,
                      height: 62,
                      borderRadius: 2,
                      background: "var(--gold)",
                      color: "var(--ink)",
                      border: "2px solid var(--ink)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "3px 3px 0 var(--ink)",
                    }}
                  >
                    <Icon name="trophy" size={28} />
                  </span>
                  <div style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 17, color: "var(--ink)", marginTop: 12 }}>
                    1500
                  </div>
                  <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent)", marginTop: 3 }}>
                    Goal reached
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================= TWO OFFERINGS ======================= */}
      <section className="py-16 lg:py-[88px]" style={ruled}>
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ textAlign: "center", maxWidth: "36em", margin: "0 auto 40px" }}>
            <div style={eyebrow}>Choose your path</div>
            <h2 style={{ ...serifH, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.06, margin: "14px 0 0" }}>
              Two ways to get to your goal.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <OfferingCard
                href="/blueprint"
                iconName="layers"
                title="The 1500 Blueprint"
                sub="Self-paced system"
                body="Courses, Desmos drills, 5 practice tests, and a 1,200+ question bank. Earn XP as you master each pattern."
                tags={["1,200+ questions", "5 practice tests", "Self-paced"]}
                cta="Explore the Blueprint"
              />
            </Reveal>
            <Reveal delay={90}>
              <OfferingCard
                href="/tutoring"
                iconName="target"
                title="1-on-1 Coaching"
                sub="Work directly with Scott"
                body="A custom plan, weekly reviews, and strategies built around your exact weak spots — with Blueprint access included."
                tags={["+150 pts avg", "Weekly reviews", "Any goal"]}
                cta="Explore tutoring"
                goldTop
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================= HOW IT WORKS ======================= */}
      <section className="py-16 lg:py-[88px]" style={ruled}>
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ textAlign: "center", maxWidth: "36em", margin: "0 auto 40px" }}>
            <div style={eyebrow}>How it works</div>
            <h2 style={{ ...serifH, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.06, margin: "14px 0 0" }}>
              Earn XP. Build streaks. Master patterns.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {HOW.map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 90}
                style={{
                  background: "var(--card)",
                  border: "2px solid var(--ink)",
                  borderRadius: 3,
                  padding: 24,
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    background: "var(--tag)",
                    color: "var(--ink)",
                    border: "2px solid var(--ink)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name={card.icon} size={24} />
                </span>
                <div style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 19, color: "var(--ink)", marginTop: 16 }}>
                  {card.title}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-muted)", margin: "7px 0 0" }}>{card.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= TESTIMONIALS ======================= */}
      <section id="testimonials" className="py-16 lg:py-[88px]" style={ruled}>
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal style={{ maxWidth: "40em" }}>
            <div style={eyebrow}>Proof, not promises</div>
            <h2 style={{ ...serifH, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.06, margin: "14px 0 0" }}>
              Real students. Real score jumps.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      {/* ======================= WALL OF WINS (pine band) ======================= */}
      <section style={{ ...ruled, background: "var(--navy)" }} className="py-16 lg:py-[88px]">
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <Reveal>
            <span className="paper-tag" style={{ transform: "rotate(-1.6deg)" }}>
              Wall of <b style={{ color: "var(--accent)" }}>wins.</b>
            </span>
          </Reveal>

          <Reveal delay={100}>
            <ResultsMosaic />
          </Reveal>
        </div>
      </section>

      {/* ============================ ABOUT ============================ */}
      <section id="about" className="py-16 lg:py-[88px]" style={ruled}>
        <div
          className="mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-[60px]"
          style={{ maxWidth: 1160 }}
        >
          <Reveal>
            <div
              style={{
                background: "var(--card)",
                border: "2px solid var(--ink)",
                borderRadius: 3,
                boxShadow: "var(--shadow-card-lg)",
                padding: 12,
                transform: "rotate(-1deg)",
                maxWidth: 400,
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 5" }}>
                <ImageSlot label="Photo of Scott" />
              </div>
              <div style={{ padding: "12px 4px 2px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 15, color: "var(--ink)" }}>
                  4× perfect 800 — SAT Math
                </span>
                <span style={{ color: "var(--gold-600)", display: "inline-flex" }}>
                  <Icon name="trophy" size={18} />
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div style={eyebrow}>About Scott</div>
            <h2 style={{ ...serifH, fontSize: "clamp(28px,3.3vw,40px)", lineHeight: 1.08, margin: "14px 0 0" }}>
              I built SAT prep for the new Digital SAT.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-soft)", margin: "18px 0 0" }}>
              I scored a <b style={{ color: "var(--accent)" }}>1580</b> on the SAT and earned a
              perfect <b style={{ color: "var(--ink)" }}>800 Math</b> score four times. Now I help
              students master the new Digital SAT with Desmos strategies, reading systems, grammar
              shortcuts, and a clear plan built around their weaknesses.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-soft)", margin: "14px 0 0" }}>
              Most students waste months doing random practice without knowing what to fix. My goal
              is to make SAT prep more direct: find the weak spots, learn the right strategy, and
              practice with a system that actually matches the test.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-soft)", margin: "14px 0 0" }}>
              Through The 1500 Blueprint and private tutoring, I help students study with structure,
              accountability, and the strategies they need to raise their scores.
            </p>
            <div style={{ marginTop: 28 }}>
              <CtaButton href="/tutoring#pricing" variant="ink" size="about" arrow>
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

function RoadStep({ step, index }: { step: { icon: IconName; title: string; sub: string }; index: number }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: 118,
          flex: "none",
          animation: "popIn .55s cubic-bezier(.22,1,.36,1) both",
          animationDelay: `${0.1 + index * 0.28}s`,
        }}
      >
        <span
          style={{
            width: 58,
            height: 58,
            borderRadius: 2,
            background: "var(--card)",
            color: "var(--ink)",
            border: "2px solid var(--ink)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "3px 3px 0 var(--ink)",
          }}
        >
          <Icon name={step.icon} size={25} />
        </span>
        <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10, letterSpacing: "0.1em", color: "var(--accent)", marginTop: 12 }}>
          {String(index + 1).padStart(2, "0")}
        </div>
        <div style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 15, color: "var(--ink)", marginTop: 3 }}>
          {step.title}
        </div>
        <div style={{ fontSize: 11.5, color: "var(--ink-muted)", marginTop: 2 }}>{step.sub}</div>
      </div>
      <div
        aria-hidden
        style={{ flex: 1, borderTop: "2px dashed rgba(26,35,62,.35)", marginTop: 29, minWidth: 16 }}
      />
    </>
  );
}

function OfferingCard({
  href,
  iconName,
  title,
  sub,
  body,
  tags,
  cta,
  goldTop,
}: {
  href: string;
  iconName: IconName;
  title: string;
  sub: string;
  body: string;
  tags: string[];
  cta: string;
  goldTop?: boolean;
}) {
  return (
    <Link
      href={href}
      className="card-lift block"
      style={{
        background: "var(--card)",
        border: "2px solid var(--ink)",
        borderTop: goldTop ? "6px solid var(--gold)" : "2px solid var(--ink)",
        borderRadius: 3,
        padding: 28,
        textDecoration: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span
          style={{
            width: 50,
            height: 50,
            borderRadius: 2,
            background: goldTop ? "var(--gold)" : "var(--tag)",
            color: "var(--ink)",
            border: "2px solid var(--ink)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "none",
          }}
        >
          <Icon name={iconName} size={25} />
        </span>
        <div>
          <div style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 23, color: "var(--ink)" }}>{title}</div>
          <div
            style={{
              fontFamily: "var(--font-mono-ui)",
              fontSize: 10.5,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              marginTop: 3,
            }}
          >
            {sub}
          </div>
        </div>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-soft)", margin: "16px 0 0" }}>{body}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono-ui)",
              fontSize: 10.5,
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--ink)",
              border: "1.5px solid var(--ink)",
              borderRadius: 2,
              padding: "4px 9px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginTop: 22,
          fontFamily: "var(--font-mono-ui)",
          fontWeight: 600,
          fontSize: 12.5,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "var(--accent)",
        }}
      >
        {cta}
        <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}

/* ---- Results mosaic on the pine band: cream/ink/gold tiles ---- */

function ScoreTile({ score, invert }: { score: (typeof SCORES)[number]; invert?: boolean }) {
  const bg = invert ? "var(--navy-deep)" : "var(--card)";
  const fg = invert ? "var(--cream)" : "var(--ink)";
  const meta = invert ? "rgba(247,241,227,.6)" : "var(--ink-muted)";
  return (
    <div
      style={{
        background: bg,
        border: "2px solid var(--ink)",
        borderRadius: 3,
        boxShadow: "5px 5px 0 var(--navy-ink)",
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 150,
      }}
    >
      <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 9.5, letterSpacing: "0.1em", textTransform: "uppercase", color: meta }}>
        Total score
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 6, flexWrap: "wrap" }}>
        <CountUp
          value={score.total}
          style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 48, color: fg, lineHeight: 1 }}
        />
        <div style={{ display: "flex", gap: 14 }}>
          {[
            { k: "R/W", v: score.rw },
            { k: "Math", v: score.math },
          ].map((s) => (
            <div key={s.k}>
              <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 8.5, letterSpacing: "0.06em", textTransform: "uppercase", color: meta }}>
                {s.k}
              </div>
              <div style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 16, color: fg, marginTop: 1 }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          marginTop: 12,
          paddingTop: 10,
          borderTop: `2px dashed ${invert ? "rgba(247,241,227,.25)" : "rgba(26,35,62,.22)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10, color: meta }}>{score.date}</span>
        {score.delta ? (
          <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10.5, fontWeight: 600, color: invert ? "var(--gold)" : "var(--accent)" }}>
            {score.delta}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function ResultsMosaic() {
  return (
    <div style={{ marginTop: 30 }}>
      <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
        {/* Gold hero metric */}
        <div
          className="sm:col-span-2"
          style={{
            background: "var(--gold)",
            border: "2px solid var(--ink)",
            borderRadius: 3,
            boxShadow: "6px 6px 0 var(--navy-ink)",
            padding: "22px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: 150,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
            <span style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 30, color: "var(--ink)", lineHeight: 1 }}>+</span>
            <CountUp
              value={150}
              style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 68, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1 }}
            />
          </div>
          <div style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 18, color: "var(--ink)", marginTop: 8 }}>
            average point gain
          </div>
          <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10.5, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(26,35,62,.66)", marginTop: 4 }}>
            across 400+ students on 1-on-1 coaching
          </div>
        </div>

        <ScoreTile score={SCORES[1]} invert />
        <ScoreTile score={SCORES[2]} />
        <ScoreTile score={SCORES[0]} />
        <ScoreTile score={SCORES[3]} />

        {/* Scott's own credential */}
        <div
          className="sm:col-span-2"
          style={{
            background: "var(--card)",
            border: "2px solid var(--ink)",
            borderRadius: 3,
            boxShadow: "6px 6px 0 var(--navy-ink)",
            padding: "22px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: 150,
          }}
        >
          <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 9.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
            Scott&apos;s own SAT
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 6, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-serif-display)", fontWeight: 700, fontSize: 58, color: "var(--accent)", letterSpacing: "-0.02em", lineHeight: 1 }}>
              1580
            </span>
            <span style={{ fontFamily: "var(--font-serif-display)", fontStyle: "italic", fontWeight: 600, fontSize: 17, color: "var(--ink)" }}>
              & four perfect 800s in Math
            </span>
          </div>
          <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 8, maxWidth: "30em" }}>
            You&apos;re learning the test from someone who has actually beaten it — four times over.
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {["GRATEFUL FOR YOU BRO", "LFG", "1400 → COMING IN AUGUST"].map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono-ui)",
              fontSize: 10.5,
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "var(--cream)",
              border: "1.5px solid rgba(247,241,227,.5)",
              borderRadius: 2,
              padding: "5px 11px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
