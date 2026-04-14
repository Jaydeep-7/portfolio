export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted font-mono">
          &copy; {year} Jaydeep Sindhav
        </p>
        <div className="flex items-center gap-5">
          {[
            { label: "GitHub",   href: "https://github.com/Jaydeep-7" },
            { label: "LinkedIn", href: "https://linkedin.com/in/jaydeepsindhav" },
            { label: "X",        href: "https://twitter.com/jaydeepsindhav" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-muted hover:text-ink transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
