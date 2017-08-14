const state = {
    userCredentials: [],
    userKeys: []
};

const mutations = {
        'LE_AUTH' (state, {username, password, loginApi}) {
        state.userCredentials = [username,password,loginApi]
    },
        'KEYS_AUTH' (state, {account,apiKey,secret,accessToken,accessSecret}) {
            state.userKeys = [account,apiKey,secret,accessToken,accessSecret]
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
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}