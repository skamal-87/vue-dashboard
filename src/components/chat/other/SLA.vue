<template>
  <section>
    <section class="card-non-interactive dashboard-graph-widgets">
      <div class="row widget-title">
        SLA
        <hr>
      </div>
      <div class="row">
        <DataTable :columns="columns" :data="slaMetrics"></DataTable>
      </div>
    </section>
  </section>
</template>

<script>
  import DataTable from '../../dataTable/DataTable.vue';
  import Utils from '../../../utils';

  export default {
    name: 'SLA',
    components: {
      DataTable
    },
    data: () => {
      return {
        columns: [['Seconds', 'Chats', 'Percentage From Total', 'Accumulated']]
      }
    },
    computed: {
      slaMetrics() {
        let data = this.$store.getters.slaData;
        let dataArr = [];
        let secondsBucket = 0;
        let accumulated = 0;
        let chats = 0;
        let percentageFromTotal = 0;

        if (data.slaDataRange !== undefined) {
          /* Loop through all agents and add them to the array. */
          Object.keys(data.slaDataRange).forEach(function(currentKey) {
            secondsBucket = currentKey;
            accumulated = (data.slaDataRange[currentKey].accumulated * 100).toFixed(0) + "%";
            chats = data.slaDataRange[currentKey].chats;
            percentageFromTotal = (data.slaDataRange[currentKey].percentageFromTotal* 100).toFixed(0) + "%";
            let slaArr = [secondsBucket, chats, percentageFromTotal, accumulated];
            dataArr.push(slaArr);
          });
        }
        return dataArr;
      },
    }
  }
</script>
