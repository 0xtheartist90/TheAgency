import { notFound } from 'next/navigation';

import WorkWithUsPageView from '@/app/components/WorkWithUsPageView';
import { locales } from '@/app/site-content';

type Params = {
    locale: string;
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const WorkWithUsPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    if (!locales.includes(locale as (typeof locales)[number])) {
        notFound();
    }

    return <WorkWithUsPageView locale={locale} />;
};

export default WorkWithUsPage;
