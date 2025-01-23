import { createI18n } from 'vue-i18n';
const savedLocale = localStorage.getItem('locale') || 'en';

const i18n = createI18n({
  legacy: true, // Enables the legacy API
  locale: savedLocale,
  globalInjection: true, // Optional: For using $t globally
  messages: {
    en: {
      RiskChart: {
        medium: 'Medium Risk',
        high: 'High Risk',
        low: 'Low Risk'
      }
    },
    pt: {
      general: {
        medium: 'Médio',
        high: 'Alto',
        low: 'Baixo'
      },
      RiskChart: {
        medium: 'Risco Médio',
        high: 'Risco Alto',
        low: 'Risco Baixo'
      },
      home: {
        select_devices_to_monitor: 'Selecione os dispositivos para monitorar',
        title: 'Página Inicial',
      },
      basic_dash_board: {
        last_message: 'Última mensagem: ',
        co2_level: 'Nível de CO2: ',
        temperature_level: 'Nível da temperatura: ',
        humidity_level: 'Nível da umidade: ',
        air_quality_level: ' Nível da qualidade do ar: ',
      }
    }
  }
});

export default i18n;
