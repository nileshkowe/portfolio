'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

/**
 * GitHub activity data interface
 */
interface GitHubActivityData {
  commits: number
  linesOfCode: string
  lastCommit: string
  repositories: number
  stars: number
  followers: number
}

/**
 * Mock data for GitHub activity
 * In a real implementation, this would fetch from GitHub API
 */
const mockGitHubData: GitHubActivityData = {
  commits: 127,
  linesOfCode: '45K+',
  lastCommit: '2 hours ago',
  repositories: 23,
  stars: 156,
  followers: 89
}

/**
 * GitHub Activity component
 * Displays live coding activity and GitHub statistics
 */
export function GitHubActivity() {
  const [data, setData] = useState<GitHubActivityData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setData(mockGitHubData)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-darker/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6"
      >
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-700 rounded"></div>
            <div className="h-3 bg-gray-700 rounded w-2/3"></div>
            <div className="h-3 bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (!data) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-darker/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6"
    >
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        Live Activity
      </h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-secondary text-sm">Commits this week:</span>
          <span className="text-primary font-semibold">{data.commits}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-secondary text-sm">Lines of code:</span>
          <span className="text-accent font-semibold">{data.linesOfCode}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-secondary text-sm">Repositories:</span>
          <span className="text-white font-semibold">{data.repositories}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-secondary text-sm">Stars received:</span>
          <span className="text-yellow-400 font-semibold">⭐ {data.stars}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-secondary text-sm">Followers:</span>
          <span className="text-blue-400 font-semibold">{data.followers}</span>
        </div>
        
        <div className="pt-2 border-t border-secondary/20">
          <div className="text-xs text-secondary/70">
            Last commit: {data.lastCommit}
          </div>
        </div>
      </div>
    </motion.div>
  )
} 