import type { Metadata } from "next";

export const locales = ["de", "en", "ko"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

const metadataByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string[];
    openGraphLocale: string;
    htmlLang: string;
  }
> = {
  de: {
    title: "GastroSoftware | Restaurant-Bestellung & Küchenverwaltung",
    description:
      "GastroSoftware Web-App: Speisekarte anzeigen, Bestellungen aufgeben, Küchenbestellungen verwalten. Webservice für die Restaurantführung mit Anbindung an die mobile App.",
    keywords: [
      "GastroSoftware",
      "Restaurant",
      "Bestellung",
      "Küche",
      "Speisekarte",
      "Menü",
      "restaurant",
      "order",
      "kitchen",
    ],
    openGraphLocale: "de_DE",
    htmlLang: "de",
  },
  en: {
    title: "GastroSoftware | Restaurant Orders & Kitchen Management",
    description:
      "GastroSoftware web app: view menu, place orders, manage kitchen orders. Web service for restaurant operations with mobile app integration.",
    keywords: [
      "GastroSoftware",
      "restaurant",
      "order",
      "kitchen",
      "menu",
      "food",
      "ordering",
    ],
    openGraphLocale: "en_US",
    htmlLang: "en",
  },
  ko: {
    title: "GastroSoftware | 식당 주문·키친 관리",
    description:
      "GastroSoftware 웹앱 - 식당 메뉴 조회, 주문, 키친 주문 관리. 모바일 앱과 연동되는 식당 운영 웹 서비스입니다.",
    keywords: [
      "GastroSoftware",
      "식당",
      "주문",
      "키친",
      "메뉴",
      "레스토랑",
      "restaurant",
      "order",
      "kitchen",
    ],
    openGraphLocale: "ko_KR",
    htmlLang: "ko",
  },
};

export function getMetadataForLocale(locale: Locale): Metadata {
  const config = metadataByLocale[locale];
  const baseUrl =
    typeof process.env.NEXT_PUBLIC_APP_URL === "string"
      ? process.env.NEXT_PUBLIC_APP_URL
      : undefined;

  return {
    title: {
      default: config.title,
      template: "%s | GastroSoftware",
    },
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: "GastroSoftware" }],
    creator: "GastroSoftware",
    publisher: "GastroSoftware",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    ...(baseUrl && { metadataBase: new URL(baseUrl) }),
    openGraph: {
      type: "website",
      locale: config.openGraphLocale,
      url: "/",
      siteName: "GastroSoftware",
      title: config.title,
      description: config.description,
    },
    twitter: {
      card: "summary",
      title: config.title,
      description: config.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
    category: "food",
    alternates: {
      languages: Object.fromEntries(
        locales.map((loc) => [metadataByLocale[loc].htmlLang, `/${loc}`])
      ) as Record<string, string>,
    },
  };
}

export function getHtmlLang(locale: Locale): string {
  return metadataByLocale[locale].htmlLang;
}

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
