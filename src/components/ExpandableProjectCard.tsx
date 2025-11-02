/**
 * @file ExpandableProjectCard component for the portfolio website.
 * Displays project information in an expandable card format with smooth animations.
 */
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, Eye, ChevronDown, ChevronUp } from 'lucide-react'
import { type ProjectDataItem } from '@/lib/projectsData'
import { info as logInfo, debug as logDebug } from '@/lib/logger'

interface ExpandableProjectCardProps {
  project: ProjectDataItem
  index: number
}

const ExpandableProjectCard: React.FC<ExpandableProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  const handleToggle = () => {
    setIsExpanded(!isExpanded)
    logDebug(`ExpandableProjectCard: Toggled expansion for project ${project.id}`)
  }

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent expansion when clicking on links or buttons
    if ((e.target as HTMLElement).closest('a, button')) {
      return
    }
    handleToggle()
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.2, ease: "easeOut" as const }
    }
  }

  const contentVariants = {
    collapsed: { 
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const }
    },
    expanded: { 
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" as const }
    }
  }

  const hoverTextVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" as const }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-darker border border-secondary/20 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-pointer ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
        
        {/* Overlay Icons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg text-white hover:bg-primary/30"
            >
              <ExternalLink size={18} />
            </motion.a>
          )}
          {project.sourceLink && (
            <motion.a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-secondary/20 backdrop-blur-sm rounded-lg text-white hover:bg-secondary/30"
            >
              <Github size={18} />
            </motion.a>
          )}
        </div>

        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm font-medium border border-primary/30">
            Featured
          </div>
        )}

        {/* Hover Text Overlay */}
        <AnimatePresence>
          {isHovered && !isExpanded && (
            <motion.div
              variants={hoverTextVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            >
              <div className="text-center">
                <p className="text-white text-sm font-medium mb-1">Click to show more</p>
                <p className="text-white/80 text-xs">View project details</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded State Indicator */}
        {isExpanded && (
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-white text-xs font-medium">
            Click to collapse
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        
        <p className="text-secondary text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-secondary/20">
                {/* Long Description */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Description</h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Category</h4>
                    <p className="text-secondary text-sm capitalize">{project.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Year</h4>
                    <p className="text-secondary text-sm">{project.year}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Status</h4>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      project.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : project.status === 'in-progress'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                {/* All Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex-1 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <Eye size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.sourceLink && (
                    <motion.a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex-1 px-4 py-2 border border-secondary text-secondary text-sm font-medium rounded-lg hover:border-primary hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ExpandableProjectCard
