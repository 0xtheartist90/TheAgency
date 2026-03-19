import Image from 'next/image';
import Link from 'next/link';

import LanguageSwitcher from '@/app/components/LanguageSwitcher';
import { getServiceCollection } from '@/app/services-content';
import { getCopy, getNavItems } from '@/app/site-content';

type SiteHeaderProps = {
    locale: string;
    path?: string;
};

const SiteHeader = ({ locale, path = '' }: SiteHeaderProps) => {
    const copy = getCopy(locale);
    const navItems = getNavItems(locale).filter((item) => !item.href.endsWith('/services'));
    const serviceItems = getServiceCollection(locale as Parameters<typeof getServiceCollection>[0]);

    return (
        <header
            className='hero-nav fixed top-3 left-1/2 z-[200] flex w-[calc(100%-2rem)] max-w-[1760px] -translate-x-1/2 items-center justify-between gap-6 rounded-[2rem] px-5 py-3.5 sm:w-[calc(100%-3rem)] sm:px-8 sm:py-4 lg:top-4 lg:w-[calc(100%-4rem)] lg:px-9 lg:py-4.5'
        >
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

            <div className='hidden items-center gap-8 lg:flex'>
                <nav className='flex items-center gap-8'>
                    <Link href={`/${locale}`} className='hero-nav-link'>
                        Home
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

            <div className='flex items-center gap-3 lg:hidden'>
                <LanguageSwitcher currentLocale={locale} path={path} />
                <Link href={`/${locale}/contact`} className='hero-nav-cta'>
                    {copy.nav.contact}
                </Link>
            </div>
        </header>
    );
};

export default SiteHeader;
