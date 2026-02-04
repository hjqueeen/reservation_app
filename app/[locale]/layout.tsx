import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClientWrapper from "../_components/ClientWrapper";
import {
  getMetadataForLocale,
  isValidLocale,
  locales,
  type Locale,
} from "../_config/metadata";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    return {};
  }
  return getMetadataForLocale(locale as Locale);
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }
  return <ClientWrapper>{children}</ClientWrapper>;
}
