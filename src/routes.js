import ChatDashboard from './components/dashboards/chat/ChatDashboard.vue'
import QueueHealth from './components/dashboards/chat/QueueHealth.vue';
import AgentActivity from './components/dashboards/chat/AgentActivity.vue';
import EngagementActivity from './components/dashboards/chat/EngagementActivity.vue';
import SLA from './components/dashboards/chat/SLA.vue';
import CurrentQueue from './components/dashboards/chat/CurrentQueue.vue';
import Login from './components/login/Login.vue';
import MessagingDashboard from './components/dashboards/messaging/MessagingDashboard.vue';
import Settings from './components/settings/Settings.vue'
import store from './store/store.js';

export const routes = [
  { path: '', component: ChatDashboard, beforeEnter: (to,from,next) =>{
    const authed = store.getters.userAuthBody.authenticated
    if (!authed) {
      next('/login')
    } else {
      next()
    }}
  },
  { path: '/queueHealthDashboard', component: QueueHealth },
  { path: '/agentActivityDashboard', component: AgentActivity },
  { path: '/engagementActivityDashboard', component: EngagementActivity },
  { path: '/currentQueue', component: CurrentQueue },
  { path: '/slaDashboard', component: SLA },
  { path: '/login', component: Login, name: 'login'},
  { path: '/MessagingDashboard', component: MessagingDashboard},
  { path: '/settings', component: Settings},
  { path: '/redirect-me', redirect:'/login'}
];
