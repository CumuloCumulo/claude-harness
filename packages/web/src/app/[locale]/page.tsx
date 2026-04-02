import { getArticleList } from "@/lib/articles";
import moduleStats from "../../../generated/module-stats.json";
import sourceSummary from "../../../generated/source-summary.json";
import HomeClient from "./HomeClient";

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

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const articles = await getArticleList(locale);
  return <HomeClient locale={locale} articles={articles} moduleStats={moduleStats} sourceSummary={sourceSummary} />;
}
