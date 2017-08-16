const state = {
    userCredentials: [],
    userKeys: [],
    authenticated: null,
    usingKeys: null
};

const mutations = {
        'LE_AUTH' (state, {username, password, loginApi}) {
        state.userCredentials = [username,password,loginApi]
        state.usingKeys = false
        state.authenticated = true
    },
        'KEYS_AUTH' (state, {account,apiKey,secret,accessToken,accessSecret}) {
            state.userKeys = [account,apiKey,secret,accessToken,accessSecret]
            state.usingKeys = true
            state.authenticated = true
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
    userCredentials: state => {
        return state.userCredentials;
    },
    userKeys: state => {
        return state.userKeys;
    },
    usingKeys: state => {
        return state.usingKeys;
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}