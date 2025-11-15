// Re-export from react-i18next and i18next
export { Trans, Translation } from 'react-i18next';
export { default as i18n } from 'i18next';
export { initReactI18next } from 'react-i18next';

// Export custom initialization
export { initI18n, detectLanguage, changeLanguage } from './init';
export type { I18nConfig } from './init';

// Export types
export type { TranslationKeys, LanguageConfig } from './types';
export { LANGUAGES } from './types';

// Export enhanced hooks
export { useTranslation, useLanguageSync, useDirectionSync } from './hooks';

// Export utilities
export {
  formatDate,
  formatNumber,
  formatCurrency,
  formatRelativeTime,
  pluralize,
} from './utils';
