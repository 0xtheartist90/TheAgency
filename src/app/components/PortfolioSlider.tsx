'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Reveal from '@/app/components/Reveal';
import type { PortfolioProject } from '@/app/portfolio-content';
import type { Locale } from '@/app/site-content';
import { getUiCopy } from '@/app/ui-content';

type PortfolioSliderProps = {
    projects: readonly PortfolioProject[];
    clipPath: string;
    locale: string;
};

const COLLAPSED_CLIP_PATH = 'polygon(28% 0, 100% 0, 72% 100%, 0 100%)';
const EXPANDED_CLIP_PATH = 'polygon(11.48% 0, 100% 0, 88.52% 100%, 0 100%)';
const PANEL_SHELL_CLASS =
    'overflow-hidden bg-[#121216] shadow-[0_24px_60px_rgba(0,0,0,0.28)]';

const getCircularOffset = (index: number, activeIndex: number, total: number) => {
    let offset = index - activeIndex;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return offset;
};

const getDesktopPanelStyle = (offset: number) => {
    if (offset === 0) {
        return {
            left: '26%',
            width: '48%',
            zIndex: 40,
            opacity: 1,
            clipPath: EXPANDED_CLIP_PATH,
            filter: 'none',
            transform: 'translate3d(0,0,0) scale(1)',
            pointerEvents: 'auto' as const
        };
    }

    if (offset === -1) {
        return {
            left: '12%',
            width: '20%',
            zIndex: 28,
            opacity: 1,
            clipPath: COLLAPSED_CLIP_PATH,
            filter: 'brightness(0.82)',
            transform: 'translate3d(-1.35rem,1.2rem,0) scale(0.955)',
            pointerEvents: 'auto' as const
        };
    }

    if (offset === 1) {
        return {
            left: '68%',
            width: '20%',
            zIndex: 28,
            opacity: 1,
            clipPath: COLLAPSED_CLIP_PATH,
            filter: 'brightness(0.82)',
            transform: 'translate3d(1.35rem,1.2rem,0) scale(0.955)',
            pointerEvents: 'auto' as const
        };
    }

    if (offset === -2) {
        return {
            left: '0%',
            width: '18%',
            zIndex: 18,
            opacity: 1,
            clipPath: COLLAPSED_CLIP_PATH,
            filter: 'brightness(0.66)',
            transform: 'translate3d(-2.35rem,2.45rem,0) scale(0.885)',
            pointerEvents: 'auto' as const
        };
    }

    if (offset === 2) {
        return {
            left: '82%',
            width: '18%',
            zIndex: 18,
            opacity: 1,
            clipPath: COLLAPSED_CLIP_PATH,
            filter: 'brightness(0.66)',
            transform: 'translate3d(2.35rem,2.45rem,0) scale(0.885)',
            pointerEvents: 'auto' as const
        };
    }

    return {
        left: offset < 0 ? '-20%' : '102%',
        width: '18%',
        zIndex: 1,
        opacity: 0,
        clipPath: COLLAPSED_CLIP_PATH,
        filter: 'brightness(0.6)',
        transform:
            offset < 0
                ? 'translate3d(-2.3rem,2.8rem,0) scale(0.84)'
                : 'translate3d(2.3rem,2.8rem,0) scale(0.84)',
        pointerEvents: 'none' as const
    };
};

const ProjectVisual = ({
    project,
    compact = false,
    labels
}: {
    project: PortfolioProject;
    compact?: boolean;
    labels: {
        imagePlaceholder: string;
        addFinalVisual: string;
    };
}) => {
    const imagePadding = compact ? 'p-6' : 'p-10';
    const visual = project.listVisual ?? project.visual;
    const visualAlt = project.listVisualAlt ?? project.visualAlt ?? `${project.title} visual`;
    const visualContain = project.listVisualContain ?? project.visualContain;

    return (
        <div className='absolute inset-0'>
            {visualContain ? <div className='absolute inset-0 bg-[#121216]' /> : null}

            {visual ? (
                visualContain ? (
                    <div className='absolute inset-0'>
                        <Image
                            src={visual}
                            alt={visualAlt}
                            fill
                            className={`object-contain ${imagePadding}`}
                        />
                    </div>
                ) : (
                    <div className='absolute inset-0'>
                        <Image
                            src={visual}
                            alt={visualAlt}
                            fill
                            className='object-cover'
                        />
                    </div>
                )
            ) : (
                <div className='absolute inset-0 flex items-center justify-center px-6 text-center'>
                    <div>
                        <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                            {labels.imagePlaceholder}
                        </p>
                        <p className='mt-3 text-sm leading-7 text-white/62'>
                            {labels.addFinalVisual}
                        </p>
                    </div>
                </div>
            )}

            <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,16,0)_0%,rgba(14,14,16,0.04)_24%,rgba(14,14,16,0.42)_62%,rgba(14,14,16,0.9)_100%)]' />
            <div className='absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.14)_18%,transparent_34%)] opacity-35' />
        </div>
    );
};

const PortfolioSlider = ({ projects, clipPath, locale }: PortfolioSliderProps) => {
    const ui = getUiCopy(locale as Locale);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalPages = projects.length;
    const goPrevious = () => {
        setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
    };

    const goNext = () => {
        setActiveIndex((current) => (current + 1) % projects.length);
    };

    return (
        <div className='mt-8'>
            <div className='grid gap-5 md:hidden'>
                {projects.map((project, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <button
                            key={project.slug}
                            type='button'
                            onClick={() => setActiveIndex(index)}
                            className={`${PANEL_SHELL_CLASS} relative overflow-hidden p-6 text-left`}
                            style={{ clipPath }}
                        >
                            <ProjectVisual
                                project={project}
                                labels={{
                                    imagePlaceholder: ui.portfolio.imagePlaceholder,
                                    addFinalVisual: ui.portfolio.addFinalVisual
                                }}
                            />
                            <div className='relative z-10'>
                                <p className='text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                    {project.category}
                                </p>
                                <h3 className='mt-3 text-2xl font-semibold tracking-[-0.05em] text-white'>
                                    {project.title}
                                </h3>
                                <div
                                    className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${
                                        isActive ? 'mt-5 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className='overflow-hidden'>
                                        <div className='w-full bg-[linear-gradient(180deg,rgba(10,10,14,0.72),rgba(10,10,14,0.38))] px-5 py-5 shadow-[0_18px_54px_rgba(0,0,0,0.22)] backdrop-blur-[3px]'>
                                            <p className='text-base leading-8 text-white/78'>{project.summary}</p>
                                        </div>
                                        <div className='mt-4 flex flex-wrap gap-2'>
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className='rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/62'
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Link href={`/${locale}/work/${project.slug}`} className='agency-button agency-button--link mt-5 inline-flex'>
                                            {ui.portfolio.viewProject}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            <Reveal className='relative hidden md:block' distance={24}>
                <div className='relative mx-auto h-[38rem] max-w-[84rem] overflow-visible'>
                    {projects.map((project, index) => {
                        const offset = getCircularOffset(index, activeIndex, projects.length);
                        const isActive = offset === 0;
                        const isEdgeCard = Math.abs(offset) === 2;

                        if (Math.abs(offset) > 2) {
                            return null;
                        }

                        const panelStyle = getDesktopPanelStyle(offset);

                        return (
                            <div
                                key={project.slug}
                                className={`${PANEL_SHELL_CLASS} ${isActive ? 'portfolio-panel-shell' : 'portfolio-panel-card'} absolute top-0 bottom-0`}
                                style={{
                                    left: panelStyle.left,
                                    width: panelStyle.width,
                                    zIndex: panelStyle.zIndex,
                                    opacity: panelStyle.opacity,
                                    clipPath: panelStyle.clipPath,
                                    filter: panelStyle.filter,
                                    transform: panelStyle.transform,
                                    pointerEvents: panelStyle.pointerEvents
                                }}
                            >
                                <ProjectVisual
                                    project={project}
                                    compact={!isActive}
                                    labels={{
                                        imagePlaceholder: ui.portfolio.imagePlaceholder,
                                        addFinalVisual: ui.portfolio.addFinalVisual
                                    }}
                                />

                                {isActive ? (
                                    <div className='relative z-10 flex h-full flex-col justify-between pb-8 pl-[4.6rem] pr-8 pt-12'>
                                        <div className='portfolio-active-card__header'>
                                            <h3
                                                className='-ml-8 inline-flex min-h-[3.3rem] max-w-[18rem] items-center pl-14 pr-6 text-[1.15rem] font-semibold tracking-[-0.04em] shadow-[0_18px_36px_rgba(0,0,0,0.22)] [clip-path:polygon(1rem_0,100%_0,calc(100%-1rem)_100%,0_100%)]'
                                                style={{
                                                    backgroundColor: project.badgeColor ?? 'var(--agency-orange)',
                                                    color: project.badgeTextColor ?? '#ffffff'
                                                }}
                                            >
                                                {project.title}
                                            </h3>
                                        </div>

                                        <div className='portfolio-active-card__body max-w-[32rem]'>
                                            <div className='w-full bg-[linear-gradient(180deg,rgba(10,10,14,0.72),rgba(10,10,14,0.38))] px-6 py-5 shadow-[0_18px_54px_rgba(0,0,0,0.22)] backdrop-blur-[3px]'>
                                                <p className='text-[1rem] leading-7 text-white/78'>
                                                    {project.summary}
                                                </p>
                                            </div>

                                            <div className='mt-4 flex flex-wrap gap-2'>
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className='rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/62'
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <Link href={`/${locale}/work/${project.slug}`} className='agency-button agency-button--link mt-5 inline-flex'>
                                                {ui.portfolio.viewProject}
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        type='button'
                                        onClick={() => setActiveIndex(index)}
                                        aria-label={ui.portfolio.focusProjectAria(project.title)}
                                        className='relative z-10 flex h-full w-full flex-col justify-end px-5 pb-7 pt-8 text-left'
                                    >
                                        <p className={`font-semibold uppercase tracking-[0.28em] text-white/58 ${isEdgeCard ? 'text-[0.58rem]' : 'text-[0.66rem]'}`}>
                                            {project.category}
                                        </p>
                                        <p className={`mt-3 font-semibold tracking-[-0.05em] text-white ${isEdgeCard ? 'text-[1rem]' : 'text-[1.18rem]'}`}>
                                            {project.title}
                                        </p>
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </Reveal>

            {totalPages > 1 ? (
                <div className='mt-8 flex flex-col items-center gap-5'>
                    <div className='flex items-center gap-3'>
                        <button
                            type='button'
                            onClick={goPrevious}
                            className='inline-flex min-h-[2.8rem] min-w-[3.5rem] items-center justify-center border border-[var(--agency-ink)]/14 bg-[var(--agency-ink)]/4 px-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-ink)] transition duration-500 hover:border-[var(--agency-orange)] hover:text-[var(--agency-orange)] [clip-path:polygon(0.9rem_0,100%_0,calc(100%-0.9rem)_100%,0_100%)]'
                            aria-label={ui.portfolio.showPreviousProjectsAria}
                        >
                            {ui.portfolio.prev}
                        </button>
                        <button
                            type='button'
                            onClick={goNext}
                            className='inline-flex min-h-[2.8rem] min-w-[3.5rem] items-center justify-center border border-[var(--agency-ink)]/14 bg-[var(--agency-ink)]/4 px-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-ink)] transition duration-500 hover:border-[var(--agency-orange)] hover:text-[var(--agency-orange)] [clip-path:polygon(0.9rem_0,100%_0,calc(100%-0.9rem)_100%,0_100%)]'
                            aria-label={ui.portfolio.showNextProjectsAria}
                        >
                            {ui.portfolio.next}
                        </button>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <button
                                key={pageIndex}
                                type='button'
                                onClick={() => setActiveIndex(pageIndex)}
                                aria-label={ui.portfolio.goToPageAria(pageIndex + 1)}
                                className={`h-2.5 rounded-full transition-all duration-500 ${
                                    pageIndex === activeIndex
                                        ? 'w-10 bg-[var(--agency-orange)]'
                                        : 'w-2.5 bg-[var(--agency-ink)]/24 hover:bg-[var(--agency-ink)]/42'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default PortfolioSlider;
