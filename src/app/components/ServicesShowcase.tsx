'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
type ServicesShowcaseProps = {
    locale: string;
    ctaLabel: string;
};

const services = [
    {
        title: 'Build',
        tagline: 'Digital products that perform',
        icon: '/images/Icons/image 10.webp'
    },
    {
        title: 'Grow',
        tagline: 'Turn attention into revenue',
        icon: '/images/Icons/image 16.webp'
    },
    {
        title: 'Brand',
        tagline: 'Brands that stand out',
        icon: '/images/Icons/image 18.webp'
    },
    {
        title: 'Automate',
        tagline: 'Systems that scale your business',
        icon: '/images/Icons/image 13.webp'
    },
    {
        title: 'Train',
        tagline: 'Upgrade how your team works',
        icon: '/images/Icons/image 12.webp'
    }
] as const;

const ServicesShowcase = ({ locale: _locale, ctaLabel: _ctaLabel }: ServicesShowcaseProps) => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const matrixTimerRef = useRef<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredService, setHoveredService] = useState<string | null>(null);
    const [revealedTaglines, setRevealedTaglines] = useState<Record<string, string>>({});

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
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    useEffect(() => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        if (!hoveredService) {
            if (matrixTimerRef.current) {
                window.clearInterval(matrixTimerRef.current);
                matrixTimerRef.current = null;
            }

            return;
        }

        const activeService = services.find((service) => service.title === hoveredService);
        if (!activeService) {
            return;
        }

        let iteration = 0;
        const target = activeService.tagline;

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

            setRevealedTaglines((current) => ({
                ...current,
                [hoveredService]: nextValue
            }));

            iteration += 0.6;

            if (iteration >= target.length) {
                if (matrixTimerRef.current) {
                    window.clearInterval(matrixTimerRef.current);
                    matrixTimerRef.current = null;
                }

                setRevealedTaglines((current) => ({
                    ...current,
                    [hoveredService]: target
                }));
            }
        }, 26);

        return () => {
            if (matrixTimerRef.current) {
                window.clearInterval(matrixTimerRef.current);
                matrixTimerRef.current = null;
            }
        };
    }, [hoveredService]);

    return (
        <section
            ref={sectionRef}
            className='relative overflow-hidden bg-[#0E0E0E] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'
        >
            <video
                ref={videoRef}
                className='absolute inset-0 h-full w-full object-cover'
                autoPlay
                muted
                loop
                playsInline
                aria-hidden='true'
            >
                <source src='/images/Home/smoothbg.mp4' type='video/mp4' />
            </video>
            <div className='absolute inset-0 bg-[rgba(239,229,215,0.9)]' />
            <div className='relative mx-auto max-w-[1600px]'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5'>
                    {services.map((service, index) => {
                        return (
                            <div
                                key={service.title}
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
                                    className='group relative h-full min-h-[250px] overflow-hidden border border-black/8 bg-[linear-gradient(135deg,#17171b_0%,#232329_100%)] p-6 text-left shadow-[0_28px_70px_rgba(30,20,12,0.16)] transition-all duration-500 ease-out hover:-translate-y-3 hover:border-[#FF6A00]/82 hover:bg-[rgba(255,106,0,0.2)] hover:shadow-[0_42px_100px_rgba(30,20,12,0.22)] sm:p-7'
                                    style={{
                                        clipPath:
                                            'polygon(18% 0, 100% 0, 100% 100%, 0 100%, 0 14%)'
                                    }}
                                    onMouseEnter={() => {
                                        setHoveredService(service.title);
                                        setRevealedTaglines((current) => ({
                                            ...current,
                                            [service.title]: ''
                                        }));
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredService((current) =>
                                            current === service.title ? null : current
                                        );
                                        setRevealedTaglines((current) => ({
                                            ...current,
                                            [service.title]: ''
                                        }));
                                    }}
                                >
                                    <div className='absolute right-5 top-4 text-[0.78rem] font-medium tracking-[-0.04em] text-white/22 transition-colors duration-500 ease-out group-hover:text-white'>
                                        0{index + 1}/
                                    </div>

                                    <div className='relative mb-10 flex justify-start'>
                                        <div className='absolute -left-3 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.26)_0%,rgba(255,106,0,0.12)_40%,rgba(255,106,0,0)_74%)] opacity-0 blur-2xl transition-opacity duration-500 ease-out group-hover:opacity-100' />
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={88}
                                            height={88}
                                            className='relative z-10 h-[88px] w-[88px] object-contain transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.05] group-hover:brightness-0 group-hover:invert'
                                        />
                                    </div>

                                    <div className='relative min-h-[3.7rem]'>
                                        <h3 className='max-w-[10ch] text-[1.75rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white transition-[opacity,color,transform] duration-500 ease-out group-hover:translate-y-1 group-hover:text-white group-hover:opacity-0'>
                                            {service.title}
                                        </h3>
                                        <p className='absolute top-0 left-0 max-w-[18ch] text-[0.98rem] leading-6 text-white/0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100'>
                                            <span className='font-mono tracking-[0.08em] text-white'>
                                                {hoveredService === service.title
                                                    ? revealedTaglines[service.title] || ''
                                                    : ''}
                                            </span>
                                        </p>
                                    </div>
                                    <div className='mt-4 min-h-[3.75rem]' />
                                </article>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;
