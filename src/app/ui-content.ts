import type { Locale } from '@/app/site-content';

export type UiCopy = {
    navigation: {
        home: string;
    };
    footer: {
        explore: string;
        rightsReserved: string;
        storyBody: string;
        servicesBody: string;
    };
    home: {
        meetTeam: string;
        stats: {
            projects: string;
            countries: string;
            industries: string;
            years: string;
        };
    };
    servicesShowcase: {
        explore: string;
        exploreAria: (title: string) => string;
    };
    process: {
        label: string;
        prev: string;
        next: string;
        goToPageAria: (page: number) => string;
        steps: Array<{
            number: string;
            title: string;
            line: string;
            detail: string;
            icon: string;
        }>;
    };
    portfolio: {
        pageDescription: string;
        sectionLabel: string;
        sectionIntro: string;
        imagePlaceholder: string;
        addFinalVisual: string;
        viewProject: string;
        prev: string;
        next: string;
        showPreviousProjectsAria: string;
        showNextProjectsAria: string;
        focusProjectAria: (title: string) => string;
        goToPageAria: (page: number) => string;
        caseOverview: string;
        backTo: string;
        startProject: string;
        project: string;
        number: string;
        category: string;
        deliverables: string;
    };
    serviceDetail: {
        whatWeDo: string;
        howWeWork: string;
        howWeWorkIntro: string;
        work: string;
        next: string;
        viewWork: string;
        startProject: string;
        allServiceDetails: string;
    };
    workWithUs: {
        includes: string;
        next: string;
    };
};

const uiContent: Record<Locale, UiCopy> = {
    en: {
        navigation: {
            home: 'Home'
        },
        footer: {
            explore: 'Explore',
            rightsReserved: '© 2026 The Agency. All rights reserved.',
            storyBody:
                'Small team. Sharp execution. Built for work that needs taste, momentum, and real follow-through.',
            servicesBody:
                'High-end brand systems, digital products, performance marketing, and automation for businesses ready to look and operate at a higher level.'
        },
        home: {
            meetTeam: 'Meet the team',
            stats: {
                projects: 'Projects',
                countries: 'Countries',
                industries: 'Industries',
                years: 'Years'
            }
        },
        servicesShowcase: {
            explore: 'Explore',
            exploreAria: (title) => `Explore ${title}`
        },
        process: {
            label: 'Process',
            prev: 'Prev',
            next: 'Next',
            goToPageAria: (page) => `Go to process page ${page}`,
            steps: [
                {
                    number: '01',
                    title: 'Meet & Greet',
                    line: 'A quick introduction to get to know each other, understand your goals, and see if we’re the right fit.',
                    detail: 'Intro. Fit. Goals.',
                    icon: '/images/Icons/image 31.webp'
                },
                {
                    number: '02',
                    title: 'Campfire',
                    line: 'You talk, we listen - understanding your story, your challenges, and what you’re trying to build.',
                    detail: 'Story. Context. Intent.',
                    icon: '/images/Icons/image 64.png'
                },
                {
                    number: '03',
                    title: 'Discovery',
                    line: 'We ask the right questions to fill the gaps, challenge assumptions, and define a clear direction.',
                    detail: 'Questions. Gaps. Direction.',
                    icon: '/images/Icons/image 9.webp'
                },
                {
                    number: '04',
                    title: 'Build',
                    line: 'We design and build in the open - sharing progress, gathering feedback, and refining as we go.',
                    detail: 'Open. Shared. Refined.',
                    icon: '/images/Icons/image 27.webp'
                },
                {
                    number: '05',
                    title: 'Launch',
                    line: 'We go live, measure performance, and keep improving based on real data and feedback.',
                    detail: 'Live. Measure. Improve.',
                    icon: '/images/Icons/image 11.webp'
                }
            ]
        },
        portfolio: {
            pageDescription: 'Selected work across brand, build, growth, and automation.',
            sectionLabel: 'Projects',
            sectionIntro:
                'Browse a mix of brand systems, websites, campaigns, and operational builds.',
            imagePlaceholder: 'Image placeholder',
            addFinalVisual: 'Add final project visual here',
            viewProject: 'View project',
            prev: 'Prev',
            next: 'Next',
            showPreviousProjectsAria: 'Show previous projects',
            showNextProjectsAria: 'Show next projects',
            focusProjectAria: (title) => `Focus ${title}`,
            goToPageAria: (page) => `Go to portfolio page ${page}`,
            caseOverview: 'Case overview',
            backTo: 'Back to',
            startProject: 'Start your project',
            project: 'Project',
            number: 'Number',
            category: 'Category',
            deliverables: 'Deliverables'
        },
        serviceDetail: {
            whatWeDo: 'What we do',
            howWeWork: 'How we work',
            howWeWorkIntro: 'A clear, collaborative process — with you involved at every step.',
            work: 'Work',
            next: 'Next',
            viewWork: 'View work',
            startProject: 'Start your project',
            allServiceDetails: 'All service details'
        },
        workWithUs: {
            includes: 'Includes',
            next: 'Next'
        }
    },
    nl: {
        navigation: {
            home: 'Start'
        },
        footer: {
            explore: 'Verken',
            rightsReserved: '© 2026 The Agency. Alle rechten voorbehouden.',
            storyBody:
                'Klein team. Scherpe uitvoering. Gemaakt voor werk dat smaak, vaart en echte opvolging nodig heeft.',
            servicesBody:
                'High-end brandsystemen, digitale producten, performance marketing en automation voor bedrijven die op een hoger niveau willen ogen en opereren.'
        },
        home: {
            meetTeam: 'Ontmoet het team',
            stats: {
                projects: 'Projecten',
                countries: 'Landen',
                industries: 'Sectoren',
                years: 'Jaar'
            }
        },
        servicesShowcase: {
            explore: 'Verken',
            exploreAria: (title) => `Verken ${title}`
        },
        process: {
            label: 'Proces',
            prev: 'Vorige',
            next: 'Volgende',
            goToPageAria: (page) => `Ga naar procespagina ${page}`,
            steps: [
                {
                    number: '01',
                    title: 'Kennismaking',
                    line: 'Een korte kennismaking om elkaar te leren kennen, je doelen te begrijpen en te zien of we goed passen.',
                    detail: 'Intro. Fit. Doelen.',
                    icon: '/images/Icons/image 31.webp'
                },
                {
                    number: '02',
                    title: 'Kampvuur',
                    line: 'Jij vertelt, wij luisteren - naar je verhaal, je uitdagingen en wat je probeert op te bouwen.',
                    detail: 'Verhaal. Context. Intentie.',
                    icon: '/images/Icons/image 64.png'
                },
                {
                    number: '03',
                    title: 'Verkenning',
                    line: 'We stellen de juiste vragen om gaten te vullen, aannames te testen en een duidelijke richting te bepalen.',
                    detail: 'Vragen. Gaten. Richting.',
                    icon: '/images/Icons/image 9.webp'
                },
                {
                    number: '04',
                    title: 'Bouw',
                    line: 'We ontwerpen en bouwen openlijk - delen voortgang, verzamelen feedback en verfijnen onderweg.',
                    detail: 'Open. Gedeeld. Verfijnd.',
                    icon: '/images/Icons/image 27.webp'
                },
                {
                    number: '05',
                    title: 'Lancering',
                    line: 'We gaan live, meten performance en blijven verbeteren op basis van echte data en feedback.',
                    detail: 'Live. Meten. Verbeteren.',
                    icon: '/images/Icons/image 11.webp'
                }
            ]
        },
        portfolio: {
            pageDescription: 'Geselecteerd werk over brand, build, growth en automation.',
            sectionLabel: 'Projecten',
            sectionIntro:
                'Blader door een mix van brandsystemen, websites, campagnes en operationele builds.',
            imagePlaceholder: 'Afbeeldingsplaceholder',
            addFinalVisual: 'Voeg hier de definitieve projectvisual toe',
            viewProject: 'Bekijk project',
            prev: 'Vorige',
            next: 'Volgende',
            showPreviousProjectsAria: 'Toon vorige projecten',
            showNextProjectsAria: 'Toon volgende projecten',
            focusProjectAria: (title) => `Focus op ${title}`,
            goToPageAria: (page) => `Ga naar portfoliopagina ${page}`,
            caseOverview: 'Projectoverzicht',
            backTo: 'Terug naar',
            startProject: 'Start je project',
            project: 'Project',
            number: 'Nummer',
            category: 'Categorie',
            deliverables: 'Opleveringen'
        },
        serviceDetail: {
            whatWeDo: 'Wat we doen',
            howWeWork: 'Hoe we werken',
            howWeWorkIntro: 'Een helder, samenwerkend proces — met jou betrokken bij elke stap.',
            work: 'Werk',
            next: 'Volgende',
            viewWork: 'Bekijk portfolio',
            startProject: 'Start je project',
            allServiceDetails: 'Alle servicedetails'
        },
        workWithUs: {
            includes: 'Inbegrepen',
            next: 'Volgende'
        }
    },
    th: {
        navigation: {
            home: 'หน้าแรก'
        },
        footer: {
            explore: 'สำรวจ',
            rightsReserved: '© 2026 The Agency สงวนลิขสิทธิ์',
            storyBody:
                'ทีมเล็ก ลงมือคมชัด สร้างมาเพื่องานที่ต้องมีรสนิยม มีแรงส่ง และจบงานได้จริง.',
            servicesBody:
                'ระบบแบรนด์ระดับพรีเมียม ผลิตภัณฑ์ดิจิทัล performance marketing และ automation สำหรับธุรกิจที่พร้อมยกระดับภาพลักษณ์และการทำงาน.'
        },
        home: {
            meetTeam: 'รู้จักทีม',
            stats: {
                projects: 'โปรเจกต์',
                countries: 'ประเทศ',
                industries: 'อุตสาหกรรม',
                years: 'ปี'
            }
        },
        servicesShowcase: {
            explore: 'ดูต่อ',
            exploreAria: (title) => `ดูรายละเอียด ${title}`
        },
        process: {
            label: 'กระบวนการ',
            prev: 'ก่อนหน้า',
            next: 'ถัดไป',
            goToPageAria: (page) => `ไปยังหน้ากระบวนการ ${page}`,
            steps: [
                {
                    number: '01',
                    title: 'คุยเบื้องต้น',
                    line: 'เริ่มจากการคุยสั้น ๆ เพื่อทำความรู้จัก เข้าใจเป้าหมาย และดูว่าเราเหมาะจะทำงานร่วมกันหรือไม่.',
                    detail: 'เริ่มต้น. เช็กความเหมาะสม. เป้าหมาย.',
                    icon: '/images/Icons/image 31.webp'
                },
                {
                    number: '02',
                    title: 'วงคุย',
                    line: 'คุณเล่า เราฟัง เพื่อเข้าใจเรื่องราว ความท้าทาย และสิ่งที่คุณกำลังพยายามสร้าง.',
                    detail: 'เรื่องราว. บริบท. เจตนา.',
                    icon: '/images/Icons/image 64.png'
                },
                {
                    number: '03',
                    title: 'สำรวจ',
                    line: 'เราถามในจุดที่สำคัญเพื่อเติมช่องว่าง ท้าทายสมมติฐาน และกำหนดทิศทางที่ชัดเจน.',
                    detail: 'คำถาม. ช่องว่าง. ทิศทาง.',
                    icon: '/images/Icons/image 9.webp'
                },
                {
                    number: '04',
                    title: 'ลงมือสร้าง',
                    line: 'เราออกแบบและลงมือทำแบบเปิดเผย แชร์ความคืบหน้า รับฟีดแบ็ก และปรับไปพร้อมกัน.',
                    detail: 'เปิดเผย. ทำร่วมกัน. ปรับให้คม.',
                    icon: '/images/Icons/image 27.webp'
                },
                {
                    number: '05',
                    title: 'เปิดใช้งาน',
                    line: 'เราเปิดใช้งานจริง วัดผล และปรับปรุงต่อจากข้อมูลและฟีดแบ็กที่เกิดขึ้นจริง.',
                    detail: 'ใช้งานจริง. วัดผล. ปรับต่อ.',
                    icon: '/images/Icons/image 11.webp'
                }
            ]
        },
        portfolio: {
            pageDescription: 'ผลงานคัดสรรจาก brand, build, growth และ automation.',
            sectionLabel: 'โปรเจกต์',
            sectionIntro:
                'ดูตัวอย่างงานทั้งระบบแบรนด์ เว็บไซต์ แคมเปญ และงานระบบภายใน.',
            imagePlaceholder: 'ตำแหน่งภาพ',
            addFinalVisual: 'ใส่ภาพโปรเจกต์จริงตรงนี้',
            viewProject: 'ดูโปรเจกต์',
            prev: 'ก่อนหน้า',
            next: 'ถัดไป',
            showPreviousProjectsAria: 'แสดงโปรเจกต์ก่อนหน้า',
            showNextProjectsAria: 'แสดงโปรเจกต์ถัดไป',
            focusProjectAria: (title) => `โฟกัสที่ ${title}`,
            goToPageAria: (page) => `ไปยังหน้าพอร์ตโฟลิโอ ${page}`,
            caseOverview: 'ภาพรวมโปรเจกต์',
            backTo: 'กลับไปที่',
            startProject: 'เริ่มโปรเจกต์ของคุณ',
            project: 'โปรเจกต์',
            number: 'หมายเลข',
            category: 'หมวดงาน',
            deliverables: 'สิ่งที่ส่งมอบ'
        },
        serviceDetail: {
            whatWeDo: 'สิ่งที่เราทำ',
            howWeWork: 'วิธีที่เราทำงาน',
            howWeWorkIntro: 'กระบวนการที่ชัดเจนและทำงานร่วมกัน โดยคุณมีส่วนร่วมในทุกขั้นตอน.',
            work: 'ผลงาน',
            next: 'ต่อไป',
            viewWork: 'ดูพอร์ตโฟลิโอ',
            startProject: 'เริ่มโปรเจกต์ของคุณ',
            allServiceDetails: 'ดูรายละเอียดบริการทั้งหมด'
        },
        workWithUs: {
            includes: 'สิ่งที่รวมอยู่',
            next: 'ต่อไป'
        }
    }
};

export const getUiCopy = (locale: Locale): UiCopy => uiContent[locale] ?? uiContent.en;
