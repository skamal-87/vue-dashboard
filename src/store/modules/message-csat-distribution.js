'use strict';

import msgCsatDistribution from '../../data/msgcsatdistribution';

const state = {
  messageCsatDistribution: {}
};

const mutations = {
  'FETCH_MSG_CSAT_DISTRIBUTION' (state, messageCsatDistribution) {
    state.messageCsatDistribution = messageCsatDistribution;
  }
};

const actions = {
  fetchMessageCsatDistribution: ({ commit }) => {
    commit('FETCH_MSG_CSAT_DISTRIBUTION', msgCsatDistribution);
  }
};

const getters = {
  messageCsatDistribution: state => {
    return state.messageCsatDistribution;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
