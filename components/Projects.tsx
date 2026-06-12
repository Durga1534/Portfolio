"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { projects, projectCategories, type Project } from "@/lib/projects";

const ProjectRow = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className="group border-b border-border py-10 md:py-12"
  >
    <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="font-mono-label text-xs text-muted-foreground">{project.category}</span>
          {project.featured && (
            <span className="font-mono-label text-[10px] text-muted-foreground border border-border px-2 py-0.5 rounded-full bg-muted">
              Featured
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:opacity-80 transition-opacity">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-3 max-w-2xl">
          {project.description}
        </p>

        {project.metrics && (
          <div className="flex flex-wrap gap-3 mt-4">
            {project.metrics.map((m) => (
              <span key={m} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                {m}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Source <ArrowUpRight size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Live demo <ArrowUpRight size={14} />
            </a>
          )}
          {project.slug && project.caseStudy && (
            <Link href={`/projects/${project.slug}`} className="link-arrow">
              Case study <ArrowUpRight size={14} />
            </Link>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((t) => (
            <span
              key={t.name}
              className="font-mono-label text-[11px] text-muted-foreground px-2.5 py-1 bg-muted border border-border rounded-full"
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>

      {project.image && (
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
            sizes="280px"
          />
        </div>
      )}
    </div>
  </motion.article>
);

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding scroll-mt-20 border-t border-border bg-card/30">
      <div className="page-container">
        <SectionHeader
          number="04 — Projects"
          title="Selected work."
          subtitle="Production apps with source code, live demos, and written case studies."
        />

        <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Filter projects">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`font-mono-label text-xs px-4 py-2 rounded-full border transition-all ${
                active === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-white text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="border-t border-border">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.map((project, i) => (
                <ProjectRow key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Durga1534"
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow text-base"
          >
            All projects on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
