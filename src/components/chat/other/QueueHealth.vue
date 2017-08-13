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
  import Utils from '../../../utils';

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
        let skillID = "All";
        let avgTimeToAbandon = Utils.secondsToHms(data.metricsTotals.avgTimeToAbandon);
        let totalTimeToAnswer = Utils.secondsToHms(data.metricsTotals.totalTimeToAnswer);
        let totalTimeToAbandon = Utils.secondsToHms(data.metricsTotals.totalTimeToAbandon);
        let enteredQEng = data.metricsTotals.enteredQEng;
        let avgTimeToAnswer = Utils.secondsToHms(data.metricsTotals.avgTimeToAnswer);
        let abandonmentRate = (data.metricsTotals.abandonmentRate * 100).toFixed(0) + "%";
        let abandonedEng = data.metricsTotals.abandonedEng;
        let connectedEng = data.metricsTotals.connectedEng;
        let maxQueueSize = data.metricsTotals.maxQueueSize;
        let minQueueSize = data.metricsTotals.minQueueSize;
        let averageQueueSize = (data.metricsTotals.averageQueueSize).toFixed(2);
        let currentQueueSize = data.metricsTotals.currentQueueSize;
        let queueSizeSum = data.metricsTotals.queueSizeSum;
        let queueSizeCount = data.metricsTotals.queueSizeCount;
        let currentAvailableSlots = data.metricsTotals.currentAvailableSlots;
        let maxAvailableSlots = data.metricsTotals.maxAvailableSlots;
        let minAvailableSlots = data.metricsTotals.minAvailableSlots;
        let averageAvailableSlots = (data.metricsTotals.averageAvailableSlots).toFixed(2);
        let availableSlotsSum = data.metricsTotals.availableSlotsSum;
        let availableSlotsCount = data.metricsTotals.availableSlotsCount;
        let dataArr = [[skillID, avgTimeToAnswer, totalTimeToAnswer, avgTimeToAbandon, totalTimeToAbandon, abandonmentRate, enteredQEng, abandonedEng, connectedEng, maxQueueSize, minQueueSize, averageQueueSize, currentQueueSize, queueSizeSum, queueSizeCount, currentAvailableSlots, maxAvailableSlots, minAvailableSlots, averageAvailableSlots, availableSlotsSum, availableSlotsCount]];
        /* Loop through all skills and add them to the array. */
        Object.keys(data.skillsMetrics).forEach(function(currentKey) {
          skillID = currentKey
          if (currentKey == -1) {
            skillID = "Unassigned"
          }
          avgTimeToAbandon = Utils.secondsToHms(data.skillsMetrics[currentKey].avgTimeToAbandon);
          totalTimeToAnswer = Utils.secondsToHms(data.skillsMetrics[currentKey].totalTimeToAnswer);
          totalTimeToAbandon = Utils.secondsToHms(data.skillsMetrics[currentKey].totalTimeToAbandon);
          enteredQEng = data.skillsMetrics[currentKey].enteredQEng;
          avgTimeToAnswer = Utils.secondsToHms(data.skillsMetrics[currentKey].avgTimeToAnswer);
          abandonmentRate = (data.skillsMetrics[currentKey].abandonmentRate * 100).toFixed(0) + "%";
          abandonedEng = data.skillsMetrics[currentKey].abandonedEng;
          connectedEng = data.skillsMetrics[currentKey].connectedEng;
          maxQueueSize = data.skillsMetrics[currentKey].maxQueueSize;
          minQueueSize = data.skillsMetrics[currentKey].minQueueSize;
          averageQueueSize = (data.skillsMetrics[currentKey].averageQueueSize).toFixed(2);
          currentQueueSize = data.skillsMetrics[currentKey].currentQueueSize;
          queueSizeSum = data.skillsMetrics[currentKey].queueSizeSum;
          queueSizeCount = data.skillsMetrics[currentKey].queueSizeCount;
          currentAvailableSlots = data.skillsMetrics[currentKey].currentAvailableSlots;
          maxAvailableSlots = data.skillsMetrics[currentKey].maxAvailableSlots;
          minAvailableSlots = data.skillsMetrics[currentKey].minAvailableSlots;
          averageAvailableSlots = (data.skillsMetrics[currentKey].averageAvailableSlots).toFixed(2);
          availableSlotsSum = data.skillsMetrics[currentKey].availableSlotsSum;
          availableSlotsCount = data.skillsMetrics[currentKey].availableSlotsCount;
          let skillArr = [skillID, avgTimeToAnswer, totalTimeToAnswer, avgTimeToAbandon, totalTimeToAbandon, abandonmentRate, enteredQEng, abandonedEng, connectedEng, maxQueueSize, minQueueSize, averageQueueSize, currentQueueSize, queueSizeSum, queueSizeCount, currentAvailableSlots, maxAvailableSlots, minAvailableSlots, averageAvailableSlots, availableSlotsSum, availableSlotsCount];
          dataArr.push(skillArr);
        });
        return dataArr;
      },
    }
  }
</script>
