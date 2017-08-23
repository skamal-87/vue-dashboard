'use strict';

import msgStatus from '../../data/msg-status';

const state = {
  messageStatus: {}
};

const mutations = {
  'FETCH_MSG_STATUS' (state, messageStatus) {
    state.messageStatus = messageStatus;
  }
};

const actions = {
  fetchMessageStatus: ({ commit }) => {
    commit('FETCH_MSG_STATUS', msgStatus);
  }
};

const getters = {
  messageStatus: state => {
    return state.messageStatus;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
