<template>
  <div id="app" class="container-fluid">
    <NavBar></NavBar>
    <router-view class="main-container"></router-view>
  </div>
</template>

<script>
  import NavBar from './components/navbar/NavBar.vue';

  export default {
    name: 'app',
    components: {
      NavBar
    },
    created() {
      this.$store.dispatch('initData');
      this.$store.dispatch('fetchQueueHealth');
      this.$store.dispatch('fetchEngagementActivity');
      this.$store.dispatch('fetchAgentActivity');
      this.$store.dispatch('fetchCurrentQueue');
      this.$store.dispatch('fetchSLA');
    }
  }
</script>

<style scoped>
  .main-container {
    padding-left: 95px;
  }

  .container-fluid {
    padding: 0px;
  }
</style>

<style>
  html {
    background: #333;
    background: -webkit-linear-gradient(left top, #024, #402) fixed;
    background: -moz-linear-gradient(bottom right, #024, #402) fixed;
    background: linear-gradient(to bottom right, #024, #402) fixed;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #app {
    min-height: 100%;
    width: 100%;
    color: white;
    text-align: center;
  }

  body {
    overflow: auto;
  }

  .row {
    margin-left: 10px;
    margin-right: 10px;
  }

  .card {
    cursor: pointer;
    box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.25);
  }

  .card-non-interactive {
    box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.25);
  }

  .card:hover {
    border-radius: 4px;
    box-shadow: 0 0 5px 0 #fd6721;
    transition: .5s;
  }

  .dataTables_length, .dataTables_info {
    text-align: left;
  }

  .widget-title {
    font-size: 3rem;
  }

  hr {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  .paginate_button > a {
    background-color: #1C1436 !important;
    color: white !important;
    border-color: white !important;
  }

  .dashboard-graph-widgets {
    padding-top: 20px;
    margin: 20px 25px;
  }

  .tob-bar-metrics {
    margin-top: 20px;
  }
</style>
