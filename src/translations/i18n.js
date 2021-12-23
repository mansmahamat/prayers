import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
};

i18next
  .use(initReactI18next)
  .use(HttpApi) // Registering the back-end plugin
  .use(LanguageDetector)
  .init({
    // Remove resources from here

    detection: DETECTION_OPTIONS,
    supportedLngs: ['en', 'fr'],
    nonExplicitSupportedLngs: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
