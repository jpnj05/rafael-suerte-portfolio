export type ProjectCategory = "Web" | "Product" | "Identity";

export type Project = {
  slug: string;
  index: string;
  title: string;
  kind: string;
  year: string;
  category: ProjectCategory;
  summary: string;
  detail: string[];
  role: string;
  stack: string[];
  outcome: string;
  cover: "arc" | "stripe" | "dot" | "line";
};

export type NavItem = {
  label: string;
  to: string;
};

export const navItems: NavItem[] = [
  { label: "Index", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const profile = {
  name: "Rafael Felipe Suerte",
  shortName: "Rafael Suerte",
  role: "Front-end developer & interface designer",
  location: "Metro Manila, Philippines",
  timeZone: "Asia/Manila",
  email: "hello@rafaelsuerte.dev",
  phone: "+63 917 000 0000",
  availability: "Open for work",
  status: "Open to internships & freelance",
  intro:
    "I'm Rafael — a front-end developer and interface designer based in Metro Manila. I build calm, tactile websites where typography, motion and code meet.",
  bio: [
    "I'm an Information Technology student who fell for the web through type. Most of my work starts on paper: a grid, a palette, a handful of words, and a question about how the page should feel before anyone reads it.",
    "I care about the unglamorous parts — semantic markup, honest loading states, layouts that hold up at 320px. I like interfaces that get out of the way, and details you only notice the second time you look.",
  ],
  socials: [
    { label: "GitHub", handle: "@rafaelsuerte", href: "https://github.com/rafaelsuerte" },
    { label: "LinkedIn", handle: "in/rafaelsuerte", href: "https://www.linkedin.com/in/rafaelsuerte" },
    { label: "Dribbble", handle: "@rafaelsuerte", href: "https://dribbble.com/rafaelsuerte" },
  ],
};

export const marqueeItems = [
  "Interface design",
  "React & TypeScript",
  "Typography",
  "Motion",
  "Design systems",
  "Manila, PH",
];

export const stats = [
  { value: "04", label: "Years making things for the web" },
  { value: "18", label: "Projects shipped, large and small" },
  { value: "07", label: "Hackathons, jams and late nights" },
];

export const heroMeta = [
  { key: "Based in", value: "Metro Manila, PH" },
  { key: "Focus", value: "Interface · Type · Motion" },
  { key: "Status", value: "Open to internships" },
];

export const nowItems = [
  {
    label: "Building",
    value: "A reading companion for long-form essays — quiet type, no infinite scroll.",
  },
  {
    label: "Learning",
    value: "View Transitions, accessible motion, and writing fewer, better components.",
  },
  {
    label: "Listening",
    value: "Balmorhea, Nujabes, and the hum of the office fan.",
  },
  {
    label: "Reading",
    value: "The Elements of Typographic Style — again, with a pencil this time.",
  },
];

export const projects: Project[] = [
  {
    slug: "tala",
    index: "01",
    title: "Tala",
    kind: "Study companion",
    year: "2026",
    category: "Product",
    summary:
      "A calm study planner that turns a messy syllabus into a week you can actually finish.",
    detail: [
      "Tala began as a personal problem: four syllabi, one calendar, and a growing pile of index cards. The goal was not another productivity dashboard, but a single screen that answers one question — what is worth doing today?",
      "I designed the information architecture, built the interface in React and TypeScript, and wrote the scheduling logic that spreads reviews across the week with spaced repetition.",
    ],
    role: "Product design, front-end, scheduling logic",
    stack: ["React", "TypeScript", "Supabase", "Figma"],
    outcome: "1,400+ study sessions in its first month across two campuses.",
    cover: "arc",
  },
  {
    slug: "bughaw",
    index: "02",
    title: "Bughaw",
    kind: "Coffee storefront",
    year: "2025",
    category: "Web",
    summary:
      "An e-commerce storefront for a small roaster, built around the ritual of a slow morning.",
    detail: [
      "Bughaw needed to sell beans without feeling like a supermarket. We built the shop around three rituals — pour-over, espresso, cold brew — and let the product pages carry the copy, the grind guide and the brew ratio.",
      "I handled the design system, the storefront front-end and the checkout polish, including a cart that survives a refresh and a mobile flow that fits in one thumb.",
    ],
    role: "UI design, front-end, design system",
    stack: ["React", "Bootstrap", "Stripe", "Sanity"],
    outcome: "Checkout completion up 31% after the mobile redesign.",
    cover: "stripe",
  },
  {
    slug: "habi",
    index: "03",
    title: "Habi",
    kind: "Textile archive",
    year: "2025",
    category: "Web",
    summary:
      "A living archive for weavers — patterns, provenance and the people behind every bolt.",
    detail: [
      "Habi documents traditional woven textiles before the knowledge leaves with the last weaver. The archive pairs high-resolution scans with oral histories, pattern diagrams and a map of where each piece was made.",
      "The challenge was restraint: the photographs are the argument, so the interface is a frame, a caption and a lot of air. I built the archive browser, the pattern viewer and an editor for the research team.",
    ],
    role: "Interface design, front-end, archive tooling",
    stack: ["React", "TypeScript", "Node", "Cloudinary"],
    outcome: "312 pieces catalogued with 48 contributing weavers.",
    cover: "dot",
  },
  {
    slug: "pulse",
    index: "04",
    title: "PULSE",
    kind: "Campus identity",
    year: "2024",
    category: "Identity",
    summary:
      "A visual identity and event site for a student tech conference that refuses to be boring.",
    detail: [
      "PULSE is the annual student tech conference of our college. The brief was simple: make it feel like a gig, not a seminar. We built the identity around a waveform that doubles as a schedule, a speaker grid and a countdown.",
      "I designed the logotype, the poster system and the event site, then built the schedule and registration flow with the organizing committee.",
    ],
    role: "Identity, art direction, front-end",
    stack: ["Figma", "React", "Framer Motion", "Vite"],
    outcome: "620 attendees — the largest turnout in the conference's history.",
    cover: "line",
  },
];

export const experience = [
  {
    period: "2026 — Now",
    role: "Freelance Front-end Developer",
    company: "Independent",
    location: "Remote · Metro Manila",
    points: [
      "Design and build marketing sites and small products for studios, cafés and campus organizations.",
      "Own the whole pipeline: wireframes, type and colour, React implementation, deployment and handover.",
      "Rebuilt three client sites on a shared component system, cutting page build time from days to hours.",
    ],
  },
  {
    period: "2025",
    role: "UI Design Intern",
    company: "Studio Kalye",
    location: "Makati City",
    points: [
      "Supported two brand and web projects from moodboard to developer handoff.",
      "Produced a 40-component Figma library that became the studio's starting point for small sites.",
      "Ran usability checks on a booking flow and rewrote the empty and error states.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Front-end Lead",
    company: "IT Guild, Student Organization",
    location: "Manila",
    points: [
      "Led a team of four building the org's event site and internal tools.",
      "Introduced a review checklist for accessibility and responsive behaviour before launch.",
      "Mentored two junior members through their first React project.",
    ],
  },
];

export const education = [
  {
    period: "2023 — 2027",
    school: "Institute of Computing Studies",
    detail: "BS Information Technology — Web & Mobile Systems",
    note: "Dean's Lister, four semesters · GWA 1.45",
  },
  {
    period: "2021 — 2023",
    school: "Senior High School",
    detail: "Science, Technology, Engineering & Mathematics (STEM)",
    note: "Graduated with high honors",
  },
];

export const skills = [
  {
    group: "Build",
    items: [
      { name: "React & TypeScript", level: 92 },
      { name: "CSS & design systems", level: 90 },
      { name: "Motion & interaction", level: 84 },
    ],
  },
  {
    group: "Design",
    items: [
      { name: "Figma & prototyping", level: 94 },
      { name: "Typography & layout", level: 88 },
      { name: "Brand & identity", level: 76 },
    ],
  },
  {
    group: "Foundations",
    items: [
      { name: "Accessibility", level: 82 },
      { name: "Node & APIs", level: 72 },
      { name: "Testing & tooling", level: 68 },
    ],
  },
];

export const recognition = [
  {
    year: "2025",
    title: "Best Interface — Campus Hackathon",
    org: "48-hour build · 1st of 26 teams",
  },
  {
    year: "2025",
    title: "Finalist — Philippine Student Web Challenge",
    org: "Top 10 nationwide",
  },
  {
    year: "2024",
    title: "Dean's Lister",
    org: "Institute of Computing Studies",
  },
];
