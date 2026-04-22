import { redirect } from 'next/navigation';

type Params = {
    locale: string;
};

const WorkWithUsPage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    redirect(`/${locale}/contact#packages`);
};

export default WorkWithUsPage;
