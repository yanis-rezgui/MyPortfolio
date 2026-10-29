import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Adapte ces chemins à l'emplacement réel de tes fichiers JSON
import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";

const saved = localStorage.getItem("lang");
const initialLang = saved === "fr" || saved === "en" ? saved : "fr";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: initialLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;