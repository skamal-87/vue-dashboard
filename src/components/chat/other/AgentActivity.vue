<template>
  <section>
    <section class="card-non-interactive dashboard-graph-widgets">
      <div class="row widget-title">
        Agent Activity
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

  export default {
    name: 'AgentActivity',
    components: {
      DataTable
    },
    data: () => {
      return {
        columns: [['Skill ID', 'Avg. Time To Ans.', 'Total Time To Ans.', 'Avg. Time To Abandon', 'Total Time To Abandon', 'Abandon Rate', 'Entered Queue', 'Abandoned Chats', 'Connected', 'Max Queue Size', 'Min Queue Size', 'Avg. Queue Size', 'Current Queue Size', 'Queue Size Sum', 'Queue Size Count', 'Current Avail. Slots', 'Max Avail. Slots', 'Min Avail. Slots', 'Avg. Avail. Slots', 'Avail. Sum', 'Avail. Count']]
      }
    },
    computed: {
      AgentActivityMetrics() {
        let data = this.$store.getters.queueHealthData;
        let dataArr = [['All', data.metricsTotals.avgTimeToAnswer, 'Edinburgh', '61', '2011/04/25', '$320,800', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']];
        return dataArr;
      },
    }
  }
</script>
