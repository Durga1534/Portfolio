"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaProjectDiagram,
  FaGraduationCap,
} from "react-icons/fa";

interface Education {
  degree: string;
  institution: string;
  year: string;
}

const education: Education[] = [
  { degree: "BSC in Physics, Computer Science and Mathematics", institution: "Viswam Degree and PG College", year: "2023" },
  { degree: "Intermediate (MPC)", institution: "Mother Theresa Junior College", year: "2018" },
  { degree: "SSC", institution: "Viswa Barathi High School", year: "2016" },
];

const interests = [
  { icon: <FaCode className="text-4xl text-yellow-500" />, label: "Clean Coding" },
  { icon: <FaLaptopCode className="text-4xl text-yellow-500" />, label: "Web Development" },
  { icon: <FaProjectDiagram className="text-4xl text-yellow-500" />, label: "System Design" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.1 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4 }
  }
};

const About: FC = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-black text-gray-800 dark:text-yellow-400 py-20"
    >
      {/* Background Elements - matching hero and skills */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-20 w-20 h-20 bg-yellow-200 rounded-full opacity-10 animate-pulse delay-700" />
        <div className="absolute bottom-32 right-24 w-12 h-12 bg-blue-200 rounded-full opacity-10 animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-8 space-y-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-yellow-400 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get to know me better
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Hello, I&apos;m <span className="font-semibold text-yellow-500">Durga Prasad</span>, a Full Stack Developer seeking entry-level opportunities. I am dedicated to writing clean, efficient code and building scalable applications that solve real-world problems.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            When I&apos;m not coding, you&apos;ll find me on the cricket field, which keeps me energetic, focused, and teaches me the value of teamwork and strategy.
          </p>
        </motion.div>

        {/* Interests/Focus Areas */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-12">
            What I Focus On
          </h3>
          <div className="flex justify-center flex-wrap gap-12 max-w-3xl mx-auto">
            {interests.map((interest, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="mb-4 transition-transform duration-300">
                  {interest.icon}
                </div>
                <span className="text-lg font-medium text-gray-600 dark:text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">
                  {interest.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-12">
            Education
          </h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col md:flex-row items-center justify-between p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-yellow-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <FaGraduationCap className="text-2xl text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="text-yellow-500 font-semibold text-lg">
                  {edu.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;