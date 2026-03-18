'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const processSteps = [
    {
        number: '01',
        title: 'Campfire',
        line: 'We get in the same room.',
        detail: 'Context. Direction. Honesty.',
        icon: '/images/Icons/image 64.png'
    },
    {
        number: '02',
        title: 'Discovery',
        line: 'We find what actually matters.',
        detail: 'Signal over noise.',
        icon: '/images/Icons/image 9.webp'
    },
    {
        number: '03',
        title: 'Build',
        line: 'We design and build with intent.',
        detail: 'Fast. Precise. Connected.',
        icon: '/images/Icons/image 17.webp'
    },
    {
        number: '04',
        title: 'Launch',
        line: 'We ship, learn, and refine.',
        detail: 'Nothing is static.',
        icon: '/images/Icons/image 11.webp'
    }
] as const;

const ProcessSection = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const matrixTimerRef = useRef<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredStep, setHoveredStep] = useState<string | null>(null);
    const [revealedLines, setRevealedLines] = useState<Record<string, string>>({});

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.18 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        if (!hoveredStep) {
            if (matrixTimerRef.current) {
                window.clearInterval(matrixTimerRef.current);
                matrixTimerRef.current = null;
            }

            return;
        }

        const activeStep = processSteps.find((step) => step.number === hoveredStep);
        if (!activeStep) {
            return;
        }

        let iteration = 0;
        const target = activeStep.line;

        if (matrixTimerRef.current) {
            window.clearInterval(matrixTimerRef.current);
        }

        matrixTimerRef.current = window.setInterval(() => {
            const nextValue = target
                .split('')
                .map((character, index) => {
                    if (character === ' ') {
                        return ' ';
                    }

                    if (index < iteration) {
                        return target[index] ?? character;
                    }

                    return characters[Math.floor(Math.random() * characters.length)] ?? character;
                })
                .join('');

            setRevealedLines((current) => ({
                ...current,
                [hoveredStep]: nextValue
            }));

            iteration += 0.6;

            if (iteration >= target.length) {
                if (matrixTimerRef.current) {
                    window.clearInterval(matrixTimerRef.current);
                    matrixTimerRef.current = null;
                }
                setRevealedLines((current) => ({
                    ...current,
                    [hoveredStep]: target
                }));
            }
        }, 26);

        return () => {
            if (matrixTimerRef.current) {
                window.clearInterval(matrixTimerRef.current);
                matrixTimerRef.current = null;
            }
        };
    }, [hoveredStep]);

    return (
        <section ref={sectionRef} className='relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-18'>
            <video
                className='absolute inset-0 h-full w-full object-cover brightness-[0.52] saturate-[0.9]'
                autoPlay
                muted
                loop
                playsInline
                aria-hidden='true'
            >
                <source src='/images/Home/conveyer.webm' type='video/webm' />
            </video>
            <div className='relative mx-auto max-w-[1600px]'>
                <div className='mb-8 md:mb-10'>
                    <p className='text-[0.74rem] font-semibold uppercase tracking-[0.34em] text-white/88'>
                        Our Process
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
                    {processSteps.map((step, index) => (
                        <div
                            key={step.number}
                            className='h-full'
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? undefined : 'translateY(40px)',
                                filter: isVisible ? undefined : 'blur(10px)',
                                transition:
                                    'opacity 1220ms cubic-bezier(0.22,1,0.36,1), transform 1220ms cubic-bezier(0.22,1,0.36,1), filter 1320ms cubic-bezier(0.22,1,0.36,1)',
                                transitionDelay: `${index * 170}ms`,
                                willChange: 'opacity, transform, filter'
                            }}
                        >
                            <article
                                className='process-card group relative h-full min-h-[250px] overflow-hidden p-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_34px_85px_rgba(0,0,0,0.24)] sm:p-7'
                                style={{
                                    clipPath:
                                        'polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)'
                                }}
                                onMouseEnter={() => {
                                    setHoveredStep(step.number);
                                    setRevealedLines((current) => ({
                                        ...current,
                                        [step.number]: ''
                                    }));
                                }}
                                onMouseLeave={() => {
                                    setHoveredStep((current) => (current === step.number ? null : current));
                                    setRevealedLines((current) => ({
                                        ...current,
                                        [step.number]: ''
                                    }));
                                }}
                            >
                                <div className='process-card-surface absolute inset-0' />
                                <div
                                    className='pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100'
                                    style={{
                                        clipPath:
                                            'polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)'
                                    }}
                                >
                                    <div className='absolute inset-0 border border-[#FF6A00]/75' />
                                </div>
                                <p className='absolute right-6 bottom-5 z-10 text-[0.9rem] font-medium tracking-[-0.04em] text-white/34 transition-colors duration-500 ease-out group-hover:text-white sm:right-7 sm:bottom-6'>
                                    {step.number}/
                                </p>

                                <div className='relative z-10 mt-2 flex items-start'>
                                    <Image
                                        src={step.icon}
                                        alt={step.title}
                                        width={78}
                                        height={78}
                                        className='h-[78px] w-[78px] object-contain transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.06] group-hover:brightness-0 group-hover:invert'
                                    />
                                </div>

                                <div className='relative z-10 mt-8 min-h-[3.4rem]'>
                                    <h3 className='max-w-[10ch] text-[1.45rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white transition-[opacity,color,transform] duration-500 ease-out group-hover:translate-y-1 group-hover:text-white group-hover:opacity-0 sm:text-[1.6rem]'>
                                        {step.title}
                                    </h3>
                                    <p className='absolute top-0 left-0 max-w-[18ch] text-[0.98rem] leading-6 text-white/0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100'>
                                        <span className='font-mono tracking-[0.08em] text-white'>
                                            {hoveredStep === step.number
                                                ? revealedLines[step.number] || ''
                                                : ''}
                                        </span>
                                    </p>
                                </div>
                                <div className='mt-4 min-h-[3.75rem]' />
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
