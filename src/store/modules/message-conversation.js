'use strict';

import msgConversation from '../../data/msgconversation';

const state = {
  messageConversation: {}
};

const mutations = {
  'FETCH_MSG_CONVERSATION' (state, messageConversation) {
    state.messageConversation = messageConversation;
  }
};

const actions = {
  fetchMessageConversation: ({ commit }) => {
    commit('FETCH_MSG_CONVERSATION', msgConversation);
  }
};

const getters = {
  messageConversation: state => {
    return state.messageConversation;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
