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
}

export const projects: Project[] = [
  {
    titleEn: 'CHN — Healthcare System',
    titleEs: 'CHN — Sistema de Salud',
    descriptionEn: 'Enhanced reliability of a critical healthcare platform',
    descriptionEs: 'Mejora de la fiabilidad de una plataforma de salud crítica',
    tech: ['PHP', 'openEMR', 'jQuery', 'MySQL'],
    link: 'https://mychn.org/',
    highlights: {
      en: [
        'Fixed critical bugs at code and database level',
        'Automated billing workflows',
        'Improved reliability of encounter forms',
      ],
      es: [
        'Corrección de bugs críticos a nivel de código y base de datos',
        'Automatización de procesos de facturación',
        'Mayor estabilidad en formularios de encuentro',
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
    titleEn: 'Ticket to Go — Event Ticketing',
    titleEs: 'Ticket to Go — Venta de Boletos',
    descriptionEn: 'Modernized event ticketing platform with custom UI builder',
    descriptionEs: 'Modernización de plataforma de venta de boletos con constructor de UI personalizado',
    tech: ['Vite.js', 'Node.js', 'GCP', 'Sentry'],
    link: 'https://www.tickettogo.com.mx/',
    highlights: {
      en: [
        'Rebuilt the admin module using global components',
        'Integrated Sentry monitoring',
        'Built a complete section and seat builder UI from scratch',
      ],
      es: [
        'Reescritura del módulo administrativo con componentes globales',
        'Integración de monitoreo con Sentry',
        'Construcción completa de UI para secciones y asientos',
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
    titleEn: 'COGSZ — Cost of Goods Sold Platform',
    titleEs: 'COGSZ — Plataforma de Costos',
    descriptionEn: 'Built cost management platform for enterprise clients',
    descriptionEs: 'Desarrollo de plataforma de gestión de costos para clientes empresariales',
    tech: ['Next.js', 'Nest.js', 'AWS', 'AG-Grid'],
    link: 'https://cogsz.com/',
    highlights: {
      en: [
        'Built authentication, form validation, and AG-Grid integrations',
        'Designed intuitive cost management flows',
        'Implemented real-time data visualization',
      ],
      es: [
        'Construcción de autenticación, validación y AG-Grid',
        'Diseño de flujos intuitivos de gestión de costos',
        'Implementación de visualización de datos en tiempo real',
      ],
    },
  },
  {
    titleEn: 'Niu Pay — Fintech for Government',
    titleEs: 'Niu Pay — Fintech para Gobierno',
    descriptionEn: 'Secure payment platform for government services',
    descriptionEs: 'Plataforma de pagos segura para servicios gubernamentales',
    tech: ['Laravel', 'MySQL', 'Datadog', 'AWS'],
    link: 'https://niupay.com.pg/',
    highlights: {
      en: [
        'Integrated monitoring + logging',
        'Ensured secure, stable deployments',
        'Created Git standards across team',
      ],
      es: [
        'Integración de monitoreo y logs',
        'Despliegues seguros y estables',
        'Creación de estándares Git para el equipo',
      ],
    },
  },
  {
    titleEn: 'Stellar Menus — Restaurant SaaS',
    titleEs: 'Stellar Menus — SaaS para Restaurantes',
    descriptionEn: 'Digital menu management platform for restaurants',
    descriptionEs: 'Plataforma de gestión de menús digitales para restaurantes',
    tech: ['React', 'Node.js', 'AWS Cognito', 'Lambda'],
    link: 'https://stellarmenus.com/',
    highlights: {
      en: [
        'Built role-based auth with secure SSO',
        'Improved microservice performance',
        'Automated emails via AWS Lambda triggers',
      ],
      es: [
        'Autenticación basada en roles con SSO seguro',
        'Mejora del rendimiento de microservicios',
        'Automatización de correos con triggers de Lambda',
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
    titleEn: 'Document-IT',
    titleEs: 'Document-IT',
    descriptionEn: 'Chat with your documents using AI embeddings',
    descriptionEs: 'Chatea con tus documentos usando embeddings de IA',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI Embeddings', 'ChromaDB'],
    highlights: {
      en: [
        'Built a PDF upload + vector search system',
        'Users can "chat" with their documents via embeddings',
        'Implemented semantic search capabilities',
      ],
      es: [
        'Sistema de carga de PDF + búsqueda vectorial',
        'Los usuarios pueden "chatear" con sus documentos',
        'Capacidades de búsqueda semántica implementadas',
      ],
    },
  },
];
