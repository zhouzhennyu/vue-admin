<template>
    <div class="navbar-container">
        <div class="collapse-box" @click="handleCollapse">
            <i class="collapse-icon" :class="{'el-icon-s-fold': toggleMenu, 'el-icon-s-unfold': !toggleMenu}"></i>
        </div>
        <breadcrumb />
        <div>

        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb';
export default {
    data() {
        return {
            collapseState: true    //默认为true展开状态，false为收齐状态
        }
    },
    computed: {
        ...mapState({
            toggleMenu: state => state.setting.sidebar.opened
        })
    },
    components: {
        Breadcrumb
    },
    methods: {
        handleCollapse() {
            this.$store.dispatch('setting/toggleSideBar')
        }
    }
}
</script>
<style lang="less" scope>
    .navbar-container {
        height: 50px;
        line-height: 50px;
        background: #fff;
        overflow: hidden;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    }
    .collapse-box {
        float: left;
        margin-left: 10px;
        cursor: pointer;
        .collapse-icon {
            font-size: 28px;
            vertical-align: middle;
        }
    }
</style>