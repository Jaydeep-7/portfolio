export default function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="section-label">About</p>

        <div className="space-y-5 text-muted leading-relaxed text-base md:text-lg max-w-2xl">
          <p>
            I&apos;m a{" "}
            <span className="text-ink font-medium">Frontend Developer</span> with 2.5 years
            of professional experience building responsive, accessible web applications.
          </p>
          <p>
            My focus is the intersection of engineering precision and thoughtful design —
            pixel-perfect implementations, optimised rendering, and component architectures
            that scale. My primary tools are{" "}
            <span className="font-mono text-ink text-sm">TypeScript</span>,{" "}
            <span className="font-mono text-ink text-sm">React</span>, and{" "}
            <span className="font-mono text-ink text-sm">Next.js</span>.
          </p>
          <p>
            Based in Ahmedabad, India. B.Tech in Information Technology from Silver Oak
            University. Open to remote roles.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-10">
          {[
            { value: "2.5+", label: "Years experience" },
            { value: "20+",  label: "Projects shipped" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-2xl font-bold text-ink">{value}</p>
              <p className="text-sm text-muted font-mono mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
