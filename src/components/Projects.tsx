import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import type { Project } from "@/types";

export function safeHref(url: string): string | undefined {
  try {
    const { protocol } = new URL(url);
    return protocol === "https:" || protocol === "http:" ? url : undefined;
  } catch {
    return undefined;
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: "PulseBoard Analytics",
    role: "Frontend architecture",
    year: "2026",
    snapshot: "A modular analytics workspace built to support fast-moving SaaS teams.",
    description:
      "Built a full-stack analytics interface with secure authentication, live data updates, and reusable dashboard patterns. Structured the frontend for both rapid iteration and long-term maintainability.",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
    githubUrl: "https://github.com/Jaydeep-7/project1",
    liveUrl: "https://project1.com",
    featured: true,
  },
  {
    id: 2,
    title: "CheckoutFlow Commerce",
    role: "Product engineering",
    year: "2025",
    snapshot: "A commerce frontend focused on conversion clarity and checkout trust.",
    description:
      "Developed an e-commerce frontend with smart filtering, cart persistence, and secure Stripe checkout. Balanced business goals with UX clarity across mobile and desktop buying journeys.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/Jaydeep-7/project2",
    liveUrl: "https://project2.com",
  },
  {
    id: 3,
    title: "OpsLens Realtime Monitor",
    role: "Data visualization",
    year: "2025",
    snapshot: "Realtime monitoring dashboard for faster team response and decision-making.",
    description:
      "Created a live monitoring dashboard with streaming updates, customizable data cards, and interaction states designed for quick decision-making under pressure.",
    technologies: ["React", "D3.js", "WebSockets", "Zustand"],
    githubUrl: "https://github.com/Jaydeep-7/project3",
    liveUrl: "https://project3.com",
  },
  {
    id: 4,
    title: "TypeForge CLI",
    role: "Developer tooling",
    year: "2024",
    snapshot: "Developer CLI that accelerates integrations using generated TypeScript contracts.",
    description:
      "Built a developer CLI that converts REST responses into typed contracts and reusable interfaces. It reduced ambiguity between frontend and backend implementation.",
    technologies: ["Node.js", "TypeScript", "Yargs"],
    githubUrl: "https://github.com/Jaydeep-7/project4",
    liveUrl: "https://project4.com",
  },
  {
    id: 5,
    title: "Northstar Design System",
    role: "Design systems",
    year: "2024",
    snapshot: "Accessible UI primitives backed by shared tokens, standards, and practical docs.",
    description:
      "Designed and documented a reusable component system with accessibility-first defaults, tokenized styling decisions, and Storybook workflows that improved team consistency.",
    technologies: ["React", "Storybook", "Radix UI", "Tailwind CSS"],
    githubUrl: "https://github.com/Jaydeep-7/project5",
    liveUrl: "https://project5.com",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const sourceHref = safeHref(project.githubUrl);
  const liveHref = safeHref(project.liveUrl);

  return (
    <article className="card h-full group">
      <div className="rounded-lg border border-border bg-gradient-to-br from-white to-zinc-100 p-4 mb-4">
        <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted mb-2">
          {project.featured ? "Featured build" : "Case study"}
        </p>
        <p className="text-sm text-ink leading-relaxed">
          {project.snapshot ?? project.description}
        </p>
      </div>

      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-display font-semibold text-ink text-base md:text-lg">
            {project.title}
          </h3>

          {(project.role || project.year) && (
            <p className="text-xs font-mono text-muted mt-1">
              {[project.role, project.year].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>

        {project.featured && (
          <span className="shrink-0 text-[10px] font-mono text-accent bg-accent-light border border-indigo-100 px-1.5 py-0.5 rounded">
            Featured
          </span>
        )}
      </div>

      <p className="text-sm text-muted leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {sourceHref && (
          <a
            href={sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-border px-2.5 text-xs font-mono text-muted hover:text-ink hover:border-zinc-400 transition-colors duration-200"
          >
            Source
            <CodeBracketIcon className="w-4 h-4" />
          </a>
        )}

        {liveHref && (
          <a
            href={liveHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-border px-2.5 text-xs font-mono text-muted hover:text-ink hover:border-zinc-400 transition-colors duration-200"
          >
            Live demo
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="section-label">Work</p>
        <h2 className="section-heading mb-3">Selected projects</h2>
        <p className="text-muted text-sm md:text-base max-w-xl mb-10">
          A mix of production work and startup-style execution. These case studies show how I balance user experience, technical quality, and delivery speed.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.id} className={project.featured ? "sm:col-span-2" : ""}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
