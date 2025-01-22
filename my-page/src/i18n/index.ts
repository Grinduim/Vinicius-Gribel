// src/i18n/index.js
import { createI18n } from 'vue-i18n'

export default createI18n({
  legacy: false, // Use Composition API
  locale: 'en',
  messages: {
    en: {
      message: {
        welcome: 'Welcome',
        goodbye: 'Goodbye'
      }
    },
    fr: {
      message: {
        welcome: 'Bienvenue',
        goodbye: 'Au revoir'
      }
    }
  }
})