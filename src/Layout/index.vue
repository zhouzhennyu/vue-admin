<template>
    <div class="app-wrapper">
        <side-bar />
        <div class="main-container">
            <nav-bar />
            <app-main />
        </div>
        
    </div>
</template>
<script>
import SideBar from './components/SideBar/index';
import AppMain from './components/AppMain';
import NavBar from './components/NavBar';
export default {
    data() {
        return {
            
        } 
    },
    components: {
        SideBar,
        AppMain,
        NavBar
    }
}
        NavBar
</script>
<style lang="less" scope>
    .app-wrapper {
        height: 100%;
    }
    .main-container {
        margin-left: 200px;
    }
</style>