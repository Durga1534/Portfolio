"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { 
  SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, 
  SiSentry, SiExpress, SiFirebase, SiAppwrite, SiSupabase 
} from "react-icons/si";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: JSX.Element[];
  githubUrl?: string;
  liveUrl?: string;
  gridSize: 'small' | 'medium' | 'large';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Freelance-Flow",
    description: "A Full-Stack Freelancer Website to work on projects with time tracking, clients list, invoices with live time tracking feature as well. Build using Next.js 15 with TypeScript.",
    image: "/freelance_dashboard.png",
    technologies: [
      <SiNextdotjs key="next" className="text-black dark:text-white" />,
      <SiTypescript key="ts" className="text-blue-500" />,
      <SiTailwindcss key="tailwind" className="text-cyan-500" />,
      <SiAppwrite key="appwrite" className="text-pink-500" />,
      <FaReact key="react" className="text-sky-500" />,
      <FaNodeJs key="node" className="text-green-600" />,
      <SiExpress key="express" className="text-black dark:text-white" />
    ],
    githubUrl: "https://github.com/Durga1534/Freelance_Flow",
    liveUrl: "https://freelance-flow-xi.vercel.app/",
    gridSize: "large"
  },
  {
    id: 2,
    title: "Converso",
    description: "Converso - AI Voice Companion SaaS Platform | Create & chat with personalized AI companions using real-time voice interactions | Built with Next.js 15, TypeScript, Supabase & Vapi AI.",
    image: "/converso.png",
    technologies: [
      <SiNextdotjs key="next" className="text-black dark:text-white" />,
      <SiTypescript key="ts" className="text-blue-500" />,
      <FaReact key="react" className="text-sky-500" />,
      <SiSupabase key="supabase" className="text-green-600" />,
      <SiSentry key="sentry" className="text-red-500" />,
      <FaNodeJs key="node" className="text-green-600" />,
      <SiTailwindcss key="tailwind" className="text-cyan-500" />
    ],
    githubUrl: "https://github.com/Durga1534/my_converso",
    liveUrl: "https://my-converso.vercel.app/",
    gridSize: "medium"
  },
  {
    id: 3,
    title: "Prep-AI",
    description: "Prep-AI is a comprehensive full-stack web application that revolutionizes interview preparation by leveraging artificial intelligence to generate personalized, role-specific questions and provide interactive coding practice environments..",
    image: "/Homepage.png",
    technologies: [
      <FaReact key="react" className="text-sky-500" />,
      <SiJavascript key="js" className="text-yellow-500" />,
      <SiFirebase key="firebase" className="text-yellow-500" />,
      <SiTailwindcss key="tailwind" className="text-cyan-500" />,
      <FaNodeJs key="node" className="text-green-600" />,
      <SiExpress key="express" className="text-black dark:text-white" />
    ],
    githubUrl: "https://github.com/Durga1534/Prep_AI",
    liveUrl: "https://prep-ai-git-master-durgaprasads-projects-e0a9901b.vercel.app/",
    gridSize: "small"
  },
  {
    id: 4,
    title: "Mocktail Landing Page",
    description: "A stunning, interactive landing page for mocktails featuring smooth GSAP animations and modern design. Built with React, Vite, and Tailwind CSS for optimal performance and visual appeal.",
    image: "/Mocktail.png",
    technologies: [
      <FaReact key="react" className="text-sky-500" />,
      <SiTypescript key="ts" className="text-blue-500" />,
      <SiTailwindcss key="tailwind" className="text-cyan-500" />
    ],
    githubUrl: "https://github.com/Durga1534/gsap_mocktail",
    liveUrl: "https://gsap-mocktail.vercel.app/",
    gridSize: "medium"
  },
  {
    id: 5,
    title: "Project Management System",
    description: "A Full-Stack Application Used to manage users, tasks, teams and projects.",
    image: "/Homepage-desktop.png",
    technologies: [
      <FaReact key="react" className="text-sky-500" />,
      <SiJavascript key="js" className="text-yellow-500" />,
      <SiTailwindcss key="tailwind" className="text-cyan-500" />,
      <FaNodeJs key="node" className="text-green-600" />,
      <SiMongodb key="mongo" className="text-green-700" />,
      <SiExpress key="express" className="text-black dark:text-white" />
    ],
    githubUrl: "https://github.com/Durga1534/project-management",
    gridSize: "small"
  },
];

const ProjectCard: FC<{ project: Project; className?: string }> = ({ project, className }) => {
  const variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } }
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group border bg-white dark:bg-black hover:border-yellow-400 rounded-lg shadow-md transition-all duration-500 overflow-hidden flex flex-col",
        className
      )}
    >
      {/* Project Image */}
      <div className="relative w-full h-28 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-yellow-400 group-hover:text-yellow-500 transition-colors">
            {project.title}
          </h3>
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-xs mt-1 line-clamp-2">
            {project.description}
          </p>
          {/* Technologies Icons */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.map((tech, index) => (
              <div key={index} className="flex items-center justify-center w-6 h-6 text-base hover:scale-110 transition-transform">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-1 px-2 py-1 border text-gray-600 dark:text-gray-400 hover:text-yellow-500 hover:border-yellow-400 rounded-md text-xs transition-colors"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white hover:bg-yellow-600 rounded-md text-xs transition-colors"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>

        {/* Learn More */}
        <div className="text-yellow-500 mt-2 flex items-center text-xs">
          <span className="mr-1">View Details</span>
          <ArrowRight className="size-3 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

const Projects: FC = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
  };

  return (
    <section id="projects" className="scroll-mt-20 bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-yellow-400">Featured Projects</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            A showcase of my latest and best work
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={cn(
                project.gridSize === "large"
                  ? "col-span-4"
                  : project.gridSize === "medium"
                  ? "col-span-3"
                  : "col-span-2",
                "h-full"
              )}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
