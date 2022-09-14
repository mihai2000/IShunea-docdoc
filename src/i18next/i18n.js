import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import translationRO from './locales/ro/translation.json';
import translationRU from './locales/ru/translation.json';

// the translations
const resources = {
    ro: {
        translation: translationRO
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(detector)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ro", // use ro if detected lng is not available

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
