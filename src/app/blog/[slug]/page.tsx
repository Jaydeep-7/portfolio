import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} — Jaydeep Sindhav`,
    description: post.frontmatter.summary,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted
                   hover:text-ink transition-colors duration-150 mb-10"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        All posts
      </Link>

      {/* Header */}
      <header className="mb-12">
        <time
          dateTime={frontmatter.date}
          className="text-xs font-mono text-muted block mb-4"
        >
          {new Date(frontmatter.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-ink !leading-snug mb-4">
          {frontmatter.title}
        </h1>
        <p className="text-muted text-lg leading-relaxed">{frontmatter.summary}</p>
      </header>

      <hr className="border-border mb-10" />

      {/* Content */}
      <div className="prose-editorial">
        <MDXRemote
          source={content}
          components={{
            script: () => null,
            iframe: () => null,
            object: () => null,
            embed: () => null,
          }}
        />
      </div>
    </article>
  );
}
