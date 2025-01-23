import { createI18n } from 'vue-i18n';

export default createI18n({
  legacy: true, // Enables the legacy API
  locale: 'en',
  globalInjection: true, // Optional: For using $t globally
  messages: {
    en: {
      message: {
        RiskChart: {
          medium: 'Medium Risk',
          high: 'High Risk',
          low: 'Low Risk'
        }
      }
    },
    pt: {
      message: {
        RiskChart: {
          medium: 'Risco Médio',
          high: 'Risco Alto',
          low: 'Risco Baixo'
        }
      }
    }
  }
});
