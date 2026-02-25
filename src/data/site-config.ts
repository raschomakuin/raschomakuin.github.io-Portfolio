import avatar from '../assets/images/yo.jpg';
import hero from '../assets/images/yo.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://raschomakuin.github.io/Portfolio',
    avatar: {
        src: avatar
    },
    title: 'Senior Data & Analytics Engineer',
    subtitle: 'Integración, modelado y arquitectura analítica en entornos productivos.',
    description: 'Portfolio profesional en análisis e ingeniería de datos.',
    image: {
        src: '/yo.png',
        alt: 'Rodrigo Palacio - Data & Analytics'
    },
    headerNavLinks: [
        {
            text: '🔵 Inicio',
            href: '/'
        },
        {
            text: '🟢 Soluciones',
            href: '/blog'
        },
        {
            text: '🟣 Sobre mí',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'Sobre mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/palaciorodri/'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/rodrigo-sebastian-palacio-schunke-07438613a/'
        }
    ],
    hero: {
        title: 'Rodrigo Sebastián Palacio Schunke',
        text: "Soy profesional senior en análisis e ingeniería de datos con experiencia en la construcción de soluciones end-to-end: desde la integración y modelado en Databricks y bases Oracle, hasta la visualización estratégica en herramientas de visualización. He trabajado con arquitecturas modernas basadas en Dataverse y entornos productivos con actualización automatizada, desarrollando Data Marts analíticos y procesos programados para consumo interno y externo.",
        image: {
            src: hero,
            alt: 'Rodrigo trabajando en análisis de datos'
        },
        actions: [
            {
                text: 'Nos pongamos en contacto',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
