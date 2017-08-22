import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import config from '../config.js';

import dataInt from '../data/dataInt';
import qh from '../data/queueHealth';
import engagementActivity from '../data/engagementActivity';
import agentActivity from '../data/agentActivity';
import currentQueue from '../data/currentQueue';
import SLA from '../data/SLA';
import auth from './modules/auth';
import messageSummary from './modules/message-summary';
import messageConversation from './modules/message-conversation';
import messageCsatDistribution from './modules/message-csat-distribution';
import messageStatus from './modules/message-conversation';

Vue.use(Vuex);

const state = {
  dataInt: [],
  queueHealthData: {
  },
  engagementActivityData: {
  },
  agentActivityData: {
  },
  currentQueueData: {
  },
  slaData: {
  }
};

const mutations = {
  'SET_DASH' (state, dataInt) {
    state.dataInt = dataInt;
  },
  'FETCH_QUEUE_HEALTH' (state, queueHealthData) {
    state.queueHealthData = queueHealthData;
  },
  'FETCH_ENGAGEMENT_ACTIVITY' (state, engagementActivityData) {
    state.engagementActivityData = engagementActivityData;
  },
  'FETCH_AGENT_ACTIVITY' (state, agentActivityData) {
    state.agentActivityData = agentActivityData;
  },
  'FETCH_CURRENT_QUEUE' (state, currentQueueData) {
    state.currentQueueData = currentQueueData;
  },
  'FETCH_SLA' (state, slaData) {
    state.slaData = slaData;
  }
};

const actions = {
  initData: ({commit}) => {
    commit('SET_DASH',dataInt);
  },
  fetchQueueHealth2: ({ commit }) => {
    axios.get(config.apiURL + '/api/v1/getQueueHealth')
      .then(response => {
        commit("FETCH_QUEUE_HEALTH", response.data);
      })
      .catch(error => {
        console.log(error.statusText);
      });
  },
  fetchQueueHealth: ({ commit }) => {
    commit('FETCH_QUEUE_HEALTH', qh);
  },
  fetchEngagementActivity: ({ commit }) => {
    commit('FETCH_ENGAGEMENT_ACTIVITY', engagementActivity.body);
  },
  fetchAgentActivity: ({ commit }) => {
    commit('FETCH_AGENT_ACTIVITY', agentActivity);
  },
  fetchCurrentQueue: ({ commit }) => {
    commit('FETCH_CURRENT_QUEUE', currentQueue);
  },
  fetchSLA: ({ commit }) => {
    commit('FETCH_SLA', SLA);
  }
};

const getters = {
  dataInt: state => {
    return state.dataInt;
  },
  queueHealthData: state => {
    return state.queueHealthData;
  },
  engagementActivityData: state => {
    return state.engagementActivityData;
  },
  agentActivityData: state => {
    return state.agentActivityData;
  },
  currentQueueData: state => {
    return state.currentQueueData;
  },
  slaData: state => {
    return state.slaData;
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    auth,
    messageSummary,
    messageConversation,
    messageCsatDistribution,
    messageStatus
  }
});
