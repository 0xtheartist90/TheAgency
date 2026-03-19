import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ProcessSection from '@/app/components/ProcessSection';
import Reveal from '@/app/components/Reveal';
import ServicesShowcase from '@/app/components/ServicesShowcase';
import SiteHeader from '@/app/components/SiteHeader';
import { getCopy, locales, type Locale } from '@/app/site-content';
import { getUiCopy } from '@/app/ui-content';
import { getWorkWithUsContent } from '@/app/work-with-us-content';

type Params = {
    locale: string;
};

const packageCardClipPath =
    'polygon(0 12%, 10% 0, 64% 0, 68% 6%, 89% 6%, 94% 0, 100% 0, 100% 88%, 94% 94%, 94% 100%, 0 100%)';
const storySectionClipPath = 'polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)';

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

const meetAndGreetBanner = {
    en: {
        label: 'Meet & Greet',
        title: 'Schedule a meet and greet',
        body: 'Start with a quick conversation so we can understand what you are building and see if we are the right fit.',
        cta: 'Schedule meet and greet'
    },
    nl: {
        label: 'Meet & Greet',
        title: 'Plan een meet & greet',
        body: 'Begin met een kort gesprek zodat we kunnen begrijpen wat je wilt bouwen en kunnen kijken of we goed bij elkaar passen.',
        cta: 'Plan een meet & greet'
    },
    th: {
        label: 'Meet & Greet',
        title: 'นัดคุยเบื้องต้น',
        body: 'เริ่มต้นด้วยการคุยสั้น ๆ เพื่อให้เราเข้าใจว่าคุณกำลังสร้างอะไร และดูว่าเราเหมาะจะทำงานร่วมกันหรือไม่',
        cta: 'นัดคุยเบื้องต้น'
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
    const quotes = testimonials[locale as keyof typeof testimonials] ?? testimonials.en;
    const text = sectionText[locale as keyof typeof sectionText] ?? sectionText.en;
    const workWithUs = getWorkWithUsContent(locale as (typeof locales)[number]);
    const meetAndGreet = meetAndGreetBanner[locale as keyof typeof meetAndGreetBanner] ?? meetAndGreetBanner.en;
    const ui = getUiCopy(locale as Locale);

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

                        <p className='animate-rise-in -mt-4 max-w-xl text-center text-[0.96rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)] sm:-mt-6 sm:text-[1.08rem]'>
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

                        <div className='mt-8 flex flex-col items-center gap-5 text-center'>
                            <div className='flex flex-wrap justify-center gap-4'>
                                <Reveal delay={220} distance={-44} axis='x'>
                                    <Link href={`/${locale}/work`} className='agency-button agency-button--solid hero-primary-cta'>
                                        {copy.home.ctaPrimary}
                                    </Link>
                                </Reveal>
                                <Reveal delay={280} distance={44} axis='x'>
                                    <Link href={`/${locale}/story`} className='agency-button agency-button--link'>
                                        {copy.home.ctaSecondary}
                                    </Link>
                                </Reveal>
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
                        <div className='relative max-w-5xl'>
                            <Reveal className='pointer-events-none absolute bottom-[-6rem] left-[-11rem] z-0 hidden lg:block' delay={120} distance={-56} axis='x'>
                                <Image
                                    src='/images/Home/carrycube.png'
                                    alt='Carry cube visual'
                                    width={900}
                                    height={1125}
                                    className='h-[45rem] w-auto max-w-none object-contain'
                                />
                            </Reveal>

                            <Reveal className='relative z-10' distance={28}>
                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-white/88'>
                                    {copy.nav.workWithUs}
                                </p>
                            </Reveal>
                            <Reveal className='relative z-10' delay={70} distance={34}>
                                <h2 className='mt-5 text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl'>
                                    {copy.pages.story.intro}
                                </h2>
                            </Reveal>

                            <div className='relative z-10 mt-8 lg:min-h-[27rem]'>
                                <div className='relative z-10 grid gap-5 lg:ml-[20rem] lg:w-fit lg:grid-rows-[repeat(3,7rem)]'>
                                    {workWithUs.packages.map((pkg, index) => (
                                        <Reveal key={pkg.slug} delay={140 + index * 90} distance={44} axis='x'>
                                            <div
                                                className='story-number-card group relative flex h-28 w-28 items-center overflow-hidden border border-white/14 px-0 transition-[width,padding,box-shadow] duration-500 ease-out hover:w-[24rem] hover:px-5 hover:shadow-[0_35px_90px_rgba(0,0,0,0.18)]'
                                                style={{ clipPath: storySectionClipPath }}
                                            >
                                                <div className='story-number-card-surface absolute inset-0' />
                                                <span className='relative z-10 flex w-28 shrink-0 items-center justify-center text-4xl font-semibold leading-none tracking-[-0.06em] text-[var(--agency-orange)] sm:text-5xl'>
                                                    0{index + 1}
                                                </span>
                                                <p className='relative z-10 max-w-0 overflow-hidden pl-0 pr-1 text-sm leading-6 text-white/82 opacity-0 transition-[max-width,padding,opacity] duration-500 ease-out group-hover:max-w-[16rem] group-hover:pl-4 group-hover:opacity-100 sm:text-base'>
                                                    {pkg.title}. {pkg.headline}
                                                </p>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>

                            <Reveal
                                className='relative z-10 mt-8 flex flex-wrap items-center justify-center gap-5 lg:ml-[20rem] lg:justify-start'
                                delay={430}
                                distance={24}
                            >
                                <Link href={`/${locale}/story`} className='agency-button agency-button--solid'>
                                    {ui.home.meetTeam}
                                </Link>
                            </Reveal>
                        </div>

                        <Reveal className='flex items-end lg:justify-self-end' delay={210} distance={40}>
                            <div
                                className='glass-panel w-full max-w-md border border-white/14 p-7'
                                style={{ clipPath: packageCardClipPath }}
                            >
                                <Reveal distance={20}>
                                    <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                        {text.storyBridgeTitle}
                                    </p>
                                </Reveal>
                                {text.storyBridgeBody ? (
                                    <Reveal delay={70} distance={22}>
                                        <p className='mt-4 text-lg leading-8 text-white/78'>
                                            {text.storyBridgeBody}
                                        </p>
                                    </Reveal>
                                ) : null}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[linear-gradient(180deg,#f5eee6_0%,#efe4d5_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-16'>
                <video
                    className='absolute inset-0 h-full w-full object-cover brightness-[0.7] saturate-[0.82]'
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload='auto'
                >
                    <source src='/images/Home/smoothbg.mp4' type='video/mp4' />
                </video>
                <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(245,238,230,0.82)_0%,rgba(239,228,213,0.78)_100%)]' />
                <div className='relative z-10 mx-auto max-w-7xl'>
                    <div className='relative'>
                        <Reveal
                            className='pointer-events-none absolute right-[13.5rem] bottom-0 z-20 hidden lg:block xl:right-[16rem]'
                            delay={220}
                            distance={36}
                        >
                            <Image
                                src='/images/Home/carrysmallcube.png'
                                alt='Carrying small cube visual'
                                width={540}
                                height={820}
                                className='h-[29rem] w-auto max-w-none xl:h-[32rem]'
                            />
                        </Reveal>

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
                                <div className='max-w-3xl'>
                                    <Reveal distance={28}>
                                        <p className='text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--agency-orange)]'>
                                            {copy.nav.work}
                                        </p>
                                    </Reveal>
                                    <Reveal delay={70} distance={34}>
                                        <h2 className='mt-4 text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl'>
                                            {text.workHeading}
                                        </h2>
                                    </Reveal>
                                    <Reveal delay={150} distance={28}>
                                        <p className='mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg'>
                                            {text.workBody}
                                        </p>
                                    </Reveal>
                                </div>

                                <div className='grid gap-3 sm:grid-cols-2 lg:mb-16 lg:max-w-[27rem] lg:justify-self-end lg:self-start'>
                                    {[
                                        {
                                            value: '150+',
                                            label: ui.home.stats.projects
                                        },
                                        {
                                            value: '15+',
                                            label: ui.home.stats.countries
                                        },
                                        {
                                            value: '10+',
                                            label: ui.home.stats.industries
                                        },
                                        {
                                            value: '5+',
                                            label: ui.home.stats.years
                                        }
                                    ].map((stat, index) => (
                                        <Reveal key={stat.label} delay={180 + index * 80} distance={26}>
                                            <div
                                                className='relative flex min-h-[8.2rem] flex-col items-center justify-center overflow-hidden rounded-[1.15rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.008)_100%)] px-5 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]'
                                            >
                                                <div className='mb-4'>
                                                    <p className='text-[2.35rem] font-semibold leading-none tracking-[-0.09em] text-white sm:text-[2.65rem]'>
                                                        {stat.value}
                                                    </p>
                                                </div>
                                                <p className='max-w-[10ch] text-[0.74rem] font-medium uppercase tracking-[0.24em] text-white/54'>
                                                    {stat.label}
                                                </p>
                                                <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent' />
                                                <div className='absolute bottom-0 left-1/2 h-px w-14 -translate-x-1/2 bg-[linear-gradient(90deg,rgba(255,106,0,0),rgba(255,106,0,0.85),rgba(255,106,0,0))]' />
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <Reveal className='absolute right-0 bottom-0 sm:right-3 lg:right-6' delay={520} distance={30}>
                            <Link
                                href={`/${locale}/work`}
                                className='inline-flex items-center gap-3 rounded-full bg-[var(--agency-orange)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_34px_rgba(255,109,24,0.26)] transition hover:translate-x-1 hover:bg-[var(--agency-orange-soft)]'
                            >
                                {copy.nav.work}
                                <span className='inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/22 text-base leading-none'>
                                    +
                                </span>
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>

            <ProcessSection locale={locale as Locale} />

            <section className='relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <video
                    className='absolute inset-0 h-full w-full object-cover'
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload='auto'
                >
                    <source src='/images/Home/smoothbg.mp4' type='video/mp4' />
                </video>
                <div className='absolute inset-0 bg-[rgba(239,229,215,0.85)]' />

                <div className='relative z-10 mx-auto max-w-7xl pt-8 lg:pt-10'>
                    <Reveal className='pointer-events-none absolute bottom-0 left-[60%] z-20 hidden -translate-x-1/2 lg:block' delay={180} distance={30}>
                        <Image
                            src='/images/Home/meetgreet.png'
                            alt='Meet and greet visual'
                            width={620}
                            height={760}
                            className='h-[21rem] w-auto max-w-none'
                        />
                    </Reveal>

                    <div
                        className='glass-panel relative overflow-hidden border border-white/12 px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10'
                        style={{ clipPath: packageCardClipPath }}
                    >
                        <div className='absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,109,24,0.14),transparent_34%)]' />
                        <div className='relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
                            <div className='max-w-[34rem]'>
                                <Reveal distance={20}>
                                    <p className='text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--agency-orange)]'>
                                        {meetAndGreet.label}
                                    </p>
                                </Reveal>
                                <Reveal delay={70} distance={24}>
                                    <h2 className='mt-3 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl'>
                                        {meetAndGreet.title}
                                    </h2>
                                </Reveal>
                                <Reveal delay={140} distance={20}>
                                    <p className='mt-4 max-w-[30rem] text-base leading-8 text-white/70'>
                                        {meetAndGreet.body}
                                    </p>
                                </Reveal>
                            </div>

                            <Reveal delay={220} distance={22}>
                                <Link href={`/${locale}/contact`} className='agency-button agency-button--solid shrink-0 lg:mr-6'>
                                    {meetAndGreet.cta}
                                </Link>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            <footer className='bg-[linear-gradient(180deg,#17171b_0%,#121216_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
                <div className='mx-auto max-w-7xl'>
                    <div className='grid gap-10 py-4 sm:py-6 lg:grid-cols-[1.1fr_0.9fr]'>
                        <div className='max-w-2xl'>
                            <Reveal distance={22}>
                                <Image
                                    src='/images/Logo/the-agency-logo-orange.webp'
                                    alt='The Agency'
                                    width={240}
                                    height={68}
                                    className='h-10 w-auto'
                                />
                            </Reveal>
                            <Reveal delay={80} distance={20}>
                                <p className='mt-5 max-w-xl text-sm leading-7 text-white/58'>{text.footerBody}</p>
                            </Reveal>
                        </div>

                        <div className='lg:justify-self-end'>
                            <Reveal delay={60} distance={20}>
                                <p className='text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/34'>
                                    {ui.footer.explore}
                                </p>
                            </Reveal>
                            <Reveal delay={130} distance={22}>
                                <div className='mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/44'>
                                    <Link href={`/${locale}/story`} className='transition hover:text-white/82'>
                                        {copy.nav.story}
                                    </Link>
                                    <Link href={`/${locale}/services/build`} className='transition hover:text-white/82'>
                                        {copy.nav.services}
                                    </Link>
                                    <Link href={`/${locale}/work`} className='transition hover:text-white/82'>
                                        {copy.nav.work}
                                    </Link>
                                    <Link href={`/${locale}/contact`} className='transition hover:text-white/82'>
                                        {copy.nav.contact}
                                    </Link>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <div className='mt-8 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]' />

                    <div className='flex flex-col gap-5 py-5 text-sm text-white/42 lg:flex-row lg:items-center lg:justify-between'>
                        <Reveal distance={18}>
                            <p className='tracking-[0.08em] text-white/34'>{ui.footer.rightsReserved}</p>
                        </Reveal>
                        <Reveal delay={70} distance={18}>
                            <Link href={`/${locale}/contact`} className='text-white/44 transition hover:text-white/82'>
                                {copy.home.supportLabel}
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default LocalizedHomePage;
