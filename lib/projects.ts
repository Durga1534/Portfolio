export interface Technology {
  name: string;
}

export interface Project {
  id: number;
  slug?: string;
  title: string;
  description: string;
  image?: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
  accent: string;
  metrics?: string[];
  caseStudy?: {
    problem: string;
    solution: string;
    architecture: string[];
    challenges: string[];
    outcomes: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "jobsense-ai",
    title: "JobSense AI",
    description:
      "Autonomous job-hunting agent that continuously searches job boards, scores listings against resumes using Groq AI, and delivers the strongest matches directly to WhatsApp.",
    image: "/JobSense.png",
    technologies: [
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "Redis" },
      { name: "PostgreSQL" },
      { name: "Groq AI" },
      { name: "Docker" },
    ],
    githubUrl: "https://github.com/Durga1534/jobsense-ai",
    category: "Backend",
    featured: true,
    accent: "from-emerald-500 to-teal-500",
    metrics: ["QStash scheduling", "Groq AI scoring", "Arcjet protection"],
    caseStudy: {
      problem:
        "Job searching across multiple portals is repetitive and time-consuming — candidates miss relevant roles buried in noisy listings.",
      solution:
        "Automated a daily pipeline that scrapes job boards, scores each listing against the user's resume with Groq AI, and sends a ranked digest via WhatsApp.",
      architecture: [
        "Node.js + Express REST API with QStash background jobs",
        "Redis-backed job queue and caching for deduplication",
        "PostgreSQL for jobs, users, and match history",
        "Groq API (llama-3.1) for semantic resume-to-job fit scoring",
        "Arcjet for API protection and rate limiting",
      ],
      challenges: [
        "Handling rate limits across scrapers and AI API calls",
        "Designing idempotent daily runs without duplicate notifications",
        "Solving production issues: malformed AI responses, credential rotation, WhatsApp delivery limits",
      ],
      outcomes: [
        "Fully automated daily job intelligence pipeline",
        "WhatsApp delivery with ranked job matches",
        "Production-grade backend with caching and structured data",
      ],
    },
  },
  {
    id: 2,
    slug: "syncro-flow",
    title: "Syncro Flow",
    description:
      "Multi-tenant realtime collaborative workspace where every mutation is validated, authorized, persisted to PostgreSQL, and propagated across connected clients over WebSockets.",
    image: "/syncroflow.png",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Drizzle ORM" },
      { name: "Pusher" },
    ],
    githubUrl: "https://github.com/Durga1534",
    liveUrl: "https://syncro-flow.vercel.app",
    category: "Full-Stack",
    featured: true,
    accent: "from-indigo-500 to-violet-500",
    metrics: ["WebSocket sync", "Multi-tenant auth", "Server Actions"],
    caseStudy: {
      problem:
        "Realtime collaboration tools often struggle with consistency, authorization, and scalability across multiple tenants.",
      solution:
        "Built a multi-tenant workspace with separate backend layers for persistence, authorization, and event broadcasting using WebSockets.",
      architecture: [
        "Next.js App Router with Server Actions for validation",
        "PostgreSQL + Drizzle ORM for data persistence",
        "Pusher WebSockets for realtime event propagation",
        "Role-based permissions and workspace invitations",
        "Automatic polling fallback for WebSocket failures",
      ],
      challenges: [
        "Ensuring mutation consistency across connected clients",
        "Implementing secure multi-tenant data isolation",
        "Handling WebSocket reconnection and fallback strategies",
      ],
      outcomes: [
        "Production-ready realtime collaboration platform",
        "Scalable multi-tenant architecture",
        "Robust synchronization with automatic fallback",
      ],
    },
  },
  {
    id: 3,
    title: "Rate Limiter API Gateway",
    description:
      "Production-grade API gateway implementing distributed sliding-window rate limiting for authenticated clients, containerized with Docker Compose.",
    image: "/Rate-Limiter-API.png",
    technologies: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Redis" },
      { name: "Docker" },
      { name: "TypeScript" },
    ],
    githubUrl: "https://github.com/Durga1534/rate-limiting-api-gateway",
    category: "Backend",
    accent: "from-orange-500 to-red-500",
    metrics: ["Sliding-window algorithm", "JWT auth", "Prometheus metrics"],
  },
  {
    id: 4,
    title: "Converso",
    description:
      "AI voice companion SaaS with secure multi-tenant data isolation, realtime voice sessions, and subscription management using Vapi AI and Supabase.",
    image: "/converso.png",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Supabase" },
      { name: "Clerk" },
      { name: "Vapi AI" },
    ],
    githubUrl: "https://github.com/Durga1534/my_converso",
    liveUrl: "https://my-converso.vercel.app/",
    category: "Full-Stack",
    accent: "from-violet-500 to-cyan-500",
    metrics: ["Row Level Security", "Realtime voice", "Multi-tenant"],
  },
];

export const projectCategories = ["All", "Full-Stack", "Backend"] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCaseStudyProjects(): Project[] {
  return projects.filter((p) => p.caseStudy);
}
