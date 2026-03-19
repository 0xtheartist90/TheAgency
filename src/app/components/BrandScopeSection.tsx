'use client';

import { useState } from 'react';

import Reveal from '@/app/components/Reveal';

type ScopeItem = {
    label: string;
    detail: string;
};

type ScopeGroup = {
    number: string;
    title: string;
    items: readonly ScopeItem[];
};

type BrandScopeSectionProps = {
    groups: readonly ScopeGroup[];
    clipPath: string;
};

const BrandScopeSection = ({ groups, clipPath }: BrandScopeSectionProps) => {
    const [activeItems, setActiveItems] = useState<Record<string, string>>(
        Object.fromEntries(groups.map((group) => [group.title, group.items[0]?.label ?? '']))
    );

    return (
        <div className='mt-8 grid gap-5 lg:grid-cols-3'>
            {groups.map((group) => {
                const activeLabel = activeItems[group.title] ?? group.items[0]?.label ?? '';
                const activeItem =
                    group.items.find((item) => item.label === activeLabel) ?? group.items[0];

                return (
                    <Reveal key={group.title} delay={80 + Number(group.number) * 70} distance={28}>
                        <article
                            className='glass-panel flex h-full flex-col p-7 sm:p-8'
                            style={{ clipPath }}
                        >
                            <p className='text-[0.82rem] font-medium tracking-[-0.04em] text-[var(--agency-orange)]'>
                                {group.number} -
                            </p>
                            <p className='mt-4 text-2xl font-semibold tracking-[-0.05em] text-white'>
                                {group.title}
                            </p>

                            <div className='mt-6 grid gap-3'>
                                {group.items.map((item) => {
                                    const isActive = item.label === activeItem?.label;

                                    return (
                                        <button
                                            key={item.label}
                                            type='button'
                                            onClick={() =>
                                                setActiveItems((current) => ({
                                                    ...current,
                                                    [group.title]: item.label
                                                }))
                                            }
                                            className={`border px-4 py-3 text-left text-sm transition [clip-path:polygon(0.9rem_0,100%_0,calc(100%-0.9rem)_100%,0_100%)] ${
                                                isActive
                                                    ? 'border-[var(--agency-orange)] bg-white/8 text-white'
                                                    : 'border-white/8 bg-white/5 text-white/80 hover:border-[var(--agency-orange)]/45 hover:bg-white/8 hover:text-white'
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className='mt-6 rounded-[1rem] border border-white/8 bg-white/5 px-5 py-4 text-sm leading-7 text-white/72'>
                                {activeItem?.detail}
                            </div>
                        </article>
                    </Reveal>
                );
            })}
        </div>
    );
};

export default BrandScopeSection;
