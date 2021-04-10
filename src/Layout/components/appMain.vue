<template>
    <div class="app-main-container">
        <transition name="fade-transform" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    components: {

    }
}
</script>
<style lang="less" scope>
    .app-main-container {
        margin-left: 200px;
    }
</style>