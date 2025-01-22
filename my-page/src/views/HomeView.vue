<template>
    <div class="bg-primary w-full h-lvh flex justify-center items-center">
        <h1 class="">Welcome to HomeView</h1>
        <p class="">{{ message }}</p>
        <el-button type="info">Info</el-button>
    </div>
    <!-- Instead of h-[100dvh] -->
    <div class="h-screen-dynamic bg-pink-600">...</div>

    <!-- Instead of h-[50dvh] -->
    <div class="h-50dvh bg-yellow-300">...</div>

    <!-- For min-height -->
    <div class="min-h-screen-dynamic bg-red-400">...</div>

</template>

<script>
import ApexCharts from 'apexcharts'
import { onMounted } from 'vue'

export default {
    name: 'HomeView',
    data() {
        return {
            message: 'Hello, Vue 3!',
        };
    },
    setup() {
        onMounted(() => {
            const options = {
                chart: {
                    type: 'line'
                },
                series: [{
                    name: 'sales',
                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                }],
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                }
            };

            const chart = new ApexCharts(document.querySelector("#chart"), options);
            chart.render();
        });
    }
};
</script>

<style scoped></style>