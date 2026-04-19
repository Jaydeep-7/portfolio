export default function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="section-label">About</p>

        <div className="space-y-5 text-muted leading-relaxed text-base md:text-lg max-w-2xl">
          <p>
            I&apos;m a{" "}
            <span className="text-ink font-medium">Frontend Developer</span> with 2.5+ years
            of experience shipping customer-facing products, internal platforms, and scalable
            interface systems.
          </p>
          <p>
            I work where design clarity meets engineering discipline: semantic UI, resilient
            component APIs, and performance-first decisions. My core stack is{" "}
            <span className="font-mono text-ink text-sm">TypeScript</span>,{" "}
            <span className="font-mono text-ink text-sm">React</span>, and{" "}
            <span className="font-mono text-ink text-sm">Next.js</span>.
          </p>
          <p>
            For hiring teams, I bring dependable execution, communication, and long-term
            maintainability. For founders and clients, I bring speed, product thinking, and
            practical trade-off decisions that keep momentum high.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-10">
          {[
            { value: "2.5+", label: "Years in production teams" },
            { value: "20+",  label: "Product features delivered" },
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
