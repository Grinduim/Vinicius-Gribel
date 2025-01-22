import { createI18n } from 'vue-i18n'


const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            welcome: 'Welcome',
            goodbye: 'Goodbye'
        },
        fr: {
            welcome: 'Bienvenue',
            goodbye: 'Au revoir'
        }
    }
})

export default i18n