import type { IconName } from "@/components/Icon";

export type Feature = { icon: IconName; title: string; desc: string };
export type Testimonial = {
  name: string;
  cohort: string;
  from: number;
  to: number;
  quote: string;
};
export type ScoreCard = {
  total: number;
  rw: number;
  math: number;
  date: string;
  delta?: string;
};
export type Faq = { q: string; a: string };
export type Proof = { from: number; to: number };

export const BP_FEATURES: Feature[] = [
  {
    icon: "layers",
    title: "Step-by-step courses",
    desc: "Guided lessons for math and reading, built for the Digital SAT.",
  },
  {
    icon: "aimath",
    title: "Desmos training & drills",
    desc: "Strategy videos and targeted drills that turn the calculator into a weapon.",
  },
  {
    icon: "tests",
    title: "5 HARD practice tests",
    desc: "Full-length, Bluebook-style. Same rules, brutal questions.",
  },
  {
    icon: "history",
    title: "Weekly review & support",
    desc: "Stay on track with weekly review calls and support as you study.",
  },
  {
    icon: "target",
    title: "Scott's Question Bank",
    desc: "Over 1,200 questions, sorted by pattern, from a four-time 800 scorer.",
  },
  {
    icon: "zap",
    title: "XP, streaks & mastery",
    desc: "Earn XP, build streaks, and watch your mastery bar climb toward 1500.",
  },
];

export const CO_FEATURES: Feature[] = [
  {
    icon: "scan",
    title: "Personalized sessions",
    desc: "Based on your diagnostic and goals — we work on what you actually need.",
  },
  {
    icon: "grammar",
    title: "A custom study plan",
    desc: "Written down and updated as you improve, so you never guess what to do next.",
  },
  {
    icon: "aimath",
    title: "Math, Desmos, Reading, Grammar",
    desc: "Targeted help across every part of the Digital SAT.",
  },
  {
    icon: "layers",
    title: "Blueprint access included",
    desc: "Structured practice between sessions with the full 1500 Blueprint.",
  },
];

export const PROOF: Proof[] = [
  { from: 680, to: 780 },
  { from: 690, to: 790 },
  { from: 620, to: 750 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sebastian",
    cohort: "March 2026 cohort",
    from: 680,
    to: 780,
    quote:
      "I never knew you could raise your score so much, so fast. Scott makes complicated material simple and makes sure you actually understand each topic before moving on.",
  },
  {
    name: "Octavia",
    cohort: "August 2025 cohort",
    from: 690,
    to: 790,
    quote:
      "The resources and strategies were exactly what I needed to take my math from a 690 all the way to a 790. He keeps it engaging — you understand the material instead of memorizing it.",
  },
  {
    name: "Bennett",
    cohort: "August 2025 cohort",
    from: 620,
    to: 750,
    quote:
      "I'd always struggled with SAT math, even after local courses that barely moved my score. Scott teaches in a way that finally clicks — you understand, not memorize.",
  },
];

export const SCORES: ScoreCard[] = [
  { total: 1500, rw: 720, math: 780, date: "SAT · March 14, 2026", delta: "" },
  { total: 1560, rw: 770, math: 790, date: "SAT · March 14, 2026", delta: "+140 pts" },
  { total: 1510, rw: 720, math: 790, date: "SAT · May 2, 2026", delta: "+140 pts" },
  { total: 1420, rw: 710, math: 710, date: "SAT · March 14, 2026", delta: "" },
];

export const FAQS: Faq[] = [
  {
    q: "Should I do 1-on-1 coaching or start with The 1500 Blueprint?",
    a: "Start with whatever fits your timeline. The Blueprint is a complete self-paced system — courses, targeted drills, and 5 practice tests you can run on your own. Coaching adds a person: I find your weak spots, build a plan around them, and hold you accountable week to week. Want a big jump fast? Do both — every coaching plan includes Blueprint access.",
  },
  {
    q: "What happens during a typical coaching session?",
    a: "We work live on your weak spots — usually reviewing your latest practice test, drilling the patterns you keep missing, and teaching the Desmos and reading strategies that actually move your score. You leave every session knowing exactly what to practice next.",
  },
  {
    q: "What do I get between sessions?",
    a: "A clear assignment plus access to The 1500 Blueprint — drills, strategy videos, and practice sets matched to what we worked on. No guessing what to study; the plan is written down and updated as you improve.",
  },
  {
    q: "Do you give homework or a study plan?",
    a: "Yes. Every student gets a custom study plan built from their diagnostic and goal score, revised each session as your weak spots change. Homework is targeted, never busywork — the minimum that moves your score.",
  },
  {
    q: "How is your coaching different from big test-prep companies?",
    a: "You work directly with me — a four-time perfect-800 Math scorer — not a rotating cast of part-time tutors reading a script. Everything is built for the new Digital SAT, personalized to your weaknesses, and focused on strategy over brute-force problem sets.",
  },
  {
    q: "Do you offer a score-improvement guarantee?",
    a: "Yes, on The Guarantee plan. If your score doesn't improve by at least 100 points, or reach 1450+, by the end of the program, you get your money back. Full details come with the plan.",
  },
  {
    q: "How does scheduling and rescheduling work?",
    a: "You book sessions around your schedule. Life happens — reschedule with reasonable notice and we'll find a new time, no penalty. Higher tiers get priority scheduling around your test date.",
  },
];
