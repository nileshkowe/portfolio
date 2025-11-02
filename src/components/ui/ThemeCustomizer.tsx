'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Sparkles, X } from 'lucide-react'

/**
 * Theme configuration interface
 */
interface Theme {
  name: string
  primary: string
  accent: string
  description: string
}

/**
 * Available themes for the portfolio
 */
const themes: Theme[] = [
  { 
    name: 'Purple Haze', 
    primary: '#C778DD', 
    accent: '#61DAFB',
    description: 'Original portfolio theme'
  },
  { 
    name: 'Cyber Blue', 
    primary: '#00F5FF', 
    accent: '#FF6B6B',
    description: 'Futuristic blue theme'
  },
  { 
    name: 'Matrix Green', 
    primary: '#00FF00', 
    accent: '#FFD700',
    description: 'Classic matrix style'
  },
  { 
    name: 'Sunset Orange', 
    primary: '#FF8C00', 
    accent: '#FF1493',
    description: 'Warm sunset colors'
  },
  { 
    name: 'Neon Pink', 
    primary: '#FF69B4', 
    accent: '#00CED1',
    description: 'Vibrant neon theme'
  },
  { 
    name: 'Ocean Deep', 
    primary: '#1E90FF', 
    accent: '#FFD700',
    description: 'Deep ocean blues'
  }
]

/**
 * Theme Customizer component
 * Allows users to customize the portfolio color scheme
 */
export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(0)

  /**
   * Apply theme to the document
   */
  const applyTheme = (theme: Theme) => {
    document.documentElement.style.setProperty('--color-primary', theme.primary)
    document.documentElement.style.setProperty('--color-accent', theme.accent)
    
    // Store theme preference
    localStorage.setItem('portfolio-theme', theme.name)
  }

  /**
   * Handle theme selection
   */
  const handleThemeSelect = (index: number) => {
    setCurrentTheme(index)
    applyTheme(themes[index])
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      {/* Theme toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-primary/20 backdrop-blur-sm rounded-full text-primary hover:bg-primary/30 transition-colors border border-primary/30"
        title="Customize theme"
      >
        <Palette size={24} />
      </motion.button>

      {/* Theme panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            className="absolute right-16 top-0 bg-darker/95 backdrop-blur-sm border border-secondary/20 rounded-xl p-4 w-72 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Sparkles size={18} />
                Customize Theme
              </h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-1 text-secondary hover:text-white transition-colors"
              >
                <X size={16} />
              </motion.button>
            </div>

            {/* Theme options */}
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {themes.map((theme, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleThemeSelect(index)}
                  className={`w-full p-3 rounded-lg border transition-all text-left ${
                    currentTheme === index
                      ? 'border-primary bg-primary/10'
                      : 'border-secondary/20 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Color preview */}
                    <div className="flex gap-1">
                      <div 
                        className="w-4 h-4 rounded-full border border-white/20" 
                        style={{ backgroundColor: theme.primary }}
                      />
                      <div 
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: theme.accent }}
                      />
                    </div>
                    
                    {/* Theme info */}
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">
                        {theme.name}
                      </div>
                      <div className="text-secondary/70 text-xs">
                        {theme.description}
                      </div>
                    </div>
                    
                    {/* Active indicator */}
                    {currentTheme === index && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-secondary/20 mt-4">
              <p className="text-xs text-secondary/70">
                Theme preference will be saved for your next visit
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 