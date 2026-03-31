import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const SOURCE_ROOT = resolve(process.cwd(), "../claude-code-source/src");

export async function readSourceFile(filePath: string): Promise<string> {
  const fullPath = resolve(SOURCE_ROOT, filePath);
  // Prevent path traversal
  if (!fullPath.startsWith(SOURCE_ROOT)) {
    throw new Error("Invalid path");
  }
  return readFile(fullPath, "utf-8");
}
