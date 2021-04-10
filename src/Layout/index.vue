<template>
    <div class="app-wrapper">
        <sideBar />
        <div class="main-container">
            
            <appMain />
        </div>
        
    </div>
</template>
<script>
import sideBar from './components/SideBar/index';
import appMain from './components/AppMain';
export default {
    data() {
        return {
            
        } 
    },
    components: {
        sideBar,
        appMain
    }
}
</script>
<style lang="less" scope>
    .app-wrapper {
        height: 100%;
    }
</style>