import type { Locale } from '@/app/site-content';

export const serviceSlugs = ['brand', 'build', 'grow'] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

type ServiceEntry = {
    slug: ServiceSlug;
    title: string;
    eyebrow: string;
    intro: string;
    includeTitle: string;
    includes: string[];
    bestForTitle: string;
    bestFor: string;
    outcomeTitle: string;
    outcome: string;
    ctaLabel: string;
};

const servicesContent: Record<Locale, ServiceEntry[]> = {
    en: [
        {
            slug: 'brand',
            title: 'Brand',
            eyebrow: 'Services',
            intro: 'Brand identities and systems, from logo to positioning, built to be clear, consistent, and memorable.',
            includeTitle: 'What’s included',
            includes: ['Identity systems', 'Positioning', 'Messaging direction', 'Visual language', 'Brand guidelines'],
            bestForTitle: 'Best for',
            bestFor: 'Founders and teams that need the brand to feel more intentional, more premium, and easier to trust.',
            outcomeTitle: 'What it does',
            outcome: 'It creates a brand system that looks coherent, communicates clearly, and scales across every touchpoint.',
            ctaLabel: 'Start a brand project'
        },
        {
            slug: 'build',
            title: 'Build',
            eyebrow: 'Services',
            intro: 'Websites, apps, internal tools, and AI-supported systems designed and built to perform in the real world.',
            includeTitle: 'What’s included',
            includes: ['Websites', 'Apps', 'Internal tools', 'AI workflows', 'AI agents'],
            bestForTitle: 'Best for',
            bestFor: 'Teams that need to turn an idea, redesign, or product direction into something launch-ready.',
            outcomeTitle: 'What it does',
            outcome: 'It gives the business a sharper digital system that feels premium, works cleanly, and is ready to ship.',
            ctaLabel: 'Start a build project'
        },
        {
            slug: 'grow',
            title: 'Grow',
            eyebrow: 'Services',
            intro: 'Marketing, ads, and content focused on driving traffic, improving conversion, and scaling results.',
            includeTitle: 'What’s included',
            includes: ['Paid media', 'Content systems', 'Campaign planning', 'Conversion thinking', 'Growth reporting'],
            bestForTitle: 'Best for',
            bestFor: 'Brands with traction that need cleaner growth systems and sharper performance support.',
            outcomeTitle: 'What it does',
            outcome: 'It turns attention into a more measurable growth engine with clearer campaigns and tighter optimization.',
            ctaLabel: 'Start a growth project'
        },
    ],
    nl: [
        {
            slug: 'brand',
            title: 'Brand',
            eyebrow: 'Diensten',
            intro: 'Brand identities en systemen, van logo tot positionering, gebouwd om helder, consistent en memorabel te zijn.',
            includeTitle: 'Wat zit erin',
            includes: ['Identiteitssystemen', 'Positionering', 'Boodschapsrichting', 'Visuele taal', 'Merkrichtlijnen'],
            bestForTitle: 'Beste voor',
            bestFor: 'Founders en teams die hun merk doelbewuster, premiumer en betrouwbaarder willen laten voelen.',
            outcomeTitle: 'Wat het oplevert',
            outcome: 'Het creëert een merksysteem dat coherent oogt, helder communiceert en over elk touchpoint kan meegroeien.',
            ctaLabel: 'Start een Brand-project'
        },
        {
            slug: 'build',
            title: 'Build',
            eyebrow: 'Diensten',
            intro: 'Websites, apps, interne tools en AI-ondersteunde systemen die ontworpen en gebouwd zijn om in de echte wereld te presteren.',
            includeTitle: 'Wat zit erin',
            includes: ['Websites', 'Apps', 'Interne tools', 'AI-workflows', 'AI-agents'],
            bestForTitle: 'Beste voor',
            bestFor: 'Teams die een idee, redesign of productrichting willen omzetten naar iets dat klaar is voor launch.',
            outcomeTitle: 'Wat het oplevert',
            outcome: 'Het geeft het bedrijf een scherper digitaal systeem dat premium voelt, strak werkt en klaar is om live te gaan.',
            ctaLabel: 'Start een Build-project'
        },
        {
            slug: 'grow',
            title: 'Grow',
            eyebrow: 'Diensten',
            intro: 'Marketing, ads en content gericht op meer verkeer, betere conversie en schaalbare resultaten.',
            includeTitle: 'Wat zit erin',
            includes: ['Paid media', 'Contentsystemen', 'Campagneplanning', 'Conversiedenken', 'Groeirapportage'],
            bestForTitle: 'Beste voor',
            bestFor: 'Merken met tractie die een scherper groeisysteem en betere performance support nodig hebben.',
            outcomeTitle: 'Wat het oplevert',
            outcome: 'Het maakt van aandacht een meetbaarder groeisysteem met duidelijkere campagnes en strakkere optimalisatie.',
            ctaLabel: 'Start een Grow-project'
        },
    ],
    th: [
        {
            slug: 'brand',
            title: 'Brand',
            eyebrow: 'บริการ',
            intro: 'อัตลักษณ์และระบบแบรนด์ ตั้งแต่โลโก้จนถึง positioning ที่ชัดเจน สม่ำเสมอ และน่าจดจำ.',
            includeTitle: 'สิ่งที่รวมอยู่',
            includes: ['ระบบอัตลักษณ์', 'การวางตำแหน่ง', 'ทิศทางการสื่อสาร', 'ภาษาภาพลักษณ์', 'คู่มือแบรนด์'],
            bestForTitle: 'เหมาะสำหรับ',
            bestFor: 'ผู้ก่อตั้งและทีมที่ต้องการให้แบรนด์ดูตั้งใจมากขึ้น ดูพรีเมียมขึ้น และน่าเชื่อถือขึ้น.',
            outcomeTitle: 'ผลลัพธ์',
            outcome: 'สร้างระบบแบรนด์ที่ดูเป็นหนึ่งเดียว สื่อสารชัด และขยายต่อได้ในทุก touchpoint.',
            ctaLabel: 'เริ่มโปรเจกต์ Brand'
        },
        {
            slug: 'build',
            title: 'Build',
            eyebrow: 'บริการ',
            intro: 'เว็บไซต์ แอป ระบบภายใน และระบบที่มี AI ช่วย ซึ่งออกแบบและสร้างมาเพื่อให้ใช้งานได้จริงในโลกธุรกิจ.',
            includeTitle: 'สิ่งที่รวมอยู่',
            includes: ['เว็บไซต์', 'แอป', 'ระบบภายใน', 'AI workflows', 'AI agents'],
            bestForTitle: 'เหมาะสำหรับ',
            bestFor: 'ทีมที่ต้องการเปลี่ยนไอเดีย รีดีไซน์ หรือทิศทางโปรดักต์ให้กลายเป็นสิ่งที่พร้อมเปิดตัว.',
            outcomeTitle: 'ผลลัพธ์',
            outcome: 'ช่วยให้ธุรกิจมีระบบดิจิทัลที่คมขึ้น ดูพรีเมียม ทำงานลื่น และพร้อมปล่อยใช้งานจริง.',
            ctaLabel: 'เริ่มโปรเจกต์ Build'
        },
        {
            slug: 'grow',
            title: 'Grow',
            eyebrow: 'บริการ',
            intro: 'การตลาด โฆษณา และคอนเทนต์ที่เน้นการเพิ่มทราฟฟิก ปรับ conversion และขยายผลลัพธ์.',
            includeTitle: 'สิ่งที่รวมอยู่',
            includes: ['สื่อแบบชำระเงิน', 'ระบบคอนเทนต์', 'วางแผนแคมเปญ', 'แนวคิดด้านคอนเวอร์ชัน', 'รายงานการเติบโต'],
            bestForTitle: 'เหมาะสำหรับ',
            bestFor: 'แบรนด์ที่เริ่มมี traction และต้องการระบบ growth ที่คมขึ้นและวัดผลได้มากขึ้น.',
            outcomeTitle: 'ผลลัพธ์',
            outcome: 'เปลี่ยนความสนใจให้กลายเป็นระบบเติบโตที่วัดผลได้ชัดขึ้น ด้วยแคมเปญและการ optimize ที่แน่นขึ้น.',
            ctaLabel: 'เริ่มโปรเจกต์ Grow'
        },
    ]
};

export const getServiceCollection = (locale: Locale) => servicesContent[locale] ?? servicesContent.en;

export const getServiceBySlug = (locale: Locale, slug: string) =>
    getServiceCollection(locale).find((service) => service.slug === slug);
