<template>
  <section>
    <div v-for="(agentMetrics,index) in dataInt[0].agentsMetrics.metricsTotals" :key="index">
      <app-top-bar :agentMetrics="agentMetrics" :metricName="index" ></app-top-bar>
    </div>
  </section>
</template>

<script>
import TopBar from './TopBarOld.vue'
  export default {
    name: 'TopBarMetrics',
    components: {
      appTopBar: TopBar
    },
    computed: {
      dataInt() {
        let tempArr = [];
        let data = this.$store.getters.dataInt;
        Object.keys(data[0].agentsMetrics.metricsTotals).forEach(function(currentKey) {
          let obj = {
            name: currentKey,
            metric: data[0].agentsMetrics.metricsTotals[currentKey]
          };
          tempArr.push(obj);
        });
        console.log(tempArr);
        return tempArr;
      }
    }
  }
</script>

<style scoped>
  .row {
    margin-left: 10px;
    margin-right: 10px;
  }

  .card-title {
    font-size: 1.6rem;
    padding-top: 5px;
  }

  .card-metric {
    color: #00d1b2;
    font-size: 1.6rem;
  }
</style>