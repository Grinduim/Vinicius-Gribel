<template>
  <div class="w-full text-center space-y-6 p-4">
    <h1 class="text-3xl font-bold text-gray-800">{{ $t('home.title') }}</h1>
    <div class="max-w-md mx-auto">
      <el-select
        v-model="selectedDevice"
        :placeholder="$t('home.select_devices_to_monitor')"
        size="large"
        class="w-full"
      >
        <el-option
          v-for="device in devices"
          :key="device.value"
          :label="device.label"
          :value="device.value"
          class="w-full"
        />
      </el-select>
    </div>
    <p>{{ $t('basic_dash_board.last_message') }} {{ lastMessage }}</p>
  </div>

  <div class="p-6">
    <RiskChart :riskPercentage="riskPercentage" class="mb-6" />
    <div class="flex flex-wrap justify-center gap-8 mt-20">
      <CardDonut
        v-for="(metric, index) in metrics"
        :key="index"
        :percentage="metric.percentage"
        :value="metric.value"
        :thresholds="metric.thresholds"
        :title="metric.title"
        :unit="metric.unit"
      />
    </div>

    <el-button @click="toggleLanguage" class="mt-4">{{ $t('home.change_language') }}</el-button>
  </div>
</template>

<script>
import RiskChart from '@/components/RiskChart.vue'
import CardDonut from '@/components/Dashboard/CardDonut.vue'

const COLOR_HIGH = '#FF6347'
const COLOR_MEDIUM = '#FFA500'
const COLOR_LOW = '#32CD32'

export default {
  components: { RiskChart, CardDonut },
  data() {
    return {
      devices: [
        { id: 1, label: 'Device 1', value: 'device1' },
        { id: 2, label: 'Device 2', value: 'device2' },
        { id: 3, label: 'Device 3', value: 'device3' },
        { id: 4, label: 'Device 4', value: 'device4' },
        { id: 5, label: 'Device 5', value: 'device5' },
        { id: 6, label: 'Device 6', value: 'device6' },
      ],
      selectedDevice: '',
      riskValue: 40,
      airQualityValue: 200,
      humidityValue: 100,
      co2Value: 4000,
      temperatureValue: 49,
      airQualityThresholds: [
        { threshold: 1000, label: this.$t('general.high'), color: COLOR_HIGH },
        { threshold: 200, label: this.$t('general.medium'), color: COLOR_MEDIUM },
        { threshold: 0, label: this.$t('general.low'), color: COLOR_LOW },
      ],
      humidityThresholds: [
        { threshold: 75, label: this.$t('general.high'), color: COLOR_LOW },
        { threshold: 50, label: this.$t('general.medium'), color: COLOR_MEDIUM },
        { threshold: 0, label: this.$t('general.low'), color: COLOR_HIGH },
      ],
      co2Thresholds: [
        { threshold: 70, label: this.$t('general.high'), color: COLOR_HIGH },
        { threshold: 200, label: this.$t('general.medium'), color: COLOR_MEDIUM },
        { threshold: 0, label: this.$t('general.low'), color: COLOR_LOW },
      ],
      temperatureThresholds: [
        { threshold: 70, label: this.$t('general.high'), color: COLOR_HIGH },
        { threshold: 200, label: this.$t('general.medium'), color: COLOR_MEDIUM },
        { threshold: 0, label: this.$t('general.low'), color: COLOR_LOW },
      ],
      lastMessage: 'Last message from Device 1',
    }
  },
  computed: {
    riskPercentage() {
      return this.riskValue
    },
    airQualityPercentage() {
      return this.calculatePercentage(this.airQualityValue, 1000, 0)
    },
    humidityPercentage() {
      return this.calculatePercentage(this.humidityValue, 100, 0)
    },
    co2Percentage() {
      return this.calculatePercentage(this.co2Value, 10000, 0)
    },
    temperaturePercentage() {
      return this.calculatePercentage(this.temperatureValue, 70, -5)
    },
    metrics() {
      return [
        {
          percentage: this.airQualityPercentage,
          value: this.airQualityValue,
          thresholds: this.airQualityThresholds,
          title: this.$t('basic_dash_board.air_quality_level'),
          unit: 'N/A',
        },
        {
          percentage: this.humidityPercentage,
          value: this.humidityValue,
          thresholds: this.humidityThresholds,
          title: this.$t('basic_dash_board.humidity_level'),
          unit: '',
        },
        {
          percentage: this.co2Percentage,
          value: this.co2Value,
          thresholds: this.co2Thresholds,
          title: this.$t('basic_dash_board.co2_level'),
          unit: 'ppm',
        },
        {
          percentage: this.temperaturePercentage,
          value: this.temperatureValue,
          thresholds: this.temperatureThresholds,
          title: this.$t('basic_dash_board.temperature_level'),
          unit: '°C',
        },
      ]
    },
  },
  methods: {
    toggleLanguage() {
      const newLocale = this.$i18n.locale === 'pt' ? 'en' : 'pt'
      this.$i18n.locale = newLocale
      localStorage.setItem('locale', newLocale)
    },
    calculatePercentage(value, max, min) {
      return ((value - min) / (max - min)) * 100
    },
    getTranslatedThresholds(thresholds) {
      return thresholds.map(threshold => ({
        ...threshold,
        label: this.$t(`general.${threshold.label}`)
      }))
    }
  },
}
</script>
