'use client';

import { useRef, useState } from 'react';

import Link from 'next/link';

import Reveal from '@/app/components/Reveal';
import type { WorkPackage } from '@/app/work-with-us-content';

type ContactPackagesSliderProps = {
    packages: WorkPackage[];
    clipPath: string;
    locale: string;
    includesLabel: string;
    ctaLabel: string;
    paginationLabels: string[];
};

const ContactPackagesSlider = ({
    packages,
    clipPath,
    locale,
    includesLabel,
    ctaLabel,
    paginationLabels
}: ContactPackagesSliderProps) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [mobilePage, setMobilePage] = useState(0);

    const renderCard = (pkg: WorkPackage, index: number) => (
        <Reveal key={pkg.slug} delay={index * 80} distance={28}>
            <article
                id={pkg.slug}
                className='glass-panel flex h-full flex-col p-7 sm:p-8'
                style={{ clipPath }}
            >
                <p className='text-sm font-semibold text-[var(--agency-orange)]'>{pkg.step}</p>
                <p className='mt-4 text-2xl font-semibold tracking-[-0.04em] text-white'>
                    {pkg.title}
                </p>
                <p className='mt-4 text-xl font-semibold tracking-[-0.04em] text-white/92'>
                    {pkg.headline}
                </p>
                <p className='mt-4 text-base leading-7 text-white/72'>{pkg.longDescription}</p>
                <div className='mt-6'>
                    <p className='text-[0.72rem] uppercase tracking-[0.28em] text-white/42'>
                        {includesLabel}
                    </p>
                    <div className='mt-4 grid gap-3'>
                        {pkg.detailedIncludes.map((item) => (
                            <div
                                key={item}
                                className='rounded-[1rem] border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/78'
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                {pkg.note ? (
                    <p className='mt-5 text-sm leading-6 text-white/52'>{pkg.note}</p>
                ) : null}
                <div className='mt-auto pt-7'>
                    <Link
                        href={`/${locale}/contact#${pkg.slug}`}
                        className='agency-button agency-button--solid'
                    >
                        {ctaLabel}
                    </Link>
                </div>
            </article>
        </Reveal>
    );

    return (
        <>
            <div
                ref={sliderRef}
                className='no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:hidden'
                onScroll={(event) => {
                    const container = event.currentTarget;
                    const cardWidth = container.clientWidth * 0.88 + 16;
                    const nextPage = Math.round(container.scrollLeft / cardWidth);
                    setMobilePage(Math.max(0, Math.min(packages.length - 1, nextPage)));
                }}
            >
                {packages.map((pkg, index) => (
                    <div key={pkg.slug} className='w-[88%] min-w-[88%] snap-center'>
                        {renderCard(pkg, index)}
                    </div>
                ))}
            </div>

            <div className='mt-5 flex items-center justify-center gap-2 lg:hidden'>
                {packages.map((pkg, index) => (
                    <button
                        key={pkg.slug}
                        type='button'
                        onClick={() => {
                            const container = sliderRef.current;
                            if (!container) return;

                            const cardWidth = container.clientWidth * 0.88 + 16;
                            container.scrollTo({
                                left: cardWidth * index,
                                behavior: 'smooth'
                            });
                        }}
                        aria-label={paginationLabels[index] ?? `Go to package ${index + 1}`}
                        className={`slider-pagination-chip ${index === mobilePage ? 'slider-pagination-chip--active' : 'slider-pagination-chip--services'}`}
                    />
                ))}
            </div>

            <div className='mt-8 hidden gap-5 lg:grid lg:grid-cols-3'>
                {packages.map((pkg, index) => renderCard(pkg, index))}
            </div>
        </>
    );
};

export default ContactPackagesSlider;
