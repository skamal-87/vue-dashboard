<template>
  <section>
    <canvas id="csatchart" style="width: 100%;height: 400px;"></canvas>
    <p>{{chartData.data}}</p>
  </section>
</template>

<script>

  export default {
      data() {
          return{
              conversationsChart: null,
              csatChart: null
          }
      },
    props:[
      'chartData'
    ],
    computed() {
      let ctxCSAT = document.getElementById(chartData.title);
      this.csatChart = new Chart(ctxCSAT, {
        type: chartData.type,
        data: chartData.data,
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
    },
    methods: {
      updateChartData: (chart, data) => {
        chart.data.datasets.forEach((dataset) => {
          dataset.data = data;
        });
        chart.update();
      }
    }
  }
</script>
