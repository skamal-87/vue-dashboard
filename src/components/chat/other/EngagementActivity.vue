<template>
  <section>
    <section class="card-non-interactive dashboard-graph-widgets" v-show="showSkillLevelTable">
      <div class="row widget-title">
        Engagement Activity - Skill Level
        <hr>
      </div>
      <div class="row">
        <DataTable :columns="skillColumns" :data="skillLevelEngagementActivityMetrics" tableID="skillLevel"></DataTable>
      </div>
    </section>

    <section class="card-non-interactive dashboard-graph-widgets" v-show="showAgentLevelTable">
      <div class="row widget-title">
        Engagement Activity - Agent Level
        <hr>
      </div>
      <div class="row">
        <DataTable :columns="agentColumns" :data="agentLevelEngagementActivityMetrics" tableID="agentLevel"></DataTable>
      </div>
    </section>

    <section class="card-non-interactive dashboard-graph-widgets" v-show="showTotalLevelTable">
      <div class="row widget-title">
        Engagement Activity - Totals
        <hr>
      </div>
      <div class="row">
        <DataTable :columns="totalColumns" :data="totalEngagementActivityMetrics" tableID="totalLevel"></DataTable>
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
        skillColumns: [['Skill ID', 'Agent ID', 'Total Interactive Chats', 'Total Non Interactive Chats', 'Total Handling Time', 'Total Non Interactive Handling Time', 'Connected Engagements']],
        agentColumns: [['Agent ID', 'Total Interactive Chats', 'Total Non Interactive Chats', 'Total Handling Time', 'Total Non Interactive Handling Time', 'Connected Engagements']],
        totalColumns: [['Total Interactive Chats', 'Total Non Interactive Chats', 'Total Handling Time', 'Total Non Interactive Handling Time', 'Connected Engagements']],
        showSkillLevelTable: true,
        showAgentLevelTable: true,
        showTotalLevelTable: true
      }
    },
    computed: {
      skillLevelEngagementActivityMetrics() {
        let data = this.$store.getters.engagementActivityData;
        let dataArr = [];

        if (data.skillsMetricsPerAgent !== undefined) {
          /* Totals for all skills */
          let skillId = "All";
          let agentId = "All";
          let totalInteractiveChats = data.skillsMetricsPerAgent.metricsTotals.totalInteractiveChats;
          let totalNonInteractiveChats = data.skillsMetricsPerAgent.metricsTotals.totalNonInteractiveChats;
          let totalHandlingTime = Utils.secondsToHms(data.skillsMetricsPerAgent.metricsTotals.totalHandlingTime);
          let nonInteractiveTotalHandlingTime = Utils.secondsToHms(data.skillsMetricsPerAgent.metricsTotals.nonInteractiveTotalHandlingTime);
          let connectedEngagements = data.skillsMetricsPerAgent.metricsTotals.connectedEngagements;
          let skillsArr = [skillId, agentId, totalInteractiveChats, totalNonInteractiveChats, totalHandlingTime, nonInteractiveTotalHandlingTime, connectedEngagements];
          dataArr.push(skillsArr);

          /* Loop through all skills and add them to the array. */
          Object.keys(data.skillsMetricsPerAgent.metricsPerSkill).forEach(function(currentKey) {
            skillId = currentKey
            if (currentKey == -1) {
              skillId = "Unassigned"
            }
            /* Totals for this skill */
            agentId = "All";
            totalInteractiveChats = data.skillsMetricsPerAgent.metricsPerSkill[currentKey].metricsTotals.totalInteractiveChats;
            totalNonInteractiveChats = data.skillsMetricsPerAgent.metricsPerSkill[currentKey].metricsTotals.totalNonInteractiveChats;
            totalHandlingTime = Utils.secondsToHms(data.skillsMetricsPerAgent.metricsPerSkill[currentKey].metricsTotals.totalHandlingTime);
            nonInteractiveTotalHandlingTime = Utils.secondsToHms(data.skillsMetricsPerAgent.metricsPerSkill[currentKey].metricsTotals.nonInteractiveTotalHandlingTime);
            connectedEngagements = data.skillsMetricsPerAgent.metricsPerSkill[currentKey].metricsTotals.connectedEngagements;
            let skillsArr = [skillId, agentId, totalInteractiveChats, totalNonInteractiveChats, totalHandlingTime, nonInteractiveTotalHandlingTime, connectedEngagements];
            dataArr.push(skillsArr);

            /* Loop through all agents and add them to the array. */
            Object.keys(data.skillsMetricsPerAgent.metricsPerSkill[currentKey].metricsPerAgent).forEach(function(currentSubKey) {
              agentId = currentSubKey;
              totalInteractiveChats = data.skillsMetricsPerAgent.metricsPerSkill[currentKey].metricsPerAgent[currentSubKey].totalInteractiveChats;
              totalNonInteractiveChats = data.skillsMetricsPerAgent.metricsPerSkill[currentKey].metricsPerAgent[currentSubKey].totalNonInteractiveChats;
              totalHandlingTime = Utils.secondsToHms(data.skillsMetricsPerAgent.metricsPerSkill[currentKey].metricsPerAgent[currentSubKey].totalHandlingTime);
              nonInteractiveTotalHandlingTime = Utils.secondsToHms(data.skillsMetricsPerAgent.metricsPerSkill[currentKey].metricsPerAgent[currentSubKey].nonInteractiveTotalHandlingTime);
              connectedEngagements = data.skillsMetricsPerAgent.metricsPerSkill[currentKey].metricsPerAgent[currentSubKey].connectedEngagements;
              let agentsArr = [skillId, agentId, totalInteractiveChats, totalNonInteractiveChats, totalHandlingTime, nonInteractiveTotalHandlingTime, connectedEngagements];
              dataArr.push(agentsArr);
            });
          });
        } else {
          this.showSkillLevelTable = false;
        }


        return dataArr;
      },
      agentLevelEngagementActivityMetrics() {
        let data = this.$store.getters.engagementActivityData;
        let dataArr = [];

        if (data.agentsMetrics !== undefined) {
          /* Totals for all agents */
          let agentId = 'All';
          let totalInteractiveChats = data.agentsMetrics.metricsTotals.totalInteractiveChats;
          let totalNonInteractiveChats = data.agentsMetrics.metricsTotals.totalNonInteractiveChats;
          let totalHandlingTime = Utils.secondsToHms(data.agentsMetrics.metricsTotals.totalHandlingTime);
          let nonInteractiveTotalHandlingTime = Utils.secondsToHms(data.agentsMetrics.metricsTotals.nonInteractiveTotalHandlingTime);
          let connectedEngagements = data.agentsMetrics.metricsTotals.connectedEngagements;
          let agentsArr = [agentId, totalInteractiveChats, totalNonInteractiveChats, totalHandlingTime, nonInteractiveTotalHandlingTime, connectedEngagements];
          dataArr.push(agentsArr);

          /* Loop through all agents and add them to the array. */
          Object.keys(data.agentsMetrics.metricsPerAgent).forEach(function(currentKey) {
            agentId = currentKey;
            totalInteractiveChats = data.agentsMetrics.metricsPerAgent[currentKey].totalInteractiveChats;
            totalNonInteractiveChats = data.agentsMetrics.metricsPerAgent[currentKey].totalNonInteractiveChats;
            totalHandlingTime = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey].totalHandlingTime);
            nonInteractiveTotalHandlingTime = Utils.secondsToHms(data.agentsMetrics.metricsPerAgent[currentKey].nonInteractiveTotalHandlingTime);
            connectedEngagements = data.agentsMetrics.metricsPerAgent[currentKey].connectedEngagements;
            let agentsArr = [agentId, totalInteractiveChats, totalNonInteractiveChats, totalHandlingTime, nonInteractiveTotalHandlingTime, connectedEngagements];
            dataArr.push(agentsArr);
          });
        } else {
          this.showAgentLevelTable = false;
        }
        return dataArr;
      },
      totalEngagementActivityMetrics() {
        let data = this.$store.getters.engagementActivityData;
        let dataArr = [];

        if (data.metricsTotals !== undefined) {
          let totalInteractiveChats = data.metricsTotals.totalInteractiveChats;
          let totalNonInteractiveChats = data.metricsTotals.totalNonInteractiveChats;
          let totalHandlingTime = Utils.secondsToHms(data.metricsTotals.totalHandlingTime);
          let nonInteractiveTotalHandlingTime = Utils.secondsToHms(data.metricsTotals.nonInteractiveTotalHandlingTime);
          let connectedEngagements = data.metricsTotals.connectedEngagements;
          let totalsArr = [totalInteractiveChats, totalNonInteractiveChats, totalHandlingTime, nonInteractiveTotalHandlingTime, connectedEngagements];
          dataArr.push(totalsArr);
        } else {
          this.showTotalLevelTable = false;
        }
        return dataArr;
      }
    }
  }
</script>
