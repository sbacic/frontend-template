import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'
import en from './locales/en'

const resources = {
  en,
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    saveMissing: true,
    missingKeyHandler: (ng, ns, key) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Missing key: "${key}", ${ng}, ${ns}`)
      }
    },
  })

export default i18n
