<template>
  <section>
    <TopBarMetrics class="tob-bar-metrics"></TopBarMetrics>
    <!-- Current Queue Status / Combined Skill Status (shows skill online/offline) -->
      <!-- Current Queue Status -->
        <!-- current queue data
             online status for each skill
             queue health data -->
    <!-- SLA / Agents Status -->
      <!-- Show sla graph -->
      <!-- Total number of agents and their states -->
    <!-- Agent Statistics -->
      <!-- Shows: agent id, skills tied to agent, agent group
                  max chats, status, time in chat, avg handling time, avg chats per hour, agent util -->
    <!-- Graph - Avg Time to answer past 24hr / Avg Time to answer/abandon -->
      <!-- Queue health data -->
  </section>
</template>

<script>
  import TopBarMetrics from './TopBarMetrics.vue';
  import QueueHealth from '../other/QueueHealth.vue';

  export default {
    name: 'ChatDashboard',
    components: {
      TopBarMetrics,
      QueueHealth
    }
  }
</script>

<style scoped>
  .tob-bar-metrics {
    margin-top: 20px;
  }
</style>