import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4 pt-12">
        <h1 className="text-4xl font-bold">claude-harness</h1>
        <p className="max-w-2xl text-lg text-neutral-400">
          Deconstructing Anthropic&apos;s Claude Code CLI — interactive source code analysis,
          architecture walkthroughs, and guided deep dives into ~1,900 files and 512,000+ lines
          of TypeScript.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        <Link
          href="/articles"
          className="rounded-lg border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors"
        >
          <h2 className="font-semibold mb-2">Articles</h2>
          <p className="text-sm text-neutral-400">Guided walkthroughs by module and topic</p>
        </Link>
        <Link
          href="/code"
          className="rounded-lg border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors"
        >
          <h2 className="font-semibold mb-2">Code Browser</h2>
          <p className="text-sm text-neutral-400">Browse the full source with syntax highlighting</p>
        </Link>
        <Link
          href="/modules"
          className="rounded-lg border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors"
        >
          <h2 className="font-semibold mb-2">Module Index</h2>
          <p className="text-sm text-neutral-400">Statistics and overview of every module</p>
        </Link>
      </section>
    </div>
  );
}
