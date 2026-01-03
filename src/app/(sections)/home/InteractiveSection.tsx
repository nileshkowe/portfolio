'use client'

import { motion } from 'framer-motion'
import { InteractiveTerminal } from '@/components/interactive/Terminal'
import { CodePlayground } from '@/components/interactive/CodePlayground'
import { GitHubActivity } from '@/components/widgets/GitHubActivity'
import { Terminal, Code2, Activity } from 'lucide-react'

/**
 * Interactive Section component
 * Showcases interactive features like terminal, code playground, and GitHub activity
 */
export default function InteractiveSection() {
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section className="py-20 bg-darker/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-primary">Interactive</span> Experience
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Explore my skills and projects through these interactive tools.
            Try the terminal, run some code, or check out my live activity.
          </p>
        </motion.div>

        {/* Interactive Components Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {/* Terminal Component */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Terminal size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white">Interactive Terminal</h3>
            </div>
            <InteractiveTerminal />
          </motion.div>

          {/* Code Playground */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Code2 size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white">Code Playground</h3>
            </div>
            <CodePlayground />
          </motion.div>

          {/* GitHub Activity */}
          <motion.div variants={itemVariants} className="space-y-4 lg:col-span-2 xl:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Activity size={24} className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-white">Live Activity</h3>
            </div>
            <GitHubActivity />
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-secondary mb-6">
            Ready to work together? Let&apos;s build something amazing!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 