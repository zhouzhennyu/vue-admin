import { getToken, setToken } from "@/utils/auth";
import { login } from '@/api/user';

const state = {
    token: getToken(),
    name: '',
    roles: []
}

const mutations = {
    SET_TOKEN: (state, data) => {
        state.token = data;
    },
    SET_NAME: (state, data) => {
        state.name = data;
    },
    SET_ROLES: (state, data) => {
        state.roles = data;
    }
}

const actions = {
    login({ commit }, userInfo) {
        const { user, pass } = userInfo;
        return new Promise((resolve, reject) => {
            login({ username: user.trim(), password: pass }).then(res => {
                const { data } = res;
                commit('SET_TOKEN', data.token);
                setToken(data.token);
                resolve()
            }).catch((error) => {
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}