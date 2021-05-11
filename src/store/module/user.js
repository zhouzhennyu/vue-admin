import { getToken, setToken } from "@/utils/auth";
import { login, getInfo, logout } from '@/api/user';

const state = {
    token: getToken(),
    name: '',
    roles: [],
    introduction: '',
    avatar: ''
}

const mutations = {
    SET_TOKEN: (state, data) => {
        state.token = data;
    },
    SET_NAME: (state, data) => {
        state.name = data;
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
    },
    SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
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
    },
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(res => {
                const { data } = res;
                if (!data) {
                    reject('Verification failed, please Login again.');
                }
                
                const { roles, name, avatar, introduction } = data;
                if (!roles || roles.length <= 0) {
                    reject('getInfo: roles must be a non-null array!')
                }

                commit('SET_ROLES', roles);
                commit('SET_NAME', name);
                commit('SET_AVATAR', avatar);
                commit('SET_INTRODUCTION', introduction);
                resolve(data);
            }).catch((err) => {
                reject(err);
            })
        })
    },
    logout() {
        return new Promise((resolve, reject) => {
            logout()
            .then(() => {})
            .catch(err => {
                reject(err);
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