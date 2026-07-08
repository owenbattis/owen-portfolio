import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SiteLayout from "@/components/layout/SiteLayout";
import PageTransition from "@/components/layout/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Owen Battis | Strategic Marketing Graduate",
  description:
    "Portfolio of Owen Battis showcasing marketing strategy, business projects, and AI automation experience.",
  openGraph: {
    title: "Owen Battis | Strategic Marketing Graduate",
    description:
      "Strategy, creativity, and global perspective.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Owen Battis | Strategic Marketing Graduate",
    description: "Strategy, creativity, and global perspective.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0d0d0f] text-white">
        <SiteLayout>
          <PageTransition>{children}</PageTransition>
        </SiteLayout>
      </body>
    </html>
  );
}
