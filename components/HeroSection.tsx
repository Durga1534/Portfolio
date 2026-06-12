"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { metrics, siteConfig } from "@/lib/site";

const featuredWork = [
  { title: "FreelanceFlow", desc: "Stripe billing · CRM · time tracking", href: "/projects/freelanceflow" },
  { title: "JobSense AI", desc: "Gemini scoring · Redis · PostgreSQL", href: "/projects/jobsense-ai" },
  { title: "API Gateway", desc: "JWT auth · rate limiting · Docker", href: "https://github.com/Durga1534/rate-limiting-api-gateway" },
];

const HeroSection: FC = () => {
  const [imageError, setImageError] = useState(false);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = siteConfig.resume;
    link.download = "Durga_Prasad_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-32 pb-24 mesh-bg">
      <div className="page-container w-full relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-end">
          <div className="space-y-8 animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="font-mono-label text-xs text-muted-foreground tracking-wider uppercase">
                Open to full-time roles
              </span>
            </div>

            <div>
              <p className="font-mono-label text-sm text-muted-foreground mb-4">Full Stack Engineer</p>
              <h1 className="font-display text-[clamp(2.75rem,7vw,5rem)] leading-[1.05] tracking-tight text-foreground">
                Building systems
                <br />
                <span className="text-muted-foreground">that ship.</span>
              </h1>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              I&apos;m <span className="text-foreground font-medium">{siteConfig.name}</span> — I design and
              build production backends, realtime apps, and AI-powered products with Next.js,
              Node.js, Redis, and PostgreSQL.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">View projects</a>
              <button type="button" onClick={downloadResume} className="btn-outline">Resume</button>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4 pt-4 border-t border-border">
              {metrics.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-2xl text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="surface p-5 flex items-start gap-5">
              <div className="w-20 h-20 shrink-0 overflow-hidden rounded-xl border border-border shadow-sm">
                {!imageError ? (
                  <Image
                    src="/Profile.jpg"
                    alt={siteConfig.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm font-mono-label">
                    DP
                  </div>
                )}
              </div>
              <div className="pt-1">
                <p className="text-foreground font-medium">{siteConfig.name}</p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Backend-focused full-stack engineer based in India, seeking roles where I can
                  own systems end-to-end.
                </p>
                <div className="flex gap-4 mt-4 text-sm">
                  <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    GitHub <ArrowUpRight size={14} />
                  </a>
                  <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    LinkedIn <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="surface rounded-xl overflow-hidden divide-y divide-border">
              <p className="font-mono-label text-xs text-muted-foreground px-5 py-3 tracking-wider uppercase bg-white/50">
                Selected work
              </p>
              {featuredWork.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center justify-between px-5 py-4 surface-hover bg-card"
                >
                  <div>
                    <p className="text-foreground group-hover:text-foreground/80 transition-colors font-medium">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about"
        >
          <span className="font-mono-label text-[10px] tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
