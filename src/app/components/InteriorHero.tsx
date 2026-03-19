import Link from 'next/link';

import SiteHeader from '@/app/components/SiteHeader';
import { getCopy, type Locale } from '@/app/site-content';
import { getUiCopy } from '@/app/ui-content';

type InteriorHeroProps = {
    locale: string;
    pageKey: 'story' | 'services' | 'work' | 'contact';
};

const InteriorHero = ({ locale, pageKey }: InteriorHeroProps) => {
    const copy = getCopy(locale);
    const ui = getUiCopy(locale as Locale);
    const page = copy.pages[pageKey];

    return (
        <main className='agency-shell bg-[var(--agency-cream)] text-white'>
            <section className='relative min-h-screen overflow-hidden px-4 pb-8 pt-5 sm:px-6 lg:px-8'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,109,24,0.18),transparent_30%),linear-gradient(180deg,#1a1a1d_0%,#121214_100%)]' />
                <div className='relative z-10 mx-auto flex min-h-screen max-w-[1760px] flex-col'>
                    <SiteHeader locale={locale} path={`/${pageKey === 'story' ? 'story' : pageKey}`} />

                    <div className='mx-auto flex w-full max-w-6xl flex-1 items-center py-16'>
                        <div className='grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end'>
                            <div className='space-y-6'>
                                <p className='text-[0.76rem] font-semibold uppercase tracking-[0.32em] text-[var(--agency-orange)]'>
                                    {copy.localeLabel}
                                </p>
                                <h1 className='text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl'>
                                    {page.title}
                                </h1>
                                <p className='max-w-2xl text-lg leading-8 text-white/72'>{page.intro}</p>
                                <div className='flex flex-wrap gap-4'>
                                    <Link href={`/${locale}/contact`} className='agency-button agency-button--solid'>
                                        {copy.home.supportLabel}
                                    </Link>
                                    <Link href={`/${locale}`} className='agency-button agency-button--link'>
                                        {ui.navigation.home}
                                    </Link>
                                </div>
                            </div>

                            <div className='space-y-4'>
                                {page.sections.map((section) => (
                                    <div key={section} className='glass-panel rounded-[1.6rem] p-6'>
                                        <p className='text-base leading-7 text-white/75'>{section}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default InteriorHero;
