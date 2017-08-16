import ChatDashboard from './components/chat/dashboard/ChatDashboard.vue';
import QueueHealth from './components/chat/other/QueueHealth.vue';
import AgentActivity from './components/chat/other/AgentActivity.vue';
import EngagementActivity from './components/chat/other/EngagementActivity.vue';
import SLA from './components/chat/other/SLA.vue';
import CurrentQueue from './components/chat/other/CurrentQueue.vue';
import Login from './components/Login.vue';
import MessagingDashboard from './components/messaging/dashboard/MessagingDashboard.vue';

export const routes = [
  { path: '', component: ChatDashboard },
  { path: '/queueHealthDashboard', component: QueueHealth },
  { path: '/agentActivityDashboard', component: AgentActivity },
  { path: '/engagementActivityDashboard', component: EngagementActivity },
  { path: '/currentQueue', component: CurrentQueue },
  { path: '/slaDashboard', component: SLA },
  { path: '/login', component: Login},
  { path: '/MessagingDashboard', component: MessagingDashboard}
];
