import moduleStats from "../../../../generated/module-stats.json";
import ModulesClient from "./ModulesClient";

// 为静态导出生成所有 locale 的页面
export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "zh" },
    { locale: "ja" },
  ];
}

export const dynamic = "force-static";

export default function ModulesPage() {
  return <ModulesClient modules={moduleStats} />;
}
