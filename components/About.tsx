"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaFutbol,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const education = [
  {
    degree: "BSC in Physics, Computer Science & Mathematics",
    institution: "Viswam Degree and PG College",
    year: "2023",
    color: "from-indigo-500 to-violet-500",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Mother Theresa Junior College",
    year: "2018",
    color: "from-violet-500 to-cyan-500",
  },
  {
    degree: "SSC",
    institution: "Viswa Barathi High School",
    year: "2016",
    color: "from-cyan-500 to-emerald-500",
  },
];

const interests = [
  {
    icon: <FaCode className="text-2xl" />,
    label: "Clean Architecture",
    description: "Writing maintainable, scalable systems",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: <FaLaptopCode className="text-2xl" />,
    label: "Full Stack Dev",
    description: "End-to-end application ownership",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: <FaProjectDiagram className="text-2xl" />,
    label: "System Design",
    description: "Architecting for scale and reliability",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
];

// Animated counter
function useCounter(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

const StatCard: FC<{ num: string; label: string; delay: number }> = ({ num, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card rounded-2xl p-6 text-center hover:border-indigo-500/30 transition-all duration-300"
  >
    <div className="text-3xl font-extrabold gradient-text mb-1">{num}</div>
    <div className="text-sm text-slate-400">{label}</div>
  </motion.div>
);

const About: FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0a0a0f] py-24 overflow-hidden scroll-mt-20"
    >
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 tracking-widest uppercase mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            The Dev Behind{" "}
            <span className="gradient-text">the Code</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { num: "5+", label: "Projects Shipped" },
            { num: "3+", label: "Years Learning" },
            { num: "10+", label: "Technologies" },
            { num: "100%", label: "Dedication" },
          ].map((s, i) => (
            <StatCard key={s.label} num={s.num} label={s.label} delay={i * 0.1} />
          ))}
        </div>

        {/* Main two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Left: Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
                  <SiNextdotjs className="text-indigo-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Who I Am</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                I&apos;m{" "}
                <span className="font-semibold text-indigo-400">Durga Prasad</span>, a Full Stack
                Developer passionate about building applications that are not just functional, but
                genuinely{" "}
                <span className="text-white font-medium">
                  fast, robust, and delightful to use
                </span>
                .
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                I specialise in Next.js, Node.js, and TypeScript — from pixel-perfect UIs to
                production-grade APIs. Currently seeking entry-level opportunities where I can
                contribute, learn, and grow quickly.
              </p>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/8 border border-emerald-500/20">
                <FaFutbol className="text-emerald-400 text-xl flex-shrink-0" />
                <p className="text-slate-400 text-sm">
                  Off-screen I&apos;m on the cricket field — it keeps me sharp, disciplined, and a
                  strong team player.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Focus areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                <SiTypescript className="text-violet-400 text-lg" />
              </div>
              <h3 className="text-xl font-bold text-white">What I Focus On</h3>
            </div>
            {interests.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 6. }}
                className={`flex items-start gap-4 p-5 rounded-2xl border ${item.bg} cursor-default transition-all duration-200 glass-card-hover`}
              >
                <div className={`${item.color} mt-0.5 flex-shrink-0`}>{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-10 justify-center">
            <FaGraduationCap className="text-indigo-400 text-2xl" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent" />

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-6 md:gap-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 border-[3px] border-[#0a0a0f] -translate-x-1.5 md:-translate-x-2 z-10 mt-5" />

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 ${idx % 2 === 0 ? "md:pr-12 md:w-1/2" : "md:pl-12 md:w-1/2 md:ml-auto"}`}>
                    <div className="glass-card-hover rounded-2xl p-6 hover:border-indigo-500/30">
                      <div className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${edu.color} mb-3`}>
                        {edu.year}
                      </div>
                      <h4 className="font-bold text-white text-base mb-1 leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-slate-400">{edu.institution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;