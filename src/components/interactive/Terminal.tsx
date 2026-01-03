'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * Terminal command interface
 */
interface TerminalCommand {
  type: 'command' | 'output'
  text: string
}

/**
 * Interactive Terminal component
 * Provides a command-line interface for users to explore portfolio information
 */
export function InteractiveTerminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<TerminalCommand[]>([
    { type: 'output', text: '🚀 Welcome to Nilesh\'s Interactive Terminal' },
    { type: 'output', text: 'Type "help" to see available commands' }
  ])

  const inputRef = useRef<HTMLInputElement>(null)

  // Available commands with their responses
  const commands = {
    help: () => [
      'Available commands:',
      '• about - Learn about me',
      '• skills - View my technical skills',
      '• projects - See my latest projects',
      '• contact - Get my contact info',
      '• clear - Clear terminal',
      '• experience - View my experience',
      '• education - See my background'
    ],
    about: () => [
      '👨‍💻 Software Developer & AI/ML Engineer',
      '🎯 3+ years of experience',
      '🌟 50+ projects completed',
      '💡 Passionate about innovative solutions',
      '🔬 Specialized in React, Next.js, Python, and AI/ML',
      '🌍 Based in India, working globally'
    ],
    skills: () => [
      '🔥 Frontend: React, Next.js, TypeScript, TailwindCSS',
      '⚡ Backend: Node.js, Python, Flask, Express.js',
      '🤖 AI/ML: TensorFlow, PyTorch, Scikit-learn',
      '🗄️ Database: PostgreSQL, MongoDB, SQLite',
      '🛠️ Tools: Git, Docker, AWS, VSCode',
      '📱 Mobile: React Native (learning)'
    ],
    projects: () => [
      '🎮 ChertNodes - Minecraft hosting platform',
      '🤖 ProtectX - Discord moderation bot',
      '📊 Kahoot Viewer - Quiz answer extraction',
      '🔗 View all projects at /projects',
      '💻 All projects showcase modern web technologies',
      '🚀 Focus on performance and user experience'
    ],
    contact: () => [
      '📧 Email: contact@nilesh.dev',
      '💼 GitHub: github.com/nileshkowe',
      '🔗 LinkedIn: linkedin.com/in/nilesh-kowe-618735204',
      '💬 Always open for collaborations!',
      '🌐 Portfolio: nilesh.dev',
      '📱 Available for freelance opportunities'
    ],
    experience: () => [
      '💼 3+ Years in Software Development',
      '🎯 Full-Stack Development',
      '🤖 AI/ML Engineering',
      '🌐 Web Application Development',
      '📱 Mobile App Development (learning)',
      '☁️ Cloud & DevOps experience'
    ],
    education: () => [
      '🎓 Computer Science Background',
      '📚 Self-taught in modern technologies',
      '🔬 Continuous learning in AI/ML',
      '📖 Following latest industry trends',
      '🎯 Focus on practical, hands-on experience'
    ],
    clear: () => {
      setHistory([])
      return []
    }
  }

  /**
   * Execute a command and update terminal history
   */
  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    const output = commands[command as keyof typeof commands] || (() => [`Command not found: ${cmd}. Type "help" for available commands.`])
    const result = output()

    setHistory(prev => [
      ...prev,
      { type: 'command', text: `$ ${cmd}` },
      ...result.map(text => ({ type: 'output' as const, text }))
    ])
    setInput('')
  }

  /**
   * Handle input submission
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      executeCommand(input)
    }
  }

  /**
   * Focus input when terminal is clicked
   */
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  /**
   * Scroll to bottom when history updates
   */
  useEffect(() => {
    const terminal = document.getElementById('terminal-output')
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight
    }
  }, [history])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm max-h-96 overflow-hidden shadow-2xl cursor-text"
      onClick={handleTerminalClick}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-xs ml-2">nilesh@portfolio:~</span>
      </div>

      {/* Terminal output */}
      <div
        id="terminal-output"
        className="space-y-1 max-h-64 overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
      >
        {history.map((item, index) => (
          <div
            key={index}
            className={`${item.type === 'command'
                ? 'text-primary font-semibold'
                : 'text-gray-300'
              } break-words`}
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* Terminal input */}
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-primary mr-2 font-semibold">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent outline-none flex-1 text-white placeholder-gray-500"
          placeholder="Click to start typing..."
        />
      </form>
    </motion.div>
  )
} 