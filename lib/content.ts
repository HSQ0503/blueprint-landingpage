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
export type Win = {
  name: string;
  from: number;
  to: number;
  cohort: string;
  metric: string;
  quote?: string;
};

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

// Gallery of student score reports — the "Wall of Wins" page. Screenshots are
// swapped in per student; captions come from here.
export const WINS: Win[] = [
  {
    name: "Sebastian",
    from: 680,
    to: 780,
    cohort: "March 2026",
    metric: "SAT Math",
    quote: "I never knew you could raise your score so much, so fast.",
  },
  {
    name: "Octavia",
    from: 690,
    to: 790,
    cohort: "August 2025",
    metric: "SAT Math",
    quote: "Exactly what I needed to take my math from a 690 to a 790.",
  },
  { name: "Maya", from: 1290, to: 1480, cohort: "May 2026", metric: "SAT Total" },
  { name: "Priya", from: 700, to: 800, cohort: "December 2025", metric: "SAT Math" },
  {
    name: "Marcus",
    from: 1180,
    to: 1400,
    cohort: "August 2025",
    metric: "SAT Total",
    quote: "Two hundred points I didn't think were possible.",
  },
  { name: "Elena", from: 660, to: 770, cohort: "May 2026", metric: "SAT Math" },
  { name: "Bennett", from: 620, to: 750, cohort: "August 2025", metric: "SAT Math" },
  { name: "Jordan", from: 1420, to: 1560, cohort: "March 2026", metric: "SAT Total" },
  {
    name: "Tyler",
    from: 1250,
    to: 1450,
    cohort: "May 2026",
    metric: "SAT Total",
    quote: "The plan was clear every single week.",
  },
  { name: "Aisha", from: 690, to: 780, cohort: "October 2025", metric: "SAT Math" },
  { name: "Sofia", from: 710, to: 790, cohort: "December 2025", metric: "SAT Math" },
  { name: "Devin", from: 1340, to: 1510, cohort: "March 2026", metric: "SAT Total" },
];

export const FAQS: Faq[] = [
  {
    q: "Should I do 1-on-1 coaching or start with The 1500 Blueprint?",
    a: "It depends on your timeline and how far you are from your goal score. If you have a few months and need structure, The 1500 Blueprint is a strong place to start because it gives you the full system to follow at your own pace. If your test is coming up soon, your score is stuck, or you need a major jump, 1-on-1 coaching is better because we can diagnose your exact weaknesses and build a faster plan around them. Most students who are 100+ points away from their goal get the best results with coaching plus the Blueprint.",
  },
  {
    q: "What happens during a typical coaching session?",
    a: "Each session is focused on your biggest score gaps. We'll review missed questions, fix the patterns causing mistakes, and build strategies you can actually repeat on test day. Depending on what you need, we may work on Desmos, advanced math, grammar, reading strategy, timing, or full test review.",
  },
  {
    q: "What do I get between sessions?",
    a: "You'll get targeted assignments based on what we covered, usually from The 1500 Blueprint, official-style practice, or custom drills. The goal is specific work that attacks the exact skills holding your score back.",
  },
  {
    q: "Do you give homework or a study plan?",
    a: "Yes. You'll get a clear plan for what to study between sessions, what to review, and what to avoid wasting time on. A big part of my program is making sure you're not just “studying more” — you're studying the right things.",
  },
  {
    q: "How is your coaching different from big test prep companies?",
    a: "Most test prep companies give students generic lessons, outdated strategies, and tutors who didn't actually master the test at a high level. I scored a 1580 with an 800 Math, and my coaching is built specifically for the Digital SAT: Desmos shortcuts, reading systems, grammar patterns, and a step-by-step plan based on your mistakes.",
  },
  {
    q: "Do you offer a score improvement guarantee?",
    a: "Yes — “The Guarantee” package. As long as you exhaust all sessions and fulfill the few conditions, you are guaranteed to improve by at least 100 points.",
  },
  {
    q: "How does scheduling and rescheduling work?",
    a: "After you sign up, we'll coordinate a weekly session time that works for your schedule. If you need to reschedule, just give notice ahead of time and we'll find another slot when possible. Because 1-on-1 spots are limited, consistent scheduling is the best way to make real progress.",
  },
];

export type Saying = {
  kind: "quote" | "shot";
  name?: string;
  handle?: string;
  text?: string;
  label?: string;
  score?: string;
  detail?: string;
};

// "Here's what students are saying" wall. `quote` = a message from a student;
// `shot` = a placeholder for a real score-report screenshot (swap in the image).
export const SAYINGS: Saying[] = [
  {
    kind: "quote",
    name: "Aryan",
    handle: "@student",
    text: "Hey Scott! On my first practice test in April I got a 570 in math — on the one I took this June I got a 780. You genuinely helped me, and you should feel really good about the work you do 🙏",
  },
  { kind: "shot", label: "Score report", score: "1560", detail: "770 R/W · 790 Math" },
  {
    kind: "quote",
    name: "Minh",
    handle: "@student",
    text: "I could cry 😭 Thank you so much — my score came out way better than I expected 😭😭",
  },
  { kind: "shot", label: "Bluebook · latest test", score: "1510", detail: "720 R/W · 790 Math" },
  {
    kind: "quote",
    name: "Raf",
    handle: "11th grade",
    text: "Two-month progress and I'm on track for a 1400 this August. Couldn't have done it without you 🔥",
  },
  { kind: "shot", label: "Score report", score: "1500", detail: "720 R/W · 780 Math" },
  {
    kind: "quote",
    name: "Fabi",
    handle: "@student",
    text: "Scott, I'll be taking the SAT in June — thank you for everything. You were an amazing help 🙏",
  },
  { kind: "shot", label: "Score report", score: "1210", detail: "+180 since last test" },
  { kind: "quote", name: "Devin", handle: "@student", text: "GRATEFUL FOR YOU BRO 🙌 LFG" },
  { kind: "shot", label: "Score report", score: "1420", detail: "710 R/W · 710 Math" },
];
