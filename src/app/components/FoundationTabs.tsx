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

const FoundationTabs = ({ items, clipPath }: FoundationTabsProps) => {
    const [activeId, setActiveId] = useState(items[0]?.id ?? '');
    const activeItem = items.find((item) => item.id === activeId) ?? items[0];
    const isValuesTab = Boolean(activeItem.values);

    if (!activeItem) {
        return null;
    }

    return (
        <div
            className='process-card process-card--static relative overflow-hidden px-7 py-8 shadow-[0_28px_70px_rgba(30,20,12,0.16)] sm:px-8 sm:py-9'
            style={{ clipPath }}
        >
            <div className='process-card-surface absolute inset-0' />
            <ServiceCardOutline />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,109,24,0.14),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_42%,transparent_72%,rgba(255,255,255,0.04))]' />

            <div className='relative z-10 min-h-[31rem]'>
                <div className='flex justify-end'>
                    <div className='inline-flex rounded-full border border-white/12 bg-black/12 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'>
                    {items.map((item) => {
                        const isActive = item.id === activeItem.id;

                        return (
                            <button
                                key={item.id}
                                type='button'
                                onClick={() => setActiveId(item.id)}
                                className={`rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] transition ${
                                    isActive
                                        ? 'bg-[var(--agency-orange)] text-white shadow-[0_10px_24px_rgba(255,109,24,0.28)]'
                                        : 'text-white/68 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                    </div>
                </div>

                <div
                    className={`mt-6 grid gap-8 ${isValuesTab ? 'lg:grid-cols-1' : 'lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start'}`}
                >
                    <div className='flex min-h-[21rem] flex-col justify-start'>
                        {!isValuesTab ? (
                            <div className='relative h-[88px] w-[88px]'>
                                <Image
                                    src={activeItem.icon}
                                    alt={activeItem.label}
                                    fill
                                    className='object-contain object-left'
                                    style={{ transform: `scale(${activeItem.iconScale ?? 1})` }}
                                />
                            </div>
                        ) : (
                            <div className='h-[88px] w-[88px]' aria-hidden='true' />
                        )}
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
                            <div className='mt-6 grid gap-3 sm:grid-cols-2'>
                                {activeItem.values.map((value, index) => (
                                    <div
                                        key={value.title}
                                        className='rounded-[1.15rem] border border-white/10 bg-white/[0.03] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
                                    >
                                        <p className='text-[0.75rem] font-semibold tracking-[0.02em] text-[var(--agency-orange)]'>
                                            0{index + 1}/
                                        </p>
                                        <p className='mt-2 text-base font-semibold leading-tight text-white'>
                                            {value.title}
                                        </p>
                                        <p className='mt-1 text-[0.92rem] leading-6 text-white/62'>
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </div>

                    {!isValuesTab ? (
                        <div className='relative self-start overflow-hidden'>
                            <div className='absolute inset-0 bg-[radial-gradient(circle_at_26%_24%,rgba(255,109,24,0.12),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0)_32%)]' />
                            {activeItem.visual ? (
                                <div
                                    className='relative z-10 aspect-[4/3] w-full overflow-hidden'
                                    style={{ clipPath }}
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
                                    className='relative z-10 flex aspect-[4/3] w-full items-center justify-center border border-dashed border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-6 text-center'
                                    style={{ clipPath }}
                                >
                                    <div>
                                        <span className='text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[var(--agency-orange)]'>
                                            Visual Slot
                                        </span>
                                        <p className='mt-4 max-w-[16ch] text-[2rem] font-semibold leading-[1.02] tracking-[-0.06em] text-white'>
                                            {activeItem.label} image here
                                        </p>
                                        <p className='mt-4 max-w-[24ch] text-sm leading-7 text-white/56'>
                                            Drop in the supporting visual for the {activeItem.label.toLowerCase()} tab without changing the card layout.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default FoundationTabs;
