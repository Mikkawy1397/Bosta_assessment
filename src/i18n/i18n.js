import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arTranslation from "./ar/arTranslation.json";
const resources = {
  ar: {
    translation: arTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // if you're using a language detector, you can remove this line
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
