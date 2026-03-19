import type { Locale } from '@/app/site-content';

export type StoryTeamMember = {
    number: string;
    name: string;
    role: string;
    focus: string;
    summary: string;
    detail: string;
    strengths: string[];
    image: string;
};

export type StoryFoundationItem = {
    id: string;
    label: string;
    title: string;
    description: string[];
    icon: string;
    iconScale?: number;
    visual?: string;
    visualAlt?: string;
    visualScale?: number;
    values?: Array<{
        title: string;
        description: string;
    }>;
};

export type StoryContent = {
    metadataDescription: string;
    heroTitle: string;
    aboutEyebrow: string;
    aboutTitle: string;
    storyBody: string[];
    team: {
        eyebrow: string;
        title: string;
        intro: string;
        contributionLabel: string;
        focusLabel: string;
        members: StoryTeamMember[];
    };
    foundationItems: StoryFoundationItem[];
    footerBody: string;
};

const sharedTeamImages = {
    ace: '/images/Story/Ace.png',
    rich: '/images/Story/Rich.png',
    roy: '/images/Story/Roy.png',
    aura: '/images/Story/Aura.png',
    kris: '/images/Story/Cris.png',
    ben: '/images/Story/Ben.png'
} as const;

const sharedFoundationVisuals = {
    mission: '/images/Story/Mission.png',
    vision: '/images/Story/vision.png',
    values: '/images/Story/values.png'
} as const;

export const storyContent: Record<Locale, StoryContent> = {
    en: {
        metadataDescription:
            'We didn’t start this to be an agency. We built our own way of working.',
        heroTitle: 'The Story',
        aboutEyebrow: 'About',
        aboutTitle: 'No layers. No handovers. No black box.',
        storyBody: [
            'Most projects slow down because too many people are involved — and no one owns the outcome.',
            'We keep it simple.',
            'A small team, working closely with you, building in the open and moving fast from idea to execution.',
            'You see the work as it happens. You shape it with us. And it gets finished properly.'
        ],
        team: {
            eyebrow: 'The team',
            title: 'A small team, built on trust.',
            intro: 'Click a teammate to open the section and see how they contribute to the work.',
            contributionLabel: 'Contribution',
            focusLabel: 'Focus',
            members: [
                {
                    number: '01',
                    name: 'Ace',
                    role: 'Ops lead',
                    focus: 'Keeps projects moving with the right structure, pace, and technical support behind the scenes.',
                    summary: 'Ace holds the operating layer together so the team can move fast without losing clarity.',
                    detail:
                        'From agile delivery and internal ops to hands-on development support, the focus stays the same: reduce friction, keep momentum high, and help the work ship cleanly.',
                    strengths: ['Agile coaching', 'Operations lead', 'Development support'],
                    image: sharedTeamImages.ace
                },
                {
                    number: '02',
                    name: 'Rich',
                    role: 'Art director',
                    focus: 'Shapes the creative direction while keeping the work organised, aligned, and moving.',
                    summary:
                        'Rich connects process and taste, making sure the work is well-directed and properly managed at the same time.',
                    detail:
                        'That means facilitating the flow of the project, directing the visual standard, and helping design decisions stay sharp from concept through execution.',
                    strengths: ['Scrum leadership', 'Art direction', 'Design systems'],
                    image: sharedTeamImages.rich
                },
                {
                    number: '03',
                    name: 'Roy',
                    role: 'Lead developer',
                    focus: 'Builds the technical side of the work and ties it back to performance when traffic starts coming in.',
                    summary:
                        'Roy makes sure the work functions properly in the real world, from the build itself to the paid traffic behind it.',
                    detail:
                        'He leads development, solves the implementation layer, and supports paid acquisition so strong creative work also has a path to measurable growth.',
                    strengths: ['Lead development', 'Paid ads', 'Launch execution'],
                    image: sharedTeamImages.roy
                },
                {
                    number: '04',
                    name: 'Aura',
                    role: 'Social strategist',
                    focus: 'Brings social instincts and design thinking together so content feels sharp, current, and consistent.',
                    summary:
                        'Aura helps shape the visual layer of the brand while making sure social content feels native to the platforms it lives on.',
                    detail:
                        'That covers content direction, creative design, and the kind of platform awareness that helps brands show up in a way that actually fits the channel.',
                    strengths: ['Social media', 'Content design', 'Visual consistency'],
                    image: sharedTeamImages.aura
                },
                {
                    number: '05',
                    name: 'Kris',
                    role: 'Writer',
                    focus: 'Shapes language, content rhythm, and day-to-day social output so the brand sounds as strong as it looks.',
                    summary:
                        'Kris helps the brand communicate clearly, consistently, and with the right tone across channels.',
                    detail:
                        'From writing and messaging to social planning and ongoing channel management, the goal is to keep the brand active, coherent, and easy to recognise.',
                    strengths: ['Writing', 'Social media management', 'Brand voice'],
                    image: sharedTeamImages.kris
                },
                {
                    number: '06',
                    name: 'Ben',
                    role: 'Business development',
                    focus: 'Helps turn momentum into opportunities by connecting the work to the commercial side of the business.',
                    summary:
                        'Ben sits closer to growth from the business side, making sure relationships, outreach, and revenue conversations keep moving.',
                    detail:
                        'That means business development, sales conversations, and identifying where the agency can create value, not just good-looking output.',
                    strengths: ['Business development', 'Sales', 'Opportunity building'],
                    image: sharedTeamImages.ben
                }
            ]
        },
        foundationItems: [
            {
                id: 'mission',
                label: 'Mission',
                title: 'To build work that actually moves things forward.',
                description: [
                    'Not just visuals. Not just strategy decks. But real outputs — products, brands, systems — that launch, perform, and evolve.',
                    'We focus on clarity, speed, and execution. Because good ideas are everywhere — but finishing them properly is rare.'
                ],
                icon: '/images/Icons/image 29.webp',
                iconScale: 1,
                visual: sharedFoundationVisuals.mission,
                visualAlt: 'Mission concept visual',
                visualScale: 1
            },
            {
                id: 'vision',
                label: 'Vision',
                title: 'A new kind of agency model.',
                description: [
                    'Smaller, sharper, and more involved.',
                    'Strategy and execution live in the same room. Ideas don’t get lost in handovers. Every project gets the attention it deserves.'
                ],
                icon: '/images/Icons/image 45.webp',
                iconScale: 1,
                visual: sharedFoundationVisuals.vision,
                visualAlt: 'Vision concept visual',
                visualScale: 1.12
            },
            {
                id: 'values',
                label: 'Values',
                title: 'The rules we do not compromise on.',
                description: ['A few non-negotiables shape how we work.'],
                icon: '/images/Icons/image 41.webp',
                iconScale: 1,
                visual: sharedFoundationVisuals.values,
                visualAlt: 'Values concept visual',
                visualScale: 1,
                values: [
                    {
                        title: 'Clarity first',
                        description: 'We strip away noise.'
                    },
                    {
                        title: 'Focus on what matters',
                        description: 'We focus on what changes outcomes.'
                    },
                    {
                        title: 'Build in the open',
                        description: 'Progress stays visible.'
                    },
                    {
                        title: 'Own the outcome',
                        description: 'We stay accountable.'
                    }
                ]
            }
        ],
        footerBody:
            'Small team. Sharp execution. Built for work that needs taste, momentum, and real follow-through.'
    },
    nl: {
        metadataDescription:
            'We zijn dit niet begonnen om een standaard agency te zijn. We hebben onze eigen manier van werken gebouwd.',
        heroTitle: 'Het Verhaal',
        aboutEyebrow: 'Over ons',
        aboutTitle: 'Geen lagen. Geen overdrachten. Geen black box.',
        storyBody: [
            'De meeste projecten vertragen omdat er te veel mensen bij betrokken zijn — en niemand echt eigenaar is van de uitkomst.',
            'Wij houden het simpel.',
            'Een klein team, dicht op jou, open bouwend en snel bewegend van idee naar uitvoering.',
            'Je ziet het werk terwijl het gebeurt. Je stuurt mee. En het wordt ook echt goed afgerond.'
        ],
        team: {
            eyebrow: 'Het team',
            title: 'Een klein team, gebouwd op vertrouwen.',
            intro: 'Klik op een teamlid om te zien hoe diegene bijdraagt aan het werk.',
            contributionLabel: 'Bijdrage',
            focusLabel: 'Focus',
            members: [
                {
                    number: '01',
                    name: 'Ace',
                    role: 'Operationeel lead',
                    focus: 'Houdt projecten in beweging met de juiste structuur, snelheid en technische steun achter de schermen.',
                    summary: 'Ace houdt de operationele laag strak, zodat het team snel kan bewegen zonder helderheid te verliezen.',
                    detail:
                        'Van agile delivery en interne ops tot hands-on development support: het doel blijft hetzelfde — frictie wegnemen, vaart hoog houden en zorgen dat het werk schoon live gaat.',
                    strengths: ['Agile coaching', 'Operations', 'Development support'],
                    image: sharedTeamImages.ace
                },
                {
                    number: '02',
                    name: 'Rich',
                    role: 'Art director',
                    focus: 'Stuurt de creatieve richting terwijl het werk georganiseerd, afgestemd en in beweging blijft.',
                    summary:
                        'Rich verbindt proces en smaak, zodat het werk tegelijk goed aangestuurd en goed gemanaged wordt.',
                    detail:
                        'Dat betekent de flow van het project bewaken, de visuele standaard neerzetten en designbeslissingen scherp houden van concept tot uitvoering.',
                    strengths: ['Scrum-leiding', 'Art direction', 'Designsystemen'],
                    image: sharedTeamImages.rich
                },
                {
                    number: '03',
                    name: 'Roy',
                    role: 'Lead developer',
                    focus: 'Bouwt de technische kant van het werk en koppelt die aan performance zodra er verkeer binnenkomt.',
                    summary:
                        'Roy zorgt dat het werk in de echte wereld functioneert, van de build zelf tot het paid verkeer erachter.',
                    detail:
                        'Hij leidt development, lost de implementatielaag op en ondersteunt paid acquisition zodat sterk creatief werk ook meetbare groei kan krijgen.',
                    strengths: ['Lead development', 'Paid ads', 'Launch-uitvoering'],
                    image: sharedTeamImages.roy
                },
                {
                    number: '04',
                    name: 'Aura',
                    role: 'Social strategist',
                    focus: 'Brengt social instinct en designdenken samen zodat content scherp, actueel en consistent blijft.',
                    summary:
                        'Aura helpt de visuele laag van het merk vormgeven en zorgt dat social content native voelt op het platform waar die leeft.',
                    detail:
                        'Dat omvat contentrichting, creatief ontwerp en het platformgevoel dat merken helpt op een manier aanwezig te zijn die echt past bij het kanaal.',
                    strengths: ['Social media', 'Contentdesign', 'Visuele consistentie'],
                    image: sharedTeamImages.aura
                },
                {
                    number: '05',
                    name: 'Kris',
                    role: 'Writer',
                    focus: 'Vormt taal, contentritme en dagelijkse social output zodat het merk net zo sterk klinkt als het eruitziet.',
                    summary:
                        'Kris helpt het merk helder, consistent en met de juiste tone of voice te communiceren over alle kanalen.',
                    detail:
                        'Van copy en messaging tot social planning en doorlopend kanaalbeheer: het doel is het merk actief, coherent en herkenbaar houden.',
                    strengths: ['Writing', 'Social media management', 'Merkstem'],
                    image: sharedTeamImages.kris
                },
                {
                    number: '06',
                    name: 'Ben',
                    role: 'Business development',
                    focus: 'Helpt momentum omzetten in kansen door het werk te verbinden met de commerciële kant van de business.',
                    summary:
                        'Ben zit dichter op groei vanuit de zakelijke kant en houdt relaties, outreach en revenuegesprekken in beweging.',
                    detail:
                        'Dat betekent business development, salesgesprekken en het signaleren waar de agency echte waarde kan toevoegen — niet alleen mooi werk.',
                    strengths: ['Business development', 'Sales', 'Kansen opbouwen'],
                    image: sharedTeamImages.ben
                }
            ]
        },
        foundationItems: [
            {
                id: 'mission',
                label: 'Missie',
                title: 'Werk bouwen dat echt iets vooruitbrengt.',
                description: [
                    'Niet alleen visuals. Niet alleen strategiedecks. Maar echte output — producten, merken, systemen — die lanceren, presteren en doorgroeien.',
                    'We focussen op helderheid, snelheid en uitvoering. Goede ideeën zijn overal — ze goed afmaken is zeldzaam.'
                ],
                icon: '/images/Icons/image 29.webp',
                iconScale: 1,
                visual: sharedFoundationVisuals.mission,
                visualAlt: 'Visual voor missie',
                visualScale: 1
            },
            {
                id: 'vision',
                label: 'Visie',
                title: 'Een nieuw soort agencymodel.',
                description: [
                    'Kleiner, scherper en meer betrokken.',
                    'Strategie en uitvoering zitten in dezelfde ruimte. Ideeën raken niet kwijt in overdrachten. Elk project krijgt de aandacht die het verdient.'
                ],
                icon: '/images/Icons/image 45.webp',
                iconScale: 1,
                visual: sharedFoundationVisuals.vision,
                visualAlt: 'Visual voor visie',
                visualScale: 1.12
            },
            {
                id: 'values',
                label: 'Waarden',
                title: 'De regels waar we niet op inleveren.',
                description: ['Een paar niet-onderhandelbare principes bepalen hoe we werken.'],
                icon: '/images/Icons/image 41.webp',
                iconScale: 1,
                visual: sharedFoundationVisuals.values,
                visualAlt: 'Visual voor waarden',
                visualScale: 1,
                values: [
                    { title: 'Helderheid eerst', description: 'We halen ruis weg.' },
                    { title: 'Focus op wat telt', description: 'We richten ons op wat uitkomst verandert.' },
                    { title: 'Open bouwen', description: 'Voortgang blijft zichtbaar.' },
                    { title: 'De uitkomst ownen', description: 'We blijven verantwoordelijk.' }
                ]
            }
        ],
        footerBody:
            'Klein team. Scherpe uitvoering. Gemaakt voor werk dat smaak, vaart en echte opvolging nodig heeft.'
    },
    th: {
        metadataDescription:
            'เราไม่ได้เริ่มต้นเพื่อเป็นเอเจนซี่แบบเดิม ๆ เราสร้างวิธีทำงานของเราเองขึ้นมา.',
        heroTitle: 'เรื่องราว',
        aboutEyebrow: 'เกี่ยวกับเรา',
        aboutTitle: 'ไม่มีหลายชั้น. ไม่มีการส่งต่อ. ไม่มี black box.',
        storyBody: [
            'หลายโปรเจกต์ช้าลงเพราะมีคนเกี่ยวข้องมากเกินไป และไม่มีใครเป็นเจ้าของผลลัพธ์จริง ๆ.',
            'เราเลยทำให้มันเรียบง่าย.',
            'ทีมเล็กที่ทำงานใกล้ชิดกับคุณ สร้างงานแบบเปิดเผย และเคลื่อนจากไอเดียไปสู่การลงมือทำอย่างรวดเร็ว.',
            'คุณเห็นงานไปพร้อมกับเรา ช่วยกำหนดทิศทางได้ และงานก็ถูกทำให้เสร็จอย่างถูกต้อง.'
        ],
        team: {
            eyebrow: 'ทีม',
            title: 'ทีมเล็กที่สร้างบนความไว้ใจ.',
            intro: 'กดที่สมาชิกแต่ละคนเพื่อดูว่าเขามีบทบาทอย่างไรในงาน.',
            contributionLabel: 'บทบาท',
            focusLabel: 'โฟกัส',
            members: [
                {
                    number: '01',
                    name: 'Ace',
                    role: 'Ops lead',
                    focus: 'ทำให้โปรเจกต์เดินหน้าได้ด้วยโครงสร้าง จังหวะ และการซัพพอร์ตทางเทคนิคที่เหมาะสมหลังบ้าน.',
                    summary: 'Ace ดูแลชั้นปฏิบัติการให้แน่น เพื่อให้ทีมเดินหน้าได้เร็วโดยไม่เสียความชัดเจน.',
                    detail:
                        'ตั้งแต่ agile delivery และ internal ops ไปจนถึงการช่วยฝั่ง development แบบลงมือจริง เป้าหมายยังเหมือนเดิมคือ ลดแรงเสียดทาน รักษาแรงส่ง และทำให้งานปล่อยได้อย่างสะอาด.',
                    strengths: ['การโค้ช Agile', 'Operations', 'การซัพพอร์ต Development'],
                    image: sharedTeamImages.ace
                },
                {
                    number: '02',
                    name: 'Rich',
                    role: 'Art director',
                    focus: 'กำหนดทิศทางครีเอทีฟพร้อมกับทำให้งานยังเป็นระบบ สอดคล้อง และเดินหน้าได้.',
                    summary:
                        'Rich เชื่อม process และรสนิยมเข้าด้วยกัน ทำให้งานทั้งถูกกำกับและถูกจัดการอย่างดีในเวลาเดียวกัน.',
                    detail:
                        'นั่นหมายถึงการดู flow ของโปรเจกต์ วางมาตรฐานด้านภาพ และทำให้การตัดสินใจด้านดีไซน์ยังคมตั้งแต่คอนเซปต์ไปจนถึงการลงมือทำ.',
                    strengths: ['การนำแบบ Scrum', 'Art direction', 'Design systems'],
                    image: sharedTeamImages.rich
                },
                {
                    number: '03',
                    name: 'Roy',
                    role: 'Lead developer',
                    focus: 'สร้างฝั่งเทคนิคของงานและเชื่อมมันเข้ากับ performance เมื่อเริ่มมีทราฟฟิกเข้ามา.',
                    summary:
                        'Roy ทำให้งานใช้งานได้จริงในโลกธุรกิจ ตั้งแต่ตัว build เองไปจนถึง paid traffic ที่อยู่ข้างหลังมัน.',
                    detail:
                        'เขานำฝั่ง development แก้ชั้น implementation และช่วยด้าน paid acquisition เพื่อให้งานครีเอทีฟที่ดีมีทางไปสู่การเติบโตที่วัดผลได้.',
                    strengths: ['Lead development', 'Paid ads', 'การพาออกสู่ launch'],
                    image: sharedTeamImages.roy
                },
                {
                    number: '04',
                    name: 'Aura',
                    role: 'Social strategist',
                    focus: 'รวมสัญชาตญาณด้าน social และวิธีคิดด้านดีไซน์เข้าด้วยกัน เพื่อให้คอนเทนต์คม ทัน และสม่ำเสมอ.',
                    summary:
                        'Aura ช่วยกำหนดชั้นภาพลักษณ์ของแบรนด์ พร้อมทำให้ social content ดูเป็นธรรมชาติกับแพลตฟอร์มที่มันอยู่.',
                    detail:
                        'ครอบคลุมตั้งแต่ทิศทางคอนเทนต์ งานออกแบบครีเอทีฟ ไปจนถึงความเข้าใจแพลตฟอร์มที่ช่วยให้แบรนด์ไปปรากฏตัวได้อย่างเหมาะกับช่องทางจริง ๆ.',
                    strengths: ['Social media', 'Content design', 'ความสม่ำเสมอด้านภาพ'],
                    image: sharedTeamImages.aura
                },
                {
                    number: '05',
                    name: 'Kris',
                    role: 'Writer',
                    focus: 'กำหนดภาษา จังหวะของคอนเทนต์ และ social output รายวัน เพื่อให้แบรนด์ฟังดูแข็งแรงพอ ๆ กับภาพลักษณ์.',
                    summary:
                        'Kris ช่วยให้แบรนด์สื่อสารได้ชัด สม่ำเสมอ และมีน้ำเสียงที่เหมาะสมในทุกช่องทาง.',
                    detail:
                        'ตั้งแต่งานเขียนและ messaging ไปจนถึง social planning และการดูแลช่องทางต่อเนื่อง เป้าหมายคือทำให้แบรนด์เคลื่อนไหวอย่างเป็นระบบและจดจำได้ง่าย.',
                    strengths: ['Writing', 'Social media management', 'น้ำเสียงแบรนด์'],
                    image: sharedTeamImages.kris
                },
                {
                    number: '06',
                    name: 'Ben',
                    role: 'Business development',
                    focus: 'ช่วยเปลี่ยนแรงส่งให้กลายเป็นโอกาส โดยเชื่อมงานเข้ากับด้านการค้าของธุรกิจ.',
                    summary:
                        'Ben อยู่ใกล้ฝั่งการเติบโตจากมุมธุรกิจ ทำให้ความสัมพันธ์ การ outreach และบทสนทนาเรื่องรายได้ยังเดินหน้าได้.',
                    detail:
                        'นั่นหมายถึง business development การคุยด้าน sales และการมองหาจุดที่ agency สามารถสร้างคุณค่าได้จริง ไม่ใช่แค่งานที่ดูดี.',
                    strengths: ['Business development', 'Sales', 'การสร้างโอกาส'],
                    image: sharedTeamImages.ben
                }
            ]
        },
        foundationItems: [
            {
                id: 'mission',
                label: 'Mission',
                title: 'สร้างงานที่ผลักสิ่งต่าง ๆ ให้เดินหน้าได้จริง.',
                description: [
                    'ไม่ใช่แค่ภาพลักษณ์ ไม่ใช่แค่สไลด์กลยุทธ์ แต่เป็น output จริง — โปรดักต์ แบรนด์ และระบบ — ที่เปิดตัว ทำงาน และเติบโตต่อได้.',
                    'เราโฟกัสที่ความชัด ความเร็ว และการลงมือทำ เพราะไอเดียดีมีอยู่ทุกที่ แต่การทำให้เสร็จอย่างถูกต้องนั้นหาได้ยาก.'
                ],
                icon: '/images/Icons/image 29.webp',
                iconScale: 1,
                visual: sharedFoundationVisuals.mission,
                visualAlt: 'ภาพประกอบ mission',
                visualScale: 1
            },
            {
                id: 'vision',
                label: 'Vision',
                title: 'โมเดลเอเจนซี่แบบใหม่.',
                description: [
                    'เล็กกว่า คมกว่า และมีส่วนร่วมมากกว่า.',
                    'กลยุทธ์และการลงมือทำอยู่ในห้องเดียวกัน ไอเดียไม่หายไประหว่างการส่งต่อ และทุกโปรเจกต์ได้รับความใส่ใจที่ควรได้.'
                ],
                icon: '/images/Icons/image 45.webp',
                iconScale: 1,
                visual: sharedFoundationVisuals.vision,
                visualAlt: 'ภาพประกอบ vision',
                visualScale: 1.12
            },
            {
                id: 'values',
                label: 'Values',
                title: 'หลักที่เราไม่ยอมลดมาตรฐาน.',
                description: ['มีหลักไม่กี่ข้อที่เราไม่ต่อรอง และมันกำหนดวิธีทำงานของเรา.'],
                icon: '/images/Icons/image 41.webp',
                iconScale: 1,
                visual: sharedFoundationVisuals.values,
                visualAlt: 'ภาพประกอบ values',
                visualScale: 1,
                values: [
                    { title: 'ชัดเจนก่อน', description: 'เราตัดสิ่งรบกวนออก.' },
                    { title: 'โฟกัสสิ่งที่สำคัญ', description: 'เราทำในสิ่งที่เปลี่ยนผลลัพธ์.' },
                    { title: 'สร้างแบบเปิดเผย', description: 'ความคืบหน้ายังคงมองเห็นได้.' },
                    { title: 'รับผิดชอบต่อผลลัพธ์', description: 'เรารับผิดชอบจนจบ.' }
                ]
            }
        ],
        footerBody:
            'ทีมเล็ก ลงมือคมชัด สร้างมาเพื่องานที่ต้องมีรสนิยม มีแรงส่ง และจบงานได้จริง.'
    }
};

export const getStoryContent = (locale: Locale): StoryContent =>
    storyContent[locale] ?? storyContent.en;
