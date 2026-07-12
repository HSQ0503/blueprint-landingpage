import Image from "next/image";
import { WALL } from "@/lib/content";

// Subtle scrapbook tilt for the pinned-up screenshots.
const ROT = [-1.2, 0.8, -0.5, 1.1, 0.5, -1, 1.2, -0.4, 0.9, -1.1, 0.6, -0.8, 1];

// Masonry of real student testimonial screenshots. `count` limits how many show
// (used for the home-page preview); omit it to show the full wall.
export function TestimonialWall({ count }: { count?: number }) {
  const items = count ? WALL.slice(0, count) : WALL;
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3" style={{ columnGap: 18 }}>
      {items.map((shot, i) => (
        <figure
          key={shot.src}
          style={{
            breakInside: "avoid",
            margin: "0 0 18px",
            transform: `rotate(${ROT[i % ROT.length]}deg)`,
            background: "var(--card)",
            border: "2px solid var(--ink)",
            borderRadius: 3,
            boxShadow: "4px 4px 0 var(--ink)",
            padding: 8,
          }}
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.w}
            height={shot.h}
            sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 360px"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: 2 }}
          />
        </figure>
      ))}
    </div>
  );
}
