import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CaseStudyContent from "@/components/CaseStudyContent";
import { getProjectBySlug, projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.slug && p.caseStudy)
    .map((p) => ({ slug: p.slug! }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} Case Study — ${siteConfig.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.caseStudy) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <CaseStudyContent project={project} />
    </>
  );
}
