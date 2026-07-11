import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CtaButton } from "@/components/CtaButton";
import { ImageSlot } from "@/components/ImageSlot";
import { WINS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Wall of Wins — Real student SAT score jumps",
  description:
    "Real score reports from students who worked with Scott. Browse the jumps students have earned with The 1500 Blueprint and 1-on-1 coaching.",
};

const serifH = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  letterSpacing: "-0.02em",
  color: "var(--ink)",
};

const ruled = { borderTop: "2px solid var(--ink)" };

// Subtle scrapbook tilt — varied but small, keyed off index.
const ROTATIONS = [-1.1, 0.8, 1.2, -0.6, 0.5, -1.3];

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
              names, and the jumps they earned — no cherry-picked promises.
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
          <div className="columns-1 sm:columns-2 lg:columns-3" style={{ columnGap: 18 }}>
            {WINS.map((win, i) => (
              <WinCard key={win.name} win={win} index={i} />
            ))}
          </div>
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
              <CtaButton href="/blueprint" variant="ghost" size="md">
                Explore the Blueprint
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- helpers ----------------------------- */

function WinCard({ win, index }: { win: (typeof WINS)[number]; index: number }) {
  const rot = ROTATIONS[index % ROTATIONS.length];
  return (
    <div
      style={{
        breakInside: "avoid",
        display: "inline-block",
        width: "100%",
        marginBottom: 18,
        background: "var(--card)",
        border: "2px solid var(--ink)",
        borderRadius: 3,
        boxShadow: "4px 4px 0 var(--ink)",
        padding: 10,
        transform: `rotate(${rot}deg)`,
      }}
    >
      {/* The score-report screenshot slot. */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
        <ImageSlot label={`${win.name}'s ${win.metric} score report`} />
      </div>

      {/* Caption strip: name + meta on the left, the jump on the right. */}
      <div style={{ padding: "12px 4px 2px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, color: "var(--ink)", lineHeight: 1.1 }}>
              {win.name}
            </div>
            <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-muted)", marginTop: 4 }}>
              {win.metric} · {win.cohort}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono-ui)", fontSize: 13, whiteSpace: "nowrap" }}>
            <span style={{ color: "var(--ink-muted)" }}>{win.from}</span>
            <span aria-hidden style={{ color: "var(--accent)", fontWeight: 600 }}>
              →
            </span>
            <span
              style={{
                fontWeight: 600,
                color: "var(--ink)",
                background: "var(--gold)",
                border: "1.5px solid var(--ink)",
                borderRadius: 2,
                padding: "2px 7px",
              }}
            >
              {win.to}
            </span>
          </div>
        </div>

        {win.quote ? (
          <>
            <hr className="dashed-rule" style={{ margin: "12px 0" }} />
            <p style={{ fontFamily: "var(--font-dm-sans)", fontStyle: "italic", fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-soft)", margin: 0 }}>
              “{win.quote}”
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
