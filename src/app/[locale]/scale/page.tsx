import { redirect } from 'next/navigation';

type Params = {
    locale: string;
};

const ScalePage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    redirect(`/${locale}/work-with-us#scale`);
};

export default ScalePage;
