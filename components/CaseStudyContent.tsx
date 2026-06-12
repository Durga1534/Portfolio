import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface CaseStudyContentProps {
  project: Project;
}

const CaseStudyContent = ({ project }: CaseStudyContentProps) => {
  const study = project.caseStudy!;

  return (
    <article className="bg-background min-h-screen">
      <div className="page-container py-28 md:py-32 max-w-3xl">
        <Link href="/#projects" className="link-arrow mb-12 inline-flex">
          <ArrowLeft size={14} /> Back to projects
        </Link>

        <p className="font-mono-label text-xs text-muted-foreground tracking-wider uppercase mb-4">
          Case study · {project.category}
        </p>

        <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
          {project.title}
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mt-6">{project.description}</p>

        {project.image && (
          <div className="relative aspect-video mt-10 overflow-hidden rounded-xl border border-border shadow-md">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        <div className="flex flex-wrap gap-4 mt-8 pb-10 border-b border-border">
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
        </div>

        <div className="space-y-12 mt-12">
          {[
            { title: "Problem", content: study.problem },
            { title: "Solution", content: study.solution },
          ].map((block) => (
            <section key={block.title}>
              <h2 className="font-mono-label text-xs text-muted-foreground tracking-wider uppercase mb-3">
                {block.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{block.content}</p>
            </section>
          ))}

          {[
            { title: "Architecture", items: study.architecture },
            { title: "Challenges", items: study.challenges },
            { title: "Outcomes", items: study.outcomes },
          ].map((block) => (
            <section key={block.title}>
              <h2 className="font-mono-label text-xs text-muted-foreground tracking-wider uppercase mb-4">
                {block.title}
              </h2>
              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex gap-3">
                    <span className="text-border shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h2 className="font-mono-label text-xs text-muted-foreground tracking-wider uppercase mb-4">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t.name}
                  className="font-mono-label text-[11px] text-muted-foreground px-2.5 py-1 bg-muted border border-border rounded-full"
                >
                  {t.name}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default CaseStudyContent;
