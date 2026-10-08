import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Resolve the active language from a URL path (e.g. `/es/` -> 'es'). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in ui) {
    return maybeLang as Lang;
  }
  return defaultLang;
}

/** Build a `t(key)` translator bound to a language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Return the other locale so pages can render a language switcher. */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
