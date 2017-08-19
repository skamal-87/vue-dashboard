<template>
  <section>

    <!-- Top Bar Metrics -->
    <div class="row row-center">
      <MetricTile v-for="metric in topBar" :metricName="metric.name" :metricValue="metric.value"></MetricTile>
    </div>

    <!-- Bottom Bar Metrics -->
    <div class="row row-center">
      <MetricTile v-for="metric in bottomBar" :metricName="metric.name" :metricValue="metric.value"></MetricTile>
    </div>

  </section>
</template>

<script>
  import MetricTile from './MetricTile.vue'

  export default {
    name: 'TopBar',
    components: {
      MetricTile
    },
    props: ['topBar', 'bottomBar']
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

  .row-center {
    text-align:center;
  }
</style>