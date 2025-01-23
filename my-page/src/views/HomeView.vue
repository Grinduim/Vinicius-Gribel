<template>
    <div>
        <RiskChart :riskPercentage="10" />

        <el-button @click="handleClick">Change Language</el-button>
    </div>
</template>

<script>
import RiskChart from '@/components/RiskChart.vue';
import i18n from '@/i18n';

export default {
    components: { RiskChart },
    methods: {
        handleClick() {
            this.$i18n.locale = this.$i18n.locale === 'pt' ? 'en' : 'pt';
            console.log('Locale changed to:', this.$i18n.locale);
            console.log('Translated text:', this.$t('message.RiskChart.high'));
        }
    }

};
</script>
