"use client";

import { useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { skills, skillCategories, type SkillItem } from "@/lib/skills";

const SkillCard = ({ skill, index }: { skill: SkillItem; index: number }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.92, y: 12 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.92, y: -8 }}
    transition={{ duration: 0.35, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
    className="skill-chip"
    style={
      {
        "--skill-accent": skill.accent,
        "--skill-bg": skill.bg,
        "--skill-border": skill.border,
        "--skill-text": skill.text,
        "--skill-glow": skill.glow,
      } as CSSProperties
    }
  >
    <div className="relative z-10 flex items-center justify-between">
      <span className="skill-dot" />
      <span className="font-mono-label text-[10px] uppercase tracking-wider opacity-60">
        {skill.category}
      </span>
    </div>
    <p className="relative z-10 font-medium text-[0.95rem] leading-tight">{skill.name}</p>
  </motion.div>
);

const Skills = () => {
  const [active, setActive] = useState<string>("All");
  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="section-padding scroll-mt-20 border-t border-border skills-section-bg relative overflow-hidden"
    >
      <div
        className="absolute top-20 right-[-10%] w-[420px] h-[420px] rounded-full opacity-40 animate-float-soft pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-10 left-[-8%] w-[360px] h-[360px] rounded-full opacity-35 animate-float-soft pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(251,191,36,0.22) 0%, transparent 70%)",
          animationDelay: "-5s",
        }}
      />

      <div className="page-container relative z-10">
        <SectionHeader
          number="03 — Skills"
          title="Every tool, individually sharp."
          subtitle="Each skill stands on its own — hover to see its accent come alive."
        />

        <div
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter skills"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`font-mono-label text-xs px-4 py-2 rounded-full border transition-all ${
                active === cat
                  ? "bg-foreground text-background border-foreground shadow-md"
                  : "bg-white/80 text-muted-foreground border-border hover:border-foreground/20 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          {filtered.length} skills · {active === "All" ? "full stack" : active}
        </p>
      </div>
    </section>
  );
};

export default Skills;
