import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fi from "./locales/fi.json";
import en from "./locales/en.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            fi: { translation: fi },
            en: { translation: en },
        },
        lng: i18n.language,
        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/locales/{{lng}}.json",
        },
        react: {
            bindI18n: "loaded languageChanged",
            bindI18nStore: "added",
            useSuspense: true,
        },
    });

    export default i18n;
