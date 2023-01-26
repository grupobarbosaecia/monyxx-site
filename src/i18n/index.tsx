import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./locales/enUS.json"
import ptBR from "./locales/ptBR.json"
import es from "./locales/es.json"

export const I18N_STORAGE_KEY = "118nextLng"

const language = localStorage.getItem(I18N_STORAGE_KEY) || "enUS"
if(!localStorage.getItem(I18N_STORAGE_KEY)){
    localStorage.setItem(I18N_STORAGE_KEY, "enUS")
}

i18n.use(initReactI18next).init({
    fallbackLng: language,
    interpolation: {
        escapeValue: false,
    },
    resources: {
        enUS,
        ptBR,
        es,
    },
})

export default i18n