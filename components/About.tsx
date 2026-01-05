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
  { 
    degree: "BSC in Physics, Computer Science and Mathematics", 
    institution: "Viswam Degree and PG College", 
    year: "2023" 
  },
  { 
    degree: "Intermediate (MPC)", 
    institution: "Mother Theresa Junior College", 
    year: "2018" 
  },
  { 
    degree: "SSC", 
    institution: "Viswa Barathi High School", 
    year: "2016" 
  },
];

const interests = [
  { 
    icon: <FaCode className="text-3xl" />, 
    label: "Clean Coding",
    description: "Writing maintainable and efficient code"
  },
  { 
    icon: <FaLaptopCode className="text-3xl" />, 
    label: "Web Development",
    description: "Building modern web applications"
  },
  { 
    icon: <FaProjectDiagram className="text-3xl" />, 
    label: "System Design",
    description: "Architecting scalable solutions"
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const About: FC = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600">
            Get to know me better
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                Who I Am
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hello, I'm <span className="font-semibold text-yellow-600">Durga Prasad</span>, a Full Stack Developer seeking entry-level opportunities. I am dedicated to writing clean, efficient code and building scalable applications that solve real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me on the cricket field, which keeps me energetic, focused, and teaches me the value of teamwork and strategy.
              </p>
            </div>
          </motion.div>

          {/* Right: Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              What I Focus On
            </h3>
            <div className="space-y-4">
              {interests.map((interest, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-yellow-500 group-hover:scale-110 transition-transform duration-300 mt-1">
                      {interest.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                        {interest.label}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Education
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon and Year */}
                  <div className="flex items-center justify-between mb-4">
                    <FaGraduationCap className="text-3xl text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-yellow-600 font-bold text-lg">
                      {edu.year}
                    </span>
                  </div>
                  
                  {/* Degree */}
                  <h4 className="font-bold text-gray-900 mb-2 text-base leading-snug">
                    {edu.degree}
                  </h4>
                  
                  {/* Institution */}
                  <p className="text-sm text-gray-600">
                    {edu.institution}
                  </p>
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