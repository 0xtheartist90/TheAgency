import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Reveal from '@/app/components/Reveal';
import SiteHeader from '@/app/components/SiteHeader';
import { portfolioProjects, getPortfolioProjectBySlug } from '@/app/portfolio-content';
import { fireflies } from '@/app/fonts';
import { getCopy, locales, type Locale } from '@/app/site-content';

type Params = {
    locale: string;
    slug: string;
};

const detailCardClipPath = 'polygon(18% 0, 100% 0, 100% 100%, 0 100%, 0 14%)';

export function generateStaticParams() {
    return locales.flatMap((locale) =>
        portfolioProjects.map((project) => ({
            locale,
            slug: project.slug
        }))
    );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { slug } = await params;
    const project = getPortfolioProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Portfolio | The Agency'
        };
    }

    return {
        title: `${project.title} | The Agency`,
        description: project.summary
    };
}

const PortfolioDetailPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale, slug } = await params;

    if (!locales.includes(locale as Locale)) {
        notFound();
    }

    const project = getPortfolioProjectBySlug(slug);
    if (!project) {
        notFound();
    }

    const copy = getCopy(locale);

    return (
        <main className='agency-shell bg-[var(--agency-cream)] text-white'>
            <SiteHeader locale={locale} path='/work' />

            <section className='relative min-h-[46vh] overflow-hidden lg:min-h-[52vh]'>
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

                <div className='relative z-10 mx-auto flex min-h-[46vh] max-w-[1760px] flex-col items-center justify-center px-4 pt-28 text-center sm:px-6 lg:min-h-[52vh] lg:px-8'>
                    <Reveal distance={40}>
                        <p className='mb-4 text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                            {project.category}
                        </p>
                        <h1 className={`${fireflies.className} text-center text-[5.4rem] leading-none text-white sm:text-[7rem] lg:text-[9rem] xl:text-[10rem]`}>
                            {project.title}
                        </h1>
                    </Reveal>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[linear-gradient(180deg,#1b1b20_0%,#23232a_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,109,24,0.14),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(255,255,255,0.06),transparent_22%)]' />

                <div className='relative z-10 mx-auto max-w-7xl'>
                    <div className='grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start'>
                        <Reveal distance={34}>
                            <div className='max-w-3xl'>
                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-white/88'>
                                    Case overview
                                </p>
                                <h2 className='mt-5 text-3xl font-semibold leading-[1.12] tracking-[-0.06em] text-white sm:text-4xl'>
                                    {project.intro}
                                </h2>
                                <div className='mt-7 border-l border-[var(--agency-orange)]/40 pl-6 text-base leading-8 text-white/74 sm:pl-8 sm:text-lg'>
                                    <p>{project.summary}</p>
                                    <p>{project.overview}</p>
                                </div>
                                <div className='mt-8 flex flex-wrap gap-4'>
                                    <Link href={`/${locale}/work`} className='agency-button agency-button--link'>
                                        Back to {copy.nav.work}
                                    </Link>
                                    <Link href={`/${locale}/contact`} className='agency-button agency-button--solid'>
                                        Start your project
                                    </Link>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={120} distance={38}>
                            <div className='glass-panel border border-white/12 p-5 sm:p-6' style={{ clipPath: detailCardClipPath }}>
                                {project.visual ? (
                                    project.visualContain ? (
                                        <div className='relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#2f2e35] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.12)]'>
                                            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,109,24,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_34%)]' />
                                            <Image
                                                src={project.visual}
                                                alt={project.visualAlt ?? `${project.title} visual`}
                                                fill
                                                className='object-cover'
                                            />
                                        </div>
                                    ) : (
                                        <div className='relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(24,24,30,0.72)_0%,rgba(18,18,24,0.9)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.12)]'>
                                            <Image
                                                src={project.visual}
                                                alt={project.visualAlt ?? `${project.title} visual`}
                                                fill
                                                className='object-cover'
                                            />
                                        </div>
                                    )
                                ) : (
                                    <div className='flex aspect-[4/3] items-center justify-center rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(24,24,30,0.72)_0%,rgba(18,18,24,0.9)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.12)]'>
                                        <div className='text-center'>
                                            <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                                Image placeholder
                                            </p>
                                            <p className='mt-3 text-sm leading-7 text-white/62'>
                                                Add final project visual here
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Reveal>
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
                    preload='auto'
                    aria-hidden='true'
                >
                    <source src='/images/Home/smoothbg.mp4' type='video/mp4' />
                </video>
                <div className='absolute inset-0 bg-[rgba(239,229,215,0.85)]' />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <div className='grid gap-5 lg:grid-cols-[0.9fr_1.1fr]'>
                        <Reveal distance={28}>
                            <div className='glass-panel h-full border border-white/12 p-7 sm:p-8' style={{ clipPath: detailCardClipPath }}>
                                <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                    Project
                                </p>
                                <div className='mt-6 grid gap-4 text-[var(--agency-ink)]'>
                                    <div>
                                        <p className='text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-ink)]/52'>
                                            Number
                                        </p>
                                        <p className='mt-2 text-2xl font-semibold tracking-[-0.05em] text-white'>
                                            {project.number}
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--agency-ink)]/52'>
                                            Category
                                        </p>
                                        <p className='mt-2 text-2xl font-semibold tracking-[-0.05em] text-white'>
                                            {project.category}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={90} distance={28}>
                            <div className='glass-panel h-full border border-white/12 p-7 sm:p-8' style={{ clipPath: detailCardClipPath }}>
                                <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                    Deliverables
                                </p>
                                <div className='mt-6 grid gap-3 sm:grid-cols-3'>
                                    {project.deliverables.map((item) => (
                                        <div
                                            key={item}
                                            className='rounded-[1rem] border border-white/8 bg-white/5 px-4 py-4 text-sm font-medium text-white/82'
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className='mt-6 flex flex-wrap gap-2'>
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className='rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/62'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
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

export default PortfolioDetailPage;
