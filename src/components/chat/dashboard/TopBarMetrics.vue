<template>
  <section>
    <app-top-bar v-for="agentMetrics in dataInt[0].agentsMetrics.metricsTotals" :agentMetrics="agentMetrics"></app-top-bar>

  </section>
</template>

<script>
import TopBar from './TopBar.vue'
  export default {
    name: 'TopBarMetrics',
    components: {
      appTopBar: TopBar
    },
    computed: {
      dataInt() {
        // return 2;
        return this.$store.getters.dataInt;
      }
    }
  }
</script>

<style scoped>
  .row {
    margin-left: 10px;
    margin-right: 10px;
  }

  .card-title {
    font-size: 1.6rem;
    padding-top: 5px;
  }

  .card-metric {
    color: #00d1b2;
    font-size: 1.6rem;
  }
</style>