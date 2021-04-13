import { getToken } from "@/utils/auth";

const state = {
    token: getToken(),
    name: '',
}

const mutations = {
    SET_TOKEN: (state, data) => {
        state.token = data;
    },
    SET_NAME: (state, data) => {
        state.name = data;
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}