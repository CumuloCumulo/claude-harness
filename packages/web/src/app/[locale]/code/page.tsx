import fileTree from "../../../../generated/file-tree.json";
import CodeBrowserClient from "./CodeBrowserClient";

interface TreeNode {
  name: string;
  path: string;
  type: "directory" | "file";
  children?: TreeNode[];
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

export default function CodePage() {
  return <CodeBrowserClient tree={fileTree as TreeNode[]} />;
}
