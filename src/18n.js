import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './18next/en.json';
import es from './18next/es.json';


i18n.use(initReactI18next).init({
    resources: {

        en: {

            translation: en
        },
        es: {

            translation: es
        }

    },
    lng: 'en', // Idioma por defecto (español)
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;