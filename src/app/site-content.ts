export const locales = ['en', 'nl', 'th'] as const;

export type Locale = (typeof locales)[number];

export type NavItem = {
    href: string;
    label: string;
};

export type SiteCopy = {
    localeLabel: string;
    switchLabel: string;
    home: {
        eyebrow: string;
        ctaPrimary: string;
        ctaSecondary: string;
        supportLabel: string;
    };
    nav: {
        story: string;
        services: string;
        work: string;
        contact: string;
    };
    pages: {
        story: {
            title: string;
            intro: string;
            sections: string[];
        };
        services: {
            title: string;
            intro: string;
            sections: string[];
        };
        work: {
            title: string;
            intro: string;
            sections: string[];
        };
        contact: {
            title: string;
            intro: string;
            sections: string[];
        };
    };
};

export const defaultLocale: Locale = 'en';

export const siteCopy: Record<Locale, SiteCopy> = {
    en: {
        localeLabel: 'English',
        switchLabel: 'Language',
        home: {
            eyebrow: 'Not an agency',
            ctaPrimary: 'View Our Work',
            ctaSecondary: 'Discover Our Story',
            supportLabel: 'Contact Us'
        },
        nav: {
            story: 'Our Story',
            services: 'Services',
            work: 'Our Work',
            contact: 'Contact'
        },
        pages: {
            story: {
                title: 'Our Story',
                intro: 'We build with intent.',
                sections: [
                    'Inside brands. Inside startups.',
                    'We’ve seen what works.',
                    'And what doesn’t.'
                ]
            },
            services: {
                title: 'Services',
                intro: 'A tight, senior-level creative stack for brands that need taste and execution in the same room.',
                sections: [
                    'Brand strategy, positioning, naming direction, and messaging architecture.',
                    'Identity systems, premium website design, landing pages, and conversion-led digital experiences.',
                    'Campaign creative, paid ad concepts, content systems, and launch art direction.'
                ]
            },
            work: {
                title: 'Our Work',
                intro: 'We create brand worlds that look elevated, move cleanly, and sell with intent.',
                sections: [
                    'Launch campaigns that turn attention into demand.',
                    'Premium websites that make an offer feel more valuable before the first click.',
                    'Creative systems that keep quality consistent across every channel.'
                ]
            },
            contact: {
                title: 'Contact',
                intro: 'If you want the brand to feel more expensive, more precise, and more memorable, we should talk.',
                sections: [
                    'Available for brand builds, website redesigns, launches, and retained creative partnerships.',
                    'Best fit: founders, premium service brands, hospitality concepts, and products entering a new tier.',
                    'Share your timeline, goals, and what currently feels misaligned. We will shape the next move from there.'
                ]
            }
        }
    },
    nl: {
        localeLabel: 'Nederlands',
        switchLabel: 'Taal',
        home: {
            eyebrow: 'Internationaal in visie. Gemaakt voor wereldwijde merken.',
            ctaPrimary: 'Bekijk Ons Werk',
            ctaSecondary: 'Ontdek Ons Verhaal',
            supportLabel: 'Contact'
        },
        nav: {
            story: 'Ons Verhaal',
            services: 'Diensten',
            work: 'Ons Werk',
            contact: 'Contact'
        },
        pages: {
            story: {
                title: 'Ons Verhaal',
                intro: 'Wij bouwen met intentie.',
                sections: [
                    'Luxe mag snel bewegen.',
                    'Alles is verbonden.',
                    'Helderheid schaalt.'
                ]
            },
            services: {
                title: 'Diensten',
                intro: 'Een compacte senior-level creatieve stack voor merken die smaak en uitvoering in één ruimte nodig hebben.',
                sections: [
                    'Merkstrategie, positionering, naming-richting en messaging-architectuur.',
                    'Identity systems, premium webdesign, landingspagina’s en conversiegerichte digitale ervaringen.',
                    'Campagnecreatie, paid ad concepten, contentsystemen en art direction voor lanceringen.'
                ]
            },
            work: {
                title: 'Ons Werk',
                intro: 'Wij creëren merkwerelden die premium ogen, vloeiend bewegen en doelgericht verkopen.',
                sections: [
                    'Launchcampagnes die aandacht omzetten in vraag.',
                    'Premium websites die een aanbod waardevoller laten voelen nog voor de eerste klik.',
                    'Creatieve systemen die kwaliteit over alle kanalen consistent houden.'
                ]
            },
            contact: {
                title: 'Contact',
                intro: 'Als je wilt dat het merk duurder, preciezer en memorabeler aanvoelt, moeten we praten.',
                sections: [
                    'Beschikbaar voor merkopbouw, website redesigns, lanceringen en langdurige creatieve partnerships.',
                    'Beste match: founders, premium service merken, hospitality concepten en producten die een nieuw niveau ingaan.',
                    'Deel je timing, doelen en wat nu niet klopt. Van daaruit bepalen we de volgende stap.'
                ]
            }
        }
    },
    th: {
        localeLabel: 'ไทย',
        switchLabel: 'ภาษา',
        home: {
            eyebrow: 'มุมมองระดับสากล สร้างมาเพื่อแบรนด์ระดับโลก',
            ctaPrimary: 'ดูผลงานของเรา',
            ctaSecondary: 'รู้จักเรื่องราวของเรา',
            supportLabel: 'ติดต่อเรา'
        },
        nav: {
            story: 'เรื่องราวของเรา',
            services: 'บริการ',
            work: 'ผลงาน',
            contact: 'ติดต่อ'
        },
        pages: {
            story: {
                title: 'เรื่องราวของเรา',
                intro: 'เราสร้างอย่างมีเจตนา',
                sections: [
                    'ความลักชัวรีควรไปได้เร็ว',
                    'ทุกอย่างเชื่อมถึงกัน',
                    'ความชัดเจนทำให้ขยายต่อได้'
                ]
            },
            services: {
                title: 'บริการ',
                intro: 'ทีมสร้างสรรค์ระดับซีเนียร์ที่กระชับ แต่ครบทั้งรสนิยมและการลงมือทำ',
                sections: [
                    'กลยุทธ์แบรนด์ การวางตำแหน่ง การตั้งชื่อ และโครงสร้างข้อความสื่อสาร',
                    'ระบบอัตลักษณ์ ดีไซน์เว็บไซต์ระดับพรีเมียม แลนดิ้งเพจ และประสบการณ์ดิจิทัลที่ขับเคลื่อนการเปลี่ยนเป็นลูกค้า',
                    'ครีเอทีฟแคมเปญ คอนเซปต์โฆษณา ระบบคอนเทนต์ และอาร์ตไดเรกชันสำหรับการเปิดตัว'
                ]
            },
            work: {
                title: 'ผลงาน',
                intro: 'เราสร้างโลกของแบรนด์ที่ดูยกระดับ เคลื่อนไหวอย่างสะอาด และขายอย่างมีเป้าหมาย',
                sections: [
                    'แคมเปญเปิดตัวที่เปลี่ยนความสนใจให้กลายเป็นความต้องการ',
                    'เว็บไซต์ระดับพรีเมียมที่ทำให้ข้อเสนอของแบรนด์ดูมีมูลค่าสูงขึ้นก่อนคลิกแรก',
                    'ระบบครีเอทีฟที่ทำให้คุณภาพสม่ำเสมอในทุกช่องทาง'
                ]
            },
            contact: {
                title: 'ติดต่อ',
                intro: 'ถ้าคุณอยากให้แบรนด์ดูแพงขึ้น แม่นขึ้น และน่าจดจำขึ้น เราควรคุยกัน',
                sections: [
                    'พร้อมรับงานสร้างแบรนด์ใหม่ รีดีไซน์เว็บไซต์ เปิดตัวแคมเปญ และงานพาร์ตเนอร์เชิงครีเอทีฟระยะยาว',
                    'เหมาะที่สุดกับผู้ก่อตั้ง แบรนด์บริการระดับพรีเมียม ธุรกิจ hospitality และโปรดักต์ที่กำลังยกระดับแบรนด์',
                    'ส่งไทม์ไลน์ เป้าหมาย และสิ่งที่ยังไม่ลงตัวมาให้เรา แล้วเราจะช่วยกำหนดก้าวต่อไป'
                ]
            }
        }
    }
};

export const getCopy = (locale: string): SiteCopy => {
    return siteCopy[(locales as readonly string[]).includes(locale) ? (locale as Locale) : defaultLocale];
};

export const getNavItems = (locale: string): NavItem[] => {
    const copy = getCopy(locale);

    return [
        { href: `/${locale}/story`, label: copy.nav.story },
        { href: `/${locale}/services`, label: copy.nav.services },
        { href: `/${locale}/work`, label: copy.nav.work }
    ];
};
