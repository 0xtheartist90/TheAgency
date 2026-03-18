import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ProcessSection from '@/app/components/ProcessSection';
import Reveal from '@/app/components/Reveal';
import ServicesShowcase from '@/app/components/ServicesShowcase';
import SiteHeader from '@/app/components/SiteHeader';
import { getCopy, locales } from '@/app/site-content';

type Params = {
    locale: string;
};

const homeHighlights = {
    en: [
        {
            label: 'What clients buy',
            title: 'One agency that can shape the brand, ship the product, and scale the growth.',
            description: 'You do not have to juggle strategy, design, build, performance, and systems across disconnected vendors.'
        },
        {
            label: 'Why it feels premium',
            title: 'The work is designed as one visual and commercial system.',
            description: 'That means the brand, site, campaign, and internal setup all move in the same direction from day one.'
        },
        {
            label: 'What happens next',
            title: 'We turn the next phase of the business into something clearer, faster, and more expensive-feeling.',
            description: 'Launches become sharper, marketing becomes more measurable, and operations become easier to scale.'
        }
    ],
    nl: [
        {
            label: 'Wat klanten kopen',
            title: 'Eén agency die het merk kan vormgeven, het product kan bouwen en de groei kan schalen.',
            description: 'Je hoeft strategie, design, build, performance en systemen niet over losse vendors te verdelen.'
        },
        {
            label: 'Waarom het premium voelt',
            title: 'Het werk wordt ontworpen als één visueel en commercieel systeem.',
            description: 'Zo bewegen merk, site, campagne en interne setup vanaf dag één in dezelfde richting.'
        },
        {
            label: 'Wat er daarna gebeurt',
            title: 'We maken de volgende fase van het bedrijf helderder, sneller en waardevoller in uitstraling.',
            description: 'Lanceringen worden scherper, marketing wordt meetbaarder en operations schalen eenvoudiger.'
        }
    ],
    th: [
        {
            label: 'สิ่งที่ลูกค้าได้',
            title: 'เอเจนซี่เดียวที่ดูแลได้ทั้งแบรนด์ สร้างโปรดักต์ และขยายการเติบโต.',
            description: 'คุณไม่ต้องแยกกลยุทธ์ ดีไซน์ การพัฒนา การตลาด และระบบ ไปคนละทีมอีกต่อไป.'
        },
        {
            label: 'ทำไมถึงดูพรีเมียม',
            title: 'ทุกอย่างถูกออกแบบให้เป็นระบบภาพลักษณ์และระบบธุรกิจเดียวกัน.',
            description: 'แบรนด์ เว็บไซต์ แคมเปญ และระบบภายในจึงไปในทิศทางเดียวกันตั้งแต่วันแรก.'
        },
        {
            label: 'สิ่งที่เกิดขึ้นต่อจากนี้',
            title: 'เราทำให้เฟสถัดไปของธุรกิจชัดขึ้น เร็วขึ้น และดูมีมูลค่ามากขึ้น.',
            description: 'การเปิดตัวคมขึ้น การตลาดวัดผลได้มากขึ้น และระบบการทำงานขยายได้ง่ายขึ้น.'
        }
    ]
} as const;

const footerLinks = {
    en: ['Strategy', 'Design', 'Development', 'Growth', 'Automation'],
    nl: ['Strategie', 'Design', 'Development', 'Groei', 'Automatisering'],
    th: ['กลยุทธ์', 'ดีไซน์', 'Development', 'Growth', 'Automation']
} as const;

const testimonials = {
    en: [
        {
            quote: 'They gave the brand real gravity. Everything suddenly looked more expensive and more intentional.',
            author: 'Founder, premium hospitality concept'
        },
        {
            quote: 'What stood out was the clarity. Strategy, site, creative, and growth all felt like one exact system.',
            author: 'Director, consumer brand launch'
        },
        {
            quote: 'Fast, sharp, and genuinely high taste. The kind of team that changes the ceiling of the business.',
            author: 'CEO, service-led scale-up'
        }
    ],
    nl: [
        {
            quote: 'Ze gaven het merk echte zwaarte. Alles voelde ineens duurder en doelbewuster.',
            author: 'Founder, premium hospitality concept'
        },
        {
            quote: 'Wat opviel was de helderheid. Strategie, site, creative en groei voelden als één exact systeem.',
            author: 'Director, consumer brand launch'
        },
        {
            quote: 'Snel, scherp en met echte smaak. Het soort team dat het plafond van een business verhoogt.',
            author: 'CEO, service-led scale-up'
        }
    ],
    th: [
        {
            quote: 'พวกเขาทำให้แบรนด์มีน้ำหนักขึ้นจริง ทุกอย่างดูแพงขึ้นและมีเจตนามากขึ้นทันที.',
            author: 'Founder, premium hospitality concept'
        },
        {
            quote: 'สิ่งที่เด่นที่สุดคือความชัดเจน กลยุทธ์ เว็บไซต์ ครีเอทีฟ และการเติบโตถูกเชื่อมเป็นระบบเดียวกัน.',
            author: 'Director, consumer brand launch'
        },
        {
            quote: 'เร็ว คม และมีรสนิยมสูงจริง เป็นทีมที่ยกระดับเพดานของธุรกิจได้.',
            author: 'CEO, service-led scale-up'
        }
    ]
} as const;

const sectionText = {
    en: {
        servicesHeading: 'Five core offers, one coherent agency system.',
        storyBridgeTitle: 'Built by people who’ve worked inside brands and built their own.',
        storyBridgeBody: '',
        testimonialEyebrow: 'Selected feedback',
        testimonialHeading: 'What it feels like to work with a team that understands taste and execution.',
        workHeading: 'Work that speaks for itself.',
        workBody:
            'From early ideas to full-scale launches — we build things that actually ship, scale, and stick.',
        footerBody:
            'High-end brand systems, digital products, performance marketing, and automation for businesses ready to look and operate at a higher level.'
    },
    nl: {
        servicesHeading: 'Vijf kernaanbiedingen, een samenhangend agenciesysteem.',
        storyBridgeTitle: 'Design, technologie en groei.',
        storyBridgeBody: 'Op een lijn.',
        testimonialEyebrow: 'Geselecteerde feedback',
        testimonialHeading: 'Hoe het voelt om te werken met een team dat smaak en uitvoering tegelijk begrijpt.',
        workHeading: 'Zie hoe het werk zich vertaalt naar launches, systemen en merken die echt premium voelen.',
        workBody: 'Campagnes, websites, brandsystemen en groeistructuren die schoner ogen en harder presteren.',
        footerBody:
            'High-end brandsystemen, digitale producten, performance marketing en automation voor bedrijven die op een hoger niveau willen ogen en opereren.'
    },
    th: {
        servicesHeading: '5 บริการหลักที่ทำงานร่วมกันเป็นระบบเดียว.',
        storyBridgeTitle: 'ดีไซน์ เทคโนโลยี และการเติบโต',
        storyBridgeBody: 'ไปในทิศทางเดียวกัน',
        testimonialEyebrow: 'เสียงตอบรับ',
        testimonialHeading: 'ประสบการณ์เมื่อได้ทำงานกับทีมที่เข้าใจทั้งรสนิยมและการลงมือทำ.',
        workHeading: 'ดูว่างานของเราถูกแปลงเป็นการเปิดตัว ระบบ และแบรนด์ที่ดูยกระดับจริงได้อย่างไร.',
        workBody: 'แคมเปญ เว็บไซต์ ระบบแบรนด์ และโครงสร้างการเติบโตที่ดูสะอาดกว่าและทำงานได้แรงกว่า.',
        footerBody:
            'ระบบแบรนด์ระดับพรีเมียม ผลิตภัณฑ์ดิจิทัล performance marketing และ automation สำหรับธุรกิจที่พร้อมยกระดับภาพลักษณ์และการทำงาน.'
    }
} as const;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { locale } = await params;
    const copy = getCopy(locale);

    return {
        title: `The Agency | ${copy.localeLabel}`,
        description: copy.pages.story.intro
    };
}

const LocalizedHomePage = async ({ params }: { params: Promise<Params> }) => {
    const { locale } = await params;

    if (!locales.includes(locale as (typeof locales)[number])) {
        notFound();
    }

    const copy = getCopy(locale);
    const highlights = homeHighlights[locale as keyof typeof homeHighlights] ?? homeHighlights.en;
    const footerPills = footerLinks[locale as keyof typeof footerLinks] ?? footerLinks.en;
    const quotes = testimonials[locale as keyof typeof testimonials] ?? testimonials.en;
    const text = sectionText[locale as keyof typeof sectionText] ?? sectionText.en;

    return (
        <main className='agency-shell bg-[var(--agency-cream)] text-white'>
            <SiteHeader locale={locale} />

            <section className='relative min-h-screen'>
                <video
                    className='absolute inset-0 h-full w-full object-cover'
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload='auto'
                >
                    <source src='/images/Home/hero-agency.webm' type='video/webm' />
                </video>
                <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.14)_22%,rgba(255,255,255,0.16)_48%,rgba(10,10,12,0.12)_100%)]' />

                <div className='relative z-10 mx-auto flex min-h-screen max-w-[1760px] flex-col px-4 pb-8 pt-5 sm:px-6 lg:px-8'>
                    <div className='relative flex flex-1 flex-col items-center justify-center'>

                        <p className='animate-rise-in mt-8 max-w-xl text-center text-[0.86rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)] sm:mt-10 sm:text-[0.96rem]'>
                            {copy.home.eyebrow}
                        </p>

                        <div className='animate-rise-in animation-delay-1 flex w-full justify-center px-4 pt-10 sm:px-10 lg:px-16'>
                            <Image
                                src='/images/Logo/the-agency-logo.webp'
                                alt='The Agency'
                                width={1244}
                                height={352}
                                priority
                                className='hero-wordmark h-auto w-full max-w-[1220px]'
                            />
                        </div>

                        <div className='animate-rise-in animation-delay-2 mt-8 flex flex-col items-center gap-5 text-center'>
                            <div className='flex flex-wrap justify-center gap-4'>
                                <Link href={`/${locale}/work`} className='agency-button agency-button--solid'>
                                    {copy.home.ctaPrimary}
                                </Link>
                                <Link href={`/${locale}/story`} className='agency-button agency-button--link'>
                                    {copy.home.ctaSecondary}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesShowcase locale={locale} ctaLabel={copy.nav.services} />

            <section className='relative overflow-hidden bg-[#1a1a1f] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
                <video
                    className='absolute inset-0 h-full w-full object-cover brightness-[0.48] saturate-[0.88]'
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload='auto'
                >
                    <source src='/images/Home/the-hand.webm' type='video/webm' />
                </video>
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <div className='grid min-h-[760px] gap-10 py-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:py-10'>
                        <Reveal className='max-w-5xl' distance={44}>
                            <p className='text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-white/88'>
                                {copy.nav.story}
                            </p>
                            <h2 className='mt-5 text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl'>
                                {copy.pages.story.intro}
                            </h2>

                            <div className='mt-8 grid gap-5 lg:grid-cols-[0.95fr_0.75fr] lg:items-stretch'>
                                <div className='min-h-[420px] overflow-hidden rounded-[1.9rem] lg:min-h-0 lg:h-full'>
                                    <Image
                                        src='/images/Home/ace.png'
                                        alt='Ace, founder of The Agency'
                                        width={900}
                                        height={1125}
                                        className='h-full w-full object-cover'
                                    />
                                </div>

                                <div className='grid gap-5 lg:h-full lg:grid-rows-3'>
                                    {copy.pages.story.sections.map((section, index) => (
                                        <div
                                            key={section}
                                            className='story-number-card group relative flex h-28 w-28 items-center overflow-hidden rounded-[1.5rem] px-0 transition-[width,padding,box-shadow] duration-500 ease-out hover:w-full hover:px-5 hover:shadow-[0_35px_90px_rgba(0,0,0,0.18)] lg:h-full'
                                        >
                                            <div className='story-number-card-surface absolute inset-0 rounded-[1.5rem]' />
                                            <span className='relative z-10 flex w-28 shrink-0 items-center justify-center text-4xl font-semibold leading-none tracking-[-0.06em] text-[var(--agency-orange)] sm:text-5xl'>
                                                0{index + 1}
                                            </span>
                                            <p className='relative z-10 max-w-0 overflow-hidden pl-0 text-sm leading-7 whitespace-nowrap text-white/82 opacity-0 transition-[max-width,padding,opacity] duration-500 ease-out group-hover:max-w-md group-hover:pl-4 group-hover:opacity-100 sm:text-base'>
                                                {section}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='mt-8 flex flex-wrap items-center gap-5'>
                                <Link href={`/${locale}/story`} className='agency-button agency-button--solid'>
                                    Meet the team
                                </Link>
                            </div>
                        </Reveal>

                        <Reveal className='flex items-end lg:justify-self-end' delay={140} distance={40}>
                            <div className='glass-panel w-full max-w-md rounded-[1.9rem] p-7'>
                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                    {text.storyBridgeTitle}
                                </p>
                                {text.storyBridgeBody ? (
                                    <p className='mt-4 text-lg leading-8 text-white/78'>
                                        {text.storyBridgeBody}
                                    </p>
                                ) : null}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className='bg-[linear-gradient(180deg,#f5eee6_0%,#efe4d5_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-16'>
                <div className='mx-auto max-w-7xl'>
                    <div className='relative'>
                        <div
                            className='relative overflow-hidden bg-[linear-gradient(135deg,#17171b_0%,#232329_100%)] px-6 py-10 shadow-[0_28px_90px_rgba(30,20,12,0.16)] sm:px-8 sm:py-12 lg:px-10 lg:py-16'
                            style={{
                                clipPath: 'polygon(4% 0, 100% 0, 100% 86%, 84% 86%, 80% 100%, 0 100%, 0 16%)'
                            }}
                        >
                            <div className='absolute left-0 bottom-10 h-px w-44 -rotate-[20deg] bg-white/58 sm:w-56' />
                            <div className='absolute left-3 bottom-7 h-px w-40 -rotate-[20deg] bg-white/58 sm:w-52' />
                            <div className='absolute left-6 bottom-4 h-px w-36 -rotate-[20deg] bg-white/58 sm:w-48' />

                            <div className='grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start'>
                                <Reveal className='max-w-3xl' distance={42}>
                                    <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                        {copy.nav.work}
                                    </p>
                                    <h2 className='mt-4 text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl'>
                                        {text.workHeading}
                                    </h2>
                                    <p className='mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg'>
                                        {text.workBody}
                                    </p>
                                </Reveal>

                                <Reveal
                                    className='grid gap-3 sm:grid-cols-2 lg:mb-16 lg:max-w-[27rem] lg:justify-self-end lg:self-start'
                                    delay={160}
                                    distance={46}
                                >
                                    {[
                                        {
                                            value: '150+',
                                            label: 'Projects'
                                        },
                                        {
                                            value: '15+',
                                            label: 'Countries'
                                        },
                                        {
                                            value: '10+',
                                            label: 'Industries'
                                        },
                                        {
                                            value: '5+',
                                            label: 'Years'
                                        }
                                    ].map((stat) => (
                                        <div
                                            key={stat.label}
                                            className='relative min-h-[8.2rem] overflow-hidden rounded-[1.15rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.008)_100%)] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]'
                                        >
                                            <div className='mb-5'>
                                                <p className='text-[2.35rem] font-semibold leading-none tracking-[-0.09em] text-white sm:text-[2.65rem]'>
                                                    {stat.value}
                                                </p>
                                            </div>
                                            <p className='max-w-[10ch] text-[0.74rem] font-medium uppercase tracking-[0.24em] text-white/54'>
                                                {stat.label}
                                            </p>
                                            <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent' />
                                            <div className='absolute left-5 bottom-0 h-px w-14 bg-[linear-gradient(90deg,rgba(255,106,0,0.85),rgba(255,106,0,0))]' />
                                        </div>
                                    ))}
                                </Reveal>
                            </div>

                        </div>

                        <Reveal className='absolute right-0 bottom-0 sm:right-3 lg:right-6' delay={260} distance={30}>
                            <Link
                                href={`/${locale}/work`}
                                className='inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#16161a] shadow-[0_14px_30px_rgba(30,20,12,0.12)] transition hover:translate-x-1'
                            >
                                {copy.nav.work}
                                <span className='inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/10 text-base leading-none'>
                                    +
                                </span>
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>

            <ProcessSection />

            <footer className='bg-[linear-gradient(180deg,#17171b_0%,#121216_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='mx-auto max-w-7xl'>
                    <div className='overflow-hidden rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(33,33,39,0.94)_0%,rgba(18,18,22,0.98)_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.34)]'>
                        <Reveal className='grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-10' distance={38}>
                            <div className='max-w-2xl'>
                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                    The Agency
                                </p>
                                <Image
                                    src='/images/Logo/the-agency-logo-orange.webp'
                                    alt='The Agency'
                                    width={240}
                                    height={68}
                                    className='mt-4 h-10 w-auto'
                                />
                                <p className='mt-5 max-w-xl text-sm leading-7 text-white/58'>{text.footerBody}</p>
                            </div>

                            <div className='lg:justify-self-end'>
                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/34'>
                                    Capabilities
                                </p>
                                <div className='mt-5 flex max-w-md flex-wrap gap-3'>
                                    {footerPills.map((pill) => (
                                        <span
                                            key={pill}
                                            className='rounded-full border border-white/9 bg-white/[0.04] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/48'
                                        >
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        <div className='h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]' />

                        <Reveal
                            className='flex flex-col gap-5 px-6 py-5 text-sm text-white/42 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10'
                            delay={120}
                            distance={26}
                        >
                            <div className='flex flex-wrap gap-6'>
                                <Link href={`/${locale}/story`} className='transition hover:text-white/82'>
                                    {copy.nav.story}
                                </Link>
                                <Link href={`/${locale}/services`} className='transition hover:text-white/82'>
                                    {copy.nav.services}
                                </Link>
                                <Link href={`/${locale}/work`} className='transition hover:text-white/82'>
                                    {copy.nav.work}
                                </Link>
                                <Link href={`/${locale}/contact`} className='transition hover:text-white/82'>
                                    {copy.nav.contact}
                                </Link>
                            </div>
                            <p className='tracking-[0.08em] text-white/34'>© 2026 The Agency. All rights reserved.</p>
                        </Reveal>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default LocalizedHomePage;
