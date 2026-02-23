import avatar from '../assets/images/ruteze.png';
import hero from '../assets/images/yo.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://raschomakuin.github.io/Portfolio',
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    title: 'Senior Data & Analytics Engineer',
    subtitle: 'Integración, modelado y arquitectura analítica en entornos productivos.',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/yo.png',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Datos confiables. Sistemas automatizados. Decisiones estratégicas.',
        text: "Soy profesional senior en análisis e ingeniería de datos con experiencia en la construcción de soluciones end-to-end: desde la integración y modelado en Databricks y bases Oracle, hasta la visualización estratégica en Power BI y Looker. He trabajado con arquitecturas modernas basadas en Dataverse y entornos productivos con actualización automatizada, desarrollando Data Marts analíticos y procesos programados para consumo interno y externo. Mi formación técnica incluye conocimientos de desarrollo backend, lo que me permite comprender integraciones, estructuras de datos y flujos completos de información más allá del análisis tradicional.",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
