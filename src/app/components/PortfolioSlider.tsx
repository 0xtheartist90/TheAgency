'use client';

import Image from 'next/image';
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

const PortfolioCardVisual = ({ project }: { project: PortfolioProject }) => {
    if (project.visual) {
        if (project.visualContain) {
            return (
                <div className='relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#2f2e35] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.12)]'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,109,24,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_34%)]' />
                    <Image
                        src={project.visual}
                        alt={project.visualAlt ?? `${project.title} visual`}
                        fill
                        className='object-cover'
                    />
                </div>
            );
        }

        return (
            <div className='relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(24,24,30,0.72)_0%,rgba(18,18,24,0.9)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.12)]'>
                <Image
                    src={project.visual}
                    alt={project.visualAlt ?? `${project.title} visual`}
                    fill
                    className='object-cover'
                />
            </div>
        );
    }

    return (
        <div className='flex aspect-[4/3] items-center justify-center rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(24,24,30,0.72)_0%,rgba(18,18,24,0.9)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.12)]'>
            <div className='text-center'>
                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                    Image placeholder
                </p>
                <p className='mt-3 text-sm leading-7 text-white/62'>
                    Add final project visual here
                </p>
            </div>
        </div>
    );
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
                        className='inline-flex min-h-[2.6rem] items-center justify-center border border-[var(--agency-ink)]/12 bg-[var(--agency-ink)]/4 px-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-ink)] transition hover:border-[var(--agency-orange)] hover:text-[var(--agency-orange)] [clip-path:polygon(0.85rem_0,100%_0,calc(100%-0.85rem)_100%,0_100%)]'
                        aria-label='Show previous projects'
                    >
                        Prev
                    </button>
                    <button
                        type='button'
                        onClick={goNext}
                        className='inline-flex min-h-[2.6rem] items-center justify-center border border-[var(--agency-ink)]/12 bg-[var(--agency-ink)]/4 px-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-ink)] transition hover:border-[var(--agency-orange)] hover:text-[var(--agency-orange)] [clip-path:polygon(0.85rem_0,100%_0,calc(100%-0.85rem)_100%,0_100%)]'
                        aria-label='Show next projects'
                    >
                        Next
                    </button>
                </div>
            </Reveal>

            <div className='grid gap-5 md:hidden'>
                <Link href={`/${locale}/work/${mobileProject.slug}`} className='block h-full'>
                    <article className='glass-panel h-full border border-white/12 p-5 sm:p-6' style={{ clipPath }}>
                        <PortfolioCardVisual project={mobileProject} />

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

            <Reveal className='hidden gap-5 md:grid md:grid-cols-3' distance={24}>
                {desktopProjects.map((project) => (
                    <Link key={project.slug} href={`/${locale}/work/${project.slug}`} className='block h-full'>
                        <article className='glass-panel h-full border border-white/12 p-5 sm:p-6' style={{ clipPath }}>
                            <PortfolioCardVisual project={project} />

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
                ))}
            </Reveal>

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
