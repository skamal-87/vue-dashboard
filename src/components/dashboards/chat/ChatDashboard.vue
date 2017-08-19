<template>
  <section>
    <TopBar class="tob-bar-metrics" :topBar="topBar" :bottomBar="bottomBar"></TopBar>
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
  import TopBarMetrics from '../shared/topbar/TopBarMetrics.vue';
  import QueueHealth from './QueueHealth.vue';
  import TopBar from '../shared/topbar/TopBar.vue';

  export default {
    name: 'ChatDashboard',
    components: {
      TopBar,
      QueueHealth
    },
    data: () => {
      return {
        topBar: {
          "totalChatRequests": {
            "name": "Total Chat<br>Requests",
            "value": 0
          },
          "totalConnectChats": {
            "name": "Total Connected <br>Chats",
            "value": 0
          },
          "totalInteractiveChats": {
            "name": "Total Interactive <br>Chats",
            "value": 0
          },
          "totalChatsInQueue": {
            "name": "Total Chats <br>In Queue",
            "value": 0
          },
          "totalAbandonedChats": {
            "name": "Total Abandoned <br>Chats",
            "value": 0
          },
          "abandonmentRate": {
            "name": "Abandonment <br>Rate",
            "value": 0
          }
        },
        bottomBar: {
          "totalChatRequests": {
            "name": "Agents<br>Online",
            "value": 0
          },
          "totalConnectChats": {
            "name": "Total Available <br>Slots",
            "value": 0
          },
          "totalInteractiveChats": {
            "name": "Avg. Handling <br>Time",
            "value": 0
          },
          "totalChatsInQueue": {
            "name": "Avg. Agent <br>Utilization",
            "value": 0
          },
          "totalAbandonedChats": {
            "name": "Avg. Time <br>To Answer",
            "value": 0
          },
          "abandonmentRate": {
            "name": "Avg. Time <br>To Abandon",
            "value": 0
          }
        }
      }
    }
  }
</script>
