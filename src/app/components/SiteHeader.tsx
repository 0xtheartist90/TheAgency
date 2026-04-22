import Image from 'next/image';
import Link from 'next/link';

import LanguageSwitcher from '@/app/components/LanguageSwitcher';
import { getServiceCollection } from '@/app/services-content';
import { getCopy, getNavItems, type Locale } from '@/app/site-content';
import { getUiCopy } from '@/app/ui-content';

type SiteHeaderProps = {
    locale: string;
    path?: string;
};

const SiteHeader = ({ locale, path = '' }: SiteHeaderProps) => {
    const copy = getCopy(locale);
    const ui = getUiCopy(locale as Locale);
    const navItems = getNavItems(locale).filter((item) => !item.href.endsWith('/services'));
    const serviceItems = getServiceCollection(locale as Parameters<typeof getServiceCollection>[0]);

    return (
        <header
            className='hero-nav fixed top-3 left-1/2 z-[200] w-[calc(100%-2rem)] max-w-[1760px] -translate-x-1/2 sm:w-[calc(100%-3rem)] lg:top-4 lg:w-[calc(100%-4rem)]'
        >
            <div className='hero-nav__shell absolute inset-0' aria-hidden='true' />

            <div className='relative z-10 hidden items-center justify-between gap-6 px-5 py-3.5 sm:px-8 sm:py-4 lg:flex lg:px-9 lg:py-4.5'>
                <Link href={`/${locale}`} className='flex items-center'>
                    <Image
                        src='/images/Logo/the-agency-logo-orange.webp'
                        alt='The Agency'
                        width={260}
                        height={74}
                        priority
                        className='h-8 w-auto sm:h-10'
                    />
                </Link>

                <div className='items-center gap-8 lg:flex'>
                    <nav className='flex items-center gap-8'>
                        <Link href={`/${locale}`} className='hero-nav-link'>
                            {ui.navigation.home}
                        </Link>
                        {navItems.map((item) => (
                            <div key={item.href} className='flex items-center'>
                                <Link href={item.href} className='hero-nav-link'>
                                    {item.label}
                                </Link>
                                {item.href.endsWith('/story') ? (
                                    <details className='hero-nav-dropdown ml-8'>
                                        <summary className={`hero-nav-link list-none ${path.startsWith('/services') ? 'is-active' : ''}`}>
                                            {copy.nav.services}
                                            <span className='hero-nav-dropdown__chevron' aria-hidden='true'>
                                                ▾
                                            </span>
                                        </summary>
                                        <div className='hero-nav-dropdown__menu'>
                                            {serviceItems.map((service) => (
                                                <Link
                                                    key={service.slug}
                                                    href={`/${locale}/services/${service.slug}`}
                                                    className='hero-nav-dropdown__item'
                                                >
                                                    {service.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </details>
                                ) : null}
                            </div>
                        ))}
                        <Link href={`/${locale}/contact`} className='hero-nav-cta'>
                            {copy.home.supportLabel}
                        </Link>
                    </nav>
                    <LanguageSwitcher currentLocale={locale} path={path} />
                </div>

            </div>

            <div className='relative z-10 flex items-center justify-end px-5 py-3.5 sm:px-8 sm:py-4 lg:hidden'>
                <details className='absolute left-5 top-1/2 -translate-y-1/2 sm:left-8'>
                    <summary className='flex h-10 w-10 list-none items-center justify-center text-[var(--agency-orange)]'>
                        <span className='sr-only'>Open menu</span>
                        <span className='flex flex-col gap-1.5'>
                            <span
                                className='ml-2 block h-[2.5px] w-[18px] origin-center bg-current'
                                style={{ transform: 'skewX(-26deg)' }}
                            />
                            <span
                                className='ml-1 block h-[2.5px] w-[18px] origin-center bg-current'
                                style={{ transform: 'skewX(-26deg)' }}
                            />
                            <span
                                className='block h-[2.5px] w-[18px] origin-center bg-current'
                                style={{ transform: 'skewX(-26deg)' }}
                            />
                        </span>
                    </summary>
                    <div className='absolute left-0 top-[calc(100%+0.85rem)] w-[16rem] overflow-hidden rounded-[1.4rem] border border-white/12 bg-[linear-gradient(135deg,rgba(23,23,27,0.98)_0%,rgba(35,35,41,0.98)_100%)] p-4 shadow-[0_28px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl'>
                        <nav className='flex flex-col gap-1'>
                            <Link href={`/${locale}`} className='rounded-[0.9rem] px-3 py-2.5 text-sm text-white/82 transition hover:bg-white/6 hover:text-white'>
                                {ui.navigation.home}
                            </Link>
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className='rounded-[0.9rem] px-3 py-2.5 text-sm text-white/82 transition hover:bg-white/6 hover:text-white'
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className='mt-2 h-px bg-white/8' />
                            <p className='px-3 pt-3 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--agency-orange)]'>
                                {copy.nav.services}
                            </p>
                            {serviceItems.map((service) => (
                                <Link
                                    key={service.slug}
                                    href={`/${locale}/services/${service.slug}`}
                                    className='rounded-[0.9rem] px-3 py-2.5 text-sm text-white/82 transition hover:bg-white/6 hover:text-white'
                                >
                                    {service.title}
                                </Link>
                            ))}
                            <div className='mt-2 h-px bg-white/8' />
                            <Link href={`/${locale}/contact`} className='hero-nav-cta mt-3 w-fit'>
                                {copy.nav.contact}
                            </Link>
                        </nav>
                    </div>
                </details>
                <Link href={`/${locale}`} className='absolute left-1/2 -translate-x-1/2 flex items-center'>
                    <Image
                        src='/images/Logo/the-agency-logo-orange.webp'
                        alt='The Agency'
                        width={220}
                        height={62}
                        priority
                        className='h-8 w-auto'
                    />
                </Link>
                <div className='flex items-center gap-3'>
                    <LanguageSwitcher currentLocale={locale} path={path} />
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
