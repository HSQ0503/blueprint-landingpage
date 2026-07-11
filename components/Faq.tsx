"use client";

import { useState } from "react";
import { FAQS } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ marginTop: 34, display: "flex", flexDirection: "column", gap: 12 }}>
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            style={{
              background: "var(--card)",
              border: isOpen ? "2px solid var(--ink)" : "2px solid var(--hairline)",
              borderRadius: 3,
              padding: "4px 20px",
              boxShadow: isOpen ? "4px 4px 0 var(--ink)" : "none",
              transition: "box-shadow .2s ease, border-color .2s ease",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen((cur) => (cur === i ? -1 : i))}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                background: "none",
                border: "none",
                padding: "16px 0",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "var(--font-display)",
                fontSize: 17,
                fontWeight: 600,
                color: "var(--ink)",
              }}
            >
              <span>{item.q}</span>
              <span
                style={{
                  display: "inline-flex",
                  flex: "none",
                  color: isOpen ? "var(--accent)" : "var(--ink-muted)",
                  transition: "transform .25s ease, color .2s",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div
              style={{
                overflow: "hidden",
                transition: "max-height .35s ease, opacity .25s ease",
                maxHeight: isOpen ? 400 : 0,
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p
                style={{
                  margin: "2px 0 18px",
                  fontSize: 14.5,
                  lineHeight: 1.65,
                  color: "var(--ink-soft)",
                  maxWidth: "64ch",
                }}
              >
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
