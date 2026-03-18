import { notFound } from 'next/navigation';

import InteriorHero from '@/app/components/InteriorHero';
import { locales } from '@/app/site-content';

type Params = {
    locale: string;
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const WorkPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    if (!locales.includes(locale as (typeof locales)[number])) {
        notFound();
    }

    return <InteriorHero locale={locale} pageKey='work' />;
};

export default WorkPage;
