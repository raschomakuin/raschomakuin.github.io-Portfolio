import avatar from '../assets/images/yo.jpg';
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
            text: 'Inicio',
            href: '/'
        },
        {
            text: '🔹 Soluciones Analíticas',
            href: '/projects'
        },
        {
            text: '🔹 Arquitectura y Data Engineering',
            href: '/blog'
        },
        {
            text: '🔹 Presentación y tecnologías',
            href: '/about.md'
        }
    ],
    footerNavLinks: [
        {
            text: 'Sobre mi',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Whatsapp',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/palaciorodri/'
        },
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/rodrigo-sebastian-palacio-schunke-07438613a/'
        }
    ],
    hero: {
        title: 'Datos confiables, sistemas automatizados y decisiones estratégicas.',
        text: "Soy profesional senior en análisis e ingeniería de datos con experiencia en la construcción de soluciones end-to-end: desde la integración y modelado en Databricks y bases Oracle, hasta la visualización estratégica en Power BI y Looker. He trabajado con arquitecturas modernas basadas en Dataverse y entornos productivos con actualización automatizada, desarrollando Data Marts analíticos y procesos programados para consumo interno y externo. Mi formación técnica incluye conocimientos de desarrollo backend, lo que me permite comprender integraciones, estructuras de datos y flujos completos de información más allá del análisis tradicional.",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Nos pongamos en contacto',
                href: '/contact'
            }
        ]
    }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
