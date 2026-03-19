import Link from 'next/link';

import { getCopy, locales } from '@/app/site-content';

type LanguageSwitcherProps = {
    currentLocale: string;
    path: string;
};

const localeFlags = {
    en: '🇬🇧',
    nl: '🇳🇱',
    th: '🇹🇭'
} as const;

const LanguageSwitcher = ({ currentLocale, path }: LanguageSwitcherProps) => {
    return (
        <details className='language-switcher'>
            <summary className='language-switcher__trigger'>
                <span className='language-switcher__flag' aria-hidden='true'>
                    {localeFlags[currentLocale as keyof typeof localeFlags]}
                </span>
                <span className='sr-only'>{getCopy(currentLocale).localeLabel}</span>
                <span className='language-switcher__chevron' aria-hidden='true'>
                    ▾
                </span>
            </summary>
            <div className='language-switcher__menu'>
                {locales.map((locale) => (
                    <Link
                        key={locale}
                        href={`/${locale}${path}`}
                        className={locale === currentLocale ? 'language-switcher__option is-active' : 'language-switcher__option'}
                    >
                        <span className='language-switcher__flag' aria-hidden='true'>
                            {localeFlags[locale]}
                        </span>
                        <span>{getCopy(locale).localeLabel}</span>
                    </Link>
                ))}
            </div>
        </details>
    );
};

export default LanguageSwitcher;
