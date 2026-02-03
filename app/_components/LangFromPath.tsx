"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getHtmlLang, isValidLocale, defaultLocale } from "../_config/metadata";

/**
 * Sets document.documentElement.lang from the first path segment (locale).
 * Used when the app is under [locale] routes.
 */
export default function LangFromPath() {
  const pathname = usePathname();
  useEffect(() => {
    const segment = pathname?.split("/")[1];
    const lang = segment && isValidLocale(segment)
      ? getHtmlLang(segment as "de" | "en" | "ko")
      : getHtmlLang(defaultLocale);
    document.documentElement.lang = lang;
  }, [pathname]);
  return null;
}
