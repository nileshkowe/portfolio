/**
 * @file Header component for the portfolio website.
 * Displays navigation links, logo, and language switcher.
 */
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import * as loggerModule from '@/logger'

interface HeaderProps {
  developerName?: string
}

const Header: React.FC<HeaderProps> = ({ developerName = "Nilesh" }) => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    loggerModule.debug('Header component mounted with Framer Motion')
    
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
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="relative">
                <Image
                  src="/icons/logo.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-white text-base md:text-lg font-bold">{developerName}</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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
                    className={`relative text-sm lg:text-base font-medium transition-colors duration-300 group ${
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
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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