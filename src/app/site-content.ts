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
        workWithUs: string;
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
            ctaPrimary: 'View Portfolio',
            ctaSecondary: 'Discover Our Story',
            supportLabel: 'Contact Us'
        },
        nav: {
            story: 'Our Story',
            services: 'Services',
            work: 'Portfolio',
            workWithUs: 'Work With Us',
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
                title: 'Portfolio',
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
            eyebrow: 'Internationaal in visie. Gemaakt voor merken met ambitie.',
            ctaPrimary: 'Bekijk portfolio',
            ctaSecondary: 'Ontdek ons verhaal',
            supportLabel: 'Contact'
        },
        nav: {
            story: 'Ons verhaal',
            services: 'Diensten',
            work: 'Portfolio',
            workWithUs: 'Werk met ons',
            contact: 'Contact'
        },
        pages: {
            story: {
                title: 'Ons verhaal',
                intro: 'We bouwen met intentie.',
                sections: [
                    'Binnen merken. Binnen startups.',
                    'We hebben gezien wat werkt.',
                    'En wat niet.'
                ]
            },
            services: {
                title: 'Diensten',
                intro: 'Een compact senior creatief team voor merken die smaak en uitvoering in dezelfde ruimte nodig hebben.',
                sections: [
                    'Merkstrategie, positionering, naamrichting en messaging-architectuur.',
                    'Identity systems, premium webdesign, landingspagina\'s en conversiegerichte digitale ervaringen.',
                    'Campagnecreatie, paid ad-concepten, contentsystemen en art direction voor lanceringen.'
                ]
            },
            work: {
                title: 'Portfolio',
                intro: 'We creëren merkwerelden die premium aanvoelen, soepel bewegen en doelgericht verkopen.',
                sections: [
                    'Launchcampagnes die aandacht omzetten in vraag.',
                    'Premium websites die een aanbod waardevoller laten voelen nog vóór de eerste klik.',
                    'Creatieve systemen die kwaliteit op elk kanaal consistent houden.'
                ]
            },
            contact: {
                title: 'Contact',
                intro: 'Als je wilt dat je merk duurder, preciezer en memorabeler aanvoelt, moeten we praten.',
                sections: [
                    'Beschikbaar voor merktrajecten, website redesigns, lanceringen en langdurige creatieve samenwerkingen.',
                    'Beste match: founders, premium servicemerken, hospitalityconcepten en producten die een nieuw niveau ingaan.',
                    'Deel je timing, doelen en wat nu niet klopt. Van daaruit bepalen we de volgende stap.'
                ]
            }
        }
    },
    th: {
        localeLabel: 'ไทย',
        switchLabel: 'ภาษา',
        home: {
            eyebrow: 'มุมมองระดับสากล สร้างมาเพื่อแบรนด์ที่มีความทะเยอทะยาน',
            ctaPrimary: 'ดูพอร์ตโฟลิโอ',
            ctaSecondary: 'รู้จักเรื่องราวของเรา',
            supportLabel: 'ติดต่อเรา'
        },
        nav: {
            story: 'เรื่องราวของเรา',
            services: 'บริการ',
            work: 'พอร์ตโฟลิโอ',
            workWithUs: 'ร่วมงานกับเรา',
            contact: 'ติดต่อ'
        },
        pages: {
            story: {
                title: 'เรื่องราวของเรา',
                intro: 'เราสร้างอย่างมีเจตนา',
                sections: [
                    'เราเคยทำงานทั้งในแบรนด์ใหญ่และสตาร์ตอัป',
                    'เราเห็นมาทั้งสิ่งที่เวิร์ก',
                    'และสิ่งที่ไม่เวิร์ก'
                ]
            },
            services: {
                title: 'บริการ',
                intro: 'ทีมสร้างสรรค์ระดับซีเนียร์ที่กระชับ แต่ครบทั้งรสนิยมและการลงมือทำ',
                sections: [
                    'กลยุทธ์แบรนด์ การวางตำแหน่ง การตั้งชื่อ และโครงสร้างข้อความสื่อสาร',
                    'ระบบอัตลักษณ์ ดีไซน์เว็บไซต์ระดับพรีเมียม แลนดิ้งเพจ และประสบการณ์ดิจิทัลที่เน้นการเปลี่ยนเป็นลูกค้า',
                    'ครีเอทีฟแคมเปญ คอนเซปต์โฆษณา ระบบคอนเทนต์ และอาร์ตไดเรกชันสำหรับการเปิดตัว'
                ]
            },
            work: {
                title: 'พอร์ตโฟลิโอ',
                intro: 'เราสร้างโลกของแบรนด์ที่ดูยกระดับ ลื่นไหล และขายอย่างมีเป้าหมาย',
                sections: [
                    'แคมเปญเปิดตัวที่เปลี่ยนความสนใจให้กลายเป็นความต้องการ',
                    'เว็บไซต์ระดับพรีเมียมที่ทำให้ข้อเสนอของแบรนด์ดูมีมูลค่าสูงขึ้นก่อนคลิกแรก',
                    'ระบบครีเอทีฟที่ทำให้คุณภาพสม่ำเสมอในทุกช่องทาง'
                ]
            },
            contact: {
                title: 'ติดต่อ',
                intro: 'ถ้าคุณอยากให้แบรนด์ดูแพงขึ้น คมขึ้น และน่าจดจำขึ้น เราควรคุยกัน',
                sections: [
                    'พร้อมรับงานสร้างแบรนด์ใหม่ รีดีไซน์เว็บไซต์ เปิดตัวแคมเปญ และพาร์ตเนอร์เชิงครีเอทีฟระยะยาว',
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
