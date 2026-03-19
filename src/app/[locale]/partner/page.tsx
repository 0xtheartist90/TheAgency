import { redirect } from 'next/navigation';

type Params = {
    locale: string;
};

const PartnerPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    redirect(`/${locale}/work-with-us#partner`);
};

export default PartnerPage;
