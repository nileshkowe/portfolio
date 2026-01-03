/**
 * @file Projects page for the portfolio website.
 * Displays all projects with filtering, categories, and detailed showcases.
 */
'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { Search, ArrowLeft, Code, Database, Globe, Cpu } from 'lucide-react'
import Magnet from '@/components/ui/Magnet'
import { projectsData, type ProjectDataItem } from '@/lib/projectsData'
import { debug as logDebug } from '@/lib/logger'
import ExpandableProjectCard from '@/components/ExpandableProjectCard'

// Local alias to keep component types expressive without redefining
type Project = ProjectDataItem

const ProjectsPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Use centralized projects data
  const projects: Project[] = projectsData
  logDebug('ProjectsPage: Loaded projects data')

  const categories = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'fullstack', label: 'Full Stack', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Globe },
    { id: 'ai', label: 'AI/ML', icon: Cpu },
    { id: 'tool', label: 'Tools', icon: Database }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Magnet padding={50} magnetStrength={5}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>
            </Magnet>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-primary">#</span>projects
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of my work spanning web development, AI/ML, and innovative tools.
              Click on any project to see more details and explore the technologies used.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section ref={sectionRef} className="pb-8 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Search Bar */}
            <motion.div variants={itemVariants} className="relative max-w-md mx-auto">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-darker/50 border border-secondary/20 rounded-xl text-white placeholder-secondary/50 focus:border-primary focus:outline-none transition-colors duration-200"
              />
            </motion.div>

            {/* Category Filters */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon
                const isActive = selectedCategory === category.id
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${isActive ? 'text-white' : 'text-secondary hover:text-primary'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-primary rounded-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon size={18} />
                      {category.label}
                    </span>
                  </motion.button>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-secondary">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExpandableProjectCard
                      project={project}
                      index={index}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage 