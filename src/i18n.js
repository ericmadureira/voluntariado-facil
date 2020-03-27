import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from './i18n/pt-br.json';

i18n
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: false
    },
    resources,
    lng: 'ptBR',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    }
  });

  export default i18n;
