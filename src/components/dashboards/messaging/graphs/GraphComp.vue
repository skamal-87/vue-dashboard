<template>
  <section>
    <canvas :id="chartID" style="width: 100%;height: 400px;"></canvas>
  </section>
</template>

<script>

  export default {
      data() {
          return{
              chart: null,
              csatChart: null
          }
      },
    props:[
      'chartData',
      'chartID'
    ],
    mounted() {
      console.log(this.chartData);
      let ctx = document.getElementById(this.chartID);
      this.chart = new Chart(ctx, {
        type: this.chartData.type,
        data: this.chartData.data,
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          },
          maintainAspectRatio: false,
          responsive: false
        }
      });
    }
  }
</script>
