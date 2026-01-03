'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Theme {
  name: string
  primary: string
  accent: string
  description: string
  id: string
}

const themes: Theme[] = [
  {
    id: 'purple',
    name: 'Purple Haze',
    primary: '#C778DD',
    accent: '#61DAFB',
    description: 'Original portfolio theme'
  },
  {
    id: 'blue',
    name: 'Cyber Blue',
    primary: '#00F5FF',
    accent: '#FF6B6B',
    description: 'Futuristic blue theme'
  },
  {
    id: 'green',
    name: 'Matrix Green',
    primary: '#00FF00',
    accent: '#FFD700',
    description: 'Classic matrix style'
  },
  {
    id: 'orange',
    name: 'Sunset Orange',
    primary: '#FF8C00',
    accent: '#FF1493',
    description: 'Warm sunset colors'
  },
  {
    id: 'pink',
    name: 'Neon Pink',
    primary: '#FF69B4',
    accent: '#00CED1',
    description: 'Vibrant neon theme'
  },
  {
    id: 'ocean',
    name: 'Ocean Deep',
    primary: '#1E90FF',
    accent: '#FFD700',
    description: 'Deep ocean blues'
  }
]

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState('purple')

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme) {
      const theme = themes.find(t => t.id === savedTheme)
      if (theme) {
        setActiveTheme(theme.id)
        applyTheme(theme)
      }
    }
  }, [])

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement
    root.style.setProperty('--primary', theme.primary)
    root.style.setProperty('--color-primary', theme.primary)
    root.style.setProperty('--accent', theme.accent)
    root.style.setProperty('--color-accent', theme.accent)

    // Also update generic colors if needed
    // root.style.setProperty('--ring', theme.primary)

    localStorage.setItem('portfolio-theme', theme.id)
  }

  const handleThemeSelect = (theme: Theme) => {
    setActiveTheme(theme.id)
    applyTheme(theme)
  }

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl hover:bg-black/60 transition-colors group"
          >
            <Palette className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium text-white/80 group-hover:text-white">Customize Theme</span>
          </motion.button>
        ) : (
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.9 }}
            className="flex items-center gap-2 p-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
          >
            <div className="flex items-center gap-1 pr-2 border-r border-white/10">
              <span className="text-xs font-medium text-white/50 px-2">Themes</span>
            </div>

            <div className="flex items-center gap-2">
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  onClick={() => handleThemeSelect(theme)}
                  className={cn(
                    "relative w-8 h-8 rounded-full border-2 transition-all",
                    activeTheme === theme.id
                      ? "border-white scale-110"
                      : "border-transparent hover:scale-110 opacity-70 hover:opacity-100"
                  )}
                  style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})` }}
                  title={theme.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {activeTheme === theme.id && (
                    <motion.div
                      layoutId="active-theme"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            <div className="pl-2 border-l border-white/10">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                <X size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}