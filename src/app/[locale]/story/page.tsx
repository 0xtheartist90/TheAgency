import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Reveal from '@/app/components/Reveal';
import FoundationTabs from '@/app/components/FoundationTabs';
import { fireflies } from '@/app/fonts';
import SiteHeader from '@/app/components/SiteHeader';
import TeamShowcase from '@/app/components/TeamShowcase';
import { getCopy, locales, type Locale } from '@/app/site-content';
import { getStoryContent } from '@/app/story-content';
import { getUiCopy } from '@/app/ui-content';

type Params = {
    locale: string;
};

const storyCardClipPath = 'polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)';
const serviceCardClipPath = 'polygon(18% 0, 100% 0, 100% 100%, 0 100%, 0 14%)';

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { locale } = await params;
    const copy = getCopy(locale);
    const story = getStoryContent(locale as Locale);

    return {
        title: `${copy.nav.story} | The Agency`,
        description: story.metadataDescription
    };
}

const StoryPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    if (!locales.includes(locale as (typeof locales)[number])) {
        notFound();
    }

    const copy = getCopy(locale);
    const ui = getUiCopy(locale as Locale);
    const story = getStoryContent(locale as Locale);

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
                            {story.heroTitle}
                        </h1>
                    </Reveal>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[linear-gradient(180deg,#1b1b20_0%,#23232a_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,109,24,0.14),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(255,255,255,0.06),transparent_22%)]' />

                <div className='relative z-10 mx-auto max-w-7xl'>
                    <div className='grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center'>
                        <div className='max-w-4xl'>
                            <Reveal distance={26}>
                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-white/88'>
                                    {story.aboutEyebrow}
                                </p>
                            </Reveal>
                            <Reveal delay={60} distance={34}>
                                <p className='mt-5 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.06em] text-white sm:text-4xl'>
                                    {story.aboutTitle}
                                </p>
                            </Reveal>
                            <div className='mt-7 border-l border-[var(--agency-orange)]/40 pl-6 text-base leading-8 text-white/74 sm:pl-8 sm:text-lg'>
                                {story.storyBody.map((paragraph, index) => (
                                    <Reveal key={paragraph} delay={130 + index * 70} distance={24}>
                                        <p>{paragraph}</p>
                                    </Reveal>
                                ))}
                            </div>
                        </div>

                        <Reveal delay={170} distance={44} axis='x'>
                            <div
                                className='process-card relative overflow-hidden p-4 shadow-[0_34px_110px_rgba(0,0,0,0.24)] sm:p-5'
                                style={{ clipPath: storyCardClipPath }}
                            >
                                <div className='process-card-surface absolute inset-0' />
                                <div className='absolute inset-0 bg-[radial-gradient(circle_at_26%_20%,rgba(255,109,24,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_38%)]' />
                                <div className='relative z-10 overflow-hidden' style={{ clipPath: storyCardClipPath }}>
                                    <video
                                        className='h-full w-full object-cover'
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload='auto'
                                    >
                                        <source src='/images/Story/storyvideo.mp4' type='video/mp4' />
                                    </video>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <TeamShowcase members={story.team.members} copy={story.team} />

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
                        <FoundationTabs items={story.foundationItems} clipPath={serviceCardClipPath} />
                    </Reveal>
                </div>
            </section>

            <footer className='bg-[linear-gradient(180deg,#17171b_0%,#121216_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='mx-auto max-w-7xl'>
                    <div className='grid gap-10 py-4 sm:py-6 lg:grid-cols-[1.1fr_0.9fr]'>
                        <Reveal className='max-w-2xl' distance={30}>
                            <Image
                                src='/images/Logo/the-agency-logo-orange.webp'
                                alt='The Agency'
                                width={240}
                                height={68}
                                className='h-10 w-auto'
                            />
                            <p className='mt-5 max-w-xl text-sm leading-7 text-white/58'>
                                {story.footerBody}
                            </p>
                        </Reveal>

                        <div className='lg:justify-self-end'>
                            <Reveal delay={70} distance={24}>
                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/34'>
                                    {ui.footer.explore}
                                </p>
                            </Reveal>
                            <Reveal delay={120} distance={28}>
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
                            </Reveal>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default StoryPage;
