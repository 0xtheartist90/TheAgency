import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/app/components/Reveal';
import SiteHeader from '@/app/components/SiteHeader';
import { fireflies } from '@/app/fonts';
import { type Locale, getCopy } from '@/app/site-content';
import { getWorkWithUsContent } from '@/app/work-with-us-content';

const packageCardClipPath =
    'polygon(0 12%, 10% 0, 64% 0, 68% 6%, 89% 6%, 94% 0, 100% 0, 100% 88%, 94% 94%, 94% 100%, 0 100%)';
const storyCardClipPath = 'polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)';

const WorkWithUsPageView = ({ locale }: { locale: string }) => {
    const copy = getCopy(locale);
    const content = getWorkWithUsContent(locale as Locale);

    return (
        <main className='agency-shell bg-[var(--agency-cream)] text-white'>
            <SiteHeader locale={locale} path='/work-with-us' />

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
                            {content.heroTitle}
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
                                    {content.sectionLabel}
                                </p>
                                <p className='mt-5 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.06em] text-white sm:text-4xl'>
                                    {content.sectionTitle}
                                </p>
                                <div className='mt-7 border-l border-[var(--agency-orange)]/40 pl-6 text-base leading-8 text-white/74 sm:pl-8 sm:text-lg'>
                                    <p>{content.heroIntro}</p>
                                    <p>{content.sectionIntro}</p>
                                </div>
                                <div className='mt-8 flex flex-wrap gap-4'>
                                    <Link href={`/${locale}/contact`} className='agency-button agency-button--solid'>
                                        {content.heroPrimaryCta}
                                    </Link>
                                    <Link href={`/${locale}/contact`} className='agency-button agency-button--link'>
                                        {content.heroSecondaryCta}
                                    </Link>
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
                                <div className='relative z-10 grid gap-4 p-4 sm:p-5'>
                                    {content.packages.map((pkg) => (
                                        <div
                                            key={pkg.slug}
                                            className='rounded-[1.2rem] border border-white/10 bg-white/6 px-5 py-4'
                                        >
                                            <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                                {pkg.step} / {pkg.title}
                                            </p>
                                            <p className='mt-3 text-xl font-semibold tracking-[-0.05em] text-white'>
                                                {pkg.headline}
                                            </p>
                                        </div>
                                    ))}
                                </div>
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
                    <div className='max-w-3xl'>
                        <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                            {content.packagesTitle}
                        </p>
                        <p className='mt-5 text-base leading-8 text-[var(--agency-ink)]/78 sm:text-lg'>
                            {content.packagesIntro}
                        </p>
                    </div>

                    <div className='mt-8 grid gap-5 lg:grid-cols-3'>
                        {content.packages.map((pkg, index) => (
                            <Reveal key={pkg.slug} delay={index * 80} distance={28}>
                                <article
                                    id={pkg.slug}
                                    className='glass-panel flex h-full flex-col p-7 sm:p-8'
                                    style={{ clipPath: packageCardClipPath }}
                                >
                                    <p className='text-sm font-semibold text-[var(--agency-orange)]'>{pkg.step}</p>
                                    <p className='mt-4 text-2xl font-semibold tracking-[-0.04em] text-white'>{pkg.title}</p>
                                    <p className='mt-4 text-xl font-semibold tracking-[-0.04em] text-white/92'>
                                        {pkg.headline}
                                    </p>
                                    <p className='mt-4 text-base leading-7 text-white/72'>{pkg.longDescription}</p>
                                    <div className='mt-6'>
                                        <p className='text-[0.72rem] uppercase tracking-[0.28em] text-white/42'>
                                            Includes
                                        </p>
                                        <div className='mt-4 grid gap-3'>
                                            {pkg.detailedIncludes.map((item) => (
                                                <div
                                                    key={item}
                                                    className='rounded-[1rem] border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/78'
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {pkg.note ? (
                                        <p className='mt-5 text-sm leading-6 text-white/52'>{pkg.note}</p>
                                    ) : null}
                                    <div className='mt-auto pt-7'>
                                        <Link
                                            href={`/${locale}/contact?package=${pkg.slug}`}
                                            className='agency-button agency-button--solid'
                                        >
                                            {content.packageCtaLabel}
                                        </Link>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[linear-gradient(180deg,#17171b_0%,#121216_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,109,24,0.12),transparent_26%)]' />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <div className='max-w-3xl'>
                        <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                            {content.comparisonTitle}
                        </p>
                    </div>

                    <div className='mt-8 grid gap-5 lg:grid-cols-3'>
                        {content.packages.map((pkg, index) => (
                            <Reveal key={pkg.slug} delay={index * 70} distance={26}>
                                <div className='glass-panel rounded-[1.5rem] p-6'>
                                    <p className='text-sm font-semibold text-[var(--agency-orange)]'>{pkg.title}</p>
                                    <p className='mt-3 text-xl font-semibold tracking-[-0.04em] text-white'>
                                        {pkg.bestFor}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
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
                                    {content.finalTitle}
                                </h2>
                                <p className='mt-5 text-base leading-8 text-white/72 sm:text-lg'>
                                    {content.finalIntro}
                                </p>
                                <div className='mt-8 flex flex-wrap gap-4'>
                                    <Link href={`/${locale}/contact`} className='agency-button agency-button--solid'>
                                        {content.finalCta}
                                    </Link>
                                </div>
                            </div>
                        </div>
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

export default WorkWithUsPageView;
