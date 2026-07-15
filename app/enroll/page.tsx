import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Check } from "@/components/Check";
import { PLANS, getPlan, dollars, type Plan } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enroll: 1-on-1 SAT coaching with Scott",
  description:
    "Enroll in a coaching plan and start improving. Secure checkout, and Blueprint access begins the day you join.",
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

export default async function EnrollPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan: planId } = await searchParams;
  const plan = getPlan(planId);
  const savings = plan && plan.was ? dollars(plan.was) - dollars(plan.price) : 0;

  return (
    <main>
      <section className="py-14 lg:py-[72px]">
        <div className="mx-auto px-6" style={{ maxWidth: 1080 }}>
          <Reveal style={{ maxWidth: "42em" }}>
            <div style={eyebrow}>Secure enrollment</div>
            <h1 style={{ ...serifH, fontSize: "clamp(32px,4.4vw,52px)", lineHeight: 1.04, margin: "14px 0 0" }}>
              {plan ? (
                <>
                  Enroll in <span style={{ color: "var(--accent)" }}>{plan.name}</span>.
                </>
              ) : (
                "Choose your plan."
              )}
            </h1>
            <p style={{ fontSize: 16.5, lineHeight: 1.62, color: "var(--ink-soft)", margin: "16px 0 0", maxWidth: "34em" }}>
              {plan
                ? "You're one step away. Confirm your plan and check out securely below."
                : "Pick the plan that matches your goal. You can upgrade or add hours anytime."}
            </p>
          </Reveal>

          {plan ? (
            <div className="mt-9 grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)]">
              {/* Plan details */}
              <Reveal
                style={{
                  background: "var(--card)",
                  border: "2px solid var(--ink)",
                  borderRadius: 3,
                  boxShadow: "6px 6px 0 var(--ink)",
                  padding: "26px 26px 28px",
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
                  <h2 style={{ ...serifH, fontSize: 26, margin: 0 }}>{plan.name}</h2>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, color: "var(--ink)", lineHeight: 1 }}>{plan.price}</span>
                    {plan.was ? (
                      <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 13, color: "var(--ink-muted)", textDecoration: "line-through" }}>{plan.was}</span>
                    ) : null}
                  </div>
                </div>
                <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--accent)", marginTop: 8 }}>
                  {plan.who}
                </div>

                <hr className="dashed-rule" style={{ margin: "18px 0" }} />

                <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
                  What&apos;s included
                </div>
                <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {plan.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontFamily: "var(--font-mono-ui)", fontSize: 12.5, lineHeight: 1.55, color: "var(--ink)" }}>
                      <Check size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {plan.guarantee ? (
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 18, padding: "12px 13px", border: "2px dashed rgba(26,35,62,.28)", borderRadius: 2 }}>
                    <span style={{ flex: "none", color: "var(--gold-600)", marginTop: 1 }}>
                      <ShieldIcon />
                    </span>
                    <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--ink-soft)" }}>
                      <b style={{ color: "var(--ink)" }}>100+ Point Guarantee.</b> Improve by 100+ points
                      (or reach 1450+) by the end of the program, or your money back.
                    </div>
                  </div>
                ) : null}
              </Reveal>

              {/* Checkout summary */}
              <Reveal
                delay={90}
                style={{
                  background: "var(--card)",
                  border: "2px solid var(--ink)",
                  borderRadius: 3,
                  boxShadow: "6px 6px 0 var(--ink)",
                  padding: "24px 24px 26px",
                }}
              >
                <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
                  Order summary
                </div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, marginTop: 14 }}>
                  <span style={{ fontSize: 14.5, color: "var(--ink-soft)" }}>{plan.name}</span>
                  <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 14, color: plan.was ? "var(--ink-muted)" : "var(--ink)", textDecoration: plan.was ? "line-through" : "none" }}>
                    {plan.was ?? plan.price}
                  </span>
                </div>
                {savings > 0 ? (
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, marginTop: 8 }}>
                    <span style={{ fontSize: 13.5, color: "var(--ink-muted)" }}>Intro discount</span>
                    <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 13.5, color: "var(--accent)" }}>−${savings.toLocaleString("en-US")}</span>
                  </div>
                ) : null}

                <hr className="dashed-rule" style={{ margin: "16px 0" }} />

                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, color: "var(--ink)" }}>Total due today</span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: "var(--ink)" }}>{plan.price}</span>
                </div>

                <div style={{ marginTop: 18 }}>
                  <CheckoutButton plan={plan} />
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, marginTop: 14, color: "var(--ink-muted)" }}>
                  <LockIcon />
                  <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 10.5, letterSpacing: "0.04em" }}>
                    Secure checkout, powered by Stripe
                  </span>
                </div>

                {plan.id === "hour" ? (
                  <p style={{ fontFamily: "var(--font-mono-ui)", fontSize: 11, lineHeight: 1.55, color: "var(--ink-muted)", margin: "14px 0 0", textAlign: "center" }}>
                    Pay now, pick your time. Scott sends his scheduling link right after checkout.
                  </p>
                ) : (
                  <div style={{ textAlign: "center", marginTop: 14 }}>
                    <Link href={`/book-a-call?plan=${plan.id}`} className="link-quiet" style={{ fontFamily: "var(--font-mono-ui)", fontSize: 11.5, color: "var(--accent)" }}>
                      Questions first? Book a free call →
                    </Link>
                  </div>
                )}
              </Reveal>
            </div>
          ) : (
            /* No / unknown plan — let them pick one. */
            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {PLANS.filter((p) => p.id !== "hour").map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <Link
                    href={`/enroll?plan=${p.id}`}
                    className="card-lift"
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      background: p.accent === "gold" ? "var(--gold-tint)" : "var(--card)",
                      border:
                        p.accent === "gold"
                          ? "3px solid var(--gold-600)"
                          : p.accent === "blue"
                            ? "3px solid var(--accent)"
                            : "2px solid var(--ink)",
                      borderRadius: 3,
                      padding: "22px 22px 24px",
                      height: "100%",
                      textDecoration: "none",
                    }}
                  >
                    {p.popular ? (
                      <span
                        style={{
                          position: "absolute",
                          top: -13,
                          left: "50%",
                          transform: "translateX(-50%) rotate(-1.5deg)",
                          fontFamily: "var(--font-mono-ui)",
                          fontWeight: 600,
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                          background: "var(--gold)",
                          color: "var(--ink)",
                          border: "2px solid var(--ink)",
                          borderRadius: 2,
                          padding: "4px 11px",
                          boxShadow: "2px 2px 0 var(--ink)",
                        }}
                      >
                        Most popular
                      </span>
                    ) : null}
                    <h2 style={{ ...serifH, fontSize: 21, margin: 0 }}>{p.name}</h2>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 8 }}>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--ink)", lineHeight: 1 }}>{p.price}</span>
                      {p.was ? (
                        <span style={{ fontFamily: "var(--font-mono-ui)", fontSize: 12, color: "var(--ink-muted)", textDecoration: "line-through" }}>{p.was}</span>
                      ) : null}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono-ui)", fontSize: 11, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--ink-muted)", marginTop: 10 }}>
                      {p.who}
                    </div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignSelf: "flex-start",
                        alignItems: "center",
                        gap: 7,
                        marginTop: "auto",
                        paddingTop: 18,
                        fontFamily: "var(--font-mono-ui)",
                        fontWeight: 600,
                        fontSize: 12,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                      }}
                    >
                      Choose this plan
                      <ArrowIcon />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- helpers ----------------------------- */

function CheckoutButton({ plan }: { plan: Plan }) {
  // Live once Scott's Stripe Payment Link is set on the plan; placeholder until then.
  if (plan.stripeUrl) {
    return (
      <a href={plan.stripeUrl} className="btn btn-ink" style={{ width: "100%", minHeight: 52 }}>
        Proceed to secure checkout
        <ArrowIcon />
      </a>
    );
  }
  return (
    <div>
      <span
        className="btn btn-ink"
        aria-disabled="true"
        style={{ width: "100%", minHeight: 52, opacity: 0.5, cursor: "not-allowed", pointerEvents: "none" }}
      >
        Checkout link coming soon
      </span>
      <p style={{ fontFamily: "var(--font-mono-ui)", fontSize: 11, lineHeight: 1.5, color: "var(--ink-muted)", margin: "12px 0 0", textAlign: "center" }}>
        {plan.id === "hour" ? (
          <>
            Secure Stripe checkout is being finalized.{" "}
            <a href="mailto:scott@scottssatprep.com" className="link-quiet" style={{ color: "var(--accent)" }}>
              Email Scott
            </a>{" "}
            and he&apos;ll get your session on the calendar right away.
          </>
        ) : (
          "Secure Stripe checkout is being finalized. Book a free call and Scott will get you enrolled right away."
        )}
      </p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width={15} height={15} style={{ flex: "none" }} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4.5" y="10.5" width="15" height="9.5" rx="1.6" />
        <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      </g>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M12 3l7 3v5c0 4.4-3 8.3-7 9.5-4-1.2-7-5.1-7-9.5V6l7-3z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" />
      </g>
    </svg>
  );
}
