import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nilesh Kowe for web development, AI/ML solutions, or collaboration opportunities.",
  openGraph: {
    title: "Contact | Nilesh Kowe",
    description:
      "Reach out to Nilesh Kowe for web development, AI/ML projects, or freelance collaborations.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
