import type { Metadata, Viewport } from "next";
import { Inter, Syne, Fira_Code } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Jaydeep Sindhav — Frontend Developer",
  description:
    "Portfolio of Jaydeep Sindhav — Frontend Developer specialising in React, Next.js, and TypeScript.",
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
      "Frontend Developer specialising in React, Next.js, and TypeScript.",
    url: "https://portfolio.jaydeepsindhav.me",
    siteName: "Jaydeep Sindhav",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaydeep Sindhav — Frontend Developer",
    description: "Frontend Developer specialising in React, Next.js, and TypeScript.",
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
      className={`${inter.variable} ${syne.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-page text-ink font-sans antialiased">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
