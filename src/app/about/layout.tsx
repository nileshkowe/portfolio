import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nilesh Kowe — Software Developer at Pixonate with 1.6 years of experience. From intern to developer through dedication and hard work.",
  openGraph: {
    title: "About | Nilesh Kowe",
    description:
      "Software Developer at Pixonate with 1.6 years of experience building full-stack applications and AI/ML solutions.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
