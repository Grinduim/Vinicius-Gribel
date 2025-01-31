<template>
  <div class="relative max-w-md mx-auto text-center h-40">
    <!-- Donut Chart -->
    <apexchart type="donut" class="h-64" :options="chartOptions" :series="chartSeries" />

    <!-- Center Content -->
    <div
      class="absolute inset-0 mt-20 flex flex-col items-center justify-center text-lg font-bold text-gray-800"
    >
      <div>
        <div class="text-2xl">{{ displayData.label }}</div>
        <span class="text-xl">{{ value }} {{ units }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      required: true,
      default: 0, // Ensure a default value
    },
    units: {
      type: String,
      default: '%',
    },
    value: {
      type: Number,
      required: true,
    },
    thresholds: {
      type: Array,
      required: true,
      default: () => [
        { threshold: 70, label: this.$t('general.high'), color: '#FF6347' },
        { threshold: 25, label: this.$t('general.medium'), color: '#FFA500' },
        { threshold: 0, label: this.$t('general.low'), color: '#32CD32' },
      ],
    },
  },
  computed: {
    displayData() {
      const validThreshold = this.thresholds.find((level) => this.percentage > level.threshold)
      const fallback = this.thresholds[this.thresholds.length - 1]
      const result = validThreshold || fallback
      return result
    },
    chartSeries() {
      // Ensure a valid series array
      const safePercentage = Math.max(0, Math.min(100, this.percentage)) // Clamp between 0 and 100
      return [safePercentage, 100 - safePercentage]
    },
    chartOptions() {
      return {
        chart: {
          type: 'donut',
          height: 350,
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 90,
            expandOnClick: false,
            donut: {
              size: '70%',
            },
          },
        },
        colors: [this.displayData.color, '#e0e0e0'],
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      }
    },
  },
}
</script>
