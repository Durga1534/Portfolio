"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { 
  SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, 
  SiRender, SiSentry, SiVercel, SiExpress, SiFirebase, SiAppwrite, SiSupabase, 
  SiRedis, SiDocker, SiPostgresql, SiStripe
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { RiShieldCheckFill, RiKey2Fill } from "react-icons/ri";

interface Skill {
  name: string;
  icon: JSX.Element;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React", icon: <FaReact className="text-sky-500" />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, category: "Frontend" },
  
  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, category: "Backend" },
  { name: "Express.js", icon: <SiExpress className="text-gray-900" />, category: "Backend" },
  { name: "REST APIs", icon: <BiNetworkChart className="text-purple-600" />, category: "Backend" },
  { name: "JWT Auth", icon: <RiShieldCheckFill className="text-blue-600" />, category: "Backend" },
  { name: "OAuth", icon: <RiKey2Fill className="text-orange-600" />, category: "Backend" },
  
  // Database
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, category: "Database" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, category: "Database" },
  { name: "Redis", icon: <SiRedis className="text-red-600" />, category: "Database" },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-600" />, category: "Database" },
  { name: "Supabase", icon: <SiSupabase className="text-green-600" />, category: "Database" },
  { name: "Appwrite", icon: <SiAppwrite className="text-pink-600" />, category: "Database" },
  
  // Tools & Deployment
  { name: "Git", icon: <FaGitAlt className="text-orange-600" />, category: "Tools" },
  { name: "GitHub", icon: <FaGithub className="text-gray-900" />, category: "Tools" },
  { name: "Docker", icon: <SiDocker className="text-blue-600" />, category: "Tools" },
  { name: "Vercel", icon: <SiVercel className="text-gray-900" />, category: "Tools" },
  { name: "Render", icon: <SiRender className="text-purple-600" />, category: "Tools" },
  { name: "Sentry", icon: <SiSentry className="text-purple-700" />, category: "Tools" },
  { name: "Stripe", icon: <SiStripe className="text-indigo-600" />, category: "Tools" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.05
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

const Skills: FC = () => {
  const frontendSkills = skills.filter(s => s.category === "Frontend");
  const backendSkills = skills.filter(s => s.category === "Backend");
  const databaseSkills = skills.filter(s => s.category === "Database");
  const toolSkills = skills.filter(s => s.category === "Tools");

  const SkillBadge: FC<{ skill: Skill }> = ({ skill }) => (
    <motion.div
      variants={skillVariants}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-yellow-400 hover:shadow-md transition-all duration-200 group"
    >
      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
        {skill.icon}
      </span>
      <span className="text-sm font-medium text-gray-700">
        {skill.name}
      </span>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-gradient-to-b from-white to-gray-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Frontend & Backend Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Frontend */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Database & Tools Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Database */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Database
            </h3>
            <div className="flex flex-wrap gap-3">
              {databaseSkills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* Tools & Deployment */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Tools & Deployment
            </h3>
            <div className="flex flex-wrap gap-3">
              {toolSkills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;