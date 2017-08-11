import QueueHealth from './components/chat/other/QueueHealth.vue';
import ChatDashboard from './components/chat/dashboard/ChatDashboard.vue';

export const routes = [
  { path: '', component: ChatDashboard },
  { path: '/queueHealthDashboard', component: QueueHealth }
];
