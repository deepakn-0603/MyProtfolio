"use client";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Cloud,
  Code2,
  Github,
  Linkedin,
  Mail,
  Server,
  Workflow,
} from "lucide-react";
import { Typewriter } from "@/components/Typewriter";
import { AIAssistant } from "@/components/AIAssistant";
import { PROJECTS_DATA, SKILLS_DATA, EXPERIENCE_DATA, CERTIFICATION_DATA, SOCIAL_LINKS, HERO_DATA, NAV_LINKS } from "@/constants";

const CONTENT_LAYOUT = {
  width: "100%",
  maxWidth: "80rem",
  paddingInline: "clamp(1.5rem, 5vw, 4rem)",
};

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading mb-5">
      <p className="eyebrow mb-2">{eyebrow}</p>
      <h2 className="section-title mb-0">{title}</h2>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header sticky-top">
      <nav className="navbar container mx-auto py-3" style={CONTENT_LAYOUT} aria-label="Main navigation">
        <a className="brand-mark" href="#home" aria-label="Deepak, home">
          PORTFOLIO
        </a>
        <div className="d-none d-md-flex align-items-center gap-4">
          {NAV_LINKS.map(({ label, href }) => <a className="nav-link" href={href} key={href}>{label}</a>)}
          <a className="nav-link" href="#ai-assistant">AI Assistant ✦</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={14} /></a>
        </div>
        <details className="mobile-nav d-md-none">
          <summary aria-label="Open navigation">Explore</summary>
          <div className="mobile-nav-menu">
            {NAV_LINKS.map(({ mobileLabel, href }) => <a href={href} key={href}>{mobileLabel}</a>)}
            <a href="#ai-assistant">AI Assistant ✦</a>
            <a href="#contact">Contact</a>
          </div>
        </details>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="ambient-glow ambient-glow-emerald" aria-hidden="true" />
      <div className="container hero-content mx-auto" style={CONTENT_LAYOUT}>
        <div className="row align-items-center g-5">
          <div className="col-lg-9">
            <p className="availability mb-4">
              <span className="status-pulse" aria-hidden="true" />
              {HERO_DATA.profession} <span className="availability-divider">/</span> {HERO_DATA.specialization}
            </p>
            <p className="hero-greeting mb-2">{HERO_DATA.greeting}</p>
            <h1 className="hero-title mb-4">
              <Typewriter /><span className="typewriter-cursor" aria-hidden="true">|</span>
            </h1>
            <p className="hero-subtitle mb-4">
              Software Engineer building <span className="hand-circle">Scalable</span> Systems &amp; Cloud <span className="hand-circle hand-circle-blue">Infrastructure</span>.
            </p>
            <p className="hero-copy mb-4">
              {HERO_DATA.copy}
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3">
              <a className="button-primary" href="#contact">
                Get in touch <ArrowRight size={16} />
              </a>
              <a className="button-secondary" href="#projects">
                View works <ArrowDownRight size={16} />
              </a>
            </div>
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <div className="architecture-card mb-5" style={{ background: "rgba(15, 20, 28, .58)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "12px", padding: "18px 20px", backdropFilter: "blur(12px)", boxShadow: "0 12px 40px rgba(0,0,0,.16)" }}>
              <p className="mb-3" style={{ color: "rgba(255,255,255,.6)", fontSize: ".68rem", letterSpacing: ".12em", textTransform: "uppercase" }}>System Architecture / Terminal</p>
              <div style={{ color: "rgba(220,230,240,.76)", fontFamily: "monospace", fontSize: ".7rem", lineHeight: 1.9 }}>
                <div><span style={{ color: "#8ea0b5" }}>status:</span> &quot;production-ready&quot;</div>
                <div><span style={{ color: "#8ea0b5" }}>stack:</span> [&quot;Python&quot;, &quot;AWS&quot;,</div>
                <div style={{ paddingLeft: "2.7rem" }}>&quot;K8s&quot;, &quot;AI&quot;]</div>
                <div><span style={{ color: "#8ea0b5" }}>latency:</span> &quot;-40% CPU&quot;</div>
              </div>
            </div>
            <div className="hero-index" aria-hidden="true">
              <span>{HERO_DATA.index}</span>
              <div />
              <span>{HERO_DATA.indexCaption}</span>
            </div>
          </div>
        </div>
        <div className="hero-footnote d-flex justify-content-between align-items-center mt-5 pt-4">
          <span><span aria-hidden="true" style={{ display: "inline-block", width: ".45rem", height: ".45rem", marginRight: ".55rem", borderRadius: "50%", background: "#8cff70", boxShadow: "0 0 9px rgba(140,255,112,.65)", verticalAlign: "middle" }} />BASED IN BANGALORE • IMMEDIATE JOINER</span>
          <a href="#projects">{HERO_DATA.scrollLabel} <ArrowDownRight size={14} /></a>
        </div>
      </div>
      <style jsx>{`
        .typewriter-cursor {
          display: inline-block;
          margin-left: 0.08em;
          color: #8cff70;
          text-shadow: 0 0 12px rgba(140, 255, 112, 0.65);
          animation: cursor-blink 1s steps(2, start) infinite;
        }
        @keyframes cursor-blink {
          to { visibility: hidden; }
        }
      `}</style>
    </section>
  );
}

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "heart") {
    return (
      <div className="project-visual heart-visual" aria-label="Heart-Wise project screenshots">
        <div className="row g-3 w-100">
          <div className="col-sm-6">
            <figure className="mb-0 h-100 overflow-hidden rounded-3" style={{ background: "#10151d", border: "1px solid rgba(255,255,255,.12)", boxShadow: "0 12px 28px rgba(0,0,0,.28)" }}>
              <img src="/images/heart-wise-A.png" alt="Heart-Wise UI Overview" loading="lazy" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "4 / 3", objectFit: "cover" }} />
              <figcaption className="p-2 small text-center">Platform overview</figcaption>
            </figure>
          </div>
          <div className="col-sm-6">
            <figure className="mb-0 h-100 overflow-hidden rounded-3" style={{ background: "#10151d", border: "1px solid rgba(255,255,255,.12)", boxShadow: "0 12px 28px rgba(0,0,0,.28)" }}>
              <img src="/images/heart-wise-B.png" alt="Heart-Wise Medical Explanation Demo" loading="lazy" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "4 / 3", objectFit: "cover" }} />
              <figcaption className="p-2 small text-center">AI medical explanation</figcaption>
            </figure>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual diagram-visual ai-visual" role="img" aria-label="DocMind AI project screenshot placeholder">
      {/* INSERT PROJECT SCREENSHOT HERE */}
      <div className="diagram-label"><span className="diagram-dot" /> SYSTEM FLOW <span>/DOCUMENT AI</span></div>
      <div className="architecture-diagram">
        <div className="diagram-node"><Cloud size={18} /><span>Upload</span></div>
        <div className="diagram-connector"><i /></div>
        <div className="diagram-node diagram-node-accent"><Code2 size={18} /><span>OCR + AI</span></div>
        <div className="diagram-connector"><i /></div>
        <div className="diagram-node"><Server size={18} /><span>Vector Search</span></div>
      </div>
      <div className="diagram-caption">PROCESS · EMBED · RETRIEVE</div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS_DATA)[number] }) {
  return (
    <article className="project-card card">
      <ProjectVisual kind={project.kind} />
      <div className="project-card-body card-body">
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div>
            <p className="project-type mb-2">{project.type}</p>
            <h3 className="project-name mb-2">{project.name}</h3>
            <ul className="tag-list list-unstyled d-flex flex-wrap gap-2 mb-0" aria-label={`${project.name} technologies`}>
              {project.tags.map((tag) => <li className="badge rounded-pill tech-tag" key={tag}>{tag}</li>)}
            </ul>
          </div>
          {project.status === "LIVE" ? (
            <a
              className="project-link"
              href="https://heart-wise-eight.vercel.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Heart-wise project"
            >
              LIVE <ArrowUpRight size={18} />
            </a>
          ) : <span className="project-type">{project.status}</span>}
        </div>
        <ul className="project-description ps-3 mb-0">
          {project.description.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="ambient-glow ambient-glow-blue" aria-hidden="true" />
      <div className="container section-container mx-auto" style={CONTENT_LAYOUT}>
        <div className="row align-items-end g-3 mb-4">
          <div className="col-md-8">
            <SectionHeading eyebrow="01 / Selected work" title="Built to work in the real world." />
          </div>
          <div className="col-md-4 text-md-end">
            <p className="section-aside mb-5">A few things I&apos;ve been building and learning from.</p>
          </div>
        </div>
      </div>
      <div className="marquee" aria-label="A continuous showcase of projects and technologies">
        <div className="marquee-track" style={{ animationDuration: "24s" }}>
          <div className="marquee-group">
            {PROJECTS_DATA.map((project) => <ProjectCard key={project.name} project={project} />)}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {PROJECTS_DATA.map((project) => <ProjectCard key={`copy-${project.name}`} project={project} />)}
          </div>
        </div>
      </div>
      <div className="container mx-auto" style={CONTENT_LAYOUT}>
        <p className="marquee-hint mt-3 mb-0">HOVER TO PAUSE <span>·</span> A SELECTION OF PROJECTS &amp; SYSTEMS</p>
      </div>
    </section>
  );
}

function TechnicalArsenal() {
  return (
    <section id="stack" className="stack-section">
      <div className="ambient-glow ambient-glow-emerald" aria-hidden="true" />
      <div className="container section-container mx-auto" style={CONTENT_LAYOUT}>
        <SectionHeading eyebrow="03 / Technical Arsenal" title="Skills." />
        <div className="row g-3">
          {SKILLS_DATA.map(({ title, subtitle, icon: Icon, skills }) => (
            <div className="col-md-6 col-lg-4" key={title}>
              <article className="skill-card h-100">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Icon aria-hidden="true" className="skill-icon" size={21} />
                </div>
                <h3>{title}</h3>
                <p className="skill-subtitle">{subtitle}</p>
                <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
                  {skills.map((skill) => <li className="skill-pill" key={skill}>{skill}</li>)}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .skill-pill {
          transition: border-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
        }
        .skill-pill:hover {
          border-color: rgba(111, 255, 176, 0.72);
          color: #eafff4;
          box-shadow: 0 0 12px rgba(80, 220, 170, 0.2), 0 0 5px rgba(90, 170, 255, 0.16);
        }
      `}</style>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="ambient-glow ambient-glow-blue" aria-hidden="true" />
      <div className="container section-container mx-auto" style={CONTENT_LAYOUT}>
        <SectionHeading eyebrow="04 / Timeline" title="Experience & recognition." />
        <div className="row g-4">
          <div className="col-lg-7">
            <article className="experience-card h-100">
              <div className="timeline-marker" aria-hidden="true" />
              <p className="eyebrow mb-3">PROFESSIONAL EXPERIENCE</p>
              <div className="d-flex flex-column flex-sm-row gap-2">
                <h3>{EXPERIENCE_DATA.role}</h3>
                <span className="experience-period">{EXPERIENCE_DATA.company}</span>
              </div>
              <ul className="experience-copy list-unstyled d-grid gap-3 mb-0">
                {EXPERIENCE_DATA.highlights.map((parts, index) => (
                  <li key={index}>{parts.map((part, partIndex) => partIndex > 0 && (index < 3) ? (
                    <span key={partIndex} style={{ fontFamily: "monospace", color: "#a5d6ff" }}>{part}</span>
                  ) : <span key={partIndex}>{part}</span>)}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="col-lg-5">
            <article className="certification-card h-70">
              <div className="certification-icon"><BadgeCheck size={21} /></div>
              <p className="eyebrow mb-2">CERTIFICATION</p>
              <h3>{CERTIFICATION_DATA.title}</h3>
              <span className="certification-note" style={{ marginRight: "24px", display: "inline-block"}}>{CERTIFICATION_DATA.note}</span>
              <a
                className="credential-link"
                href="https://learn.microsoft.com/en-us/users/deepakn-5288/credentials/73933a5c7082fdeb"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", marginTop: "8px" }}
              >
                Verify Credential ↗
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container section-container mx-auto pb-4" style={CONTENT_LAYOUT}>
        <div className="row align-items-end g-4">
          <div className="col-md-7">
            <p className="eyebrow mb-3">HAVE A PROJECT IN MIND?</p>
            <h2 className="footer-title">Let&apos;s build something <span>reliable.</span></h2>
            <a href={SOCIAL_LINKS.email} className="footer-email">
              <Mail size={17} /> {SOCIAL_LINKS.emailLabel} <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="col-md-5 d-flex flex-wrap gap-3 justify-content-md-end">
            <a className="social-link" href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a className="social-link" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container mx-auto d-flex flex-column flex-sm-row justify-content-between gap-2" style={CONTENT_LAYOUT}>
          <span>© {new Date().getFullYear()}Deepak</span>
          <span>· BUILT WITH NEXT.JS</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="portfolio-shell">
      <Header />
      <Hero />
      <Projects />
      <TechnicalArsenal />
      <Experience />
      <section id="ai-assistant" className="ai-assistant-section" style={{ scrollMarginTop: "6rem" }}>
        <div className="container section-container mx-auto" style={CONTENT_LAYOUT}>
          <SectionHeading eyebrow="05 / Interactive AI Terminal" title="Ask Deepak's AI." />
          <AIAssistant />
        </div>
      </section>
      <Footer />
      <button
        type="button"
        className="ai-quick-launch"
        onClick={() => {
          const section = document.getElementById("ai-assistant");
          const input = section?.querySelector<HTMLElement>("input, textarea, [contenteditable='true']");
          section?.scrollIntoView({ behavior: "smooth", block: "start" });
          window.setTimeout(() => input?.focus({ preventScroll: true }), 450);
        }}
        aria-label="Scroll to and focus the AI assistant"
      >
        <span className="ai-quick-launch-dot" aria-hidden="true" />
        Ask Deepak&apos;s AI ✦
      </button>
      <style jsx global>{`
        :global(html),
        :global(body) {
          min-height: 100%;
          background-color: #090b0a;
        }
        .portfolio-shell {
          position: relative;
          isolation: isolate;
          min-height: 100vh;
          background-color: #090b0a;
          background-image:
            radial-gradient(ellipse at center, transparent 20%, #090b0a 100%),
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: auto, 48px 48px, 48px 48px;
          background-attachment: fixed;
        }
        .portfolio-shell > section {
          position: relative;
          isolation: isolate;
        }
        .portfolio-shell > section > :not(.ambient-glow) {
          position: relative;
          z-index: 1;
        }
        .ai-quick-launch {
          position: fixed;
          right: 1.5rem;
          bottom: 1.5rem;
          z-index: 50;
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.85rem 1.1rem;
          border: 1px solid rgba(140, 255, 112, 0.42);
          border-radius: 999px;
          background: rgba(12, 16, 14, 0.94);
          color: #dfffd6;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.42), 0 0 18px rgba(140, 255, 112, 0.12);
          font-family: monospace;
          font-size: 0.82rem;
          cursor: pointer;
          backdrop-filter: blur(12px);
        }
        .ai-quick-launch:hover,
        .ai-quick-launch:focus-visible {
          border-color: #8cff70;
          box-shadow: 0 0 22px rgba(140, 255, 112, 0.24);
          outline: none;
        }
        .ai-quick-launch-dot {
          width: 0.5rem;
          height: 0.5rem;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #8cff70;
          box-shadow: 0 0 10px rgba(140, 255, 112, 0.8);
          animation: ai-dot-pulse 1.6s ease-in-out infinite;
        }
        @keyframes ai-dot-pulse {
          50% { opacity: 0.45; box-shadow: 0 0 3px rgba(140, 255, 112, 0.4); }
        }
        @media (max-width: 575.98px) {
          .ai-quick-launch { right: 1rem; bottom: 1rem; }
        }
        .ambient-glow {
          position: absolute;
          z-index: 0;
          top: 8%;
          width: min(34rem, 85vw);
          height: min(34rem, 85vw);
          border-radius: 50%;
          filter: blur(3rem);
          opacity: 0.06;
          pointer-events: none;
        }
        .ambient-glow-emerald {
          left: -10rem;
          background: radial-gradient(circle, #10b981 0%, transparent 70%);
        }
        .ambient-glow-blue {
          right: -10rem;
          background: radial-gradient(circle, #3b82f6 0%, transparent 70%);
        }
        .project-card,
        .skill-card,
        .certification-card {
          background: rgba(15, 19, 17, 0.8) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          backdrop-filter: blur(12px);
          transition: border-color 180ms ease;
        }
        .project-card:hover,
        .skill-card:hover,
        .certification-card:hover {
          border-color: rgba(16, 185, 129, 0.3) !important;
        }
        .credential-link {
          display: inline-block;
          width: fit-content;
          margin-top: 1rem;
          color: #8cff70;
          font-family: monospace;
          font-size: 0.82rem;
          text-decoration: none;
          transition: color 180ms ease, text-shadow 180ms ease;
        }
        .credential-link:hover,
        .credential-link:focus-visible {
          color: #c0ffb0;
          text-shadow: 0 0 10px rgba(140, 255, 112, 0.55);
        }
      `}</style>
    </main>
  );
}
