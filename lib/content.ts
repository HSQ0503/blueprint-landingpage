import type { IconName } from "@/components/Icon";

export type Feature = { icon: IconName; title: string; desc: string };
export type Faq = { q: string; a: string };
// A real student testimonial screenshot (in public/testimonials).
export type Shot = { src: string; alt: string; w: number; h: number };

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

// Real student testimonial screenshots (DMs + score reports) for the walls on
// the home, tutoring, and results pages. Files live in public/testimonials.
export const WALL: Shot[] = [
  { src: "/testimonials/aryan.jpg", alt: "Message from Aryan: his SAT math went from 570 to 760 after working with Scott", w: 1206, h: 661 },
  { src: "/testimonials/fabiana.jpg", alt: "Score report and message from Fabiana: a 1510, up 140 points (720 reading and writing, 790 math)", w: 1206, h: 1742 },
  { src: "/testimonials/han.jpg", alt: "Message from Han: a 1540, with math up from 670 to 780", w: 923, h: 345 },
  { src: "/testimonials/kanymi.jpg", alt: "Score report and message from Kanymi: a total SAT score of 1540", w: 1206, h: 1555 },
  { src: "/testimonials/mina.jpg", alt: "Message from Minh thanking Scott: their SAT score came out better than expected", w: 1206, h: 532 },
  { src: "/testimonials/eay.jpg", alt: "Score report and message from Eay: a 1500 (710 reading and writing, 790 math)", w: 1206, h: 1891 },
  { src: "/testimonials/anish.jpg", alt: "Score report and message from Anish: a total SAT score of 1500", w: 1167, h: 912 },
  { src: "/testimonials/dan.jpg", alt: "Score report and message from Dan: a 1420 (700 reading and writing, 720 math)", w: 743, h: 1303 },
  { src: "/testimonials/bobrito.jpg", alt: "Message from Bobrito: a 1510, with 790 math and 720 reading", w: 1206, h: 345 },
  { src: "/testimonials/mert.jpg", alt: "Score report and message from Mert: a 1430, up 140 points (650 reading and writing, 780 math)", w: 1206, h: 1985 },
  { src: "/testimonials/student-2.jpg", alt: "Message from a student who scored 750 in math on their first SAT after four weeks of prep", w: 1206, h: 953 },
  { src: "/testimonials/raf.jpg", alt: "Score reports and message from Raf showing progress from 1010 to 1210, on track for 1400", w: 1206, h: 1455 },
  { src: "/testimonials/student-1.jpg", alt: "Score report and message from a student: a 1500 (720 reading and writing, 780 math), up from 1420", w: 1097, h: 1027 },
];

export const FAQS: Faq[] = [
  {
    q: "Should I do 1-on-1 coaching or start with The Blueprint?",
    a: "It depends on your timeline and how far you are from your goal score. If you have a few months and need structure, The Blueprint is a strong place to start because it gives you the full system to follow at your own pace. If your test is coming up soon, your score is stuck, or you need a major jump, 1-on-1 coaching is better because we can diagnose your exact weaknesses and build a faster plan around them. Most students who are 100+ points away from their goal get the best results with coaching plus the Blueprint.",
  },
  {
    q: "What happens during a typical coaching session?",
    a: "Each session is focused on your biggest score gaps. We'll review missed questions, fix the patterns causing mistakes, and build strategies you can actually repeat on test day. Depending on what you need, we may work on Desmos, advanced math, grammar, reading strategy, timing, or full test review.",
  },
  {
    q: "What do I get between sessions?",
    a: "You'll get targeted assignments based on what we covered, usually from The Blueprint, official-style practice, or custom drills. The goal is specific work that attacks the exact skills holding your score back.",
  },
  {
    q: "Do you give homework or a study plan?",
    a: "Yes. You'll get a clear plan for what to study between sessions, what to review, and what to avoid wasting time on. A big part of my program is making sure you're not just “studying more.” You're studying the right things.",
  },
  {
    q: "How is your coaching different from big test prep companies?",
    a: "Most test prep companies give students generic lessons, outdated strategies, and tutors who didn't actually master the test at a high level. I scored a 1580 with an 800 Math, and my coaching is built specifically for the Digital SAT: Desmos shortcuts, reading systems, grammar patterns, and a step-by-step plan based on your mistakes.",
  },
  {
    q: "Do you offer a score improvement guarantee?",
    a: "Yes, with The Guarantee package. As long as you exhaust all sessions and fulfill the few conditions, you are guaranteed to improve by at least 100 points.",
  },
  {
    q: "How does scheduling and rescheduling work?",
    a: "After you sign up, we'll coordinate a weekly session time that works for your schedule. If you need to reschedule, just give notice ahead of time and we'll find another slot when possible. Because 1-on-1 spots are limited, consistent scheduling is the best way to make real progress.",
  },
];

export type Plan = {
  id: string;
  name: string;
  who: string;
  price: string;
  was?: string;
  items: string[];
  cta: string;
  primary: "enroll" | "call"; // what the main button does
  popular?: boolean;
  accent?: "blue" | "gold"; // card highlight on the pricing grids
  guarantee?: boolean;
  stripeUrl?: string; // Scott's Stripe Payment Link; empty => placeholder checkout
};

// Single source of truth for coaching plans — rendered on /tutoring, /enroll,
// and /book-a-call. To go live, fill in each stripeUrl below and CALENDLY_URL.
export const PLANS: Plan[] = [
  {
    id: "essentials",
    name: "The Essentials",
    who: "Best for getting started",
    price: "$595",
    was: "$700",
    items: [
      "2 hours of 1-on-1 sessions",
      "A clear study plan for your exact situation",
      "3 months of The Blueprint ($210 value)",
      "Access to my SAT predictions ($100 value)",
    ],
    cta: "Get Started",
    primary: "enroll",
    stripeUrl: "",
  },
  {
    id: "accelerator",
    name: "The Accelerator",
    who: "Best for fast progress",
    price: "$1,395",
    was: "$1,690",
    items: [
      "6 hours of 1-on-1 sessions",
      "A custom step-by-step roadmap with weekly assignments",
      "6 months of The Blueprint ($420 value)",
      "Access to my SAT predictions ($100 value)",
      "Add hours anytime at $185/hr",
    ],
    cta: "Book a free call",
    primary: "call",
    accent: "blue",
    stripeUrl: "",
  },
  {
    id: "guarantee",
    name: "The Guarantee",
    who: "Best for a serious score jump",
    price: "$2,495",
    was: "$3,280",
    items: [
      "12 hours of 1-on-1 sessions (priority scheduling)",
      "Everything in The Accelerator",
      "12 months of The Blueprint ($840 value)",
      "Add hours anytime at $175/hr",
    ],
    cta: "Book Your Guarantee Call",
    primary: "call",
    popular: true,
    accent: "gold",
    guarantee: true,
    stripeUrl: "",
  },
  {
    id: "hour",
    name: "On-demand hour",
    who: "Just need a single session",
    price: "$195",
    items: [
      "One 60-minute 1-on-1 session",
      "Work on exactly what you choose",
      "No commitment, book as needed",
    ],
    // Pays immediately — no free call step for single sessions.
    cta: "Book a Session",
    primary: "enroll",
    stripeUrl: "",
  },
];

// Scott's scheduling link (Calendly). Leave empty to show the placeholder embed.
export const CALENDLY_URL: string = "";

// Scott's self-paced Blueprint product site (external).
export const BLUEPRINT_URL: string = "https://www.the1500blueprint.com/homepage";

export function getPlan(id?: string | null): Plan | undefined {
  if (!id) return undefined;
  return PLANS.find((p) => p.id === id);
}

// Parse a plan price string ("$2,495") into a number, for savings math.
export function dollars(s: string): number {
  return Number(s.replace(/[^0-9.]/g, "")) || 0;
}
