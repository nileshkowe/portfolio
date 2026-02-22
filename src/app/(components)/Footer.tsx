/**
 * @file Footer component for the portfolio website.
 * Displays copyright information, social media links, and a small bio.
 */
'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as loggerModule from '@/logger';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

/**
 * Props for the Footer component.
 */
interface FooterProps {
  developerName?: string;
  developerEmail?: string;
  tagline?: string;
  copyrightYear?: number;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

/**
 * Footer component.
 * @param {FooterProps} props - The props for the component.
 * @returns {JSX.Element} The Footer component.
 */
const Footer: React.FC<FooterProps> = ({
  developerName = "Nilesh",
  developerEmail = "nileshkowe28@gmail.com",
  tagline = "Software Developer & AI/ML Engineer",
  copyrightYear = new Date().getFullYear(),
  githubUrl = "https://github.com/nileshkowe",
  linkedinUrl = "https://www.linkedin.com/in/nilesh-kowe-618735204/",
  twitterUrl = "https://x.com/nilesh_kowe",
}) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    loggerModule.debug('Footer component mounted with Framer Motion');
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 }
  };

  return (
    <footer ref={footerRef} className="bg-dark text-secondary pt-8 md:pt-16">
      <div className="container mx-auto px-4 md:px-8">
        <motion.hr 
          variants={lineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border-t border-secondary mb-8 md:mb-12"
          style={{ transformOrigin: 'left center' }}
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 mb-8 md:mb-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-3 md:gap-6">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/icons/logo.svg" alt="Logo" width={16} height={16} />
                <span className="text-white text-base font-medium">{developerName}</span>
              </Link>
              <a href={`mailto:${developerEmail}`} className="text-sm text-secondary hover:text-primary transition-colors">
                {developerEmail}
              </a>
            </div>
            <p className="text-base text-white">{tagline}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-start md:items-end gap-3">
            <h3 className="text-white text-xl font-medium mb-1 md:mb-0">Media</h3>
            <div className="flex gap-2 md:gap-4">
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-secondary hover:text-primary transition-colors"
              >
                <Github size={32} />
              </motion.a>
              <motion.a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-secondary hover:text-primary transition-colors"
              >
                <Linkedin size={32} />
              </motion.a>
              <motion.a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-secondary hover:text-primary transition-colors"
              >
                <Twitter size={32} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center py-8"
        >
          <p className="text-base">
            &copy; Copyright {copyrightYear}. Made by {developerName}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 