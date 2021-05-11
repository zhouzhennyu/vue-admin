import { constantRoutes, asyncRoutes } from '@/router';



const state = {
    routes: []
}

function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.role.includes(role));
    } else {
        return true;
    }
}
function filterAsyncRoutes(routes, roles) {
    // const res = [];
    routes.forEach(item => {
        const tmp = { ...item }
        if (hasPermission(roles, tmp)) {
            console.log(111);
        }
    });
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.routes = constantRoutes.concat(routes);
    }
}

const actions = {
    generateRoutes({ commit }, roles) {
        return new Promise((resolve) => {
            let accessedRoutes;
            if (roles.includes('admin')) {
                accessedRoutes = asyncRoutes || [];
            } else {
                accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            }
            commit('SET_ROUTES', accessedRoutes);
            resolve(accessedRoutes);
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}