# claude-harness

Deconstructing Claude Code — interactive source code analysis and guided walkthroughs.

## Getting Started

```bash
pnpm install
pnpm generate
pnpm dev
```

## Structure

- `packages/claude-code-source/` — Original Claude Code source (read-only archive)
- `packages/scripts/` — Auto-generation scripts for module metadata
- `packages/web/` — Next.js site with articles and code browser
- `content/articles/` — MDX guide articles
