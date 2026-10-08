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
      'Daniel Alanis is a Full-Stack Software Engineer building reliable, scalable web solutions for startups and enterprises. Turning complex systems into clean, human experiences.',

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
    'hero.subtitle': 'Building reliable, scalable web solutions for startups and enterprises.',
    'hero.description':
      'From idea to deployment. I turn complex systems into simple, human experiences with clean, maintainable architecture.',
    'hero.cta': "Let's Work Together",

    // About
    'about.title': 'About Me',
    'about.intro':
      'I started coding to turn complex systems into simple, human experiences. Today, I help businesses scale with clean, maintainable architecture.',
    'about.point1': 'Friendly expert tone',
    'about.point2': 'Reliable execution',
    'about.point3': 'Clear communication',
    'about.point4': 'Scalable solutions',
    'about.experience':
      'I bridge the gap between technical complexity and business goals, delivering results across healthcare, fintech, e-commerce, AI, and SaaS.',

    // What I Do
    'whatido.title': 'What I Do',
    'whatido.build.title': 'Build',
    'whatido.build.desc':
      'I develop reliable full-stack applications, from robust backends to intuitive, responsive frontends.',
    'whatido.fix.title': 'Fix',
    'whatido.fix.desc':
      'I resolve critical bugs and performance bottlenecks to ensure your system runs smoothly under pressure.',
    'whatido.optimize.title': 'Optimize',
    'whatido.optimize.desc':
      'I refactor legacy code and implement modern practices to reduce technical debt and improve maintainability.',

    // Projects
    'projects.title': 'Key Projects',
    'projects.subtitle': 'Here are a few projects that demonstrate how I solve real-world problems.',
    'projects.view': 'View Project',
    'projects.stack': 'Stack',

    // Skills
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Databases',
    'skills.cloud': 'Cloud & DevOps',
    'skills.monitoring': 'Monitoring',
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
      'Daniel Alanis es un Ingeniero de Software Full-Stack que construye soluciones web confiables y escalables para startups y empresas. Transforma sistemas complejos en experiencias humanas simples.',

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
    'hero.subtitle': 'Construyendo soluciones web confiables y escalables para startups y empresas.',
    'hero.description':
      'Desde la idea hasta el despliegue. Transformo sistemas complejos en experiencias humanas simples con arquitectura limpia y mantenible.',
    'hero.cta': 'Trabajemos Juntos',

    // About
    'about.title': 'Sobre Mí',
    'about.intro':
      'Empecé a programar para convertir sistemas complejos en experiencias simples. Hoy, ayudo a empresas a escalar con arquitectura limpia y mantenible.',
    'about.point1': 'Experto amigable',
    'about.point2': 'Ejecución confiable',
    'about.point3': 'Comunicación clara',
    'about.point4': 'Soluciones escalables',
    'about.experience':
      'Conecto la complejidad técnica con los objetivos de negocio, entregando resultados en salud, fintech, e-commerce, IA y SaaS.',

    // What I Do
    'whatido.title': 'Lo Que Hago',
    'whatido.build.title': 'Construyo',
    'whatido.build.desc':
      'Desarrollo aplicaciones full-stack confiables, desde backends robustos hasta frontends intuitivos.',
    'whatido.fix.title': 'Soluciono',
    'whatido.fix.desc':
      'Resuelvo errores críticos y cuellos de botella para asegurar que tu sistema funcione bajo presión.',
    'whatido.optimize.title': 'Optimizo',
    'whatido.optimize.desc':
      'Refactorizo código legado e implemento prácticas modernas para reducir deuda técnica.',

    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle':
      'Aquí hay algunos proyectos que demuestran cómo resuelvo problemas del mundo real.',
    'projects.view': 'Ver Proyecto',
    'projects.stack': 'Tecnologías',

    // Skills
    'skills.title': 'Habilidades',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Bases de Datos',
    'skills.cloud': 'Nube y DevOps',
    'skills.monitoring': 'Monitoreo',
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
