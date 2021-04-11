<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-style">
        <el-breadcrumb-item
            v-for="item in breadList"
            :key="item.path"
            :to="item.path">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    data() {
        return {
            breadList: []
        }
    },
    watch: {
        $route(route){
            if (route.path.startsWith('/redirect/')) {
                return
            }
            this.getBreadcrumb();
        }
    },
    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
            const first = matched[0]
            if (!this.isDashboard(first)) {
                matched = [{path: '/dashboard', meta:{ title: 'Dashboard'}}].concat(matched);
            }
            this.breadList = matched;
        },
        isDashboard(route) {
            const name = route && route.name;
            if (!name) {
                return false;
            }
            return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase();
        }
    },
    created() {
        this.getBreadcrumb();
    }
}
</script>
<style lang="less" scope>
    .breadcrumb-style {
        float: left;
        margin-left: 20px;
        span {
            line-height: 50px;
        }
    }
</style>