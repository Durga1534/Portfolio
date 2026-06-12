import { siteConfig } from "@/lib/site";

const links = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border py-12 bg-card/50">
    <div className="page-container">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <p className="font-display text-xl text-foreground">Durga Prasad</p>
          <p className="text-sm text-muted-foreground mt-1">Full Stack Engineer</p>
        </div>

        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.name}
            </a>
          ))}
        </nav>

        <p className="font-mono-label text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
