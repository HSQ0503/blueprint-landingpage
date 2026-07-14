import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CtaButton } from "@/components/CtaButton";
import { TestimonialWall } from "@/components/TestimonialWall";
import { BLUEPRINT_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Wall of Wins: Real student SAT score jumps",
  description:
    "Real score reports from students who worked with Scott. Browse the jumps students have earned with The Blueprint and 1-on-1 coaching.",
};

const serifH = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  letterSpacing: "-0.02em",
  color: "var(--ink)",
};

const ruled = { borderTop: "2px solid var(--ink)" };

export default function ResultsPage() {
  return (
    <main>
      {/* ============================ HEADER (pine) ============================ */}
      <section className="relative overflow-hidden" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div
          aria-hidden
          className="pointer-events-none select-none"
          style={{
            position: "absolute",
            right: -40,
            top: -70,
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 340,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            color: "rgba(247,241,227,.05)",
          }}
        >
          1500
        </div>

        <div className="relative mx-auto px-6 pb-16 pt-14 lg:pb-[80px] lg:pt-[72px]" style={{ maxWidth: 1160 }}>
          <Reveal style={{ maxWidth: "44em" }}>
            <span className="paper-tag">
              Wall of <b style={{ color: "var(--accent)", fontWeight: 700 }}>wins.</b>
            </span>
            <h1
              style={{
                ...serifH,
                color: "var(--cream)",
                fontSize: "clamp(38px,5vw,62px)",
                lineHeight: 1.02,
                margin: "22px 0 0",
              }}
            >
              Real students.
              <br />
              Real score jumps.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.62, color: "var(--cream-soft)", maxWidth: "34em", margin: "20px 0 0" }}>
              Every card is a real score report from a student who put in the work. Screenshots,
              names, and the jumps they earned. No cherry-picked promises.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "22px 40px",
                marginTop: 32,
                paddingTop: 24,
                borderTop: "2px dashed rgba(247,241,227,.3)",
              }}
            >
              {[
                { node: <CountUp value={400} suffix="+" />, label: "students helped" },
                {
                  node: (
                    <>
                      +<CountUp value={150} />
                    </>
                  ),
                  label: "average point gain",
                },
                { node: <CountUp value={800} />, label: "perfect-score ceiling" },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, color: "var(--cream)", lineHeight: 1 }}>
                    {stat.node}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sky)", marginTop: 6 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ GALLERY ============================ */}
      <section className="py-14 lg:py-[72px]" style={ruled}>
        <div className="mx-auto px-6" style={{ maxWidth: 1160 }}>
          <TestimonialWall />
        </div>
      </section>

      {/* ============================ CTA (pine) ============================ */}
      <section className="relative overflow-hidden py-16 lg:py-[84px]" style={{ ...ruled, background: "var(--navy)" }}>
        <div className="relative mx-auto px-6 text-center" style={{ maxWidth: 760 }}>
          <Reveal>
            <h2 style={{ ...serifH, color: "var(--cream)", fontSize: "clamp(28px,3.4vw,40px)", lineHeight: 1.08, margin: 0 }}>
              Your score belongs on this wall.
            </h2>
            <p style={{ fontSize: 16, color: "var(--cream-soft)", margin: "14px auto 0", maxWidth: "34em" }}>
              Start with the self-paced Blueprint, or work with Scott directly and build a plan
              around your exact weak spots.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, justifyContent: "center", marginTop: 28 }}>
              <CtaButton href="/tutoring#pricing" variant="cream" size="md" arrow>
                See plans &amp; pricing
              </CtaButton>
              <CtaButton href={BLUEPRINT_URL} variant="ghost" size="md">
                Explore the Blueprint
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
