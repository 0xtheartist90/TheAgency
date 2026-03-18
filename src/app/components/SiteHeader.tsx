import Image from 'next/image';
import Link from 'next/link';

import LanguageSwitcher from '@/app/components/LanguageSwitcher';
import { getCopy, getNavItems } from '@/app/site-content';

type SiteHeaderProps = {
    locale: string;
    path?: string;
};

const SiteHeader = ({ locale, path = '' }: SiteHeaderProps) => {
    const copy = getCopy(locale);
    const navItems = getNavItems(locale);

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
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className='hero-nav-link'>
                            {item.label}
                        </Link>
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
