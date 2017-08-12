<template>
  <section>
    <section class="card-non-interactive">
      <div class="row widget-title">
        Queue Health
        <hr>
      </div>
      <div class="row">
        <DataTable :columns="columns" :data="queueHealthMetrics"></DataTable>
      </div>
    </section>
  </section>
</template>

<script>
  import DataTable from '../../dataTable/DataTable.vue';

  export default {
    name: 'QueueHealth',
    components: {
      DataTable
    },
    data: () => {
      return {
        columns: ['Skill ID', 'Avg. Time To Ans.', 'Total Time To Ans.', 'Avg. Time To Abandon', 'Total Time To Abandon', 'Abandon Rate', 'Entered Queue', 'Abandoned Chats', 'Connected', 'Max Queue Size', 'Min Queue Size', 'Avg. Queue Size', 'Current Queue Size', 'Queue Size Sum', 'Queue Size Count', 'Current Avail. Slots', 'Max Avail. Slots', 'Min Avail. Slots', 'Avg. Avail. Slots', 'Avail. Sum', 'Avail. Count']
      }
    },
    computed: {
      queueHealthMetrics() {
        let data = this.$store.getters.queueHealthData;
        let data2 = ['All', data.metricsTotals.avgTimeToAnswer, 'Edinburgh', '61', '2011/04/25', '$320,800', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        return data2;
      },
    }
  }
</script>

<style scoped>
  .card-non-interactive {
    padding-top: 20px;
    margin: 20px 25px;
  }
</style>