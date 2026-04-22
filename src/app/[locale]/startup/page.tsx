import { redirect } from 'next/navigation';

type Params = {
    locale: string;
};

const StartupPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    redirect(`/${locale}/contact#startup`);
};

export default StartupPage;
