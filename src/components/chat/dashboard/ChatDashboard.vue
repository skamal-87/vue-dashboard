<template>
  <section>
    <TopBarMetrics class="tob-bar-metrics"></TopBarMetrics>
  </section>
</template>

<script>
  import TopBarMetrics from './TopBarMetrics.vue';
  import QueueHealth from '../other/QueueHealth.vue';

  export default {
    name: 'ChatDashboard',
    components: {
      TopBarMetrics,
      QueueHealth
    }
  }
</script>

<style scoped>
  .tob-bar-metrics {
    margin-top: 20px;
  }
</style>