import { useEffect } from 'react';
import { useTranslation as useI18nextTranslation } from 'react-i18next';

/**
 * Enhanced useTranslation hook with additional utilities
 */
export function useTranslation<T = any>(namespace?: string) {
  const translation = useI18nextTranslation(namespace);

  return {
    ...translation,
    /**
     * Get current language code
     */
    language: translation.i18n.language,

    /**
     * Get all supported languages
     */
    languages: translation.i18n.languages,

    /**
     * Change language with error handling
     */
    changeLanguage: async (lng: string) => {
      try {
        await translation.i18n.changeLanguage(lng);
      } catch (error) {
        console.error('Failed to change language:', error);
      }
    },
  };
}

/**
 * Hook to sync HTML lang attribute with i18n language
 */
export function useLanguageSync(): void {
  const { language } = useTranslation();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);
}

/**
 * Hook to sync HTML dir attribute for RTL languages
 */
export function useDirectionSync(rtlLanguages: string[] = ['ar', 'he', 'fa']): void {
  const { language } = useTranslation();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const direction = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
      document.documentElement.dir = direction;
    }
  }, [language, rtlLanguages]);
}
