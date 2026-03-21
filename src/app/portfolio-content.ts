import type { Locale } from '@/app/site-content';

type LocalizedPortfolioFields = {
    summary: string;
    tags: readonly string[];
    intro: string;
    overview: string;
    deliverables: readonly string[];
    visualAlt?: string;
    listVisualAlt?: string;
};

type PortfolioProjectEntry = {
    slug: string;
    number: string;
    category: string;
    title: string;
    visual?: string;
    visualContain?: boolean;
    listVisual?: string;
    listVisualContain?: boolean;
    badgeColor?: string;
    badgeTextColor?: string;
    content: Record<Locale, LocalizedPortfolioFields>;
};

export type PortfolioProject = Omit<PortfolioProjectEntry, 'content'> & LocalizedPortfolioFields;

const portfolioProjectEntries: readonly PortfolioProjectEntry[] = [
    {
        slug: 'birdiez',
        number: '01',
        category: 'Brand',
        title: 'Birdiez',
        visual: '/images/Portfolio/birdiez logo.png',
        visualContain: true,
        listVisual: '/images/Portfolio/birdiez portfolio.png',
        listVisualContain: false,
        badgeColor: '#FF6D18',
        badgeTextColor: '#FFFFFF',
        content: {
            en: {
                summary: 'Luxury identity system and launch-ready brand rollout.',
                tags: ['Identity', 'Packaging', 'Launch assets'],
                intro: 'A brand-led project shaped to feel clean, memorable, and ready for launch.',
                overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
                deliverables: ['Brand identity', 'Packaging direction', 'Launch-ready assets'],
                visualAlt: 'Birdiez logo',
                listVisualAlt: 'Birdiez portfolio visual'
            },
            nl: {
                summary: 'Luxe identiteitssysteem en merkuitrol klaar voor lancering.',
                tags: ['Identiteit', 'Packaging', 'Launch-assets'],
                intro: 'Een merkgedreven project dat schoon, memorabel en klaar voor lancering moest voelen.',
                overview: 'Deze pagina staat klaar als compacte case study, met ruimte voor definitieve visuals, projectverhaal en uitkomstdetails.',
                deliverables: ['Merkidentiteit', 'Packaging-richting', 'Assets voor lancering'],
                visualAlt: 'Birdiez logo',
                listVisualAlt: 'Birdiez portfoliovisual'
            },
            th: {
                summary: 'ระบบ identity ระดับพรีเมียมและ rollout ของแบรนด์ที่พร้อมเปิดตัว.',
                tags: ['อัตลักษณ์', 'Packaging', 'Launch assets'],
                intro: 'โปรเจกต์ฝั่งแบรนด์ที่ถูกออกแบบให้ดูสะอาด จดจำง่าย และพร้อมสำหรับการเปิดตัว.',
                overview: 'หน้านี้ถูกจัดไว้เป็นเคสสตัดีแบบกะทัดรัด พร้อมเติมภาพจริง เรื่องราวของโปรเจกต์ และผลลัพธ์เพิ่มเติมได้ภายหลัง.',
                deliverables: ['อัตลักษณ์แบรนด์', 'ทิศทาง Packaging', 'Assets พร้อมเปิดตัว'],
                visualAlt: 'โลโก้ Birdiez',
                listVisualAlt: 'ภาพพอร์ตโฟลิโอ Birdiez'
            }
        }
    },
    {
        slug: 'fanflow',
        number: '02',
        category: 'Build',
        title: 'Fanflow',
        visual: '/images/Portfolio/Fanflow logo.png',
        visualContain: true,
        listVisual: '/images/Portfolio/Fanflow portfolio.png',
        listVisualContain: false,
        badgeColor: '#7C5CFF',
        badgeTextColor: '#FFF7FF',
        content: {
            en: {
                summary: 'Premium website concept for a service-led business.',
                tags: ['Web design', 'Development', 'Content system'],
                intro: 'A product and website build focused on clarity, experience, and clean rollout.',
                overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
                deliverables: ['Website design', 'Development', 'Content structure'],
                visualAlt: 'Fanflow logo',
                listVisualAlt: 'Fanflow portfolio visual'
            },
            nl: {
                summary: 'Premium websiteconcept voor een servicegedreven business.',
                tags: ['Webdesign', 'Development', 'Contentsysteem'],
                intro: 'Een product- en websitebuild gericht op helderheid, ervaring en een strakke uitrol.',
                overview: 'Deze pagina staat klaar als compacte case study, met ruimte voor definitieve visuals, projectverhaal en uitkomstdetails.',
                deliverables: ['Websiteontwerp', 'Development', 'Contentstructuur'],
                visualAlt: 'Fanflow logo',
                listVisualAlt: 'Fanflow portfoliovisual'
            },
            th: {
                summary: 'คอนเซปต์เว็บไซต์ระดับพรีเมียมสำหรับธุรกิจที่ขับเคลื่อนด้วยบริการ.',
                tags: ['Web design', 'Development', 'ระบบคอนเทนต์'],
                intro: 'งานสร้างโปรดักต์และเว็บไซต์ที่โฟกัสความชัดเจน ประสบการณ์ และ rollout ที่สะอาด.',
                overview: 'หน้านี้ถูกจัดไว้เป็นเคสสตัดีแบบกะทัดรัด พร้อมเติมภาพจริง เรื่องราวของโปรเจกต์ และผลลัพธ์เพิ่มเติมได้ภายหลัง.',
                deliverables: ['การออกแบบเว็บไซต์', 'Development', 'โครงสร้างคอนเทนต์'],
                visualAlt: 'โลโก้ Fanflow',
                listVisualAlt: 'ภาพพอร์ตโฟลิโอ Fanflow'
            }
        }
    },
    {
        slug: 'msports',
        number: '03',
        category: 'Grow',
        title: 'MSports',
        visual: '/images/Portfolio/msport logo.png',
        visualContain: true,
        listVisual: '/images/Portfolio/msport portfolio.png',
        listVisualContain: false,
        badgeColor: '#D63A3A',
        badgeTextColor: '#F6FAFF',
        content: {
            en: {
                summary: 'Paid growth campaign structure and creative direction.',
                tags: ['Meta ads', 'Google ads', 'Optimization'],
                intro: 'A growth-focused engagement built around acquisition, testing, and performance.',
                overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
                deliverables: ['Paid campaign setup', 'Creative direction', 'Reporting structure'],
                visualAlt: 'MSports logo',
                listVisualAlt: 'MSports portfolio visual'
            },
            nl: {
                summary: 'Paid growth-campagnestructuur en creatieve richting.',
                tags: ['Meta ads', 'Google ads', 'Optimalisatie'],
                intro: 'Een Grow-project gebouwd rond acquisitie, testing en performance.',
                overview: 'Deze pagina staat klaar als compacte case study, met ruimte voor definitieve visuals, projectverhaal en uitkomstdetails.',
                deliverables: ['Paid-campagneopzet', 'Creatieve richting', 'Rapportagestructuur'],
                visualAlt: 'MSports logo',
                listVisualAlt: 'MSports portfoliovisual'
            },
            th: {
                summary: 'โครงสร้างแคมเปญ paid growth และทิศทางครีเอทีฟ.',
                tags: ['Meta ads', 'Google ads', 'การปรับผลลัพธ์'],
                intro: 'งานด้าน growth ที่สร้างขึ้นบนการหาลูกค้า การทดสอบ และ performance.',
                overview: 'หน้านี้ถูกจัดไว้เป็นเคสสตัดีแบบกะทัดรัด พร้อมเติมภาพจริง เรื่องราวของโปรเจกต์ และผลลัพธ์เพิ่มเติมได้ภายหลัง.',
                deliverables: ['การตั้งค่าแคมเปญแบบชำระเงิน', 'ทิศทางครีเอทีฟ', 'โครงสร้างรายงาน'],
                visualAlt: 'โลโก้ MSports',
                listVisualAlt: 'ภาพพอร์ตโฟลิโอ MSports'
            }
        }
    },
    {
        slug: 'amplify',
        number: '04',
        category: 'Automate',
        title: 'Amplify',
        visual: '/images/Portfolio/amplify logo.png',
        visualContain: true,
        listVisual: '/images/Portfolio/amplify portfolio.png',
        listVisualContain: false,
        badgeColor: '#F26A2E',
        badgeTextColor: '#FFF8F4',
        content: {
            en: {
                summary: 'Internal workflow automation for a faster client operation.',
                tags: ['Automation', 'CRM', 'AI workflow'],
                intro: 'An automation project designed to reduce friction and improve day-to-day execution.',
                overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
                deliverables: ['Workflow logic', 'System setup', 'Internal automation'],
                visualAlt: 'Amplify logo',
                listVisualAlt: 'Amplify portfolio visual'
            },
            nl: {
                summary: 'Interne workflow-automatisering voor een snellere klantoperatie.',
                tags: ['Automatisering', 'CRM', 'AI-workflow'],
                intro: 'Een Automate-project ontworpen om frictie te verlagen en dagelijkse uitvoering te verbeteren.',
                overview: 'Deze pagina staat klaar als compacte case study, met ruimte voor definitieve visuals, projectverhaal en uitkomstdetails.',
                deliverables: ['Workflowlogica', 'Systeeminrichting', 'Interne automatisering'],
                visualAlt: 'Amplify logo',
                listVisualAlt: 'Amplify portfoliovisual'
            },
            th: {
                summary: 'ระบบ automation ภายในเพื่อให้การทำงานกับลูกค้าเร็วขึ้น.',
                tags: ['Automation', 'CRM', 'AI workflow'],
                intro: 'โปรเจกต์ automation ที่ออกแบบมาเพื่อลดแรงเสียดทานและทำให้การลงมือทำในแต่ละวันดีขึ้น.',
                overview: 'หน้านี้ถูกจัดไว้เป็นเคสสตัดีแบบกะทัดรัด พร้อมเติมภาพจริง เรื่องราวของโปรเจกต์ และผลลัพธ์เพิ่มเติมได้ภายหลัง.',
                deliverables: ['ตรรกะของเวิร์กโฟลว์', 'การตั้งค่าระบบ', 'Automation ภายใน'],
                visualAlt: 'โลโก้ Amplify',
                listVisualAlt: 'ภาพพอร์ตโฟลิโอ Amplify'
            }
        }
    },
    {
        slug: 'prysmic',
        number: '05',
        category: 'Brand',
        title: 'Prysmic',
        visual: '/images/Portfolio/prysmic logo.png',
        visualContain: true,
        listVisual: '/images/Portfolio/prysmic portfolio.png',
        listVisualContain: false,
        badgeColor: '#5F4BAF',
        badgeTextColor: '#F5F1FF',
        content: {
            en: {
                summary: 'Rebrand concept for a modern hospitality-led business.',
                tags: ['Rebrand', 'Positioning', 'Visual system'],
                intro: 'A sharper brand direction built to elevate perception and create consistency.',
                overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
                deliverables: ['Rebrand direction', 'Positioning', 'Visual identity'],
                visualAlt: 'Prysmic logo',
                listVisualAlt: 'Prysmic portfolio visual'
            },
            nl: {
                summary: 'Rebrandconcept voor een moderne hospitalitygedreven business.',
                tags: ['Rebrand', 'Positionering', 'Visueel systeem'],
                intro: 'Een scherpere merkrichting om perceptie te verhogen en consistentie te creëren.',
                overview: 'Deze pagina staat klaar als compacte case study, met ruimte voor definitieve visuals, projectverhaal en uitkomstdetails.',
                deliverables: ['Rebrand-richting', 'Positionering', 'Visuele identiteit'],
                visualAlt: 'Prysmic logo',
                listVisualAlt: 'Prysmic portfoliovisual'
            },
            th: {
                summary: 'คอนเซปต์รีแบรนด์สำหรับธุรกิจ hospitality ยุคใหม่.',
                tags: ['Rebrand', 'Positioning', 'ระบบภาพลักษณ์'],
                intro: 'ทิศทางแบรนด์ที่คมขึ้น เพื่อยกระดับ perception และสร้างความสม่ำเสมอ.',
                overview: 'หน้านี้ถูกจัดไว้เป็นเคสสตัดีแบบกะทัดรัด พร้อมเติมภาพจริง เรื่องราวของโปรเจกต์ และผลลัพธ์เพิ่มเติมได้ภายหลัง.',
                deliverables: ['ทิศทางรีแบรนด์', 'Positioning', 'อัตลักษณ์ภาพลักษณ์'],
                visualAlt: 'โลโก้ Prysmic',
                listVisualAlt: 'ภาพพอร์ตโฟลิโอ Prysmic'
            }
        }
    },
    {
        slug: 'cutie-nails',
        number: '06',
        category: 'Build',
        title: 'Cutie Nails',
        visual: '/images/Portfolio/cutienails logo.png',
        visualContain: true,
        listVisual: '/images/Portfolio/cutienails portfolio.png',
        listVisualContain: false,
        badgeColor: '#E89DB6',
        badgeTextColor: '#FFFFFF',
        content: {
            en: {
                summary: 'Conversion-focused storefront and product experience.',
                tags: ['E-commerce', 'UX', 'Frontend'],
                intro: 'A digital build focused on usability, product flow, and a more premium feel.',
                overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
                deliverables: ['Storefront build', 'UX design', 'Frontend implementation'],
                visualAlt: 'Cutie Nails logo',
                listVisualAlt: 'Cutie Nails portfolio visual'
            },
            nl: {
                summary: 'Conversiegerichte storefront en productervaring.',
                tags: ['E-commerce', 'UX', 'Frontend'],
                intro: 'Een digitale build gericht op gebruiksgemak, productflow en een premiumer gevoel.',
                overview: 'Deze pagina staat klaar als compacte case study, met ruimte voor definitieve visuals, projectverhaal en uitkomstdetails.',
                deliverables: ['Storefront-build', 'UX-ontwerp', 'Frontend-implementatie'],
                visualAlt: 'Cutie Nails logo',
                listVisualAlt: 'Cutie Nails portfoliovisual'
            },
            th: {
                summary: 'storefront และ product experience ที่เน้น conversion.',
                tags: ['E-commerce', 'UX', 'Frontend'],
                intro: 'งาน build ฝั่งดิจิทัลที่โฟกัส usability, product flow และความรู้สึกที่พรีเมียมขึ้น.',
                overview: 'หน้านี้ถูกจัดไว้เป็นเคสสตัดีแบบกะทัดรัด พร้อมเติมภาพจริง เรื่องราวของโปรเจกต์ และผลลัพธ์เพิ่มเติมได้ภายหลัง.',
                deliverables: ['การสร้าง storefront', 'การออกแบบ UX', 'Frontend implementation'],
                visualAlt: 'โลโก้ Cutie Nails',
                listVisualAlt: 'ภาพพอร์ตโฟลิโอ Cutie Nails'
            }
        }
    },
    {
        slug: 'ultimate-shape',
        number: '07',
        category: 'Grow',
        title: 'Ultimate Shape',
        visual: '/images/Portfolio/ultimate shape logo.png',
        visualContain: true,
        listVisual: '/images/Portfolio/ultimate shape portfolio.png',
        listVisualContain: false,
        badgeColor: '#D63A3A',
        badgeTextColor: '#F3FFF7',
        content: {
            en: {
                summary: 'Social content and paid acquisition system for steady growth.',
                tags: ['Social', 'Paid media', 'Reporting'],
                intro: 'A growth system designed to support consistency, reach, and measurable momentum.',
                overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
                deliverables: ['Content system', 'Paid acquisition', 'Performance reporting'],
                visualAlt: 'Ultimate Shape logo',
                listVisualAlt: 'Ultimate Shape portfolio visual'
            },
            nl: {
                summary: 'Social content en paid-acquisitiesysteem voor stabiele groei.',
                tags: ['Social', 'Paid media', 'Rapportage'],
                intro: 'Een growthsysteem ontworpen om consistentie, bereik en meetbaar momentum te ondersteunen.',
                overview: 'Deze pagina staat klaar als compacte case study, met ruimte voor definitieve visuals, projectverhaal en uitkomstdetails.',
                deliverables: ['Contentsysteem', 'Paid acquisition', 'Performancerapportage'],
                visualAlt: 'Ultimate Shape logo',
                listVisualAlt: 'Ultimate Shape portfoliovisual'
            },
            th: {
                summary: 'ระบบ social content และ paid acquisition เพื่อการเติบโตอย่างสม่ำเสมอ.',
                tags: ['Social', 'Paid media', 'รายงานผล'],
                intro: 'ระบบ growth ที่ออกแบบมาเพื่อรองรับความสม่ำเสมอ การเข้าถึง และแรงส่งที่วัดผลได้.',
                overview: 'หน้านี้ถูกจัดไว้เป็นเคสสตัดีแบบกะทัดรัด พร้อมเติมภาพจริง เรื่องราวของโปรเจกต์ และผลลัพธ์เพิ่มเติมได้ภายหลัง.',
                deliverables: ['ระบบคอนเทนต์', 'Paid acquisition', 'รายงาน performance'],
                visualAlt: 'โลโก้ Ultimate Shape',
                listVisualAlt: 'ภาพพอร์ตโฟลิโอ Ultimate Shape'
            }
        }
    },
    {
        slug: '0xlabs',
        number: '08',
        category: 'Automate',
        title: '0xLabs',
        visual: '/images/Portfolio/0xlabs logo.png',
        visualContain: true,
        listVisual: '/images/Portfolio/0xlabs portfolio.png',
        listVisualContain: false,
        badgeColor: '#FF6D18',
        badgeTextColor: '#FFFFFF',
        content: {
            en: {
                summary: 'Lead routing and follow-up automations across the funnel.',
                tags: ['Lead flow', 'Integrations', 'Operations'],
                intro: 'An operations-focused project built to improve handoff, follow-up, and internal speed.',
                overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
                deliverables: ['Lead routing', 'Integrations', 'Operational systems'],
                visualAlt: '0xLabs logo',
                listVisualAlt: '0xLabs portfolio visual'
            },
            nl: {
                summary: 'Leadrouting en follow-up-automatiseringen door de hele funnel.',
                tags: ['Leadflow', 'Integraties', 'Operations'],
                intro: 'Een operationsgericht project gebouwd om handoff, follow-up en interne snelheid te verbeteren.',
                overview: 'Deze pagina staat klaar als compacte case study, met ruimte voor definitieve visuals, projectverhaal en uitkomstdetails.',
                deliverables: ['Leadrouting', 'Integraties', 'Operationele systemen'],
                visualAlt: '0xLabs logo',
                listVisualAlt: '0xLabs portfoliovisual'
            },
            th: {
                summary: 'ระบบ lead routing และ follow-up automation ตลอดทั้ง funnel.',
                tags: ['Lead flow', 'Integrations', 'Operations'],
                intro: 'โปรเจกต์ที่โฟกัสฝั่ง operations เพื่อให้ handoff, follow-up และความเร็วภายในดีขึ้น.',
                overview: 'หน้านี้ถูกจัดไว้เป็นเคสสตัดีแบบกะทัดรัด พร้อมเติมภาพจริง เรื่องราวของโปรเจกต์ และผลลัพธ์เพิ่มเติมได้ภายหลัง.',
                deliverables: ['Lead routing', 'Integrations', 'ระบบปฏิบัติการภายใน'],
                visualAlt: 'โลโก้ 0xLabs',
                listVisualAlt: 'ภาพพอร์ตโฟลิโอ 0xLabs'
            }
        }
    },
    {
        slug: 'goldenbeauty',
        number: '09',
        category: 'Brand + Build',
        title: 'GoldenBeauty',
        visual: '/images/Portfolio/goldenbeauty logo.png',
        visualContain: true,
        listVisual: '/images/Portfolio/goldenbeauty portfolio.png',
        listVisualContain: false,
        badgeColor: '#C7A24A',
        badgeTextColor: '#FFFFFF',
        content: {
            en: {
                summary: 'Full launch direction across identity, site, and assets.',
                tags: ['Brand', 'Website', 'Launch'],
                intro: 'A full-scope project combining brand direction, build, and rollout support.',
                overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
                deliverables: ['Brand direction', 'Website', 'Launch assets'],
                visualAlt: 'GoldenBeauty logo',
                listVisualAlt: 'GoldenBeauty portfolio visual'
            },
            nl: {
                summary: 'Volledige lanceringsrichting over identiteit, site en assets.',
                tags: ['Brand', 'Website', 'Launch'],
                intro: 'Een full-scope project dat merkrichting, build en rollout-support combineert.',
                overview: 'Deze pagina staat klaar als compacte case study, met ruimte voor definitieve visuals, projectverhaal en uitkomstdetails.',
                deliverables: ['Merkrichting', 'Website', 'Launch-assets'],
                visualAlt: 'GoldenBeauty logo',
                listVisualAlt: 'GoldenBeauty portfoliovisual'
            },
            th: {
                summary: 'ทิศทางการเปิดตัวแบบเต็มรูปแบบ ครอบคลุม identity, เว็บไซต์ และ assets.',
                tags: ['Brand', 'Website', 'Launch'],
                intro: 'โปรเจกต์แบบ full-scope ที่รวม brand direction, build และ rollout support เข้าด้วยกัน.',
                overview: 'หน้านี้ถูกจัดไว้เป็นเคสสตัดีแบบกะทัดรัด พร้อมเติมภาพจริง เรื่องราวของโปรเจกต์ และผลลัพธ์เพิ่มเติมได้ภายหลัง.',
                deliverables: ['ทิศทางแบรนด์', 'Website', 'Launch assets'],
                visualAlt: 'โลโก้ GoldenBeauty',
                listVisualAlt: 'ภาพพอร์ตโฟลิโอ GoldenBeauty'
            }
        }
    }
] as const;

const localizeProject = (entry: PortfolioProjectEntry, locale: Locale): PortfolioProject => ({
    slug: entry.slug,
    number: entry.number,
    category: entry.category,
    title: entry.title,
    visual: entry.visual,
    visualContain: entry.visualContain,
    listVisual: entry.listVisual,
    listVisualContain: entry.listVisualContain,
    badgeColor: entry.badgeColor,
    badgeTextColor: entry.badgeTextColor,
    ...entry.content[locale]
});

export const portfolioProjects = portfolioProjectEntries;

export const getPortfolioProjects = (locale: Locale): readonly PortfolioProject[] =>
    portfolioProjectEntries.map((entry) => localizeProject(entry, locale));

export const getPortfolioProjectBySlug = (locale: Locale, slug: string): PortfolioProject | undefined => {
    const entry = portfolioProjectEntries.find((project) => project.slug === slug);

    return entry ? localizeProject(entry, locale) : undefined;
};
