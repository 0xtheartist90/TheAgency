'use client';

import { useRef, useState } from 'react';

import Reveal from '@/app/components/Reveal';

type ServiceProcessSliderProps = {
    steps: Array<{
        number: string;
        title: string;
        line: string;
    }>;
    clipPath: string;
    paginationLabels: string[];
};

const ServiceProcessSlider = ({ steps, clipPath, paginationLabels }: ServiceProcessSliderProps) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [mobilePage, setMobilePage] = useState(0);

    return (
        <>
            <div
                ref={sliderRef}
                className='no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 xl:hidden'
                onScroll={(event) => {
                    const container = event.currentTarget;
                    const cardWidth = container.clientWidth * 0.88 + 16;
                    const nextPage = Math.round(container.scrollLeft / cardWidth);
                    setMobilePage(Math.max(0, Math.min(steps.length - 1, nextPage)));
                }}
            >
                {steps.map((step, index) => (
                    <div key={step.number} className='w-[88%] min-w-[88%] snap-center md:w-[46%] md:min-w-[46%]'>
                        <Reveal delay={index * 70} distance={26}>
                            <article className='process-card process-card--static relative min-h-[200px] overflow-hidden p-6 sm:p-7' style={{ clipPath }}>
                                <div className='process-card-surface absolute inset-0' />
                                <div className='relative z-10'>
                                    <p className='text-[0.88rem] font-medium tracking-[-0.04em] text-[var(--agency-orange)]'>
                                        {step.number}/
                                    </p>
                                    <p className='mt-5 text-[1.45rem] font-semibold leading-[1.04] tracking-[-0.05em] text-white'>
                                        {step.title}
                                    </p>
                                    <p className='mt-4 text-sm leading-7 text-white/68'>{step.line}</p>
                                </div>
                            </article>
                        </Reveal>
                    </div>
                ))}
            </div>
            <div className='mt-5 flex items-center justify-center gap-2 xl:hidden'>
                {steps.map((step, index) => (
                    <button
                        key={step.number}
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
                        aria-label={paginationLabels[index] ?? `Go to item ${index + 1}`}
                        className={`slider-pagination-chip ${index === mobilePage ? 'slider-pagination-chip--active' : 'slider-pagination-chip--services'}`}
                    />
                ))}
            </div>
            <div className='mt-8 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-4'>
                {steps.map((step, index) => (
                    <Reveal key={step.number} delay={index * 70} distance={26}>
                        <article className='process-card process-card--static relative min-h-[200px] overflow-hidden p-6 sm:p-7' style={{ clipPath }}>
                            <div className='process-card-surface absolute inset-0' />
                            <div className='relative z-10'>
                                <p className='text-[0.88rem] font-medium tracking-[-0.04em] text-[var(--agency-orange)]'>
                                    {step.number}/
                                </p>
                                <p className='mt-5 text-[1.45rem] font-semibold leading-[1.04] tracking-[-0.05em] text-white'>
                                    {step.title}
                                </p>
                                <p className='mt-4 text-sm leading-7 text-white/68'>{step.line}</p>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </>
    );
};

export default ServiceProcessSlider;
