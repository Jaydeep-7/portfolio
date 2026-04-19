import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Writing() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="writing" className="border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <p className="section-label">Writing</p>
            <h2 className="section-heading">Playbooks for teams and product builders</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted
                       hover:text-ink transition-colors duration-150"
          >
            Browse all posts
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ul className="divide-y divide-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-baseline justify-between gap-6 py-5
                           hover:text-accent transition-colors duration-150"
              >
                <div>
                  <h3 className="font-medium text-ink group-hover:text-accent transition-colors duration-150">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted mt-1 leading-snug">{post.summary}</p>
                </div>
                <time
                  dateTime={post.date}
                  className="text-xs font-mono text-muted shrink-0"
                >
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                  })}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
