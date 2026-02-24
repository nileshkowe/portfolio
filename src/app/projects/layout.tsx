import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects by Nilesh Kowe — full-stack web applications, AI/ML solutions, and developer tools built with React, Next.js, and Python.",
  openGraph: {
    title: "Projects | Nilesh Kowe",
    description:
      "Explore projects by Nilesh Kowe — full-stack web applications, AI/ML solutions, and developer tools.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
