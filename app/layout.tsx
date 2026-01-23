import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";

export const metadata: Metadata = {
  title: "MUI Components Showcase",
  description: "Material-UI Components and Variants Showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
