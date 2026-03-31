import Link from "next/link";

interface ModuleCardProps {
  name: string;
  path: string;
  fileCount: number;
  lineCount: number;
  description: string;
}

export function ModuleCard({ name, path, fileCount, lineCount, description }: ModuleCardProps) {
  return (
    <Link
      href={`/code/${path}`}
      className="block rounded-lg border border-[var(--border)] p-4 hover:border-[var(--accent)] transition-colors"
    >
      <h3 className="font-mono font-semibold text-[var(--accent)]">{name}/</h3>
      {description && <p className="mt-1 text-sm text-neutral-400">{description}</p>}
      <div className="mt-3 flex gap-4 text-xs text-neutral-500">
        <span>{fileCount} files</span>
        <span>{lineCount.toLocaleString()} lines</span>
      </div>
    </Link>
  );
}
