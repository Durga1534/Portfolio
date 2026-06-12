"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeader = ({
  number,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) => (
  <motion.header
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, margin: "-80px" }}
    className={`mb-14 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}
  >
    <p className="section-eyebrow font-mono-label mb-4">{number}</p>
    <h2 className="section-title mb-4">{title}</h2>
    {subtitle && (
      <p
        className={`text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {subtitle}
      </p>
    )}
    <div
      className={`section-rule mt-8 ${align === "center" ? "mx-auto w-24" : "w-full"}`}
    />
  </motion.header>
);

export default SectionHeader;
