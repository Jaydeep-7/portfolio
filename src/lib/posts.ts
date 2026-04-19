import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: String(data.title ?? ""),
      date: String(data.date ?? ""),
      summary: String(data.summary ?? ""),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): { frontmatter: BlogPost; content: string } | null {
  if (!SLUG_RE.test(slug)) return null;

  const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);

  return {
    frontmatter: {
      slug,
      title: String(data.title ?? ""),
      date: String(data.date ?? ""),
      summary: String(data.summary ?? ""),
    },
    content,
  };
}
