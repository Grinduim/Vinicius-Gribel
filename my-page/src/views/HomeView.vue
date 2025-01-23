<template>
  <div class="w-full text-center space-y-6 p-4">
    <h1 class="text-3xl font-bold text-gray-800">{{ $t('home.title') }}</h1>
    <div class="max-w-md mx-auto">
      <el-select
        v-model="value"
        :placeholder="$t('home.select_devices_to_monitor')"
        size="large"
        class="w-full"
      >
        <el-option
          v-for="item in devices"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          class="w-full"
        />
      </el-select>
    </div>
    <p>{{ $t('basic_dash_board.last_message') }} {{ lastMessage }}</p>
  </div>

  <div class="p-6">
    <RiskChart :riskPercentage="riskPercentage" class="mb-6" />
    <div class="sm:flex-row md:flex justify-center gap-8 mt-20">
      <CardDonut
        :percentage="airQualityPercentage"
        :value="airQualityValue"
        :thresholds="airQualityThresholds"
        :title="$t('basic_dash_board.air_quality_level')"
        unit="Ainda não sei"
      />
      <CardDonut
        :percentage="humidityPercentage"
        :value="humidityValue"
        :thresholds="humidityThresholds"
        :title="$t('basic_dash_board.humidity_level')"
      />
      <CardDonut
        :percentage="co2Percentage"
        :value="co2Value"
        :thresholds="co2Thresholds"
        :title="$t('basic_dash_board.co2_level')"
        unit="ppm"
      />
      <CardDonut
        :percentage="temperaturePercentage"
        :value="temperatureValue"
        :thresholds="temperatureThresholds"
        :title="$t('basic_dash_board.temperature_level')"
        unit="°C"
      />
    </div>

    <el-button @click="handleClick" class="mt-4">Change Language</el-button>
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
      value: '',
      // Placeholder values for the dynamic data from API
      riskValue: 40,
      airQualityValue: 200,
      humidityValue: 100,
      co2Value: 4000,
      temperatureValue: 49,

      // Calculating percentages based on the correct formula
      //   riskPercentage: 40,
      //   airQualityPercentage: this.calculatePercentage(this.airQualityValue, 1000, 0),
      //   humidityPercentage: this.calculatePercentage(this.humidityValue, 100, 0),
      //   co2Percentage: this.calculatePercentage(this.co2Value, 10000, 0), // example max value for CO2
      //   temperaturePercentage: this.calculatePercentage(this.temperatureValue, 100, 0), // example max value for temperature

      // Threshold examples that might come from the API as well
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

      lastMessage: 'Last message from Device 1', // Placeholder for last message
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
  },
  methods: {
    handleClick() {
      this.$i18n.locale = this.$i18n.locale === 'pt' ? 'en' : 'pt'
      localStorage.setItem('locale', this.$i18n.locale)
      console.log('Locale changed to:', this.$i18n.locale)
      console.log('Translated text:', this.$t('RiskChart.high'))
      localStorage.getItem('locale')
    },

    // Corrected percentage calculation method
    calculatePercentage(value, max, min) {
      console.log(((value - min) / (max - min)) * 100)
      return ((value - min) / (max - min)) * 100
    },
  },
}
</script>
