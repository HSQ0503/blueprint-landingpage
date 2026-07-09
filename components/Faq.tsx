"use client";

import { useState } from "react";
import { FAQS } from "@/lib/content";

const EZ = "cubic-bezier(.22,1,.36,1)";

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
              background: "#fff",
              border: "1px solid var(--line-200)",
              borderRadius: 14,
              padding: "4px 20px",
              boxShadow: "var(--shadow-raised)",
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
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                fontWeight: 600,
                color: "var(--navy)",
              }}
            >
              <span>{item.q}</span>
              <span
                style={{
                  display: "inline-flex",
                  flex: "none",
                  color: isOpen ? "var(--cta)" : "var(--text-muted)",
                  transition: `transform .3s ${EZ}, color .2s`,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div
              style={{
                overflow: "hidden",
                transition: "max-height .4s cubic-bezier(.22,1,.36,1), opacity .3s ease",
                maxHeight: isOpen ? 400 : 0,
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p
                style={{
                  margin: "0 0 16px",
                  fontSize: 14.5,
                  lineHeight: 1.62,
                  color: "var(--ink)",
                  opacity: 0.9,
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
