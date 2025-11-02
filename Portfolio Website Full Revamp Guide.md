<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# Portfolio Website Full Revamp Guide

Based on your current Next.js portfolio structure, I'll provide a comprehensive revamp plan with modern UI animations, enhanced design patterns, and cutting-edge frameworks for 2025.

## Current State Analysis

Your portfolio currently uses[^1][^2]:

- **Next.js 15.3.2** with React 19
- **Tailwind CSS 4.1.8** for styling
- **Anime.js 4.0.2** for animations
- **TypeScript** for type safety
- Dark theme with custom color palette


## Recommended Animation Frameworks \& Libraries

### 1. **Framer Motion** (Primary Recommendation)

The most popular React animation library for 2025[^3][^4][^5][^6].

```bash
npm install framer-motion
```

**Why Framer Motion:**

- Declarative API for easy animations[^5]
- Gesture support (drag, tap, hover)[^5]
- Spring animations for smooth transitions[^5]
- Server-side rendering compatibility[^6]
- Over 22.8k GitHub stars[^7]


### 2. **Tailwind CSS Animate** (For Simple Animations)

Perfect complement to your existing Tailwind setup[^8][^9].

```bash
npm install -D tailwindcss-animate
```


### 3. **React Spring** (Physics-Based Animations)

For natural, lifelike motion effects[^4][^5][^10].

```bash
npm install @react-spring/web
```


### 4. **GSAP** (Advanced Animations)

For complex, timeline-based animations[^4][^5][^11].

```bash
npm install gsap
```


### 5. **Magic UI** (Advanced Components)

Built on ShadCN with 50+ animated components[^3].

```bash
npm install @magic-ui/react
```


## Installation Commands

```bash
# Remove old animation library
npm uninstall animejs

# Install new animation stack
npm install framer-motion @react-spring/web gsap
npm install -D tailwindcss-animate
npm install @magic-ui/react lucide-react
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge

# Additional UI enhancements
npm install react-intersection-observer
npm install @tabler/icons-react
```


## Updated Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C778DD',
        secondary: '#ABB2BF',
        dark: '#282C33',
        darker: '#1E1E1E',
        accent: '#61DAFB',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #C778DD' },
          '100%': { boxShadow: '0 0 30px #C778DD, 0 0 40px #C778DD' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
```


## Updated Component Codes

### 1. Enhanced Header Component

```tsx
// src/app/(components)/Header.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  developerName?: string
}

const Header: React.FC<HeaderProps> = ({ developerName = "Nilesh" }) => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'home' },
    { href: '/projects', label: 'projects' },
    { href: '/about', label: 'about' },
    { href: '/contact', label: 'contact' },
  ]

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/icons/logo.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-white text-lg font-bold">{developerName}</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href
              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`relative text-base font-medium transition-colors duration-300 group ${
                      isActive ? 'text-white' : 'text-secondary hover:text-white'
                    }`}
                  >
                    <span className="text-primary">#</span>
                    {link.label}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark/95 backdrop-blur-md border-t border-secondary/20"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-xl font-medium transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-secondary hover:text-white'
                        }`}
                      >
                        <span className="text-primary">#</span>
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
```


### 2. Enhanced Hero Section

```tsx
// src/app/(sections)/home/HeroSection.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // Animated counter
  const [count, setCount] = useState(0)
  const springProps = useSpring({
    from: { number: 0 },
    to: { number: count },
    config: { tension: 100, friction: 10 }
  })

  useEffect(() => {
    const timer = setTimeout(() => setCount(50), 1000) // 50+ projects
    return () => clearTimeout(timer)
  }, [])

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-darker to-dark">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-primary">Nilesh</span> is a{' '}
                <motion.span
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    software developer
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </motion.span>
                {' '}and{' '}
                <span className="text-accent">AIML engineer</span>
              </motion.h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-secondary leading-relaxed max-w-lg"
            >
              I craft responsive websites and intelligent systems where technologies meet creativity. 
              Turning complex problems into elegant solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(199, 120, 221, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
              >
                Contact Me
                <ArrowDown size={16} />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/NileshSP" },
                { icon: Linkedin, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-secondary/10 text-secondary hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <animated.div className="text-3xl font-bold text-primary">
                  {springProps.number.to(n => Math.floor(n))}+
                </animated.div>
                <div className="text-secondary">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">3+</div>
                <div className="text-secondary">Years Experience</div>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30"
            />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl"
            >
              <Image
                src="/images/hero-image.png"
                alt="Nilesh - Developer"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 left-10 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-lg text-white text-sm border border-primary/30"
            >
              Currently working on <span className="text-primary">AI Projects</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-secondary hover:text-primary cursor-pointer"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
```


### 3. Enhanced Projects Section

```tsx
// src/app/(sections)/home/ProjectsSection.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, Eye } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveLink?: string
  sourceLink?: string
  featured?: boolean
}

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const projects: Project[] = [
    {
      id: "1",
      title: "ChertNodes",
      description: "Minecraft servers hosting solution with a custom panel. Built with modern web technologies for seamless server management.",
      image: "/images/project_chertnodes.png",
      technologies: ["HTML", "SCSS", "Python", "Flask"],
      liveLink: "#",
      sourceLink: "#",
      featured: true
    },
    {
      id: "2",
      title: "ProtectX",
      description: "Advanced Discord server anti-crash and moderation bot with real-time monitoring and automated responses.",
      image: "/images/project_protectx.png",
      technologies: ["React", "Express", "Discord.js", "Node.js"],
      liveLink: "#",
      featured: true
    },
    {
      id: "3",
      title: "Kahoot Answers Viewer",
      description: "A tool to retrieve and display answers for Kahoot quizzes with real-time data processing.",
      image: "/images/project_kahoot_viewer.png",
      technologies: ["CSS", "Express", "Node.js", "Puppeteer"],
      liveLink: "#",
      sourceLink: "#"
    }
  ]

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
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
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
              A collection of projects that showcase my skills and creativity
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`group relative bg-darker border border-secondary/20 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 ${
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
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
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
                        Source
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
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
    </section>
  )
}

export default ProjectsSection
```


## Additional Recommendations

### 1. **Performance Optimizations**

- Implement lazy loading for images
- Add loading states with skeleton components
- Use Next.js Image optimization
- Implement code splitting for better performance


### 2. **Modern UI Patterns**

- Add glassmorphism effects[^3]
- Implement micro-interactions[^4]
- Use scroll-triggered animations[^4]
- Add particle systems for backgrounds


### 3. **SEO \& Accessibility**

- Add proper meta tags
- Implement schema markup
- Ensure keyboard navigation
- Add ARIA labels


### 4. **Additional Features**

- Dark/light mode toggle
- Internationalization support
- Contact form with validation
- Blog section with MDX support

This revamp incorporates the latest animation trends and frameworks for 2025[^3][^4][^5], providing a modern, performant, and visually stunning portfolio that will stand out in the competitive landscape.

<div style="text-align: center">⁂</div>

[^1]: README.md

[^2]: page.tsx.txt

[^3]: https://designerup.co/blog/copy-and-paste-ui-component-libraries/

[^4]: https://dev.to/hadil/top-10-javascript-animation-libraries-in-2025-2ch5

[^5]: https://dev.to/sovannaro/13-awesome-react-animation-libraries-to-elevate-your-design-projects-549g

[^6]: https://magicui.design/blog/react-animation-libraries

[^7]: https://dev.to/syakirurahman/top-15-animation-libraries-for-react-modern-javascript-apps-2i9m

[^8]: https://github.com/jamiebuilds/tailwindcss-animate

[^9]: https://www.npmjs.com/package/tailwindcss-animate

[^10]: https://www.syncfusion.com/blogs/post/top-react-animation-libraries

[^11]: https://www.creolestudios.com/top-react-animation-libraries/

[^12]: Header.tsx.txt

[^13]: layout.tsx.txt

[^14]: package-lock.json

[^15]: package.json

[^16]: Footer.tsx.txt

[^17]: logger.ts.txt

[^18]: https://www.youtube.com/watch?v=bMqi1ujAgUc

[^19]: https://www.supernova.io/blog/top-10-pre-built-react-frontend-ui-libraries-for-2025

[^20]: https://staticmania.com/blog/best-ui-animation-tools

[^21]: https://arccusinc.com/blog/best-animation-ui-component-libraries-for-react-native-in-2025/

[^22]: https://community.lambdatest.com/t/what-are-the-most-visually-stunning-ui-frameworks-in-2025-share-your-favorites/36868

[^23]: https://prismic.io/blog/tailwind-animations

[^24]: https://www.dronahq.com/react-animation-libraries/

[^25]: https://dev.to/iamgoncaloalves/animating-with-tailwindcss-2gi9

[^26]: https://www.youtube.com/watch?v=5Fv6WfpVSI4

[^27]: https://www.tailwindcss-animated.com

[^28]: https://designbeep.com/2025/04/01/50-top-css-javascript-animation-libraries-in-2025/

[^29]: HeroSection.tsx.txt

[^30]: SkillsSection.tsx.txt

[^31]: ProjectsSection.tsx.txt

[^32]: QuoteSection.tsx.txt

[^33]: AboutMeSection.tsx.txt

