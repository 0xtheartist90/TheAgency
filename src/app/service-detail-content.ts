import type { Locale } from '@/app/site-content';

export type ServiceScopeGroup = {
    number: string;
    title: string;
    items: Array<{
        label: string;
        detail: string;
    }>;
};

export type ServicePreview = {
    title: string;
};

export type ServiceDetailConfig = {
    scopeGroups: ServiceScopeGroup[];
    workPreviews: ServicePreview[];
    workIntro: string;
    workVisualAlt: string;
    ctaVisualAlt: string;
    finalTitle: string;
    finalIntro: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
};

export type ServiceDetailContent = {
    processSteps: Array<{
        number: string;
        title: string;
        line: string;
    }>;
    services: Record<'brand' | 'build' | 'grow' | 'automate', ServiceDetailConfig>;
};

const serviceDetailContent: Record<Locale, ServiceDetailContent> = {
    en: {
        processSteps: [
            { number: '01', title: 'Meet & Greet', line: 'Intro and fit check.' },
            { number: '02', title: 'Campfire', line: 'You talk, we listen.' },
            { number: '03', title: 'Discovery', line: 'We define direction.' },
            { number: '04', title: 'Build', line: 'Design in the open.' },
            { number: '05', title: 'Launch', line: 'Refine and deliver.' }
        ],
        services: {
            brand: {
                scopeGroups: [
                    {
                        number: '01',
                        title: 'Strategy',
                        items: [
                            { label: 'Positioning', detail: 'Define what the brand stands for, how it is framed, and why people should care.' },
                            { label: 'Messaging', detail: 'Shape the core language so the brand sounds clear, consistent, and easy to understand.' },
                            { label: 'Brand direction', detail: 'Set the overall creative direction so the system feels intentional before design starts.' }
                        ]
                    },
                    {
                        number: '02',
                        title: 'Identity',
                        items: [
                            { label: 'Logo design', detail: 'Create a logo that feels ownable, legible, and strong enough to carry the brand.' },
                            { label: 'Visual identity system', detail: 'Build the broader visual system so the brand stays recognizable beyond a single mark.' },
                            { label: 'Typography and color', detail: 'Choose the type and color rules that make the brand feel consistent across every surface.' }
                        ]
                    },
                    {
                        number: '03',
                        title: 'Application',
                        items: [
                            { label: 'Product mockups', detail: 'Show how the brand lands on products, pages, and launch materials before rollout.' },
                            { label: 'Packaging', detail: 'Translate the system into packaging that feels considered, premium, and shelf-ready.' },
                            { label: 'Marketing & social visuals', detail: 'Extend the brand into campaign and social assets that still feel coherent and on-brand.' }
                        ]
                    }
                ],
                workPreviews: [{ title: 'Identity systems' }, { title: 'Rebrands' }, { title: 'Applications' }],
                workIntro: 'A few examples of the kind of brand work we shape across identity, rollout, and application.',
                workVisualAlt: 'Brand work preview',
                ctaVisualAlt: 'Next step visual',
                finalTitle: "Let's build a brand that holds up",
                finalIntro: "Start with a simple conversation and we'll figure out the right direction together. Building from scratch? The Startup Package is the fastest way to shape the full brand system.",
                secondaryCtaLabel: 'Explore Startup Package',
                secondaryCtaHref: '/startup'
            },
            build: {
                scopeGroups: [
                    {
                        number: '01',
                        title: 'Websites',
                        items: [
                            { label: 'Marketing sites', detail: 'High-end websites built to communicate clearly, move fast, and convert with confidence.' },
                            { label: 'Landing pages', detail: 'Focused pages for campaigns, launches, and offers that need a sharper conversion path.' },
                            { label: 'CMS setup', detail: 'Content systems your team can actually update without breaking the design or flow.' }
                        ]
                    },
                    {
                        number: '02',
                        title: 'Products',
                        items: [
                            { label: 'Apps', detail: 'Product experiences built to feel clean, intuitive, and ready for real users.' },
                            { label: 'Dashboards', detail: 'Internal and user-facing dashboards that make complex information easier to act on.' },
                            { label: 'Flows', detail: 'Core user flows shaped to reduce friction and keep the product moving forward.' }
                        ]
                    },
                    {
                        number: '03',
                        title: 'Systems',
                        items: [
                            { label: 'Frontend build', detail: 'Clean implementation that turns polished design into something production-ready.' },
                            { label: 'Design systems', detail: 'Reusable UI foundations that help products stay consistent as they grow.' },
                            { label: 'Implementation support', detail: 'Technical support that keeps delivery aligned from design decisions through launch.' }
                        ]
                    }
                ],
                workPreviews: [{ title: 'Marketing sites' }, { title: 'Products' }, { title: 'Systems' }],
                workIntro: 'A few examples of the kind of build work we shape across websites, products, and systems.',
                workVisualAlt: 'Build work preview',
                ctaVisualAlt: 'Next step visual',
                finalTitle: "Let's build something people can use",
                finalIntro: "Start with a simple conversation and we'll figure out the right direction together. The Startup Package is the fastest way to shape the product and launch system from the ground up.",
                secondaryCtaLabel: 'Explore Startup Package',
                secondaryCtaHref: '/startup'
            },
            grow: {
                scopeGroups: [
                    {
                        number: '01',
                        title: 'Social',
                        items: [
                            { label: 'Social media management', detail: 'Plan, organize, and run social channels so the brand stays active, consistent, and commercially useful.' },
                            { label: 'Content planning', detail: 'Shape the content calendar around campaigns, offers, launches, and the kind of attention you want to build.' },
                            { label: 'Creative direction', detail: 'Keep the output visually sharp so posts, stories, and campaign assets all feel aligned.' }
                        ]
                    },
                    {
                        number: '02',
                        title: 'Ads',
                        items: [
                            { label: 'Meta ads', detail: 'Run paid campaigns across Meta with clearer structure, better creative, and tighter performance feedback.' },
                            { label: 'Google ads', detail: 'Build search and intent-driven campaigns that capture demand without wasting budget.' },
                            { label: 'Campaign setup', detail: 'Set up the account, targeting, conversion flow, and ad structure so performance has a clean base.' }
                        ]
                    },
                    {
                        number: '03',
                        title: 'Optimization',
                        items: [
                            { label: 'Testing', detail: 'Test angles, messaging, formats, and creatives to find what actually moves attention into action.' },
                            { label: 'Reporting', detail: 'Track what matters clearly so decisions are made from signal, not guesswork.' },
                            { label: 'Scaling', detail: 'Increase spend and output carefully once the system is working, without losing efficiency too early.' }
                        ]
                    }
                ],
                workPreviews: [{ title: 'Paid campaigns' }, { title: 'Social systems' }, { title: 'Performance loops' }],
                workIntro: 'A few examples of the kind of growth work we shape across paid campaigns, social systems, and ongoing optimization.',
                workVisualAlt: 'Grow work preview',
                ctaVisualAlt: 'Next step visual',
                finalTitle: "Let's grow what already has potential",
                finalIntro: "Start with a simple conversation and we'll figure out the right direction together. The Scale Package is the fastest way to connect growth support with ongoing performance.",
                secondaryCtaLabel: 'Explore Scale Package',
                secondaryCtaHref: '/scale'
            },
            automate: {
                scopeGroups: [
                    {
                        number: '01',
                        title: 'Workflows',
                        items: [
                            { label: 'Process automation', detail: 'Automate repetitive steps so the team spends less time moving information manually.' },
                            { label: 'Task flows', detail: 'Build cleaner internal flows for handoff, follow-up, approvals, and routine operations.' },
                            { label: 'Operational logic', detail: 'Map the rules behind the workflow so the system runs consistently instead of relying on memory.' }
                        ]
                    },
                    {
                        number: '02',
                        title: 'Systems',
                        items: [
                            { label: 'Internal tools', detail: 'Create practical internal systems that make day-to-day work easier to manage and easier to scale.' },
                            { label: 'CRM setup', detail: 'Structure the CRM so contacts, leads, and follow-up live in a cleaner working system.' },
                            { label: 'Integrations', detail: 'Connect the platforms you already use so data and actions move without extra admin.' }
                        ]
                    },
                    {
                        number: '03',
                        title: 'AI',
                        items: [
                            { label: 'AI workflows', detail: 'Use AI where it removes friction, speeds up output, and supports the team in practical ways.' },
                            { label: 'Assistants', detail: 'Set up lightweight assistants for research, drafting, routing, and repetitive internal tasks.' },
                            { label: 'Implementation support', detail: 'Help the team put the system into use so the automation actually sticks after setup.' }
                        ]
                    }
                ],
                workPreviews: [{ title: 'Workflow systems' }, { title: 'Internal tools' }, { title: 'AI automations' }],
                workIntro: 'A few examples of the kind of automation work we shape across workflows, internal systems, and AI support.',
                workVisualAlt: 'Automate work preview',
                ctaVisualAlt: 'Next step visual',
                finalTitle: "Let's remove the manual work",
                finalIntro: "Start with a simple conversation and we'll figure out the right direction together. The Partner Package is the fastest way to build deeper systems support with us over time.",
                secondaryCtaLabel: 'Explore Partner Package',
                secondaryCtaHref: '/partner'
            }
        }
    },
    nl: {
        processSteps: [
            { number: '01', title: 'Kennismaking', line: 'Intro en fit check.' },
            { number: '02', title: 'Kampvuur', line: 'Jij praat, wij luisteren.' },
            { number: '03', title: 'Verkenning', line: 'We bepalen de richting.' },
            { number: '04', title: 'Bouw', line: 'We ontwerpen openlijk.' },
            { number: '05', title: 'Lancering', line: 'Verfijnen en opleveren.' }
        ],
        services: {
            brand: {
                scopeGroups: [
                    { number: '01', title: 'Strategy', items: [
                        { label: 'Positioning', detail: 'Bepalen waar het merk voor staat, hoe het wordt neergezet en waarom mensen moeten opletten.' },
                        { label: 'Messaging', detail: 'De kern van de taal vormen zodat het merk helder, consistent en makkelijk te begrijpen klinkt.' },
                        { label: 'Brand direction', detail: 'De creatieve richting zetten zodat het systeem doelbewust voelt voordat het design start.' }
                    ]},
                    { number: '02', title: 'Identity', items: [
                        { label: 'Logo design', detail: 'Een logo maken dat eigen voelt, leesbaar blijft en sterk genoeg is om het merk te dragen.' },
                        { label: 'Visual identity system', detail: 'Het bredere visuele systeem bouwen zodat het merk herkenbaar blijft voorbij één enkel merk.' },
                        { label: 'Typography and color', detail: 'Type- en kleurregels kiezen die het merk op elk oppervlak consistent laten aanvoelen.' }
                    ]},
                    { number: '03', title: 'Application', items: [
                        { label: 'Product mockups', detail: 'Laten zien hoe het merk landt op producten, pagina’s en launchmateriaal vóór de uitrol.' },
                        { label: 'Packaging', detail: 'Het systeem vertalen naar packaging die doordacht, premium en klaar voor rollout voelt.' },
                        { label: 'Marketing & social visuals', detail: 'Het merk doortrekken naar campagne- en social assets die nog steeds coherent aanvoelen.' }
                    ]}
                ],
                workPreviews: [{ title: 'Identiteitssystemen' }, { title: 'Rebrands' }, { title: 'Toepassingen' }],
                workIntro: 'Een paar voorbeelden van het soort Brand-werk dat we vormgeven over identiteit, uitrol en toepassing.',
                workVisualAlt: 'Preview van brandwerk',
                ctaVisualAlt: 'Visual voor volgende stap',
                finalTitle: 'Laten we een merk bouwen dat standhoudt',
                finalIntro: 'Begin met een simpel gesprek en we bepalen samen de juiste richting. Bouw je vanaf nul? Het Startup Package is de snelste manier om het volledige brandsysteem scherp te krijgen.',
                secondaryCtaLabel: 'Bekijk Startup Package',
                secondaryCtaHref: '/startup'
            },
            build: {
                scopeGroups: [
                    { number: '01', title: 'Websites', items: [
                        { label: 'Marketing sites', detail: 'High-end websites die helder communiceren, snel bewegen en met vertrouwen converteren.' },
                        { label: 'Landing pages', detail: 'Gerichte pagina’s voor campagnes, launches en offers die een scherpere conversieroute nodig hebben.' },
                        { label: 'CMS setup', detail: 'Contentsystemen die je team echt kan updaten zonder design of flow te breken.' }
                    ]},
                    { number: '02', title: 'Products', items: [
                        { label: 'Apps', detail: 'Productervaringen die schoon, intuïtief en klaar voor echte gebruikers aanvoelen.' },
                        { label: 'Dashboards', detail: 'Interne en user-facing dashboards die complexe informatie makkelijker bruikbaar maken.' },
                        { label: 'Flows', detail: 'Kernflows die frictie verminderen en het product vooruit laten bewegen.' }
                    ]},
                    { number: '03', title: 'Systems', items: [
                        { label: 'Frontend build', detail: 'Schone implementatie die gepolijst design omzet naar iets production-ready.' },
                        { label: 'Design systems', detail: 'Herbruikbare UI-basis die producten consistent houdt terwijl ze groeien.' },
                        { label: 'Implementation support', detail: 'Technische support die delivery in lijn houdt van designbeslissingen tot launch.' }
                    ]}
                ],
                workPreviews: [{ title: 'Marketingwebsites' }, { title: 'Producten' }, { title: 'Systemen' }],
                workIntro: 'Een paar voorbeelden van het soort Build-werk dat we vormgeven over websites, producten en systemen.',
                workVisualAlt: 'Preview van buildwerk',
                ctaVisualAlt: 'Visual voor volgende stap',
                finalTitle: 'Laten we iets bouwen dat mensen kunnen gebruiken',
                finalIntro: 'Begin met een simpel gesprek en we bepalen samen de juiste richting. Het Startup Package is de snelste manier om product en launchsysteem vanaf de basis scherp te zetten.',
                secondaryCtaLabel: 'Bekijk Startup Package',
                secondaryCtaHref: '/startup'
            },
            grow: {
                scopeGroups: [
                    { number: '01', title: 'Social', items: [
                        { label: 'Social media management', detail: 'Social kanalen plannen, organiseren en runnen zodat het merk actief, consistent en commercieel bruikbaar blijft.' },
                        { label: 'Content planning', detail: 'De contentkalender vormgeven rond campagnes, offers, launches en het soort aandacht dat je wilt opbouwen.' },
                        { label: 'Creative direction', detail: 'De output visueel scherp houden zodat posts, stories en campagne-assets als één lijn voelen.' }
                    ]},
                    { number: '02', title: 'Ads', items: [
                        { label: 'Meta ads', detail: 'Paid campagnes op Meta draaien met helderdere structuur, beter creatief werk en strakkere performance feedback.' },
                        { label: 'Google ads', detail: 'Search- en intentgedreven campagnes bouwen die vraag opvangen zonder budget te verspillen.' },
                        { label: 'Campaign setup', detail: 'Account, targeting, conversieflow en adstructuur zo opzetten dat performance een schone basis krijgt.' }
                    ]},
                    { number: '03', title: 'Optimization', items: [
                        { label: 'Testing', detail: 'Hoeken, messaging, formats en creatives testen om te vinden wat aandacht echt in actie verandert.' },
                        { label: 'Reporting', detail: 'Duidelijk volgen wat ertoe doet zodat beslissingen uit signaal komen, niet uit gokwerk.' },
                        { label: 'Scaling', detail: 'Spend en output voorzichtig vergroten zodra het systeem werkt, zonder te vroeg efficiëntie te verliezen.' }
                    ]}
                ],
                workPreviews: [{ title: 'Paid campagnes' }, { title: 'Social systemen' }, { title: 'Performance-lussen' }],
                workIntro: 'Een paar voorbeelden van het soort Grow-werk dat we vormgeven over paid campagnes, social systemen en doorlopende optimalisatie.',
                workVisualAlt: 'Preview van growthwerk',
                ctaVisualAlt: 'Visual voor volgende stap',
                finalTitle: 'Laten we groeien wat al potentie heeft',
                finalIntro: 'Begin met een simpel gesprek en we bepalen samen de juiste richting. Het Scale Package is de snelste manier om groeisupport te koppelen aan doorlopende performance.',
                secondaryCtaLabel: 'Bekijk Scale Package',
                secondaryCtaHref: '/scale'
            },
            automate: {
                scopeGroups: [
                    { number: '01', title: 'Workflows', items: [
                        { label: 'Process automation', detail: 'Herhalende stappen automatiseren zodat het team minder tijd kwijt is aan handmatig verschuiven van informatie.' },
                        { label: 'Task flows', detail: 'Schonere interne flows bouwen voor handoff, follow-up, approvals en routine-operations.' },
                        { label: 'Operational logic', detail: 'De regels achter de workflow vastleggen zodat het systeem consistent draait in plaats van op geheugen.' }
                    ]},
                    { number: '02', title: 'Systems', items: [
                        { label: 'Internal tools', detail: 'Praktische interne systemen maken die dagelijks werk makkelijker beheren en makkelijker schalen.' },
                        { label: 'CRM setup', detail: 'De CRM zo structureren dat contacten, leads en follow-up in een schoner werksysteem leven.' },
                        { label: 'Integrations', detail: 'De platforms die je al gebruikt verbinden zodat data en acties bewegen zonder extra admin.' }
                    ]},
                    { number: '03', title: 'AI', items: [
                        { label: 'AI workflows', detail: 'AI inzetten waar het frictie weghaalt, output versnelt en het team praktisch ondersteunt.' },
                        { label: 'Assistants', detail: 'Lichtgewicht assistants opzetten voor research, drafts, routing en repetitieve interne taken.' },
                        { label: 'Implementation support', detail: 'Het team helpen het systeem echt te gebruiken zodat de automation na setup blijft hangen.' }
                    ]}
                ],
                workPreviews: [{ title: 'Workflowsystemen' }, { title: 'Interne tools' }, { title: 'AI-automations' }],
                workIntro: 'Een paar voorbeelden van het soort Automate-werk dat we vormgeven over workflows, interne systemen en AI-support.',
                workVisualAlt: 'Preview van automationwerk',
                ctaVisualAlt: 'Visual voor volgende stap',
                finalTitle: 'Laten we het handmatige werk weghalen',
                finalIntro: 'Begin met een simpel gesprek en we bepalen samen de juiste richting. Het Partner Package is de snelste manier om dieper systemsupport met ons op te bouwen over tijd.',
                secondaryCtaLabel: 'Bekijk Partner Package',
                secondaryCtaHref: '/partner'
            }
        }
    },
    th: {
        processSteps: [
            { number: '01', title: 'คุยเบื้องต้น', line: 'เริ่มต้นและเช็กความเหมาะสม.' },
            { number: '02', title: 'วงคุย', line: 'คุณเล่า เราฟัง.' },
            { number: '03', title: 'สำรวจ', line: 'เรากำหนดทิศทาง.' },
            { number: '04', title: 'ลงมือสร้าง', line: 'ออกแบบและทำงานแบบเปิดเผย.' },
            { number: '05', title: 'เปิดใช้งาน', line: 'ปรับและส่งมอบ.' }
        ],
        services: {
            brand: {
                scopeGroups: [
                    { number: '01', title: 'Strategy', items: [
                        { label: 'Positioning', detail: 'กำหนดว่าแบรนด์ยืนอยู่ตรงไหน ถูกวางอย่างไร และทำไมผู้คนควรสนใจ.' },
                        { label: 'Messaging', detail: 'วางโครงภาษาหลักให้แบรนด์สื่อสารได้ชัด สม่ำเสมอ และเข้าใจง่าย.' },
                        { label: 'Brand direction', detail: 'กำหนดทิศทางครีเอทีฟโดยรวมให้ระบบรู้สึกมีเจตนาก่อนเริ่มงานดีไซน์.' }
                    ]},
                    { number: '02', title: 'Identity', items: [
                        { label: 'Logo design', detail: 'ออกแบบโลโก้ที่มีเอกลักษณ์ อ่านง่าย และแข็งแรงพอจะเป็นแกนของแบรนด์.' },
                        { label: 'Visual identity system', detail: 'สร้างระบบภาพลักษณ์ที่กว้างกว่าแค่สัญลักษณ์เดียว เพื่อให้แบรนด์ยังคงจดจำได้.' },
                        { label: 'Typography and color', detail: 'กำหนดกฎเรื่องตัวอักษรและสีให้แบรนด์รู้สึกสม่ำเสมอในทุกพื้นผิว.' }
                    ]},
                    { number: '03', title: 'Application', items: [
                        { label: 'Product mockups', detail: 'แสดงให้เห็นว่าแบรนด์ไปอยู่บนโปรดักต์ หน้าเว็บ และ launch assets อย่างไรก่อน rollout จริง.' },
                        { label: 'Packaging', detail: 'แปลระบบแบรนด์ไปสู่แพ็กเกจจิ้งที่ดูตั้งใจ พรีเมียม และพร้อมใช้งานจริง.' },
                        { label: 'Marketing & social visuals', detail: 'ขยายแบรนด์ไปสู่แคมเปญและ social assets ที่ยังคงรู้สึกเป็นระบบเดียวกัน.' }
                    ]}
                ],
                workPreviews: [{ title: 'ระบบอัตลักษณ์' }, { title: 'รีแบรนด์' }, { title: 'การประยุกต์ใช้' }],
                workIntro: 'ตัวอย่างบางส่วนของงาน Brand ที่เราดูแลตั้งแต่ระบบอัตลักษณ์ไปจนถึงการ rollout และการประยุกต์ใช้.',
                workVisualAlt: 'ตัวอย่างงาน Brand',
                ctaVisualAlt: 'ภาพประกอบขั้นถัดไป',
                finalTitle: 'มาสร้างแบรนด์ที่ยืนระยะได้จริง',
                finalIntro: 'เริ่มจากบทสนทนาง่าย ๆ แล้วเราจะช่วยหาทิศทางที่เหมาะสมไปด้วยกัน ถ้าคุณกำลังเริ่มจากศูนย์ Startup Package คือวิธีที่เร็วที่สุดในการวางระบบแบรนด์ให้ครบ.',
                secondaryCtaLabel: 'ดู Startup Package',
                secondaryCtaHref: '/startup'
            },
            build: {
                scopeGroups: [
                    { number: '01', title: 'Websites', items: [
                        { label: 'Marketing sites', detail: 'เว็บไซต์ระดับพรีเมียมที่สื่อสารชัด เคลื่อนเร็ว และช่วยให้การตัดสินใจเกิดขึ้นได้อย่างมั่นใจ.' },
                        { label: 'Landing pages', detail: 'หน้าเพจเฉพาะสำหรับแคมเปญ การเปิดตัว และข้อเสนอที่ต้องการเส้นทาง conversion ที่คมขึ้น.' },
                        { label: 'CMS setup', detail: 'ระบบคอนเทนต์ที่ทีมคุณอัปเดตเองได้จริงโดยไม่ทำลายดีไซน์หรือ flow.' }
                    ]},
                    { number: '02', title: 'Products', items: [
                        { label: 'Apps', detail: 'ประสบการณ์โปรดักต์ที่ดูสะอาด ใช้งานเข้าใจง่าย และพร้อมสำหรับผู้ใช้จริง.' },
                        { label: 'Dashboards', detail: 'แดชบอร์ดทั้งภายในและสำหรับผู้ใช้ที่ทำให้ข้อมูลซับซ้อนถูกนำไปใช้ได้ง่ายขึ้น.' },
                        { label: 'Flows', detail: 'core user flows ที่ลดแรงเสียดทานและทำให้โปรดักต์เดินหน้าได้.' }
                    ]},
                    { number: '03', title: 'Systems', items: [
                        { label: 'Frontend build', detail: 'งาน implement ที่สะอาด เปลี่ยนดีไซน์ที่คมให้กลายเป็นสิ่งที่พร้อมใช้งานจริง.' },
                        { label: 'Design systems', detail: 'ฐาน UI ที่นำกลับมาใช้ซ้ำได้ เพื่อให้โปรดักต์ยังสม่ำเสมอเมื่อเติบโต.' },
                        { label: 'Implementation support', detail: 'การซัพพอร์ตทางเทคนิคที่ทำให้การส่งมอบยังสอดคล้องตั้งแต่การตัดสินใจด้านดีไซน์ไปจนถึง launch.' }
                    ]}
                ],
                workPreviews: [{ title: 'เว็บไซต์การตลาด' }, { title: 'โปรดักต์' }, { title: 'ระบบ' }],
                workIntro: 'ตัวอย่างบางส่วนของงาน Build ที่เราดูแลครอบคลุมเว็บไซต์ โปรดักต์ และระบบ.',
                workVisualAlt: 'ตัวอย่างงาน Build',
                ctaVisualAlt: 'ภาพประกอบขั้นถัดไป',
                finalTitle: 'มาสร้างสิ่งที่คนใช้งานได้จริง',
                finalIntro: 'เริ่มจากบทสนทนาง่าย ๆ แล้วเราจะช่วยหาทิศทางที่เหมาะสมไปด้วยกัน Startup Package คือวิธีที่เร็วที่สุดในการวางทั้งโปรดักต์และระบบ launch ตั้งแต่ต้น.',
                secondaryCtaLabel: 'ดู Startup Package',
                secondaryCtaHref: '/startup'
            },
            grow: {
                scopeGroups: [
                    { number: '01', title: 'Social', items: [
                        { label: 'Social media management', detail: 'วางแผน จัดระบบ และดูแลช่องทาง social ให้แบรนด์ยังเคลื่อนไหว สม่ำเสมอ และมีประโยชน์ทางธุรกิจ.' },
                        { label: 'Content planning', detail: 'วางปฏิทินคอนเทนต์ตามแคมเปญ ข้อเสนอ การเปิดตัว และความสนใจที่คุณต้องการสร้าง.' },
                        { label: 'Creative direction', detail: 'ทำให้ output ยังดูคม เพื่อให้โพสต์ stories และแคมเปญ assets รู้สึกเป็นแนวเดียวกัน.' }
                    ]},
                    { number: '02', title: 'Ads', items: [
                        { label: 'Meta ads', detail: 'รันแคมเปญบน Meta ด้วยโครงสร้างที่ชัดขึ้น ครีเอทีฟที่ดีกว่า และ feedback ด้าน performance ที่แน่นขึ้น.' },
                        { label: 'Google ads', detail: 'สร้างแคมเปญ search และ intent-driven ที่เก็บดีมานด์ได้โดยไม่เผางบโดยไม่จำเป็น.' },
                        { label: 'Campaign setup', detail: 'วางบัญชี targeting conversion flow และโครงสร้างโฆษณาให้ performance มีฐานที่สะอาด.' }
                    ]},
                    { number: '03', title: 'Optimization', items: [
                        { label: 'Testing', detail: 'ทดสอบมุม ข้อความ format และ creative เพื่อหาว่าอะไรที่เปลี่ยนความสนใจให้กลายเป็นการลงมือทำจริง.' },
                        { label: 'Reporting', detail: 'ติดตามสิ่งที่สำคัญอย่างชัดเจน เพื่อให้การตัดสินใจมาจากสัญญาณ ไม่ใช่การเดา.' },
                        { label: 'Scaling', detail: 'เพิ่มงบและ output อย่างระมัดระวังเมื่อระบบเริ่มทำงาน โดยไม่เสียประสิทธิภาพเร็วเกินไป.' }
                    ]}
                ],
                workPreviews: [{ title: 'แคมเปญแบบชำระเงิน' }, { title: 'ระบบ Social' }, { title: 'วงจร Performance' }],
                workIntro: 'ตัวอย่างบางส่วนของงาน Grow ที่เราดูแล ทั้งแคมเปญแบบชำระเงิน ระบบ Social และการ optimize ต่อเนื่อง.',
                workVisualAlt: 'ตัวอย่างงาน Grow',
                ctaVisualAlt: 'ภาพประกอบขั้นถัดไป',
                finalTitle: 'มาขยายสิ่งที่มีศักยภาพอยู่แล้ว',
                finalIntro: 'เริ่มจากบทสนทนาง่าย ๆ แล้วเราจะช่วยหาทิศทางที่เหมาะสมไปด้วยกัน Scale Package คือวิธีที่เร็วที่สุดในการเชื่อม growth support เข้ากับ performance แบบต่อเนื่อง.',
                secondaryCtaLabel: 'ดู Scale Package',
                secondaryCtaHref: '/scale'
            },
            automate: {
                scopeGroups: [
                    { number: '01', title: 'Workflows', items: [
                        { label: 'Process automation', detail: 'ทำขั้นตอนซ้ำ ๆ ให้เป็นอัตโนมัติ เพื่อลดเวลาที่ทีมต้องขยับข้อมูลด้วยมือ.' },
                        { label: 'Task flows', detail: 'สร้าง flow ภายในที่สะอาดขึ้นสำหรับ handoff, follow-up, approvals และงาน routine.' },
                        { label: 'Operational logic', detail: 'วางกติกาที่อยู่หลัง workflow เพื่อให้ระบบทำงานสม่ำเสมอ ไม่ต้องพึ่งความจำของคน.' }
                    ]},
                    { number: '02', title: 'Systems', items: [
                        { label: 'Internal tools', detail: 'สร้างระบบภายในที่ใช้งานได้จริง ช่วยให้งานประจำวันจัดการง่ายขึ้นและขยายได้ง่ายขึ้น.' },
                        { label: 'CRM setup', detail: 'จัดโครงสร้าง CRM ให้ contact, lead และ follow-up อยู่ในระบบทำงานที่สะอาดกว่าเดิม.' },
                        { label: 'Integrations', detail: 'เชื่อมแพลตฟอร์มที่คุณใช้อยู่แล้วให้ข้อมูลและ action ไหลต่อกันได้โดยไม่ต้องทำ admin เพิ่ม.' }
                    ]},
                    { number: '03', title: 'AI', items: [
                        { label: 'AI workflows', detail: 'ใช้ AI ในจุดที่ช่วยลดแรงเสียดทาน เร่ง output และซัพพอร์ตทีมได้จริง.' },
                        { label: 'Assistants', detail: 'ตั้ง lightweight assistants สำหรับ research, drafting, routing และงานภายในที่ทำซ้ำ.' },
                        { label: 'Implementation support', detail: 'ช่วยทีมเอาระบบไปใช้จริง เพื่อให้ automation ใช้งานต่อได้หลังจาก setup.' }
                    ]}
                ],
                workPreviews: [{ title: 'ระบบเวิร์กโฟลว์' }, { title: 'เครื่องมือภายใน' }, { title: 'AI automations' }],
                workIntro: 'ตัวอย่างบางส่วนของงาน Automate ที่เราดูแล ทั้งเวิร์กโฟลว์ ระบบภายใน และ AI support.',
                workVisualAlt: 'ตัวอย่างงาน Automate',
                ctaVisualAlt: 'ภาพประกอบขั้นถัดไป',
                finalTitle: 'มาลดงาน manual ออกไป',
                finalIntro: 'เริ่มจากบทสนทนาง่าย ๆ แล้วเราจะช่วยหาทิศทางที่เหมาะสมไปด้วยกัน Partner Package คือวิธีที่เร็วที่สุดในการสร้าง systems support ที่ลึกขึ้นร่วมกับเราในระยะยาว.',
                secondaryCtaLabel: 'ดู Partner Package',
                secondaryCtaHref: '/partner'
            }
        }
    }
};

export const getServiceDetailContent = (locale: Locale): ServiceDetailContent =>
    serviceDetailContent[locale] ?? serviceDetailContent.en;
