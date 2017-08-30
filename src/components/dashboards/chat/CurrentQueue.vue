<template>
  <section>
    <section class="card-non-interactive dashboard-graph-widgets">
      <div class="row widget-title">
        Current Queue
        <hr>
      </div>
      <div class="row">
        <DataTable :columns="columns" :data="CurrentQueueMetrics"></DataTable>
      </div>
    </section>
  </section>
</template>

<script>
  import DataTable from '../../dataTable/DataTable.vue';

  export default {
    name: 'CurrentQueue',
    components: {
      DataTable
    },
    data: () => {
      return {
        columns: [['Skill ID', 'Current Available Slots', 'Current Queue Size']]
      }
    },
    computed: {
      CurrentQueueMetrics() {
        let data = this.$store.getters.currentQueueData;
        let dataArr = [];
        let skillID = 'All';
        let currentQueueSize = 0;
        let currentAvailableSlots = 0;

        /* Check to see if the data object totals property */
        if (data.totals !== undefined) {
          currentQueueSize = data.totals.currentQueueSize;
          currentAvailableSlots = data.totals.currentAvailableSlots;
          if (currentQueueSize == -1) {
            currentQueueSize = "No Data";
            currentAvailableSlots = "No Data";
          }
          let skillArr = [skillID, currentAvailableSlots, currentQueueSize];
          dataArr.push(skillArr);
        }
        
        if (data.skills !== undefined) {
          /* Loop through all agents and add them to the array. */
          Object.keys(data.skills).forEach(function(currentKey) {
            skillID = currentKey
            if (currentKey == -1) {
              skillID = "Unassigned"
            }
            currentQueueSize = data.skills[currentKey].currentQueueSize;
            currentAvailableSlots = data.skills[currentKey].currentAvailableSlots;
            if (currentQueueSize == -1) {
              currentQueueSize = "No Data";
              currentAvailableSlots = "No Data";
            }
            let skillArr = [skillID, currentAvailableSlots, currentQueueSize];
            dataArr.push(skillArr);
          });
        }
        return dataArr;
      },
    },
    created() {
      this.$store.dispatch('fetchQueueHealth');
    }
  }
</script>
