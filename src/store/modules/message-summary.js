'use strict';

import msgSummary from '../../data/msg-summary';

const state = {
  messageSummary: {}
};

const mutations = {
  'FETCH_MSG_SUMMARY' (state, messageSummary) {
    state.messageSummary = messageSummary;
  }
};

const actions = {
  fetchMessageSummary: ({ commit }) => {
    commit('FETCH_MSG_SUMMARY', msgSummary);
  }
};

const getters = {
  messageSummary: state => {
    return state.messageSummary;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
