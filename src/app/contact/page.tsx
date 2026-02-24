/**
 * @file Contact page for the portfolio website.
 * Provides comprehensive contact information and enhanced contact form.
 */
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter, Calendar, CheckCircle } from 'lucide-react'
import Magnet from '@/components/ui/Magnet'

const ContactPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.')
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '', budget: '', timeline: '' })
      }, 3000)
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nileshkowe28@gmail.com',
      href: 'mailto:nileshkowe28@gmail.com',
      description: 'Send me an email',
      color: '#C778DD'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9325375887',
      href: 'tel:+919325375887',
      description: 'Call me directly',
      color: '#61DAFB'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      href: '#',
      description: 'Based in India',
      color: '#98D8C8'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '24-48 hours',
      href: '#',
      description: 'Average response time',
      color: '#F7DF1E'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/nileshkowe',
      color: '#C778DD'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nilesh-kowe-618735204/',
      color: '#61DAFB'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://x.com/nilesh_kowe',
      color: '#98D8C8'
    }
  ]

  const projectTypes = [
    'Web Development',
    'AI/ML Solutions',
    'Mobile Applications',
    'API Development',
    'Consulting',
    'Other'
  ]

  const budgetRanges = [
    '₹50,000 - ₹2,00,000',
    '$500 - $2,000',
    '€500 - €2,000',
    '£400 - £1,600',
    '₹2,00,000 - ₹5,00,000',
    '$2,000 - $5,000',
    '€2,000 - €5,000',
    '£1,600 - £4,000',
    '₹5,00,000+',
    '$5,000+',
    'Let&apos;s discuss'
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
              <span className="text-primary">#</span>contact-me
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let&apos;s discuss your project and explore how we can work together
              to create something extraordinary.
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
            className="space-y-16"
          >
            {/* Contact Methods */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Get <span className="text-primary">In Touch</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <motion.a
                      key={index}
                      href={method.href}
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="block bg-darker/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 text-center"
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: `${method.color}20` }}
                      >
                        <Icon size={24} style={{ color: method.color }} />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">{method.title}</h3>
                      <p className="text-white mb-1">{method.value}</p>
                      <p className="text-secondary text-sm">{method.description}</p>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Main Contact Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <div className="bg-darker/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">Send me a message</h3>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                      <p className="text-secondary">Thank you for reaching out. I&apos;ll get back to you soon!</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={itemVariants} className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="peer w-full px-4 py-3 bg-dark/50 border border-secondary/30 rounded-lg text-white placeholder-transparent focus:border-primary focus:outline-none transition-colors duration-200"
                            placeholder="Enter your name"
                          />
                          <label
                            htmlFor="name"
                            className="absolute left-4 -top-2.5 bg-dark px-1 text-sm text-secondary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary/50 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                          >
                            Your Name *
                          </label>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="peer w-full px-4 py-3 bg-dark/50 border border-secondary/30 rounded-lg text-white placeholder-transparent focus:border-primary focus:outline-none transition-colors duration-200"
                            placeholder="your.email@example.com"
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-4 -top-2.5 bg-dark px-1 text-sm text-secondary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary/50 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
                          >
                            Email Address *
                          </label>
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <label htmlFor="subject" className="block text-secondary text-sm font-medium mb-2">
                          Project Type
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-dark/50 border border-secondary/30 rounded-lg text-white focus:border-primary focus:outline-none transition-colors duration-200"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </motion.div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={itemVariants}>
                          <label htmlFor="budget" className="block text-secondary text-sm font-medium mb-2">
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-dark/50 border border-secondary/30 rounded-lg text-white focus:border-primary focus:outline-none transition-colors duration-200"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range, index) => (
                              <option key={index} value={range}>{range}</option>
                            ))}
                          </select>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <label htmlFor="timeline" className="block text-secondary text-sm font-medium mb-2">
                            Timeline
                          </label>
                          <input
                            type="text"
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-dark/50 border border-secondary/30 rounded-lg text-white placeholder-secondary/50 focus:border-primary focus:outline-none transition-colors duration-200"
                            placeholder="e.g., 2-3 months"
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <label htmlFor="message" className="block text-secondary text-sm font-medium mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-dark/50 border border-secondary/30 rounded-lg text-white placeholder-secondary/50 focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
                          placeholder="Tell me about your project, goals, and requirements..."
                        />
                      </motion.div>

                      <motion.button
                        type="submit"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 overflow-hidden relative"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              initial={{ x: 0, y: 0, opacity: 1 }}
                              animate={{ x: 100, y: -100, opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              className="absolute"
                            >
                              <Send size={20} />
                            </motion.div>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            <span className="ml-2">Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </motion.button>

                      {errorMessage && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm text-center"
                        >
                          {errorMessage}
                        </motion.p>
                      )}
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info & Social */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Availability */}
                <div className="bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar size={24} className="text-primary" />
                    <h3 className="text-xl font-semibold text-white">Current Availability</h3>
                  </div>
                  <p className="text-secondary mb-4">
                    I&apos;m currently available for new projects and collaborations.
                    I typically respond to inquiries within 24-48 hours.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-darker/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Connect on Social</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-3 p-4 bg-dark/30 rounded-lg hover:bg-dark/50 transition-all duration-300 border border-secondary/10 hover:border-primary/30"
                        >
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${social.color}20` }}
                          >
                            <Icon size={20} style={{ color: social.color }} />
                          </div>
                          <span className="text-white font-medium">{social.name}</span>
                        </motion.a>
                      )
                    })}
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-darker/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Quick FAQ</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-1">What&apos;s your typical response time?</h4>
                      <p className="text-secondary text-sm">I usually respond within 24-48 hours during business days.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Do you work with international clients?</h4>
                      <p className="text-secondary text-sm">Yes! I work with clients worldwide and am flexible with time zones.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">What&apos;s your preferred communication method?</h4>
                      <p className="text-secondary text-sm">Email for initial contact, then video calls for detailed discussions.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage 