import "@/app/globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { RouteTransition } from "@/components/providers/route-transition";
import { cairo } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "عسل",
    "عسل فاخر",
    "عسل سدر",
    "عسل طلح",
    "منتجات طبيعية",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body className={`${cairo.variable} bg-background font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <RouteTransition>{children}</RouteTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
