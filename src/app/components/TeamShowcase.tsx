'use client';

import { useState } from 'react';
import Image from 'next/image';

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

const TeamShowcase = ({ members }: TeamShowcaseProps) => {
    const [activeMemberName, setActiveMemberName] = useState<string | null>(null);
    const activeMember = members.find((member) => member.name === activeMemberName) ?? null;
    const activeIndex = activeMemberName ? members.findIndex((member) => member.name === activeMemberName) : -1;
    const expandedStartIndex = activeIndex >= 0 ? Math.min(activeIndex, members.length - 3) : -1;

    return (
        <section className='relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 lg:px-8 lg:py-18 xl:min-h-[100svh]'>
            <video className='absolute inset-0 h-full w-full object-cover' autoPlay muted loop playsInline>
                <source src='/images/Home/conveyer.webm' type='video/webm' />
            </video>
            <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.74)_0%,rgba(14,14,14,0.58)_24%,rgba(14,14,14,0.7)_56%,rgba(14,14,14,0.86)_100%)]' />

            <div className='relative mx-auto flex max-w-[1760px] flex-col xl:min-h-[calc(100svh-7rem)]'>
                <div className='mb-10 max-w-3xl'>
                    <p className='text-[0.74rem] font-semibold uppercase tracking-[0.34em] text-white/88'>THE TEAM</p>
                    <h2 className='mt-5 text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl'>
                        A small team, built on trust.
                    </h2>
                    <p className='mt-5 max-w-2xl text-lg leading-8 text-white/72'>
                        Click a teammate to open the section and see how they contribute to the work.
                    </p>
                </div>

                <div className='hidden flex-1 xl:block'>
                    <div className='relative h-[calc(100svh-22rem)] min-h-[46rem] overflow-visible'>
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
                                                        Contribution
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
                                                                    Focus
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
                    </div>
                </div>

                <div className='grid gap-4 xl:hidden'>
                    {members.map((member) => {
                        const isActive = member.name === activeMemberName;

                        return (
                            <button
                                key={member.name}
                                type='button'
                                onClick={() => {
                                    setActiveMemberName((current) => (current === member.name ? null : member.name));
                                }}
                                className='team-mobile-card process-card relative overflow-hidden p-6 text-left'
                            >
                                <div className='process-card-surface absolute inset-0' />
                                <div className='relative z-10'>
                                    <p className='text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                        {member.number}
                                    </p>
                                    <h3 className='mt-3 text-2xl font-semibold tracking-[-0.05em] text-white'>
                                        {member.name}
                                    </h3>
                                    <p className='mt-2 text-sm uppercase tracking-[0.28em] text-white/58'>
                                        {member.role}
                                    </p>
                                    <div
                                        className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${
                                            isActive ? 'mt-5 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
                                        }`}
                                    >
                                        <div className='overflow-hidden'>
                                            <p className='text-base leading-8 text-white/74'>{member.summary}</p>
                                            <p className='mt-4 text-sm leading-7 text-white/62'>{member.detail}</p>
                                            <div className='mt-5 grid gap-3 sm:grid-cols-3'>
                                                {member.strengths.map((strength) => (
                                                    <div key={strength} className='rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/78'>
                                                        {strength}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TeamShowcase;
