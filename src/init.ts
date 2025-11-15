import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export interface I18nConfig {
  defaultLanguage: string;
  supportedLanguages: string[];
  resources: Record<string, any>;
  fallbackLanguage?: string;
  debug?: boolean;
  detection?: {
    order?: string[];
    caches?: string[];
  };
}

/**
 * Initialize i18next with opinionated defaults
 *
 * @example
 * ```ts
 * initI18n({
 *   defaultLanguage: 'en',
 *   supportedLanguages: ['en', 'ko', 'ja'],
 *   resources: {
 *     en: { translation: enTranslations },
 *     ko: { translation: koTranslations },
 *   }
 * });
 * ```
 */
export async function initI18n(config: I18nConfig): Promise<typeof i18n> {
  try {
    await i18n.use(initReactI18next).init({
      resources: config.resources,
      lng: config.defaultLanguage,
      fallbackLng: config.fallbackLanguage || config.defaultLanguage,
      supportedLngs: config.supportedLanguages,
      debug: config.debug || false,

      interpolation: {
        escapeValue: false, // React already escapes
      },

      detection: {
        order: config.detection?.order || ['localStorage', 'navigator'],
        caches: config.detection?.caches || ['localStorage'],
      },

      react: {
        useSuspense: false,
      },
    });

    return i18n;
  } catch (error) {
    console.error('Failed to initialize i18n:', error);
    throw new Error(`i18n initialization failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Detect user's preferred language from browser
 */
export function detectLanguage(supportedLanguages: string[]): string {
  // Check localStorage first
  const stored = typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : null;
  if (stored && supportedLanguages.includes(stored)) {
    return stored;
  }

  // Check browser language
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.split('-')[0]; // en-US -> en
    if (supportedLanguages.includes(browserLang)) {
      return browserLang;
    }
  }

  // Return first supported language as fallback
  return supportedLanguages[0];
}

/**
 * Change language and persist to localStorage
 */
export async function changeLanguage(language: string): Promise<void> {
  try {
    await i18n.changeLanguage(language);
    if (typeof window !== 'undefined') {
      localStorage.setItem('i18nextLng', language);
    }
  } catch (error) {
    console.error('Failed to change language:', error);
    throw new Error(`Language change failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
