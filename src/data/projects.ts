export interface Project {
  titleEn: string;
  titleEs: string;
  descriptionEn: string;
  descriptionEs: string;
  tech: string[];
  highlights: {
    en: string[];
    es: string[];
  };
  link?: string;
  category?: 'key' | 'personal';
}

export const projects: Project[] = [
  {
    titleEn: 'ICE3 — Community Health Network',
    titleEs: 'ICE3 — Community Health Network',
    descriptionEn: 'Custom OpenEMR modules and reporting for behavioral health workflows',
    descriptionEs: 'Módulos personalizados de OpenEMR y reportes para flujos de salud conductual',
    tech: ['PHP', 'OpenEMR', 'MariaDB', 'jQuery', 'Bootstrap', 'Playwright'],
    link: 'https://mychn.org/',
    category: 'key',
    highlights: {
      en: [
        'Developed custom OpenEMR modules and clinical forms for behavioral health and substance use treatment',
        'Designed an idempotent SQL migration framework for consistent deployments across environments',
        'Built reporting dashboards, payment agreements and referral tracking with KPI summaries',
      ],
      es: [
        'Módulos personalizados de OpenEMR y formularios clínicos para salud conductual y tratamiento de adicciones',
        'Framework de migraciones SQL idempotente para despliegues consistentes entre entornos',
        'Dashboards de reportes, acuerdos de pago y seguimiento de referencias con KPIs',
      ],
    },
  },
  {
    titleEn: 'Ticket To Go — Event Management Platform',
    titleEs: 'Ticket To Go — Plataforma de Gestión de Eventos',
    descriptionEn: 'Administrative tooling for events, venues, seating and ticket configuration',
    descriptionEs:
      'Herramientas administrativas para eventos, recintos, asientos y configuración de boletos',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Material UI', 'GCP', 'Sentry'],
    link: 'https://www.tickettogo.com.mx/',
    category: 'key',
    highlights: {
      en: [
        'Developed admin features for event, venue, seating and ticket configuration workflows',
        'Created reusable UI components to reduce hardcoded implementations',
        'Integrated Sentry across frontend and backend to improve error visibility',
      ],
      es: [
        'Funciones administrativas para configuración de eventos, recintos, asientos y boletos',
        'Componentes de UI reutilizables para reducir implementaciones hardcodeadas',
        'Integración de Sentry en frontend y backend para mejorar la visibilidad de errores',
      ],
    },
  },
  {
    titleEn: 'COGSZ — Cost of Goods Sold Platform',
    titleEs: 'COGSZ — Plataforma de Costos',
    descriptionEn: 'Cost management platform for enterprise clients',
    descriptionEs: 'Plataforma de gestión de costos para clientes empresariales',
    tech: ['TypeScript', 'Next.js', 'NestJS', 'AWS'],
    link: 'https://cogsz.com/',
    category: 'key',
    highlights: {
      en: [
        'Developed secure authentication and authorization for enterprise users',
        'Integrated APIs and transformed business data for customer management and cost allocation',
        'Implemented form validation and input-handling logic for critical workflows',
      ],
      es: [
        'Autenticación y autorización seguras para usuarios empresariales',
        'Integración de APIs y transformación de datos para gestión de clientes y asignación de costos',
        'Validación de formularios y manejo de inputs en flujos críticos',
      ],
    },
  },
  {
    titleEn: 'Niu Pay — Fintech for Government',
    titleEs: 'Niu Pay — Fintech para Gobierno',
    descriptionEn: 'Secure payment platform for government services',
    descriptionEs: 'Plataforma de pagos segura para servicios gubernamentales',
    tech: ['PHP', 'Laravel', 'MySQL', 'AWS', 'Datadog', 'New Relic'],
    link: 'https://niupay.com.pg/',
    category: 'key',
    highlights: {
      en: [
        'Implemented application monitoring and observability with Datadog and New Relic',
        'Collaborated with DevOps on production deployments and issue resolution',
        'Established Git workflow standards and dependency security practices',
      ],
      es: [
        'Monitoreo y observabilidad de la aplicación con Datadog y New Relic',
        'Colaboración con DevOps en despliegues y resolución de incidentes',
        'Estándares de Git y gestión de dependencias con enfoque de seguridad',
      ],
    },
  },
  {
    titleEn: 'Stellar Menus — Restaurant SaaS',
    titleEs: 'Stellar Menus — SaaS para Restaurantes',
    descriptionEn: 'Restaurant SaaS platform with multi-app authentication',
    descriptionEs: 'Plataforma SaaS para restaurantes con autenticación multi-aplicación',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS Cognito', 'AWS Lambda'],
    link: 'https://stellarmenus.com/',
    category: 'key',
    highlights: {
      en: [
        'Implemented AWS Cognito authentication across multiple frontends with independent Node.js backends',
        'Built session management and token refresh flows for secure cross-application access',
        'Developed Lambda automations triggered by Cognito events and fixed database connection bottlenecks',
      ],
      es: [
        'Autenticación con AWS Cognito en múltiples frontends con backends Node.js independientes',
        'Gestión de sesiones y refresh de tokens para acceso seguro entre aplicaciones',
        'Automatizaciones Lambda disparadas por eventos de Cognito y solución de cuellos de botella de conexión',
      ],
    },
  },
  {
    titleEn: 'OrderBot "Bella" — AI Restaurant Ordering Agent',
    titleEs: 'OrderBot "Bella" — Agente de Pedidos con IA',
    descriptionEn:
      'Production AI ordering agent that handles menus, multi-turn conversations and order registration',
    descriptionEs:
      'Agente de pedidos con IA en producción que gestiona menús, conversaciones multi-turno y registro de pedidos',
    tech: ['n8n', 'DeepSeek', 'PostgreSQL', 'OpenAI-Compatible API'],
    category: 'personal',
    highlights: {
      en: [
        'Built the agent on self-hosted n8n with session-scoped conversation memory',
        'Kept pricing, fees and order commits in PostgreSQL stored functions inside a single ACID transaction',
        'Configured five agent tools and authored 40+ QA cases covering prompt injection and PII leakage',
      ],
      es: [
        'Agente construido sobre n8n autoalojado con memoria de conversación por sesión',
        'Precios, cargos y confirmación de pedidos en funciones almacenadas de PostgreSQL dentro de una transacción ACID',
        'Cinco herramientas del agente y más de 40 casos de QA que cubren prompt injection y fuga de PII',
      ],
    },
  },
  {
    titleEn: 'vConsultores — Corporate Law Firm Website',
    titleEs: 'vConsultores — Sitio Web de Despacho Jurídico',
    descriptionEn:
      'Multi-page website built at Wenova for a Saltillo law, fiscal and corporate firm',
    descriptionEs:
      'Sitio multipágina desarrollado en Wenova para un despacho jurídico, fiscal y corporativo de Saltillo',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'JSON-LD', 'Nginx'],
    link: 'https://www.vconsultores.mx/',
    category: 'personal',
    highlights: {
      en: [
        'Built a multi-page architecture for practice areas, team profiles and contact',
        'Implemented SEO metadata, LegalService structured data and legal pages',
        'Created responsive navigation and progressive reveal animations',
      ],
      es: [
        'Arquitectura multipágina para áreas de práctica, perfiles del equipo y contacto',
        'Metadatos SEO, datos estructurados LegalService y páginas legales',
        'Navegación responsiva y animaciones de revelado con mejora progresiva',
      ],
    },
  },
  {
    titleEn: 'Olson WRM — Industrial Roofing Website',
    titleEs: 'Olson WRM — Sitio Web de Impermeabilización Industrial',
    descriptionEn: 'Marketing site built at Wenova for an industrial roof restoration company',
    descriptionEs:
      'Sitio comercial desarrollado en Wenova para una empresa de restauración de techos industriales',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Lucide', 'GTM', 'S3 + CloudFront'],
    link: 'https://www.olsonwrm.com/',
    category: 'personal',
    highlights: {
      en: [
        'Built the service catalog, FAQ and lead-capture flows',
        'Implemented SEO metadata and RoofingContractor structured data',
        'Integrated Google Tag Manager and deployed static assets to S3 + CloudFront',
      ],
      es: [
        'Catálogo de servicios, FAQ y flujos de captación de leads',
        'Metadatos SEO y datos estructurados RoofingContractor',
        'Integración de Google Tag Manager y despliegue de assets estáticos en S3 + CloudFront',
      ],
    },
  },
  {
    titleEn: 'For Founder — Social Platform for Entrepreneurs',
    titleEs: 'For Founder — Plataforma Social para Emprendedores',
    descriptionEn: 'Built a modern social networking platform with AI integration',
    descriptionEs: 'Desarrollo de una plataforma social moderna con integración de IA',
    tech: ['Next.js', 'FastAPI', 'Dify AI', 'PostgreSQL'],
    link: 'https://www.forfounder.com/',
    highlights: {
      en: [
        'Built responsive application flow',
        'Implemented MFA and full authentication',
        'Integrated AI-powered features',
      ],
      es: [
        'Flujo de aplicación responsivo',
        'Implementación de MFA y autenticación completa',
        'Integración de funciones impulsadas por IA',
      ],
    },
  },
  {
    titleEn: 'Honest Medical — E-commerce',
    titleEs: 'Honest Medical — Comercio Electrónico',
    descriptionEn: 'Improved legacy e-commerce platform for medical supplies',
    descriptionEs: 'Mejora de plataforma legacy de e-commerce para suministros médicos',
    tech: ['PHP', 'MySQL', 'AWS', 'jQuery'],
    link: 'https://honestmed.com/',
    highlights: {
      en: [
        'Improved UX and updated legacy components',
        'Automated manual SQL and merging workflows',
        'Supported production order, shipping & payment issues',
      ],
      es: [
        'Mejora de UX y actualización de componentes legacy',
        'Automatización de flujos manuales de SQL',
        'Soporte de producción en pedidos, envíos y pagos',
      ],
    },
  },
  {
    titleEn: 'AI Legal Chatbot',
    titleEs: 'Chatbot Legal con IA',
    descriptionEn: 'AI-powered assistant for legal appointments',
    descriptionEs: 'Asistente de IA para citas legales',
    tech: ['n8n', 'Docker', 'PostgreSQL', 'WhatsApp API', 'OpenAI'],
    highlights: {
      en: [
        'Created an AI assistant for appointment scheduling',
        'Integrated WhatsApp communication',
        'Automated client communication workflows',
      ],
      es: [
        'Creación de asistente de IA para agendamiento',
        'Integración de comunicación por WhatsApp',
        'Automatización de flujos de comunicación con clientes',
      ],
    },
  },
  {
    titleEn: 'Document IT — AI Documentation Platform',
    titleEs: 'Document IT — Plataforma de Documentación con IA',
    descriptionEn: 'AI documentation platform with vector embeddings and semantic search',
    descriptionEs:
      'Plataforma de documentación con IA, embeddings vectoriales y búsqueda semántica',
    tech: ['React', 'Node.js', 'MongoDB', 'ChromaDB', 'OpenAI'],
    highlights: {
      en: [
        'Implemented document ingestion and retrieval workflows with ChromaDB and OpenAI',
        'Built authentication, role-based access control and project management',
        'Presented the project in an internal innovation hackathon',
      ],
      es: [
        'Flujos de ingesta y recuperación de documentos con ChromaDB y OpenAI',
        'Autenticación, control de acceso por roles y gestión de proyectos',
        'Proyecto presentado en un hackathon interno de innovación',
      ],
    },
  },
];

export const keyProjects = projects.filter((project) => project.category === 'key');
export const personalProjects = projects.filter((project) => project.category === 'personal');
