import { createI18n } from 'vue-i18n';
const savedLocale = localStorage.getItem('locale') || 'en';

const i18n = createI18n({
  legacy: true, // Enables the legacy API
  locale: savedLocale,
  globalInjection: true, // Optional: For using $t globally
  messages: {
    en: {
      general: {
        medium: 'Medium',
        high: 'High',
        low: 'Low'
      },
      RiskChart: {
        medium: 'Medium Risk',
        high: 'High Risk',
        low: 'Low Risk'
      },
      home: {
        select_devices_to_monitor: 'Select devices to monitor',
        title: 'Home Page',
        change_language: 'Change Language'
      },
      basic_dash_board: {
        last_message: 'Last message: ',
        co2_level: 'CO2 level: ',
        temperature_level: 'Temperature level: ',
        humidity_level: 'Humidity level: ',
        air_quality_level: 'Air quality level: ',
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
        change_language: 'Alterar idioma'
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
