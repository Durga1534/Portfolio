export const siteConfig = {
  name: "Durga Prasad",
  title: "Durga Prasad — Full Stack Developer",
  description:
    "Full Stack Developer building production-ready apps with Next.js, Node.js, TypeScript, Redis, Stripe, and AI integrations.",
  url: "https://durga-portfolio.vercel.app",
  email: "kondurudurgaprasad.2@gmail.com",
  github: "https://github.com/Durga1534",
  linkedin: "https://www.linkedin.com/in/durgaprasad23",
  resume: "/Konduru Durga Prasad.pdf",
  ogImage: "/og-image.png",
};

export const metrics = [
  { value: "20+", label: "Shipped Projects" },
  { value: "4", label: "Live Deployments" },
  { value: "3", label: "Production Backends" },
  { value: "2", label: "AI-Integrated Apps" },
];

export const experiences = [
  {
    id: "independent-engineer",
    role: "Independent Software Engineer",
    company: "Self-Employed",
    period: "2023 — Present",
    type: "Professional",
    description:
      "Building and shipping production-ready backend systems, realtime collaboration platforms, and AI-powered SaaS applications for clients and personal projects.",
    highlights: [
      "Shipped 20+ software projects across full-stack and backend domains",
      "Built distributed systems with Redis, PostgreSQL, and WebSocket synchronization",
      "Implemented production-grade rate limiting, authentication, and multi-tenant architectures",
      "Integrated AI APIs (Groq, Vapi) for intelligent application features",
    ],
    tech: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Next.js", "Docker"],
    link: "https://github.com/Durga1534",
  },
  {
    id: "jobsense",
    role: "Backend Engineer",
    company: "JobSense AI",
    period: "2024 — Present",
    type: "Personal Product",
    description:
      "Autonomous job-hunting agent that continuously searches job boards, scores listings against resumes using Groq AI, and delivers matches via WhatsApp.",
    highlights: [
      "Background job processing with QStash and Redis-backed scheduling",
      "AI-powered resume-to-job scoring with Groq / llama-3.1",
      "Arcjet API protection and rate limiting",
      "Solved production issues: malformed AI responses, credential rotation, WhatsApp delivery limits",
    ],
    tech: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "Groq AI", "Docker"],
    link: "https://github.com/Durga1534/jobsense-ai",
  },
  {
    id: "syncroflow",
    role: "Full Stack Engineer",
    company: "Syncro Flow",
    period: "2024 — Present",
    type: "Personal Product",
    description:
      "Multi-tenant realtime collaborative workspace where every mutation is validated, authorized, persisted to PostgreSQL, and propagated via WebSockets.",
    highlights: [
      "Multi-tenant architecture with workspace invitations and role-based permissions",
      "Server Actions coordinate validation and persistence before realtime delivery",
      "WebSocket synchronization with automatic polling fallback",
      "Separate backend layers for persistence, authorization, and event broadcasting",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Pusher"],
    link: "https://github.com/Durga1534",
  },
];

export const certifications = [
  {
    name: "Self-Directed Full Stack Engineering",
    issuer: "Production Projects Portfolio",
    year: "2024",
    detail: "Demonstrated via shipped apps with auth, payments, and AI pipelines.",
  },
];
