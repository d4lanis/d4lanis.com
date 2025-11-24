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
    'hero.subtitle': 'Turning complex problems into clean, scalable code.',
    'hero.description': 'Friendly approach. Minimalist execution. Real results across healthcare, fintech, e-commerce, AI, and SaaS.',
    'hero.cta': 'Get in Touch',
    
    // About
    'about.title': 'About Me',
    'about.intro': "I'm Daniel Alanis, a full-stack software engineer with 3+ years of real-world experience building reliable, user-friendly applications.",
    'about.point1': 'Clear communication',
    'about.point2': 'Clean architecture',
    'about.point3': 'A friendly, collaborative mindset',
    'about.point4': 'Modern, scalable engineering practices',
    'about.experience': "I've contributed to platforms in healthcare, fintech, e-commerce, cost management, ticketing, AI, and more.",
    
    // What I Do
    'whatido.title': 'What I Do',
    'whatido.build.title': 'Build',
    'whatido.build.desc': 'I develop full-stack features, dashboards, admin panels, authentication flows, and UI systems that feel simple and intuitive.',
    'whatido.fix.title': 'Fix',
    'whatido.fix.desc': 'I resolve deep bugs — database issues, backend inconsistencies, production errors, and UI/UX flaws.',
    'whatido.optimize.title': 'Optimize',
    'whatido.optimize.desc': 'I improve legacy codebases, automate workflows, add monitoring, and implement scalable performance improvements.',
    
    // Projects
    'projects.title': 'Key Projects',
    
    // Skills
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Databases',
    'skills.cloud': 'Cloud & DevOps',
    'skills.monitoring': 'Monitoring',
    'skills.ai': 'AI',
    
    // Contact
    'contact.title': 'Let\'s Connect',
    'contact.subtitle': 'Have a project in mind? Let\'s build something dependable together.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
    
    // Footer
    'footer.tagline': 'Clean solutions. Calm communication. Real impact.',
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
    'hero.subtitle': 'Transformo problemas complejos en código limpio y escalable.',
    'hero.description': 'Un estilo amigable. Una ejecución minimalista. Resultados reales en salud, fintech, comercio electrónico, IA y SaaS.',
    'hero.cta': 'Contactar',
    
    // About
    'about.title': 'Sobre Mí',
    'about.intro': 'Soy Daniel Alanis, un ingeniero de software full-stack con más de 3 años de experiencia desarrollando aplicaciones confiables y orientadas al usuario.',
    'about.point1': 'Comunicación clara',
    'about.point2': 'Arquitectura limpia',
    'about.point3': 'Mentalidad colaborativa',
    'about.point4': 'Prácticas modernas y escalables',
    'about.experience': 'He trabajado en proyectos de salud, fintech, e-commerce, gestión de costos, venta de boletos, IA y más.',
    
    // What I Do
    'whatido.title': 'Lo Que Hago',
    'whatido.build.title': 'Construyo',
    'whatido.build.desc': 'Desarrollo interfaces, paneles administrativos, módulos completos, autenticación y flujos intuitivos.',
    'whatido.fix.title': 'Soluciono',
    'whatido.fix.desc': 'Resuelvo bugs complejos: base de datos, backend, errores en producción y problemas de UX/UI.',
    'whatido.optimize.title': 'Optimizo',
    'whatido.optimize.desc': 'Mejoro sistemas legacy, agrego monitoreo, automatizo procesos y aumento el rendimiento.',
    
    // Projects
    'projects.title': 'Proyectos Destacados',
    
    // Skills
    'skills.title': 'Habilidades',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Bases de Datos',
    'skills.cloud': 'Nube y DevOps',
    'skills.monitoring': 'Monitoreo',
    'skills.ai': 'IA',
    
    // Contact
    'contact.title': 'Conectemos',
    'contact.subtitle': '¿Tienes un proyecto en mente? Construyamos algo fiable juntos.',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado con éxito!',
    'contact.error': 'Error al enviar el mensaje. Por favor intenta de nuevo.',
    
    // Footer
    'footer.tagline': 'Soluciones limpias. Comunicación tranquila. Impacto real.',
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
