<template>
    <div class="app-wrapper">
        <side-bar />
        <div class="main-container" :class="{'close-main-container': toggleMenu}">
            <nav-bar />
            <app-main />
        </div>
    </div>
</template>
<script>
import SideBar from './components/SideBar/index';
import AppMain from './components/AppMain';
import NavBar from './components/NavBar';
import { mapState } from 'vuex'
export default {
    data() {
        return {
            
        } 
    },
    components: {
        SideBar,
        AppMain,
        NavBar
    },
    computed: {
        ...mapState({
            toggleMenu: state => state.setting.sidebar.opened
        })
    }
}
</script>
<style lang="less" scoped>
.app-wrapper {
    height: 100%;
    .main-container {
        margin-left: 200px;
        transition: all 0.3s;
    }
    .close-main-container {
        margin-left: 64px !important;
    }
}
</style>