/**
 * @file ProjectsSection component for the portfolio website.
 * Displays a showcase of featured projects with descriptions and links.
 */
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { projectsData, type ProjectDataItem } from '@/lib/projectsData'
import { info as logInfo, debug as logDebug } from '@/lib/logger'
import LineDeco from '@/app/(components)/LineDeco'
import Dots from '@/app/(components)/Dots'
import ExpandableProjectCard from '@/components/ExpandableProjectCard'

// Narrow type for home page cards (uses a subset of fields)
type Project = ProjectDataItem

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Select a subset for the home page. Keep featured first, then recent.
  const projects: Project[] = projectsData
    .filter(p => p.featured)
    .concat(projectsData.filter(p => !p.featured))
    .slice(0, 6)
  logDebug('ProjectsSection: Selected projects for home section')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-dark to-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-16 h-px bg-primary"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                <span className="text-primary">#</span>projects
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-16 h-px bg-primary"
              />
            </div>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills and creativity. Click on any project to see more details.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ExpandableProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>

          {/* View All Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              View All Projects
              <ExternalLink size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <LineDeco />
      <Dots />
    </section>
  )
}

export default ProjectsSection 