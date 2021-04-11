<template>
    <div class="side-bar-container">
        <logo v-if="showSidebarLogo" />
        <el-menu
            :default-active="activeMenu"
            class="side-bar-container"
            background-color="#304156"
            text-color="#ffffff"
            active-text-color="#1890ff"
            mode="vertical"
            :unique-opened="false"
            :collapse-transition="true"
            :collapse="toggleMenu"
            @open="handleOpen"
            @close="handleClose">
            <sidebar-item 
                v-for="route in permissionRoute" 
                :key="route.path" 
                :item="route" 
                :basePath="route.path"
            />
        </el-menu>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import SidebarItem from './SidebarItem';
import Logo from './Logo';
export default {
    data() {
        return {

        }
    },
    components: {
        Logo,
        SidebarItem
    },
    computed: {
        ...mapState({
            permissionRoute: state => state.permission.routes,
            showSidebarLogo: state => state.setting.sideBarLogo,
            toggleMenu: state => state.setting.sidebar.opened
        }),
        activeMenu() {
            return this.$route.path;
        }
    },
    methods: {
        handleOpen() {

        },
        handleClose() {

        }
    },
    created() {
    }
}
</script>
<style lang="less" scope>
    .side-bar-container {
        width: 200px;
        height: 100%;
        background-color: #304156;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        overflow: hidden;
    }
</style>