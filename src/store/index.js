import Vue from "vue";
import Vuex from "vuex";
import permission from './module/permission';
import setting from './module/setting';
import user from './module//user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        permission,
        setting,
        user
    }
});
