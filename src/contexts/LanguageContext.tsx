import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Full-Stack Software Engineer',
    'hero.subtitle': 'Building reliable, scalable web solutions for startups and enterprises.',
    'hero.description': 'From idea to deployment. I turn complex systems into simple, human experiences with clean, maintainable architecture.',
    'hero.cta': "Let's Work Together",
    
    // About
    'about.title': 'About Me',
    'about.intro': "I started coding to turn complex systems into simple, human experiences. Today, I help businesses scale with clean, maintainable architecture.",
    'about.point1': 'Friendly expert tone',
    'about.point2': 'Reliable execution',
    'about.point3': 'Clear communication',
    'about.point4': 'Scalable solutions',
    'about.experience': "I bridge the gap between technical complexity and business goals, delivering results across healthcare, fintech, e-commerce, AI, and SaaS.",
    
    // What I Do
    'whatido.title': 'What I Do',
    'whatido.build.title': 'Build',
    'whatido.build.desc': 'I develop reliable full-stack applications, from robust backends to intuitive, responsive frontends.',
    'whatido.fix.title': 'Fix',
    'whatido.fix.desc': 'I resolve critical bugs and performance bottlenecks to ensure your system runs smoothly under pressure.',
    'whatido.optimize.title': 'Optimize',
    'whatido.optimize.desc': 'I refactor legacy code and implement modern practices to reduce technical debt and improve maintainability.',
    
    // Projects
    'projects.title': 'Key Projects',
    
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
  },
  es: {
    // Navigation
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Ingeniero de Software Full-Stack',
    'hero.subtitle': 'Construyendo soluciones web confiables y escalables para startups y empresas.',
    'hero.description': 'Desde la idea hasta el despliegue. Transformo sistemas complejos en experiencias humanas simples con arquitectura limpia y mantenible.',
    'hero.cta': 'Trabajemos Juntos',
    
    // About
    'about.title': 'Sobre Mí',
    'about.intro': 'Empecé a programar para convertir sistemas complejos en experiencias simples. Hoy, ayudo a empresas a escalar con arquitectura limpia y mantenible.',
    'about.point1': 'Experto amigable',
    'about.point2': 'Ejecución confiable',
    'about.point3': 'Comunicación clara',
    'about.point4': 'Soluciones escalables',
    'about.experience': 'Conecto la complejidad técnica con los objetivos de negocio, entregando resultados en salud, fintech, e-commerce, IA y SaaS.',
    
    // What I Do
    'whatido.title': 'Lo Que Hago',
    'whatido.build.title': 'Construyo',
    'whatido.build.desc': 'Desarrollo aplicaciones full-stack confiables, desde backends robustos hasta frontends intuitivos.',
    'whatido.fix.title': 'Soluciono',
    'whatido.fix.desc': 'Resuelvo errores críticos y cuellos de botella para asegurar que tu sistema funcione bajo presión.',
    'whatido.optimize.title': 'Optimizo',
    'whatido.optimize.desc': 'Refactorizo código legado e implemento prácticas modernas para reducir deuda técnica.',
    
    // Projects
    'projects.title': 'Proyectos Destacados',
    
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
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
