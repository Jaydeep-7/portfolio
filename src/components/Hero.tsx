import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden max-w-3xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-12 h-44 w-44 rounded-full border border-zinc-300/70 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.24),transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-44 h-24 w-24 rotate-12 rounded-2xl border border-zinc-300/70 bg-[linear-gradient(140deg,rgba(245,158,11,0.16),rgba(6,182,212,0.06))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-12 hidden h-44 rounded-3xl border border-zinc-200/70 [mask-image:linear-gradient(to_bottom,black,transparent)] md:block"
      />

      {/* Available badge */}
      <div className="inline-flex items-center gap-2 text-xs font-mono text-muted mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        Open to full-time roles and startup collaborations
      </div>

      <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted/90 mb-4">
        For hiring teams / founders / product builders
      </p>

      {/* Name */}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink !leading-snug mb-4">
        Jaydeep Sindhav
      </h1>

      {/* Role */}
      <p className="font-display text-xl md:text-2xl text-muted font-medium mb-6">
        Frontend Engineer delivering product quality with startup speed
      </p>

      {/* Bio */}
      <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl mb-10">
        I build reliable interfaces with{" "}
        <span className="text-ink font-medium">React</span>,{" "}
        <span className="text-ink font-medium">Next.js</span>, and{" "}
        <span className="text-ink font-medium">TypeScript</span>. Recruiters get clear
        execution and ownership; founders and clients get pragmatic product delivery from
        MVP to scalable production.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3">
        <a href="#projects" className="btn-primary">
          See projects
          <ArrowRightIcon className="w-4 h-4" />
        </a>
        <Link href="/blog" className="btn-secondary">
          Read notes
        </Link>
      </div>
    </section>
  );
}
