'use client';

import { useState } from 'react';

import Image from 'next/image';

type FoundationItem = {
    id: string;
    label: string;
    title: string;
    description: string[];
    icon: string;
    iconScale?: number;
    visual?: string;
    visualAlt?: string;
    visualScale?: number;
    values?: Array<{
        title: string;
        description: string;
    }>;
};

type FoundationTabsProps = {
    items: FoundationItem[];
    clipPath: string;
};

const serviceCardPolygonPoints = '18.6,0.9 99.1,0.9 99.1,99.1 0.9,99.1 0.9,14.6';

const ServiceCardOutline = ({ hover }: { hover?: boolean }) => (
    <svg
        className={`pointer-events-none absolute inset-0 z-10 hidden h-full w-full transition-opacity duration-500 ease-out lg:block ${hover ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 group-hover:opacity-0'}`}
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

const FoundationTabs = ({ items, clipPath }: FoundationTabsProps) => {
    const [activeId, setActiveId] = useState(items[0]?.id ?? '');
    const activeItem = items.find((item) => item.id === activeId) ?? items[0];
    const activeIndex = items.findIndex((item) => item.id === activeItem?.id);

    if (!activeItem) {
        return null;
    }

    return (
        <div
            className='process-card process-card--static relative overflow-hidden px-7 py-8 shadow-[0_28px_70px_rgba(30,20,12,0.16)] [clip-path:none] sm:px-8 sm:py-9 lg:[clip-path:var(--foundation-clip-path)]'
            style={{ ['--foundation-clip-path' as string]: clipPath }}
        >
            <div className='process-card-surface absolute inset-0' />
            <ServiceCardOutline />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,109,24,0.14),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_42%,transparent_72%,rgba(255,255,255,0.04))]' />

            <div className='relative z-10 min-h-[31rem]'>
                <div className='flex justify-center lg:justify-end'>
                    <div
                        className='relative inline-grid border border-white/12 bg-black/12 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] [clip-path:polygon(0.9rem_0,100%_0,calc(100%-0.9rem)_100%,0_100%)]'
                        style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
                    >
                        <div
                            className='foundation-tab-switch__highlight absolute top-1 bottom-1 left-1 z-0 bg-[var(--agency-orange)] shadow-[0_10px_24px_rgba(255,109,24,0.28)] [clip-path:polygon(0.85rem_0,100%_0,calc(100%-0.85rem)_100%,0_100%)]'
                            style={{
                                width: `calc((100% - 0.5rem) / ${items.length})`,
                                transform: `translateX(${Math.max(activeIndex, 0) * 100}%)`
                            }}
                        />
                        {items.map((item) => {
                            const isActive = item.id === activeItem.id;

                            return (
                                <button
                                    key={item.id}
                                    type='button'
                                    onClick={() => setActiveId(item.id)}
                                    className={`foundation-tab-switch__button relative z-10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] [clip-path:polygon(0.85rem_0,100%_0,calc(100%-0.85rem)_100%,0_100%)] ${
                                        isActive ? 'text-white' : 'text-white/68 hover:text-white'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div
                    key={activeItem.id}
                    className='foundation-tab-panel mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start'
                >
                    <div className='foundation-tab-panel__copy flex min-h-[21rem] flex-col justify-start lg:max-h-[21rem]'>
                        <div className='flex h-[88px] w-[88px] items-center justify-center'>
                            <div
                                className='relative h-[72px] w-[72px] drop-shadow-[0_10px_24px_rgba(0,0,0,0.22)]'
                                style={{ transform: `scale(${activeItem.iconScale ?? 1})` }}
                            >
                                <Image
                                    src={activeItem.icon}
                                    alt={activeItem.label}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </div>
                        <p className='mt-5 text-[0.76rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                            {activeItem.label}
                        </p>
                        <h2 className='mt-4 max-w-[16ch] text-3xl font-semibold tracking-[-0.05em] text-white sm:text-[2.15rem]'>
                            {activeItem.title}
                        </h2>

                        <div className='mt-5 max-w-[38rem] space-y-4'>
                            {activeItem.description.map((paragraph) => (
                                <p key={paragraph} className='max-w-[34rem] text-base leading-8 text-white/72'>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        {activeItem.values ? (
                            <div className='mt-5 grid gap-2 sm:grid-cols-2 lg:mt-auto lg:grid-cols-4'>
                                {activeItem.values.map((value, index) => (
                                    <div
                                        key={value.title}
                                        className='rounded-[1rem] border border-white/10 bg-white/[0.03] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
                                    >
                                        <p className='text-[0.72rem] font-semibold tracking-[0.02em] text-[var(--agency-orange)]'>
                                            0{index + 1}/
                                        </p>
                                        <p className='mt-1.5 text-[0.92rem] font-semibold leading-tight text-white'>
                                            {value.title}
                                        </p>
                                        <p className='mt-1 text-[0.8rem] leading-[1.35] text-white/62'>
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </div>

                    <div className='foundation-tab-panel__visual relative self-start overflow-hidden'>
                        <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0)_32%)]' />
                        {activeItem.visual ? (
                            <div
                                className='relative z-10 aspect-[4/3] w-full overflow-hidden [clip-path:none] lg:[clip-path:var(--foundation-clip-path)]'
                                style={{ ['--foundation-clip-path' as string]: clipPath }}
                            >
                                <Image
                                    src={activeItem.visual}
                                    alt={activeItem.visualAlt ?? `${activeItem.label} visual`}
                                    fill
                                    className='object-cover'
                                    style={{ transform: `scale(${activeItem.visualScale ?? 1})` }}
                                />
                            </div>
                        ) : (
                            <div
                                className='relative z-10 aspect-[4/3] w-full overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] [clip-path:none] lg:[clip-path:var(--foundation-clip-path)]'
                                style={{ ['--foundation-clip-path' as string]: clipPath }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoundationTabs;
