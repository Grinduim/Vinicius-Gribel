<template>
    <div>
        <p>aaa</p>
        <p>{{  $t('message.welcome') }}</p>
        <RiskChart :riskPercentage="70" />
    </div>
</template>

<script>
import RiskChart from '@/components/RiskChart.vue';

export default {
    components: { RiskChart },
};
</script>