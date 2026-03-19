import Link from 'next/link';

import Reveal from '@/app/components/Reveal';
import SiteHeader from '@/app/components/SiteHeader';
import { type Locale, getCopy } from '@/app/site-content';
import { getWorkWithUsContent } from '@/app/work-with-us-content';

const packageCardClipPath =
    'polygon(0 12%, 10% 0, 64% 0, 68% 6%, 89% 6%, 94% 0, 100% 0, 100% 88%, 94% 94%, 94% 100%, 0 100%)';

const WorkWithUsPageView = ({ locale }: { locale: string }) => {
    const copy = getCopy(locale);
    const content = getWorkWithUsContent(locale as Locale);

    return (
        <main className='agency-shell bg-[var(--agency-cream)] text-white'>
            <section className='relative overflow-hidden px-4 pb-14 pt-5 sm:px-6 lg:px-8'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,109,24,0.18),transparent_30%),linear-gradient(180deg,#1a1a1d_0%,#121214_100%)]' />
                <div className='relative z-10 mx-auto max-w-[1760px]'>
                    <SiteHeader locale={locale} path='/work-with-us' />

                    <div className='mx-auto max-w-6xl py-14 sm:py-18 lg:py-24'>
                        <div className='max-w-4xl space-y-6'>
                            <p className='text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                {content.sectionLabel}
                            </p>
                            <h1 className='text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl'>
                                {content.heroTitle}
                            </h1>
                            <p className='max-w-3xl text-lg leading-8 text-white/72'>{content.heroIntro}</p>
                            <div className='flex flex-wrap gap-4'>
                                <Link href={`/${locale}/contact`} className='agency-button agency-button--solid'>
                                    {content.heroPrimaryCta}
                                </Link>
                                <Link href={`/${locale}/contact`} className='agency-button agency-button--link'>
                                    {content.heroSecondaryCta}
                                </Link>
                            </div>
                        </div>

                        <div className='mt-20'>
                            <div className='max-w-3xl space-y-4'>
                                <p className='text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                    {content.packagesTitle}
                                </p>
                                <h2 className='text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl'>
                                    {content.sectionTitle}
                                </h2>
                                <p className='text-base leading-7 text-white/68'>{content.packagesIntro}</p>
                            </div>

                            <div className='mt-8 grid gap-5 lg:grid-cols-3'>
                                {content.packages.map((pkg) => (
                                    <article
                                        key={pkg.slug}
                                        id={pkg.slug}
                                        className='glass-panel service-glass-card flex h-full flex-col p-7 sm:p-8'
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
                                ))}
                            </div>
                        </div>

                        <div className='mt-20 grid gap-5 lg:grid-cols-3'>
                            {content.packages.map((pkg) => (
                                <div key={pkg.slug} className='glass-panel rounded-[1.5rem] p-6'>
                                    <p className='text-sm font-semibold text-[var(--agency-orange)]'>{pkg.title}</p>
                                    <p className='mt-3 text-lg font-semibold tracking-[-0.04em] text-white'>
                                        {pkg.bestFor}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className='mt-20 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end'>
                            <div className='max-w-3xl space-y-4'>
                                <p className='text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                    Flexible option
                                </p>
                                <h2 className='text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl'>
                                    {content.flexibleTitle}
                                </h2>
                                <p className='text-base leading-8 text-white/72'>{content.flexibleIntro}</p>
                            </div>
                            <div className='flex flex-wrap gap-4'>
                                <Link href={`/${locale}/services/build`} className='agency-button agency-button--link'>
                                    {content.flexiblePrimaryCta}
                                </Link>
                                <Link href={`/${locale}/contact`} className='agency-button agency-button--solid'>
                                    {content.flexibleSecondaryCta}
                                </Link>
                            </div>
                        </div>

                        <div className='mt-20 rounded-[2rem] bg-[linear-gradient(135deg,#17171b_0%,#232329_100%)] p-8 text-white shadow-[0_28px_90px_rgba(30,20,12,0.16)] sm:p-10'>
                            <div className='max-w-3xl space-y-4'>
                                <p className='text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                    Final step
                                </p>
                                <h2 className='text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl'>
                                    {content.finalTitle}
                                </h2>
                                <p className='text-base leading-8 text-white/72'>{content.finalIntro}</p>
                                <div className='pt-3'>
                                    <Link href={`/${locale}/contact`} className='agency-button agency-button--solid'>
                                        {content.finalCta}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WorkWithUsPageView;
