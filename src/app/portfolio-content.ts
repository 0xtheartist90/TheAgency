export type PortfolioProject = {
    slug: string;
    number: string;
    category: string;
    title: string;
    summary: string;
    tags: readonly string[];
    intro: string;
    overview: string;
    deliverables: readonly string[];
    visual?: string;
    visualAlt?: string;
    visualContain?: boolean;
};

export const portfolioProjects: readonly PortfolioProject[] = [
    {
        slug: 'birdiez',
        number: '01',
        category: 'Brand',
        title: 'Birdiez',
        summary: 'Luxury identity system and launch-ready brand rollout.',
        tags: ['Identity', 'Packaging', 'Launch assets'],
        intro: 'A brand-led project shaped to feel clean, memorable, and ready for launch.',
        overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
        deliverables: ['Brand identity', 'Packaging direction', 'Launch-ready assets']
    },
    {
        slug: 'fanflow',
        number: '02',
        category: 'Build',
        title: 'Fanflow',
        summary: 'Premium website concept for a service-led business.',
        tags: ['Web design', 'Development', 'Content system'],
        intro: 'A product and website build focused on clarity, experience, and clean rollout.',
        overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
        deliverables: ['Website design', 'Development', 'Content structure'],
        visual: '/images/Portfolio/Fanflow logo.png',
        visualAlt: 'Fanflow logo',
        visualContain: true
    },
    {
        slug: 'msports',
        number: '03',
        category: 'Grow',
        title: 'MSports',
        summary: 'Paid growth campaign structure and creative direction.',
        tags: ['Meta ads', 'Google ads', 'Optimization'],
        intro: 'A growth-focused engagement built around acquisition, testing, and performance.',
        overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
        deliverables: ['Paid campaign setup', 'Creative direction', 'Reporting structure']
    },
    {
        slug: 'amplify',
        number: '04',
        category: 'Automate',
        title: 'Amplify',
        summary: 'Internal workflow automation for a faster client operation.',
        tags: ['Automation', 'CRM', 'AI workflow'],
        intro: 'An automation project designed to reduce friction and improve day-to-day execution.',
        overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
        deliverables: ['Workflow logic', 'System setup', 'Internal automation']
    },
    {
        slug: 'prysmic',
        number: '05',
        category: 'Brand',
        title: 'Prysmic',
        summary: 'Rebrand concept for a modern hospitality-led business.',
        tags: ['Rebrand', 'Positioning', 'Visual system'],
        intro: 'A sharper brand direction built to elevate perception and create consistency.',
        overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
        deliverables: ['Rebrand direction', 'Positioning', 'Visual identity']
    },
    {
        slug: 'cutie-nails',
        number: '06',
        category: 'Build',
        title: 'Cutie Nails',
        summary: 'Conversion-focused storefront and product experience.',
        tags: ['E-commerce', 'UX', 'Frontend'],
        intro: 'A digital build focused on usability, product flow, and a more premium feel.',
        overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
        deliverables: ['Storefront build', 'UX design', 'Frontend implementation']
    },
    {
        slug: 'ultimate-shape',
        number: '07',
        category: 'Grow',
        title: 'Ultimate Shape',
        summary: 'Social content and paid acquisition system for steady growth.',
        tags: ['Social', 'Paid media', 'Reporting'],
        intro: 'A growth system designed to support consistency, reach, and measurable momentum.',
        overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
        deliverables: ['Content system', 'Paid acquisition', 'Performance reporting']
    },
    {
        slug: '0xlabs',
        number: '08',
        category: 'Automate',
        title: '0xLabs',
        summary: 'Lead routing and follow-up automations across the funnel.',
        tags: ['Lead flow', 'Integrations', 'Operations'],
        intro: 'An operations-focused project built to improve handoff, follow-up, and internal speed.',
        overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
        deliverables: ['Lead routing', 'Integrations', 'Operational systems']
    },
    {
        slug: 'goldenbeauty',
        number: '09',
        category: 'Brand + Build',
        title: 'GoldenBeauty',
        summary: 'Full launch direction across identity, site, and assets.',
        tags: ['Brand', 'Website', 'Launch'],
        intro: 'A full-scope project combining brand direction, build, and rollout support.',
        overview: 'This page is set up as a compact case study shell, ready for final visuals, project story, and outcome details.',
        deliverables: ['Brand direction', 'Website', 'Launch assets']
    }
] as const;

export const getPortfolioProjectBySlug = (slug: string) =>
    portfolioProjects.find((project) => project.slug === slug);
