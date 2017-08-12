import ChatDashboard from './components/chat/dashboard/ChatDashboard.vue';
import QueueHealth from './components/chat/other/QueueHealth.vue';
import AgentActivity from './components/chat/other/AgentActivity.vue';

export const routes = [
  { path: '', component: ChatDashboard },
  { path: '/queueHealthDashboard', component: QueueHealth },
  { path: '/agentActivityDashboard', component: AgentActivity }
];
