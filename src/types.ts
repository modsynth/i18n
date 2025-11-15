/**
 * Type-safe translation keys
 *
 * @example
 * ```ts
 * interface AppTranslations {
 *   common: {
 *     welcome: string;
 *     logout: string;
 *   };
 *   errors: {
 *     notFound: string;
 *   };
 * }
 *
 * const { t } = useTranslation<AppTranslations>();
 * t('common.welcome'); // Type-safe!
 * ```
 */
export type TranslationKeys<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? `${K & string}.${TranslationKeys<T[K]>}`
        : K & string;
    }[keyof T]
  : never;

/**
 * Language configuration
 */
export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  direction?: 'ltr' | 'rtl';
}

/**
 * Common language configurations
 */
export const LANGUAGES: Record<string, LanguageConfig> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    direction: 'ltr',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    direction: 'ltr',
  },
  zh: {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    direction: 'ltr',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
  },
};
