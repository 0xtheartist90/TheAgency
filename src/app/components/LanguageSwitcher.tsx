import Link from 'next/link';

import { getCopy, locales } from '@/app/site-content';

type LanguageSwitcherProps = {
    currentLocale: string;
    path: string;
};

const LanguageSwitcher = ({ currentLocale, path }: LanguageSwitcherProps) => {
    return (
        <details className='language-switcher'>
            <summary className='language-switcher__trigger'>
                <span>{getCopy(currentLocale).localeLabel}</span>
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
                        {getCopy(locale).localeLabel}
                    </Link>
                ))}
            </div>
        </details>
    );
};

export default LanguageSwitcher;
