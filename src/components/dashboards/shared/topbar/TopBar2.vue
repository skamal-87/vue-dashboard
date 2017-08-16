<template>
  <section>
    <!-- Top Bar Metrics -->
    <div class="row">
      <MetricTile v-for="metric in topBar" :metricName="metric.name" :metricValue="metric.value"></MetricTile>
    </div>

    <!-- Bottom Bar Metrics -->
    <div class="row">
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">Agents <br>Online</p>
            <p class="card-metric">2</p>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">Total Available <br>Slots</p>
            <p class="card-metric">2</p>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">Avg. Handling <br>Time</p>
            <p class="card-metric">2</p>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">Avg. Agent <br>Utilization</p>
            <p class="card-metric">2</p>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">Avg. Time <br>To Answer</p>
            <p class="card-metric">2</p>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="card-non-interactive">
          <div class="card-content">
            <p class="card-title">Avg. Time <br>To Abandon</p>
            <p class="card-metric">2</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import MetricTile from './MetricTile.vue'

  export default {
    name: 'TopBar2',
    components: {
      MetricTile
    },
    data: () => {
      return {
        topBar: {
          "totalChatRequests": {
            "name": "Total Chat<br>Requests",
            "value": 0
          },
          "totalConnectChats": {
            "name": "Total Connected <br>Chats",
            "value": 0
          },
          "totalInteractiveChats": {
            "name": "Total Interactive <br>Chats",
            "value": 0
          },
          "totalChatsInQueue": {
            "name": "Total Chats <br>In Queue",
            "value": 0
          },
          "totalAbandonedChats": {
            "name": "Total Abandoned <br>Chats",
            "value": 0
          },
          "abandonmentRate": {
            "name": "Abandonment <br>Rate",
            "value": 0
          }
        },
        bottomBar: {

        }
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