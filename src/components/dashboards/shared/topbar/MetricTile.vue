<template>
  <div class="col-md-2 col-sm-4 col-center">
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

  .col-center {
    display: inline-block;
    float: none;
  }

  @media only screen and (max-width: 500px) {
    .col-center {
      display: block;
    }
  }
</style>