'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Magnetic Cursor component that creates an interactive cursor effect
 * Follows mouse movement and responds to interactive elements
 */
export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    // Handle mouse movement
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      })
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      })
    }

    // Handle magnetic effect on interactive elements
    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 1.5,
        duration: 0.3,
      })
    }

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
      })
    }

    // Add event listeners
    document.addEventListener('mousemove', moveCursor)
    
    // Add magnetic effect to interactive elements
    const magneticElements = document.querySelectorAll('[data-magnetic]')
    magneticElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    // Hide cursor on mouse leave
    const handleMouseLeaveWindow = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3,
      })
    }

    const handleMouseEnterWindow = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.3,
      })
    }

    document.addEventListener('mouseleave', handleMouseLeaveWindow)
    document.addEventListener('mouseenter', handleMouseEnterWindow)

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseleave', handleMouseLeaveWindow)
      document.removeEventListener('mouseenter', handleMouseEnterWindow)
      
      magneticElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      {/* Cursor follower ring */}
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border-2 border-primary/50 rounded-full pointer-events-none z-40"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
} 