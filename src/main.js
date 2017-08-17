import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import store from './store/store.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

  // 

// works in routes but not in here (this is global and what we need)
router.beforeEach((to, from, next) => {
  const authed = store.getters.userAuthBody.authenticated
  if (!authed) {
    next()
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

