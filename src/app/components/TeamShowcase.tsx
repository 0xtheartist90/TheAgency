'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Reveal from '@/app/components/Reveal';

type TeamMember = {
    number: string;
    name: string;
    role: string;
    focus: string;
    summary: string;
    detail: string;
    strengths: string[];
    image: string;
};

type TeamShowcaseProps = {
    members: TeamMember[];
    copy: {
        eyebrow: string;
        title: string;
        intro: string;
        contributionLabel: string;
        focusLabel: string;
    };
};

const CLOSED_WIDTH = '21.7391%';
const EXPANDED_WIDTH = '53.0435%';
const COLLAPSED_CLIP_PATH = 'polygon(28% 0, 100% 0, 72% 100%, 0 100%)';
const EXPANDED_CLIP_PATH = 'polygon(11.48% 0, 100% 0, 88.52% 100%, 0 100%)';
const CLOSED_LEFTS = [
    '0%',
    '15.6522%',
    '31.3044%',
    '46.9566%',
    '62.6088%',
    '78.261%'
] as const;

const TeamShowcase = ({ members, copy }: TeamShowcaseProps) => {
    const [activeMemberName, setActiveMemberName] = useState<string | null>(null);
    const activeMember = members.find((member) => member.name === activeMemberName) ?? null;
    const activeIndex = activeMemberName ? members.findIndex((member) => member.name === activeMemberName) : -1;
    const expandedStartIndex = activeIndex >= 0 ? Math.min(activeIndex, members.length - 3) : -1;

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window.innerWidth >= 1280) return;

        setActiveMemberName((current) => current ?? 'Ace');
    }, []);

    return (
        <section className='relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 lg:px-8 lg:py-18 xl:min-h-[100svh]'>
            <video className='absolute inset-0 h-full w-full object-cover' autoPlay muted loop playsInline>
                <source src='/images/Home/conveyer.webm' type='video/webm' />
            </video>
            <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.74)_0%,rgba(14,14,14,0.58)_24%,rgba(14,14,14,0.7)_56%,rgba(14,14,14,0.86)_100%)]' />

            <div className='relative mx-auto flex max-w-[1760px] flex-col xl:min-h-[calc(100svh-7rem)]'>
                <div className='mb-10 max-w-3xl'>
                    <Reveal distance={22}>
                        <p className='text-[0.74rem] font-semibold uppercase tracking-[0.34em] text-white/88'>{copy.eyebrow}</p>
                    </Reveal>
                    <Reveal delay={60} distance={30}>
                        <h2 className='mt-5 text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl'>
                            {copy.title}
                        </h2>
                    </Reveal>
                    <Reveal delay={120} distance={22}>
                        <p className='mt-5 max-w-2xl text-lg leading-8 text-white/72'>
                            {copy.intro}
                        </p>
                    </Reveal>
                </div>

                <div className='hidden flex-1 xl:block'>
                    <Reveal className='relative h-[calc(100svh-22rem)] min-h-[46rem] overflow-visible' delay={160} distance={34}>
                        {members.map((member, index) => {
                            const isActive = member.name === activeMemberName;
                            const hasActiveMember = activeMemberName !== null;
                            const isCoveredByExpandedPanel =
                                hasActiveMember &&
                                expandedStartIndex >= 0 &&
                                index >= expandedStartIndex &&
                                index <= expandedStartIndex + 2 &&
                                !isActive;
                            const panelLeft = isActive
                                ? CLOSED_LEFTS[expandedStartIndex]
                                : CLOSED_LEFTS[index];

                            return (
                                <button
                                    key={member.name}
                                    type='button'
                                    onClick={() => {
                                        setActiveMemberName((current) => (current === member.name ? null : member.name));
                                    }}
                                    className='team-panel-card group absolute top-0 bottom-0 overflow-hidden border border-white/22 bg-[#121216] text-left shadow-[0_24px_60px_rgba(0,0,0,0.28)] focus:outline-none'
                                    style={{
                                        left: panelLeft,
                                        width: isActive ? EXPANDED_WIDTH : CLOSED_WIDTH,
                                        zIndex: isActive ? members.length + 10 : members.length - index,
                                        filter: hasActiveMember && !isActive ? 'brightness(0.72)' : 'none',
                                        opacity: isCoveredByExpandedPanel ? 0 : hasActiveMember && !isActive ? 0.94 : 1,
                                        borderColor: isActive ? 'rgba(255,106,0,0.82)' : 'rgba(255,255,255,0.2)',
                                        clipPath: isActive ? EXPANDED_CLIP_PATH : COLLAPSED_CLIP_PATH,
                                        pointerEvents: isCoveredByExpandedPanel ? 'none' : 'auto'
                                    }}
                                >
                                    <div className='absolute inset-0'>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            sizes='(min-width: 1280px) 50vw, 100vw'
                                            className={`object-cover transition-[transform,filter,object-position] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                                isActive
                                                    ? member.name === 'Ace'
                                                        ? 'object-[72%_center] scale-105 grayscale-0'
                                                        : 'object-center scale-105 grayscale-0'
                                                    : 'object-right scale-100 grayscale-[0.18]'
                                            }`}
                                        />
                                        <div
                                            className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                                isActive
                                                    ? 'bg-[linear-gradient(180deg,rgba(255,124,40,0.08)_0%,rgba(14,14,16,0.12)_22%,rgba(14,14,16,0.56)_54%,rgba(14,14,16,0.9)_100%)]'
                                                    : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(14,14,16,0.12)_32%,rgba(14,14,16,0.82)_100%)]'
                                            }`}
                                        />
                                        <div className='absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.16)_18%,transparent_34%)] opacity-40' />
                                    </div>

                                    <div className='relative z-10 h-full'>
                                        <div
                                            className={`flex h-full flex-col justify-end px-6 pb-10 pt-10 transition-[opacity,transform] duration-500 ease-out ${
                                                isActive ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
                                            }`}
                                        >
                                            <div className='pl-[2.9rem] pr-2'>
                                                <p className='text-[3.5rem] leading-none font-light tracking-[-0.08em] text-white/92'>
                                                    {member.number}
                                                </p>
                                                <p className='mt-3 text-[2rem] font-semibold tracking-[-0.06em] text-white'>
                                                    {member.name}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className={`absolute inset-0 flex h-full flex-col justify-between px-10 py-10 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                                isActive ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-10 opacity-0'
                                            }`}
                                        >
                                            <div className='max-w-[42rem] pl-[15%] pr-[13%]'>
                                                <p className='text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                                    {member.name}
                                                </p>
                                                <h3 className='mt-4 max-w-[9ch] text-[clamp(2.5rem,2.9vw,3.8rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-white'>
                                                    {member.role}
                                                </h3>
                                            </div>

                                            <div className='relative max-w-[44rem] pl-[15%] pr-[13%]'>
                                                <div className='mb-4 w-full bg-[linear-gradient(180deg,rgba(10,10,14,0.72),rgba(10,10,14,0.38))] px-6 py-5 shadow-[0_18px_54px_rgba(0,0,0,0.22)] backdrop-blur-[3px]'>
                                                    <p className='text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--agency-orange)]'>
                                                        {copy.contributionLabel}
                                                    </p>
                                                    <p className='mt-3 text-[1rem] leading-7 text-white/78'>
                                                        {member.summary}
                                                    </p>
                                                </div>

                                                <div className='grid gap-3 md:grid-cols-3'>
                                                    {member.strengths.map((strength) => (
                                                        <div key={strength} className='process-card relative overflow-hidden p-5'>
                                                            <div className='process-card-surface absolute inset-0' />
                                                            <div className='relative z-10'>
                                                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--agency-orange)]'>
                                                                    {copy.focusLabel}
                                                                </p>
                                                                <p className='mt-3 text-lg font-semibold tracking-[-0.04em] text-white'>
                                                                    {strength}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </Reveal>
                </div>

                <div className='xl:hidden'>
                    {activeMember && (
                        <Reveal delay={180} distance={24}>
                            <div className='team-mobile-card process-card relative overflow-hidden p-6 text-left'>
                                <div className='process-card-surface absolute inset-0' />
                                <div className='relative z-10'>
                                    <p className='text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                        {activeMember.number}
                                    </p>
                                    <h3 className='mt-3 text-2xl font-semibold tracking-[-0.05em] text-white'>
                                        {activeMember.name}
                                    </h3>
                                    <p className='mt-2 text-sm uppercase tracking-[0.28em] text-white/58'>
                                        {activeMember.role}
                                    </p>

                                    <div className='mt-5 overflow-hidden'>
                                        <div className='process-card relative overflow-hidden'>
                                            <div className='process-card-surface absolute inset-0' />
                                            <div className='relative aspect-[4/3] w-full overflow-hidden'>
                                                <Image
                                                    src={activeMember.image}
                                                    alt={activeMember.name}
                                                    fill
                                                    sizes='(max-width: 1279px) 100vw, 0vw'
                                                    className='object-cover object-top'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <p className='mt-5 text-base leading-8 text-white/74'>{activeMember.summary}</p>
                                    <p className='mt-4 text-sm leading-7 text-white/62'>{activeMember.detail}</p>
                                    <div className='mt-5 grid gap-3 sm:grid-cols-3'>
                                        {activeMember.strengths.map((strength) => (
                                            <div key={strength} className='rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/78'>
                                                {strength}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    )}

                    <Reveal delay={240} distance={18}>
                        <div className='mt-4 grid grid-cols-5 gap-2'>
                            {members
                                .filter((member) => member.name !== activeMemberName)
                                .map((member) => (
                                    <button
                                        key={member.name}
                                        type='button'
                                        onClick={() => {
                                            setActiveMemberName(member.name);
                                        }}
                                        className='team-mobile-card process-card relative aspect-[0.82] overflow-hidden p-0 text-left'
                                    >
                                        <div className='process-card-surface absolute inset-0' />
                                        <div className='absolute inset-0'>
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                sizes='(max-width: 1279px) 20vw, 0vw'
                                                className='object-cover object-top opacity-82'
                                            />
                                            <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,16,0.08)_0%,rgba(14,14,16,0.44)_48%,rgba(14,14,16,0.92)_100%)]' />
                                        </div>
                                        <div className='relative z-10 flex h-full flex-col justify-end p-3'>
                                            <p className='text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--agency-orange)]'>
                                                {member.number}
                                            </p>
                                            <p className='mt-2 text-sm font-semibold leading-tight tracking-[-0.04em] text-white'>
                                                {member.name}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default TeamShowcase;
