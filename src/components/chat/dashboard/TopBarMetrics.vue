<template>
  <section>
<<<<<<< HEAD
    <div v-for="(agentMetrics,index) in dataInt[0].agentsMetrics.metricsTotals" :key="index">
      <app-top-bar :agentMetrics="agentMetrics" :metricName="index" ></app-top-bar>
=======
    <!-- Top Bar Metrics -->
    <div class="row">
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">Total Chat <br>Requests</p>
            <p class="card-metric">{{dataInt[0].agentsMetrics.metricsTotals.totalResolvedConversations}}</p>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">Total Connected <br>Chats</p>
            <p class="card-metric">2</p>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">Total Interactive <br>Chats</p>
            <p class="card-metric">2</p>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">Total Chats <br>In Queue</p>
            <p class="card-metric">2</p>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">Total Abandoned <br>Chats</p>
            <p class="card-metric">2</p>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">Abandonment <br>Rate</p>
            <p class="card-metric">2</p>
          </div>
        </div>
      </div>
>>>>>>> master
    </div>


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