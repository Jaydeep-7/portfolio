import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Jaydeep Sindhav",
  description: "Practical notes on frontend engineering, product execution, and TypeScript patterns for teams and startup builders.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <header className="mb-14">
        <p className="section-label">Writing</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-ink !leading-snug">
          Frontend lessons for shipping better products
        </h1>
        <p className="text-muted mt-3 text-base">
          Practical notes on frontend engineering, product decisions, and TypeScript patterns from real-world builds.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted text-sm font-mono">No posts yet — check back soon.</p>
      ) : (
        <ul className="divide-y divide-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-baseline justify-between gap-6 py-5
                           hover:text-accent transition-colors duration-150"
              >
                <div>
                  <h2 className="font-medium text-ink group-hover:text-accent transition-colors duration-150">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted mt-1 leading-snug">{post.summary}</p>
                </div>
                <time
                  dateTime={post.date}
                  className="text-xs font-mono text-muted shrink-0"
                >
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
