/**
 * @file AboutMeSection component for the portfolio website.
 * Displays information about the developer with modern animations and design.
 */
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code, Brain, Sparkles } from 'lucide-react'

interface AboutMeSectionProps {
  bioParagraphs?: string[]
  profileImageUrl?: string
  readMoreLink?: string
}

const defaultBioParagraphs = [
  "Hello, I'm Nilesh!",
  "I'm a passionate Software Developer and AI/ML Engineer with experience in building robust web applications and intelligent systems. I enjoy tackling complex problems and transforming ideas into practical, impactful solutions.",
  "My journey in tech has equipped me with a diverse skillset, from frontend development with React and Next.js to backend services with Python and Node.js, and diving deep into machine learning with PyTorch and TensorFlow."
]

const AboutMeSection: React.FC<AboutMeSectionProps> = ({
  bioParagraphs = defaultBioParagraphs,
  profileImageUrl = "/images/about_me_profile.png",
  readMoreLink = "/about"
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  }

  const skills = [
    { icon: Code, title: "Frontend Development", description: "React, Next.js, TypeScript" },
    { icon: Brain, title: "AI/ML Engineering", description: "PyTorch, TensorFlow, Python" },
    { icon: Sparkles, title: "Full-Stack Solutions", description: "Node.js, PostgreSQL, AWS" }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-darker to-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
                <span className="text-primary">#</span>about-me
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-16 h-px bg-primary"
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {bioParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className={`text-secondary leading-relaxed ${
                    index === 0 ? 'text-2xl font-medium text-white' : 'text-base'
                  }`}
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.div variants={itemVariants} className="pt-6">
                <Link
                  href={readMoreLink}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                >
                  Read more
                  <ArrowRight 
                    size={18} 
                    className="group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              variants={imageVariants}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-80 h-80 md:w-96 md:h-96"
                >
                  <Image
                    src={profileImageUrl}
                    alt="About me - Nilesh"
                    fill
                    className="object-cover rounded-2xl border-4 border-primary/30 shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent rounded-2xl" />
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 flex items-center justify-center"
                >
                  <Code size={24} className="text-primary" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 flex items-center justify-center"
                >
                  <Brain size={24} className="text-accent" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-darker/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-white font-semibold">{skill.title}</h3>
                  </div>
                  <p className="text-secondary text-sm">{skill.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMeSection 