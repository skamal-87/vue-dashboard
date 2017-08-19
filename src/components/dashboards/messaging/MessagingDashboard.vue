<template>
  <section>
    <TopBar2 class="tob-bar-metrics" :topBar="messageSummaryTopMetrics" :bottomBar="messageSummaryBottomMetrics"></TopBar2>

    <!-- bar
      Conversations Resolved
      Resolved By CCP
      Resolved By Consumer
      Average Handling Time
    -->

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

  export default {
    name: 'MessagingDashboard',
    components: {
      TopBar2
    },
    created() {
      this.$store.dispatch('fetchMessageSummary');
    },
    computed: {
      messageSummaryTopMetrics() {
        let data = this.$store.getters.messageSummary;
        let topBar = {
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
        return topBar;
      },
      messageSummaryBottomMetrics() {
        let data = this.$store.getters.messageSummary;
        let bottomBar = {
          "openAssignedConversations": {
            "name": "Open Assigned<br>Conversations",
            "value": data.summaryResults.openAssignedConversations
          },
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
        return bottomBar;
      }
    }
  }
</script>
