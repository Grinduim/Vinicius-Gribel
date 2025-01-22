<template>
    <div class="relative max-w-md mx-auto text-center">
      <apexchart
        type="donut"
        class="h-64"
        :options="chartOptions"
        :series="chartSeries"
      />
      <div class="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-800">
        {{ getRiskInfo(riskPercentage).label }}
      </div>
    </div>
  </template>
  
  <script>
  const RISK_LEVELS = {
    HIGH: { threshold: 70, label: 'High Risk', color: '#FF0000' },
    MEDIUM: { threshold: 25, label: 'Medium Risk', color: '#FFA500' },
    LOW: { threshold: 0, label: 'Low Risk', color: '#008000' }
  };
  
  export default {
    props: {
      riskPercentage: {
        type: Number,
        required: true
      }
    },
    methods: {
      getRiskInfo(percentage) {
        if (percentage > RISK_LEVELS.HIGH.threshold) return RISK_LEVELS.HIGH;
        if (percentage > RISK_LEVELS.MEDIUM.threshold) return RISK_LEVELS.MEDIUM;
        return RISK_LEVELS.LOW;
      }
    },
    computed: {
      chartSeries() {
        return [this.riskPercentage, 100 - this.riskPercentage];
      },
      chartOptions() {
        return {
          chart: {
            type: 'donut',
            height: 350
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 90,
              expandOnClick: false,
              donut: {
                size: '70%'
              }
            }
          },
          colors: [this.getRiskInfo(this.riskPercentage).color, '#e0e0e0'],
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          tooltip: {
            enabled: false
          }
        };
      }
    }
  };
  </script>