export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  size?: "large" | "medium" | "small";
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools";
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
}
