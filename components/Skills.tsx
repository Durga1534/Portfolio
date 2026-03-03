"use client";

import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiMongodb,
  SiRender, SiSentry, SiVercel, SiExpress, SiFirebase, SiAppwrite,
  SiSupabase, SiRedis, SiDocker, SiPostgresql, SiStripe,
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { RiShieldCheckFill, RiKey2Fill } from "react-icons/ri";

interface Skill {
  name: string;
  icon: React.ReactElement;
  category: string;
  glow: string;
}


const skills: Skill[] = [
  // Frontend
  { name: "React", icon: <FaReact />, category: "Frontend", glow: "hover:shadow-sky-500/30" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend", glow: "hover:shadow-white/20" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Frontend", glow: "hover:shadow-blue-500/30" },
  { name: "JavaScript", icon: <SiJavascript />, category: "Frontend", glow: "hover:shadow-yellow-400/30" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend", glow: "hover:shadow-cyan-400/30" },
  // Backend
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend", glow: "hover:shadow-green-500/30" },
  { name: "Express.js", icon: <SiExpress />, category: "Backend", glow: "hover:shadow-white/20" },
  { name: "REST APIs", icon: <BiNetworkChart />, category: "Backend", glow: "hover:shadow-purple-500/30" },
  { name: "JWT Auth", icon: <RiShieldCheckFill />, category: "Backend", glow: "hover:shadow-blue-500/30" },
  { name: "OAuth", icon: <RiKey2Fill />, category: "Backend", glow: "hover:shadow-orange-500/30" },
  // Database
  { name: "MongoDB", icon: <SiMongodb />, category: "Database", glow: "hover:shadow-green-600/30" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "Database", glow: "hover:shadow-blue-600/30" },
  { name: "Redis", icon: <SiRedis />, category: "Database", glow: "hover:shadow-red-500/30" },
  { name: "Firebase", icon: <SiFirebase />, category: "Database", glow: "hover:shadow-yellow-500/30" },
  { name: "Supabase", icon: <SiSupabase />, category: "Database", glow: "hover:shadow-green-400/30" },
  { name: "Appwrite", icon: <SiAppwrite />, category: "Database", glow: "hover:shadow-pink-500/30" },
  // Tools
  { name: "Git", icon: <FaGitAlt />, category: "Tools", glow: "hover:shadow-orange-500/30" },
  { name: "GitHub", icon: <FaGithub />, category: "Tools", glow: "hover:shadow-white/20" },
  { name: "Docker", icon: <SiDocker />, category: "Tools", glow: "hover:shadow-blue-500/30" },
  { name: "Vercel", icon: <SiVercel />, category: "Tools", glow: "hover:shadow-white/20" },
  { name: "Render", icon: <SiRender />, category: "Tools", glow: "hover:shadow-violet-500/30" },
  { name: "Sentry", icon: <SiSentry />, category: "Tools", glow: "hover:shadow-purple-600/30" },
  { name: "Stripe", icon: <SiStripe />, category: "Tools", glow: "hover:shadow-indigo-500/30" },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Database", "Tools"];

const categoryColors: Record<string, string> = {
  Frontend: "from-sky-500 to-blue-500",
  Backend: "from-green-500 to-emerald-500",
  Database: "from-orange-500 to-red-500",
  Tools: "from-violet-500 to-purple-500",
};

const SkillCard: FC<{ skill: Skill; index: number }> = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -10, scale: 0.9 }}
    transition={{ duration: 0.3, delay: index * 0.04 }}
    whileHover={{ y: -4, scale: 1.05 }}
    className={`glass-card rounded-2xl p-4 flex flex-col items-center gap-2 cursor-default group transition-all duration-300 hover:border-white/20 hover:shadow-lg ${skill.glow}`}
  >
    <div className="text-2xl group-hover:scale-110 transition-transform duration-300 text-slate-300 group-hover:text-white">
      {skill.icon}
    </div>
    <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors duration-300 text-center leading-tight">
      {skill.name}
    </span>
  </motion.div>
);

const Skills: FC = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="relative bg-[#0a0a0f] py-24 overflow-hidden scroll-mt-20"
    >
      {/* Background glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-cyan-600/8 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 tracking-widest uppercase mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Skills &{" "}
            <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${active === cat
                ? "text-white"
                : "text-slate-400 hover:text-white glass-card hover:border-white/15"
                }`}
            >
              {active === cat && (
                <motion.div
                  layoutId="activeSkillTab"
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${cat === "All"
                    ? "from-indigo-500 to-violet-500"
                    : categoryColors[cat]
                    }`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Legend */}
        {active === "All" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {Object.entries(categoryColors).map(([cat, gradient]) => (
              <div key={cat} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${gradient}`} />
                <span className="text-xs text-slate-500">{cat}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;