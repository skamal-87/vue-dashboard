<template>
  <section>
    <section class="card-non-interactive dashboard-graph-widgets">
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
        columns: [['Skill ID', 'Avg. Time To Ans.', 'Total Time To Ans.', 'Avg. Time To Abandon', 'Total Time To Abandon', 'Abandon Rate', 'Entered Queue', 'Abandoned Chats', 'Connected', 'Max Queue Size', 'Min Queue Size', 'Avg. Queue Size', 'Current Queue Size', 'Queue Size Sum', 'Queue Size Count', 'Current Avail. Slots', 'Max Avail. Slots', 'Min Avail. Slots', 'Avg. Avail. Slots', 'Avail. Sum', 'Avail. Count']]
      }
    },
    computed: {
      queueHealthMetrics() {
        let data = this.$store.getters.queueHealthData;
        let dataArr = [['All', data.metricsTotals.avgTimeToAnswer, data.metricsTotals.totalTimeToAnswer, data.metricsTotals.avgTimeToAbandon, data.metricsTotals.totalTimeToAbandon, data.metricsTotals.abandonmentRate, data.metricsTotals.enteredQEng, data.metricsTotals.abandonedEng, data.metricsTotals.connectedEng, data.metricsTotals.maxQueueSize, data.metricsTotals.minQueueSize, data.metricsTotals.averageQueueSize, data.metricsTotals.currentQueueSize, data.metricsTotals.queueSizeSum, data.metricsTotals.queueSizeCount, data.metricsTotals.currentAvailableSlots, data.metricsTotals.maxAvailableSlots, data.metricsTotals.minAvailableSlots, data.metricsTotals.averageAvailableSlots, data.metricsTotals.availableSlotsSum, data.metricsTotals.availableSlotsCount]];
        /* Loop through all skills and add them to the array. */
        Object.keys(data.skillsMetrics).forEach(function(currentKey) {
            let skillArr = [currentKey,  data.skillsMetrics[currentKey].avgTimeToAnswer,  data.skillsMetrics[currentKey].totalTimeToAnswer,  data.skillsMetrics[currentKey].avgTimeToAbandon,  data.skillsMetrics[currentKey].totalTimeToAbandon,  data.skillsMetrics[currentKey].abandonmentRate,  data.skillsMetrics[currentKey].enteredQEng,  data.skillsMetrics[currentKey].abandonedEng,  data.skillsMetrics[currentKey].connectedEng,  data.skillsMetrics[currentKey].maxQueueSize,  data.skillsMetrics[currentKey].minQueueSize,  data.skillsMetrics[currentKey].averageQueueSize,  data.skillsMetrics[currentKey].currentQueueSize,  data.skillsMetrics[currentKey].queueSizeSum,  data.skillsMetrics[currentKey].queueSizeCount,  data.skillsMetrics[currentKey].currentAvailableSlots,  data.skillsMetrics[currentKey].maxAvailableSlots,  data.skillsMetrics[currentKey].minAvailableSlots,  data.skillsMetrics[currentKey].averageAvailableSlots,  data.skillsMetrics[currentKey].availableSlotsSum,  data.skillsMetrics[currentKey].availableSlotsCount];
            dataArr.push(skillArr);
        });
        return dataArr;
      },
    }
  }
</script>
