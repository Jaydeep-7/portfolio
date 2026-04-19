const SOCIAL_LINKS = [
  { label: "GitHub",     href: "https://github.com/Jaydeep-7" },
  { label: "LinkedIn",   href: "https://linkedin.com/in/jaydeepsindhav" },
  { label: "Twitter / X", href: "https://twitter.com/jaydeepsindhav" },
];

export default function Contact() {
  return (
    <section id="connect" className="border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="section-label">Connect</p>
        <h2 className="section-heading mb-4">Hiring or building? Let&apos;s talk.</h2>

        <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mb-10">
          Whether you&apos;re a recruiter hiring for a frontend role or a founder/client launching
          a product, I can help you move from idea to high-quality execution. I usually reply
          within 24 hours.
        </p>

        {/* Email */}
        <div className="mb-10">
          <a
            href="mailto:jaydeep.sindhav.03@gmail.com"
            className="inline-flex items-center gap-2 text-ink font-medium text-base
                       border-b border-ink pb-0.5 hover:text-accent hover:border-accent
                       transition-colors duration-200"
          >
            jaydeep.sindhav.03@gmail.com
          </a>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2 text-sm text-muted font-mono mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Open to full-time roles, startup builds, and selective consulting work
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-muted hover:text-ink
                         transition-colors duration-200 underline underline-offset-4"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
