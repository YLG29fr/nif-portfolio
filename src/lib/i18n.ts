// Librairie de gestion multi-langues

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translations from "../locales/translations";

i18next
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        debug: true,
        resources: translations,
        interpolation: { escapeValue: false },
        ns: ["common", "errors"],
        defaultNS: "common",
});

export default i18next;