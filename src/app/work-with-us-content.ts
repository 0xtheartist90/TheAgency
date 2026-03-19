import type { Locale } from '@/app/site-content';

export type WorkPackage = {
    slug: 'startup' | 'scale' | 'partner';
    step: string;
    title: string;
    headline: string;
    description: string;
    includes: string;
    longDescription: string;
    detailedIncludes: string[];
    note?: string;
    bestFor: string;
};

export type WorkWithUsContent = {
    sectionLabel: string;
    sectionTitle: string;
    sectionIntro: string;
    sectionCtaLabel: string;
    heroTitle: string;
    heroIntro: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    packagesTitle: string;
    packagesIntro: string;
    packageCtaLabel: string;
    comparisonTitle: string;
    flexibleTitle: string;
    flexibleIntro: string;
    flexiblePrimaryCta: string;
    flexibleSecondaryCta: string;
    finalTitle: string;
    finalIntro: string;
    finalCta: string;
    unsureText: string;
    packages: WorkPackage[];
};

export const workWithUsContent: Record<Locale, WorkWithUsContent> = {
    en: {
        sectionLabel: 'Work With Us',
        sectionTitle: 'Ways to work together',
        sectionIntro: 'We structure our work around outcomes - not just individual services.',
        sectionCtaLabel: 'Explore all options',
        heroTitle: "Let's work",
        heroIntro: "Whether you're starting from scratch or scaling what already works, we structure our work around clear outcomes.",
        heroPrimaryCta: 'Start a project',
        heroSecondaryCta: 'Contact us',
        packagesTitle: 'Packages',
        packagesIntro: 'Three clear ways to engage us, depending on the stage, pace, and level of support you need.',
        packageCtaLabel: 'Start this package',
        comparisonTitle: 'Best fit',
        flexibleTitle: 'Need something more specific?',
        flexibleIntro: 'If you’re looking for a smaller scope - like a logo, website, or specific service - we can help with that too.',
        flexiblePrimaryCta: 'Explore services',
        flexibleSecondaryCta: 'Request a quote',
        finalTitle: 'Let’s build something that works',
        finalIntro: 'Start with a simple conversation - we’ll figure out the rest together.',
        finalCta: 'Start your project',
        unsureText: 'Not sure where to start?',
        packages: [
            {
                slug: 'startup',
                step: '01',
                title: 'Startup',
                headline: 'Turn an idea into something real',
                description: 'For early-stage ideas - we help you shape, build, and launch your product.',
                includes: 'Brand, product, and launch support',
                longDescription: 'For founders and teams starting from zero - we take you from idea to a launch-ready product.',
                detailedIncludes: ['Brand', 'Product (website or app)', 'Launch support'],
                note: 'Typical timeline: 4-8 weeks',
                bestFor: 'Best for new ideas'
            },
            {
                slug: 'scale',
                step: '02',
                title: 'Scale',
                headline: 'Grow what’s already working',
                description: 'For businesses with traction - we refine, optimize, and scale your product and growth.',
                includes: 'Product, marketing, and optimization',
                longDescription: 'For businesses with traction - we improve, optimize, and grow what’s already working.',
                detailedIncludes: ['Product improvements', 'Marketing', 'Optimization'],
                bestFor: 'Best for growing businesses'
            },
            {
                slug: 'partner',
                step: '03',
                title: 'Partner',
                headline: 'A team that builds with you',
                description: 'For ongoing support - we work as an extension of your team across product, brand, and growth.',
                includes: 'Continuous design, development, and strategy',
                longDescription: 'For teams that need ongoing support - we work as an extension of your team.',
                detailedIncludes: ['Continuous design', 'Development', 'Strategy'],
                bestFor: 'Best for ongoing collaboration'
            }
        ]
    },
    nl: {
        sectionLabel: 'Samenwerken',
        sectionTitle: 'Manieren om samen te werken',
        sectionIntro: 'We structureren ons werk rond uitkomsten - niet alleen rond losse diensten.',
        sectionCtaLabel: 'Bekijk alle opties',
        heroTitle: "Let's work",
        heroIntro: 'Of je nu vanaf nul start of wilt doorgroeien op wat al werkt, we structureren onze samenwerking rond duidelijke uitkomsten.',
        heroPrimaryCta: 'Start een project',
        heroSecondaryCta: 'Neem contact op',
        packagesTitle: 'Packages',
        packagesIntro: 'Drie duidelijke manieren om met ons samen te werken, afhankelijk van je fase, tempo en gewenste betrokkenheid.',
        packageCtaLabel: 'Start dit package',
        comparisonTitle: 'Beste match',
        flexibleTitle: 'Iets specifieks nodig?',
        flexibleIntro: 'Zoek je een kleinere scope - zoals een logo, website of specifieke service - dan kunnen we daar ook mee helpen.',
        flexiblePrimaryCta: 'Bekijk diensten',
        flexibleSecondaryCta: 'Vraag een offerte aan',
        finalTitle: 'Laten we iets bouwen dat werkt',
        finalIntro: 'Begin met een simpel gesprek - samen bepalen we de rest.',
        finalCta: 'Start je project',
        unsureText: 'Twijfel je waar je moet beginnen?',
        packages: [
            {
                slug: 'startup',
                step: '01',
                title: 'Startup',
                headline: 'Van idee naar iets echts',
                description: 'Voor ideeën in een vroeg stadium - we helpen je om je product vorm te geven, te bouwen en te lanceren.',
                includes: 'Brand, product en launch support',
                longDescription: 'Voor founders en teams die vanaf nul beginnen - we brengen je van idee naar een product dat klaar is voor lancering.',
                detailedIncludes: ['Brand', 'Product (website of app)', 'Launch support'],
                note: 'Typische doorlooptijd: 4-8 weken',
                bestFor: 'Beste voor nieuwe ideeën'
            },
            {
                slug: 'scale',
                step: '02',
                title: 'Scale',
                headline: 'Laat groeien wat al werkt',
                description: 'Voor bedrijven met tractie - we verfijnen, optimaliseren en schalen je product en groei.',
                includes: 'Product, marketing en optimalisatie',
                longDescription: 'Voor bedrijven met tractie - we verbeteren, optimaliseren en laten groeien wat al werkt.',
                detailedIncludes: ['Productverbeteringen', 'Marketing', 'Optimalisatie'],
                bestFor: 'Beste voor groeiende bedrijven'
            },
            {
                slug: 'partner',
                step: '03',
                title: 'Partner',
                headline: 'Een team dat met je meebouwt',
                description: 'Voor doorlopende ondersteuning - we werken als verlengstuk van je team op product, merk en groei.',
                includes: 'Doorlopende design, development en strategie',
                longDescription: 'Voor teams die structurele ondersteuning nodig hebben - we werken als verlengstuk van je team.',
                detailedIncludes: ['Doorlopende design', 'Development', 'Strategie'],
                bestFor: 'Beste voor langdurige samenwerking'
            }
        ]
    },
    th: {
        sectionLabel: 'ร่วมงานกับเรา',
        sectionTitle: 'รูปแบบการร่วมงาน',
        sectionIntro: 'เราออกแบบการทำงานจากผลลัพธ์ที่ต้องการ - ไม่ใช่แค่แยกตามบริการทีละชิ้น',
        sectionCtaLabel: 'ดูตัวเลือกทั้งหมด',
        heroTitle: "Let's work",
        heroIntro: 'ไม่ว่าคุณจะเริ่มจากศูนย์หรือกำลังขยายสิ่งที่เวิร์กอยู่แล้ว เราจะวางรูปแบบการทำงานจากผลลัพธ์ที่ชัดเจน.',
        heroPrimaryCta: 'เริ่มโปรเจกต์',
        heroSecondaryCta: 'ติดต่อเรา',
        packagesTitle: 'Packages',
        packagesIntro: '3 รูปแบบการร่วมงานที่ชัดเจน ตามช่วงของธุรกิจ จังหวะการทำงาน และระดับการซัพพอร์ตที่คุณต้องการ.',
        packageCtaLabel: 'เริ่มแพ็กเกจนี้',
        comparisonTitle: 'เหมาะกับใคร',
        flexibleTitle: 'ต้องการอะไรที่เฉพาะเจาะจงกว่านี้?',
        flexibleIntro: 'ถ้าคุณกำลังมองหางานขอบเขตเล็กกว่า - เช่น โลโก้ เว็บไซต์ หรือบริการเฉพาะทาง - เราก็ช่วยได้เช่นกัน.',
        flexiblePrimaryCta: 'ดูบริการ',
        flexibleSecondaryCta: 'ขอใบเสนอราคา',
        finalTitle: 'มาสร้างบางอย่างที่ใช้งานได้จริง',
        finalIntro: 'เริ่มจากบทสนทนาง่าย ๆ ก่อน แล้วเราจะช่วยวางส่วนที่เหลือให้.',
        finalCta: 'เริ่มโปรเจกต์ของคุณ',
        unsureText: 'ยังไม่แน่ใจว่าจะเริ่มตรงไหน?',
        packages: [
            {
                slug: 'startup',
                step: '01',
                title: 'Startup',
                headline: 'เปลี่ยนไอเดียให้เป็นของจริง',
                description: 'สำหรับไอเดียระยะเริ่มต้น - เราช่วยคุณวางรูปแบบ สร้าง และเปิดตัวโปรดักต์.',
                includes: 'Brand, product และ launch support',
                longDescription: 'สำหรับผู้ก่อตั้งและทีมที่เริ่มจากศูนย์ - เราพาคุณจากไอเดียไปสู่โปรดักต์ที่พร้อมเปิดตัว.',
                detailedIncludes: ['Brand', 'Product (เว็บไซต์หรือแอป)', 'Launch support'],
                note: 'ระยะเวลาโดยทั่วไป: 4-8 สัปดาห์',
                bestFor: 'เหมาะกับไอเดียใหม่'
            },
            {
                slug: 'scale',
                step: '02',
                title: 'Scale',
                headline: 'ขยายสิ่งที่กำลังเวิร์กอยู่แล้ว',
                description: 'สำหรับธุรกิจที่มี traction แล้ว - เราช่วยปรับ ปรับปรุง และขยายทั้งโปรดักต์และการเติบโต.',
                includes: 'Product, marketing และ optimization',
                longDescription: 'สำหรับธุรกิจที่มี traction แล้ว - เราปรับ ปรับปรุง และขยายสิ่งที่กำลังเวิร์กอยู่แล้ว.',
                detailedIncludes: ['การปรับปรุงโปรดักต์', 'Marketing', 'Optimization'],
                bestFor: 'เหมาะกับธุรกิจที่กำลังเติบโต'
            },
            {
                slug: 'partner',
                step: '03',
                title: 'Partner',
                headline: 'ทีมที่ช่วยสร้างไปพร้อมกับคุณ',
                description: 'สำหรับการซัพพอร์ตต่อเนื่อง - เราทำงานเป็นส่วนขยายของทีมคุณในด้าน product, brand และ growth.',
                includes: 'Design, development และ strategy แบบต่อเนื่อง',
                longDescription: 'สำหรับทีมที่ต้องการการซัพพอร์ตระยะยาว - เราทำงานเป็นส่วนขยายของทีมคุณ.',
                detailedIncludes: ['Design ต่อเนื่อง', 'Development', 'Strategy'],
                bestFor: 'เหมาะกับการร่วมงานระยะยาว'
            }
        ]
    }
};

export const getWorkWithUsContent = (locale: Locale) => workWithUsContent[locale];
