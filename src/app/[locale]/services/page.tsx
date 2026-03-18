import { notFound } from 'next/navigation';

import ServicesPageView from '@/app/components/ServicesPageView';
import { locales } from '@/app/site-content';

type Params = {
    locale: string;
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const ServicesPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    if (!locales.includes(locale as (typeof locales)[number])) {
        notFound();
    }

    return <ServicesPageView locale={locale} />;
};

export default ServicesPage;
