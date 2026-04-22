'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/app/components/Reveal';
import type { ServicePreview } from '@/app/service-detail-content';

type ServiceWorkShowcaseProps = {
    items: ServicePreview[];
    defaultVisual: string;
    defaultVisualAlt: string;
    clipPath: string;
    locale: string;
};

const ServiceWorkShowcase = ({
    items,
    defaultVisual,
    defaultVisualAlt,
    clipPath,
    locale
}: ServiceWorkShowcaseProps) => {
    const shellDuration = 760;
    const fadeDuration = 420;
    const visualDuration = 620;
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const collapseTimerRef = useRef<number | null>(null);
    const visualTimerRef = useRef<number | null>(null);
    const activeItem = activeIndex === null ? null : items[activeIndex];
    const visualSrc = activeItem?.visual ?? defaultVisual;
    const visualAlt = activeItem?.visualAlt ?? activeItem?.title ?? defaultVisualAlt;
    const [displayVisual, setDisplayVisual] = useState({ src: visualSrc, alt: visualAlt });
    const [outgoingVisual, setOutgoingVisual] = useState<{ src: string; alt: string } | null>(null);
    const [isVisualSliding, setIsVisualSliding] = useState(false);
    const mobileSliderRef = useRef<HTMLDivElement | null>(null);
    const [mobilePage, setMobilePage] = useState(0);

    const activeHref = activeItem?.href ? `/${locale}${activeItem.href}` : `/${locale}/work`;

    useEffect(() => {
        return () => {
            if (collapseTimerRef.current) {
                window.clearTimeout(collapseTimerRef.current);
            }
            if (visualTimerRef.current) {
                window.clearTimeout(visualTimerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (displayVisual.src === visualSrc && displayVisual.alt === visualAlt) {
            return;
        }

        if (visualTimerRef.current) {
            window.clearTimeout(visualTimerRef.current);
            visualTimerRef.current = null;
        }

        setOutgoingVisual(displayVisual);
        setDisplayVisual({ src: visualSrc, alt: visualAlt });
        setIsVisualSliding(true);

        visualTimerRef.current = window.setTimeout(() => {
            setOutgoingVisual(null);
            setIsVisualSliding(false);
            visualTimerRef.current = null;
        }, visualDuration);
    }, [displayVisual, visualAlt, visualSrc]);

    useEffect(() => {
        if (activeIndex === null) {
            setIsExpanded(false);
            setIsClosing(false);

            return;
        }

        const frame = window.requestAnimationFrame(() => {
            setIsExpanded(true);
        });

        return () => window.cancelAnimationFrame(frame);
    }, [activeIndex]);

    const collapseToTitles = () => {
        setIsClosing(true);
        setIsExpanded(false);

        if (collapseTimerRef.current) {
            window.clearTimeout(collapseTimerRef.current);
        }

        collapseTimerRef.current = window.setTimeout(() => {
            setActiveIndex(null);
            collapseTimerRef.current = null;
            setIsClosing(false);
        }, shellDuration);
    };

    const handleTitleSelect = (index: number) => {
        if (activeIndex === index) {
            collapseToTitles();

            return;
        }

        if (collapseTimerRef.current) {
            window.clearTimeout(collapseTimerRef.current);
            collapseTimerRef.current = null;
        }

        setActiveIndex(index);
        setIsClosing(false);
    };

    const titleButtons = useMemo(
        () =>
            items.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                    <button
                        key={item.title}
                        type='button'
                        onClick={() => handleTitleSelect(index)}
                        className={`process-card process-card--static group relative flex h-full w-full min-h-[6.75rem] overflow-hidden border border-white/12 px-7 py-6 text-left shadow-[0_28px_70px_rgba(30,20,12,0.16)] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_42px_100px_rgba(30,20,12,0.22)] ${
                            isActive ? 'border-[var(--agency-orange)]/42 shadow-[0_22px_56px_rgba(0,0,0,0.14)]' : ''
                        }`}
                        style={{ clipPath }}
                    >
                        <div className='process-card-surface absolute inset-0' />
                        <div className='relative z-10 flex min-h-full flex-col justify-center'>
                            {item.detailLabel ? (
                                <p className='mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-orange)] transition-transform duration-500 ease-out group-hover:translate-y-1'>
                                    {item.detailLabel}
                                </p>
                            ) : null}
                            <p className='text-[1.75rem] font-semibold tracking-[-0.05em] text-white transition-transform duration-500 ease-out group-hover:translate-y-1'>
                                {item.title}
                            </p>
                        </div>
                    </button>
                );
            }),
        [activeIndex, clipPath, items]
    );

    return (
        <>
            <div
                ref={mobileSliderRef}
                className='no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:hidden'
                onScroll={(event) => {
                    const container = event.currentTarget;
                    const cardWidth = container.clientWidth * 0.88 + 16;
                    const nextPage = Math.round(container.scrollLeft / cardWidth);
                    setMobilePage(Math.max(0, Math.min(items.length - 1, nextPage)));
                }}
            >
                {items.map((item, index) => {
                    const itemHref = item.href ? `/${locale}${item.href}` : `/${locale}/work`;
                    const itemVisual = item.visual ?? defaultVisual;
                    const itemVisualAlt = item.visualAlt ?? item.title ?? defaultVisualAlt;

                    return (
                        <div key={item.title} className='w-[88%] min-w-[88%] snap-center'>
                            <Reveal delay={index * 70} distance={28}>
                                <article className='overflow-hidden' style={{ clipPath }}>
                                    <div className='relative aspect-[16/11] overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(24,24,30,0.72)_0%,rgba(18,18,24,0.9)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.12)]'>
                                        <Image src={itemVisual} alt={itemVisualAlt} fill className='object-cover' />
                                        <div className='absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,109,24,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_34%)]' />
                                    </div>

                                    <div className='glass-panel border-x border-b border-white/12 px-6 pb-6 pt-5'>
                                        {item.detailLabel ? (
                                            <p className='text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-orange)]'>
                                                {item.detailLabel}
                                            </p>
                                        ) : null}
                                        <p className='mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-white'>
                                            {item.title}
                                        </p>
                                        <p className='mt-4 text-sm leading-7 text-white/72'>
                                            {item.summary}
                                        </p>

                                        <div className='mt-5 flex flex-wrap gap-2'>
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className='rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/62'
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {item.href ? (
                                            <div className='mt-6 flex justify-end'>
                                                <Link href={itemHref} className='agency-button agency-button--ghost inline-flex whitespace-nowrap'>
                                                    View work
                                                </Link>
                                            </div>
                                        ) : null}
                                    </div>
                                </article>
                            </Reveal>
                        </div>
                    );
                })}
            </div>

            <div className='mt-5 flex items-center justify-center gap-2 lg:hidden'>
                {items.map((item, index) => (
                    <button
                        key={item.title}
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
                        aria-label={`Go to work item ${index + 1}`}
                        className={`slider-pagination-chip ${index === mobilePage ? 'slider-pagination-chip--active' : 'slider-pagination-chip--process'}`}
                    />
                ))}
            </div>

            <div className='mt-8 hidden gap-5 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:items-stretch'>
            <Reveal distance={28}>
                <div
                    className='relative aspect-[16/9] h-full min-h-[24rem] overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(24,24,30,0.72)_0%,rgba(18,18,24,0.9)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.12)] lg:aspect-auto'
                    style={{ clipPath }}
                >
                    {outgoingVisual ? (
                        <div
                            className='absolute inset-0'
                            style={{
                                opacity: isVisualSliding ? 0 : 1,
                                transform: isVisualSliding ? 'translateX(-30px)' : 'translateX(0px)',
                                transition: `opacity ${visualDuration}ms cubic-bezier(0.22,1,0.36,1), transform ${visualDuration}ms cubic-bezier(0.22,1,0.36,1)`
                            }}
                        >
                            <Image src={outgoingVisual.src} alt={outgoingVisual.alt} fill className='object-cover' />
                        </div>
                    ) : null}

                    <div
                        className='absolute inset-0'
                        style={{
                            opacity: outgoingVisual && !isVisualSliding ? 0 : 1,
                            transform: 'translateX(0px)',
                            transition: `opacity ${visualDuration}ms cubic-bezier(0.22,1,0.36,1), transform ${visualDuration}ms cubic-bezier(0.22,1,0.36,1)`
                        }}
                    >
                        <Image
                            src={displayVisual.src}
                            alt={displayVisual.alt}
                            fill
                            className='object-cover'
                            style={{
                                transform: outgoingVisual ? (isVisualSliding ? 'translateX(0px)' : 'translateX(30px)') : 'translateX(0px)',
                                transition: `transform ${visualDuration}ms cubic-bezier(0.22,1,0.36,1)`
                            }}
                        />
                    </div>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,109,24,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_34%)]' />
                </div>
            </Reveal>

            <div className='relative grid gap-5 lg:h-[24rem] lg:grid-rows-3'>
                {items.map((item, index) => (
                    <Reveal key={item.title} delay={index * 70} distance={28} className='h-full w-full'>
                        <div
                            className={`h-full w-full lg:min-h-0 ${
                                activeIndex === null
                                    ? 'opacity-100'
                                    : index === activeIndex
                                      ? isExpanded
                                          ? 'pointer-events-none opacity-0'
                                          : 'opacity-100'
                                      : 'pointer-events-none opacity-0'
                            } transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)]`}
                            style={{
                                transitionDuration: `${fadeDuration}ms`,
                                transitionDelay:
                                    activeIndex !== null && index === activeIndex
                                        ? isExpanded
                                            ? '0ms'
                                            : isClosing
                                              ? '170ms'
                                              : '0ms'
                                        : '0ms'
                                ,
                                transform:
                                    activeIndex === null
                                        ? 'translateX(0px)'
                                        : index === activeIndex
                                          ? isExpanded
                                              ? 'translateX(-18px)'
                                              : 'translateX(0px)'
                                          : 'translateX(-12px)'
                            }}
                        >
                            {titleButtons[index]}
                        </div>
                    </Reveal>
                ))}

                {activeItem ? (
                    <article
                        className='glass-panel absolute inset-0 z-10 flex min-h-[24rem] w-full flex-col overflow-hidden border border-white/12 p-7 shadow-[0_30px_80px_rgba(24,16,10,0.14)] transition-[opacity,transform,box-shadow] ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-8'
                        style={{
                            clipPath,
                            transitionDuration: `${shellDuration}ms`,
                            opacity: isExpanded ? 1 : 0,
                            transform: isExpanded
                                ? 'translateX(0px)'
                                : isClosing
                                  ? 'translateX(22px)'
                                  : 'translateX(34px)'
                        }}
                    >

                        <div
                            className={`transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                isExpanded ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                                transitionDuration: `${fadeDuration}ms`,
                                transitionDelay: isExpanded ? '90ms' : '0ms'
                            }}
                        >
                            <button
                                type='button'
                                onClick={collapseToTitles}
                                className='rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/62 transition hover:border-white/20 hover:text-white/84'
                            >
                                Back
                            </button>
                        </div>

                        <div
                            className={`mt-8 transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                isExpanded ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                                transitionDuration: `${fadeDuration}ms`,
                                transitionDelay: isExpanded ? '130ms' : '0ms',
                                transform: isExpanded ? 'translateX(0px)' : 'translateX(16px)'
                            }}
                        >
                            {activeItem.href ? (
                                <Link
                                    href={activeHref}
                                    className='text-left text-3xl font-semibold tracking-[-0.05em] text-white transition hover:text-[var(--agency-orange)]'
                                >
                                    {activeItem.title}
                                </Link>
                            ) : (
                                <p className='text-3xl font-semibold tracking-[-0.05em] text-white'>
                                    {activeItem.title}
                                </p>
                            )}
                            <p className='mt-5 max-w-[46ch] text-sm leading-7 text-white/72 sm:text-base'>
                                {activeItem.summary}
                            </p>
                        </div>

                        <div
                            className={`mt-auto flex flex-col items-start gap-5 pt-7 transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] sm:items-end ${
                                isExpanded ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                                transitionDuration: `${fadeDuration}ms`,
                                transitionDelay: isExpanded ? '180ms' : '0ms',
                                transform: isExpanded ? 'translateX(0px)' : 'translateX(20px)'
                            }}
                        >
                            <div className='flex flex-wrap gap-2 sm:justify-end'>
                                {activeItem.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className='rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/62'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {activeItem.href ? (
                                <Link
                                    href={activeHref}
                                    className='agency-button agency-button--ghost inline-flex whitespace-nowrap'
                                >
                                    View work
                                </Link>
                            ) : (
                                <span />
                            )}
                        </div>
                    </article>
                ) : null}
            </div>
            </div>
        </>
    );
};

export default ServiceWorkShowcase;
