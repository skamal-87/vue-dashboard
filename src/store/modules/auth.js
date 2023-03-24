const state = {
    authBody: {
        userCredentials: {
          userName: '',
          password: '',
          accountNumber: '',
          bearer: ''
        },
        userKeys: {},
        authenticated: false,
        usingKeys: null
    }
};

const mutations = {
        'LE_AUTH' (state, {userName, password, loginApi,accountNumber,bearer}) {
        state.authBody.userCredentials = {userName,password,loginApi,accountNumber,bearer}
        state.authBody.usingKeys = false
        state.authBody.authenticated = true
    },
        'KEYS_AUTH' (state, {account,apiKey,secret,accessToken,accessSecret}) {
            state.authBody.userKeys = {account,apiKey,secret,accessToken,accessSecret}
            state.authBody.usingKeys = true
            state.authBody.authenticated = true
    }
};

const actions = {
    leAuth: ({ commit }, credentials) => {
        commit('LE_AUTH', credentials);
    },
    keysAuth: ({ commit }, apiKeys) => {
        commit('KEYS_AUTH', apiKeys);
    }
};

const getters = {
    userAuthBody: state => {
        return state.authBody;
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}
