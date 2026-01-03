'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function PixelTransition() {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    const columns = Math.ceil(dimensions.width / 40) // 40px blocks
    const rows = Math.ceil(dimensions.height / 40)

    const variants = {
        initial: {
            opacity: 1
        },
        animate: (i: number) => ({
            opacity: 0,
            transition: {
                duration: 0.8,
                delay: 0.05 * (i % 10), // Stagger effect
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ease: [0.22, 1, 0.36, 1] as any
            }
        }),
        exit: {
            opacity: 1
        }
    }

    // Only render if we have dimensions to avoid hydration mismatch
    if (dimensions.width === 0) return null

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none flex flex-wrap">
            {[...Array(columns * rows)].map((_, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-10 h-10 bg-darker"
                />
            ))}
        </div>
    )
}
