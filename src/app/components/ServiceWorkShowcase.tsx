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
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const collapseTimerRef = useRef<number | null>(null);
    const columnRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [overlayMetrics, setOverlayMetrics] = useState<{
        top: number;
        bottom: number;
    } | null>(null);
    const activeItem = activeIndex === null ? null : items[activeIndex];
    const visualSrc = activeItem?.visual ?? defaultVisual;
    const visualAlt = activeItem?.visualAlt ?? activeItem?.title ?? defaultVisualAlt;

    const activeHref = activeItem?.href ? `/${locale}${activeItem.href}` : `/${locale}/work`;

    useEffect(() => {
        return () => {
            if (collapseTimerRef.current) {
                window.clearTimeout(collapseTimerRef.current);
            }
        };
    }, []);

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

        const column = columnRef.current;
        const card = cardRefs.current[index];

        if (column && card) {
            setOverlayMetrics({
                top: card.offsetTop,
                bottom: column.offsetHeight - card.offsetTop - card.offsetHeight
            });
        }

        setActiveIndex(index);
        setIsClosing(false);
    };

    const expandedCardStyle =
        activeIndex === null
            ? undefined
            : {
                  clipPath,
                  top: isExpanded || overlayMetrics === null ? '0px' : `${overlayMetrics.top}px`,
                  bottom:
                      isExpanded || overlayMetrics === null ? '0px' : `${overlayMetrics.bottom}px`,
                  opacity: 1,
                  height: 'auto'
              };

    const collapsedCardHeight = 'calc((100% - 2.5rem) / 3)';
    const titleOverlayStyle =
        activeIndex === null
            ? undefined
            : {
                  top: overlayMetrics?.top ?? 0,
                  height: collapsedCardHeight
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
        <div className='mt-8 grid gap-5 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-stretch'>
            <Reveal distance={28}>
                <div
                    className='relative aspect-[16/9] h-full min-h-[24rem] overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(24,24,30,0.72)_0%,rgba(18,18,24,0.9)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.12)] lg:aspect-auto'
                    style={{ clipPath }}
                >
                    <Image src={visualSrc} alt={visualAlt} fill className='object-cover' />
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,109,24,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_34%)]' />
                </div>
            </Reveal>

            <div ref={columnRef} className='relative grid gap-5 lg:h-[24rem] lg:grid-rows-3'>
                {items.map((item, index) => (
                    <Reveal key={item.title} delay={index * 70} distance={28} className='h-full w-full'>
                        <div
                            ref={(node) => {
                                cardRefs.current[index] = node;
                            }}
                            className={`h-full w-full lg:min-h-0 ${
                                activeIndex === null
                                    ? 'opacity-100'
                                    : index === activeIndex
                                      ? isExpanded
                                          ? 'pointer-events-none opacity-0'
                                          : 'opacity-100'
                                      : 'pointer-events-none opacity-0'
                            } transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)]`}
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
                            }}
                        >
                            {titleButtons[index]}
                        </div>
                    </Reveal>
                ))}

                {activeItem ? (
                    <>
                        <div
                            className={`pointer-events-none absolute left-0 right-0 z-20 transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                isExpanded ? 'opacity-0' : 'opacity-100'
                            }`}
                            style={{
                                ...titleOverlayStyle,
                                transitionDuration: `${fadeDuration}ms`,
                                transform: isExpanded ? 'scale(1.01)' : 'scale(1)'
                            }}
                        >
                            <div className='flex h-full items-center px-7 sm:px-8'>
                                {activeItem.detailLabel ? (
                                    <div>
                                        <p className='mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-orange)]'>
                                            {activeItem.detailLabel}
                                        </p>
                                        <p className='text-[1.75rem] font-semibold tracking-[-0.05em] text-white'>
                                            {activeItem.title}
                                        </p>
                                    </div>
                                ) : (
                                    <p className='text-[1.75rem] font-semibold tracking-[-0.05em] text-white'>
                                        {activeItem.title}
                                    </p>
                                )}
                            </div>
                        </div>

                        <article
                            className='glass-panel absolute left-0 z-10 flex w-full min-h-[24rem] flex-col overflow-hidden border border-white/12 p-7 shadow-[0_30px_80px_rgba(24,16,10,0.14)] transition-[top,bottom,opacity,box-shadow,transform] ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-8'
                            style={{
                                ...expandedCardStyle,
                                transitionDuration: `${shellDuration}ms`,
                                transform: isExpanded ? 'scaleX(1)' : 'scaleX(0.985)'
                            }}
                        >

                            <div
                                className={`transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                isExpanded ? 'opacity-100' : 'opacity-0'
                            }`}
                                style={{
                                    transitionDuration: `${fadeDuration}ms`,
                                    transitionDelay: isExpanded ? '40ms' : '0ms'
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
                                className={`mt-8 transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                isExpanded ? 'opacity-100' : 'opacity-0'
                            }`}
                                style={{
                                    transitionDuration: `${fadeDuration}ms`,
                                    transitionDelay: isExpanded ? '80ms' : '0ms'
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
                                className={`mt-auto flex flex-col items-start gap-5 pt-7 transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)] sm:items-end ${
                                isExpanded ? 'opacity-100' : 'opacity-0'
                            }`}
                                style={{
                                    transitionDuration: `${fadeDuration}ms`,
                                    transitionDelay: isExpanded ? '120ms' : '0ms'
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
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default ServiceWorkShowcase;
