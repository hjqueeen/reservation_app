"use client";

import { usePathname } from "next/navigation";
import { defaultLocale, isValidLocale, type Locale } from "../_config/metadata";

/**
 * Returns the current locale from the URL path (first segment).
 * Use only inside app/[locale]/... routes.
 */
export function useLocale(): Locale {
  const pathname = usePathname();
  const segment = pathname?.split("/")[1];
  if (segment && isValidLocale(segment)) {
    return segment as Locale;
  }
  return defaultLocale;
}
