import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
//这个是自动检测浏览器环境的插件，浏览器是中文就是中文，浏览器是英文就是英文
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import zh from './locales/zh.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      zh,
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
