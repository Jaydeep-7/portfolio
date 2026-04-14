import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-3xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32"
    >
      {/* Available badge */}
      <div className="inline-flex items-center gap-2 text-xs font-mono text-muted mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        Available for new opportunities
      </div>

      {/* Name */}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink !leading-snug mb-4">
        Jaydeep Sindhav
      </h1>

      {/* Role */}
      <p className="font-display text-xl md:text-2xl text-muted font-medium mb-6">
        Frontend Developer
      </p>

      {/* Bio */}
      <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl mb-10">
        I build precise, accessible UIs with{" "}
        <span className="text-ink font-medium">React</span>,{" "}
        <span className="text-ink font-medium">Next.js</span>, and{" "}
        <span className="text-ink font-medium">TypeScript</span>.
        Focused on clean architecture, readable code, and interfaces that just work.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3">
        <a href="#projects" className="btn-primary">
          View work
          <ArrowRightIcon className="w-4 h-4" />
        </a>
        <Link href="/blog" className="btn-secondary">
          Read blog
        </Link>
      </div>
    </section>
  );
}
