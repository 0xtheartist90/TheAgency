import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import BrandScopeSection from '@/app/components/BrandScopeSection';
import Reveal from '@/app/components/Reveal';
import SiteHeader from '@/app/components/SiteHeader';
import { fireflies } from '@/app/fonts';
import { getServiceDetailContent } from '@/app/service-detail-content';
import { getServiceBySlug, serviceSlugs } from '@/app/services-content';
import { getCopy, locales, type Locale } from '@/app/site-content';
import { getUiCopy } from '@/app/ui-content';

type Params = {
    locale: string;
    service: string;
};

const detailCardClipPath = 'polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)';
const packageCardClipPath =
    'polygon(0 12%, 10% 0, 64% 0, 68% 6%, 89% 6%, 94% 0, 100% 0, 100% 88%, 94% 94%, 94% 100%, 0 100%)';
const customServiceVisuals = {
    brand: {
        workVisual: '/images/Services/brand.png',
        ctaVisual: '/images/Services/next1.png'
    },
    build: {
        workVisual: '/images/Services/build.png',
        ctaVisual: '/images/Services/next2.png'
    },
    grow: {
        workVisual: '/images/Services/grow.png',
        ctaVisual: '/images/Services/next3.png'
    },
    automate: {
        workVisual: '/images/Services/automate.png',
        ctaVisual: '/images/Services/next4.png'
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
    const ui = getUiCopy(locale as Locale);
    const serviceDetail = getServiceDetailContent(locale as Locale);
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
                            {ui.footer.servicesBody}
                        </p>
                    </div>

                    <div className='lg:justify-self-end'>
                        <p className='text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/34'>
                            {ui.footer.explore}
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
                    <p className='tracking-[0.08em] text-white/34'>{ui.footer.rightsReserved}</p>
                    <Link href={`/${locale}/contact`} className='text-white/44 transition hover:text-white/82'>
                        {copy.home.supportLabel}
                    </Link>
                </Reveal>
            </div>
        </footer>
    );

    const customServiceConfig =
        service === 'brand' || service === 'build' || service === 'grow' || service === 'automate'
            ? {
                  ...serviceDetail.services[service as keyof typeof serviceDetail.services],
                  ...customServiceVisuals[service as keyof typeof customServiceVisuals]
              }
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
                                {ui.serviceDetail.whatWeDo}
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
                                {ui.serviceDetail.howWeWork}
                            </p>
                            <p className='mt-5 text-base leading-8 text-white/72 sm:text-lg'>
                                {ui.serviceDetail.howWeWorkIntro}
                            </p>
                        </div>

                        <div className='mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5'>
                            {serviceDetail.processSteps.map((step, index) => (
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
                                {ui.serviceDetail.work}
                            </p>
                            <p className='mt-5 text-base leading-8 text-[var(--agency-ink)]/78 sm:text-lg'>
                                {customServiceConfig.workIntro}
                            </p>
                        </div>

                        <div className='mt-8 grid gap-5 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-start'>
                            <Reveal distance={28}>
                                <div
                                    className='relative aspect-[16/9] overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(24,24,30,0.72)_0%,rgba(18,18,24,0.9)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.12)]'
                                    style={{ clipPath: detailCardClipPath }}
                                >
                                    <Image
                                        src={customServiceConfig.workVisual}
                                        alt={customServiceConfig.workVisualAlt}
                                        fill
                                        className='object-cover'
                                    />
                                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,109,24,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_34%)]' />
                                </div>
                            </Reveal>

                            <div className='grid gap-5'>
                                {customServiceConfig.workPreviews.map((item, index) => (
                                    <Reveal key={item.title} delay={index * 70} distance={28}>
                                        <article className='glass-panel h-full border border-white/12 p-7 sm:p-8' style={{ clipPath: detailCardClipPath }}>
                                            <p className='text-2xl font-semibold tracking-[-0.05em] text-white'>{item.title}</p>
                                        </article>
                                    </Reveal>
                                ))}
                            </div>
                        </div>

                        <Reveal className='mt-8 flex flex-wrap gap-4' delay={100} distance={24}>
                            <Link href={`/${locale}/work`} className='agency-button agency-button--link text-[var(--agency-ink)] hover:text-[var(--agency-ink)]'>
                                {ui.serviceDetail.viewWork}
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
                    <div className='relative z-10 mx-auto max-w-7xl pt-8 lg:pt-10'>
                        <Reveal className='pointer-events-none absolute bottom-0 left-[77%] z-20 hidden -translate-x-1/2 lg:block' delay={180} distance={30}>
                            <Image
                                src={customServiceConfig.ctaVisual}
                                alt={customServiceConfig.ctaVisualAlt}
                                width={620}
                                height={760}
                                className='h-[25rem] w-auto max-w-none'
                            />
                        </Reveal>

                        <Reveal distance={30}>
                            <div className='rounded-[2rem] bg-[linear-gradient(135deg,#17171b_0%,#232329_100%)] p-8 text-white shadow-[0_28px_90px_rgba(30,20,12,0.16)] sm:p-10'>
                                <div className='max-w-3xl'>
                                    <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                        {ui.serviceDetail.next}
                                    </p>
                                    <h2 className='mt-5 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl'>
                                        {customServiceConfig.finalTitle}
                                    </h2>
                                    <p className='mt-5 text-base leading-8 text-white/72 sm:text-lg'>
                                        {customServiceConfig.finalIntro}
                                    </p>
                                    <div className='mt-8 flex flex-wrap gap-4'>
                                        <Link href={`/${locale}/contact`} className='agency-button agency-button--solid'>
                                            {ui.serviceDetail.startProject}
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
                            {ui.serviceDetail.allServiceDetails}
                        </Link>
                    </Reveal>
                </div>
            </section>

            {footer}
        </main>
    );
};

export default ServiceDetailPage;
