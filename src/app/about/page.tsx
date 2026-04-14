/**
 * @file About page for the portfolio website.
 * Provides comprehensive information about the developer's journey, skills, and experience.
 */
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Code, Brain, Heart, Target, Award, Coffee, Github, Mail } from 'lucide-react'
import Magnet from '@/components/ui/Magnet'

const AboutPage: React.FC = () => {
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

  const journey = [
    {
      year: "2024 - Present",
      title: "Software Developer at Pixonate",
      description: "Grew from intern to developer through hard work. Building full-stack web applications and AI/ML solutions.",
      type: "current"
    },
    {
      year: "2024",
      title: "Joined Pixonate as Intern",
      description: "Started as an unpaid intern, proved myself and earned a full-time position.",
      type: "milestone"
    },
    {
      year: "2024",
      title: "Graduated",
      description: "Completed formal education and began career in technology.",
      type: "milestone"
    },
    {
      year: "2023",
      title: "Student Projects",
      description: "Worked on various academic and personal projects in web development and AI.",
      type: "education"
    },
    {
      year: "2022",
      title: "Learning Journey",
      description: "Started learning programming and exploring technology.",
      type: "education"
    }
  ]

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I believe in writing code that is not only functional but also readable, maintainable, and elegant."
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I'm committed to staying updated with the latest trends and best practices."
    },
    {
      icon: Heart,
      title: "User-Centered Design",
      description: "Every project starts with understanding user needs and creating solutions that truly make a difference."
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "I thrive on challenging problems and finding innovative solutions through technology."
    }
  ]

  const funFacts = [
    { icon: Coffee, label: "Coffee Cups", value: "∞", description: "Daily fuel for coding" },
    { icon: Code, label: "Lines of Code", value: "100K+", description: "Written and counting" },
    { icon: Award, label: "Projects", value: "25+", description: "Completed successfully" },
    { icon: Brain, label: "Technologies", value: "15+", description: "Mastered and learning" }
  ]

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
              <span className="text-primary">#</span>about-me
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Passionate software developer and AI/ML engineer dedicated to creating innovative solutions
              that bridge the gap between technology and human needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="pb-20 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-20"
          >
            {/* Bio Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Hello, I&apos;m <span className="text-primary">Nilesh</span>
                </h2>
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p>
                    I&apos;m a Software Developer and AI/ML Engineer with 1.6 years of professional experience
                    at Pixonate. I started as an unpaid intern and grew into my current role through
                    dedication and hard work. My journey in technology started with a curiosity about
                    how things work and has evolved into a deep passion for creating solutions that
                    make a real impact.
                  </p>
                  <p>
                    I specialize in full-stack development using modern technologies like React, Next.js,
                    Node.js, and Python. My expertise extends to AI/ML with frameworks like TensorFlow
                    and PyTorch, allowing me to build intelligent applications that solve complex problems.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source
                    projects, or sharing knowledge with the developer community. I believe in continuous
                    learning and staying at the forefront of technological innovation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-secondary">
                    <MapPin size={18} className="text-primary" />
                    <span>Based in India</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <Calendar size={18} className="text-primary" />
                    <span>1+ Years Experience</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={imageVariants} className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-80 h-80 md:w-96 md:h-96 mx-auto"
                  >
                    <Image
                      src="/images/about_me_profile.png"
                      alt="Nilesh - Software Developer"
                      fill
                      className="object-cover rounded-2xl border-4 border-primary/30 shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent rounded-2xl" />
                  </motion.div>

                  {/* Floating social links */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-6 -right-6 p-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30"
                  >
                    <Github size={24} className="text-primary" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-6 -left-6 p-3 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30"
                  >
                    <Code size={24} className="text-accent" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Journey Timeline */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                My <span className="text-primary">Journey</span>
              </h2>
              <div className="relative">
                {/* Timeline Line SVG Animation */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
                  <svg className="h-full w-full overflow-visible" preserveAspectRatio="none">
                    <motion.path
                      d="M 2 0 V 1000" // Simple vertical line, will scale with container
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#C778DD" />
                        <stop offset="100%" stopColor="#61DAFB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="space-y-12 relative z-10">
                  {journey.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                        <div className="bg-darker/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
                          <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                          <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                          <p className="text-secondary">{item.description}</p>
                        </div>
                      </div>

                      {/* Timeline Dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 + (index * 0.2), type: "spring" }}
                        className="w-6 h-6 bg-primary rounded-full border-4 border-dark flex-shrink-0 z-10 shadow-[0_0_10px_rgba(199,120,221,0.5)]"
                      ></motion.div>

                      <div className="w-1/2"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                What I <span className="text-primary">Value</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-darker/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <h3 className="text-white font-semibold text-xl">{value.title}</h3>
                      </div>
                      <p className="text-secondary">{value.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Fun <span className="text-primary">Facts</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {funFacts.map((fact, index) => {
                  const Icon = fact.icon
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="text-center bg-darker/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{fact.value}</div>
                      <div className="text-primary font-medium mb-1">{fact.label}</div>
                      <div className="text-secondary text-sm">{fact.description}</div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div variants={itemVariants} className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">
                Let&apos;s <span className="text-primary">Connect</span>
              </h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto mb-8">
                I&apos;m always interested in new opportunities, collaborations, or just a good conversation
                about technology and innovation.
              </p>
              <div className="flex justify-center gap-4">
                <Magnet padding={50} magnetStrength={5}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
                  >
                    <Mail size={20} />
                    Get In Touch
                  </Link>
                </Magnet>
                <Magnet padding={50} magnetStrength={5}>
                  <a
                    href="https://github.com/nileshkowe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 border border-secondary text-secondary font-medium rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </Magnet>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage