import { constantRoutes } from '@/router';



const state = {
    routes: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.routes = routes;
    }
}

const actions = {
    generateRoutes({ commit }) {
        return new Promise((resolve) => {
            let accessedRoutes = constantRoutes || [];
            commit('SET_ROUTES', accessedRoutes);
            resolve(constantRoutes);
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}