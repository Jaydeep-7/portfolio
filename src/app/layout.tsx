import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Jaydeep Sindhav — Frontend Developer",
  description:
    "Frontend Developer helping hiring teams and startup founders ship fast, accessible, production-ready web products with React, Next.js, and TypeScript.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Jaydeep Sindhav",
    "Portfolio",
  ],
  authors: [{ name: "Jaydeep Sindhav", url: "https://portfolio.jaydeepsindhav.me" }],
  openGraph: {
    title: "Jaydeep Sindhav — Frontend Developer",
    description:
      "Frontend Developer helping teams and founders ship fast, accessible, production-ready web products.",
    url: "https://portfolio.jaydeepsindhav.me",
    siteName: "Jaydeep Sindhav",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaydeep Sindhav — Frontend Developer",
    description: "Frontend Developer helping teams and founders ship fast, accessible, production-ready web products.",
    creator: "@jaydeepsindhav",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-page text-ink font-sans antialiased">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
