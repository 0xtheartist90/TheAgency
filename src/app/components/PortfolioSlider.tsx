'use client';

import Link from 'next/link';
import { useState } from 'react';

import Reveal from '@/app/components/Reveal';
import type { PortfolioProject } from '@/app/portfolio-content';

type PortfolioSliderProps = {
    projects: readonly PortfolioProject[];
    clipPath: string;
    locale: string;
};

const getWrappedProjects = (projects: readonly PortfolioProject[], startIndex: number, count: number) => {
    return Array.from({ length: count }, (_, offset) => projects[(startIndex + offset) % projects.length]);
};

const PortfolioSlider = ({ projects, clipPath, locale }: PortfolioSliderProps) => {
    const [startIndex, setStartIndex] = useState(0);
    const totalPages = projects.length;

    const desktopProjects = getWrappedProjects(projects, startIndex, Math.min(3, projects.length));
    const mobileProject = projects[startIndex % projects.length];

    const goPrevious = () => {
        setStartIndex((current) => (current - 1 + projects.length) % projects.length);
    };

    const goNext = () => {
        setStartIndex((current) => (current + 1) % projects.length);
    };

    return (
        <div className='mt-8'>
            <Reveal
                className='mb-6 flex items-center justify-between gap-4'
                delay={60}
                distance={22}
            >
                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-ink)]/52'>
                    Portfolio slider
                </p>
                <div className='flex items-center gap-3'>
                    <button
                        type='button'
                        onClick={goPrevious}
                        className='inline-flex min-h-[2.6rem] items-center justify-center rounded-full border border-[var(--agency-ink)]/12 bg-[var(--agency-ink)]/4 px-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-ink)] transition hover:border-[var(--agency-orange)] hover:text-[var(--agency-orange)]'
                        aria-label='Show previous projects'
                    >
                        Prev
                    </button>
                    <button
                        type='button'
                        onClick={goNext}
                        className='inline-flex min-h-[2.6rem] items-center justify-center rounded-full border border-[var(--agency-ink)]/12 bg-[var(--agency-ink)]/4 px-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-ink)] transition hover:border-[var(--agency-orange)] hover:text-[var(--agency-orange)]'
                        aria-label='Show next projects'
                    >
                        Next
                    </button>
                </div>
            </Reveal>

            <div className='grid gap-5 md:hidden'>
                <Link href={`/${locale}/work/${mobileProject.slug}`} className='block h-full'>
                    <article className='glass-panel h-full border border-white/12 p-5 sm:p-6' style={{ clipPath }}>
                        <div className='rounded-[1.4rem] border border-dashed border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-4'>
                            <div className='flex aspect-[4/3] items-center justify-center rounded-[1.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,24,30,0.72)_0%,rgba(18,18,24,0.9)_100%)]'>
                                <div className='text-center'>
                                    <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                        Image placeholder
                                    </p>
                                    <p className='mt-3 text-sm leading-7 text-white/62'>
                                        Add final project visual here
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <p className='text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-[var(--agency-orange)]'>
                                {mobileProject.number} / {mobileProject.category}
                            </p>
                            <h2 className='mt-4 text-2xl font-semibold tracking-[-0.05em] text-white'>
                                {mobileProject.title}
                            </h2>
                            <p className='mt-4 text-base leading-7 text-white/72'>
                                {mobileProject.summary}
                            </p>
                            <div className='mt-5 flex flex-wrap gap-2'>
                                {mobileProject.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className='rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/62'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                </Link>
            </div>

            <div className='hidden gap-5 md:grid md:grid-cols-3'>
                {desktopProjects.map((project, index) => (
                    <Reveal key={`${project.number}-${startIndex}-${index}`} delay={index * 60} distance={24}>
                        <Link href={`/${locale}/work/${project.slug}`} className='block h-full'>
                            <article className='glass-panel h-full border border-white/12 p-5 sm:p-6' style={{ clipPath }}>
                                <div className='rounded-[1.4rem] border border-dashed border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-4'>
                                    <div className='flex aspect-[4/3] items-center justify-center rounded-[1.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,24,30,0.72)_0%,rgba(18,18,24,0.9)_100%)]'>
                                        <div className='text-center'>
                                            <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                                Image placeholder
                                            </p>
                                            <p className='mt-3 text-sm leading-7 text-white/62'>
                                                Add final project visual here
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-6'>
                                    <p className='text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-[var(--agency-orange)]'>
                                        {project.number} / {project.category}
                                    </p>
                                    <h2 className='mt-4 text-2xl font-semibold tracking-[-0.05em] text-white'>
                                        {project.title}
                                    </h2>
                                    <p className='mt-4 text-base leading-7 text-white/72'>
                                        {project.summary}
                                    </p>
                                    <div className='mt-5 flex flex-wrap gap-2'>
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className='rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/62'
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </Reveal>
                ))}
            </div>

            {totalPages > 1 ? (
                <div className='mt-8 flex items-center justify-center gap-2'>
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                        <button
                            key={pageIndex}
                            type='button'
                            onClick={() => setStartIndex(pageIndex)}
                            aria-label={`Go to portfolio page ${pageIndex + 1}`}
                            className={`h-2.5 rounded-full transition-all ${
                                pageIndex === startIndex
                                    ? 'w-10 bg-[var(--agency-orange)]'
                                    : 'w-2.5 bg-[var(--agency-ink)]/24 hover:bg-[var(--agency-ink)]/42'
                            }`}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default PortfolioSlider;
