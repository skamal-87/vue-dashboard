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
    metricsTotals: {
      avgTimeToAnswer: null
    }
  }
};

const mutations = {
  'SET_DASH' (state, dataInt) {
    state.dataInt = dataInt;
  },
  'FETCH_QUEUE_HEALTH' (state, queueHealthData) {
    state.queueHealthData = queueHealthData;
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
    commit('FETCH_QUEUE_HEALTH',qh);
  },
};

const getters = {
  dataInt: state => {
    return state.dataInt;
  },
  queueHealthData: state => {
    return state.queueHealthData;
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
