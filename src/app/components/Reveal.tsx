'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    distance?: number;
    threshold?: number;
    axis?: 'x' | 'y';
};

const Reveal = ({
    children,
    className,
    delay = 0,
    duration = 1100,
    distance = 36,
    threshold = 0.18,
    axis = 'y'
}: RevealProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const hiddenTransform =
        axis === 'x' ? `translate3d(${distance}px, 0, 0)` : `translate3d(0, ${distance}px, 0)`;

    useEffect(() => {
        const node = ref.current;

        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? undefined : hiddenTransform,
                filter: isVisible ? undefined : 'blur(10px)',
                transition: [
                    `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1)`,
                    `transform ${duration}ms cubic-bezier(0.22,1,0.36,1)`,
                    `filter ${duration + 120}ms cubic-bezier(0.22,1,0.36,1)`
                ].join(', '),
                transitionDelay: `${delay}ms`,
                willChange: 'opacity, transform, filter'
            }}
        >
            {children}
        </div>
    );
};

export default Reveal;
