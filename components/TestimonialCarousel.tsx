"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/content";

const EZ = "cubic-bezier(.22,1,.36,1)";

export function TestimonialCarousel() {
  const [active, setActive] = useState(1);
  const count = TESTIMONIALS.length;

  return (
    <div style={{ marginTop: 34 }}>
      <div className="grid grid-cols-1 items-stretch gap-[22px] md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => {
          const on = i === active;
          return (
            <div
              key={t.name}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "22px 22px 24px",
                border: "1px solid var(--line-200)",
                borderTop: on ? "2px solid var(--cta)" : "1px solid var(--line-200)",
                boxShadow: on ? "var(--shadow-pop)" : "var(--shadow-raised)",
                transform: on ? "translateY(-4px)" : "none",
                transition: `box-shadow .4s ${EZ}, transform .4s ${EZ}, border-color .3s`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 16,
                      color: "var(--navy)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 1 }}>
                    {t.cohort}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 12.5,
                      color: "var(--text-muted)",
                      background: "rgba(11,42,91,.06)",
                      borderRadius: 3,
                      padding: "3px 8px",
                    }}
                  >
                    {t.from}
                  </span>
                  <svg viewBox="0 0 24 24" width="14" height="14" style={{ color: "var(--text-subtle)", flex: "none" }} aria-hidden="true">
                    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 12.5,
                      color: "var(--success-600)",
                      background: "var(--success-bg)",
                      borderRadius: 3,
                      padding: "3px 8px",
                    }}
                  >
                    {t.to}
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.62,
                  color: "var(--ink)",
                  opacity: 0.9,
                  fontStyle: "italic",
                  margin: "16px 0 0",
                }}
              >
                {t.quote}
              </p>
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          marginTop: 24,
        }}
      >
        <button
          type="button"
          onClick={() => setActive((a) => (a + count - 1) % count)}
          aria-label="Previous testimonial"
          className="icon-btn"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
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
                  width: on ? 22 : 8,
                  height: 8,
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  borderRadius: 999,
                  background: on ? "var(--cta)" : "var(--line-400)",
                  transition: `all .3s ${EZ}`,
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
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
