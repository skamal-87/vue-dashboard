<template>
  <section>
    <canvas id="csatChart" style="width: 100%;height: 400px;"></canvas>
  </section>
</template>

<script>

  export default {
    data: () => {
      return {
        conversationsChart: null,
        csatChart: null,
        conversationsChartData: [12, 19, 3],
        csatChartData: [12, 19, 3, 5, 2]
      }
    },
    created() {
      this.$store.dispatch('fetchMessageCsatDistribution');
    },
    mounted() {
      let ctxCSAT = document.getElementById("csatChart");
      this.csatChart = new Chart(ctxCSAT, {
        type: 'bar',
        data: {
          labels: ["Answer 5", "Answer 4", "Answer 3", "Answer 2", "Answer 1"],
          datasets: [{
            label: '# of Answers',
            data: this.csatChartData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
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
    computed: {
      messagingCsatMetrics() {
        let data = this.$store.getters.messageCsatDistribution;
        let metricsTotals = data.agentsMetrics.metricsTotals;
        let dataBar = {
          "csat_score": {
            "name": "CSAT <br>  &nbsp;",
            "value": (metricsTotals.csat_score* 100).toFixed(0) + "%"
          },
          "total_answers": {
            "name": "Total <br>Answers",
            "value": metricsTotals.total_answers
          },
          "positive_answers": {
            "name": "Positive <br>Answers",
            "value": metricsTotals.positive_answers
          }
        };
        return dataBar;
      }
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
