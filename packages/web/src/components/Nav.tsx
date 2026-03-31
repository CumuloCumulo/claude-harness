import Link from "next/link";

export function Nav() {
  return (
    <nav className="border-b border-[var(--border)] px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="text-lg font-bold text-[var(--accent)]">
          claude-harness
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/articles" className="hover:text-[var(--accent)]">Articles</Link>
          <Link href="/code" className="hover:text-[var(--accent)]">Code</Link>
          <Link href="/modules" className="hover:text-[var(--accent)]">Modules</Link>
        </div>
      </div>
    </nav>
  );
}
