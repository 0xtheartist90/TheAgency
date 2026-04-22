'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { getServiceCollection } from '@/app/services-content';
import type { Locale } from '@/app/site-content';
import { getUiCopy } from '@/app/ui-content';
type ServicesShowcaseProps = {
    locale: string;
    ctaLabel: string;
};

const serviceIcons = {
    brand: '/images/Icons/image 18.webp',
    build: '/images/Icons/image 10.webp',
    grow: '/images/Icons/image 16.webp'
} as const;

const serviceCardClipPath = 'polygon(18% 0, 100% 0, 100% 100%, 0 100%, 0 14%)';
const serviceCardPolygonPoints = '18.6,0.9 99.1,0.9 99.1,99.1 0.9,99.1 0.9,14.6';

const ServiceCardOutline = ({ hover }: { hover?: boolean }) => (
    <svg
        className={`pointer-events-none absolute inset-0 z-10 h-full w-full transition-opacity duration-500 ease-out ${hover ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 group-hover:opacity-0'}`}
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
        aria-hidden='true'
    >
        <polygon
            points={serviceCardPolygonPoints}
            fill='none'
            stroke={hover ? 'rgba(255,106,0,0.92)' : 'rgba(255,255,255,0.22)'}
            strokeWidth='1.4'
            strokeLinejoin='round'
            vectorEffect='non-scaling-stroke'
        />
    </svg>
);

const ServicesShowcase = ({ locale, ctaLabel: _ctaLabel }: ServicesShowcaseProps) => {
    const ui = getUiCopy(locale as Locale);
    const services = getServiceCollection(locale as Locale).map((service) => ({
        title: service.title,
        slug: service.slug,
        tagline: service.intro,
        icon: serviceIcons[service.slug]
    }));
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const mobileSliderRef = useRef<HTMLDivElement | null>(null);
    const matrixTimerRef = useRef<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredService, setHoveredService] = useState<string | null>(null);
    const [revealedTaglines, setRevealedTaglines] = useState<Record<string, string>>({});
    const [mobilePage, setMobilePage] = useState(0);
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

            iteration += 1.15;

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
        }, 18);

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
            <div className='absolute inset-0 bg-[rgba(239,229,215,0.85)]' />
            <div className='relative mx-auto max-w-[1540px]'>
                <div
                    ref={mobileSliderRef}
                    className='no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:hidden'
                    onScroll={(event) => {
                        const container = event.currentTarget;
                        const cardWidth = container.clientWidth * 0.88 + 16;
                        const nextPage = Math.round(container.scrollLeft / cardWidth);
                        setMobilePage(Math.max(0, Math.min(services.length - 1, nextPage)));
                    }}
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={service.title}
                                className='w-[88%] min-w-[88%] snap-center'
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? undefined : 'translateY(40px)',
                                    filter: isVisible ? undefined : 'blur(10px)',
                                    transition:
                                        'opacity 1220ms cubic-bezier(0.22,1,0.36,1), transform 1220ms cubic-bezier(0.22,1,0.36,1), filter 1320ms cubic-bezier(0.22,1,0.36,1)'
                                }}
                            >
                                <article
                                    className='process-card relative min-h-[250px] overflow-hidden p-7 text-left shadow-[0_28px_70px_rgba(30,20,12,0.16)]'
                                    style={{ clipPath: serviceCardClipPath }}
                                >
                                    <div className='process-card-surface absolute inset-0' />
                                    <ServiceCardOutline />
                                    <div className='absolute right-6 top-5 text-[0.82rem] font-medium tracking-[-0.04em] text-[var(--agency-orange)]'>
                                        0{index + 1}/
                                    </div>

                                    <div className='relative mb-10 flex justify-start'>
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={104}
                                            height={104}
                                            className='relative z-10 h-[96px] w-[96px] object-contain'
                                        />
                                    </div>

                                    <h3 className='relative text-[1.9rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white'>
                                        {service.title}
                                    </h3>
                                    <p className='relative mt-5 max-w-[26ch] text-[1rem] leading-6 text-white/80'>
                                        {service.tagline}
                                    </p>
                                    <div className='relative mt-8 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-orange)]'>
                                        <span>{ui.servicesShowcase.explore}</span>
                                        <span aria-hidden='true' className='text-[0.9rem] leading-none'>
                                            →
                                        </span>
                                    </div>

                                    <Link
                                        href={`/${locale}/services/${service.slug}`}
                                        aria-label={ui.servicesShowcase.exploreAria(service.title)}
                                        className='absolute inset-0 z-20'
                                    />
                                </article>
                            </div>
                        );
                    })}
                </div>
                <div className='mt-5 flex items-center justify-center gap-2 md:hidden'>
                    {services.map((service, index) => (
                        <button
                            key={service.slug}
                            type='button'
                            onClick={() => {
                                const container = mobileSliderRef.current;
                                if (!container) return;

                                const cardWidth = container.clientWidth * 0.88 + 16;
                                container.scrollTo({
                                    left: cardWidth * index,
                                    behavior: 'smooth'
                                });
                            }}
                            aria-label={ui.portfolio.goToPageAria(index + 1)}
                            className={`slider-pagination-chip ${index === mobilePage ? 'slider-pagination-chip--active' : 'slider-pagination-chip--services'}`}
                        />
                    ))}
                </div>

                <div className='hidden grid-cols-1 gap-5 md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-6'>
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
                                    className='process-card group relative h-full min-h-[250px] overflow-hidden p-7 text-left shadow-[0_28px_70px_rgba(30,20,12,0.16)] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_42px_100px_rgba(30,20,12,0.22)] sm:p-8'
                                    style={{
                                        clipPath: serviceCardClipPath
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
                                    <div className='process-card-surface absolute inset-0' />
                                    <ServiceCardOutline />
                                    <ServiceCardOutline hover />
                                    <div className='absolute right-6 top-5 text-[0.82rem] font-medium tracking-[-0.04em] text-[var(--agency-orange)] transition-colors duration-500 ease-out group-hover:text-white'>
                                        0{index + 1}/
                                    </div>

                                    <div className='relative mb-10 flex justify-start'>
                                        <div className='absolute -left-4 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.26)_0%,rgba(255,106,0,0.12)_40%,rgba(255,106,0,0)_74%)] opacity-0 blur-2xl transition-opacity duration-500 ease-out group-hover:opacity-100' />
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={104}
                                            height={104}
                                            className='relative z-10 h-[96px] w-[96px] object-contain transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.05] group-hover:brightness-0 group-hover:invert'
                                        />
                                    </div>

                                    <div className='relative min-h-[4rem]'>
                                        <h3 className='max-w-[10ch] text-[1.9rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white transition-[opacity,color,transform] duration-500 ease-out group-hover:translate-y-1 group-hover:text-white group-hover:opacity-0'>
                                            {service.title}
                                        </h3>
                                        <p className='absolute top-0 left-0 max-w-[26ch] text-[1.02rem] leading-6 text-white/0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100'>
                                            <span className='font-mono tracking-[0.08em] text-white'>
                                                {hoveredService === service.title
                                                    ? revealedTaglines[service.title] || ''
                                                    : ''}
                                            </span>
                                        </p>
                                    </div>
                                    <div className='mt-5 min-h-[4.25rem]' />

                                    <div className='relative mt-3 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-orange)] opacity-0 transition-[opacity,transform,color] duration-500 ease-out group-hover:translate-y-1 group-hover:opacity-100 group-hover:text-white'>
                                        <span>{ui.servicesShowcase.explore}</span>
                                        <span aria-hidden='true' className='text-[0.9rem] leading-none'>
                                            →
                                        </span>
                                    </div>

                                    <Link
                                        href={`/${locale}/services/${service.slug}`}
                                        aria-label={ui.servicesShowcase.exploreAria(service.title)}
                                        className='absolute inset-0 z-20'
                                    />
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
