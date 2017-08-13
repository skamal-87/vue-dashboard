<template>
  <section>
    <section class="card-non-interactive dashboard-graph-widgets">
      <div class="row widget-title">
        Engagement Activity
        <hr>
      </div>
      <div class="row">
        <DataTable :columns="columns" :data="AgentActivityMetrics"></DataTable>
      </div>
    </section>
  </section>
</template>

<script>
  import DataTable from '../../dataTable/DataTable.vue';
  import Utils from '../../../utils';

  export default {
    name: 'EngagementActivity',
    components: {
      DataTable
    },
    data: () => {
      return {
        columns: [['Agent ID', 'Online Total', 'Online Chatting', 'Online Not Chatting', 'Online Max Concurrency', 'Back Soon Total', 'Back Soon Chatting', 'Back Soon Not Chatting', 'Back Soon Max Concurrency', 'Away Total', 'Away Chatting', 'Away Not Chatting', 'Away Max Concurrency', 'Logged In Total', 'Logged In Chatting', 'Logged In Chatting', 'Logged In Max Concurrency']]
      }
    },
    computed: {
      AgentActivityMetrics() {
        let data = this.$store.getters.agentActivityData;
        let dataArr = [];
        /* Loop through all agents and add them to the array. */
        Object.keys(data.agentsMetrics.metricsPerAgent).forEach(function(currentKey) {
          let onlineTotal = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][0].value.total);
          let onlineChatting = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][0].value.chatting);
          let onlineNotChatting = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][0].value.notChatting);
          let onlineMaxConcurrency = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][0].value.chattingInMaxConcurrency);
          let backSoonTotal = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][1].value.total);
          let backSoonChatting = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][1].value.chatting);
          let backSoonNotChatting = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][1].value.notChatting);
          let backSoonMaxConcurrency = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][1].value.chattingInMaxConcurrency);
          let awayTotal = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][2].value.total);
          let awayChatting = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][2].value.chatting);
          let awayNotChatting = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][2].value.notChatting);
          let awayMaxConcurrency = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][2].value.chattingInMaxConcurrency);
          let loggedInTotal = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][3].value.total);
          let loggedInChatting = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][3].value.chatting);
          let loggedInNotChatting = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][2].value.notChatting);
          let loggedInMaxConcurrency = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey][2].value.chattingInMaxConcurrency);
          let agentArr = [currentKey, onlineTotal, onlineChatting, onlineNotChatting, onlineMaxConcurrency, backSoonTotal, backSoonChatting, backSoonNotChatting, backSoonMaxConcurrency, awayTotal, awayChatting, awayNotChatting, awayMaxConcurrency, loggedInTotal, loggedInChatting, loggedInNotChatting, loggedInMaxConcurrency];
          dataArr.push(agentArr);
        });
        return dataArr;
      },
    }
  }
</script>
