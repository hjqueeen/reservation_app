import { NextRequest, NextResponse } from "next/server";

const locales = ["de", "en", "ko"] as const;
const defaultLocale = "de";

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;
  const preferred = acceptLanguage
    .split(",")
    .map((s) => s.split(";")[0].trim().slice(0, 2).toLowerCase());
  for (const loc of preferred) {
    if (locales.includes(loc as (typeof locales)[number])) return loc;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const firstSegment = pathname.split("/")[1];

  if (locales.includes(firstSegment as (typeof locales)[number])) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const newUrl = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url);
  newUrl.search = request.nextUrl.search;
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|api).*)",
  ],
};
