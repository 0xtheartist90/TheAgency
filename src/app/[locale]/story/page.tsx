import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Reveal from '@/app/components/Reveal';
import SiteHeader from '@/app/components/SiteHeader';
import { getCopy, locales } from '@/app/site-content';

type Params = {
    locale: string;
};

const storyBody = [
    'We didn’t start this to be an agency.',
    'We started it because we’d seen how things break.',
    'Between us, we’ve worked inside big brands, fast-moving startups, and everything in between. We’ve shipped campaigns, built products, scaled ideas — and also sat through the slow, overcomplicated processes that kill them.',
    'At some point, it stopped making sense.',
    'So we built our own way of working.',
    'A smaller team. Closer collaboration. Less layers. More ownership. The kind of setup where things move — and actually get finished.',
    'We work on projects that matter to us, with people who trust the process, and where we know we can add real value.'
];

const team = [
    { name: 'Ace', role: 'Systems & structure' },
    { name: 'Rich', role: 'Strategy & direction' },
    { name: 'Roy', role: 'Build & execution' },
    { name: 'Kris', role: 'Design & experience' },
    { name: 'Ben', role: 'Growth & performance' },
    { name: 'Aura', role: 'Brand & storytelling' }
];

const beliefs = [
    'Speed is a feature',
    'Clarity beats complexity',
    'Done is better than perfect',
    'Small teams do better work'
];

const process = [
    'Campfire',
    'Discovery',
    'Build',
    'Launch'
];

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { locale } = await params;
    const copy = getCopy(locale);

    return {
        title: `${copy.nav.story} | The Agency`,
        description: 'We didn’t start this to be an agency. We built our own way of working.'
    };
}

const StoryPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    if (!locales.includes(locale as (typeof locales)[number])) {
        notFound();
    }

    const copy = getCopy(locale);

    return (
        <main className='agency-shell bg-[var(--agency-cream)] text-white'>
            <SiteHeader locale={locale} path='/story' />

            <section className='relative min-h-[56vh] overflow-hidden lg:min-h-[62vh]'>
                <video
                    className='absolute inset-0 h-full w-full object-cover'
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload='auto'
                >
                    <source src='/images/Home/hero-agency.webm' type='video/webm' />
                </video>
                <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.12)_24%,rgba(18,18,22,0.14)_54%,rgba(18,18,22,0.42)_100%)]' />

                <div className='relative z-10 mx-auto flex min-h-[56vh] max-w-[1760px] items-end px-4 pb-12 pt-28 sm:px-6 lg:min-h-[62vh] lg:px-8 lg:pb-14'>
                    <div className='grid w-full gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end'>
                        <Reveal className='max-w-4xl' distance={44}>
                            <p className='text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                OUR STORY
                            </p>
                            <h1 className='mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl'>
                                We didn’t start this to be an agency.
                            </h1>
                            <p className='mt-6 max-w-2xl text-lg leading-8 text-white/76'>
                                We started it because we’d seen how things break.
                            </p>
                        </Reveal>

                        <Reveal className='lg:justify-self-end' delay={140} distance={40}>
                            <div className='glass-panel max-w-xl rounded-[1.9rem] p-7 sm:p-8'>
                                <p className='text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-white/46'>
                                    Different strengths. Same mindset.
                                </p>
                                <p className='mt-4 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-[2rem]'>
                                    Keep it simple. Keep it moving. Make it good.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[linear-gradient(180deg,#1b1b20_0%,#23232a_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,109,24,0.14),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(255,255,255,0.06),transparent_22%)]' />

                <div className='relative z-10 mx-auto max-w-7xl'>
                    <div className='grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start'>
                        <Reveal distance={42}>
                            <div className='max-w-3xl'>
                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-white/88'>
                                    Why we built this
                                </p>
                                <div className='mt-6 space-y-6 text-lg leading-8 text-white/78'>
                                    {storyBody.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        <Reveal className='grid gap-4 lg:pt-14' delay={140} distance={44}>
                            <div className='rounded-[1.8rem] border border-white/10 bg-white/8 p-6 backdrop-blur-sm'>
                                <p className='text-[0.76rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                    Mission
                                </p>
                                <h2 className='mt-4 text-3xl font-semibold tracking-[-0.05em] text-white'>
                                    To build work that actually moves things forward.
                                </h2>
                                <p className='mt-4 text-base leading-8 text-white/74'>
                                    Not just visuals. Not just strategy decks. But real outputs — products, brands, systems — that launch, perform, and evolve.
                                </p>
                                <p className='mt-4 text-base leading-8 text-white/62'>
                                    We focus on clarity, speed, and execution. Because good ideas are everywhere — but finishing them properly is rare.
                                </p>
                            </div>

                            <div className='rounded-[1.8rem] border border-white/10 bg-white/8 p-6 backdrop-blur-sm'>
                                <p className='text-[0.76rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                    Vision
                                </p>
                                <h2 className='mt-4 text-3xl font-semibold tracking-[-0.05em] text-white'>
                                    A new kind of agency model.
                                </h2>
                                <p className='mt-4 text-base leading-8 text-white/74'>
                                    Smaller, sharper, and more involved.
                                </p>
                                <p className='mt-4 text-base leading-8 text-white/62'>
                                    Strategy and execution live in the same room. Ideas don’t get lost in handovers. Every project gets the attention it deserves.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className='bg-[linear-gradient(180deg,#f5eee6_0%,#efe4d5_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='mx-auto max-w-7xl'>
                    <div className='grid gap-8 lg:grid-cols-[1fr_1fr]'>
                        <Reveal
                            className='overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#17171b_0%,#232329_100%)] p-8 text-white shadow-[0_28px_90px_rgba(30,20,12,0.16)]'
                            distance={38}
                        >
                            <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                What we believe
                            </p>
                            <div className='mt-8 space-y-5'>
                                {beliefs.map((belief) => (
                                    <div
                                        key={belief}
                                        className='border-b border-white/8 pb-4 text-2xl font-semibold tracking-[-0.05em] last:border-b-0 last:pb-0 sm:text-[2rem]'
                                    >
                                        {belief}
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal
                            className='overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#17171b_0%,#232329_100%)] p-8 text-white shadow-[0_28px_90px_rgba(30,20,12,0.16)]'
                            delay={120}
                            distance={38}
                        >
                            <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                How we work
                            </p>
                            <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                                {process.map((item, index) => (
                                    <div
                                        key={item}
                                        className='rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-sm'
                                    >
                                        <p className='text-[0.9rem] font-medium tracking-[-0.04em] text-white/42'>
                                            0{index + 1}/
                                        </p>
                                        <p className='mt-3 text-2xl font-semibold tracking-[-0.05em] text-white'>
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <p className='mt-6 text-base leading-8 text-white/62'>
                                From idea to reality, without unnecessary steps.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 lg:px-8 lg:py-18'>
                <video
                    className='absolute inset-0 h-full w-full object-cover'
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src='/images/Home/conveyer.webm' type='video/webm' />
                </video>
                <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.72)_0%,rgba(14,14,14,0.56)_100%)]' />

                <div className='relative mx-auto max-w-7xl'>
                    <Reveal distance={40}>
                        <div className='mb-10 max-w-3xl'>
                            <p className='text-[0.74rem] font-semibold uppercase tracking-[0.34em] text-white/88'>
                                THE TEAM
                            </p>
                            <h2 className='mt-5 text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl'>
                                A small team, built on trust.
                            </h2>
                            <p className='mt-5 max-w-2xl text-lg leading-8 text-white/72'>
                                We’re not a network. Not freelancers stitched together. Just a group of people who’ve worked together, built together, and decided to keep doing it — properly.
                            </p>
                        </div>
                    </Reveal>

                    <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
                        {team.map((member, index) => (
                            <Reveal key={member.name} delay={index * 90} distance={34}>
                                <article className='overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/8 backdrop-blur-sm'>
                                    <div className='aspect-[4/4.4] overflow-hidden'>
                                        <Image
                                            src='/images/Home/ace.png'
                                            alt={member.name}
                                            width={900}
                                            height={1125}
                                            className='h-full w-full object-cover'
                                        />
                                    </div>
                                    <div className='p-6'>
                                        <p className='text-[0.76rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                            {member.name}
                                        </p>
                                        <p className='mt-3 text-2xl font-semibold tracking-[-0.05em] text-white'>
                                            {member.role}
                                        </p>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={220} distance={30}>
                        <p className='mt-10 text-base leading-8 text-white/62'>
                            Different strengths, same mindset: keep it simple, keep it moving, make it good.
                        </p>
                    </Reveal>
                </div>
            </section>

            <footer className='bg-[linear-gradient(180deg,#17171b_0%,#121216_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='mx-auto max-w-7xl'>
                    <Reveal className='overflow-hidden rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(33,33,39,0.94)_0%,rgba(18,18,22,0.98)_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.34)]'>
                        <div className='grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-10'>
                            <div className='max-w-2xl'>
                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                    The Agency
                                </p>
                                <Image
                                    src='/images/Logo/the-agency-logo-orange.webp'
                                    alt='The Agency'
                                    width={240}
                                    height={68}
                                    className='mt-4 h-10 w-auto'
                                />
                                <p className='mt-5 max-w-xl text-sm leading-7 text-white/58'>
                                    Small team. Sharp execution. Built for work that needs taste, momentum, and real follow-through.
                                </p>
                            </div>

                            <div className='lg:justify-self-end'>
                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/34'>
                                    Explore
                                </p>
                                <div className='mt-5 flex max-w-md flex-wrap gap-3'>
                                    <Link href={`/${locale}`} className='rounded-full border border-white/9 bg-white/[0.04] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/48 transition hover:text-white'>
                                        Home
                                    </Link>
                                    <Link href={`/${locale}/services`} className='rounded-full border border-white/9 bg-white/[0.04] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/48 transition hover:text-white'>
                                        {copy.nav.services}
                                    </Link>
                                    <Link href={`/${locale}/work`} className='rounded-full border border-white/9 bg-white/[0.04] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/48 transition hover:text-white'>
                                        {copy.nav.work}
                                    </Link>
                                    <Link href={`/${locale}/contact`} className='rounded-full border border-white/9 bg-white/[0.04] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/48 transition hover:text-white'>
                                        {copy.nav.contact}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </footer>
        </main>
    );
};

export default StoryPage;
