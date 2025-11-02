/**
 * @file Home page for the portfolio website.
 * Aggregates all the sections for the main landing page.
 */

import * as loggerModule from "@/logger";
import HeroSection from "@/app/(sections)/home/HeroSection";
import InteractiveSection from "@/app/(sections)/home/InteractiveSection";
import QuoteSection from "@/app/(sections)/home/QuoteSection";
import ProjectsSection from "@/app/(sections)/home/ProjectsSection";
import SkillsSection from "@/app/(sections)/home/SkillsSection";
import AboutMeSection from "@/app/(sections)/home/AboutMeSection";
import ContactSection from "@/app/(sections)/home/ContactSection";

/**
 * Home page component.
 * Renders the main sections of the portfolio.
 * @returns {JSX.Element} The Home page.
 */
export default function HomePage() {
  loggerModule.info("Home page rendering");

  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <InteractiveSection />
      <ProjectsSection />
      <AboutMeSection />
      <QuoteSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
