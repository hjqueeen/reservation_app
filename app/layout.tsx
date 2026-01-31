import type { Viewport } from "next";
import "./globals.css";
import LangFromPath from "./_components/LangFromPath";
import { defaultLocale, getHtmlLang } from "./_config/metadata";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF8C00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={getHtmlLang(defaultLocale)} suppressHydrationWarning>
      <body className="antialiased">
        <LangFromPath />
        {children}
      </body>
    </html>
  );
}
