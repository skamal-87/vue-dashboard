<template>
  <section>
    <TopBar class="tob-bar-metrics" :topBar="messagingLoadMetrics" :bottomBar="messagingConversationMetrics"></TopBar>
    <TopBar class="tob-bar-metrics" :topBar="messagingAgentMetrics" :bottomBar="messagingCsatMetrics"></TopBar>
    <div class="row tob-bar-metrics">
      <div class="col-sm-6">
        <canvas id="myChart23" style="width: 100%;height: 400px;"></canvas>
      </div>
      <div class="col-sm-6">
        <canvas id="myChart24" style="width: 100%;height: 400px;"></canvas>
      </div>
    </div>
  </section>
</template>

<script>
  import TopBar from '../shared/topbar/TopBar.vue';
  import Utils from '../../../utils';

  export default {
    name: 'MessagingDashboard',
    components: {
      TopBar
    },
    created() {
      this.$store.dispatch('fetchMessageSummary');
      this.$store.dispatch('fetchMessageConversation');
      this.$store.dispatch('fetchMessageCsatDistribution');
    },
    mounted() {
      var ctx = document.getElementById("myChart23");
      var ctx2 = document.getElementById("myChart24");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          },
          maintainAspectRatio: false,
          responsive: false
        }
      });
      var myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          },
          maintainAspectRatio: false,
          responsive: false
        }
      });
    },
    computed: {
      messagingLoadMetrics() {
        let data = this.$store.getters.messageSummary;
        let dataBar = {
          "minLoad": {
            "name": "Min <br>Load",
            "value": data.summaryResults.minLoad
          },
          "maxLoad": {
            "name": "Max <br>Load",
            "value": data.summaryResults.maxLoad
          },
          "weightedAvgLoad": {
            "name": "Weighted <br>Avg. Load",
            "value": data.summaryResults.weightedAvgLoad
          },
          "minConfiguredMaxSlots": {
            "name": "Min Configured <br>Max Slots",
            "value": data.summaryResults.minConfiguredMaxSlots
          },
          "maxConfiguredMaxSlots": {
            "name": "Max Configured <br>Max Slots",
            "value": data.summaryResults.maxConfiguredMaxSlots
          }
        };
        return dataBar;
      },
      messagingConversationMetrics() {
        let data = this.$store.getters.messageSummary;
        let conversationData = this.$store.getters.messageConversation;
        let avgTime_resolvedConversations = Utils.secondsToHms(conversationData.agentsMetrics.metricsTotals.avgTime_resolvedConversations/1000);
        let dataBar = {
          "openAssignedConversations": {
            "name": "Open Assigned<br>Conversations",
            "value": data.summaryResults.openAssignedConversations
          },
          "totalResolvedConversations": {
            "name": "Conversations <br>Resolved",
            "value": conversationData.agentsMetrics.metricsTotals.totalResolvedConversations
          },
          "resolvedConversations_byCCP": {
            "name": "Resolved <br>By CCP",
            "value": conversationData.agentsMetrics.metricsTotals.resolvedConversations_byCCP
          },
          "resolvedConversations_byConsumer": {
            "name": "Resolved <br>By Consumer",
            "value": conversationData.agentsMetrics.metricsTotals.resolvedConversations_byConsumer
          },
          "avgTime_resolvedConversations": {
            "name": "Avg. <br>Handling Time",
            "value": avgTime_resolvedConversations
          }
        };
        return dataBar;
      },
      messagingAgentMetrics() {
        let data = this.$store.getters.messageSummary;
        let dataBar = {
          "numOnlineAgents": {
            "name": "Online <br>Agents",
            "value": data.summaryResults.numOnlineAgents
          },
          "numBackSoonAgents": {
            "name": "Back Soon <br>Agents",
            "value": data.summaryResults.numBackSoonAgents
          },
          "numAwayAgents": {
            "name": "Away <br>Agents",
            "value": data.summaryResults.numAwayAgents
          }
        };
        return dataBar;
      },
      messagingCsatMetrics() {
        let data = this.$store.getters.messageCsatDistribution;
        let metricsTotals = data.agentsMetrics.metricsTotals;
        let dataBar = {
          "csat_score": {
            "name": "CSAT <br>  &nbsp;",
            "value": (metricsTotals.csat_score* 100).toFixed(0) + "%"
          },
          "total_answers": {
            "name": "Total <br>Answers",
            "value": metricsTotals.total_answers
          },
          "positive_answers": {
            "name": "Positive <br>Answers",
            "value": metricsTotals.positive_answers
          }
        };
        return dataBar;
      }
    }
  }
</script>
