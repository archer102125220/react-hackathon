import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them)
const translationEN = {
    "footer":"Copyright © Your Website 2019"
};
const translationZHTW = {
    "footer":"版權所有©您的網站2019"
};
const translationZHCN = {
    "footer":"版权所有©您的网站2019"
};

const resources = {
    en: { translation: translationEN },
    zhTW: { translation: translationZHTW },
    zhCN: { translation: translationZHCN },
};

i18n
    .use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'zhTW',
        
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;