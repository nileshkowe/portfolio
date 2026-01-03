'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { PixelTransition } from './PixelTransition'

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
      <div key={pathname}>
        <PixelTransition />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} // Delay content reveal slightly
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}