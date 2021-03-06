<template>
  <section>
    <TopBar class="tob-bar-metrics" :topBar="messagingLoadMetrics" :bottomBar="messagingConversationMetrics"></TopBar>
    <TopBar class="tob-bar-metrics" :topBar="messagingAgentMetrics" :bottomBar="messagingCsatMetrics"></TopBar>
    <div class="row">
      <DataTable :columns="columns" :data="messagingStatusMetrics"></DataTable>
    </div>
    <div class="row tob-bar-metrics">
      <app-graph-comp v-for="chart in chartData" :chartData="chart" :chartID="chart.id" class="col-sm-6"></app-graph-comp>
    </div>
  </section>
</template>

<script>
  import TopBar from '../shared/topbar/TopBar.vue';
  import Utils from '../../../utils';
  import GraphComp from './graphs/GraphComp.vue';
  import DataTable from '../../dataTable/DataTable.vue';

  export default {
    name: 'MessagingDashboard',
    components: {
      TopBar,
      appGraphComp: GraphComp,
      DataTable
    },
    data: () => {
      return {
        conversationsChartData: [12, 19, 3],
        csatChartData: [12, 19, 3, 5, 2],
        chartData: [
          {
            id: 'conversationsChart2',
            type: 'bar',
            title: 'conversationsChart',
            data: {
              labels: ["CCP", "Consumer", "System"],
              datasets: [{
                label: '# of Conversations Resolved',
                data: [12, 19, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
              }]
              }
          },
          {
            id: 'csatChart2',
            type: 'bar',
            title: 'csatChart',
            data: {
              labels: ["Answer 5", "Answer 4", "Answer 3", "Answer 2", "Answer 1"],
              datasets: [{
                label: '# of Answers',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
              }]
            }
          }
        ],
        columns: [['Agent Name', 'Agent Skills', 'Agent Group', 'Current Status', 'Current Status Duration']]
      }
    },
    created() {
      this.$store.dispatch('fetchMessageSummary');
      this.$store.dispatch('fetchMessageConversation');
      this.$store.dispatch('fetchMessageCsatDistribution');
      this.$store.dispatch('fetchMessageStatus');
    },
    computed: {
      messagingStatusMetrics() {
        let data = this.$store.getters.messageStatus;
        let dataArr = [];
        /* Loop through all agents and add them to the array. */
        Object.keys(data.agentStatusRecords).forEach(function(currentKey) {
          let agentName = data.agentStatusRecords[currentKey].agentName;
          let agentSkills = data.agentStatusRecords[currentKey].agentSkills;
          let agentGroupName = data.agentStatusRecords[currentKey].agentGroupName;
          let currentStatus = data.agentStatusRecords[currentKey].currentStatus;
          let currentStatusDuration = data.agentStatusRecords[currentKey].currentStatusDuration;
          let agentArr = [agentName, agentSkills, agentGroupName, currentStatus, currentStatusDuration];
          dataArr.push(agentArr);
        });
        return dataArr;
      },
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
    },
    methods: {
      updateChartData: (chart, data) => {
        chart.data.datasets.forEach((dataset) => {
          dataset.data = data;
        });
        chart.update();
      }
    }
  }
</script>
