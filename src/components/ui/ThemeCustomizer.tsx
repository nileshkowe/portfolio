'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, X, Dices } from 'lucide-react'
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

const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  randomMode: 'portfolio-random-mode',
  hintShown: 'portfolio-hint-shown',
  sessionRandomized: 'portfolio-session-randomized',
}

function getRandomTheme(): Theme {
  return themes[Math.floor(Math.random() * themes.length)]
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.style.setProperty('--primary', theme.primary)
  root.style.setProperty('--color-primary', theme.primary)
  root.style.setProperty('--accent', theme.accent)
  root.style.setProperty('--color-accent', theme.accent)
  localStorage.setItem(STORAGE_KEYS.theme, theme.id)
}

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState('purple')
  const [randomMode, setRandomMode] = useState(true)
  const [showHint, setShowHint] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Load random mode preference (default: true for new visitors)
    const savedRandomMode = localStorage.getItem(STORAGE_KEYS.randomMode)
    const isRandomMode = savedRandomMode === null ? true : savedRandomMode === 'true'
    setRandomMode(isRandomMode)

    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme)
    const alreadyRandomizedThisSession = sessionStorage.getItem(STORAGE_KEYS.sessionRandomized)

    if (isRandomMode && !alreadyRandomizedThisSession) {
      // New session + random mode ON → pick a random theme
      const randomTheme = getRandomTheme()
      setActiveTheme(randomTheme.id)
      applyTheme(randomTheme)
      sessionStorage.setItem(STORAGE_KEYS.sessionRandomized, 'true')
    } else if (savedTheme) {
      // Returning within same session OR random mode off → use saved theme
      const theme = themes.find(t => t.id === savedTheme)
      if (theme) {
        setActiveTheme(theme.id)
        applyTheme(theme)
      }
    }

    // Show hint toast for first-time visitors only
    const hintShown = localStorage.getItem(STORAGE_KEYS.hintShown)
    if (!hintShown) {
      const hintTimer = setTimeout(() => setShowHint(true), 2000)
      const dismissTimer = setTimeout(() => {
        setShowHint(false)
        localStorage.setItem(STORAGE_KEYS.hintShown, 'true')
      }, 8000)
      return () => {
        clearTimeout(hintTimer)
        clearTimeout(dismissTimer)
      }
    }
  }, [])

  const handleThemeSelect = (theme: Theme) => {
    setActiveTheme(theme.id)
    applyTheme(theme)
  }

  const toggleRandomMode = () => {
    const newMode = !randomMode
    setRandomMode(newMode)
    localStorage.setItem(STORAGE_KEYS.randomMode, String(newMode))

    if (newMode) {
      // Turning ON → immediately randomize
      const randomTheme = getRandomTheme()
      setActiveTheme(randomTheme.id)
      applyTheme(randomTheme)
      sessionStorage.setItem(STORAGE_KEYS.sessionRandomized, 'true')
    }
  }

  const dismissHint = () => {
    setShowHint(false)
    localStorage.setItem(STORAGE_KEYS.hintShown, 'true')
  }

  if (!mounted) return null

  return (
    <>
      {/* Hint Toast */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            onClick={dismissHint}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 cursor-pointer max-w-[90vw]"
          >
            <div className="flex items-center gap-3 px-4 py-3 bg-black/70 backdrop-blur-xl border border-primary/30 rounded-xl shadow-2xl">
              <Dices className="w-5 h-5 text-primary shrink-0" />
              <p className="text-sm text-white/90">
                Each visit brings a new color! Tap the <span className="text-primary font-medium">palette</span> to customize.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Customizer */}
      <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="closed"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl hover:bg-black/60 transition-colors group"
            >
              <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-primary transition-colors" />
              <span className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white">Customize Theme</span>
            </motion.button>
          ) : (
            <motion.div
              key="open"
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.9 }}
              className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-w-[95vw]"
            >
              {/* Random toggle */}
              <div className="flex items-center gap-1 pr-1.5 sm:pr-2 border-r border-white/10">
                <motion.button
                  onClick={toggleRandomMode}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={randomMode ? 'Random theme: ON' : 'Random theme: OFF'}
                  className={cn(
                    "p-1.5 sm:p-2 rounded-lg transition-all",
                    randomMode
                      ? "bg-primary/20 text-primary"
                      : "text-white/40 hover:text-white/70"
                  )}
                >
                  <Dices className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>

              {/* Theme swatches */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto px-1">
                {themes.map((theme) => (
                  <motion.button
                    key={theme.id}
                    onClick={() => handleThemeSelect(theme)}
                    className={cn(
                      "relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all shrink-0",
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

              {/* Close button */}
              <div className="pl-1.5 sm:pl-2 border-l border-white/10">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-1 sm:p-1.5 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/10"
                >
                  <X size={14} className="sm:hidden" />
                  <X size={16} className="hidden sm:block" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
