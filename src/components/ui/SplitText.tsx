import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
    text = '',
    className = '',
    delay = 100,
    animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },

    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    onLetterAnimationComplete,
}: {
    text: string;
    className?: string;
    delay?: number;
    animationFrom?: Record<string, unknown>;
    animationTo?: Record<string, unknown>;
    easing?: string;
    threshold?: number;
    rootMargin?: string;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    onLetterAnimationComplete?: () => void;
}) => {
    const words = text.split(' ').map((word) => word.split(''));
    const letters = words.flat();
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const animatedCount = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        letters.length,
        letters.map((_letter, i) => ({
            from: animationFrom,
            to: inView ? animationTo : animationFrom,
            delay: inView ? i * delay : 0,
            config: {
                easing: (t: number) => t, // Simple linear for now, or use a proper easing function if available
            },
            onRest: () => {
                if (inView) {
                    animatedCount.current += 1;
                    if (animatedCount.current === letters.length && onLetterAnimationComplete) {
                        onLetterAnimationComplete();
                    }
                }
            },
        }))
    );

    return (
        <div className={`split-text ${className}`} ref={ref} style={{ textAlign }}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="split-text-word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    {word.map((letter, letterIndex) => {
                        const index = word.slice(0, letterIndex).flat().length + (wordIndex > 0 ? words.slice(0, wordIndex).flat().length : 0);
                        return (
                            <animated.span key={letterIndex} style={springs[index] as unknown as React.CSSProperties}>
                                {letter}
                            </animated.span>
                        );
                    })}
                    {wordIndex < words.length - 1 && <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>}
                </span>
            ))}
        </div>
    );
};

export default SplitText;
