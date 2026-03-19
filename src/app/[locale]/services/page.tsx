import { notFound, redirect } from 'next/navigation';

import { locales } from '@/app/site-content';

type Params = {
    locale: string;
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const ServicesRedirectPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    if (!locales.includes(locale as (typeof locales)[number])) {
        notFound();
    }

    redirect(`/${locale}/services/build`);
};

export default ServicesRedirectPage;
