"use client";

import React, { FC, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from "react-icons/fa";
import Image from "next/image";

interface HeroProps {
  name?: string;
  image?: string;
}

const ROLES = [
  "Full Stack Developer",
  "Backend Engineer",
  "API Architect",
  "Next.js Specialist",
];

// Animated typewriter hook
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
      } else {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, speed, pause]);

  return displayed;
}

// Floating particles
const Particles: FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-400/40"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 8}s`,
            animation: `particle-float ${8 + Math.random() * 8}s ${Math.random() * 8}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection: FC<HeroProps> = ({
  name = "Durga Prasad",
  image = "/Profile.jpg",
}) => {
  const [imageError, setImageError] = useState(false);
  const role = useTypewriter(ROLES);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Konduru Durga Prasad.pdf";
    link.download = "Durga_Prasad_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a0a0f]"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-bg opacity-60" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Floating particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-24 pb-16">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-dot-pulse" />
            Available for Work
          </div>
        </motion.div>

        {/* Profile Image with rotating ring */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative w-36 h-36 md:w-44 md:h-44">
            {/* Outer rotating gradient ring */}
            <div
              className="absolute inset-[-4px] rounded-full animate-spin-slow"
              style={{
                background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #22d3ee, #6366f1)",
              }}
            />
            {/* Inner white spacer ring */}
            <div className="absolute inset-0 rounded-full bg-[#0a0a0f] m-[3px]" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full animate-glow-pulse opacity-60" />
            {/* Image */}
            <div className="absolute inset-[6px] rounded-full overflow-hidden">
              {image && !imageError ? (
                <Image
                  src={image}
                  alt={`${name} — Full Stack Developer`}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                  width={176}
                  height={176}
                  loading="eager"
                  priority
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-3xl font-bold text-white">
                  {name.split(" ").map((w) => w.charAt(0)).join("")}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="space-y-3"
        >
          <p className="text-slate-400 text-base font-medium tracking-widest uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
            <span className="gradient-text">{name}</span>
          </h1>
        </motion.div>

        {/* Animated Role Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-2 text-xl md:text-2xl font-semibold text-slate-300 min-h-[2rem]"
        >
          <span className="text-indigo-400">{"<"}</span>
          <span>{role}</span>
          <span className="w-0.5 h-6 bg-indigo-400 animate-cursor" />
          <span className="text-indigo-400">{"/>"}</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about building{" "}
          <span className="text-white font-medium">scalable, production-grade</span> applications
          — from blazing-fast frontends to robust backend systems with{" "}
          <span className="text-indigo-400 font-medium">APIs, auth, and real-time features</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="glow-btn inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-base"
          >
            View My Work
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={downloadResume}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base text-slate-200 bg-white/5 border border-white/15 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
          >
            <FaDownload className="text-sm" />
            Resume
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-3 pt-2"
        >
          {[
            { icon: <FaGithub size={18} />, href: "https://github.com/Durga1534", label: "GitHub" },
            { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/durgaprasad23", label: "LinkedIn" },
            { icon: <FaEnvelope size={18} />, href: "mailto:kondurudurgaprasad.2@gmail.com", label: "Email" },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-300 text-sm font-medium"
              title={label}
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-8 pt-4 border-t border-white/8"
        >
          {[
            { num: "5+", label: "Projects Built" },
            { num: "10+", label: "Technologies" },
            { num: "∞", label: "Curiosity" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{num}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-indigo-400 transition-colors duration-300 hidden md:flex flex-col items-center gap-1 group focus:outline-none"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <FaArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;