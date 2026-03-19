import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Reveal from '@/app/components/Reveal';
import PortfolioSlider from '@/app/components/PortfolioSlider';
import SiteHeader from '@/app/components/SiteHeader';
import { getPortfolioProjects } from '@/app/portfolio-content';
import { fireflies } from '@/app/fonts';
import { getCopy, locales, type Locale } from '@/app/site-content';
import { getUiCopy } from '@/app/ui-content';

type Params = {
    locale: string;
};

const detailCardClipPath = 'polygon(3rem 0, 100% 0, 100% 100%, 0 100%, 0 2.35rem)';
const storyCardClipPath = 'polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)';

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { locale } = await params;
    const copy = getCopy(locale);
    const ui = getUiCopy(locale as Locale);

    return {
        title: `${copy.pages.work.title} | The Agency`,
        description: ui.portfolio.pageDescription
    };
}

const WorkPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    if (!locales.includes(locale as Locale)) {
        notFound();
    }

    const copy = getCopy(locale);
    const ui = getUiCopy(locale as Locale);
    const projects = getPortfolioProjects(locale as Locale);

    return (
        <main className='agency-shell bg-[var(--agency-cream)] text-white'>
            <SiteHeader locale={locale} path='/work' />

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
                            {copy.pages.work.title}
                        </h1>
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
                    preload='auto'
                    aria-hidden='true'
                >
                    <source src='/images/Home/smoothbg.mp4' type='video/mp4' />
                </video>
                <div className='absolute inset-0 bg-[rgba(239,229,215,0.85)]' />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <div className='max-w-3xl'>
                        <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                            {ui.portfolio.sectionLabel}
                        </p>
                        <p className='mt-5 text-base leading-8 text-[var(--agency-ink)]/78 sm:text-lg'>
                            {ui.portfolio.sectionIntro}
                        </p>
                    </div>

                    <PortfolioSlider projects={projects} clipPath={detailCardClipPath} locale={locale} />
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
                                {ui.footer.storyBody}
                            </p>
                        </div>

                        <div className='lg:justify-self-end'>
                            <p className='text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/34'>
                                {ui.footer.explore}
                            </p>
                            <div className='mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/44'>
                                <Link href={`/${locale}`} className='transition hover:text-white/82'>
                                    {ui.navigation.home}
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

export default WorkPage;
