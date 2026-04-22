'use client';

import { useState } from 'react';

type PackageItem = {
    slug: 'startup' | 'scale' | 'partner';
    title: string;
    headline: string;
    detailedIncludes: string[];
};

const storySectionClipPath = 'polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)';

const HomeWorkWithUsAccordion = ({ packages }: { packages: PackageItem[] }) => {
    const [openSlug, setOpenSlug] = useState<PackageItem['slug'] | null>(null);

    return (
        <div className='relative z-10 mt-8 grid gap-4 lg:hidden'>
            {packages.map((pkg, index) => {
                const isOpen = openSlug === pkg.slug;

                return (
                    <button
                        key={pkg.slug}
                        type='button'
                        onClick={() => setOpenSlug((current) => (current === pkg.slug ? null : pkg.slug))}
                        className='story-number-card group relative overflow-hidden border border-white/14 px-5 py-5 text-left transition-all duration-500 ease-out'
                        style={{ clipPath: storySectionClipPath }}
                    >
                        <div className='story-number-card-surface absolute inset-0' />
                        <div className='relative z-10 flex items-start gap-4'>
                            <span className='flex w-14 shrink-0 items-center justify-center text-4xl font-semibold leading-none tracking-[-0.06em] text-[var(--agency-orange)]'>
                                0{index + 1}
                            </span>
                            <div className='min-w-0 flex-1'>
                                <p className='text-lg font-semibold tracking-[-0.05em] text-white'>{pkg.title}</p>
                                <p className={`mt-2 overflow-hidden text-sm leading-6 text-white/80 transition-all duration-500 ease-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {pkg.headline}
                                </p>
                                <div className={`grid overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'mt-3 max-h-48 gap-2 opacity-100' : 'max-h-0 gap-0 opacity-0'}`}>
                                    {pkg.detailedIncludes.map((item) => (
                                        <div
                                            key={item}
                                            className='rounded-[1rem] border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/74'
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </button>
                );
            })}
        </div>
    );
};

export default HomeWorkWithUsAccordion;
