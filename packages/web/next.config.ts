import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { resolve } from "path";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  transpilePackages: ["@claude-harness/source"],
  // Include monorepo content directory in serverless function file tracing
  outputFileTracingRoot: resolve(__dirname, "../../"),
  // Include content files in serverless bundle
  outputFileTracingIncludes: {
    "/[locale]/articles/[slug]": ["../../content/articles/**/*.mdx"],
    "/[locale]/articles": ["../../content/articles/**/*.mdx"],
  },
};

export default withNextIntl(nextConfig);
