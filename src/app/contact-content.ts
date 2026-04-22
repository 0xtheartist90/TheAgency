import type { Locale } from '@/app/site-content';

export type ContactPageContent = {
    introLabel: string;
    introTitle: string;
    introBody: string;
    introCards: string[];
    shareLabel: string;
    shareIntro: string;
    sharePoints: string[];
    finalLabel: string;
    finalTitle: string;
    finalBody: string;
    primaryCta: string;
    secondaryCta: string;
    contactLabel: string;
    contactTitle: string;
    contactBody: string;
    contactMethods: Array<{
        icon: 'calendar' | 'mail';
        title: string;
        value: string;
        href: string;
        cta: string;
    }>;
};

export const contactContent: Record<Locale, ContactPageContent> = {
    en: {
        introLabel: 'Contact',
        introTitle: 'A clear way to start the conversation.',
        introBody:
            'If the brand, product, or rollout needs to feel sharper, we can usually tell the right starting point pretty quickly.',
        introCards: [
            'Brand builds, websites, launches, and retained support.',
            'Best fit for founders, premium service brands, hospitality, and products moving upmarket.',
            'Bring the goal, timing, and what feels off. We will help shape the next move.'
        ],
        shareLabel: 'What to share',
        shareIntro: 'A few useful things to bring into the first conversation.',
        sharePoints: [
            'What you are building or trying to improve',
            'What feels misaligned right now',
            'Your rough timing and level of urgency',
            'Whether this feels closer to Startup, Scale, or Partner'
        ],
        finalLabel: 'Next',
        finalTitle: 'Start where the work becomes clearer.',
        finalBody:
            'If you want to see how we structure the work first, go through the package options. If you want to see the standard we hold things to, browse the portfolio.',
        primaryCta: 'View packages',
        secondaryCta: 'View Portfolio',
        contactLabel: 'Reach out',
        contactTitle: 'Book a time or send a note.',
        contactBody: 'Pick the route that fits best. Start with a quick meeting or send a short email and we will take it from there.',
        contactMethods: [
            {
                icon: 'calendar',
                title: 'Book a meeting',
                value: 'calendly.com/the-agency/intro',
                href: 'https://calendly.com/the-agency/intro',
                cta: 'Book on Calendly'
            },
            {
                icon: 'mail',
                title: 'Send an email',
                value: 'hello@theagency.studio',
                href: 'mailto:hello@theagency.studio',
                cta: 'Email us'
            }
        ]
    },
    nl: {
        introLabel: 'Contact',
        introTitle: 'Een duidelijke manier om het gesprek te starten.',
        introBody:
            'Als het merk, product of de rollout scherper moet aanvoelen, kunnen we meestal snel zien wat het juiste beginpunt is.',
        introCards: [
            'Brand builds, websites, lanceringen en langdurige support.',
            'Beste match voor founders, premium servicemerken, hospitality en producten die hoger in de markt willen staan.',
            'Breng het doel, de timing en wat nu niet klopt mee. Dan bepalen we de volgende stap.'
        ],
        shareLabel: 'Wat je kunt delen',
        shareIntro: 'Een paar nuttige dingen om mee te nemen naar het eerste gesprek.',
        sharePoints: [
            'Wat je bouwt of wilt verbeteren',
            'Wat er nu niet goed op zijn plek voelt',
            'Je globale timing en urgentie',
            'Of dit dichter bij Startup, Scale of Partner ligt'
        ],
        finalLabel: 'Volgende',
        finalTitle: 'Begin waar het werk duidelijker wordt.',
        finalBody:
            'Als je eerst wilt zien hoe we het werk structureren, bekijk dan de pakketten. Als je eerst de kwaliteitslat wilt zien, blader dan door het portfolio.',
        primaryCta: 'Bekijk pakketten',
        secondaryCta: 'Bekijk Portfolio',
        contactLabel: 'Contact opnemen',
        contactTitle: 'Plan iets in of stuur een bericht.',
        contactBody: 'Kies de route die het makkelijkst is. Begin met een korte meeting of stuur een korte mail, dan pakken we het vanaf daar op.',
        contactMethods: [
            {
                icon: 'calendar',
                title: 'Plan een meeting',
                value: 'calendly.com/the-agency/intro',
                href: 'https://calendly.com/the-agency/intro',
                cta: 'Open Calendly'
            },
            {
                icon: 'mail',
                title: 'Stuur een mail',
                value: 'hello@theagency.studio',
                href: 'mailto:hello@theagency.studio',
                cta: 'Mail ons'
            }
        ]
    },
    th: {
        introLabel: 'ติดต่อ',
        introTitle: 'เริ่มบทสนทนาได้อย่างชัดเจน.',
        introBody:
            'ถ้าคุณอยากให้แบรนด์ โปรดักต์ หรือการปล่อยงานคมขึ้น เรามักดูออกได้ค่อนข้างเร็วว่าควรเริ่มตรงไหน.',
        introCards: [
            'งานสร้างแบรนด์ เว็บไซต์ การเปิดตัว และการซัพพอร์ตระยะยาว.',
            'เหมาะกับผู้ก่อตั้ง แบรนด์บริการระดับพรีเมียม hospitality และโปรดักต์ที่กำลังยกระดับ.',
            'บอกเป้าหมาย ไทม์ไลน์ และสิ่งที่ยังไม่ลงตัวมา แล้วเราจะช่วยจัดก้าวถัดไป.'
        ],
        shareLabel: 'สิ่งที่ควรบอกเรา',
        shareIntro: 'ข้อมูลสั้น ๆ ที่ช่วยให้การคุยครั้งแรกมีประโยชน์มากขึ้น.',
        sharePoints: [
            'คุณกำลังสร้างหรืออยากปรับอะไร',
            'ตอนนี้มีอะไรที่ยังไม่ลงตัว',
            'ไทม์ไลน์คร่าว ๆ และระดับความเร่งด่วน',
            'งานนี้ใกล้กับ Startup, Scale หรือ Partner มากกว่า'
        ],
        finalLabel: 'ต่อไป',
        finalTitle: 'เริ่มจากจุดที่ทำให้งานชัดขึ้น.',
        finalBody:
            'ถ้าคุณอยากดูโครงสร้างการทำงานก่อน ให้เริ่มจากแพ็กเกจต่าง ๆ ถ้าอยากดูมาตรฐานของงานก่อน ให้ดูพอร์ตโฟลิโอ.',
        primaryCta: 'ดูแพ็กเกจ',
        secondaryCta: 'ดูพอร์ตโฟลิโอ',
        contactLabel: 'ติดต่อเรา',
        contactTitle: 'นัดเวลาไว้หรือส่งข้อความมาได้เลย.',
        contactBody: 'เลือกช่องทางที่สะดวกที่สุดได้เลย เริ่มจากนัดคุยสั้น ๆ หรือส่งอีเมลมาก่อน แล้วเราจะช่วยต่อจากตรงนั้น.',
        contactMethods: [
            {
                icon: 'calendar',
                title: 'นัดประชุม',
                value: 'calendly.com/the-agency/intro',
                href: 'https://calendly.com/the-agency/intro',
                cta: 'จองผ่าน Calendly'
            },
            {
                icon: 'mail',
                title: 'ส่งอีเมล',
                value: 'hello@theagency.studio',
                href: 'mailto:hello@theagency.studio',
                cta: 'ส่งอีเมล'
            }
        ]
    }
};

export const getContactContent = (locale: Locale) => contactContent[locale];
