import Link from 'next/link';

import SiteHeader from '@/app/components/SiteHeader';
import { type Locale, getCopy } from '@/app/site-content';

type ServiceBlock = {
    title: string;
    intro: string;
    items: string[];
};

type PackageBlock = {
    title: string;
    description: string;
};

type ServicesContent = {
    eyebrow: string;
    title: string;
    intro: string;
    pillars: ServiceBlock[];
    processTitle: string;
    process: Array<{ step: string; title: string; description: string }>;
    packagesTitle: string;
    packages: PackageBlock[];
};

const servicesContent: Record<Locale, ServicesContent> = {
    en: {
        eyebrow: 'Services',
        title: 'Build, grow, brand, automate, and train under one senior-level partner.',
        intro: 'We design the brand, build the product, scale the attention, and tighten the systems behind it so growth looks premium from the outside and efficient on the inside.',
        pillars: [
            {
                title: 'Build',
                intro: 'We design and develop digital products that perform. From concept to launch, we create websites, apps, and platforms that are fast, scalable, and built to convert.',
                items: ['Web & app development', 'UI/UX design', 'MVP development', 'Custom platforms & dashboards']
            },
            {
                title: 'Grow',
                intro: 'We turn attention into revenue. We combine data, content, and performance marketing to drive consistent growth and measurable results.',
                items: ['Social media management', 'Paid advertising (Meta, Google, TikTok)', 'Content strategy', 'SEO & email funnels']
            },
            {
                title: 'Brand',
                intro: 'We build brands that stand out and stay relevant. From logo to full identity, we create brands that feel premium, consistent, and instantly recognizable.',
                items: ['Logo design', 'Brand identity systems', 'Rebranding', 'Brand guidelines & visual direction']
            },
            {
                title: 'Automate',
                intro: 'We streamline your business with smart systems. We implement AI and automation to eliminate repetitive work, improve efficiency, and scale operations.',
                items: ['AI integrations', 'Workflow automation', 'CRM & system setup', 'Internal tools & no-code solutions']
            },
            {
                title: 'Train',
                intro: 'We upgrade how your team works. We help teams adopt modern frameworks, tools, and workflows to move faster and work smarter.',
                items: ['Agile & Scrum training', 'AI adoption workshops', 'Digital transformation consulting', 'Process optimization']
            }
        ],
        processTitle: 'How we work',
        process: [
            { step: '01', title: 'Discover', description: 'We understand your business, goals, and challenges.' },
            { step: '02', title: 'Build', description: 'We design and develop tailored solutions.' },
            { step: '03', title: 'Grow', description: 'We optimize, market, and scale your results.' }
        ],
        packagesTitle: 'High-ticket packages',
        packages: [
            { title: 'Startup Launch Package', description: 'Branding, website, MVP development, and ads setup for an ambitious first market entry.' },
            { title: 'Scale Package', description: 'Paid ads, social, automation, and analytics for brands that need cleaner growth systems.' },
            { title: 'Digital Transformation', description: 'Systems, AI, training, and process optimization for teams evolving into a sharper operating model.' }
        ]
    },
    nl: {
        eyebrow: 'Diensten',
        title: 'Bouwen, groeien, branden, automatiseren en trainen onder één senior partner.',
        intro: 'Wij ontwerpen het merk, bouwen het product, schalen de aandacht en verbeteren de systemen erachter zodat groei premium oogt aan de buitenkant en efficiënt werkt aan de binnenkant.',
        pillars: [
            {
                title: 'Build',
                intro: 'We ontwerpen en ontwikkelen digitale producten die presteren. Van concept tot lancering bouwen we websites, apps en platforms die snel, schaalbaar en conversiegericht zijn.',
                items: ['Web- en appontwikkeling', 'UI/UX design', 'MVP development', 'Maatwerk platforms & dashboards']
            },
            {
                title: 'Grow',
                intro: 'We zetten aandacht om in omzet. We combineren data, content en performance marketing voor consistente groei en meetbare resultaten.',
                items: ['Social media management', 'Paid advertising (Meta, Google, TikTok)', 'Contentstrategie', 'SEO & e-mail funnels']
            },
            {
                title: 'Brand',
                intro: 'We bouwen merken die opvallen en relevant blijven. Van logo tot volledige identiteit creëren we merken die premium, consistent en direct herkenbaar voelen.',
                items: ['Logo design', 'Merkidentiteitssystemen', 'Rebranding', 'Brand guidelines & visual direction']
            },
            {
                title: 'Automate',
                intro: 'We stroomlijnen je business met slimme systemen. We implementeren AI en automatisering om repetitief werk te verminderen en operaties schaalbaar te maken.',
                items: ['AI-integraties', 'Workflow automation', 'CRM & systeeminrichting', 'Interne tools & no-code oplossingen']
            },
            {
                title: 'Train',
                intro: 'We verbeteren hoe je team werkt. We helpen teams moderne frameworks, tools en workflows adopteren om sneller en slimmer te werken.',
                items: ['Agile & Scrum training', 'AI adoption workshops', 'Digital transformation consulting', 'Procesoptimalisatie']
            }
        ],
        processTitle: 'Hoe we werken',
        process: [
            { step: '01', title: 'Discover', description: 'We begrijpen je business, doelen en uitdagingen.' },
            { step: '02', title: 'Build', description: 'We ontwerpen en ontwikkelen oplossingen op maat.' },
            { step: '03', title: 'Grow', description: 'We optimaliseren, marketen en schalen je resultaten.' }
        ],
        packagesTitle: 'High-ticket pakketten',
        packages: [
            { title: 'Startup Launch Package', description: 'Branding, website, MVP en advertentiesetup voor een sterke eerste marktintroductie.' },
            { title: 'Scale Package', description: 'Ads, social, automation en analytics voor merken die een scherper groeisysteem nodig hebben.' },
            { title: 'Digital Transformation', description: 'Systemen, AI, training en procesoptimalisatie voor teams die hun operating model willen upgraden.' }
        ]
    },
    th: {
        eyebrow: 'บริการ',
        title: 'สร้าง เติบโต วางแบรนด์ อัตโนมัติ และพัฒนาทีม ภายใต้พาร์ตเนอร์ระดับซีเนียร์ทีมเดียว',
        intro: 'เราออกแบบแบรนด์ สร้างโปรดักต์ ขยายการเติบโต และจัดระบบเบื้องหลังให้แข็งแรง เพื่อให้ภาพลักษณ์ดูพรีเมียมและการทำงานภายในมีประสิทธิภาพจริง.',
        pillars: [
            {
                title: 'Build',
                intro: 'เราออกแบบและพัฒนาผลิตภัณฑ์ดิจิทัลที่ทำงานได้จริง ตั้งแต่แนวคิดจนถึงเปิดตัว เราสร้างเว็บไซต์ แอป และแพลตฟอร์มที่เร็ว ขยายได้ และเน้นผลลัพธ์.',
                items: ['พัฒนาเว็บไซต์และแอป', 'ออกแบบ UI/UX', 'พัฒนา MVP', 'แพลตฟอร์มและแดชบอร์ดแบบกำหนดเอง']
            },
            {
                title: 'Grow',
                intro: 'เราเปลี่ยนความสนใจให้เป็นรายได้ เราผสานข้อมูล คอนเทนต์ และ performance marketing เพื่อการเติบโตที่วัดผลได้.',
                items: ['ดูแลโซเชียลมีเดีย', 'โฆษณาแบบชำระเงิน (Meta, Google, TikTok)', 'กลยุทธ์คอนเทนต์', 'SEO และอีเมลฟันเนล']
            },
            {
                title: 'Brand',
                intro: 'เราสร้างแบรนด์ที่โดดเด่นและอยู่ได้นาน ตั้งแต่โลโก้จนถึงระบบอัตลักษณ์ครบชุด ให้แบรนด์ดูพรีเมียมและจดจำได้ทันที.',
                items: ['ออกแบบโลโก้', 'ระบบอัตลักษณ์แบรนด์', 'รีแบรนด์', 'คู่มือแบรนด์และทิศทางภาพลักษณ์']
            },
            {
                title: 'Automate',
                intro: 'เราทำให้ธุรกิจลื่นขึ้นด้วยระบบอัจฉริยะ เรานำ AI และ automation มาใช้เพื่อลดงานซ้ำ เพิ่มประสิทธิภาพ และรองรับการขยายตัว.',
                items: ['AI integrations', 'Workflow automation', 'ตั้งค่า CRM และระบบ', 'เครื่องมือภายในและโซลูชัน no-code']
            },
            {
                title: 'Train',
                intro: 'เรายกระดับวิธีการทำงานของทีม ช่วยให้ทีมใช้ frameworks เครื่องมือ และ workflow สมัยใหม่ได้เร็วขึ้นและฉลาดขึ้น.',
                items: ['Agile & Scrum training', 'เวิร์กช็อปการใช้ AI', 'ที่ปรึกษา digital transformation', 'ปรับปรุงกระบวนการทำงาน']
            }
        ],
        processTitle: 'วิธีการทำงานของเรา',
        process: [
            { step: '01', title: 'Discover', description: 'เราเข้าใจธุรกิจ เป้าหมาย และความท้าทายของคุณก่อน.' },
            { step: '02', title: 'Build', description: 'เราออกแบบและพัฒนาโซลูชันที่เหมาะกับธุรกิจจริง.' },
            { step: '03', title: 'Grow', description: 'เรา optimize การตลาดและขยายผลลัพธ์อย่างต่อเนื่อง.' }
        ],
        packagesTitle: 'แพ็กเกจระดับไฮทิคเก็ต',
        packages: [
            { title: 'Startup Launch Package', description: 'แบรนด์ดิ้ง เว็บไซต์ MVP และการตั้งค่าโฆษณาสำหรับการเปิดตัวอย่างมั่นใจ.' },
            { title: 'Scale Package', description: 'Ads, social, automation และ analytics สำหรับแบรนด์ที่ต้องการระบบเติบโตที่คมขึ้น.' },
            { title: 'Digital Transformation', description: 'ระบบ AI การฝึกอบรม และ process optimization สำหรับทีมที่กำลังยกระดับการทำงาน.' }
        ]
    }
};

const ServicesPageView = ({ locale }: { locale: string }) => {
    const copy = getCopy(locale);
    const content = servicesContent[locale as Locale] ?? servicesContent.en;

    return (
        <main className='agency-shell bg-[var(--agency-cream)] text-white'>
            <section className='relative overflow-hidden px-4 pb-14 pt-5 sm:px-6 lg:px-8'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,109,24,0.18),transparent_30%),linear-gradient(180deg,#1a1a1d_0%,#121214_100%)]' />
                <div className='relative z-10 mx-auto max-w-[1760px]'>
                    <SiteHeader locale={locale} path='/services' />

                    <div className='mx-auto max-w-6xl py-14 sm:py-18 lg:py-24'>
                        <div className='max-w-4xl space-y-6'>
                            <p className='text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                {content.eyebrow}
                            </p>
                            <h1 className='text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl'>
                                {content.title}
                            </h1>
                            <p className='max-w-3xl text-lg leading-8 text-white/72'>{content.intro}</p>
                        </div>

                        <div className='mt-14 grid gap-5 lg:grid-cols-2'>
                            {content.pillars.map((pillar) => (
                                <article key={pillar.title} className='glass-panel rounded-[1.8rem] p-7 sm:p-8'>
                                    <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[var(--agency-orange)]'>
                                        {pillar.title}
                                    </p>
                                    <p className='mt-4 text-xl font-semibold tracking-[-0.04em] text-white'>{pillar.intro}</p>
                                    <div className='mt-6'>
                                        <p className='text-[0.72rem] uppercase tracking-[0.28em] text-white/42'>
                                            What we do
                                        </p>
                                        <div className='mt-4 grid gap-3'>
                                            {pillar.items.map((item) => (
                                                <div
                                                    key={item}
                                                    className='rounded-[1rem] border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/78'
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className='mt-20 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]'>
                            <div className='space-y-4'>
                                <p className='text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                    {content.processTitle}
                                </p>
                                <h2 className='text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl'>
                                    A premium process that keeps strategy, execution, and scale in one lane.
                                </h2>
                            </div>
                            <div className='grid gap-4 md:grid-cols-3'>
                                {content.process.map((item) => (
                                    <div key={item.step} className='glass-panel rounded-[1.5rem] p-6'>
                                        <p className='text-sm font-semibold text-[var(--agency-orange)]'>{item.step}</p>
                                        <p className='mt-4 text-xl font-semibold text-white'>{item.title}</p>
                                        <p className='mt-3 text-sm leading-6 text-white/70'>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='mt-20'>
                            <div className='max-w-3xl space-y-4'>
                                <p className='text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                    {content.packagesTitle}
                                </p>
                                <h2 className='text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl'>
                                    Structured offers for brands buying outcomes, not fragmented deliverables.
                                </h2>
                            </div>

                            <div className='mt-8 grid gap-5 lg:grid-cols-3'>
                                {content.packages.map((pkg) => (
                                    <article key={pkg.title} className='glass-panel rounded-[1.8rem] p-7 sm:p-8'>
                                        <p className='text-2xl font-semibold tracking-[-0.04em] text-white'>{pkg.title}</p>
                                        <p className='mt-4 text-base leading-7 text-white/72'>{pkg.description}</p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className='mt-12 flex flex-wrap gap-4'>
                            <Link href={`/${locale}/contact`} className='agency-button agency-button--solid'>
                                {copy.home.supportLabel}
                            </Link>
                            <Link href={`/${locale}/work`} className='agency-button agency-button--link'>
                                {copy.nav.work}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServicesPageView;
