"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { certifications, experiences } from "@/lib/site";

const Experience = () => (
  <section id="experience" className="section-padding scroll-mt-20 border-t border-border">
    <div className="page-container">
      <SectionHeader
        number="02 — Experience"
        title="Work I've shipped."
        subtitle="Personal products and open-source — each with real code, docs, and deployable systems."
      />

      <div className="border-t border-border">
        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="grid md:grid-cols-[200px_1fr_auto] gap-6 md:gap-10 py-10 border-b border-border group"
          >
            <div>
              <p className="font-mono-label text-xs text-muted-foreground">{exp.period}</p>
              <p className="text-xs text-muted-foreground/80 mt-2">{exp.type}</p>
            </div>

            <div>
              <h3 className="text-foreground font-medium text-lg">{exp.role}</h3>
              <p className="text-muted-foreground text-sm mt-0.5">{exp.company}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4 max-w-2xl">
                {exp.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-border">—</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono-label text-[11px] text-muted-foreground px-2.5 py-1 bg-muted border border-border rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start link-arrow md:mt-1"
              aria-label={`View ${exp.company}`}
            >
              <ArrowUpRight size={18} />
            </a>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 grid md:grid-cols-2 gap-4"
      >
        {certifications.map((cert) => (
          <div key={cert.name} className="surface px-6 py-5 bg-card surface-hover">
            <p className="text-foreground text-sm font-medium">{cert.name}</p>
            <p className="font-mono-label text-xs text-muted-foreground mt-1">
              {cert.issuer} · {cert.year}
            </p>
            <p className="text-sm text-muted-foreground mt-2">{cert.detail}</p>
          </div>
        ))}
        <div className="surface px-6 py-5 bg-card surface-hover">
          <p className="text-foreground text-sm font-medium">Continuous Engineering</p>
          <p className="font-mono-label text-xs text-muted-foreground mt-1">GitHub · 2023 — Present</p>
          <p className="text-sm text-muted-foreground mt-2">
            6+ public repos with Docker, Redis, Stripe, and AI — each documented and deployable.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
