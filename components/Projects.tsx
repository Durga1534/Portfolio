"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiMongodb,
  SiExpress, SiSentry, SiFirebase, SiAppwrite, SiSupabase, SiPostgresql,
  SiRedis, SiDocker, SiStripe,
} from "react-icons/si";

interface Technology {
  icon: React.ReactElement;
  name: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
  accent: string; // gradient classes for border/glow
}

const projects: Project[] = [
  {
    id: 1,
    title: "FreelanceFlow",
    description:
      "A full-stack freelancer management platform with real-time time tracking, client CRM, invoice generation, and Stripe-powered billing. Built on Next.js 15 with TypeScript and Appwrite backend.",
    image: "/freelance_dashboard.png",
    technologies: [
      { icon: <SiNextdotjs className="w-4 h-4" />, name: "Next.js" },
      { icon: <SiTypescript className="w-4 h-4" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="w-4 h-4" />, name: "Tailwind" },
      { icon: <SiAppwrite className="w-4 h-4" />, name: "Appwrite" },
      { icon: <SiStripe className="w-4 h-4" />, name: "Stripe" },
      { icon: <FaNodeJs className="w-4 h-4" />, name: "Node.js" },
    ],
    githubUrl: "https://github.com/Durga1534/Freelance_Flow",
    liveUrl: "https://freelance-flow-xi.vercel.app/",
    category: "Full-Stack",
    featured: true,
    accent: "from-indigo-500 to-violet-500",
  },
  {
    id: 2,
    title: "Converso",
    description:
      "AI Voice Companion SaaS — create & chat with personalized AI personas using real-time voice with Vapi AI, Supabase auth, and Next.js 15.",
    image: "/converso.png",
    technologies: [
      { icon: <SiNextdotjs className="w-4 h-4" />, name: "Next.js" },
      { icon: <SiTypescript className="w-4 h-4" />, name: "TypeScript" },
      { icon: <SiSupabase className="w-4 h-4" />, name: "Supabase" },
      { icon: <SiSentry className="w-4 h-4" />, name: "Sentry" },
    ],
    githubUrl: "https://github.com/Durga1534/my_converso",
    liveUrl: "https://my-converso.vercel.app/",
    category: "Full-Stack",
    accent: "from-violet-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Prep-AI",
    description:
      "AI-powered interview prep platform generating role-specific questions with interactive coding environments. React + Firebase.",
    image: "/Homepage.png",
    technologies: [
      { icon: <FaReact className="w-4 h-4" />, name: "React" },
      { icon: <SiJavascript className="w-4 h-4" />, name: "JavaScript" },
      { icon: <SiFirebase className="w-4 h-4" />, name: "Firebase" },
      { icon: <SiExpress className="w-4 h-4" />, name: "Express.js" },
    ],
    githubUrl: "https://github.com/Durga1534/Prep_AI",
    liveUrl: "https://prep-ai-git-master-durgaprasads-projects-e0a9901b.vercel.app/",
    category: "Full-Stack",
    accent: "from-cyan-500 to-teal-500",
  },
  {
    id: 4,
    title: "API Rate-Limiter Gateway",
    description:
      "Production-grade API gateway with JWT auth, Redis-backed distributed rate limiting, structured logging, health checks, and Dockerized deployment.",
    technologies: [
      { icon: <FaNodeJs className="w-4 h-4" />, name: "Node.js" },
      { icon: <SiExpress className="w-4 h-4" />, name: "Express" },
      { icon: <SiRedis className="w-4 h-4" />, name: "Redis" },
      { icon: <SiDocker className="w-4 h-4" />, name: "Docker" },
      { icon: <SiTypescript className="w-4 h-4" />, name: "TypeScript" },
    ],
    githubUrl: "https://github.com/Durga1534/rate-limiting-api-gateway",
    category: "Backend",
    accent: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Subscription & Billing System",
    description:
      "Backend system handling subscription lifecycle, invoice generation, renewals, cancellations, idempotent payments, and webhook-safe state transitions.",
    technologies: [
      { icon: <FaNodeJs className="w-4 h-4" />, name: "Node.js" },
      { icon: <SiExpress className="w-4 h-4" />, name: "Express" },
      { icon: <SiMongodb className="w-4 h-4" />, name: "MongoDB" },
      { icon: <SiPostgresql className="w-4 h-4" />, name: "PostgreSQL" },
    ],
    githubUrl: "https://github.com/Durga1534/subscription-system",
    category: "Backend",
    accent: "from-pink-500 to-rose-500",
  },
];

const CATEGORIES = ["All", "Full-Stack", "Backend"];

const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({
  project,
  featured = false,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group rounded-2xl overflow-hidden border border-white/8 bg-[#13131a] transition-all duration-500 ${featured ? "md:col-span-2" : ""
        } hover:border-transparent`}
      style={{
        boxShadow: hovered
          ? "0 0 0 1px rgba(99,102,241,0.5), 0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(99,102,241,0.1)"
          : "0 4px 24px rgba(0,0,0,0.3)",
      }}
    >
      {/* Top gradient accent bar */}
      <div className={`h-0.5 w-full bg-gradient-to-r ${project.accent}`} />

      {/* Image */}
      {project.image ? (
        <div className={`relative overflow-hidden bg-[#0d0d14] ${featured ? "h-56 md:h-64" : "h-44"}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#0a0a0f]/80 backdrop-blur-sm flex items-center justify-center gap-3"
              >
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${project.accent} text-white text-sm font-medium hover:opacity-90 transition-all shadow-lg`}
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          {/* Category badge */}
          <div className="absolute top-3 right-3">
            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${project.accent} shadow-lg`}>
              {project.category}
            </span>
          </div>
          {featured && (
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-white/15 border border-white/25 backdrop-blur-sm">
                ✦ Featured
              </span>
            </div>
          )}
        </div>
      ) : (
        /* No-image card: abstract pattern bg */
        <div className={`relative overflow-hidden ${featured ? "h-32" : "h-28"} bg-[#0d0d14]`}>
          <div
            className={`absolute inset-0 opacity-20 bg-gradient-to-br ${project.accent}`}
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                                radial-gradient(circle at 70% 20%, rgba(255,255,255,0.08) 0%, transparent 40%)`,
            }}
          />
          <div className="absolute inset-0 dot-grid-bg opacity-40" />
          <div className="absolute top-3 right-3">
            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${project.accent} shadow-lg`}>
              {project.category}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className={`font-bold text-white transition-colors duration-300 group-hover:gradient-text ${featured ? "text-2xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/8 text-slate-400 text-xs font-medium hover:border-white/20 hover:text-slate-200 transition-all duration-200"
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Links (visible at all times on no-hover / small screens) */}
        {!project.image && (
          <div className="flex gap-3 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/8 border border-white/12 text-slate-300 text-sm font-medium hover:bg-white/12 hover:text-white transition-all"
              >
                <FaGithub /> View Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="relative bg-[#0a0a0f] py-24 overflow-hidden scroll-mt-20"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 tracking-widest uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A curated showcase of my best work — real apps, real impact
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${active === cat
                ? "text-white"
                : "text-slate-400 glass-card hover:text-white hover:border-white/15"
                }`}
            >
              {active === cat && (
                <motion.div
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Bento grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={project.featured && active === "All" && i === 0}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/Durga1534"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 glass-card hover:text-white hover:border-indigo-500/40 transition-all duration-300"
          >
            <FaGithub />
            View all projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;