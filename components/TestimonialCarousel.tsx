"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/content";

export function TestimonialCarousel() {
  const [active, setActive] = useState(1);
  const count = TESTIMONIALS.length;

  return (
    <div style={{ marginTop: 34 }}>
      <div className="grid grid-cols-1 items-stretch gap-[18px] md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => {
          const on = i === active;
          return (
            <div
              key={t.name}
              style={{
                background: "var(--card)",
                borderRadius: 3,
                padding: "22px 22px 24px",
                border: on ? "2px solid var(--ink)" : "2px solid var(--hairline)",
                boxShadow: on ? "6px 6px 0 var(--ink)" : "none",
                transform: on ? "rotate(-0.5deg)" : "none",
                transition: "box-shadow .2s ease, transform .2s ease, border-color .2s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "var(--ink)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono-ui)",
                      fontSize: 10.5,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                      marginTop: 3,
                    }}
                  >
                    {t.cohort}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    fontFamily: "var(--font-mono-ui)",
                    fontSize: 13,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ color: "var(--ink-muted)" }}>{t.from}</span>
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
                    {t.to}
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontStyle: "italic",
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  color: "var(--ink-soft)",
                  margin: "16px 0 0",
                }}
              >
                “{t.quote}”
              </p>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 26 }}>
        <button
          type="button"
          onClick={() => setActive((a) => (a + count - 1) % count)}
          aria-label="Previous testimonial"
          className="icon-btn"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {TESTIMONIALS.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                style={{
                  width: on ? 22 : 9,
                  height: 9,
                  border: "1.5px solid var(--ink)",
                  padding: 0,
                  cursor: "pointer",
                  borderRadius: 2,
                  background: on ? "var(--ink)" : "transparent",
                  transition: "all .2s ease",
                }}
              />
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setActive((a) => (a + 1) % count)}
          aria-label="Next testimonial"
          className="icon-btn"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
