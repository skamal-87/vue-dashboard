
import QueueHealth from './components/dashboards/chat/QueueHealth.vue';
import AgentActivity from './components/dashboards/chat/AgentActivity.vue';
import EngagementActivity from './components/dashboards/chat/EngagementActivity.vue';
import SLA from './components/dashboards/chat/SLA.vue';
import CurrentQueue from './components/dashboards/chat/CurrentQueue.vue';
import Login from './components/login/Login.vue';
import MessagingDashboard from './components/dashboards/messaging/MessagingDashboard.vue';
import Settings from './components/settings/Settings.vue'

export const routes = [
  { path: '', component: ChatDashboard },
  { path: '/queueHealthDashboard', component: QueueHealth },
  { path: '/agentActivityDashboard', component: AgentActivity },
  { path: '/engagementActivityDashboard', component: EngagementActivity },
  { path: '/currentQueue', component: CurrentQueue },
  { path: '/slaDashboard', component: SLA },
  { path: '/login', component: Login},
  { path: '/MessagingDashboard', component: MessagingDashboard},
  { path: '/settings', component: Settings}
];
