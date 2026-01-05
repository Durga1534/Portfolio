"use client";
import React, { useState } from "react";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiSentry,
  SiFirebase,
  SiAppwrite,
  SiSupabase,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiStripe,
} from "react-icons/si";

/* ---------------- TYPES ---------------- */
interface Technology {
  icon: JSX.Element;
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
}

/* ---------------- PROJECTS DATA ---------------- */
const projects: Project[] = [
  {
    id: 1,
    title: "FreelanceFlow",
    description:
      "A Full-Stack Freelancer Website to work on projects with time tracking, clients list, invoices with live time tracking feature as well. Built using Next.js 15 with TypeScript.",
    image: "/freelance_dashboard.png",
    technologies: [
      { icon: <SiNextdotjs className="w-5 h-5" />, name: "Next.js"},
      { icon: <SiTypescript className="w-5 h-5" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="w-5 h-5" />, name: "Tailwind CSS" },
      { icon: <SiAppwrite className="w-5 h-5" />, name: "Appwrite" },
      { icon: <SiStripe className="w-5 h-5" />, name: "Stripe" },
      { icon: <FaNodeJs className="w-5 h-5" />, name: "Node.js" },
      { icon: <SiExpress className="w-5 h-5" />, name: "Express.js" }
    ],
    githubUrl: "https://github.com/Durga1534/Freelance_Flow",
    liveUrl: "https://freelance-flow-xi.vercel.app/",
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "Converso",
    description:
      "Converso - AI Voice Companion SaaS Platform. Create & chat with personalized AI companions using real-time voice interactions. Built with Next.js 15, TypeScript, Supabase & Vapi AI.",
    image: "/converso.png",
    technologies: [
      { icon: <SiNextdotjs className="w-5 h-5" />, name: "Next.js" },
      { icon: <SiTypescript className="w-5 h-5" />, name: "TypeScript" },
      { icon: <FaReact className="w-5 h-5" />, name: "React.js" },
      { icon: <SiSupabase className="w-5 h-5" />, name: "Supabase" },
      { icon: <SiSentry className="w-5 h-5" />, name: "Sentry.js" },
      { icon: <FaNodeJs className="w-5 h-5" />, name: "Node.js" },
      { icon: <SiTailwindcss className="w-5 h-5" />, name: "Tailwind CSS" }
    ],
    githubUrl: "https://github.com/Durga1534/my_converso",
    liveUrl: "https://my-converso.vercel.app/",
    category: "Full-Stack",
  },
  {
    id: 3,
    title: "Prep-AI",
    description:
      "A comprehensive full-stack web application that revolutionizes interview preparation by leveraging artificial intelligence to generate personalized, role-specific questions and provide interactive coding practice environments.",
    image: "/Homepage.png",
    technologies: [
      { icon: <FaReact className="w-5 h-5" />, name: "React.js" },
      { icon: <SiJavascript className="w-5 h-5" />, name: "JavaScript" },
      { icon: <SiFirebase className="w-5 h-5" />, name: "Firebase" },
      { icon: <SiTailwindcss className="w-5 h-5" />, name: "Tailwind CSS" },
      { icon: <FaNodeJs className="w-5 h-5" />, name: "Node.js" },
      { icon: <SiExpress className="w-5 h-5" />, name: "Express.js" }
    ],
    githubUrl: "https://github.com/Durga1534/Prep_AI",
    liveUrl: "https://prep-ai-git-master-durgaprasads-projects-e0a9901b.vercel.app/",
    category: "Full-Stack",
  },
  {
    id: 101,
    title: "Rate Limiting API Gateway",
    description:
      "Production-grade API Gateway with JWT authentication, API keys, Redis-backed distributed rate limiting, structured logging, health checks, and Dockerized deployment for scalable infrastructure.",
    technologies: [
      { icon: <FaNodeJs className="w-5 h-5" />, name: "Node.js" },
      { icon: <SiExpress className="w-5 h-5" />, name: "Express" },
      { icon: <SiRedis className="w-5 h-5" />, name: "Redis" },
      { icon: <SiDocker className="w-5 h-5" />, name: "Docker" },
      { icon: <SiTypescript className="w-5 h-5" />, name: "TypeScript" },
    ],
    githubUrl: "https://github.com/Durga1534/rate-limiting-api-gateway",
    category: "Backend",
  },
  {
    id: 102,
    title: "Subscription & Billing System",
    description:
      "Backend system handling subscription lifecycle, invoices, renewals, cancellations, idempotent payments, and webhook-safe state transitions for reliable payment processing.",
    technologies: [
      { icon: <FaNodeJs className="w-5 h-5" />, name: "Node.js" },
      { icon: <SiExpress className="w-5 h-5" />, name: "Express" },
      { icon: <SiMongodb className="w-5 h-5" />, name: "MongoDB" },
      { icon: <SiPostgresql className="w-5 h-5" />, name: "PostgreSQL" },
    ],
    githubUrl: "https://github.com/Durga1534/subscription-system",
    category: "Backend",
  },
];

/* ---------------- COMPONENTS ---------------- */
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      {project.image && (
        <div className="relative h-56 overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {project.category}
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="pt-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-200"
                title={tech.name}
              >
                <span className="text-gray-700">{tech.icon}</span>
                <span className="text-xs font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-200 text-sm font-medium flex-1 justify-center"
            >
              <FaGithub className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg transition-all duration-200 text-sm font-medium flex-1 justify-center shadow-md hover:shadow-lg"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */
const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className=" scroll-mt-20 py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my latest and best work
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/30"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;