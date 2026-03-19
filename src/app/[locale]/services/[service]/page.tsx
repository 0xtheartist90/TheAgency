import type { Metadata } from 'next';

import Link from 'next/link';
import { notFound } from 'next/navigation';

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
                            <p className='mx-auto mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg'>
                                {serviceContent.intro}
                            </p>
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
        </main>
    );
};

export default ServiceDetailPage;
