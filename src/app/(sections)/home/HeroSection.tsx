/**
 * @file HeroSection component for the portfolio website.
 * The main landing section with introduction text and hero image.
 */
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import Dots from '@/app/(components)/Dots'
import * as loggerModule from '@/logger'
import SplitText from '@/components/ui/SplitText'
import Magnet from '@/components/ui/Magnet'

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
    loggerModule.debug('HeroSection component mounted with Framer Motion')
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
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-darker to-dark pt-20 md:pt-24">
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight flex flex-wrap gap-x-4 gap-y-2">
                <SplitText
                  text="Nilesh"
                  className="text-primary inline-block"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  threshold={0.1}
                  rootMargin="-50px"
                />
                <span className="inline-block">is a</span>
                <SplitText
                  text="software developer"
                  className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  threshold={0.1}
                  rootMargin="-50px"
                />
                <span className="inline-block">and</span>
                <SplitText
                  text="AIML engineer"
                  className="text-accent inline-block"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  threshold={0.1}
                  rootMargin="-50px"
                />
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-secondary leading-relaxed max-w-lg"
            >
              I craft responsive websites and intelligent systems where technologies meet creativity.
              Turning complex problems into elegant solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Magnet padding={50} magnetStrength={3}>
                <motion.a
                  href="/documents/NILESH_CV_26.pdf"
                  download="NILESH_CV_26.pdf"
                  data-magnetic
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(199, 120, 221, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Download size={20} />
                  Download CV
                </motion.a>
              </Magnet>

              <Magnet padding={50} magnetStrength={3}>
                <motion.button
                  data-magnetic
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
                >
                  Contact Me
                  <ArrowDown size={16} />
                </motion.button>
              </Magnet>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/nileshkowe" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/nilesh-kowe-618735204/" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnetic
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
                <div className="text-3xl font-bold text-primary">
                  <animated.span>
                    {springProps.number.to(n => Math.floor(n))}
                  </animated.span>+
                </div>
                <div className="text-secondary">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">1.6+</div>
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

      {/* Dots component */}
      <Dots />
    </section>
  )
}

export default HeroSection