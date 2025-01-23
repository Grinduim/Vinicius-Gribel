<template>
  <el-card style="border-radius: 1rem" shadow="hover" class="md:w-1/4 md:mb-0">
    <template #header>
      <div class="card-header text-center">
        <span>{{ title }}</span>
      </div>
    </template>
    <DonutChart :percentage="percentage" :thresholds="thresholds" :value="value" :units="unit" />
    <template  class="p-0" #footer></template>
  </el-card>
</template>

<script>
import DonutChart from '@/components/DonutChart.vue'

export default {
  components: { DonutChart },
  props: {
    title: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    thresholds: {
      type: Array,
      required: true,
      default: () => [
        { threshold: 70, label: 'High', color: '#FF0000' },
        { threshold: 25, label: 'Medium', color: '#FFA500' },
        { threshold: 0, label: 'Low', color: '#008000' },
      ],
    },
    unit: {
      type: String,
      default: '%',
    },
  },
  mounted() {
    console.log(this.thresholds)
  },
}
</script>
