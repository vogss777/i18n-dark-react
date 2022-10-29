import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
let homepageFr = require('./lang/fr/homepage.json')
let homepageEn = require('./lang/en/homepage.json')
let homepageJp = require('./lang/jp/homepage.json')
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: { ...homepageEn }
      },
      fr: {
        translations: { ...homepageFr }
      },
      jp: {
        translations: { ...homepageJp }
      }
      //如果有多个翻译文件，您可以使用扩展运算符传递逗号。
      /**
       * en: {
              translations: { ...homepageEn, ...file2.json, ...file3.json }
            }
       */
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n