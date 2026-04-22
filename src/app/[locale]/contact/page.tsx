import { notFound } from 'next/navigation';

import ContactPageView from '@/app/components/ContactPageView';
import { locales } from '@/app/site-content';

type Params = {
    locale: string;
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const ContactPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    if (!locales.includes(locale as (typeof locales)[number])) {
        notFound();
    }

    return <ContactPageView locale={locale} />;
};

export default ContactPage;
