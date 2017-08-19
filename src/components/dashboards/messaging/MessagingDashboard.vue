<template>
  <section>
    <TopBar2 class="tob-bar-metrics" :topBar="topBar" :bottomBar="bottomBar"></TopBar2>
  </section>
</template>

<script>
  import TopBar2 from '../shared/topbar/TopBar2.vue';

  export default {
    name: 'MessagingDashboard',
    components: {
      TopBar2
    },
    data: () => {
      return {
        topBar: {
          "maxConfiguredMaxSlots": {
            "name": "Max Configured <br>Max Slots",
            "value": 0
          },
          "minConfiguredMaxSlots": {
            "name": "Min Configured <br>Max Slots",
            "value": 0
          },
          "maxLoad": {
            "name": "Max <br>Load",
            "value": 0
          },
          "minLoad": {
            "name": "Min <br>Load",
            "value": 0
          },
          "weightedAvgLoad": {
            "name": "Weighted <br>Avg. Load",
            "value": 0
          }
        },
        bottomBar: {
          "openAssignedConversations": {
            "name": "Open Assigned<br>Conversations",
            "value": 0
          },
          "numOnlineAgents": {
            "name": "Online <br>Agents",
            "value": 0
          },
          "numBackSoonAgents": {
            "name": "Back Soon <br>Agents",
            "value": 0
          },
          "numAwayAgents": {
            "name": "Away <br>Agents",
            "value": 0
          }
        }
      }
    },
    created() {
      this.$store.dispatch('fetchMessageSummary');
    },
    computed: {
      messageSummaryMetrics() {
        let data = this.$store.getters.messageSummary;

        return data;
      }
    }
  }
</script>
