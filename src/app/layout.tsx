import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import Spotlight from "@/components/ui/Spotlight";
import LiquidBackground from '@/components/3d/LiquidBackground'
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { PageTransition } from "@/components/transitions/PageTransition";
import { ThemeCustomizer } from "@/components/ui/ThemeCustomizer";
import * as loggerModule from "@/logger";

/**
 * Google Font configuration for Fira Code.
 * Subsets: latin
 * Weights: 400 (Regular), 500 (Medium), 700 (Bold)
 */
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: 'swap',
  weight: ['400', '500', '700']
});

const siteUrl = "https://nileshkowe.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Nilesh Kowe - Software Developer & AI/ML Engineer",
    template: "%s | Nilesh Kowe",
  },
  description:
    "Portfolio of Nilesh Kowe — Software Developer at Pixonate with 1.6 years of experience building full-stack web applications and AI/ML solutions.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Nilesh Kowe",
    title: "Nilesh Kowe - Software Developer & AI/ML Engineer",
    description:
      "Software Developer at Pixonate building full-stack web applications and AI/ML solutions with React, Next.js, and Python.",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Nilesh Kowe - Software Developer & AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nilesh Kowe - Software Developer & AI/ML Engineer",
    description:
      "Software Developer at Pixonate building full-stack web applications and AI/ML solutions.",
    creator: "@nilesh_kowe",
    images: ["/images/hero-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  loggerModule.info("Application root layout rendering");
  return (
    <html lang="en" className={`${firaCode.className} bg-[#282C33] text-[#ABB2BF]`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nilesh Kowe",
              url: siteUrl,
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "Pixonate",
                url: "https://pixonate.com",
              },
              sameAs: [
                "https://github.com/nileshkowe",
                "https://www.linkedin.com/in/nilesh-kowe-618735204/",
                "https://x.com/nilesh_kowe",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "AI/ML",
                "Full-Stack Development",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#282C33] text-[#ABB2BF]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Spotlight />
        <LiquidBackground />
        <MagneticCursor />
        <Header />
        <PageTransition>
          <main id="main-content" className="min-h-screen">{children}</main>
        </PageTransition>
        <Footer />
        <ThemeCustomizer />
      </body>
    </html>
  );
}
