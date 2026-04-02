import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { existsSync } from "node:fs";

const ROOT = resolve(import.meta.dirname, "../../..");
const SOURCE_DIR = resolve(ROOT, "packages/claude-code-source/src");
const OUTPUT_DIR = resolve(ROOT, "packages/web/public/source");

export async function copySourceFiles() {
  if (!existsSync(SOURCE_DIR)) {
    console.log(`Source directory not found: ${SOURCE_DIR}`);
    console.log("Skipping source files generation...");
    return;
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  await cp(SOURCE_DIR, OUTPUT_DIR, { recursive: true });

  console.log(`Done! Source files copied to ${OUTPUT_DIR}`);
}

async function main() {
  await copySourceFiles();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
