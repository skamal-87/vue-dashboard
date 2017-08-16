<template>
  <section>
    <!-- Top Bar Metrics -->
    <div class="row">
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">{{metricName}}
            <p class="card-metric">{{agentMetrics}}</p>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">{{metricName}}
            <p class="card-metric">{{agentMetrics}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
        props: ['agentMetrics','metricName']
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