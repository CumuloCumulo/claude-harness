import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This will only be called during build time for static export
  let locale = await requestLocale;

  // Ensure locale is valid
  if (!locale || !routing.locales.includes(locale as "en" | "zh" | "ja")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
}) satisfies ReturnType<typeof getRequestConfig>;
