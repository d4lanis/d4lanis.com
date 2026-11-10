export const languages = {
  en: 'EN',
  es: 'ES',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    // Metadata
    'meta.title': 'Daniel Alanis | Full-Stack Software Engineer',
    'meta.description':
      'Daniel Alanis is a Full-Stack Software Engineer with 4+ years building reliable APIs, integrations and data-driven systems for international clients across healthcare, fintech, SaaS and event management.',

    // Accessibility labels
    'aria.mainNav': 'Main navigation',
    'aria.legalNav': 'Legal pages',
    'aria.openMenu': 'Open navigation menu',
    'aria.closeMenu': 'Close navigation menu',
    'aria.toggleTheme': 'Toggle color theme',
    'aria.toggleLanguage': 'Change language to Spanish',
    'aria.brand': 'Daniel Alanis — home',
    'aria.linkedin': 'LinkedIn',
    'aria.github': 'GitHub',
    'aria.email': 'Email',
    'aria.phone': 'Phone',

    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',

    // Hero
    'hero.title': 'Full-Stack Software Engineer',
    'hero.subtitle':
      '4+ years building reliable APIs, integrations and data-driven systems for international clients.',
    'hero.description':
      'Backend-oriented full-stack engineer working with Node.js, TypeScript and NestJS across healthcare, fintech, SaaS and event management.',
    'hero.cta': "Let's Work Together",

    // About
    'about.title': 'About Me',
    'about.intro':
      'I am a full-stack engineer with 4+ years building and maintaining software for international clients. I focus on backend systems, clean integrations and maintainable architecture.',
    'about.point1': 'Backend & APIs',
    'about.point2': 'Reliable integrations',
    'about.point3': 'Production support',
    'about.point4': 'Clear communication',
    'about.experience':
      'I bridge the gap between technical complexity and business goals, delivering results across healthcare, fintech, SaaS and event management.',

    // What I Do
    'whatido.title': 'What I Do',
    'whatido.build.title': 'Build',
    'whatido.build.desc':
      'I build full-stack applications with a backend focus: APIs, integrations, authentication and data workflows.',
    'whatido.fix.title': 'Fix',
    'whatido.fix.desc':
      'I troubleshoot production issues, database bottlenecks and integrations, backed by monitoring and end-to-end testing.',
    'whatido.optimize.title': 'Optimize',
    'whatido.optimize.desc':
      'I refactor legacy code, add observability and improve deployment workflows with CI/CD.',

    // Projects
    'projects.title': 'Key Projects',
    'projects.subtitle': 'Client platforms I have helped build and maintain.',
    'projects.view': 'View Project',
    'projects.stack': 'Stack',

    // Personal Projects
    'personalProjects.kicker': 'Personal',
    'personalProjects.title': 'Personal Projects',
    'personalProjects.subtitle':
      'Independent builds and client websites I have developed end to end.',

    // Skills
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Databases',
    'skills.cloud': 'Cloud & DevOps',
    'skills.monitoring': 'Testing',
    'skills.ai': 'AI / Automation',

    // Contact
    'contact.title': "Let's create something great together.",
    'contact.subtitle': 'Send me a message — I reply within 24 hours.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone Number',
    'contact.phoneOptional': 'Optional',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',

    // Footer
    'footer.tagline': 'Clean Code. Clear Results.',
    'footer.location': 'Saltillo, Coahuila, México',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.deletion': 'Data Deletion',
    'footer.copyright': 'All rights reserved.',
  },
  es: {
    // Metadata
    'meta.title': 'Daniel Alanis | Ingeniero de Software Full-Stack',
    'meta.description':
      'Daniel Alanis es un Ingeniero de Software Full-Stack con más de 4 años construyendo APIs, integraciones y sistemas de datos confiables para clientes internacionales en salud, fintech, SaaS y gestión de eventos.',

    // Accessibility labels
    'aria.mainNav': 'Navegación principal',
    'aria.legalNav': 'Páginas legales',
    'aria.openMenu': 'Abrir menú de navegación',
    'aria.closeMenu': 'Cerrar menú de navegación',
    'aria.toggleTheme': 'Cambiar tema de color',
    'aria.toggleLanguage': 'Cambiar idioma a inglés',
    'aria.brand': 'Daniel Alanis — inicio',
    'aria.linkedin': 'LinkedIn',
    'aria.github': 'GitHub',
    'aria.email': 'Correo',
    'aria.phone': 'Teléfono',

    // Navigation
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',

    // Hero
    'hero.title': 'Ingeniero de Software Full-Stack',
    'hero.subtitle':
      'Más de 4 años construyendo APIs, integraciones y sistemas de datos confiables para clientes internacionales.',
    'hero.description':
      'Ingeniero full-stack con enfoque backend, trabajando con Node.js, TypeScript y NestJS en salud, fintech, SaaS y gestión de eventos.',
    'hero.cta': 'Trabajemos Juntos',

    // About
    'about.title': 'Sobre Mí',
    'about.intro':
      'Soy un ingeniero full-stack con más de 4 años desarrollando y manteniendo software para clientes internacionales. Me enfoco en sistemas backend, integraciones limpias y arquitectura mantenible.',
    'about.point1': 'Backend y APIs',
    'about.point2': 'Integraciones confiables',
    'about.point3': 'Soporte a producción',
    'about.point4': 'Comunicación clara',
    'about.experience':
      'Conecto la complejidad técnica con los objetivos de negocio, entregando resultados en salud, fintech, SaaS y gestión de eventos.',

    // What I Do
    'whatido.title': 'Lo Que Hago',
    'whatido.build.title': 'Construyo',
    'whatido.build.desc':
      'Desarrollo aplicaciones full-stack con enfoque backend: APIs, integraciones, autenticación y flujos de datos.',
    'whatido.fix.title': 'Soluciono',
    'whatido.fix.desc':
      'Resuelvo problemas en producción, cuellos de botella de bases de datos e integraciones, apoyado en monitoreo y pruebas end-to-end.',
    'whatido.optimize.title': 'Optimizo',
    'whatido.optimize.desc':
      'Refactorizo código legado, agrego observabilidad y mejoro los flujos de despliegue con CI/CD.',

    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle':
      'Plataformas de clientes que he ayudado a construir y mantener.',
    'projects.view': 'Ver Proyecto',
    'projects.stack': 'Tecnologías',

    // Personal Projects
    'personalProjects.kicker': 'Personal',
    'personalProjects.title': 'Proyectos Personales',
    'personalProjects.subtitle':
      'Proyectos independientes y sitios de clientes que he desarrollado de principio a fin.',

    // Skills
    'skills.title': 'Habilidades',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Bases de Datos',
    'skills.cloud': 'Nube y DevOps',
    'skills.monitoring': 'Pruebas',
    'skills.ai': 'IA / Automatización',

    // Contact
    'contact.title': 'Creemos algo genial juntos.',
    'contact.subtitle': 'Envíame un mensaje — respondo dentro de las 24 horas.',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.phone': 'Número de Teléfono',
    'contact.phoneOptional': 'Opcional',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado con éxito!',
    'contact.error': 'Error al enviar el mensaje. Por favor intenta de nuevo.',

    // Footer
    'footer.tagline': 'Código Limpio. Resultados Claros.',
    'footer.location': 'Saltillo, Coahuila, México',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos del Servicio',
    'footer.deletion': 'Eliminación de Datos',
    'footer.copyright': 'Todos los derechos reservados.',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
