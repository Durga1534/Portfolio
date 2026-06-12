"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const education = [
  { degree: "BSc — Physics, CS & Mathematics", institution: "Viswam Degree and PG College", year: "2023" },
  { degree: "Intermediate (MPC)", institution: "Mother Theresa Junior College", year: "2018" },
  { degree: "SSC", institution: "Viswa Barathi High School", year: "2016" },
];

const focus = [
  { title: "Backend systems", desc: "APIs, auth, queues, caching, and data modeling at scale." },
  { title: "Full-stack delivery", desc: "Next.js frontends wired to production-grade Node backends." },
  { title: "System design", desc: "Reliable architectures — rate limits, webhooks, observability." },
];

const About = () => (
  <section id="about" className="section-padding scroll-mt-20 border-t border-border bg-card/40">
    <div className="page-container">
      <SectionHeader
        number="01 — About"
        title="Engineer who ships, not just learns."
        subtitle="I build real products — Stripe billing, AI pipelines, distributed rate limiters — and I'm looking for a team where that matters."
      />

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-muted-foreground leading-relaxed"
        >
          <p className="text-lg text-foreground/90">
            I&apos;m Durga Prasad — a full-stack engineer with a backend focus. I&apos;ve shipped
            6+ applications spanning SaaS, AI agents, and infrastructure tooling.
          </p>
          <p>
            My stack centers on TypeScript, Node.js, PostgreSQL, and Redis. I care about clean
            architecture, idempotent webhooks, and systems that work under real load.
          </p>
          <p className="text-sm border-l-2 border-border pl-4 text-muted-foreground">
            Off the keyboard: cricket keeps me disciplined and collaborative — the same traits I
            bring to engineering teams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="surface rounded-xl overflow-hidden divide-y divide-border"
        >
          {focus.map((item) => (
            <div key={item.title} className="px-6 py-5 surface-hover bg-card">
              <h3 className="text-foreground font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-20"
      >
        <p className="font-mono-label text-xs text-muted-foreground tracking-wider uppercase mb-6">
          Education
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {education.map((edu) => (
            <div key={edu.degree} className="surface px-6 py-5 surface-hover bg-card">
              <p className="font-mono-label text-xs text-muted-foreground mb-2">{edu.year}</p>
              <h4 className="text-foreground text-sm font-medium leading-snug">{edu.degree}</h4>
              <p className="text-xs text-muted-foreground mt-1">{edu.institution}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
