'use client';
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";

function hexToRgba(hex: string, alpha: number): string {
    const cleaned = hex.replace('#', '');
    const r = parseInt(cleaned.substring(0, 2), 16);
    const g = parseInt(cleaned.substring(2, 4), 16);
    const b = parseInt(cleaned.substring(4, 6), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) return `rgba(199, 120, 221, ${alpha})`;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Spotlight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isTouchDevice, setIsTouchDevice] = useState(true);
    const [color, setColor] = useState('rgba(199, 120, 221, 0.15)');

    // Must call all hooks before conditional returns
    const background = useMotionTemplate`
        radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            ${color},
            transparent 80%
        )
    `;

    useEffect(() => {
        const hasPointer = window.matchMedia('(pointer: fine)').matches;
        setIsTouchDevice(!hasPointer);
        if (!hasPointer) return;

        function handleMouseMove({ clientX, clientY }: MouseEvent) {
            mouseX.set(clientX);
            mouseY.set(clientY);
        }

        // Read theme color and update spotlight
        const updateColor = () => {
            const primary = getComputedStyle(document.documentElement)
                .getPropertyValue('--color-primary').trim();
            if (primary) setColor(hexToRgba(primary, 0.15));
        };
        updateColor();

        // Watch for theme changes (inline style mutations on <html>)
        const observer = new MutationObserver(updateColor);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            observer.disconnect();
        };
    }, [mouseX, mouseY]);

    if (isTouchDevice) return null;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{ background }}
        />
    );
}
