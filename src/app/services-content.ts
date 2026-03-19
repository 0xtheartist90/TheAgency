import type { Locale } from '@/app/site-content';

export const serviceSlugs = ['build', 'grow', 'brand', 'automate', 'train'] as const;

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
            slug: 'build',
            title: 'Build',
            eyebrow: 'Services',
            intro: 'Websites, apps, and platforms designed, developed, and built to perform in the real world.',
            includeTitle: 'What’s included',
            includes: ['Websites', 'Apps', 'Platforms', 'Product design', 'Frontend build'],
            bestForTitle: 'Best for',
            bestFor: 'Teams that need to turn an idea, redesign, or product direction into something launch-ready.',
            outcomeTitle: 'What it does',
            outcome: 'It gives the business a sharper digital product that feels premium, works cleanly, and is ready to ship.',
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
            slug: 'automate',
            title: 'Automate',
            eyebrow: 'Services',
            intro: 'AI, workflows, and internal systems that reduce manual work and make your operations more efficient.',
            includeTitle: 'What’s included',
            includes: ['Workflow automation', 'AI integrations', 'Internal tools', 'CRM setup', 'Operational systems'],
            bestForTitle: 'Best for',
            bestFor: 'Businesses that are growing fast and need the backend to become cleaner, leaner, and easier to run.',
            outcomeTitle: 'What it does',
            outcome: 'It removes friction inside the business so the team can move faster without adding process overhead.',
            ctaLabel: 'Start an automation project'
        },
        {
            slug: 'train',
            title: 'Train',
            eyebrow: 'Services',
            intro: 'Agile, Scrum, and AI training that helps teams adopt better workflows and work faster with confidence.',
            includeTitle: 'What’s included',
            includes: ['Agile coaching', 'Scrum support', 'AI adoption', 'Workflow training', 'Team enablement'],
            bestForTitle: 'Best for',
            bestFor: 'Teams that need better ways of working, stronger delivery habits, and more confidence using new tools.',
            outcomeTitle: 'What it does',
            outcome: 'It upgrades how the team operates so work moves with more clarity, speed, and accountability.',
            ctaLabel: 'Start a training project'
        }
    ],
    nl: [
        {
            slug: 'build',
            title: 'Build',
            eyebrow: 'Diensten',
            intro: 'Websites, apps en platforms die ontworpen, ontwikkeld en gebouwd zijn om in de echte wereld te presteren.',
            includeTitle: 'Wat zit erin',
            includes: ['Websites', 'Apps', 'Platforms', 'Product design', 'Frontend build'],
            bestForTitle: 'Beste voor',
            bestFor: 'Teams die een idee, redesign of productrichting willen omzetten naar iets dat klaar is voor launch.',
            outcomeTitle: 'Wat het oplevert',
            outcome: 'Het geeft het bedrijf een scherper digitaal product dat premium voelt, strak werkt en klaar is om live te gaan.',
            ctaLabel: 'Start een build project'
        },
        {
            slug: 'grow',
            title: 'Grow',
            eyebrow: 'Diensten',
            intro: 'Marketing, ads en content gericht op meer verkeer, betere conversie en schaalbare resultaten.',
            includeTitle: 'Wat zit erin',
            includes: ['Paid media', 'Contentsystemen', 'Campagneplanning', 'Conversiedenken', 'Growth reporting'],
            bestForTitle: 'Beste voor',
            bestFor: 'Merken met tractie die een scherper groeisysteem en betere performance support nodig hebben.',
            outcomeTitle: 'Wat het oplevert',
            outcome: 'Het maakt van aandacht een meetbaarder groeisysteem met duidelijkere campagnes en strakkere optimalisatie.',
            ctaLabel: 'Start een growth project'
        },
        {
            slug: 'brand',
            title: 'Brand',
            eyebrow: 'Diensten',
            intro: 'Brand identities en systemen, van logo tot positionering, gebouwd om helder, consistent en memorabel te zijn.',
            includeTitle: 'Wat zit erin',
            includes: ['Identity systems', 'Positionering', 'Messaging direction', 'Visuele taal', 'Brand guidelines'],
            bestForTitle: 'Beste voor',
            bestFor: 'Founders en teams die hun merk doelbewuster, premiumer en betrouwbaarder willen laten voelen.',
            outcomeTitle: 'Wat het oplevert',
            outcome: 'Het creëert een merksysteem dat coherent oogt, helder communiceert en over elk touchpoint kan meegroeien.',
            ctaLabel: 'Start een brand project'
        },
        {
            slug: 'automate',
            title: 'Automate',
            eyebrow: 'Diensten',
            intro: 'AI, workflows en interne systemen die handmatig werk verminderen en operations efficiënter maken.',
            includeTitle: 'Wat zit erin',
            includes: ['Workflow automation', 'AI-integraties', 'Interne tools', 'CRM setup', 'Operationele systemen'],
            bestForTitle: 'Beste voor',
            bestFor: 'Bedrijven die snel groeien en hun backend schoner, lichter en makkelijker te runnen willen maken.',
            outcomeTitle: 'Wat het oplevert',
            outcome: 'Het haalt frictie uit de business zodat het team sneller kan bewegen zonder extra proceslast.',
            ctaLabel: 'Start een automation project'
        },
        {
            slug: 'train',
            title: 'Train',
            eyebrow: 'Diensten',
            intro: 'Agile, Scrum en AI-training die teams helpt om betere workflows te adopteren en met meer vertrouwen sneller te werken.',
            includeTitle: 'Wat zit erin',
            includes: ['Agile coaching', 'Scrum support', 'AI-adoptie', 'Workflow training', 'Team enablement'],
            bestForTitle: 'Beste voor',
            bestFor: 'Teams die beter willen samenwerken, sterker willen leveren en nieuwe tools met meer vertrouwen willen gebruiken.',
            outcomeTitle: 'Wat het oplevert',
            outcome: 'Het tilt de manier van werken omhoog zodat delivery meer helderheid, snelheid en eigenaarschap krijgt.',
            ctaLabel: 'Start een training project'
        }
    ],
    th: [
        {
            slug: 'build',
            title: 'Build',
            eyebrow: 'บริการ',
            intro: 'เว็บไซต์ แอป และแพลตฟอร์มที่ออกแบบ พัฒนา และสร้างมาเพื่อให้ใช้งานได้จริงในโลกธุรกิจ.',
            includeTitle: 'สิ่งที่รวมอยู่',
            includes: ['เว็บไซต์', 'แอป', 'แพลตฟอร์ม', 'Product design', 'Frontend build'],
            bestForTitle: 'เหมาะสำหรับ',
            bestFor: 'ทีมที่ต้องการเปลี่ยนไอเดีย รีดีไซน์ หรือทิศทางโปรดักต์ให้กลายเป็นสิ่งที่พร้อมเปิดตัว.',
            outcomeTitle: 'ผลลัพธ์',
            outcome: 'ช่วยให้ธุรกิจมีโปรดักต์ดิจิทัลที่คมขึ้น ดูพรีเมียม ทำงานลื่น และพร้อมปล่อยใช้งานจริง.',
            ctaLabel: 'เริ่มโปรเจกต์ Build'
        },
        {
            slug: 'grow',
            title: 'Grow',
            eyebrow: 'บริการ',
            intro: 'การตลาด โฆษณา และคอนเทนต์ที่เน้นการเพิ่มทราฟฟิก ปรับ conversion และขยายผลลัพธ์.',
            includeTitle: 'สิ่งที่รวมอยู่',
            includes: ['Paid media', 'ระบบคอนเทนต์', 'วางแผนแคมเปญ', 'Conversion thinking', 'รายงานการเติบโต'],
            bestForTitle: 'เหมาะสำหรับ',
            bestFor: 'แบรนด์ที่เริ่มมี traction และต้องการระบบ growth ที่คมขึ้นและวัดผลได้มากขึ้น.',
            outcomeTitle: 'ผลลัพธ์',
            outcome: 'เปลี่ยนความสนใจให้กลายเป็นระบบเติบโตที่วัดผลได้ชัดขึ้น ด้วยแคมเปญและการ optimize ที่แน่นขึ้น.',
            ctaLabel: 'เริ่มโปรเจกต์ Grow'
        },
        {
            slug: 'brand',
            title: 'Brand',
            eyebrow: 'บริการ',
            intro: 'อัตลักษณ์และระบบแบรนด์ ตั้งแต่โลโก้จนถึง positioning ที่ชัดเจน สม่ำเสมอ และน่าจดจำ.',
            includeTitle: 'สิ่งที่รวมอยู่',
            includes: ['Identity systems', 'Positioning', 'Messaging direction', 'ภาษาภาพลักษณ์', 'Brand guidelines'],
            bestForTitle: 'เหมาะสำหรับ',
            bestFor: 'ผู้ก่อตั้งและทีมที่ต้องการให้แบรนด์ดูตั้งใจมากขึ้น ดูพรีเมียมขึ้น และน่าเชื่อถือขึ้น.',
            outcomeTitle: 'ผลลัพธ์',
            outcome: 'สร้างระบบแบรนด์ที่ดูเป็นหนึ่งเดียว สื่อสารชัด และขยายต่อได้ในทุก touchpoint.',
            ctaLabel: 'เริ่มโปรเจกต์ Brand'
        },
        {
            slug: 'automate',
            title: 'Automate',
            eyebrow: 'บริการ',
            intro: 'AI, workflow และระบบภายในที่ช่วยลดงาน manual และทำให้การดำเนินงานมีประสิทธิภาพมากขึ้น.',
            includeTitle: 'สิ่งที่รวมอยู่',
            includes: ['Workflow automation', 'AI integrations', 'เครื่องมือภายใน', 'ตั้งค่า CRM', 'ระบบปฏิบัติการภายใน'],
            bestForTitle: 'เหมาะสำหรับ',
            bestFor: 'ธุรกิจที่กำลังโตเร็วและต้องการให้ระบบหลังบ้านสะอาดขึ้น เบาขึ้น และดูแลง่ายขึ้น.',
            outcomeTitle: 'ผลลัพธ์',
            outcome: 'ลดแรงเสียดทานในธุรกิจเพื่อให้ทีมเดินหน้าได้เร็วขึ้นโดยไม่ต้องเพิ่มความซับซ้อนของกระบวนการ.',
            ctaLabel: 'เริ่มโปรเจกต์ Automate'
        },
        {
            slug: 'train',
            title: 'Train',
            eyebrow: 'บริการ',
            intro: 'การฝึกอบรม Agile, Scrum และ AI ที่ช่วยให้ทีมทำงานด้วย workflow ที่ดีขึ้นและมั่นใจมากขึ้น.',
            includeTitle: 'สิ่งที่รวมอยู่',
            includes: ['Agile coaching', 'Scrum support', 'การใช้ AI', 'Workflow training', 'Team enablement'],
            bestForTitle: 'เหมาะสำหรับ',
            bestFor: 'ทีมที่ต้องการวิธีการทำงานที่ดีขึ้น ส่งมอบงานได้แข็งแรงขึ้น และใช้เครื่องมือใหม่ได้อย่างมั่นใจ.',
            outcomeTitle: 'ผลลัพธ์',
            outcome: 'ยกระดับวิธีการทำงานของทีมให้มีความชัดเจน ความเร็ว และความรับผิดชอบมากขึ้น.',
            ctaLabel: 'เริ่มโปรเจกต์ Train'
        }
    ]
};

export const getServiceCollection = (locale: Locale) => servicesContent[locale] ?? servicesContent.en;

export const getServiceBySlug = (locale: Locale, slug: string) =>
    getServiceCollection(locale).find((service) => service.slug === slug);
