import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import fr from './locales/fr.json'
import ar from './locales/ar.json'

export const languages = ['en', 'fr', 'ar'] as const
export type Language = (typeof languages)[number]
const storageKey = 'lycee-language'

function savedLanguage(): Language {
  try {
    const saved = localStorage.getItem(storageKey)
    if (languages.includes(saved as Language)) return saved as Language
  } catch {
    // Browsing with storage disabled still allows language switching.
  }
  return 'en'
}

function applyLanguage(language: string) {
  document.documentElement.lang = language
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  try {
    localStorage.setItem(storageKey, language)
  } catch {
    // Keep the in-memory preference when storage is unavailable.
  }
}

i18n.on('languageChanged', applyLanguage)
void i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, fr: { translation: fr }, ar: { translation: ar } },
  lng: savedLanguage(),
  fallbackLng: 'en',
  supportedLngs: [...languages],
  interpolation: { escapeValue: false },
  initAsync: false,
})

export default i18n
