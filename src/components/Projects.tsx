import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import type { Project } from "@/types";

function safeHref(url: string): string | undefined {
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
    title: "Project One",
    description:
      "A full-stack web application with user authentication, real-time updates, and responsive design. Built with a focus on performance and developer experience.",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
    githubUrl: "https://github.com/Jaydeep-7/project1",
    liveUrl: "https://project1.com",
    featured: true,
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "An e-commerce platform with product search, cart management, and secure payment processing via Stripe.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/Jaydeep-7/project2",
    liveUrl: "https://project2.com",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A real-time dashboard with live data visualisation, dark mode, and customisable widgets.",
    technologies: ["React", "D3.js", "WebSockets", "Zustand"],
    githubUrl: "https://github.com/Jaydeep-7/project3",
    liveUrl: "https://project3.com",
  },
  {
    id: 4,
    title: "Project Four",
    description:
      "A CLI tool that auto-generates TypeScript types from REST API responses.",
    technologies: ["Node.js", "TypeScript", "Yargs"],
    githubUrl: "https://github.com/Jaydeep-7/project4",
    liveUrl: "https://project4.com",
  },
  {
    id: 5,
    title: "Project Five",
    description:
      "An open-source design system with accessible React components and Storybook documentation.",
    technologies: ["React", "Storybook", "Radix UI", "Tailwind CSS"],
    githubUrl: "https://github.com/Jaydeep-7/project5",
    liveUrl: "https://project5.com",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-display font-semibold text-ink text-base">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-[10px] font-mono text-accent bg-accent-light border border-indigo-100 px-1.5 py-0.5 rounded">
              Featured
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <a
            href={safeHref(project.githubUrl)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            className="p-1.5 text-muted hover:text-ink transition-colors duration-200 rounded"
          >
            <CodeBracketIcon className="w-4 h-4" />
          </a>
          <a
            href={safeHref(project.liveUrl)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="p-1.5 text-muted hover:text-ink transition-colors duration-200 rounded"
          >
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <p className="text-sm text-muted leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="section-label">Work</p>
        <h2 className="section-heading mb-10">Selected projects</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
