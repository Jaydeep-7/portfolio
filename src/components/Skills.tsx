const SKILLS = {
  Frontend: [
    "HTML5", "CSS3", "JavaScript (ES2024)", "TypeScript", "React",
    "Next.js", "Framer Motion", "Tailwind CSS", "Redux Toolkit", "React Query",
  ],
  Backend: [
    "Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB",
    "Prisma", "tRPC",
  ],
  Tools: [
    "Git & GitHub", "Vite", "Webpack", "Docker", "Figma",
    "VS Code", "Vercel", "Postman",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="section-label">Toolkit</p>
        <h2 className="section-heading mb-10">Skills &amp; technologies</h2>

        <div className="space-y-8">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xs font-mono text-muted uppercase tracking-widest mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono text-ink bg-surface
                               border border-border rounded-lg hover:border-zinc-300
                               transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
