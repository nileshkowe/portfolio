/**
 * @file QuoteSection component for the portfolio website.
 * Displays an inspirational quote with modern animations and design.
 */
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'
import * as loggerModule from '@/logger'

interface QuoteSectionProps {
  quote?: string
  author?: string
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ 
  quote = "With great power comes great electricity bill", 
  author = "Dr. Who"
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const quoteVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0 }
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-dark to-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Quote Container */}
          <div className="relative">
            {/* Background Quote Icons */}
            <motion.div
              variants={iconVariants}
              className="absolute -top-6 -left-6 text-primary/20"
            >
              <Quote size={48} />
            </motion.div>
            
            <motion.div
              variants={iconVariants}
              className="absolute -bottom-6 -right-6 text-primary/20 rotate-180"
            >
              <Quote size={48} />
            </motion.div>

            {/* Main Quote Box */}
            <motion.div
              variants={quoteVariants}
              className="bg-darker/80 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
              
              {/* Quote Text */}
              <motion.blockquote
                variants={quoteVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-white text-center leading-relaxed relative z-10 mb-8"
              >
                "{quote}"
              </motion.blockquote>

              {/* Divider Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-24 h-px bg-primary mx-auto mb-6"
              />

              {/* Author */}
              <motion.div
                variants={quoteVariants}
                className="text-center relative z-10"
              >
                <cite className="text-lg md:text-xl text-secondary not-italic">
                  — {author}
                </cite>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl"
              />
            </motion.div>
          </div>

          {/* Additional Decorative Quote Marks */}
          <div className="flex justify-between items-center mt-12 opacity-20">
            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Quote size={24} className="text-primary" />
            </motion.div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <Quote size={24} className="text-accent rotate-180" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuoteSection 