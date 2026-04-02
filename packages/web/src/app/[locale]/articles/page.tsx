import { getArticleList } from "@/lib/articles";
import ArticlesClient from "./ArticlesClient";

interface Props {
  params: Promise<{ locale: string }>;
}

// 为静态导出生成所有 locale 的页面
export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "zh" },
    { locale: "ja" },
  ];
}

export const dynamic = "force-static";

export default async function ArticlesPage({ params }: Props) {
  const { locale } = await params;
  const articles = await getArticleList(locale);
  return <ArticlesClient locale={locale} articles={articles} />;
}
