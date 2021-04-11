import defaultSetting from '@/setting.js';
import Cookies from 'js-cookie';

const { sideBarLogo } = defaultSetting;


const state = {
    sideBarLogo: sideBarLogo,
    sidebar: {
        opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true
    },
}

const mutations = {
    SIDEBAR_LOGO:(state, data) => {
        state.sideBarLogo = data
    },
    TOGGLE_SIDEBAR:(state) => {
        state.sidebar.opened = !state.sidebar.opened
        if (state.sidebar.opened) {
            Cookies.set('sidebarStatus', 1);
        } else {
            Cookies.set('sidebarStatus', 0);
        }
    },
}

const actions = {
    openSideBar({ commit }) {
        commit('OPEN_SIDEBAR')
    },
    toggleSideBar({ commit }) {
        console.log(222222);
        commit('TOGGLE_SIDEBAR')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}