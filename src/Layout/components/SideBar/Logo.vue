<template>
    <div class="sidebar-logo-container">
        <transition>
            <router-link class="sidebar-logo-link" to="/">
                <img class="sidebar-logo-img" :src="logo" alt="">
                <h1 class="sidebar-logo-title">{{ title }}</h1>
            </router-link>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Vue Element Admin',
            logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
        }
    }
}
</script>
<style lang="less" scope>
    .sidebar-logo-container {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        overflow: hidden;
        background-color: #2b2f3a;
    }
    .sidebar-logo-link {
        width: 100%;
        height: 100%;
        .sidebar-logo-img {
            width: 32px;
            height: 32px;
            vertical-align: middle;
            margin-right: 12px;
        }
        .sidebar-logo-title {
            display: inline-block;
            margin: 0;
            color: #fff;
            font-weight: 600;
            line-height: 50px;
            font-size: 14px;
            font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
            vertical-align: middle;
        }
    }
</style>