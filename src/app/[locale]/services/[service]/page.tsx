import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import BrandScopeSection from '@/app/components/BrandScopeSection';
import Reveal from '@/app/components/Reveal';
import SiteHeader from '@/app/components/SiteHeader';
import { fireflies } from '@/app/fonts';
import { getServiceBySlug, serviceSlugs } from '@/app/services-content';
import { getCopy, locales, type Locale } from '@/app/site-content';

type Params = {
    locale: string;
    service: string;
};

const detailCardClipPath = 'polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)';
const packageCardClipPath =
    'polygon(0 12%, 10% 0, 64% 0, 68% 6%, 89% 6%, 94% 0, 100% 0, 100% 88%, 94% 94%, 94% 100%, 0 100%)';

const brandScopeGroups = [
    {
        number: '01',
        title: 'Strategy',
        items: [
            {
                label: 'Positioning',
                detail: 'Define what the brand stands for, how it is framed, and why people should care.'
            },
            {
                label: 'Messaging',
                detail: 'Shape the core language so the brand sounds clear, consistent, and easy to understand.'
            },
            {
                label: 'Brand direction',
                detail: 'Set the overall creative direction so the system feels intentional before design starts.'
            }
        ]
    },
    {
        number: '02',
        title: 'Identity',
        items: [
            {
                label: 'Logo design',
                detail: 'Create a logo that feels ownable, legible, and strong enough to carry the brand.'
            },
            {
                label: 'Visual identity system',
                detail: 'Build the broader visual system so the brand stays recognizable beyond a single mark.'
            },
            {
                label: 'Typography and color',
                detail: 'Choose the type and color rules that make the brand feel consistent across every surface.'
            }
        ]
    },
    {
        number: '03',
        title: 'Application',
        items: [
            {
                label: 'Product mockups',
                detail: 'Show how the brand lands on products, pages, and launch materials before rollout.'
            },
            {
                label: 'Packaging',
                detail: 'Translate the system into packaging that feels considered, premium, and shelf-ready.'
            },
            {
                label: 'Marketing & social visuals',
                detail: 'Extend the brand into campaign and social assets that still feel coherent and on-brand.'
            }
        ]
    }
] as const;

const brandProcessSteps = [
    { number: '01', title: 'Meet & Greet', line: 'Intro and fit check.' },
    { number: '02', title: 'Campfire', line: 'You talk, we listen.' },
    { number: '03', title: 'Discovery', line: 'We define direction.' },
    { number: '04', title: 'Build', line: 'Design in the open.' },
    { number: '05', title: 'Launch', line: 'Refine and deliver.' }
] as const;

const brandWorkPreviews = [
    { title: 'Identity systems' },
    { title: 'Rebrands' },
    { title: 'Applications' }
] as const;

const buildScopeGroups = [
    {
        number: '01',
        title: 'Websites',
        items: [
            {
                label: 'Marketing sites',
                detail: 'High-end websites built to communicate clearly, move fast, and convert with confidence.'
            },
            {
                label: 'Landing pages',
                detail: 'Focused pages for campaigns, launches, and offers that need a sharper conversion path.'
            },
            {
                label: 'CMS setup',
                detail: 'Content systems your team can actually update without breaking the design or flow.'
            }
        ]
    },
    {
        number: '02',
        title: 'Products',
        items: [
            {
                label: 'Apps',
                detail: 'Product experiences built to feel clean, intuitive, and ready for real users.'
            },
            {
                label: 'Dashboards',
                detail: 'Internal and user-facing dashboards that make complex information easier to act on.'
            },
            {
                label: 'Flows',
                detail: 'Core user flows shaped to reduce friction and keep the product moving forward.'
            }
        ]
    },
    {
        number: '03',
        title: 'Systems',
        items: [
            {
                label: 'Frontend build',
                detail: 'Clean implementation that turns polished design into something production-ready.'
            },
            {
                label: 'Design systems',
                detail: 'Reusable UI foundations that help products stay consistent as they grow.'
            },
            {
                label: 'Implementation support',
                detail: 'Technical support that keeps delivery aligned from design decisions through launch.'
            }
        ]
    }
] as const;

const buildWorkPreviews = [{ title: 'Marketing sites' }, { title: 'Products' }, { title: 'Systems' }] as const;

const growScopeGroups = [
    {
        number: '01',
        title: 'Social',
        items: [
            {
                label: 'Social media management',
                detail: 'Plan, organize, and run social channels so the brand stays active, consistent, and commercially useful.'
            },
            {
                label: 'Content planning',
                detail: 'Shape the content calendar around campaigns, offers, launches, and the kind of attention you want to build.'
            },
            {
                label: 'Creative direction',
                detail: 'Keep the output visually sharp so posts, stories, and campaign assets all feel aligned.'
            }
        ]
    },
    {
        number: '02',
        title: 'Ads',
        items: [
            {
                label: 'Meta ads',
                detail: 'Run paid campaigns across Meta with clearer structure, better creative, and tighter performance feedback.'
            },
            {
                label: 'Google ads',
                detail: 'Build search and intent-driven campaigns that capture demand without wasting budget.'
            },
            {
                label: 'Campaign setup',
                detail: 'Set up the account, targeting, conversion flow, and ad structure so performance has a clean base.'
            }
        ]
    },
    {
        number: '03',
        title: 'Optimization',
        items: [
            {
                label: 'Testing',
                detail: 'Test angles, messaging, formats, and creatives to find what actually moves attention into action.'
            },
            {
                label: 'Reporting',
                detail: 'Track what matters clearly so decisions are made from signal, not guesswork.'
            },
            {
                label: 'Scaling',
                detail: 'Increase spend and output carefully once the system is working, without losing efficiency too early.'
            }
        ]
    }
] as const;

const growWorkPreviews = [{ title: 'Paid campaigns' }, { title: 'Social systems' }, { title: 'Performance loops' }] as const;

const automateScopeGroups = [
    {
        number: '01',
        title: 'Workflows',
        items: [
            {
                label: 'Process automation',
                detail: 'Automate repetitive steps so the team spends less time moving information manually.'
            },
            {
                label: 'Task flows',
                detail: 'Build cleaner internal flows for handoff, follow-up, approvals, and routine operations.'
            },
            {
                label: 'Operational logic',
                detail: 'Map the rules behind the workflow so the system runs consistently instead of relying on memory.'
            }
        ]
    },
    {
        number: '02',
        title: 'Systems',
        items: [
            {
                label: 'Internal tools',
                detail: 'Create practical internal systems that make day-to-day work easier to manage and easier to scale.'
            },
            {
                label: 'CRM setup',
                detail: 'Structure the CRM so contacts, leads, and follow-up live in a cleaner working system.'
            },
            {
                label: 'Integrations',
                detail: 'Connect the platforms you already use so data and actions move without extra admin.'
            }
        ]
    },
    {
        number: '03',
        title: 'AI',
        items: [
            {
                label: 'AI workflows',
                detail: 'Use AI where it removes friction, speeds up output, and supports the team in practical ways.'
            },
            {
                label: 'Assistants',
                detail: 'Set up lightweight assistants for research, drafting, routing, and repetitive internal tasks.'
            },
            {
                label: 'Implementation support',
                detail: 'Help the team put the system into use so the automation actually sticks after setup.'
            }
        ]
    }
] as const;

const automateWorkPreviews = [{ title: 'Workflow systems' }, { title: 'Internal tools' }, { title: 'AI automations' }] as const;

const customServiceConfigs = {
    brand: {
        scopeGroups: brandScopeGroups,
        workPreviews: brandWorkPreviews,
        workIntro: 'A few examples of the kind of brand work we shape across identity, rollout, and application.',
        finalTitle: "Let's build a brand that holds up",
        finalIntro:
            "Start with a simple conversation — we'll figure out the right direction together. Building from scratch? The Startup Package is the fastest way to shape the full brand system.",
        secondaryCtaLabel: 'Explore Startup Package',
        secondaryCtaHref: '/startup'
    },
    build: {
        scopeGroups: buildScopeGroups,
        workPreviews: buildWorkPreviews,
        workIntro: 'A few examples of the kind of build work we shape across websites, products, and systems.',
        finalTitle: "Let's build something people can use",
        finalIntro:
            "Start with a simple conversation — we'll figure out the right direction together. Building from scratch? The Startup Package is the fastest way to shape the full product and launch system.",
        secondaryCtaLabel: 'Explore Startup Package',
        secondaryCtaHref: '/startup'
    },
    grow: {
        scopeGroups: growScopeGroups,
        workPreviews: growWorkPreviews,
        workIntro: 'A few examples of the kind of growth work we shape across paid campaigns, social systems, and ongoing optimization.',
        finalTitle: "Let's grow what already has potential",
        finalIntro:
            "Start with a simple conversation — we'll figure out the right direction together. Need growth support around a broader launch? The Scale Package is the fastest way to connect demand generation with ongoing performance.",
        secondaryCtaLabel: 'Explore Scale Package',
        secondaryCtaHref: '/scale'
    },
    automate: {
        scopeGroups: automateScopeGroups,
        workPreviews: automateWorkPreviews,
        workIntro: 'A few examples of the kind of automation work we shape across workflows, internal systems, and AI support.',
        finalTitle: "Let's remove the manual work",
        finalIntro:
            "Start with a simple conversation — we'll figure out the right direction together. Need deeper systems support across the business? The Partner Package is the fastest way to build with us more closely over time.",
        secondaryCtaLabel: 'Explore Partner Package',
        secondaryCtaHref: '/partner'
    }
} as const;

export function generateStaticParams() {
    return locales.flatMap((locale) => serviceSlugs.map((service) => ({ locale, service })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { locale, service } = await params;
    const serviceContent = locales.includes(locale as Locale)
        ? getServiceBySlug(locale as Locale, service)
        : null;

    if (!serviceContent) {
        return {
            title: 'Services | The Agency'
        };
    }

    return {
        title: `${serviceContent.title} | The Agency`,
        description: serviceContent.intro
    };
}

const ServiceDetailPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale, service } = await params;

    if (!locales.includes(locale as Locale)) {
        notFound();
    }

    const copy = getCopy(locale);
    const serviceContent = getServiceBySlug(locale as Locale, service);

    if (!serviceContent) {
        notFound();
    }

    const footer = (
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
                            High-end brand systems, digital products, performance marketing, and automation for businesses ready to look and operate at a higher level.
                        </p>
                    </div>

                    <div className='lg:justify-self-end'>
                        <p className='text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/34'>
                            Explore
                        </p>
                        <div className='mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/44'>
                            <Link href={`/${locale}/story`} className='transition hover:text-white/82'>
                                {copy.nav.story}
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

                <div className='mt-8 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]' />

                <Reveal
                    className='flex flex-col gap-5 py-5 text-sm text-white/42 lg:flex-row lg:items-center lg:justify-between'
                    delay={120}
                    distance={26}
                >
                    <p className='tracking-[0.08em] text-white/34'>© 2026 The Agency. All rights reserved.</p>
                    <Link href={`/${locale}/contact`} className='text-white/44 transition hover:text-white/82'>
                        {copy.home.supportLabel}
                    </Link>
                </Reveal>
            </div>
        </footer>
    );

    const customServiceConfig =
        service === 'brand' || service === 'build' || service === 'grow' || service === 'automate'
            ? customServiceConfigs[service as keyof typeof customServiceConfigs]
            : null;

    if (customServiceConfig) {
        return (
            <main className='agency-shell bg-[var(--agency-cream)] text-white'>
                <SiteHeader locale={locale} path={`/services/${service}`} />

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

                    <div className='relative z-10 mx-auto flex min-h-[56vh] max-w-[1760px] flex-col items-center justify-center px-4 pt-28 text-center sm:px-6 lg:min-h-[62vh] lg:px-8'>
                        <Reveal className='flex w-full justify-center' distance={44}>
                            <div>
                                <p className='mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                    {serviceContent.eyebrow}
                                </p>
                                <h1 className={`${fireflies.className} text-center text-[6.3rem] leading-none text-white sm:text-[8.4rem] lg:text-[11rem] xl:text-[13rem]`}>
                                    {serviceContent.title}
                                </h1>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className='relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                    <video
                        className='absolute inset-0 h-full w-full object-cover'
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-hidden='true'
                    >
                        <source src='/images/Home/smoothbg.mp4' type='video/mp4' />
                    </video>
                    <div className='absolute inset-0 bg-[rgba(239,229,215,0.85)]' />
                    <div className='relative z-10 mx-auto max-w-7xl'>
                        <div className='max-w-3xl'>
                            <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                What we do
                            </p>
                        </div>

                        <Reveal distance={30}>
                            <BrandScopeSection groups={customServiceConfig.scopeGroups} clipPath={packageCardClipPath} />
                        </Reveal>
                    </div>
                </section>

                <section className='relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                    <video
                        className='absolute inset-0 h-full w-full object-cover brightness-[0.52] saturate-[0.9]'
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-hidden='true'
                    >
                        <source src='/images/Home/conveyer.webm' type='video/webm' />
                    </video>
                    <div className='relative z-10 mx-auto max-w-7xl'>
                        <div className='max-w-3xl'>
                            <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-white/88'>
                                How we work
                            </p>
                            <p className='mt-5 text-base leading-8 text-white/72 sm:text-lg'>
                                A clear, collaborative process — with you involved at every step.
                            </p>
                        </div>

                        <div className='mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5'>
                            {brandProcessSteps.map((step, index) => (
                                <Reveal key={step.number} delay={index * 70} distance={26}>
                                    <article className='process-card process-card--static relative min-h-[200px] overflow-hidden p-6 sm:p-7' style={{ clipPath: detailCardClipPath }}>
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
                    </div>
                </section>

                <section className='relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                    <video
                        className='absolute inset-0 h-full w-full object-cover'
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-hidden='true'
                    >
                        <source src='/images/Home/smoothbg.mp4' type='video/mp4' />
                    </video>
                    <div className='absolute inset-0 bg-[rgba(239,229,215,0.85)]' />
                    <div className='relative z-10 mx-auto max-w-7xl'>
                        <div className='max-w-3xl'>
                            <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                Work
                            </p>
                            <p className='mt-5 text-base leading-8 text-[var(--agency-ink)]/78 sm:text-lg'>
                                {customServiceConfig.workIntro}
                            </p>
                        </div>

                        <div className='mt-8 grid gap-5 lg:grid-cols-3'>
                            {customServiceConfig.workPreviews.map((item, index) => (
                                <Reveal key={item.title} delay={index * 70} distance={28}>
                                    <article className='glass-panel h-full border border-white/12 p-7 sm:p-8' style={{ clipPath: detailCardClipPath }}>
                                        <p className='text-2xl font-semibold tracking-[-0.05em] text-white'>{item.title}</p>
                                    </article>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal className='mt-8 flex flex-wrap gap-4' delay={100} distance={24}>
                            <Link href={`/${locale}/work`} className='agency-button agency-button--link text-[var(--agency-ink)] hover:text-[var(--agency-ink)]'>
                                View work
                            </Link>
                        </Reveal>
                    </div>
                </section>

                <section className='relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                    <video
                        className='absolute inset-0 h-full w-full object-cover brightness-[0.52] saturate-[0.9]'
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-hidden='true'
                    >
                        <source src='/images/Home/conveyer.webm' type='video/webm' />
                    </video>
                    <div className='relative z-10 mx-auto max-w-7xl'>
                        <Reveal distance={30}>
                            <div className='rounded-[2rem] bg-[linear-gradient(135deg,#17171b_0%,#232329_100%)] p-8 text-white shadow-[0_28px_90px_rgba(30,20,12,0.16)] sm:p-10'>
                                <div className='max-w-3xl'>
                                    <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                        Next
                                    </p>
                                    <h2 className='mt-5 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl'>
                                        {customServiceConfig.finalTitle}
                                    </h2>
                                    <p className='mt-5 text-base leading-8 text-white/72 sm:text-lg'>
                                        {customServiceConfig.finalIntro}
                                    </p>
                                    <div className='mt-8 flex flex-wrap gap-4'>
                                        <Link href={`/${locale}/contact`} className='agency-button agency-button--solid'>
                                            Start your project
                                        </Link>
                                        <Link href={`/${locale}${customServiceConfig.secondaryCtaHref}`} className='agency-button agency-button--link'>
                                            {customServiceConfig.secondaryCtaLabel}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {footer}
            </main>
        );
    }

    return (
        <main className='agency-shell bg-[var(--agency-cream)] text-white'>
            <SiteHeader locale={locale} path={`/services/${service}`} />

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

                <div className='relative z-10 mx-auto flex min-h-[56vh] max-w-[1760px] flex-col items-center justify-center px-4 pt-28 text-center sm:px-6 lg:min-h-[62vh] lg:px-8'>
                    <Reveal className='flex w-full justify-center' distance={44}>
                            <div>
                                <p className='mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                    {serviceContent.eyebrow}
                                </p>
                                <h1 className={`${fireflies.className} text-center text-[6.3rem] leading-none text-white sm:text-[8.4rem] lg:text-[11rem] xl:text-[13rem]`}>
                                    {serviceContent.title}
                                </h1>
                            </div>
                        </Reveal>
                    </div>
                </section>

            <section className='relative overflow-hidden bg-[linear-gradient(180deg,#17171b_0%,#121216_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,109,24,0.14),transparent_24%)]' />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <div className='grid gap-5 lg:grid-cols-3'>
                        <Reveal distance={34}>
                            <article className='glass-panel h-full border border-white/12 p-7 sm:p-8' style={{ clipPath: detailCardClipPath }}>
                                <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                    {serviceContent.includeTitle}
                                </p>
                                <div className='mt-6 grid gap-3'>
                                    {serviceContent.includes.map((item) => (
                                        <div key={item} className='rounded-[1rem] border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/80'>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </article>
                        </Reveal>

                        <Reveal delay={90} distance={34}>
                            <article className='glass-panel h-full border border-white/12 p-7 sm:p-8' style={{ clipPath: detailCardClipPath }}>
                                <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                    {serviceContent.bestForTitle}
                                </p>
                                <p className='mt-6 text-2xl font-semibold tracking-[-0.05em] text-white'>
                                    {serviceContent.bestFor}
                                </p>
                            </article>
                        </Reveal>

                        <Reveal delay={180} distance={34}>
                            <article className='glass-panel h-full border border-white/12 p-7 sm:p-8' style={{ clipPath: detailCardClipPath }}>
                                <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                    {serviceContent.outcomeTitle}
                                </p>
                                <p className='mt-6 text-2xl font-semibold tracking-[-0.05em] text-white'>
                                    {serviceContent.outcome}
                                </p>
                            </article>
                        </Reveal>
                    </div>

                    <Reveal className='mt-10 flex flex-wrap gap-4' delay={120} distance={28}>
                        <Link href={`/${locale}/contact`} className='agency-button agency-button--solid'>
                            {serviceContent.ctaLabel}
                        </Link>
                        <Link href={`/${locale}/services/build`} className='agency-button agency-button--link'>
                            All service details
                        </Link>
                    </Reveal>
                </div>
            </section>

            {footer}
        </main>
    );
};

export default ServiceDetailPage;
