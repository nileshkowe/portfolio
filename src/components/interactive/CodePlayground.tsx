'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, RotateCcw, Copy, Check } from 'lucide-react'

/**
 * Code Playground component
 * Allows users to write and execute JavaScript code in real-time
 */
export function CodePlayground() {
  const [code, setCode] = useState(`// Try my code live!
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci sequence:");
for (let i = 0; i <= 10; i++) {
  console.log(\`fib(\${i}) = \${fibonacci(i)}\`);
}`)

  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [copied, setCopied] = useState(false)

  /**
   * Execute the code and capture console output
   */
  const runCode = () => {
    setIsRunning(true)
    setOutput('')
    
    try {
      // Capture console.log output
      const originalLog = console.log
      const logs: string[] = []
      
      console.log = (...args) => {
        logs.push(args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '))
        originalLog.apply(console, args)
      }
      
      // Execute the code
      const result = eval(code)
      
      // Restore console.log
      console.log = originalLog
      
      // Set output
      const outputText = logs.join('\n')
      setOutput(outputText || 'Code executed successfully!')
      
    } catch (error) {
      setOutput(`Error: ${error}`)
    } finally {
      setIsRunning(false)
    }
  }

  /**
   * Reset code to default
   */
  const resetCode = () => {
    setCode(`// Try my code live!
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci sequence:");
for (let i = 0; i <= 10; i++) {
  console.log(\`fib(\${i}) = \${fibonacci(i)}\`);
}`)
    setOutput('')
  }

  /**
   * Copy code to clipboard
   */
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy code:', error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-darker/50 backdrop-blur-sm border border-secondary/20 rounded-xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-secondary/20">
        <h3 className="text-white font-semibold">Code Playground</h3>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyCode}
            className="p-2 text-secondary hover:text-white transition-colors"
            title="Copy code"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetCode}
            className="p-2 text-secondary hover:text-white transition-colors"
            title="Reset code"
          >
            <RotateCcw size={16} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={runCode}
            disabled={isRunning}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Play size={16} />
            {isRunning ? 'Running...' : 'Run Code'}
          </motion.button>
        </div>
      </div>
      
      {/* Code and Output */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Code Editor */}
        <div className="relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-80 bg-gray-900 text-white p-4 font-mono text-sm resize-none outline-none border-r border-secondary/20"
            placeholder="Write your JavaScript code here..."
            spellCheck={false}
          />
          <div className="absolute top-2 right-2 text-xs text-gray-500">
            JavaScript
          </div>
        </div>
        
        {/* Output */}
        <div className="bg-gray-900 p-4 border-l border-secondary/20">
          <div className="text-sm text-gray-400 mb-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Output:
          </div>
          <pre className="text-white text-sm whitespace-pre-wrap font-mono max-h-80 overflow-y-auto">
            {output || '// Output will appear here when you run the code'}
          </pre>
        </div>
      </div>
      
      {/* Footer */}
      <div className="p-4 border-t border-secondary/20 bg-gray-900/50">
        <p className="text-xs text-secondary/70">
          💡 Try writing your own JavaScript code! Use console.log() to see output.
        </p>
      </div>
    </motion.div>
  )
} 