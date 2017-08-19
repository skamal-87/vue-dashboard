<template>
  <section>
    <TopBar2 class="tob-bar-metrics" :topBar="messagingLoadMetrics" :bottomBar="messagingConversationMetrics"></TopBar2>
    <TopBar2 class="tob-bar-metrics" :topBar="messagingAgentMetrics" :bottomBar="messagingCsatMetrics"></TopBar2>
    <!-- bar
      CSAT
      Total Answers
      Positive Answers
    -->

    <!-- conversations resolved by graph -->
    <!-- csat dist graph -->
  </section>
</template>

<script>
  import TopBar2 from '../shared/topbar/TopBar2.vue';
  import Utils from '../../../utils';

  export default {
    name: 'MessagingDashboard',
    components: {
      TopBar2
    },
    created() {
      this.$store.dispatch('fetchMessageSummary');
      this.$store.dispatch('fetchMessageConversation');
      this.$store.dispatch('fetchMessageCsatDistribution');
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
