<template>
    <div v-if="!item.hidden">
        <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
            <appLink v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ onlyOneChild.meta.title }}</span>
                </el-menu-item>
            </appLink>
        </template>

        <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.meta.title }}</span>
            </template>
            <sidebar-item
                v-for="child in item.children" 
                :key="child.path" 
                :item="child" 
                :basePath="resolvePath(child.path)"
            />
        </el-submenu>   
    </div>
</template>
<script>
import appLink from './Link'
import path from 'path'
import { isExternal } from '@/utils/validate';
export default {
    name: 'SidebarItem',
    props: {
        item: {
            type: Object,
            default: () => {}
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    components: {
        appLink
    },
    data() {
        this.onlyOneChild = null
        return {
        }
    },
    computed: {
    },
    methods: {
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter(item => {
                if (item.hideen) {
                    return false;
                } else {
                    this.onlyOneChild = item;
                    return true
                }
            })
            if (showingChildren.length === 1) {
                return true;
            }
            if (showingChildren.length === 0) {
                this.onlyOneChild = {...parent, path: '', noShowingChildren: true};
                return true
            }
            return false
        },
        resolvePath(routerPath) {
            if (isExternal(routerPath)) {
                return routerPath;
            }
            if (isExternal(this.basePath)) {
                return this.basePath;
            }
            return path.resolve(this.basePath, routerPath);
        }
    },
    created() {
        console.log(666, this.item)
    }
}
</script>
<style lang="less" scope>
</style>