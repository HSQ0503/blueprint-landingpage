"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = { src: string; poster: string; label: string };

// Hero showcase video. Autoplays muted + looped, but respects
// prefers-reduced-motion (stays on the poster still) and always offers a
// pause/play control, so it satisfies WCAG 2.2.2 (Pause, Stop, Hide) and 2.3.3.
export function HeroVideo({ src, poster, label }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // leave the poster showing; the user can press play
    v.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        aria-label={label}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          width: 34,
          height: 34,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--card)",
          color: "var(--ink)",
          border: "2px solid var(--ink)",
          borderRadius: 2,
          boxShadow: "2px 2px 0 var(--ink)",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="currentColor">
            <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
