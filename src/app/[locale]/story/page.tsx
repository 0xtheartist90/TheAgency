import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Reveal from '@/app/components/Reveal';
import FoundationTabs from '@/app/components/FoundationTabs';
import { fireflies } from '@/app/fonts';
import SiteHeader from '@/app/components/SiteHeader';
import TeamShowcase from '@/app/components/TeamShowcase';
import { getCopy, locales } from '@/app/site-content';

type Params = {
    locale: string;
};

const storyBody = [
    'Most projects slow down because too many people are involved — and no one owns the outcome.',
    'We keep it simple.',
    'A small team, working closely with you, building in the open and moving fast from idea to execution.',
    'You see the work as it happens. You shape it with us. And it gets finished properly.'
];

const team = [
    {
        number: '01',
        name: 'Ace',
        role: 'Systems & structure',
        focus: 'Keeps the work moving with clean systems, timelines, and internal clarity.',
        summary: 'Ace builds the operating layer behind the agency. The work feels sharper because the process is tighter.',
        detail:
            'From project setup to internal workflows, the focus is always the same: remove friction, create momentum, and make sure the team can execute without noise.',
        strengths: ['Process architecture', 'Project flow', 'Operational clarity'],
        image: '/images/Story/Ace.png'
    },
    {
        number: '02',
        name: 'Rich',
        role: 'Strategy & direction',
        focus: 'Shapes the overall direction so the work stays commercially sharp, not just visually good.',
        summary: 'Rich helps define the bigger picture. Positioning, priorities, sequencing, and the decisions that make the work land harder.',
        detail:
            'That means translating messy inputs into a cleaner direction the whole team can build against, without losing the original intent behind the project.',
        strengths: ['Positioning', 'Offer clarity', 'Decision-making'],
        image: '/images/Story/Rich.png'
    },
    {
        number: '03',
        name: 'Roy',
        role: 'Build & execution',
        focus: 'Turns ideas into launch-ready outputs with a bias toward shipping and getting the details right.',
        summary: 'Roy lives in the build phase. The focus is making sure design, product, and implementation all meet in the same finished result.',
        detail:
            'Less handoff. Less drift. More direct execution. The goal is always to keep momentum high while protecting quality where it counts.',
        strengths: ['Frontend build', 'Implementation', 'Shipping'],
        image: '/images/Story/Roy.png'
    },
    {
        number: '04',
        name: 'Kris',
        role: 'Design & experience',
        focus: 'Shapes the visual language and interaction detail so the work feels premium, clear, and intentional.',
        summary: 'Kris brings taste into the room and makes sure the product experience earns the positioning around it.',
        detail:
            'That spans interface thinking, visual systems, pacing, hierarchy, and all the small design calls that change how the final work is perceived.',
        strengths: ['UX direction', 'Visual systems', 'Interaction detail'],
        image: '/images/Story/Cris.png'
    },
    {
        number: '05',
        name: 'Ben',
        role: 'Growth & performance',
        focus: 'Connects the creative work to measurable outcomes like traction, conversion, and scale.',
        summary: 'Ben keeps the work accountable to performance. Creative quality matters, but so does what happens after launch.',
        detail:
            'That means using testing, optimization, and channel thinking to turn polished work into something that keeps compounding after it ships.',
        strengths: ['Optimization', 'Campaign thinking', 'Performance loops'],
        image: '/images/Story/Ben.png'
    },
    {
        number: '06',
        name: 'Aura',
        role: 'Brand & storytelling',
        focus: 'Makes sure the brand voice, narrative, and emotional layer feel coherent across everything.',
        summary: 'Aura helps projects feel like more than assembled outputs. The story, tone, and brand texture all need to connect.',
        detail:
            'That is what turns positioning into something people can actually feel, remember, and trust once the work is out in the world.',
        strengths: ['Narrative systems', 'Brand language', 'Creative consistency'],
        image: '/images/Story/Aura.png'
    }
];

const uspValues = [
    {
        title: 'Clarity first',
        description: 'We strip away noise early.'
    },
    {
        title: 'Focus on what matters',
        description: 'We focus on the moves that change outcomes.'
    },
    {
        title: 'Build in the open',
        description: 'Progress stays visible from start to finish.'
    },
    {
        title: 'Own the outcome',
        description: 'We stay accountable for what ships.'
    }
];

const foundationItems = [
    {
        id: 'mission',
        label: 'Mission',
        title: 'To build work that actually moves things forward.',
        description: [
            'Not just visuals. Not just strategy decks. But real outputs — products, brands, systems — that launch, perform, and evolve.',
            'We focus on clarity, speed, and execution. Because good ideas are everywhere — but finishing them properly is rare.'
        ],
        icon: '/images/Icons/image 29.webp',
        iconScale: 1,
        visual: '/images/Story/Mission.png',
        visualAlt: 'Mission concept visual',
        visualScale: 1
    },
    {
        id: 'vision',
        label: 'Vision',
        title: 'A new kind of agency model.',
        description: [
            'Smaller, sharper, and more involved.',
            'Strategy and execution live in the same room. Ideas don’t get lost in handovers. Every project gets the attention it deserves.'
        ],
        icon: '/images/Icons/image 45.webp',
        iconScale: 1,
        visual: '/images/Story/vision.png',
        visualAlt: 'Vision concept visual',
        visualScale: 1.12
    },
    {
        id: 'values',
        label: 'Values',
        title: 'The rules we do not compromise on.',
        description: [
            'A few non-negotiables shape how we work.'
        ],
        icon: '/images/Icons/image 41.webp',
        iconScale: 1,
        values: uspValues
    }
];

const storyCardClipPath = 'polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)';
const serviceCardClipPath = 'polygon(18% 0, 100% 0, 100% 100%, 0 100%, 0 14%)';

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

                <div className='relative z-10 mx-auto flex min-h-[56vh] max-w-[1760px] items-center justify-center px-4 pt-28 sm:px-6 lg:min-h-[62vh] lg:px-8'>
                    <Reveal className='flex w-full justify-center' distance={44}>
                        <h1 className={`${fireflies.className} text-center text-[6.5rem] leading-none text-white sm:text-[8.5rem] lg:text-[12rem] xl:text-[14rem]`}>
                            The Story
                        </h1>
                    </Reveal>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[linear-gradient(180deg,#1b1b20_0%,#23232a_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,109,24,0.14),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(255,255,255,0.06),transparent_22%)]' />

                <div className='relative z-10 mx-auto max-w-7xl'>
                    <div className='grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center'>
                        <Reveal distance={42}>
                            <div className='max-w-4xl'>
                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-white/88'>
                                    About
                                </p>
                                <p className='mt-5 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.06em] text-white sm:text-4xl'>
                                    No layers. No handovers. No black box.
                                </p>
                                <div className='mt-7 border-l border-[var(--agency-orange)]/40 pl-6 text-base leading-8 text-white/74 sm:pl-8 sm:text-lg'>
                                    {storyBody.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={140} distance={44}>
                            <div
                                className='process-card relative overflow-hidden p-4 shadow-[0_34px_110px_rgba(0,0,0,0.24)] sm:p-5'
                                style={{ clipPath: storyCardClipPath }}
                            >
                                <div className='process-card-surface absolute inset-0' />
                                <div className='absolute inset-0 bg-[radial-gradient(circle_at_26%_20%,rgba(255,109,24,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_38%)]' />
                                <div className='relative z-10 overflow-hidden' style={{ clipPath: storyCardClipPath }}>
                                    <Image
                                        src='/images/Story/carryingcube.png'
                                        alt='Carrying cube'
                                        width={1200}
                                        height={1400}
                                        className='h-auto w-full object-cover'
                                    />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <TeamShowcase members={team} />

            <section className='relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <video
                    className='absolute inset-0 h-full w-full object-cover'
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='auto'
                    aria-hidden='true'
                >
                    <source src='/images/Home/smoothbg.mp4' type='video/mp4' />
                </video>
                <div className='absolute inset-0 bg-[rgba(239,229,215,0.85)]' />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <Reveal delay={40} distance={36}>
                        <FoundationTabs items={foundationItems} clipPath={serviceCardClipPath} />
                    </Reveal>
                </div>
            </section>

            <footer className='bg-[linear-gradient(180deg,#17171b_0%,#121216_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='mx-auto max-w-7xl'>
                    <Reveal className='grid gap-10 py-4 sm:py-6 lg:grid-cols-[1.1fr_0.9fr]' distance={38}>
                        <div className='max-w-2xl'>
                            <Image
                                src='/images/Logo/the-agency-logo-orange.webp'
                                alt='The Agency'
                                width={240}
                                height={68}
                                className='h-10 w-auto'
                            />
                            <p className='mt-5 max-w-xl text-sm leading-7 text-white/58'>
                                Small team. Sharp execution. Built for work that needs taste, momentum, and real follow-through.
                            </p>
                        </div>

                        <div className='lg:justify-self-end'>
                            <p className='text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/34'>
                                Explore
                            </p>
                            <div className='mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/44'>
                                <Link href={`/${locale}`} className='transition hover:text-white/82'>
                                    Home
                                </Link>
                                <Link href={`/${locale}/services/build`} className='transition hover:text-white/82'>
                                    {copy.nav.services}
                                </Link>
                                <Link href={`/${locale}/work`} className='transition hover:text-white/82'>
                                    {copy.nav.work}
                                </Link>
                                <Link href={`/${locale}/contact`} className='transition hover:text-white/82'>
                                    {copy.nav.contact}
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </footer>
        </main>
    );
};

export default StoryPage;
