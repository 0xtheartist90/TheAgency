import Image from 'next/image';
import Link from 'next/link';

import ContactPackagesSlider from '@/app/components/ContactPackagesSlider';
import Reveal from '@/app/components/Reveal';
import SiteHeader from '@/app/components/SiteHeader';
import { getContactContent } from '@/app/contact-content';
import { fireflies } from '@/app/fonts';
import { getCopy, type Locale } from '@/app/site-content';
import { getUiCopy } from '@/app/ui-content';
import { getWorkWithUsContent } from '@/app/work-with-us-content';

const packageCardClipPath =
    'polygon(0 12%, 10% 0, 64% 0, 68% 6%, 89% 6%, 94% 0, 100% 0, 100% 88%, 94% 94%, 94% 100%, 0 100%)';

const contactIcons = {
    calendar: {
        src: '/images/Icons/image 3.webp',
        alt: 'Book a meeting icon'
    },
    mail: {
        src: '/images/Icons/image 33.webp',
        alt: 'Send email icon'
    }
} as const;

const ContactPageView = ({ locale }: { locale: string }) => {
    const copy = getCopy(locale);
    const ui = getUiCopy(locale as Locale);
    const content = getContactContent(locale as Locale);
    const workWithUs = getWorkWithUsContent(locale as Locale);
    const paginationLabels = Array.from(
        { length: workWithUs.packages.length },
        (_, index) => ui.portfolio.goToPageAria(index + 1)
    );

    return (
        <main className='agency-shell bg-[var(--agency-cream)] text-white'>
            <SiteHeader locale={locale} path='/contact' />

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
                        <h1
                            className={`${fireflies.className} text-center text-[6.5rem] leading-none text-white sm:text-[8.5rem] lg:text-[12rem] xl:text-[14rem]`}
                        >
                            {copy.pages.contact.title}
                        </h1>
                    </Reveal>
                </div>
            </section>

            <section
                id='packages'
                className='relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'
            >
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
                            {workWithUs.packagesTitle}
                        </p>
                        <p className='mt-5 text-base leading-8 text-[var(--agency-ink)]/78 sm:text-lg'>
                            {workWithUs.packagesIntro}
                        </p>
                    </div>

                    <ContactPackagesSlider
                        packages={workWithUs.packages}
                        clipPath={packageCardClipPath}
                        locale={locale}
                        includesLabel={ui.workWithUs.includes}
                        ctaLabel={workWithUs.packageCtaLabel}
                        paginationLabels={paginationLabels}
                    />
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
                            <div className='max-w-4xl'>
                                <p className='text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                    {content.contactLabel}
                                </p>
                                <h2 className='mt-5 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl'>
                                    {content.contactTitle}
                                </h2>
                                <p className='mt-5 text-base leading-8 text-white/72 sm:text-lg'>
                                    {content.contactBody}
                                </p>
                                <div className='mt-8 grid gap-4 lg:grid-cols-2'>
                                    {content.contactMethods.map((method, index) => (
                                        <Reveal key={method.title} delay={index * 70} distance={24}>
                                            <div className='glass-panel rounded-[1.5rem] p-6'>
                                                {(() => {
                                                    const icon = contactIcons[method.icon];

                                                    return (
                                                        <div className='relative flex h-[84px] w-[84px] items-center justify-start'>
                                                            <Image
                                                                src={icon.src}
                                                                alt={icon.alt}
                                                                width={84}
                                                                height={84}
                                                                className='h-[84px] w-[84px] object-contain'
                                                            />
                                                        </div>
                                                    );
                                                })()}
                                                <p className='mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--agency-orange)]'>
                                                    {method.title}
                                                </p>
                                                <p className='mt-4 text-lg font-semibold tracking-[-0.04em] text-white'>
                                                    {method.value}
                                                </p>
                                                <div className='mt-6'>
                                                    <Link href={method.href} className='agency-button agency-button--solid'>
                                                        {method.cta}
                                                    </Link>
                                                </div>
                                            </div>
                                        </Reveal>
                                    ))}
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
                            <p className='mt-5 max-w-xl text-sm leading-7 text-white/58'>{ui.footer.storyBody}</p>
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

export default ContactPageView;
