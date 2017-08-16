<template>
  <div class="col-md-2 col-sm-4 col-xs-6">
    <div class="card-non-interactive">
      <div class="card-content">
        <p class="card-title" v-html="metricName"></p>
        <p class="card-metric">{{ metricValue }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MetricTile',
    props: [
      'metricName',
      'metricValue'
    ]
  }

</script>

<style scoped>
  .card-title {
    font-size: 1.6rem;
    padding-top: 5px;
  }

  .card-metric {
    color: #00d1b2;
    font-size: 1.6rem;
  }
</style>