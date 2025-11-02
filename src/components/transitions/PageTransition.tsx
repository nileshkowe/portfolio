'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

/**
 * Animation variants for page transitions
 */
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02
  }
}

/**
 * Transition configuration for smooth animations
 */
const pageTransition = {
  duration: 0.5
}

/**
 * Page Transition component that wraps page content
 * Provides smooth animations between route changes
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to animate
 * @returns {JSX.Element} Animated page wrapper
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
} 