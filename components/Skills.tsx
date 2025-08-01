"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { 
  SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, 
  SiRender, SiSentry, SiVercel, SiExpress, SiFirebase, SiAppwrite, SiSupabase 
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { RiShieldCheckFill, RiKey2Fill } from "react-icons/ri";

interface Skill {
  name: string;
  icon: JSX.Element;
}

const frontendSkills: Skill[] = [
  { name: "React", icon: <FaReact className="text-sky-500 text-5xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-4xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
];

const backendSkills: Skill[] = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-black dark:text-white text-4xl" /> },
  { name: "REST APIs", icon: <BiNetworkChart className="text-purple-500 text-4xl" /> },
  { name: "JWT Auth", icon: <RiShieldCheckFill className="text-blue-500 text-3xl" /> },
  { name: "OAuth", icon: <RiKey2Fill className="text-orange-500 text-3xl" /> },
];

const databaseSkills: Skill[] = [
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-5xl" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-700 dark:text-gray-200 text-4xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-600 text-3xl" /> },
  { name: "Appwrite", icon: <SiAppwrite className="text-pink-500 text-3xl" /> },
];

const toolSkills: Skill[] = [
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white text-4xl" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white text-4xl" /> },
  { name: "Render", icon: <SiRender className="text-purple-500 text-3xl" /> },
  { name: "Sentry", icon: <SiSentry className="text-red-500 text-3xl" /> },
];

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.08
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4 }
  }
};

const Skills: FC = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-white dark:bg-black text-gray-800 dark:text-yellow-400 py-20 relative"
    >
      {/* Background Elements - matching hero style */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-10 animate-pulse delay-300" />
        <div className="absolute bottom-40 left-16 w-16 h-16 bg-blue-200 rounded-full opacity-10 animate-pulse delay-500" />
      </div>

      <div className="max-w-6xl mx-auto px-8 space-y-16">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-yellow-400 mb-4">
            Skills & Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* All Skills in One Section */}
        <motion.div
          variants={categoryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center flex-wrap gap-12 max-w-7xl mx-auto">
            {[...frontendSkills, ...backendSkills, ...databaseSkills, ...toolSkills].map((skill) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="mb-3 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;