<template>
    <div class="app-main-container">
        <transition>
            <router-view></router-view>
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