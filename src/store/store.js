import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import config from '../config.js';

import dataInt from '../data/dataInt';
import qh from '../data/queueHealth';
import engagementActivity from '../data/engagementActivity';
import agentActivity from '../data/agentActivity';

Vue.use(Vuex);

const state = {
  dataInt: [],
  queueHealthData: {
  },
  engagementActivityData: {
  },
  agentActivityData: {
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
    commit('FETCH_ENGAGEMENT_ACTIVITY', engagementActivity);
  },
  fetchAgentActivity: ({ commit }) => {
    commit('FETCH_AGENT_ACTIVITY', agentActivity);
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
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
