import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import matter from "gray-matter";

const ARTICLES_DIR = resolve(process.cwd(), "../../content/articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  order: number;
}

export async function getArticleList(): Promise<ArticleMeta[]> {
  const files = await readdir(ARTICLES_DIR);
  const articles: ArticleMeta[] = [];

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    const raw = await readFile(resolve(ARTICLES_DIR, file), "utf-8");
    const { data } = matter(raw);
    articles.push({
      slug: file.replace(/\.mdx$/, ""),
      title: data.title || file,
      description: data.description || "",
      order: data.order ?? 999,
    });
  }

  return articles.sort((a, b) => a.order - b.order);
}

export async function getArticle(slug: string): Promise<{ meta: ArticleMeta; content: string }> {
  const filePath = resolve(ARTICLES_DIR, `${slug}.mdx`);
  // Prevent path traversal
  if (!filePath.startsWith(ARTICLES_DIR)) {
    throw new Error("Invalid slug");
  }
  const raw = await readFile(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title || slug,
      description: data.description || "",
      order: data.order ?? 999,
    },
    content,
  };
}
