<template>
    <div class="main-container">
        <sideBar />
        <appMain />
    </div>
</template>
<script>
import sideBar from './components/sideBar';
import appMain from './components/appMain';
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
    .main-container {
        height: 100%;
    }
</style>