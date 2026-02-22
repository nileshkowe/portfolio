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

/**
 * Metadata for the portfolio website.
 * Title and description can be customized.
 */
export const metadata: Metadata = {
  title: "Nilesh - Software & AI/ML Engineer Portfolio",
  description: "Personal portfolio of Nilesh, showcasing projects in Software Development and AI/ML Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  loggerModule.info("Application root layout rendering");
  return (
    <html lang="en" className={`${firaCode.className} bg-[#282C33] text-[#ABB2BF]`}>
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
